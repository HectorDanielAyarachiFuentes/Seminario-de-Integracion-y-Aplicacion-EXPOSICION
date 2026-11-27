// =============================================================================
// ENSAMBLADOR DE MATERIAL DE CÁTEDRA — SIA (CURZAS - UNCo)
// Los módulos fuente viven en data/catedra/*.js
// =============================================================================
(function () {
  const C = window.CATEDRA_PARTS || {};
  window.CATEDRA_MATERIAL_DATA = [].concat(
    C.unidades12 || [],
    C.unidades34 || [],
    C.tfg || [],
    C.redaccionActividades || []
  );
})();
