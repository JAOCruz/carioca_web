(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var nav = document.querySelector('.nav');
  var burger = document.querySelector('.burger');

  // Nav sólida al hacer scroll
  function onScroll() { nav.classList.toggle('is-solid', window.scrollY > 24); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menú móvil
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
  document.querySelectorAll('.nav__links a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Aparición al hacer scroll
  var items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, sibs = el.parentElement.querySelectorAll(':scope > .reveal');
        el.style.transitionDelay = Math.min(Array.prototype.indexOf.call(sibs, el), 6) * 70 + 'ms';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  // Contador "30 años"
  document.querySelectorAll('[data-count]').forEach(function (el) {
    var end = +el.dataset.count;
    if (reduce) return;
    var t0 = null;
    el.textContent = '0';
    function tick(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / 1600, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    }
    if (!('IntersectionObserver' in window)) return requestAnimationFrame(tick);
    var o = new IntersectionObserver(function (e) {
      if (e[0].isIntersecting) { o.disconnect(); setTimeout(function () { requestAnimationFrame(tick); }, 300); }
    }, { threshold: 0.6 });
    o.observe(el);
  });

  // Cronómetro de "llamada en curso"
  var timeEl = document.querySelector('.chip__time');
  if (timeEl) {
    var s = 0;
    var fmt = function (n) { return (n < 10 ? '0' : '') + n; };
    setInterval(function () { s++; timeEl.textContent = fmt(Math.floor(s / 60) % 60) + ':' + fmt(s % 60); }, 1000);
  }

  // Ondas de voz en el hero (canvas ligero)
  var cv = document.querySelector('.hero__wave');
  if (cv && cv.getContext) {
    var ctx = cv.getContext('2d'), w, h, dpr, running = true;
    var lines = [
      { amp: 0.34, freq: 1.6, speed: 0.9, color: 'rgba(236,32,37,.75)', width: 2.2 },
      { amp: 0.24, freq: 2.3, speed: -0.7, color: 'rgba(38,37,38,.14)', width: 1.4 },
      { amp: 0.18, freq: 3.1, speed: 1.3, color: 'rgba(236,32,37,.35)', width: 1.2 },
      { amp: 0.12, freq: 4.2, speed: -1.1, color: 'rgba(38,37,38,.08)', width: 1 }
    ];
    var size = function () {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    var draw = function (t) {
      ctx.clearRect(0, 0, w, h);
      var mid = h * 0.62, step = Math.max(4, w / 180);
      lines.forEach(function (l) {
        ctx.beginPath();
        for (var x = 0; x <= w + step; x += step) {
          var k = x / w;
          // envolvente: más intensa al centro-derecha, como una voz
          var env = Math.pow(Math.sin(Math.PI * k), 1.6) * (0.65 + 0.35 * Math.sin(t * 0.0011 + k * 6));
          var y = mid + Math.sin(k * Math.PI * 2 * l.freq + t * 0.002 * l.speed) * h * l.amp * env;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = l.color; ctx.lineWidth = l.width; ctx.stroke();
      });
    };
    var loop = function (t) { if (running) { draw(t); requestAnimationFrame(loop); } };
    size();
    window.addEventListener('resize', size);
    if (reduce) { draw(1200); }
    else {
      requestAnimationFrame(loop);
      // pausar cuando el hero no está visible
      new IntersectionObserver(function (e) {
        var vis = e[0].isIntersecting;
        if (vis && !running) { running = true; requestAnimationFrame(loop); }
        running = vis;
      }).observe(cv);
    }
  }

  // Enlaces de redes aún sin URL (los envía el cliente): no saltar al inicio
  document.querySelectorAll('a[data-pending]').forEach(function (a) {
    a.addEventListener('click', function (e) { if (a.getAttribute('href') === '#') e.preventDefault(); });
  });

  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
