# Reglas del Proyecto — Presentación y TFG (CURZAS-UNCo)

- El alcance de indexado GitNexus está acotado mediante `.gitnexusignore` al código activo (`index.html`, `js/`, `css/`, `data/`).
- **Optimización de tokens:** evitar llamadas automáticas a GitNexus (`impact`, `analyze`, `detect_changes`) en cambios de contenido, textos `.qmd`, CSS o ajustes puntuales en escenas 3D; usarlas solo ante refactors estructurales grandes o renombrados globales.
