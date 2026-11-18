(function(){
  'use strict';
  // ใส่ Measurement ID จริงเพียงจุดเดียว เช่น G-XXXXXXXXXX หลังเจ้าของเว็บยืนยันบัญชี GA4
  var configuredId='';
  var id=(document.querySelector('meta[name="bmf-ga4-id"]')||{}).content||configuredId;
  if(/^G-[A-Z0-9]+$/i.test(id)){
    window.dataLayer=window.dataLayer||[];
    window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};
    var script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(id);document.head.appendChild(script);
    window.gtag('js',new Date());window.gtag('config',id);
  }
  function event(name,params){if(typeof window.gtag==='function')window.gtag('event',name,params||{})}
  document.addEventListener('click',function(e){
    var link=e.target.closest('a');if(!link)return;
    var href=link.getAttribute('href')||'';
    if(/lin\.ee|line\.me/i.test(href))event('line_click',{link_url:href,link_text:(link.textContent||'').trim(),page_path:location.pathname});
    if(/^\/order\/?(?:$|[?#])/.test(href)||link.id==='line-order'||link.id==='send-bill')event('order_click',{link_url:href,page_path:location.pathname});
  });
})();
