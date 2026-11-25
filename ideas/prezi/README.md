# Ideas y Prototipos Guardados — Experimentos Estilo Prezi

Esta carpeta conserva los prototipos de navegación y visualización espacial tipo Prezi elaborados durante el desarrollo de la presentación final (`SIA 2026 — CURZAS-UNCo`), mientras la presentación activa mantiene su estilo editorial clásico original.

## Variantes archivadas

### 1. `01_mapa_panoramico_general/` (Commit original `708a210`)
- **Concepto:** Overlay panorámico a pantalla completa (`Vista General › Bloque › Filmina`) con los 5 planetas de bloques, vuelos automáticos entre bloques al avanzar/retroceder (`Auto-Zoom Bloques`) y acceso desde el botón `Mapa (P)` o clic en el bloque.
- **Archivos guardados:** `prezi.css`, `prezi_map.js` (`PreziController`) e `integracion.patch` (parche de integración sobre `index.html` y `js/app.js`).

### 2. `02_filmina1_inline_prezi/` (Commit original `60cb40b`)
- **Concepto:** Escenario Prezi embebido directamente dentro del contenedor de la **Filmina 1** (`#slide-card > #slide-prezi-stage`), con Planeta Maestro a la izquierda, 5 planetas temáticos en arco curvo orbital derecho, 20 satélites desplegables en Nivel 1 y lente de detalle enriquecido en Nivel 2 con salto directo a filminas.
- **Archivos guardados:** `prezi.css`, `prezi_map.js` (`InlinePreziStage`), `slide1_prezi_data.js` (datos jerárquicos `preziInline`) e `integracion.patch`.
