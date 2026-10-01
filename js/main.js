(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Menú móvil ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');

  function closeMenu() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  /* ---------- Escenario del hero (pestañas + rotación suave) ---------- */
  var stage = document.querySelector('[data-stage]');
  if (stage) {
    var tabs = [].slice.call(stage.querySelectorAll('.tab'));
    var panels = [].slice.call(stage.querySelectorAll('.panel'));
    var urlEl = stage.querySelector('[data-url]');
    var current = 0;
    var timer = null;
    var userPicked = false;

    var show = function (i, focus) {
      current = i;
      tabs.forEach(function (tab, n) {
        var on = n === i;
        tab.setAttribute('aria-selected', on ? 'true' : 'false');
        tab.tabIndex = on ? 0 : -1;
        panels[n].classList.toggle('is-active', on);
      });
      urlEl.textContent = tabs[i].getAttribute('data-url');
      if (focus) tabs[i].focus();
    };

    var stop = function () {
      clearInterval(timer);
      timer = null;
    };

    var start = function () {
      if (reduceMotion || userPicked || timer) return;
      timer = setInterval(function () {
        show((current + 1) % tabs.length);
      }, 5000);
    };

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        userPicked = true;
        stop();
        show(i);
      });
      tab.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = tabs.length - 1;
        if (next !== null) {
          e.preventDefault();
          userPicked = true;
          stop();
          show(next, true);
        }
      });
    });

    stage.addEventListener('mouseenter', stop);
    stage.addEventListener('mouseleave', start);
    stage.addEventListener('focusin', stop);
    stage.addEventListener('focusout', start);

    show(0);
    start();
  }

  /* ---------- Formulario de contacto (Formspree) ---------- */
  var form = document.getElementById('contact-form');
  if (form) {
    var statusEl = document.getElementById('form-status');
    var done = document.getElementById('form-done');
    var submit = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      submit.disabled = true;
      submit.textContent = 'Enviando…';
      statusEl.className = 'form-status';
      statusEl.textContent = '';

      var data = {};
      new FormData(form).forEach(function (value, key) { data[key] = value; });

      fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(function (res) {
          if (!res.ok) throw new Error('http ' + res.status);
          form.hidden = true;
          done.hidden = false;
          done.focus();
        })
        .catch(function () {
          submit.disabled = false;
          submit.textContent = 'Enviar solicitud';
          statusEl.className = 'form-status error';
          statusEl.textContent = 'No se pudo enviar. Intenta de nuevo o escríbeme por WhatsApp.';
        });
    });
  }
})();
