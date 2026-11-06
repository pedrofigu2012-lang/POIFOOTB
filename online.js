/* POIFOOTB Online - salas privadas, turnos em tempo real via Firebase RTDB.
 * Cada treinador controla uma vaga. O mundo compartilhado e sincronizado entre navegadores.
 * Requer configuracao e regras Firebase descritas no LEIA-ME-ONLINE.txt.
 */
(()=>{
 'use strict';
 let roomId=null,seat=-1,uid=null,ref=null,connected=false,loading=false,applying=false;
 let revision=-1, lastSent=-1, queued=null, sending=false, unsubscribe=null;
 const baseSave=save,baseRender=render;
 const panel=document.createElement('section');panel.id='online-panel';panel.className='panel';
 document.querySelector('main .heading')?.after(panel);
 const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function ready(){const c=window.POIFOOTB_FIREBASE_CONFIG;return !!(c&&c.apiKey&&!c.apiKey.startsWith('COLE_')&&c.databaseURL&&!c.databaseURL.includes('COLE_')&&window.firebase)}
 let db=null,auth=null;
 async function init(){if(!ready())throw Error('Configure firebase-config.js e publique as regras do banco antes de criar salas.');if(!firebase.apps.length)firebase.initializeApp(window.POIFOOTB_FIREBASE_CONFIG);auth=firebase.auth();db=firebase.database();if(!auth.currentUser)await auth.signInAnonymously();uid=auth.currentUser.uid;}
 function draw(){if(!panel)return;const link=roomId?location.origin+location.pathname+'#sala='+encodeURIComponent(roomId):'';
 panel.innerHTML=`<div class="row"><div><h3>🌐 Multiplayer online</h3><p class="muted">${roomId?'Sala conectada • jogador '+(seat+1)+' • '+(multiplayer?.players[multiplayer.active]?.name||'Aguardando'):'Jogue com amigos em celulares ou computadores diferentes. Todos compartilham o mesmo mundo.'}</p></div><span class="notice">${roomId?(connected?'🟢 Online':'🟠 Conectando'):'Firebase necessário'}</span></div>`+
 (roomId?`<p><strong>Código da sala:</strong> <code>${escapeHTML(roomId)}</code></p><div class="row"><button id="online-copy" class="secondary">Copiar convite</button><button id="online-leave" class="secondary">Sair da sala</button></div><p class="muted">Sua vaga: ${seat+1}. ${multiplayer&&multiplayer.active===seat?'É sua vez de jogar.':'Aguarde sua vez. O jogo atualiza automaticamente.'}</p>`:
 `<div class="row"><button id="online-create" class="primary">Criar sala online</button><button id="online-join" class="secondary">Entrar com código</button></div><p class="muted">O anfitrião cria a sala e envia o link. Cada pessoa entra com um nome e assume uma vaga livre.</p>`);
 panel.querySelector('#online-create')?.addEventListener('click',create);
 panel.querySelector('#online-join')?.addEventListener('click',()=>join(prompt('Código da sala online:')||''));
 panel.querySelector('#online-copy')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(link);alertMsg('Link copiado!')}catch(e){prompt('Copie o convite:',link)}});
 panel.querySelector('#online-leave')?.addEventListener('click',leave);
 document.body.classList.toggle('online-waiting',!!roomId&&(!connected||multiplayer?.active!==seat));
 document.querySelectorAll('#app button, #nav button, #reset').forEach(b=>{if(roomId&&(!connected||multiplayer?.active!==seat))b.disabled=true});
 }
 function restore(snap){if(!snap||!snap.world||!snap.multi)return;applying=true;try{
  const currentPage=state?.page||'home';multiplayer=snap.multi;state=snap.world;
  // Os dados da vaga ativa ja estao no mundo salvo. Nao chamar save() ao receber atualizacoes.
  if(multiplayer.active===seat&&currentPage&&currentPage!=='live'&&!liveMatch)state.page=currentPage;
  baseRender();
 }finally{applying=false}draw()}
 function queueSave(){if(!roomId||applying||loading)return;persistProfile();queued={world:structuredClone(state),multi:structuredClone(multiplayer)};flush()}
 async function flush(){if(sending||!queued||!connected||!ref)return;sending=true;
 while(queued&&connected){const data=queued;queued=null;const before=revision;
  try{const result=await ref.transaction(old=>{
   if(!old||old.revision!==before||old.multi?.active!==seat||old.seats?.[seat]!==uid)return;
   return {...old,world:data.world,multi:data.multi,revision:old.revision+1,updatedAt:firebase.database.ServerValue.TIMESTAMP};
  },undefined,false);
  if(!result.committed){queued=null;alertMsg('O mundo mudou em outro dispositivo. Sincronizando...');break}
  revision=result.snapshot.val().revision;lastSent=revision;
  }catch(e){queued=null;alertMsg('Falha ao salvar online: '+e.message);break}
 }
 sending=false;
 }
 async function connect(id,assigned){roomId=id;seat=assigned;ref=db.ref('rooms/'+id);connected=true;
 if(unsubscribe)unsubscribe();
 unsubscribe=ref.on('value',snapshot=>{
  const data=snapshot.val();if(!data){alertMsg('Sala encerrada ou não encontrada.');leave();return}
  const newRevision=data.revision||0;
  if(newRevision<revision)return;
  revision=newRevision;
  if(!sending&&!queued&&newRevision!==lastSent)restore(data);
  else if(!multiplayer)restore(data);
  draw();
 },e=>{connected=false;draw();alertMsg('Conexão perdida: '+e.message)});
 draw();}
 async function create(){if(roomId)return;
 try{await init();const n=Number(prompt('Número de treinadores online (2 a 8):','2'));if(!Number.isInteger(n)||n<2||n>8)return alertMsg('Escolha de 2 a 8 treinadores.');
 const name=safeName(prompt('Seu nome de treinador:','Jogador 1'));
 const id=Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');
 const m={sharedWorld:true,active:0,cycle:0,roundDone:{},players:Array.from({length:n},(_,i)=>({name:i===0?name:'Aguardando jogador '+(i+1),id:i,club:null,careerCountry:0,careerClub:0,budget:35,ready:false,history:[],results:[]}))};
 const oldState=state,oldMulti=multiplayer;
 multiplayer=m;state=makeState();ensureExpansion();newLibertadores();newSudamericana();initExtraCups();initChampions();loadProfile(m.players[0]);
 const newWorld=structuredClone(state);state=oldState;multiplayer=oldMulti;
 await db.ref('rooms/'+id).set({createdBy:uid,seats:{0:uid},multi:m,world:newWorld,revision:0,createdAt:firebase.database.ServerValue.TIMESTAMP});
 await connect(id,0);location.hash='sala='+id;
 }catch(e){alertMsg('Não foi possível criar a sala: '+e.message)}
 }
 async function join(code){const id=String(code).trim().replace(/^.*sala=/,'').replace(/[^a-f0-9]/gi,'');if(!/^[a-f0-9]{32}$/.test(id))return alertMsg('Código inválido.');
 try{await init();const name=safeName(prompt('Seu nome de treinador:','Treinador'));
 const target=db.ref('rooms/'+id);let assigned=-1;
 const result=await target.transaction(old=>{
  if(!old||!old.multi?.players)return;
  const existing=Object.entries(old.seats||{}).find(([,u])=>u===uid);
  const slot=existing?Number(existing[0]):old.multi.players.findIndex((p,i)=>!Object.prototype.hasOwnProperty.call(old.seats||{},i));
  if(slot<0)return;
  assigned=slot;
  old.seats=old.seats||{};old.seats[slot]=uid;
  old.multi.players[slot].name=name;
  old.revision=(old.revision||0)+1;return old;
 },undefined,false);
 if(!result.committed||assigned<0)return alertMsg('Sala não encontrada ou lotada.');
 await connect(id,assigned);location.hash='sala='+id;
 }catch(e){alertMsg('Erro ao entrar: '+e.message)}
 }
 function leave(){if(unsubscribe&&ref){ref.off('value',unsubscribe)}unsubscribe=null;roomId=null;ref=null;seat=-1;connected=false;queued=null;revision=-1;lastSent=-1;
 multiplayer=null;localStorage.removeItem(MULTI_KEY);try{state=JSON.parse(localStorage.getItem(SINGLE_KEY))}catch(e){state=null}
 if(!state||!Array.isArray(state.players))state=makeState();ensureExpansion();initExtraCups();initChampions();location.hash='';baseRender();draw();}
 // Guardar o mundo em Firebase em vez de gravar cada jogador em localStorage.
 save=function(){if(roomId){if(!connected||multiplayer?.active!==seat||applying)return;queueSave();return}baseSave()};
 render=function(){baseRender();draw()};
 // Bloqueia controles de quem está aguardando sua vez.
 document.addEventListener('click',e=>{if(!roomId)return;if(connected&&multiplayer?.active===seat)return;
 if(e.target.closest('#online-panel'))return;
 if(e.target.closest('button,[data-club],[data-buy],[data-sell]')){e.preventDefault();e.stopImmediatePropagation();alertMsg('Aguarde sua vez no multiplayer online.')}
 },true);
 document.addEventListener('change',e=>{if(roomId&&multiplayer?.active!==seat){e.preventDefault();e.stopImmediatePropagation();draw()}},true);
 // Aguardar as bibliotecas carregarem, sem bloquear o modo solo.
 draw();const invite=new URLSearchParams(location.hash.slice(1)).get('sala');if(invite&&/^[a-f0-9]{32}$/i.test(invite))setTimeout(()=>join(invite),500);
})();
