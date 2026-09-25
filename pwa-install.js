(()=>{
  if('serviceWorker'in navigator){let refreshing=false;navigator.serviceWorker.addEventListener('controllerchange',()=>{if(refreshing)return;refreshing=true;location.reload()});window.addEventListener('load',async()=>{const registration=await navigator.serviceWorker.register('/sw.js');const checkUpdate=()=>registration.update().catch(()=>{});checkUpdate();setInterval(checkUpdate,300000);document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')checkUpdate()});window.addEventListener('online',checkUpdate)})}
  if(matchMedia('(display-mode: standalone)').matches||navigator.standalone)return;
  let promptEvent=null;
  const isiOS=/iPad|iPhone|iPod/.test(navigator.userAgent);
  const style=document.createElement('style');
  style.textContent='.bmf-install{position:fixed;right:14px;bottom:14px;z-index:70;border:0;border-radius:999px;padding:12px 17px;background:#0d6b42;color:#fff;font:800 14px Tahoma,sans-serif;box-shadow:0 10px 30px #071a1255}.bmf-install-help{position:fixed;inset:0;z-index:100;background:#071a1288;display:grid;place-items:center;padding:18px}.bmf-install-card{width:min(420px,100%);background:#fff;color:#17251e;border-radius:20px;padding:22px;font:16px/1.6 Tahoma,sans-serif;box-shadow:0 24px 70px #0005}.bmf-install-card h2{margin:0 0 8px;color:#0d6b42}.bmf-install-card button{width:100%;border:0;border-radius:10px;padding:11px;background:#0d6b42;color:#fff;font-weight:800}.bmf-install-card ol{padding-left:25px}';
  document.head.append(style);
  const button=document.createElement('button');button.className='bmf-install';button.textContent='📲 ติดตั้งแอป BMF';button.hidden=!isiOS;document.body.append(button);
  addEventListener('beforeinstallprompt',event=>{event.preventDefault();promptEvent=event;button.hidden=false});
  button.addEventListener('click',async()=>{
    if(promptEvent){promptEvent.prompt();await promptEvent.userChoice;promptEvent=null;button.hidden=true;return}
    const box=document.createElement('div');box.className='bmf-install-help';box.innerHTML='<div class="bmf-install-card"><h2>ติดตั้ง BMF บน iPhone/iPad</h2><ol><li>กดปุ่มแชร์ <b>□↑</b> ด้านล่าง Safari</li><li>เลื่อนแล้วเลือก <b>เพิ่มไปยังหน้าจอโฮม</b></li><li>กด <b>เพิ่ม</b></li></ol><button>เข้าใจแล้ว</button></div>';box.querySelector('button').onclick=()=>box.remove();box.onclick=e=>{if(e.target===box)box.remove()};document.body.append(box);
  });
  addEventListener('appinstalled',()=>{button.remove()});
})();
