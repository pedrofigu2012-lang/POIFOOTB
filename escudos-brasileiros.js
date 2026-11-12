(()=>{
const logos={"Athletico-PR": "escudos/athletico-pr.png", "Atlético-MG": "escudos/atlético-mg.png", "Bahia": "escudos/bahia.png", "Botafogo": "escudos/botafogo.png", "Red Bull Bragantino": "escudos/red-bull-bragantino.png", "Chapecoense": "escudos/chapecoense.png", "Corinthians": "escudos/corinthians.png", "Coritiba": "escudos/coritiba.png", "Cruzeiro": "escudos/cruzeiro.png", "Flamengo": "escudos/flamengo.png", "Fluminense": "escudos/fluminense.png", "Grêmio": "escudos/grêmio.png", "Internacional": "escudos/internacional.png", "Mirassol": "escudos/mirassol.png", "Palmeiras": "escudos/palmeiras.png", "Remo": "escudos/remo.png", "São Paulo": "escudos/são-paulo.png", "Santos": "escudos/santos.png", "Vasco": "escudos/vasco.png", "Vitória": "escudos/vitória.png"};
const alias={'Athletico Paranaense':'Athletico-PR','Athletico':'Athletico-PR','Atlético Paranaense':'Athletico-PR','Atlético Mineiro':'Atlético-MG','Atlético-MG':'Atlético-MG','RB Bragantino':'Red Bull Bragantino','Bragantino':'Red Bull Bragantino','São Paulo FC':'São Paulo','Santos FC':'Santos','SC Internacional':'Internacional','Vasco da Gama':'Vasco','EC Vitória':'Vitória','Coritiba FC':'Coritiba','Grêmio FBPA':'Grêmio','CR Flamengo':'Flamengo'};
function resolve(name){const clean=String(name||'').trim().replace(/\s+/g,' ');return logos[clean]?clean:(alias[clean]||null)}
function emblem(name){const id=resolve(name);if(!id)return null;const img=document.createElement('img');img.src=logos[id];img.alt='Escudo do '+id;img.className='poi-team-emblem';img.loading='lazy';return img}
function enhance(){
 const app=document.getElementById('app');
 if(app){
  app.querySelectorAll('button.club-link,button[data-viewclub],button[data-club],button[data-selectclub],td,th,h2,h3,h4,.club-name,.team-name,.clubtitle').forEach(el=>{
   if(el.dataset.poiLogoDone)return;
   const name=resolve(el.textContent);
   if(!name)return;
   const img=emblem(name);if(!img)return;
   el.dataset.poiLogoDone='1';el.prepend(img);el.classList.add('poi-with-emblem');
   if(el.matches('button.club-link,button[data-viewclub],button[data-club],button[data-selectclub]')){el.classList.add('poi-logo-button');el.title=name;el.setAttribute('aria-label','Ver clube '+name);const nodes=[...el.childNodes].filter(n=>n.nodeType===Node.TEXT_NODE&&n.textContent.trim());nodes.forEach(n=>{const span=document.createElement('span');span.className='poi-logo-button-name';span.textContent=n.textContent;n.replaceWith(span)})}
  });
 }
 const shield=document.getElementById('shield'),title=document.getElementById('clubtitle');
 if(shield&&title){const name=resolve(title.textContent);if(name&&shield.dataset.poiShield!==name){
  shield.dataset.poiShield=name;shield.textContent='';const img=emblem(name);if(img){img.className='poi-shield-emblem';shield.append(img)}
 }}
}
let pending=false;
const observer=new MutationObserver(()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;enhance()})});
function boot(){enhance();observer.observe(document.body,{childList:true,subtree:true,characterData:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
window.poiClubEmblem=emblem;
})();
