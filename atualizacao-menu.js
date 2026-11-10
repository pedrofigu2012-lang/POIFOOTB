/* POIFOOTB — menu temático, agenda completa e copas automáticas (modo carreira). */
(function(){
'use strict';
const colors=[
 [/flamengo/i,['#d71920','#101114']],[/corinthians/i,['#f5f5f5','#171717']],[/palmeiras/i,['#147a4b','#f4f4ed']],[/santos/i,['#f5f5f5','#151515']],[/são paulo|sao paulo/i,['#d52832','#141414']],[/fluminense/i,['#8b213a','#176a4b']],[/botafogo/i,['#eeeeee','#151515']],[/vasco/i,['#f2f2f2','#171717']],[/grêmio|gremio/i,['#49a9db','#101c2c']],[/internacional/i,['#c9182c','#ffffff']],[/cruzeiro/i,['#1557be','#ffffff']],[/atlético.mineiro|atletico.mineiro/i,['#f5f5f5','#161616']],[/athletico|atlético.paranaense|atletico.paranaense/i,['#c91b2d','#151515']],[/coritiba/i,['#178a48','#ffffff']],[/bahia/i,['#2460bb','#dc283a']],[/fortaleza/i,['#1b55ac','#d91c30']],[/sport/i,['#bd1928','#141414']],[/vitória|vitoria/i,['#d41b27','#171717']],[/boca juniors/i,['#163d8c','#e9bb37']],[/river plate/i,['#f2f2f2','#d92734']],[/racing/i,['#4aa9e3','#f2f2f2']],[/independiente/i,['#c71929','#f2f2f2']],[/san lorenzo/i,['#15398a','#b81f32']],[/estudiantes/i,['#c51e2d','#ffffff']],[/barcelona/i,['#a31637','#163b8e']],[/real madrid/i,['#f6f4ee','#7258a7']],[/manchester city/i,['#66b9df','#ffffff']],[/liverpool/i,['#b51d2a','#f5f5f5']],[/arsenal/i,['#cc2433','#ffffff']],[/chelsea/i,['#1855a7','#ffffff']],[/juventus/i,['#f6f6f6','#111111']],[/milan/i,['#c5202e','#141414']],[/inter de milão|internazionale/i,['#1654b3','#141414']],[/bayern/i,['#d51e2f','#ffffff']],[/psg|paris saint/i,['#18365f','#d92337']]
];
const normalize=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function teamTheme(){
 let name='';try{if(state.club!==null)name=careerName()}catch(e){}
 const hit=colors.find(([pattern])=>pattern.test(name));
 const primary=hit?hit[1][0]:'#2fc58e',secondary=hit?hit[1][1]:'#102a25';
 const whitePrimary=/^#(?:f[0-9a-f]|e[0-9a-f])/.test(primary.toLowerCase());
 const root=document.documentElement;
 root.style.setProperty('--club-primary',primary);root.style.setProperty('--club-secondary',secondary);
 root.style.setProperty('--club-on-primary',whitePrimary?'#14191d':'#ffffff');
 root.style.setProperty('--club-accent',whitePrimary?secondary:primary);
 root.style.setProperty('--club-light',whitePrimary?'#ffffff':'#f4f8f7');
 document.body.dataset.clubTheme=normalize(name).replace(/[^a-z0-9]+/g,'-');
 const shield=document.getElementById('shield');if(shield)shield.title=name+' • cores do clube';
}
function cupIncludes(cup,uid){
 if(!cup||cup.notScheduled||cup.champion!==null)return false;
 const inGroupStage=Number.isFinite(cup.round)&&cup.round<6;
 const vals=inGroupStage?[cup.groups,cup.groupTables]:[cup.remaining,cup.knockout];
 const walk=(v,depth=0)=>depth<5&&(Array.isArray(v)?v.some(x=>walk(x,depth+1)):v&&typeof v==='object'?(v.uid===uid||v.a===uid||v.b===uid||Object.values(v).some(x=>walk(x,depth+1))):v===uid);
 return vals.some(x=>walk(x));
}
function autoOtherCups(){
 if(typeof state==='undefined'||state.club===null||typeof multiplayer!=='undefined'&&multiplayer||typeof liveMatch!=='undefined'&&liveMatch)return;
 const uid=clubUid(careerLeague(),state.careerClub);
 const day=state.dayOfYear||1;
 // Simulação gradual de copas em que o clube não joga. Não toca nos confrontos do usuário.
 const sources=[...(state.nationalCups||[]).map(c=>({cup:c,kind:'knockout'})),{cup:state.champions,kind:'knockout'},{cup:state.worldCup,kind:'knockout'},{cup:state.continental,kind:'libertadores'},{cup:state.sudamericana,kind:'sudamericana'}];
 for(const {cup,kind} of sources){
  if(!cup||cup.notScheduled||cup.champion!==null||cupIncludes(cup,uid))continue;
  const key='__poiAutoStage';if(cup[key]===day)continue;
  cup[key]=day;
  if(kind==='knockout')simulateKnockout(cup);
  else if(kind==='libertadores')simulateLibertadores();
  else simulateSudamericana();
 }
}
const originalRender=render;
render=function(){originalRender();teamTheme();
 const top=document.getElementById('managerTopnav');
 if(top&&!top.querySelector('[data-jump="newspaper"]')){
  const btn=document.createElement('button');btn.dataset.jump='newspaper';btn.textContent='📰 Jornal';top.appendChild(btn);
  btn.onclick=()=>{state.page='newspaper';save();render()};
 }
 const nav=document.getElementById('nav');if(nav){
  nav.querySelectorAll('button').forEach(b=>b.classList.toggle('poi-current',b.dataset.page===state.page));
 }
};
const oldAdvance=advanceDay;
advanceDay=function(){const prev=state.dayOfYear;oldAdvance();if(state.dayOfYear!==prev){autoOtherCups();save();render()}};
// Agenda: todos os jogos de liga restantes + compromissos atuais de copas + histórico.
const oldCalendar=renderCalendarPage;
renderCalendarPage=function(){
 const original=oldCalendar();if(state.club===null)return original;
 const all=calendarFixtures();
 const league=all.filter(f=>f.kind==='league');
 const cup=all.filter(f=>f.kind!=='league');
 const finished=(state.results||[]).filter(r=>r&&r.year===state.year&&r.opponent).map(r=>({label:'Campeonato • Rodada '+r.round,opponent:r.opponent,score:r.own+' × '+r.other}));
 const esc=poiEscape;
 const list=(items,played=false)=>items.map(f=>`<div class="poi-fixture"><span class="poi-fixture-date">${played?'✓ Finalizado':calendarDayText(f.day)}</span><div><strong>${esc(f.label)}</strong><small>${esc(f.opponent)}</small></div>${played?`<b>${esc(f.score)}</b>`:`<button class="secondary" data-calendar-page="${esc(f.page)}">Ver jogo</button>`}</div>`).join('');
 const intro=`<section class="panel poi-schedule"><h2>📆 Agenda completa do ${esc(careerName())}</h2><p class="muted">${league.length} jogos restantes da liga • ${cup.length} compromissos de copas já definidos • ${finished.length} partidas de liga concluídas. Próximos confrontos de mata-mata aparecem após cada classificação.</p><div class="poi-schedule-grid"><div><h3>🏟️ Liga — todos os jogos restantes</h3>${list(league)||'<p>Temporada da liga concluída.</p>'}</div><div><h3>🏆 Copas e torneios</h3>${list(cup)||'<p>Sem jogos de copa definidos para o seu clube. Torneios sem sua participação são simulados automaticamente ao avançar os dias.</p>'}<h3 style="margin-top:24px">✔ Resultados do seu clube</h3>${list(finished.slice().reverse(),true)||'<p>Ainda não há resultados.</p>'}</div></div></section>`;
 return original+intro;
};
// Substitui a função do calendário no mapa de páginas por um adaptador, sem alterar os saves.
const originalRender2=render;
render=function(){originalRender2();if(state.page==='calendar'&&state.club!==null){
 const app=document.getElementById('app');if(app&&!app.querySelector('.poi-schedule')){
  const extra=renderCalendarPage();const marker=extra.indexOf('<section class="panel poi-schedule">');if(marker>=0)app.insertAdjacentHTML('beforeend',extra.slice(marker));
 }
 document.querySelectorAll('.poi-schedule [data-calendar-page]').forEach(b=>b.onclick=()=>{state.page=b.dataset.calendarPage;save();render()});
 }};
teamTheme();
})();
