# Reglas del Proyecto — Presentación y TFG (CURZAS-UNCo)

- Archivo único de instrucciones en la raíz (`AGENTS.md`); todas las skills y guías de agente se unifican bajo `.agents/` (`skills/anatomy/`, `docs/gitnexus/` y `docs/reglas_redaccion_anteproyecto.md`).
- **Rigor de Anteproyecto (obligatorio):** Este trabajo es un proyecto previo (campo previsto para 2027). Redactar **siempre en potencial** sobre el estudio, hallazgos y propuestas; no dar por sentadas realidades empíricas no relevadas; plantear la vacancia como **posible vacancia preliminar a contrastar**; y respetar el deslinde **factibilidad (modelo 360°)** vs. **viabilidad (ejecución del estudio)**. Ver guía completa en `.agents/docs/reglas_redaccion_anteproyecto.md`.
- Indexado GitNexus acotado por `.gitnexusignore` al código activo (`index.html`, `js/`, `css/`, `data/`).
- **Optimización de tokens:** evitar llamadas automáticas a GitNexus (`impact`, `analyze`, `detect_changes`) en cambios de contenido, textos `.qmd`, CSS o ajustes puntuales en escenas 3D; usarlas solo ante refactors estructurales grandes o renombrados globales.
