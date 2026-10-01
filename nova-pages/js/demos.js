/* Maquetas de ejemplo que se dibujan dentro de los marcos de navegador.
   Son conceptos decorativos: no son clientes reales. */
(function () {
  'use strict';

  var DEMOS = {
    dental:
      '<div class="d d-dental" aria-hidden="true">' +
        '<div class="d-nav"><b class="d-brand">Clínica Sonríe</b>' +
          '<span class="d-links"><span>Servicios</span><span>Equipo</span><span>Citas</span></span>' +
          '<span class="d-pill">Agendar</span></div>' +
        '<div class="d-main">' +
          '<span class="d-badge">Primera valoración sin costo</span>' +
          '<div class="d-title">Cuidamos tu sonrisa sin afanes</div>' +
          '<p class="d-sub">Ortodoncia, estética e implantes con un equipo que te explica cada paso.</p>' +
          '<div class="d-row d-chips"><span>Ortodoncia</span><span>Blanqueamiento</span><span>Implantes</span><span>Limpieza</span></div>' +
        '</div>' +
        '<div class="d-foot"><span>Lunes a sábado, 8 am a 6 pm</span><span>Bogotá</span></div>' +
      '</div>',

    gym:
      '<div class="d d-gym" aria-hidden="true">' +
        '<div class="d-nav"><b class="d-brand">FUERZA 24</b>' +
          '<span class="d-links"><span>Planes</span><span>Coaches</span><span>Sedes</span></span>' +
          '<span class="d-pill">Primer mes gratis</span></div>' +
        '<div class="d-main">' +
          '<div class="d-title">Sin excusas. Con plan.</div>' +
          '<p class="d-sub">Entrenadores certificados, nutrición y seguimiento semanal para que no entrenes a ciegas.</p>' +
          '<div class="d-stats"><div><b>3</b>sedes</div><div><b>12</b>coaches</div><div><b>6 am</b>abrimos</div></div>' +
        '</div>' +
        '<div class="d-foot"><span>Clase de prueba por WhatsApp</span></div>' +
      '</div>',

    resto:
      '<div class="d d-resto" aria-hidden="true">' +
        '<div class="d-nav"><b class="d-brand">La Brasa</b>' +
          '<span class="d-links"><span>Menú</span><span>Sedes</span></span>' +
          '<span class="d-pill">Pedir ahora</span></div>' +
        '<div class="d-main"><div class="d-split">' +
          '<div style="display:grid;gap:1em">' +
            '<div class="d-title">Carne a la parrilla, directo a tu mesa</div>' +
            '<div class="d-menu">' +
              '<div><span>Picada para dos</span><b>$58.000</b></div>' +
              '<div><span>Costillas BBQ</span><b>$42.000</b></div>' +
              '<div><span>Lomo al carbón</span><b>$39.000</b></div>' +
            '</div>' +
            '<div class="d-row"><span class="d-pill">Pedir por WhatsApp</span><span class="d-ghost">Ver menú</span></div>' +
          '</div>' +
          '<div class="d-plate"></div>' +
        '</div></div>' +
        '<div class="d-foot"><span>Todos los días, 12 pm a 10 pm</span><span>Domicilios en el norte de Bogotá</span></div>' +
      '</div>',

    consult:
      '<div class="d d-consult" aria-hidden="true">' +
        '<div class="d-nav"><b class="d-brand">Alba Consultores</b>' +
          '<span class="d-links"><span>Servicios</span><span>Casos</span><span>Contacto</span></span>' +
          '<span class="d-pill">Agendar llamada</span></div>' +
        '<div class="d-main"><div class="d-split">' +
          '<div style="display:grid;gap:1em">' +
            '<div class="d-title">Decisiones claras para hacer crecer tu empresa</div>' +
            '<p class="d-sub">Estrategia, finanzas y marketing para pymes que quieren pasar al siguiente nivel.</p>' +
          '</div>' +
          '<div class="d-metrics">' +
            '<div class="d-metric d-metric-accent"><b>Gratis</b>llamada de diagnóstico</div>' +
            '<div class="d-metric"><b>15 días</b>para tener tu plan listo</div>' +
          '</div>' +
        '</div></div>' +
        '<div class="d-foot"><span>Bogotá y atención virtual</span></div>' +
      '</div>'
  };

  var slots = document.querySelectorAll('[data-demo]');
  for (var i = 0; i < slots.length; i++) {
    var key = slots[i].getAttribute('data-demo');
    if (DEMOS[key]) slots[i].innerHTML = DEMOS[key];
  }
})();
