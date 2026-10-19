// GA4: pon aquí el Measurement ID cuando el cliente lo tenga (p. ej. 'G-XXXXXXX'). Vacío = no carga nada.
(function () {
  var GA_ID = ''; // [[PENDIENTE: GA4 Measurement ID]]
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { dataLayer.push(arguments); };
  if (GA_ID) {
    gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted' });
    var s = document.createElement('script');
    s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID);
  }
  function track(name, params) { if (GA_ID) gtag('event', name, params || {}); }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    if (a.hasAttribute('data-wa')) track('whatsapp_click', { link_url: a.href, location: a.className || 'link' });
    else if (a.hasAttribute('data-tel')) track('phone_click', { link_url: a.href });
    else if (a.hasAttribute('data-maps')) track('maps_click', { link_url: a.href });
    else if (a.hasAttribute('data-mail')) track('email_click', { link_url: a.href });
  });
  var form = document.querySelector('form[name="contacto"]');
  if (form) form.addEventListener('submit', function () { track('generate_lead', { form_name: 'contacto' }); });
})();
