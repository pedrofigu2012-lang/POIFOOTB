const initialPlayers = [
 ["Agustín Rossi","GOL",30,84, "R$ 18 mi"],["Wesley","LD",22,78,"R$ 9 mi"],["Léo Ortiz","ZAG",30,82,"R$ 14 mi"],
 ["Léo Pereira","ZAG",30,81,"R$ 12 mi"],["Alex Sandro","LE",34,80,"R$ 7 mi"],["Erick Pulgar","VOL",31,81,"R$ 11 mi"],
 ["Gerson","MC",28,84,"R$ 25 mi"],["Arrascaeta","MEI",31,88,"R$ 30 mi"],["Gonzalo Plata","PD",25,80,"R$ 15 mi"],
 ["Pedro","ATA",28,87,"R$ 28 mi"],["Bruno Henrique","PE",34,83,"R$ 13 mi"]
];
const clubs = ["Flamengo","Palmeiras","Botafogo","Atlético-MG","São Paulo","Fluminense","Corinthians","Internacional","Grêmio","Bahia"];
const marketPlayers = [
 {name:"Matheus França",pos:"MEI",age:21,ovr:77,price:8.5},
 {name:"Vitor Roque",pos:"ATA",age:21,ovr:82,price:22},
 {name:"André",pos:"VOL",age:24,ovr:83,price:18},
 {name:"Kaiky",pos:"ZAG",age:22,ovr:75,price:5.5}
];
let state = JSON.parse(localStorage.getItem("brasfootSave") || "null") || {
 round:1,points:0,wins:0,draws:0,losses:0,budget:18.5,results:[],players:initialPlayers,
 table:clubs.map((name,i)=>({name,pts: i===0?0:Math.max(0,18-i*2),j:0,v:0,sg:0})),
 formation:"4-3-3",style:"balanced"
};
const $ = id => document.getElementById(id);
function save(){localStorage.setItem("brasfootSave",JSON.stringify(state));}
function money(v){return "R$ "+v.toFixed(1).replace(".",",")+" mi";}
function toast(msg){$("toast").textContent=msg;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),2400);}
function render(){
 $("round").textContent=state.round;$("points").textContent=state.points;$("wins").textContent=state.wins;
 $("cash").textContent=money(state.budget);$("budget").textContent=money(state.budget);
 $("position").textContent=(state.table.slice().sort((a,b)=>b.pts-a.pts).findIndex(t=>t.name==="Flamengo")+1)+"º";
 $("nextOpponent").textContent="Flamengo x "+clubs[(state.round)%clubs.length];
 $("results").innerHTML=state.results.length?state.results.slice().reverse().map(r=>`<div class="result-row"><span>${r.opponent}</span><b class="score ${r.outcome}">${r.score}</b><span class="${r.outcome}">${r.label}</span></div>`).join(""):'<p class="empty">Você ainda não disputou nenhuma partida.</p>';
 $("squadCount").textContent=state.players.length+" jogadores";
 $("squadTable").innerHTML=state.players.map(p=>`<tr><td>${p[0]}</td><td>${p[1]}</td><td>${p[2]}</td><td class="rating">${p[3]}</td><td>${p[4]}</td></tr>`).join("");
 $("leagueTable").innerHTML=state.table.slice().sort((a,b)=>b.pts-a.pts).map((t,i)=>`<tr><td>${i+1}</td><td>${t.name}</td><td><b>${t.pts}</b></td><td>${t.j}</td><td>${t.v}</td><td>${t.sg>0?"+":""}${t.sg}</td></tr>`).join("");
 $("market").innerHTML=marketPlayers.map((p,i)=>`<div class="market-player"><div class="market-avatar">${p.ovr}</div><div class="market-info"><b>${p.name}</b><small>${p.pos} • ${p.age} anos • GER ${p.ovr} • ${money(p.price)}</small></div><button class="buy" onclick="buyPlayer(${i})" ${state.budget<p.price?"disabled":""}>CONTRATAR</button></div>`).join("");
 $("formation").value=state.formation;$("style").value=state.style;
}
function playMatch(){
 if(state.round>10){toast("Temporada encerrada! Reinicie para jogar novamente.");return;}
 const opponent=clubs[state.round%clubs.length];
 const teamPower=state.players.reduce((s,p)=>s+p[3],0)/state.players.length;
 const tacticBonus=state.style==="attack"?2:state.style==="defense"?-1:state.style==="possession"?1:0;
 const home=Math.random()*2.8+0.5;
 const away=Math.random()*2.4+0.3;
 let myGoals=Math.max(0,Math.round((teamPower/30+home+tacticBonus/2-3.2)+(Math.random()*1.7)));
 let theirGoals=Math.max(0,Math.round((79/30+away-(state.style==="defense"?0.6:0)+(Math.random()*1.5)-3.1)));
 let outcome="draw",label="EMPATE";
 if(myGoals>theirGoals){outcome="win";label="VITÓRIA";state.points+=3;state.wins++;state.budget+=1.2;}
 else if(myGoals<theirGoals){outcome="loss";label="DERROTA";state.losses++;}
 else {state.points++;state.draws++;state.budget+=0.4;}
 state.results.push({opponent,score:`${myGoals} x ${theirGoals}`,outcome,label});
 const me=state.table.find(t=>t.name==="Flamengo"),opp=state.table.find(t=>t.name===opponent);
 me.j++;opp.j++;me.sg+=myGoals-theirGoals;opp.sg+=theirGoals-myGoals;
 if(outcome==="win"){me.pts+=3;me.v++;}else if(outcome==="draw"){me.pts++;opp.pts++;}else{opp.pts+=3;opp.v++;}
 state.round++;save();render();toast(`${label}! Flamengo ${myGoals} x ${theirGoals} ${opponent}`);
}
function buyPlayer(i){
 const p=marketPlayers[i];if(state.budget<p.price)return toast("Orçamento insuficiente!");
 if(state.players.some(x=>x[0]===p.name))return toast("Este jogador já está no elenco.");
 state.budget-=p.price;state.players.push([p.name,p.pos,p.age,p.ovr,money(p.price)]);
 save();render();toast(p.name+" contratado com sucesso!");
}
window.buyPlayer=buyPlayer;
document.querySelectorAll(".nav").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".nav").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
 document.querySelectorAll(".tab-panel").forEach(p=>p.classList.remove("active"));$(btn.dataset.tab).classList.add("active");
 $("pageTitle").textContent=btn.querySelector("span").textContent;
}));
$("playMatch").addEventListener("click",playMatch);
$("saveTactics").addEventListener("click",()=>{state.formation=$("formation").value;state.style=$("style").value;save();toast("Táticas salvas! Boa partida, professor.");});
$("formation").addEventListener("change",()=>{$("tacticsMsg").textContent="Formação selecionada: "+$("formation").value+". Salve para confirmar.";});
render();
