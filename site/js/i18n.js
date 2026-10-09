// ES está en el HTML; aquí solo el inglés. Se guarda el ES original para volver.
(function () {
  var EN = {
    'skip': 'Skip to content',
    'nav.services': 'Services', 'nav.why': 'Why Carioca', 'nav.process': 'How we work', 'nav.contact': 'Contact', 'nav.cta': 'Request a proposal',
    'hero.eyebrow': 'Call Center Outsourcing',
    'hero.title': 'Your contact center, <em>in expert hands.</em>',
    'hero.lead': 'We take care of your customers with a team dedicated exclusively to your operation. We lower your operating costs while raising the quality of your service, backed by 30 years of experience.',
    'hero.cta': 'Request a proposal', 'hero.wa': 'Message us on WhatsApp', 'hero.chip': 'Call in progress',
    'hero.years': 'years of experience<br>in contact centers',
    'pill.1': '<b>Exclusive team</b> dedicated to your operation',
    'pill.2': '<b>Confidentiality</b> of your information',
    'pill.3': '<b>Real-time</b> reporting and monitoring',
    'pill.4': '<b>30 years</b> of industry experience',
    'prob.eyebrow': 'The challenge',
    'prob.title': 'When serving customers competes with growing your business.',
    'prob.lead': 'Running an in-house customer service department is expensive and pulls your team away from strategy. These are the most common signs:',
    'prob.painT': 'Without a specialized contact center',
    'prob.p1': 'Customers can’t find information about your services.',
    'prob.p2': 'It’s hard to get in touch with your organization.',
    'prob.p3': 'Support is limited to a few hours a day.',
    'prob.p4': 'Fixed operating costs keep rising.',
    'prob.p5': 'Inconsistent service quality erodes trust.',
    'prob.gainT': 'With Carioca',
    'prob.g1': 'Higher service levels and quality.',
    'prob.g2': 'Service hours that fit your customers.',
    'prob.g3': 'Lower operating costs: fixed becomes variable.',
    'prob.g4': 'More trust and credibility with your customers.',
    'prob.g5': 'Visible benefits in the short term.',
    'svc.eyebrow': 'Services',
    'svc.title': 'Contact center outsourcing, tailored to you.',
    'svc.lead': 'We manage your customer service operations so your team can focus on the strategic core of the business.',
    'svc.1t': 'Lower fixed costs', 'svc.1d': 'We turn your fixed operating expenses into variable costs. You pay for the operation you need.',
    'svc.2t': 'Scalability', 'svc.2d': 'We adapt to your market’s demand peaks, without you having to hire or train extra staff.',
    'svc.3t': 'Cutting-edge technology', 'svc.3d': 'Advanced real-time reporting and monitoring tools, so you always know how your operation is doing.',
    'svc.4t': 'A tailor-made contact center', 'svc.4d': 'Resources dedicated exclusively to your account, guaranteeing the confidentiality of the information we handle.',
    'why.eyebrow': 'Why Carioca',
    'why.title': 'A small center.<br><em>Complete dedication.</em>',
    'why.lead': 'Because we are a small contact center, your operation is never just another account: it gets full attention, exclusive resources and greater privacy.',
    'why.1t': 'Complete dedication', 'why.1d': 'A team focused only on your account, who knows your brand and your customers.',
    'why.2t': 'Information privacy', 'why.2d': 'Exclusive resources per client to guarantee the confidentiality of your data.',
    'why.3t': 'Innovation and efficiency', 'why.3d': 'A commitment to process improvement and constant follow-up on service quality.',
    'why.4t': '30 years of experience', 'why.4d': 'Three decades in the contact center industry back every operation we take on.',
    'proc.eyebrow': 'How we work',
    'proc.title': 'A clear method, from the first meeting to results.',
    'proc.lead': 'Before implementation, we define the contract, operational specifications and short- and long-term goals with you in preliminary meetings. Then we follow 12 stages:',
    'st.1': 'Planning', 'st.2': 'Organization', 'st.3': 'Implementation', 'st.4': 'Execution', 'st.5': 'Review', 'st.6': 'Analysis',
    'st.7': 'Feedback', 'st.8': 'Follow-up', 'st.9': 'Evaluation', 'st.10': 'Results measurement', 'st.11': 'Conclusions', 'st.12': 'Standardization',
    'ct.eyebrow': 'Contact', 'ct.title': 'Let’s talk about your operation.',
    'ct.lead': 'Tell us what you need and we’ll prepare a proposal aligned with your goals.',
    'f.name': 'Name', 'f.company': 'Company', 'f.email': 'Email', 'f.phone': 'Phone / WhatsApp',
    'f.msg': 'Which operation would you like to outsource?', 'f.send': 'Send request',
    'f.note': 'We’ll get back to you as soon as possible. Your data is only used to contact you.',
    'foot.tag': 'Call center outsourcing with complete dedication.', 'foot.by': 'Site by Arcova',
    'ty.title': 'Thank you! We received your request.', 'ty.lead': 'Our team will contact you shortly. If it’s urgent, message us on WhatsApp.', 'ty.back': 'Back to home'
  };
  var META = {
    es: { title: document.title, wa: 'Hola Carioca, me interesa conocer sus servicios de call center.' },
    en: { title: 'Carioca | Call Center & Contact Center Outsourcing', wa: 'Hi Carioca, I’d like to learn more about your call center services.' }
  };
  var nodes = document.querySelectorAll('[data-i18n],[data-i18n-html]');
  nodes.forEach(function (el) { el._es = el.hasAttribute('data-i18n-html') ? el.innerHTML : el.textContent; });

  function apply(lang) {
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-html');
      var val = lang === 'en' && EN[key] ? EN[key] : el._es;
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = val; else el.textContent = val;
    });
    document.documentElement.lang = lang;
    if (!document.body.hasAttribute('data-keep-title')) document.title = META[lang].title;
    document.querySelectorAll('a[data-wa]').forEach(function (a) {
      a.href = 'https://wa.me/18095353864?text=' + encodeURIComponent(META[lang].wa);
    });
    var hid = document.querySelector('input[name="idioma"]');
    if (hid) hid.value = lang;
    try { localStorage.setItem('carioca-lang', lang); } catch (e) {}
  }

  var start = document.documentElement.lang === 'en' ? 'en' : 'es';
  if (start === 'en') apply('en');
  var btn = document.querySelector('[data-lang-toggle]');
  if (btn) btn.addEventListener('click', function () {
    apply(document.documentElement.lang === 'en' ? 'es' : 'en');
  });
})();
