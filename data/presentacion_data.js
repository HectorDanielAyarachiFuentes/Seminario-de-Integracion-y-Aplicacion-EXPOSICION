/**
 * =============================================================================
 * METADATOS Y CONTENIDO DE LA PRESENTACIÓN FINAL — TFG / TESINA (12 FILMINAS)
 * Universidad Nacional del Comahue — CURZAS
 * Seminario de Integración y Aplicación (SIA 2026)
 * Autor: Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes
 * =============================================================================
 * ESTRUCTURA CANÓNICA ESPEJADA DEL TRABAJO PRÁCTICO Nº 4 INTEGRAL (15 MINUTOS):
 * 1. Apertura Protocolar y Carátula Oficial (Filmina 1 - Apartado 1 del TP)
 * 2. EJE I (2-El problema): Tema/Territorio, Tensión y Objetivos (Filminas 2 a 4 - Apartados 2, 3 y 4 del TP)
 * 3. EJE II (3-Estado de la cuestión...): Antecedentes/Vacancia, Marco Teórico y 360° (Filminas 5 a 7 - Apartados 5 y 6 del TP)
 * 4. EJE III (4-Metodología): Diseño Mixto, 5 Dimensiones, Cronograma y Ética (Filminas 8 a 11 - Apartados 7, 8 y 9 del TP)
 * 5. Cierre: Síntesis de Factibilidad, Conclusiones y Espacio para el Tribunal (Filmina 12)
 */

const PRESENTACION_DATA = {
  meta: {
    institucion: "Universidad Nacional del Comahue",
    sede: "Complejo Universitario Regional Zona Atlántica y Sur (CURZAS)",
    departamento: "Departamento de Administración Pública",
    carrera: "Ciclo de Complementación Curricular de la Licenciatura en Gestión de Recursos Humanos",
    materia: "Seminario de Integración y Aplicación (SIA)",
    titulo: "Evaluación del Desempeño Docente y Factibilidad de Implementación de un Modelo de Retroalimentación 360°",
    subtitulo: "Enfoque formativo situado en el Departamento de Administración Pública del CURZAS-UNCo (2027)",
    autor: "Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes",
    legajo: "Legajo N° 8252 — DNI N° 35.492.138",
    email: "hectordanielayarachifuentes@gmail.com",
    director: "A designar antes de finalizar el cursado del SIA",
    codirector: "A designar antes de finalizar el cursado del SIA",
    docentes: [
      { nombre: "Dra. Deborah Noguera", rol: "Docente Responsable de Cátedra" },
      { nombre: "Esp. Federico Abeiro", rol: "Docente de Cátedra" },
      { nombre: "Esp. María Cecilia Aguirre", rol: "Docente de Cátedra" }
    ],
    normativaMarco: "Resolución CD-CURZAS N° 266/23 (Reglamento de TFG) • Estatuto UNCo (Ord. CS N° 0988/2025)",
    ano: "2026",
    lugar: "Viedma, Río Negro — República Argentina"
  },

  timing: {
    totalMinutos: 15,
    alertaAmarillaMinutos: 11, // Advertencia visual a los 11 min (quedan 4 min)
    alertaRojaMinutos: 13.5,   // Cierre inminente a los 13:30 min (queda 1:30 min para conclusión)
    promedioPorSlideMin: 1.25  // ~1:15 min por filmina (12 filminas * 1.25 min = 15:00 min)
  },

  // 6 Pestañas de Respaldo Metodológico para el Tribunal Evaluador (Atajo: Tecla 'M')
  fichasRespaldo: {
    autores: [
      {
        autor: "Francisco Longo (2006)",
        concepto: "Modelo analítico de subsistemas de empleo público: rendimiento, desarrollo, organización del trabajo, relaciones humanas y sociales. Fundamento para superar la auditoría punitiva y orientar la gestión pública a la generación de valor social."
      },
      {
        autor: "Enrique de la Garza Toledo (2001)",
        concepto: "Epistemología crítica: la teoría como 'configuración abierta'. Red conceptual flexible para reconstruir el campo de lo institucionalmente viable en organizaciones complejas."
      },
      {
        autor: "Carlos Matus (1993)",
        concepto: "Planificación Estratégica Situacional (PES): las universidades públicas operan en 'arenas de poder compartido'. La viabilidad de una innovación no se decreta; se construye concertando sobre variables de control compartido en cogobierno."
      },
      {
        autor: "Oscar Oszlak (2020)",
        concepto: "El Estado en la era exponencial: incorporación inteligente de plataformas digitales (Moodle/SIU) para expandir capacidades institucionales, garantizando anonimato técnico y evitando el tecno-autoritarismo."
      },
      {
        autor: "Horacio Cao & Gustavo Blutman (2023)",
        concepto: "Poligobernanza y Estado plataforma: redes horizontales y gestión de la complejidad situada que articulan a Rectorado, Centros Regionales y Nodos en el territorio patagónico."
      },
      {
        autor: "Catalina Wainerman & Ruth Sautu (2005, 2011)",
        concepto: "Desnaturalización de las rutinas cotidianas para formular un problema científico genuino, estructurando la investigación en pirámide invertida y matriz de consistencia."
      },
      {
        autor: "Obando Freire (2014) & Sifuentes (2016)",
        concepto: "Estudios empíricos sobre evaluación 360° en universidades: demuestran que la triangulación multiactoral supera el 85% de aceptación docente siempre que exista 100% de confidencialidad y destino formativo exclusivo."
      }
    ],

    normativa: [
      {
        norma: "Resolución CD-CURZAS N° 266/23",
        descripcion: "Reglamento formal de Trabajos Finales de Graduación del CURZAS-UNCo. Define la estructura canónica en 3 tiempos/partes y los criterios de viabilidad del TFG."
      },
      {
        norma: "Ordenanza CS N° 0988/2025 (Estatuto UNCo)",
        descripcion: "Nuevo Estatuto: Art. 17 define al CURZAS como Complejo Universitario Regional; Título X regula la Carrera Docente (Art. 75: permanencia sumativa cuatrienal; Art. 76: Programa Anual de Capacitación Departamental)."
      },
      {
        norma: "Decreto PEN N° 1246/2015 (CCT Docente Universitario)",
        descripcion: "Convenio Colectivo de Trabajo Docente. Protege la estabilidad laboral, libertad de cátedra y establece garantías de debido proceso y tutela gremial paritaria (ADUNC)."
      },
      {
        norma: "Resolución CD-CURZA N° 196/2022 (Docencia Híbrida)",
        descripcion: "Reglamenta las mediaciones tecnológicas, la presencialidad remota sincrónica y las tutorías virtuales en la Red de Nodos Territoriales del CURZAS, exigiendo evaluar nuevas competencias docentes."
      },
      {
        norma: "Ordenanza CS N° 0910/1997 y modif.",
        descripcion: "Reglamento General de Carrera Docente de la UNCo: pautas históricas de informes anuales de cátedra y encuestas estudiantiles sumativas."
      },
      {
        norma: "Ley Nacional N° 25.326",
        descripcion: "Protección de los Datos Personales. Marco legal para la disociación estricta de identidades, inhabilitación de metadatos/IP y resguardo del anonimato en sondeos."
      }
    ],

    objetivos: [
      {
        nivel: "Objetivo General",
        texto: "Determinar las condiciones de factibilidad organizacional, técnica, normativa y de gobernanza multinivel para la implementación de un modelo de retroalimentación multiactoral (360°) en la evaluación del desempeño docente en el Departamento de Administración Pública del CURZAS-UNCo (2027)."
      },
      {
        nivel: "Objetivo Específico 1 (Dimensión Normativa-Institucional)",
        texto: "Relevar y caracterizar los instrumentos normativos, procedimientos y prácticas vigentes aplicadas a la evaluación del desempeño docente en el Departamento, distinguiendo prescripciones estatutarias de su aplicación empírica real."
      },
      {
        nivel: "Objetivo Específico 2 (Dimensión Intersubjetiva-Cultural)",
        texto: "Explorar las percepciones, disposiciones y representaciones de los actores institucionales involucrados (docentes y estudiantes) y de las autoridades respecto a la retroalimentación 360° y la confianza institucional requerida."
      },
      {
        nivel: "Objetivo Específico 3 (Dimensión Gobernanza Multinivel)",
        texto: "Identificar los condicionantes técnico-organizacionales, normativos y de gobernanza multinivel (acuerdos paritarios, confidencialidad, carrera docente y cogobierno) que inciden en la factibilidad del modelo."
      },
      {
        nivel: "Objetivo Específico 4 (Dimensión Propositiva-Orientativa)",
        texto: "Proponer lineamientos orientativos para una eventual implementación formativa del modelo 360°, en función de las condiciones y límites de factibilidad identificados en la investigación empírica."
      }
    ],

    dimensiones: [
      {
        dim: "1. Factibilidad Normativa y Estatutaria",
        detalle: "Adecuación al Estatuto UNCo (Ord. 0988/2025) y al CCT Docente (Dec. 1246/2015). Desacoplamiento absoluto de la permanencia punitiva del Art. 75 y anclaje exclusivo en el Art. 76 (capacitación)."
      },
      {
        dim: "2. Factibilidad Técnica e Instrumental",
        detalle: "Disponibilidad de plataformas institucionales (Moodle/SIU), usabilidad en menos de 15 minutos, inhabilitación de logs/IP y blindaje de anonimato para mitigar la fatiga evaluativa."
      },
      {
        dim: "3. Factibilidad Organizacional y Procedimental",
        detalle: "Capacidad departamental para procesar la retroalimentación multiactoral y transferir diagnósticos al Programa Anual de Capacitación Docente sin sobrecargar los circuitos administrativos."
      },
      {
        dim: "4. Factibilidad Cultural y Actitudinal",
        detalle: "Clima de confianza institucional, disposición a la autoevaluación reflexiva, receptividad ante la mirada de pares y seriedad del juicio pedagógico estudiantil."
      },
      {
        dim: "5. Factibilidad de Gobernanza Multinivel",
        detalle: "Viabilidad política de deliberación y búsqueda de consensos en los órganos de cogobierno (Consejo Departamental y Directivo) y concertación paritaria con ADUNC (variables de control compartido)."
      }
    ],

    territorio: [
      {
        sede: "Sede Cabecera: Viedma (Valle Inferior)",
        detalle: "Sede central académica y administrativa del CURZAS. Concentra los claustros docentes, la dirección departamental y los órganos colegiados de cogobierno."
      },
      {
        sede: "Nodo 1: San Antonio Oeste (Golfo San Matías)",
        detalle: "Nodo estratégico en la costa atlántica rionegrina, nexo pesquero y portuario con cursadas híbridas mediadas por tecnología."
      },
      {
        sede: "Nodo 2: Sierra Grande (Costa Atlántica Sur)",
        detalle: "Población vinculada a la costa y minería en el límite sur de la provincia, con alta demanda de tutoría virtual continua."
      },
      {
        sede: "Nodo 3: General Conesa (Valle Inferior / Nexo)",
        detalle: "Punto de confluencia vial y productivo sobre el Río Negro que articula el Valle Inferior con el Valle Medio."
      },
      {
        sede: "Nodo 4: Lamarque (Valle Medio)",
        detalle: "Inserción territorial en la región productiva del Valle Medio y la isla de Choele Choel."
      },
      {
        sede: "Nodo 5: Valcheta (Portal de la Línea Sur)",
        detalle: "Puerta de entrada a la estepa rionegrina; aulas híbridas formalizadas bajo Res. CD-CURZA N° 196/2022."
      },
      {
        sede: "Nodo 6: Ramos Mexía (Meseta de Somuncura)",
        detalle: "Comunidad de la estepa profunda patagónica a más de 400 km de Viedma con cursadas híbridas sincrónicas y asincrónicas."
      },
      {
        sede: "Nodo 7: Sierra Colorada (Centro Geográfico Provincial)",
        detalle: "Centro geográfico exacto de la Provincia de Río Negro; articulación clave sobre la Ruta Nacional 23."
      },
      {
        sede: "Nodo 8: Los Menucos (Región Sur Central)",
        detalle: "Cruce neurálgico de las Rutas Provincial 6 y Nacional 23 en la estepa central patagónica."
      },
      {
        sede: "Nodo 9: Maquinchao (Estepa Sur)",
        detalle: "Localidad con rigurosas condiciones climáticas y distancias geográficas que exigen acompañamiento tutorial a distancia."
      },
      {
        sede: "Nodo 10: Comallo (Precordillera Andina)",
        detalle: "Nodo situado en el extremo occidental de la Línea Sur, antesala del corredor andino de Bariloche."
      }
    ],

    faq: [
      {
        pregunta: "¿Por qué un modelo 360° y no la tradicional encuesta estudiantil?",
        respuesta: "La encuesta estudiantil aislada genera sesgos de complacencia o castigo a la exigencia académica. El modelo 360° triangula 4 miradas: autoevaluación del docente, coevaluación de pares de cátedra, apreciación estudiantil y visión de la dirección departamental."
      },
      {
        pregunta: "¿Cómo se previene el riesgo de que el modelo sea percibido como persecutorio?",
        respuesta: "Mediante dos blindajes: 1) Blindaje Normativo: desacoplamiento absoluto del Art. 75 del Estatuto (permanencia) y vinculación exclusiva con el Art. 76 (capacitación continua); 2) Blindaje Técnico: anonimato estadístico auditado por comisiones paritarias."
      },
      {
        pregunta: "¿Qué rol juega el Convenio Colectivo de Trabajo (Dec. 1246/15)?",
        respuesta: "Es el marco protector rector. El CCT prohíbe modificaciones unilaterales en las condiciones de trabajo docente. Por tanto, el modelo 360° no puede imponerse burocráticamente; debe construirse como acuerdo paritario negociado (Matus: poder compartido)."
      },
      {
        pregunta: "¿Cómo incide la Red de Nodos Territoriales en la evaluación?",
        respuesta: "Bajo la Res. 196/2022, la labor del docente del CURZAS abarca diseñar entornos Moodle, coordinar videoconferencias y tutorizar a distancia en parajes alejados. Los cuestionarios tradicionales en papel no contemplan estas competencias pedagógicas híbridas."
      },
      {
        pregunta: "¿Cuál es el valor público concreto que este TFG aporta al CURZAS?",
        respuesta: "Brinda por primera vez evidencia empírica rigurosa y un diagnóstico de factibilidad situado en la Patagonia, permitiendo a las autoridades universitarias tomar decisiones informadas sobre políticas de desarrollo docente sin importar recetas enlatadas."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LAS 12 FILMINAS ESTRATÉGICAS — ORDEN ESPEJADO DEL TRABAJO PRÁCTICO (SIA)
  // ═══════════════════════════════════════════════════════════════════════════
  slides: [
    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 1: APERTURA PROTOCOLAR (Apartado 1 del TP)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_1",
      numero: 1,
      bloque: "APERTURA PROTOCOLAR",
      esquema: "Carátula Oficial y Presentación Situada",
      badge: "UNCo • CURZAS • Lic. en Gestión de RRHH",
      titulo: "Evaluación Docente y Factibilidad del Modelo 360°",
      subtitulo: "Enfoque Formativo Situado en el Dpto. de Administración Pública (2027)",
      puntosClave: [
        "🎓 <strong>Carrera:</strong> Licenciatura en Gestión de Recursos Humanos (CCC) — CURZAS",
        "👤 <strong>Tesista:</strong> Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes (Legajo 8252)",
        "🏛️ <strong>Marco Institucional:</strong> Universidad Nacional del Comahue (Viedma y Nodos)",
        "👥 <strong>Cátedra SIA:</strong> Dra. Deborah Noguera • Esp. Federico Abeiro • Esp. María Cecilia Aguirre"
      ],
      metadatosFooter: "Carátula Oficial • Apartado 1 del TP • Res. CD-CURZAS 266/23 • Tiempo: 15:00 min",
      escena3D: "anim_01",
      guionOrador: "Muy buenos días, miembros del tribunal evaluador, Dra. Deborah Noguera, Esp. Federico Abeiro y Esp. María Cecilia Aguirre. Inicio formalmente la defensa de mi Proyecto de Trabajo Final de Graduación titulado 'Evaluación del Desempeño Docente y Factibilidad de Implementación de un Modelo de Retroalimentación 360° en el Departamento de Administración Pública del CURZAS-UNCo (2027)'. Siguiendo con total fidelidad la estructura de nuestro Trabajo Práctico de cátedra, esta exposición se organiza en tres momentos clave: primero, El Problema; segundo, el Estado de la Cuestión y Marco Teórico; y tercero, la Metodología y Viabilidad, ajustándome estrictamente al tiempo pautado de 15 minutos."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EJE I: PRIMERA PARTE DEL TP — 2-EL PROBLEMA (Apartados 2, 3 y 4)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_2",
      numero: 2,
      bloque: "EJE I: 2-EL PROBLEMA",
      esquema: "Tema de Investigación y Territorio (Apartado 2)",
      badge: "Eje 1 • Tema y Territorio • Res. 135/2022",
      titulo: "Tema de Investigación: El CURZAS y sus 10 Nodos",
      subtitulo: "Contexto Situado y Nuevas Mediaciones Tecnológicas (Res. CD-CURZA 196/2022)",
      puntosClave: [
        "🏛️ <strong>Sede Cabecera Viedma:</strong> Conducción académica y órganos de cogobierno en el Valle Inferior.",
        "🌐 <strong>Red de 10 Nodos:</strong> Costa Atlántica, Valle Medio y Línea Sur a más de 500 km.",
        "🤝 <strong>Convenios de Cogestión (Hintze):</strong> Articulación con Municipios para democratizar el acceso universitario.",
        "💻 <strong>Docencia Híbrida Situada:</strong> Clases sincrónicas, aulas virtuales Moodle y tutorías a distancia."
      ],
      metadatosFooter: "Primera Parte del TP • Apartado 2: Tema y Contexto • 10 Nodos Territoriales",
      escena3D: "anim_06",
      diagramaSVG: "assets/red_territorial.svg",
      guionOrador: "En concordancia con el Apartado 2 del TP, delimitamos el Tema de Investigación y su contexto situado. Nuestro estudio no se ubica en un claustro universitario tradicional ni en una metrópoli; el CURZAS cuenta con una estructura territorial singular formalizada por la Resolución 135/2022: una red que articula desde Viedma hacia 10 nodos regionales en toda la geografía rionegrina. Como señala Hintze, opera bajo convenios de cogestión municipal. A su vez, la Resolución 196/2022 formalizó la docencia híbrida: los docentes de Administración Pública y RRHH deben diseñar entornos virtuales y tutorizar alumnos a más de 500 km. Sin embargo, los instrumentos vigentes de evaluación docente son formularios en papel totalmente ciegos ante estas competencias pedagógicas situadas."
    },

    {
      id: "slide_3",
      numero: 3,
      bloque: "EJE I: 2-EL PROBLEMA",
      esquema: "Delimitación del Problema y Tensión (Apartado 3)",
      badge: "Eje 1 • Desnaturalización • Art. 75 vs 76",
      titulo: "Delimitación del Objeto Problema y Tensión Normativa",
      subtitulo: "De la Rutina Burocrática a la Tensión Estatutaria: Art. 75 (Vacancia) vs. Art. 76 (Capacitación)",
      puntosClave: [
        "🔍 <strong>Desnaturalización (Wainerman & Sautu):</strong> Superar el ritual burocrático de la planilla de fin de curso.",
        "⚖️ <strong>Art. 75 Estatuto UNCo (Control Sumativo):</strong> Dos evaluaciones desfavorables causan pérdida del cargo (resistencia gremial ADUNC).",
        "🌱 <strong>Art. 76 Estatuto UNCo (Capacitación Continua):</strong> Mandato estatutario de perfeccionamiento pedagógico docente.",
        "🔑 <strong>Desacoplamiento Estratégico:</strong> Desvincular el modelo 360° de la permanencia y anclarlo de forma 100% confidencial en la capacitación."
      ],
      metadatosFooter: "Primera Parte del TP • Apartado 3: Delimitación del Objeto Problema • Ord. CS 0988/2025",
      escena3D: "anim_09",
      guionOrador: "Avanzando al Apartado 3 del TP, aplicamos la vigilancia epistemológica de Wainerman y Sautu, desnaturalizando la creencia cotidiana de que evaluar al docente es repartir una encuesta rápida al cerrar el cuatrimestre. Al indagar las normas institucionales identificamos una fuerte tensión estructural en el nuevo Estatuto de la UNCo: el Artículo 75 dispone que dos evaluaciones desfavorables consecutivas provocan la vacancia del cargo docente, generando una lógica de fiscalización y comprensible resistencia gremial. En contraste, el Artículo 76 prescribe programas departamentales de capacitación continua. La solución que viabiliza nuestro proyecto radica en el desacoplamiento: desvincular el modelo 360° de los jurados de permanencia y orientarlo de forma 100% confidencial y formativa al Artículo 76."
    },

    {
      id: "slide_4",
      numero: 4,
      bloque: "EJE I: 2-EL PROBLEMA",
      esquema: "Pregunta Central y Objetivos del TFG (Apartado 4)",
      badge: "Eje 1 • Consistencia Metodológica • 2027",
      titulo: "Pregunta de Investigación y Definición de Objetivos",
      subtitulo: "Determinación de la Factibilidad Integral en el Ciclo Lectivo 2027 (CURZAS-UNCo)",
      puntosClave: [
        "❓ <strong>Pregunta General:</strong> ¿Cuáles son las condiciones de factibilidad organizacional, técnica, normativa y de gobernanza para implementar el modelo 360° formativo en 2027?",
        "🎯 <strong>Objetivo General:</strong> Determinar las condiciones de factibilidad integral del modelo 360° en el Dpto. de Administración Pública.",
        "📋 <strong>OE1 (Normativo):</strong> Relevar normas y contrastar prescripción estatutaria vs. prácticas empíricas reales.",
        "👥 <strong>OE2 (Cultural):</strong> Explorar percepciones, disposiciones y temores de docentes y estudiantes.",
        "⚙️ <strong>OE3 (Condicionantes):</strong> Identificar cuellos de botella técnicos, anonimato y diálogo paritario.",
        "💡 <strong>OE4 (Propositivo):</strong> Formular lineamientos orientativos viables adaptados al cogobierno."
      ],
      metadatosFooter: "Primera Parte del TP • Apartado 4: Objetivos del TFG • Matriz de Consistencia",
      escena3D: "anim_11",
      guionOrador: "Culminando la Primera Parte del TP, en el Apartado 4 formulamos la pregunta central: ¿Cuáles son las condiciones de factibilidad organizacional, técnica, normativa y de gobernanza multinivel para implementar un modelo 360° en el Departamento de Administración Pública en 2027? Diseñamos una matriz de consistencia rigurosa: el Objetivo General determina la factibilidad integral; el Objetivo Específico 1 audita la brecha entre la norma escrita y la práctica empírica; el Objetivo 2 explora las percepciones y temores docentes; el Objetivo 3 analiza los condicionantes técnicos y de cogobierno; y el Objetivo 4 elabora lineamientos orientativos viables para las autoridades."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EJE II: SEGUNDA PARTE DEL TP — 3-ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO (Apartados 5 y 6)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_5",
      numero: 5,
      bloque: "EJE II: 3-ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO",
      esquema: "Antecedentes y Estado del Arte (Apartado 5)",
      badge: "Eje 2 • Estado de la Cuestión • Vacancia",
      titulo: "Estado de la Cuestión: Antecedentes y Vacancia",
      subtitulo: "Relevamiento en Tres Escalas (Internacional, Nacional y Regional) y Originalidad Patagónica",
      puntosClave: [
        "🌍 <strong>Escala Internacional (Sifuentes, 2016; Obando, 2014):</strong> Aceptación >85% del 360° en universidades si hay anonimato y fin formativo.",
        "🇦🇷 <strong>Escala Nacional (Marquina, 2012; Pérez, 2021):</strong> Tensión entre carrera académica y didáctica; necesidad de evaluar tutorías híbridas.",
        "📍 <strong>Escala Regional (UNCo/CURZAS):</strong> Estatuto 2025 y Res. 196/2022; carencia de circuitos sistemáticos de retroalimentación reflexiva.",
        "🎯 <strong>Vacancia Científica Comprobada:</strong> Inexistencia de estudios empíricos de factibilidad 360° en universidades públicas cogobernadas con redes patagónicas."
      ],
      metadatosFooter: "Segunda Parte del TP • Apartado 5: Antecedentes y Estado del Arte • Vacancia Disciplinar",
      escena3D: "anim_17",
      guionOrador: "Ingresando a la Segunda Parte del TP, abordamos en primer término el Apartado 5: los Antecedentes y el Estado del Arte de la Cuestión. Siguiendo a Torraco y Jiménez, relevamos la literatura en tres escalas espaciales: a nivel internacional, investigaciones de Sifuentes en México y Obando Freire en Cuba demuestran que la evaluación 360° supera el 85% de aceptación docente si garantiza estricto anonimato y destino formativo. A nivel nacional, Marquina y Pérez advierten que las evaluaciones tradicionales descuidan la enseñanza de grado y las tutorías virtuales. Y a nivel regional, la UNCo carece de antecedentes en retroalimentación formativa. Esto comprueba una vacancia científica total: no existen estudios de factibilidad 360° en universidades públicas cogobernadas y descentralizadas en la Patagonia, lo que fundamenta la originalidad de este TFG."
    },

    {
      id: "slide_6",
      numero: 6,
      bloque: "EJE II: 3-ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO",
      esquema: "Marco Teórico: Epistemología y Longo (Apartado 6)",
      badge: "Eje 2 • Marco Teórico • Longo (2006)",
      titulo: "Marco Teórico: Enrique de la Garza y Francisco Longo",
      subtitulo: "La Teoría como Configuración Abierta y la Gestión Estratégica del Rendimiento Público",
      puntosClave: [
        "🌐 <strong>Configuración Abierta (De la Garza):</strong> Red conceptual flexible para interpretar organizaciones complejas y deliberativas.",
        "🏛️ <strong>Modelo de Empleo Público (Longo, 2006):</strong> Gestión de personas en el Estado orientada al mérito, el aprendizaje y el valor social.",
        "⚙️ <strong>Interdependencia de 4 Subsistemas:</strong> Rendimiento, Desarrollo (capacitación), Organización del Trabajo (nodos) y Relaciones Humanas (CCT).",
        "💡 <strong>Axioma Central de Longo:</strong> 'Evaluar el rendimiento sin conectarlo con el desarrollo constituye un ejercicio burocrático estéril'."
      ],
      metadatosFooter: "Segunda Parte del TP • Apartado 6: Marco Teórico Sustantivo • De la Garza & Longo",
      escena3D: "anim_12",
      diagramaSVG: "assets/Sistemas-longo.svg",
      guionOrador: "Avanzando al Apartado 6 del TP, desarrollamos el Marco Teórico. Epistemológicamente asumimos la teoría como configuración abierta, formulada por Enrique de la Garza: la universidad no es una máquina rígida, sino una trama dinámica construida por sujetos reflexivos. En lo sustantivo, adoptamos el modelo sistémico de gestión estratégica de recursos humanos en el sector público de Francisco Longo (2006). Como ilustra el diagrama oficial, Longo estructura el empleo público en subsistemas interconectados: evaluar el rendimiento docente carece de legitimidad si no alimenta al subsistema de desarrollo mediante capacitación continua, adecuando los perfiles de la organización del trabajo en los nodos y resguardando el diálogo paritario con ADUNC."
    },

    {
      id: "slide_7",
      numero: 7,
      bloque: "EJE II: 3-ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO",
      esquema: "Dispositivo 360° y Poligobernanza (Apartado 6)",
      badge: "Eje 2 • Triangulación 360° • Matus",
      titulo: "Dispositivo 360° Formativo y Poligobernanza",
      subtitulo: "Triangulación en Cuatro Cuadrantes, Poder Compartido (Matus) y Estado Plataforma (Oszlak)",
      puntosClave: [
        "🔄 <strong>Triangulación Multiactoral:</strong> 1) Autoevaluación docente; 2) Coevaluación de pares; 3) Apreciación estudiantil; 4) Dirección departamental.",
        "🤝 <strong>Poder Compartido (Carlos Matus):</strong> En el cogobierno colegiado la viabilidad no se impone; se concierta sobre variables de control compartido con ADUNC.",
        "🗺️ <strong>Poligobernanza (Cao & Blutman):</strong> Articulación horizontal y gestión de la complejidad situada entre Rectorado, Sede Viedma y Nodos.",
        "🖥️ <strong>Estado Plataforma (Oscar Oszlak):</strong> Tecnologías digitales públicas (Moodle/SIU) con anonimato auditado que previenen el tecno-control."
      ],
      metadatosFooter: "Segunda Parte del TP • Apartado 6: Conceptos Centrales • Matus, Cao/Blutman & Oszlak",
      escena3D: "anim_15",
      diagramaSVG: "assets/modelo_360.svg",
      guionOrador: "En los conceptos centrales del Apartado 6 operativizamos el dispositivo 360 grados y su gobernanza. El modelo circular triangula cuatro miradas: la autoevaluación reflexiva, la coevaluación entre pares de cátedra, la percepción estudiantil situada y la visión institucional del Departamento, canalizando sus resultados hacia el Artículo 76 de capacitación. Para asegurar su viabilidad política recurrimos a Carlos Matus: la universidad es una arena de poder compartido que requiere acuerdos paritarios. Horacio Cao y Gustavo Blutman conceptualizan la poligobernanza patagónica entre la sede central y los nodos descentralizados. Y Oscar Oszlak fundamenta el uso ético de las plataformas Moodle y SIU blindando el anonimato técnico."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EJE III: TERCERA PARTE DEL TP — 4-METODOLOGÍA (Apartados 7, 8 y 9)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_8",
      numero: 8,
      bloque: "EJE III: 4-METODOLOGÍA",
      esquema: "Diseño Metodológico Mixto y Muestra (Apartado 7)",
      badge: "Eje 3 • Enfoque Mixto CUAL->cuan",
      titulo: "Estrategia Metodológica Mixta y Muestra Situada",
      subtitulo: "Estudio de Caso No Experimental, Transversal y Triangulación Metodológica (Ciclo Lectivo 2027)",
      puntosClave: [
        "🔬 <strong>Enfoque Mixto ($CUAL \\rightarrow cuan$):</strong> Prioridad cualitativa para profundizar en sentidos y acuerdos políticos, complementada con sondeo descriptivo.",
        "📍 <strong>Estudio de Caso Situado (Flyvbjerg):</strong> Dpto. de Administración Pública del CURZAS-UNCo (Sede Central Viedma y Nodos).",
        "🎤 <strong>Muestra Cualitativa (8 Entrevistas Clave):</strong> 4 docentes (presenciales y tutores virtuales), 2 directivos, 1 referente gremial de ADUNC y 1 estudiante avanzado.",
        "📊 <strong>Sondeo Cuantitativo (45 Respondientes):</strong> Cuestionario digital autoadministrado a 15 docentes y 30 estudiantes (escala Likert)."
      ],
      metadatosFooter: "Tercera Parte del TP • Apartado 7: Metodología • Sampieri & Flyvbjerg",
      escena3D: "anim_19",
      guionOrador: "Arribamos a la Tercera Parte del TP: Metodología, Fases y Viabilidad. En el Apartado 7 adoptamos un enfoque metodológico mixto con preponderancia cualitativa ($CUAL \\rightarrow cuan$). El componente cualitativo profundiza en los significados, temores y acuerdos políticos de viabilidad, mientras que el sondeo cuantitativo aporta frecuencias descriptivas de aceptación. Se trata de un estudio de caso situado no experimental y transversal delimitado al ciclo 2027. La muestra se calibró con estricto rigor y realismo operativo para un investigador individual: 8 entrevistas en profundidad a actores estratégicos —docentes, autoridades, gremio ADUNC y estudiantes— articuladas con un sondeo a 45 respondientes y análisis documental exhaustivo."
    },

    {
      id: "slide_9",
      numero: 9,
      bloque: "EJE III: 4-METODOLOGÍA",
      esquema: "Matriz de Operacionalización (Apartado 7)",
      badge: "Eje 3 • 5 Dimensiones Analíticas",
      titulo: "Matriz de Operacionalización en Cinco Dimensiones",
      subtitulo: "Variables, Indicadores Empíricos y Fuentes para Medir la Factibilidad Integral",
      puntosClave: [
        "⚖️ <strong>1. Factibilidad Normativa:</strong> Adecuación al Estatuto UNCo y CCT Dec. 1246/15; cláusula de no sumatividad.",
        "💻 <strong>2. Factibilidad Técnica:</strong> Soporte en Moodle/SIU, inhabilitación de IP/logs, usabilidad <15 min y prevención de fatiga.",
        "🏢 <strong>3. Factibilidad Organizacional:</strong> Capacidad departamental de procesamiento y transferencia al Programa Anual (Art. 76).",
        "🤝 <strong>4. Factibilidad Cultural:</strong> Clima de confianza institucional, disposición a la autoevaluación y legitimidad del juicio estudiantil.",
        "🗳️ <strong>5. Factibilidad de Gobernanza:</strong> Tratamiento colegiado en Consejo Directivo y concertación paritaria con ADUNC."
      ],
      metadatosFooter: "Tercera Parte del TP • Apartado 7: Matriz de Operacionalización • 5 Dimensiones de Factibilidad",
      escena3D: "anim_20",
      guionOrador: "Siguiendo con el Apartado 7 del TP, operacionalizamos la factibilidad a través de una matriz rigurosa dividida en cinco dimensiones analíticas: primero, la normativa, que garantiza el cumplimiento del Estatuto y del CCT Docente; segundo, la técnica, verificando que los servidores de Moodle y SIU procesen las respuestas asegurando anonimato estricto; tercero, la organizacional, que mide la capacidad administrativa del Departamento para canalizar los informes; cuarto, la cultural, auscultando la disposición docente a la autorreflexión didáctica; y quinto, la gobernanza multinivel, analizando la viabilidad de consensos en el Consejo Directivo y en la mesa paritaria con ADUNC."
    },

    {
      id: "slide_10",
      numero: 10,
      bloque: "EJE III: 4-METODOLOGÍA",
      esquema: "Cronograma y Viabilidad de Recursos (Apartados 8 y 9)",
      badge: "Eje 3 • Plan 2027 • Costo Cero",
      titulo: "Fases de Campo, Cronograma (7 Meses) y Viabilidad",
      subtitulo: "Seis Fases de Ejecución Continua (Mayo a Noviembre 2027) y Recursos Disponibles (Apartados 8 y 9)",
      puntosClave: [
        "🗓️ <strong>Fase 1 (Mes 1 / Mayo):</strong> Avales departamentales, contacto institucional y prueba piloto de instrumentos.",
        "🗓️ <strong>Fases 2-3 (Meses 2-3 / Jun-Jul):</strong> Relevamiento normativo, 8 entrevistas semiestructuradas y aplicación del sondeo digital.",
        "🗓️ <strong>Fases 4-6 (Meses 4-7 / Ago-Nov):</strong> Triangulación analítica, redacción de lineamientos de TFG, revisión final y defensa oral.",
        "💰 <strong>Viabilidad Integral (Apartado 9):</strong> Costo marginal cero (infraestructura Moodle/SIU instalada, software abierto R/PSPP) y plena autonomía."
      ],
      metadatosFooter: "Tercera Parte del TP • Apartados 8 y 9: Cronograma y Viabilidad de Recursos",
      escena3D: "anim_21",
      guionOrador: "En cumplimiento de los Apartados 8 y 9 del TP, el trabajo de campo se planificó en un cronograma de 7 meses continuos durante 2027, estructurado en seis fases: arranca en mayo con avales y prueba piloto; continúa en junio con entrevistas y análisis normativo; en julio se aplica el cuestionario digital; en agosto se realiza la triangulación analítica; y entre septiembre y noviembre se redactan los lineamientos, el informe final y la defensa. Asimismo, en el Apartado 9 demostramos la viabilidad de recursos: el proyecto opera a costo marginal cero para el CURZAS, reutilizando las plataformas tecnológicas preexistentes sin demandar partidas presupuestarias adicionales."
    },

    {
      id: "slide_11",
      numero: 11,
      bloque: "EJE III: 4-METODOLOGÍA",
      esquema: "Garantías Éticas y Ley 25.326 (Apartado 9 - Ética)",
      badge: "Eje 3 • Ley Nacional N° 25.326",
      titulo: "Garantías Éticas, Protección de Datos y No Afectación",
      subtitulo: "Blindaje Institucional para Asegurar la Participación Libre y Segura de la Comunidad",
      puntosClave: [
        "🛡️ <strong>Protección de Datos (Ley 25.326):</strong> Anonimato técnico estricto, sin registro de direcciones IP, correos ni metadatos.",
        "🧩 <strong>Mitigación de Inferencia:</strong> Agrupamiento de variables demográficas en cátedras unipersonales o reducidas para impedir deducciones.",
        "📝 <strong>Consentimiento Informado:</strong> Aceptación voluntaria previa para entrevistas y sondeos, con revocabilidad en cualquier etapa.",
        "🤝 <strong>Garantía de No Afectación Laboral:</strong> En apego al CCT (Dec. 1246/15), los datos no integrarán expedientes de permanencia ni sumarios."
      ],
      metadatosFooter: "Tercera Parte del TP • Criterios Éticos • Ley 25.326 • Tutela Gremial Paritaria",
      escena3D: "anim_23",
      guionOrador: "Para cerrar la Tercera Parte del TP, establecemos el marco ético que sustenta la investigación. Bajo la Ley Nacional 25.326, garantizamos la disociación total de datos: los cuestionarios no registran correos ni IPs. En cátedras unipersonales o de baja dotación agrupamos variables para neutralizar cualquier inferencia cruzada sobre la identidad docente. Se garantiza el consentimiento informado y, de forma primordial, el compromiso taxativo de no afectación laboral: la información recopilada tiene exclusivo fin de investigación académica y no podrá ser remitida jamás a jurados de permanencia ni a instancias sancionatorias."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 12: CIERRE, SÍNTESIS DE FACTIBILIDAD Y ESPACIO PARA EL TRIBUNAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_12",
      numero: 12,
      bloque: "CIERRE Y CONCLUSIONES",
      esquema: "Síntesis de Factibilidad, Valor Público y Cierre",
      badge: "Cierre Oficial • Espacio de Preguntas",
      titulo: "Síntesis de Factibilidad, Valor Público y Cierre",
      subtitulo: "Aporte Estratégico al CURZAS-UNCo • Espacio para el Tribunal Evaluador",
      puntosClave: [
        "✅ <strong>Factibilidad Demostrada:</strong> La viabilidad es plenamente alcanzable si se respetan el fin formativo (Art. 76), el anonimato y el cogobierno.",
        "🏛️ <strong>Valor Público Universitario:</strong> Fortalecer la docencia en la red patagónica con herramientas diagnósticas propias y sin recetas foráneas.",
        "🙏 <strong>Agradecimiento Institucional:</strong> A la Dra. D. Noguera, Esp. F. Abeiro y Esp. M. C. Aguirre por sus orientaciones y rigor docente.",
        "💬 <strong>Apertura al Tribunal:</strong> A entera disposición de los profesores para sus preguntas, observaciones y sugerencias orientadoras."
      ],
      metadatosFooter: "Cierre de Defensa • 15:00 Minutos • Seminario de Integración y Aplicación",
      escena3D: "anim_25",
      guionOrador: "A modo de síntesis, las conclusiones preliminares demuestran que la factibilidad de un modelo 360° en el CURZAS es plenamente alcanzable si se respetan las dos condiciones de borde: el desacoplamiento del Artículo 75 punitivo y el blindaje de anonimato técnico. Este TFG aporta evidencia empírica situada para que nuestra universidad fortalezca su docencia híbrida con herramientas propias, generando valor público real en toda la región. Agradezco profundamente a la Dra. Deborah Noguera, al Esp. Federico Abeiro y a la Esp. Cecilia Aguirre por su constante acompañamiento y rigor pedagógico en el SIA. Concluyo en tiempo reglamentario y quedo a entera disposición del tribunal para responder a sus preguntas y recibir sus valiosas devoluciones. Muchas gracias."
    }
  ]
};

// Exportación global para el navegador
if (typeof window !== "undefined") {
  window.PRESENTACION_DATA = PRESENTACION_DATA;
}
