# 🎓 Sistema de Presentación Interactiva 3D — Defensa de Anteproyecto de TFG (12 Filminas)

**Seminario de Integración y Aplicación (SIA 2025/2026)**  
**Centro Universitario Regional Zona Atlántica y Sur (CURZAS)**  
**Universidad Nacional del Comahue (UNCo)**  

* **Autor:** Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes (Legajo CURZA-8284 — DNI N° 35.492.138)  
* **Cátedra:** Dra. Deborah Noguera, Esp. Federico Abeiro, Esp. María Cecilia Aguirre  
* **Marco Normativo:** Res. CD-CURZAS N° 266/23 | Estatuto UNCo Ord. CS N° 0988/2025 | Normas APA 7ma Edición  
* **Duración estipulada:** 15 minutos cronometrados (~1.25 min por filmina)  

---

## 🌟 Arquitectura y Desacoplamiento de Metadatos

La presentación fue desarrollada con arquitectura **100% desacoplada**: todo el contenido textual, los cronometrajes, los guiones del orador, los diagramas vectoriales SVG y las respuestas al jurado residen en archivos de datos externos:

```text
├── index.html                   # Interfaz semántica, visores modales y fallback offline
├── README.md                    # Manual de uso, atajos y catálogo de diagramas
├── assets/
│   ├── CURZAS.png               # Emblema oficial en alta resolución
│   ├── Sistemas-longo.svg       # Diagrama oficial de subsistemas (Francisco Longo, 2006)
│   ├── subsistemas_longo.svg    # Desglose operativo de estrategia y subsistemas de RRHH
│   ├── modelo_360.svg           # Arquitectura circular del modelo 360° en CURZAS
│   └── red_territorial.svg      # Mapeo territorial de Viedma y 10 Nodos (Res. 196/2022)
├── css/
│   └── styles.css               # Estilos Glassmorphism de alto contraste, visores y HUD
├── data/
│   ├── presentacion_data.js     # 📌 12 FILMINAS OFICIALES EN 3 EJES, GUIONES Y FICHAS
│   └── catedra_data.js          # 📚 Índice de 95 documentos de cátedra
└── js/
    ├── vendor/                  # Copias locales de Three.js (r128) y GSAP (3.12.5)
    ├── objetos/                 # Esculturas 3D modulares (bloque1–5, materials, helpers)
    ├── scene3d.js               # Motor Three.js + GSAP con transiciones en profundidad
    └── app.js                   # Controlador de 12 filminas, atril, visor SVG y cronómetro 15 min
```

---

## 📐 Catálogo de Diagramas Vectoriales SVG Oficiales

Los diagramas pueden observarse de forma interactiva en pantalla completa mediante el botón de la tarjeta o con la tecla **`V`**:

1. **`assets/red_territorial.svg` (Filmina 2):** *Mapeo Territorial y Red de Nodos de Docencia Híbrida*. Distribución de la Sede Cabecera Viedma y los 10 Nodos Territoriales bajo Res. CD-CURZA N° 196/2022.
2. **`assets/Sistemas-longo.svg` (Filmina 6):** *Subsistemas de la Gestión de Recursos Humanos (Francisco Longo, 2006)*. Modela la alineación estratégica, la planificación y la retroalimentación continua entre el Rendimiento y el Desarrollo Docente.
3. **`assets/modelo_360.svg` (Filmina 7):** *Arquitectura Circular del Modelo 360° en CURZAS*. Triangulación formativa de 4 cuadrantes (Autoevaluación, Pares, Estudiantes, Dirección) con blindaje de anonimato y anclaje exclusivo en el Art. 76 (Capacitación Continua).
4. **`assets/subsistemas_longo.svg`:** *Estrategia y Subsistemas de RRHH (Detalle Operativo)*. Diagrama analítico ampliado con flujos de compensación, empleo y relaciones laborales.

---

## 📋 Estructura Canónica de las 12 Filminas Oficiales (15 Minutos)

* **Apertura Protocolar (Filmina 1):** Carátula Oficial y Presentación del Anteproyecto (`anim_01`).
* **Eje I — El Problema (Filminas 2 a 4):**
  2. **[SVG]** Tema de Investigación: El CURZAS y sus 10 Nodos (`anim_06`).
  3. Delimitación del Objeto Problema y Tensión Normativa Art. 75 vs. Art. 76 (`anim_09`).
  4. Pregunta de Investigación y Definición de Objetivos (`anim_11`).
* **Eje II — Estado de la Cuestión y Marco Teórico (Filminas 5 a 7):**
  5. Estado de la Cuestión: Antecedentes en 3 Escalas y Vacancia (`anim_17`).
  6. **[SVG]** Marco Teórico: Enrique de la Garza y Francisco Longo (`anim_12`).
  7. **[SVG]** Dispositivo 360° Formativo y Poligobernanza (`anim_15`).
* **Eje III — Metodología, Fases y Viabilidad (Filminas 8 a 11):**
  8. Estrategia Metodológica Mixta (`CUAL → cuan`) y Muestra Situada (`anim_19`).
  9. Matriz de Operacionalización en Cinco Dimensiones (`anim_20`).
  10. Fases de Campo, Cronograma (7 Meses) y Viabilidad (`anim_21`).
  11. Garantías Éticas, Protección de Datos (Ley 25.326) y No Afectación (`anim_23`).
* **Cierre y Proyecciones (Filmina 12):** Proyecciones de Factibilidad, Valor Público y Espacio para el Tribunal (`anim_25`).

---

## ⌨️ Atajos de Teclado Profesionales

| Tecla | Acción |
| :---: | :--- |
| `→` o `Espacio` o `AvPág` | Avanzar a la siguiente filmina |
| `←` o `RePág` | Retroceder a la filmina anterior |
| `I` | Abrir / Cerrar **Índice Canónico (3 Ejes)** |
| `V` | **Observar Diagrama Vectorial SVG** de la filmina actual en pantalla completa |
| `D` | **Modo Ver Texto**: Expandir tarjeta de lectura |
| `O` | **Modo Ver Objeto**: Centrar y ampliar la escultura 3D |
| `R` | Restablecer rotación y centrar vista 3D |
| `T` | Iniciar / Pausar el cronómetro de 15 minutos |
| `N` | Abrir / Cerrar el **Atril del Orador** (*teleprompter* con pausas y énfasis) |
| `M` | Abrir / Cerrar el panel de **Respaldo Metodológico** (o maximizar visor abierto) |
| `B` | Abrir / Cerrar **Material Cátedra (95 Docs)** |
| `F` | Activar / Desactivar pantalla completa |
| `?` | Ver ayuda de atajos |
| `Escape` | Cerrar cualquier visor o panel activo |

---

## 🚀 ¿Cómo Ejecutar la Presentación?

* **Opción Recomendada (Servidor Local):** Ejecuta `python -m http.server 8000` en PowerShell y accede a `http://localhost:8000` (permite visualizar todos los PDFs en el visor embebido).
* **Opción Directa:** Abre [index.html](index.html) en Edge, Chrome, Brave o Firefox. Incluye respaldo local en `js/vendor/` para funcionar sin conexión a Internet.
