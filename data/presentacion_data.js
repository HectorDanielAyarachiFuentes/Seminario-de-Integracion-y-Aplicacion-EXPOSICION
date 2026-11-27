// =============================================================================
// ENSAMBLADOR DE DATOS DE LA PRESENTACIÓN — DEFENSA TFG (CURZAS - UNCo)
// Los módulos fuente viven en data/presentacion/*.js
// =============================================================================
(function () {
  const P = window.PRESENTACION_PARTS || {};
  const mt = P.metaTiming || {};
  window.PRESENTACION_DATA = {
    meta: mt.meta || {},
    timing: mt.timing || {},
    fichasRespaldo: Object.assign({}, P.fichasRespaldoBase || {}, {
      bibliografia: P.bibliografia || []
    }),
    slides: [].concat(
      P.slidesApertura || [],
      P.slidesEje1 || [],
      P.slidesEje2 || [],
      P.slidesEje3 || [],
      P.slidesCierre || []
    )
  };
})();
