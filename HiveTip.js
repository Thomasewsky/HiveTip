(function(){
  var CS=document.currentScript
  if(!CS) return

  function injectFont(){
    if(document.querySelector('link[data-autotip-font]')) return
    var l=document.createElement('link')
    l.rel='stylesheet'
    l.href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700;800&display=swap'
    l.setAttribute('data-autotip-font','1')
    document.head.appendChild(l)
  }

  function injectCSS(){
    if(window.__autotip_css) return
    window.__autotip_css=true
    var css=`
:root{
  --at-bg:#05070b;
  --at-fg:#eef2f7;
  --at-mut:#9fa7b8;
  --at-line:rgba(255,255,255,.12);
  --at-card:rgba(12,14,22,.96);
  --at-glass:rgba(7,9,16,.86);
  --at-brand:#E31337;
  --at-brand2:#B50F2C;
}
.theme-light{
  --at-bg:#f5f5f8;
  --at-fg:#111318;
  --at-mut:#5b6475;
  --at-line:rgba(0,0,0,.08);
  --at-card:rgba(255,255,255,.98);
  --at-glass:rgba(255,255,255,.94);
  --at-brand:#E31337;
  --at-brand2:#B50F2C;
}
.at-back,
.at-back *{
  box-sizing:border-box;
  font-family:"Space Grotesk",system-ui,-apple-system,Segoe UI,Roboto,sans-serif !important;
}
.at-back{
  position:fixed;
  inset:0;
  background:
    radial-gradient(1200px 720px at 10% -20%,color-mix(in srgb,var(--at-brand) 20%,transparent),transparent),
    radial-gradient(1200px 720px at 90% 120%,rgba(60,130,255,.22),transparent),
    rgba(3,5,10,.78);
  backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:4000;
  padding:14px;
  opacity:0;
  animation:at-f .14s ease-out forwards;
}
.at-sheet{
  width:min(680px,96vw);
  border-radius:26px;
  background:var(--at-glass);
  border:1px solid color-mix(in srgb,var(--at-brand) 32%,var(--at-line));
  box-shadow:
    0 32px 80px rgba(0,0,0,.72),
    0 0 0 1px rgba(255,255,255,.04) inset;
  color:var(--at-fg);
  overflow:hidden;
  transform:translateY(14px) scale(.96);
  opacity:0;
  animation:at-p .20s cubic-bezier(.18,.9,.24,1.02) .02s forwards;
}
.at-head{
  padding:14px 16px;
  border-bottom:1px solid var(--at-line);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
}
.at-title{
  display:flex;
  align-items:center;
  gap:10px;
  font-weight:900;
  letter-spacing:.18px;
}
.at-title img{
  width:34px;
  height:34px;
  border-radius:14px;
  border:1px solid rgba(0,0,0,.25);
  box-shadow:0 6px 16px rgba(0,0,0,.7);
}
.at-title span{
  font-size:15px;
}
.at-x{
  width:40px;
  height:40px;
  border-radius:14px;
  border:1px solid var(--at-line);
  background:linear-gradient(145deg,rgba(17,20,30,.96),rgba(27,32,44,.94));
  color:var(--at-fg);
  font-weight:900;
  cursor:pointer;
  display:grid;
  place-items:center;
  box-shadow:0 10px 26px rgba(0,0,0,.7),inset 0 1px 0 rgba(255,255,255,.06);
  transition:transform .12s ease, box-shadow .16s ease, background .16s ease, color .16s ease, border-color .16s ease;
}
.at-x:hover{
  transform:translateY(-1px);
  box-shadow:0 13px 30px rgba(0,0,0,.82);
}
.theme-light .at-x{
  background:linear-gradient(145deg,#ffffff,#f3f4f8);
  border-color:rgba(15,23,42,.12);
  color:#111827;
  box-shadow:0 4px 10px rgba(15,23,42,.12);
}
.theme-light .at-x:hover{
  box-shadow:0 7px 18px rgba(15,23,42,.24);
}
.at-body{
  padding:14px 16px 16px;
  display:grid;
  gap:12px;
}
.at-grid{
  display:grid;
  grid-template-columns:1.15fr .85fr;
  gap:10px;
}
@media(max-width:640px){
  .at-grid{grid-template-columns:1fr}
}
.at-row{
  display:flex;
  gap:10px;
  align-items:center;
}
.at-in{
  flex:1;
  min-width:120px;
  padding:12px 14px;
  border-radius:16px;
  border:1px solid var(--at-line);
  background:rgba(2,5,12,.9);
  color:var(--at-fg);
  font-size:16px;
  outline:none;
  transition:border-color .14s ease, box-shadow .14s ease, background .14s ease;
}
.theme-light .at-in{
  background:rgba(255,255,255,.98);
}
.at-in:focus{
  border-color:var(--at-brand);
  box-shadow:0 0 0 1px color-mix(in srgb,var(--at-brand) 40%,transparent);
}
.at-in::placeholder{
  color:var(--at-mut);
}
.at-tabs{
  background:rgba(255,255,255,.05);
  border:1px solid var(--at-line);
  border-radius:16px;
  padding:6px;
  display:flex;
  gap:6px;
}


.at-tab{
  flex:1;
  text-align:center;
  padding:11px 10px;
  border-radius:12px;
  cursor:pointer;
  font-weight:900;
  letter-spacing:.02em;
  color:var(--at-fg);
  background:transparent;
  border:1px solid transparent;
  user-select:none;
  font-size:13px;
  transition:background .14s ease, color .14s ease, box-shadow .14s ease;
}
.at-tab.a{
  background:linear-gradient(180deg,var(--at-brand),var(--at-brand2));
  color:#ffffff;
  border-color:transparent;
  box-shadow:0 3px 14px color-mix(in srgb,var(--at-brand) 36%,transparent);
}
.at-tab.dis{
  opacity:.35;
  cursor:not-allowed;
  filter:grayscale(.4);
}
.at-pane{
  display:none;
  animation:at-n .10s ease-out;
}
.at-pane.a{
  display:grid;
  gap:10px;
}
.at-cta{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  justify-content:flex-end;
}
.at-btn{
  padding:12px 14px;
  border-radius:16px;
  border:1px solid var(--at-line);
  background:rgba(10,12,18,.92);
  color:var(--at-fg);
  font-weight:900;
  cursor:pointer;
  min-width:150px;
  text-align:center;
  font-size:14px;
  box-shadow:0 8px 20px rgba(0,0,0,.55);
  transition:transform .12s ease, box-shadow .18s ease, background .14s ease, color .14s ease, border-color .14s ease;
}
.theme-light .at-btn{
  background:rgba(247,248,252,.98);
}
.at-btn:hover{
  transform:translateY(-1px);
  box-shadow:0 12px 26px rgba(0,0,0,.72);
}
.at-btn.p{
  background:linear-gradient(180deg,var(--at-brand),var(--at-brand2));
  color:#ffffff;
  border-color:color-mix(in srgb,var(--at-brand) 90%,transparent);
  box-shadow:0 9px 24px color-mix(in srgb,var(--at-brand) 48%,transparent),inset 0 1px 0 rgba(255,255,255,.6);
}
.at-note{
  color:var(--at-mut);
  font-size:.9rem;
}
.at-err{
  border:1px solid rgba(227,19,55,.55);
  background:rgba(227,19,55,.14);
  color:#ffdbe4;
  padding:9px 11px;
  border-radius:13px;
  font-weight:700;
  display:none;
  font-size:13px;
}
.at-ok{
  border:1px solid rgba(16,185,129,.5);
  background:rgba(16,185,129,.11);
  color:#d7ffeb;
  padding:9px 11px;
  border-radius:13px;
  font-weight:700;
  display:none;
  font-size:13px;
}
.theme-light .at-ok{
  color:#065f46;
}
.at-qrw{
  display:grid;
  gap:12px;
  justify-items:center;
}
.at-qr{
  position:relative;
  display:grid;
  place-items:center;
}
.at-qr img.qr{
  width:min(260px,62vw);
  height:min(260px,62vw);
  border-radius:16px;
  background:#fff;
  box-shadow:0 12px 26px rgba(0,0,0,.72);
}
.at-qr .pfp{
  position:absolute;
  inset:0;
  display:grid;
  place-items:center;
  pointer-events:none;
}
.at-qr .pfp img{
  width:70px;
  height:70px;
  border-radius:999px;
  border:3px solid #fff;
  box-shadow:0 2px 10px rgba(0,0,0,.75);
}
.at-note-sm{
  font-size:11px;
  color:var(--at-mut);
  text-align:center;
}
.theme-light .at-note-sm{
  color:#4b5563;
}
.at-overlay{
  position:absolute;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  background:radial-gradient(circle at 50% 50%,rgba(0,0,0,.55),rgba(0,0,0,.25),transparent);
  backdrop-filter:blur(4px);
  -webkit-backdrop-filter:blur(4px);
}
.at-overlay-inner{
  display:flex;
  align-items:center;
  justify-content:center;
}
.at-play-btn{
  width:76px;
  height:76px;
  border-radius:999px;
  border:none;
  background:radial-gradient(circle at 30% 20%,#ffffff,rgba(255,255,255,.85));
  display:grid;
  place-items:center;
  box-shadow:0 16px 34px rgba(0,0,0,.9);
  transition:transform 120ms ease, box-shadow 160ms ease, background 160ms ease;
}
.at-play-btn svg{
  margin-left:2px;
}
.at-play-btn:hover{
  transform:translateY(-1px) scale(1.02);
  box-shadow:0 19px 40px rgba(0,0,0,.95);
}
@keyframes at-f{
  from{opacity:0;}
  to{opacity:1;}
}
@keyframes at-p{
  from{opacity:0;transform:translateY(14px) scale(.96);}
  to{opacity:1;transform:translateY(0) scale(1);}
}
@keyframes at-n{
  from{opacity:0;transform:translateY(5px);}
  to{opacity:1;transform:translateY(0);}
}
`
    var s=document.createElement('style')
    s.textContent=css
    document.head.appendChild(s)
  }

  injectFont()
  injectCSS()

  var langAttr=(CS.getAttribute('data-lang')||'auto').toLowerCase()
  var themeAttr=(CS.getAttribute('data-theme')||'auto').toLowerCase()
  var CFG={
    lang:langAttr,
    theme:themeAttr,
    amount:parseFloat(CS.getAttribute('data-amount')||'0.1')||0.1,
    selector:(CS.getAttribute('data-selector')||'[data-tip]')
  }

  var t=CFG.theme
  if(t==='auto'){
    t=(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'
  }
  if(t==='light'){
    document.documentElement.classList.add('theme-light')
  }else{
    document.documentElement.classList.remove('theme-light')
  }

  var L
  if(CFG.lang==='es'||CFG.lang==='en'){
    L=CFG.lang
  }else{
    L=((navigator.language||'en').toLowerCase().startsWith('es')?'es':'en')
  }
  //Did u know that Denny's in El Salvador are the Headquarters of HiveDebit?
  var TXT={
    es:{
      needKC:'Instala o habilita Hive Keychain',
      askViewer:'Tu usuario Hive',
      title:'Apoyar a @{{u}}',
      amt:'Monto (HBD)',
      pay:'Tip & ver contenido',
      payLn:'Generar invoice',
      skip:'Ver sin dar tip',
      openLN:'Abrir wallet',
      sent:'Tip enviado',
      fail:'No se pudo enviar el tip',
      active:'Revisa Active key y saldo HBD',
      who:'Pagas como',
      missingViewer:'Ingresa tu usuario Hive',
      ctaHelp:'Dando tu tip ayudas al creador de contenido.',
      minLn:'Lightning requiere mínimo 0.500 HBD',
      invalidAmt:'Monto inválido'
    },
    en:{
      needKC:'Install or enable Hive Keychain',
      askViewer:'Your Hive username',
      title:'Support @{{u}}',
      amt:'Amount (HBD)',
      pay:'Tip & watch',
      payLn:'Generate invoice',
      skip:'Watch without tip',
      openLN:'Open wallet',
      sent:'Tip sent',
      fail:'Could not send tip',
      active:'Check Active key and HBD balance',
      who:'You will pay as',
      missingViewer:'Enter your Hive username',
      ctaHelp:'Your tip helps the creator.',
      minLn:'Lightning requires at least 0.500 HBD',
      invalidAmt:'Invalid amount'
    }
  }

  function cleanUser(x){
    return (x||'').toLowerCase().trim().replace(/^@/,'').replace(/[^a-z0-9.\-]/g,'')
  }
  var DEFAULT_VIEWER=cleanUser(CS.getAttribute('data-viewer')||'')

  function fmt3(x){
    var n=Number(x)
    if(!isFinite(n)||n<=0)return null
    return n.toFixed(3)
  }
  function challenge(u){
    return 'Login for '+u+' @ '+new Date().toISOString()
  }

  function kcTransfer(from,to,amount3,memo){
    return new Promise(function(res,rej){
      window.hive_keychain.requestTransfer(
        from,to,amount3,memo||'','HBD',
        function(r){
          if(r&&r.success){res(r)}else{rej(r&&r.message||'TransferFailed')}
        },
        true
      )
    })
  }

  //Go check HiveDebit GrandCherokee version instead of checking the code, I ain't stealing ur money, but you'll have issues after using NFC (No Fucking Coins after using HiveDebit)

  function popup(author, defaultHbd, presetViewer){
    var dict=TXT[L]
    var pfp='https://images.hive.blog/u/'+author+'/avatar'
    var initialAmt=(defaultHbd>0?defaultHbd:0.1)
    var html='<div class="at-back"><div class="at-sheet"><div class="at-head"><div class="at-title"><img src="'+pfp+'" alt=""><span>'+dict.title.replace('{{u}}',author)+'</span></div><button class="at-x" id="atX">✕</button></div><div class="at-body"><div class="at-grid"><div class="at-row"><input id="atAmt" class="at-in" type="number" min="0.001" step="0.001" value="'+initialAmt.toFixed(3)+'"><div style="min-width:44px;text-align:right;font-weight:800">HBD</div></div><div class="at-tabs"><div id="atH" class="at-tab a">HBD</div><div id="atL" class="at-tab">Lightning</div></div></div><div class="at-row"><div class="at-note">'+dict.ctaHelp+'</div></div><div id="paneH" class="at-pane a"><div class="at-row"><div style="min-width:120px;opacity:.9;font-size:13px;font-weight:700">'+dict.who+'</div><input id="atViewer" class="at-in" placeholder="'+dict.askViewer+'" value="'+(presetViewer||'')+'"></div></div><div id="paneL" class="at-pane"><div class="at-note-sm">'+dict.minLn+'</div><div id="atQRwrap" class="at-qrw" style="display:none"><div class="at-qr"><img id="atQRimg" class="qr" alt="qr"/><div class="pfp"><img src="'+pfp+'" alt=""></div></div><div class="at-row"><button id="atOpen" class="at-btn">'+dict.openLN+'</button></div></div></div><div id="atErr" class="at-err"></div><div id="atOk" class="at-ok"></div><div class="at-cta"><button id="atSkip" class="at-btn">'+dict.skip+'</button><button id="atPay" class="at-btn p">'+dict.pay+'</button></div></div></div></div>'
    var root=document.createElement('div')
    root.innerHTML=html
    document.body.appendChild(root)
    var $=function(s){return root.querySelector(s)}
    var state={method:'HBD', ln:{pr:null,hash:null,poll:null}}
    var amtInput=$('#atAmt')

    function updatePrimaryLabel(){
      var btn=$('#atPay')
      if(!btn)return
      btn.textContent=state.method==='LN'
        ? (dict.payLn||dict.pay)
        : dict.pay
    }

    function pick(m){
      state.method=m
      $('#atH').classList.toggle('a',m==='HBD')
      $('#atL').classList.toggle('a',m==='LN')
      $('#paneH').classList.toggle('a',m==='HBD')
      $('#paneL').classList.toggle('a',m==='LN')
      updatePrimaryLabel()
    }

    function msgErr(t){
      var x=$('#atErr')
      x.textContent=t||''
      x.style.display=t?'block':'none'
    }
    function msgOk(t){
      var x=$('#atOk')
      x.textContent=t||''
      x.style.display=t?'block':'none'
    }
    function clearMsgs(){
      msgErr('')
      msgOk('')
    }
    function stopPoll(){
      if(state.ln.poll){
        clearInterval(state.ln.poll)
        state.ln.poll=null
      }
    }

    function lnEligible(){
      var v=parseFloat(amtInput.value||'0')
      return v>=0.5
    }
    function refreshLnGate(){
      var ok=lnEligible()
      $('#atL').classList.toggle('dis',!ok)
      if(state.method==='LN'&&!ok){
        pick('HBD')
        msgErr(dict.minLn)
      }
    }
    //If you are reading this u owe me a Cherokee, what u thought that I didn't made this code?
    function genLN(amountHBD){
      var url='https://api.v4v.app/v1/new_invoice_hive?hive_accname='+
        encodeURIComponent(author)+
        '&amount='+encodeURIComponent(amountHBD)+
        '&currency=HBD&receive_currency=hbd&app_name=AutoTip&expiry=300&qr_code=none'
      return fetch(url)
        .then(function(r){return r.ok?r.json():Promise.reject('BadResp')})
        .then(function(d){return{pr:d.payment_request,hash:d.payment_hash}})
    }
    function chkLN(hash){
      var url='https://api.v4v.app/v1/check_invoice/'+encodeURIComponent(hash)+'?test=false'
      return fetch(url).then(function(r){return r.ok?r.json():Promise.reject('BadResp')})
    }
    function showQR(pr){
      var uri='lightning:'+pr
      var img=$('#atQRimg')
      img.src='https://api.qrserver.com/v1/create-qr-code/?size=260x260&data='+encodeURIComponent(uri)
      $('#atQRwrap').style.display='grid'
    }

    $('#atX').onclick=function(){
      stopPoll()
      close({type:'CLOSE'})
    }
    $('#atH').onclick=function(){
      pick('HBD')
    }
    $('#atL').onclick=function(){
      if($('#atL').classList.contains('dis')){
        msgErr(dict.minLn)
        return
      }
      pick('LN')
    }
    amtInput.addEventListener('input',function(){
      clearMsgs()
      var raw=amtInput.value.replace(/,/g,'.')
      if(raw&&isNaN(Number(raw))){
        msgErr(dict.invalidAmt)
      }else{
        refreshLnGate()
      }
    })
    refreshLnGate()
    updatePrimaryLabel()

    $('#atOpen').onclick=function(){
      if(state.ln.pr){
        location.href='lightning:'+state.ln.pr
      }
    }

    $('#atPay').onclick=function(){
      clearMsgs()
      var raw=amtInput.value.replace(/,/g,'.')
      var amt=fmt3(raw)
      if(!amt){
        msgErr(dict.invalidAmt)
        return
      }
      if(state.method==='LN'){
        if(parseFloat(amt)<0.5){
          msgErr(dict.minLn)
          refreshLnGate()
          return
        }
        $('#atQRwrap').style.display='none'
        state.ln={pr:null,hash:null,poll:state.ln.poll}
        genLN(amt).then(function(inv){
          state.ln.pr=inv.pr
          state.ln.hash=inv.hash
          showQR(inv.pr)
          stopPoll()
          state.ln.poll=setInterval(function(){
            chkLN(state.ln.hash).then(function(s){
              if((s.paid||s.settled||s.state==='SETTLED')&&!s.expired){
                stopPoll()
                close({type:'LN',amount:amt})
              }
            }).catch(function(){})
          },1200)
        }).catch(function(){
          msgErr('No se pudo generar el invoice')
        })
        return
      }
      var viewer=cleanUser($('#atViewer').value)
      if(!viewer){
        msgErr(dict.missingViewer)
        return
      }
      if(!window.hive_keychain){
        msgErr(dict.needKC)
        return
      }
      window.hive_keychain.requestSignBuffer(
        viewer,
        challenge(viewer),
        'Posting',
        function(r){
          if(!r||!r.success){
            msgErr(dict.fail)
            return
          }
          kcTransfer(viewer,author,amt,'Auto-tip').then(function(tr){
            msgOk(dict.sent)
            setTimeout(function(){
              close({type:'HBD',amount:amt,tx:tr.result})
            },400)
          }).catch(function(m){
            msgErr((m&&String(m))||dict.fail+' · '+dict.active)
          })
        }
      )
    }

    $('#atSkip').onclick=function(){
      stopPoll()
      close({type:'SKIP'})
    }

    var res
    function close(v){
      root.remove()
      res(v)
    }
    return new Promise(function(r){res=r})
  }

  function extractAuthor(target){
    var a=cleanUser(
      target&&(
        target.getAttribute('data-author')||
        target.getAttribute('data-autotip-recipient')||
        target.getAttribute('data-recipient')||
        ''
      )
    )
    if(a)return a
    var href=target&&target.getAttribute('href')
    var baseHref=href||window.location.href
    try{
      var url=new URL(baseHref,window.location.href)
      var v=url.searchParams.get('v')
      if(v){
        var parts=v.split('/').filter(Boolean)
        if(parts.length>0){
          a=cleanUser(parts[0])
          if(a)return a
        }
      }
    }catch(e){}
    var h=String(baseHref||window.location.href)
    var marker='watch?v='
    var idx=h.indexOf(marker)
    if(idx!==-1){
      var after=h.slice(idx+marker.length)
      var first=after.split(/[\/?#]/)[0]||''
      a=cleanUser(first)
    }
    var idx2=h.indexOf('v=')
    if(!a&&idx2!==-1){
      var after2=h.slice(idx2+2)
      var first2=after2.split(/[\/?#]/)[0]||''
      a=cleanUser(first2)
    }
    return a
  }

  function onTipClick(ev){
    var t=ev.target.closest(CFG.selector)
    if(!t)return
    ev.preventDefault()
    var author=extractAuthor(t)
    if(!author)return
    var viewer=cleanUser(t.getAttribute('data-viewer')||DEFAULT_VIEWER||'')
    var kind=t.getAttribute('data-autotip-kind')||''
    popup(author,CFG.amount,viewer).then(function(){
      if(kind==='overlay'){
        t.style.display='none'
        return
      }
      var href=t.getAttribute('href')
      if(href){
        location.href=href
        return
      }
      var emb=t.getAttribute('data-embed')
      if(emb){
        var sel=t.getAttribute('data-target')
        var box=sel?document.querySelector(sel):null
        if(!box)box=document.getElementById('player')
        if(box){
          box.innerHTML=''
          var ifr=document.createElement('iframe')
          ifr.src=emb
          ifr.allow='autoplay; fullscreen; encrypted-media'
          ifr.style.width='100%'
          ifr.style.height='100%'
          ifr.style.border='0'
          box.appendChild(ifr)
        }
      }
    })
  }

  function wrapIframes(){
    var ifs=document.querySelectorAll('iframe[data-autotip-player]')
    if(!ifs.length)return
    ifs.forEach(function(ifr){
      if(ifr.__autotipWrapped)return
      ifr.__autotipWrapped=true
      var parent=ifr.parentElement
      if(!parent)return
      var cs=window.getComputedStyle(parent)
      if(cs.position==='static'){
        parent.style.position='relative'
      }
      var ov=document.createElement('div')
      ov.className='at-overlay'
      ov.setAttribute('data-tip','1')
      ov.setAttribute('data-autotip-kind','overlay')
      var inner=document.createElement('div')
      inner.className='at-overlay-inner'
      var btn=document.createElement('button')
      btn.className='at-play-btn'
      btn.innerHTML='<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#111827" opacity="0.18"/><path d="M9 8.25C9 7.83579 9.44772 7.58541 9.789 7.8L15 11L9.789 14.2C9.44772 14.4146 9 14.1642 9 13.75V8.25Z" fill="#111827"/></svg>'
      inner.appendChild(btn)
      ov.appendChild(inner)
      var explicit=cleanUser(
        ifr.getAttribute('data-author')||
        ifr.getAttribute('data-autotip-recipient')||
        ifr.getAttribute('data-recipient')||
        ''
      )
      var aFrom=explicit
      if(!aFrom){
        var src=ifr.getAttribute('src')||''
        if(src){
          var fake={getAttribute:function(name){
            if(name==='href')return src
            return null
          }}
          aFrom=extractAuthor(fake)
        }
      }
      if(aFrom)ov.setAttribute('data-author',aFrom)
      parent.appendChild(ov)
    })
  }

  function boot(){
    document.addEventListener('click',onTipClick,true)
    wrapIframes()
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',boot)
  }else{
    boot()
  }
})();

