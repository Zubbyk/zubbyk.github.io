// Replace the legacy offline shell without changing stored user data.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.mode==='navigate'&&url.origin===self.location.origin&&url.pathname.startsWith('/MoneyControl/')){
    event.respondWith(fetch(event.request).catch(()=>new Response('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>MoneyControl</title><p>MoneyControl has moved / MoneyControl переехал / MoneyControl ist umgezogen / MoneyControl se ha mudado.</p><a href="https://moneycontrol-zubbyk.pages.dev/">MoneyControl</a>',{status:200,headers:{'Content-Type':'text/html;charset=utf-8'}})));
  }
});
