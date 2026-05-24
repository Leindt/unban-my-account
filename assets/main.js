// Shared interactions: nav, scroll reveal, FAQ, counter, marquee duplication

(function () {
  // Sticky nav shadow on scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const open = item.classList.contains('open');
      // Optionally collapse siblings:
      // item.parentElement.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      item.classList.toggle('open', !open);
      btn.setAttribute('aria-expanded', String(!open));
    });
  });

  // Animated counters
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const duration = 1500;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const val = target * eased;
          el.textContent = val.toFixed(decimals) + suffix;
          if (t < 1) requestAnimationFrame(tick);
          else el.textContent = target.toFixed(decimals) + suffix;
        };
        requestAnimationFrame(tick);
        io2.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach((el) => io2.observe(el));
  }

  // Marquee: duplicate children once so loop appears seamless
  document.querySelectorAll('.marquee-track').forEach((track) => {
    const items = Array.from(track.children);
    items.forEach((node) => {
      const clone = node.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
  });

  // Year in footer
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Persist language choice (so direct visits to /es/ are remembered)
  try {
    var path = window.location.pathname;
    var isEs = path.indexOf('/es/') !== -1;
    localStorage.setItem('unban-lang', isEs ? 'es' : 'en');
    document.querySelectorAll('.lang-switcher a').forEach(function(a){
      a.addEventListener('click', function(){
        localStorage.setItem('unban-lang', a.dataset.lang || (a.getAttribute('href').indexOf('/es/') !== -1 || a.getAttribute('href').indexOf('es/') === 0 ? 'es' : 'en'));
      });
    });
  } catch (e) {}
})();
