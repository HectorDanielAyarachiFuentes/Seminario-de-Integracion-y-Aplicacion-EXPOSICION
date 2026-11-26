# Reglas del Proyecto — Presentación y TFG (CURZAS-UNCo)

- Archivo único de instrucciones en la raíz (`AGENTS.md`); todas las skills y guías de agente se unifican bajo `.agents/` (`skills/anatomy/` y `docs/gitnexus/`).
- Indexado GitNexus acotado por `.gitnexusignore` al código activo (`index.html`, `js/`, `css/`, `data/`).
- **Optimización de tokens:** evitar llamadas automáticas a GitNexus (`impact`, `analyze`, `detect_changes`) en cambios de contenido, textos `.qmd`, CSS o ajustes puntuales en escenas 3D; usarlas solo ante refactors estructurales grandes o renombrados globales.
