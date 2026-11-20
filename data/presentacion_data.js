/**
 * =============================================================================
 * METADATOS Y CONTENIDO DE LA PRESENTACIÓN FINAL — ANTEPROYECTO DE TFG (12 FILMINAS)
 * Universidad Nacional del Comahue — CURZAS
 * Seminario de Integración y Aplicación (SIA 2026)
 * Autor: Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes
 * =============================================================================
 * ENFOQUE EPISTEMOLÓGICO: PROYECTO DE INVESTIGACIÓN PREVIO
 * - Modo potencial / condicional (hipótesis abiertas a contrastación empírica en 2027)
 * - Prudencia metodológica: no se dan conclusiones por sentadas ni la viabilidad por cerrada
 * - Estructura canónica espejada del Trabajo Práctico Nº 4 Integral (15 minutos)
 * - Guiones oratorios con pausas de 2 segundos, énfasis y contraste formativo
 */

const PRESENTACION_DATA = {
  meta: {
    institucion: "Universidad Nacional del Comahue",
    sede: "Complejo Universitario Regional Zona Atlántica y Sur (CURZAS)",
    departamento: "Departamento de Administración Pública",
    carrera: "Ciclo de Complementación Curricular de la Licenciatura en Gestión de Recursos Humanos",
    materia: "Seminario de Integración y Aplicación (SIA)",
    titulo: "Evaluación del Desempeño Docente y Factibilidad de Implementación de un Modelo de Retroalimentación 360°",
    subtitulo: "Proyecto de investigación situado en el Departamento de Administración Pública del CURZAS-UNCo (2027)",
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
    alertaAmarillaMinutos: 11, // Advertencia visual a los 11 min (quedan 4 min para Metodología)
    alertaRojaMinutos: 13.5,   // Cierre inminente a los 13:30 min (queda 1:30 min para conclusión)
    promedioPorSlideMin: 1.25  // ~1:15 min por filmina (12 filminas * 1.25 min = 15:00 min)
  },

  // 6 Pestañas de Respaldo Metodológico para el Tribunal Evaluador (Atajo: Tecla 'M')
  fichasRespaldo: {
    autores: [
      {
        autor: "Francisco Longo (2006)",
        concepto: "Modelo analítico de subsistemas de empleo público: rendimiento, desarrollo, organización del trabajo, relaciones humanas y sociales. Marco conceptual para superar la auditoría punitiva y orientar la gestión pública a la generación de valor social."
      },
      {
        autor: "Enrique de la Garza Toledo (2001)",
        concepto: "Epistemología crítica: la teoría como 'configuración abierta'. Red conceptual flexible para reconstruir el campo de lo institucionalmente viable en organizaciones complejas sin dogmatismos."
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
        concepto: "Estudios empíricos sobre evaluación 360° en universidades: aportan evidencia de que la triangulación multiactoral podría alcanzar alta aceptación docente siempre que se resguarde la confidencialidad y el destino formativo."
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
        texto: "Determinar las condiciones de factibilidad organizacional, técnica, normativa y de gobernanza multinivel para la eventual implementación de un modelo de retroalimentación multiactoral (360°) en la evaluación del desempeño docente en el Departamento de Administración Pública del CURZAS-UNCo (2027)."
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
        texto: "Identificar los condicionantes técnico-organizacionales, normativos y de gobernanza multinivel (acuerdos paritarios, confidencialidad, carrera docente y cogobierno) que incidirían en la factibilidad del modelo."
      },
      {
        nivel: "Objetivo Específico 4 (Dimensión Propositiva-Orientativa)",
        texto: "Proponer lineamientos orientativos para una eventual implementación formativa del modelo 360°, en función de las condiciones y límites de factibilidad que se identifiquen en la investigación empírica."
      }
    ],

    dimensiones: [
      {
        dim: "1. Factibilidad Normativa y Estatutaria",
        detalle: "Adecuación proyectada al Estatuto UNCo (Ord. 0988/2025) y al CCT Docente (Dec. 1246/2015). Indagar el desacoplamiento de la permanencia del Art. 75 y la articulación formativa con el Art. 76 (capacitación)."
      },
      {
        dim: "2. Factibilidad Técnica e Instrumental",
        detalle: "Disponibilidad potencial de plataformas institucionales (Moodle/SIU), usabilidad en menos de 15 minutos, inhabilitación de logs/IP y protocolos de anonimato para mitigar la fatiga evaluativa."
      },
      {
        dim: "3. Factibilidad Organizacional y Procedimental",
        detalle: "Capacidad de gestión del Departamento para procesar la retroalimentación multiactoral y transferir diagnósticos al Programa Anual de Capacitación Docente sin sobrecargar los circuitos administrativos."
      },
      {
        dim: "4. Factibilidad Cultural y Actitudinal",
        detalle: "Exploración del clima de confianza institucional, disposición docente a la autoevaluación reflexiva, receptividad ante pares y juicio pedagógico estudiantil."
      },
      {
        dim: "5. Factibilidad de Gobernanza Multinivel",
        detalle: "Viabilidad política de deliberación y búsqueda de consensos en los órganos de cogobierno (Consejo Departamental y Directivo) y concertación paritaria con ADUNC."
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
        pregunta: "¿Por qué indagar un modelo 360° y no la tradicional encuesta estudiantil?",
        respuesta: "La literatura indica que la encuesta estudiantil aislada suele presentar sesgos de complacencia o castigo a la exigencia académica. El modelo 360° propone triangular 4 miradas: autoevaluación docente, coevaluación de pares, apreciación estudiantil y visión de la dirección departamental, cuya factibilidad empírica será evaluada en este estudio."
      },
      {
        pregunta: "¿Cómo se aborda la prevención docente ante un posible uso persecutorio?",
        respuesta: "Como hipótesis de indagación, se postulan dos blindajes necesarios: 1) Desacoplamiento Normativo del Art. 75 del Estatuto (permanencia) y vinculación al Art. 76 (capacitación continua); 2) Blindaje Técnico con anonimato estadístico auditado."
      },
      {
        pregunta: "¿Qué rol juega el Convenio Colectivo de Trabajo (Dec. 1246/15)?",
        respuesta: "Es el marco protector rector. El CCT prohíbe modificaciones unilaterales en condiciones de trabajo docente. Por tanto, el modelo 360° no podría imponerse administrativamente; su viabilidad dependería de consensos paritarios negociados (Matus: poder compartido)."
      },
      {
        pregunta: "¿Por qué la Red de Nodos Territoriales requiere una mirada evaluativa diferente?",
        respuesta: "Bajo la Res. 196/2022, el docente del CURZAS asume labores de diseño en Moodle, clases sincrónicas y tutorías remotas a parajes alejados. Los cuestionarios tradicionales en papel no contemplan estas competencias pedagógicas híbridas."
      },
      {
        pregunta: "¿Cuál es el aporte esperado que este TFG busca brindar al CURZAS?",
        respuesta: "Brindar evidencia empírica rigurosa y un diagnóstico de factibilidad situado en la Patagonia, permitiendo a las autoridades universitarias tomar decisiones fundamentadas sobre políticas de desarrollo docente sin importar recetas prefabricadas."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LAS 12 FILMINAS ESTRATÉGICAS — ORDEN DEL TRABAJO PRÁCTICO (ENFOQUE POTENCIAL)
  // ═══════════════════════════════════════════════════════════════════════════
  slides: [
    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 1: APERTURA PROTOCOLAR (Apartado 1 del TP)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_1",
      numero: 1,
      bloque: "APERTURA PROTOCOLAR",
      esquema: "Carátula Oficial y Presentación del Anteproyecto",
      badge: "UNCo • CURZAS • Proyecto de TFG",
      titulo: "Evaluación Docente y Factibilidad del Modelo 360°",
      subtitulo: "Proyecto de Investigación Situado en el Dpto. de Administración Pública (2027)",
      puntosClave: [
        "🎓 <strong>Carrera:</strong> Licenciatura en Gestión de Recursos Humanos (CCC) — CURZAS",
        "👤 <strong>Tesista:</strong> Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes (Legajo 8252)",
        "🏛️ <strong>Marco Institucional:</strong> Universidad Nacional del Comahue (Viedma y Nodos)",
        "👥 <strong>Cátedra SIA:</strong> Dra. Deborah Noguera • Esp. Federico Abeiro • Esp. María Cecilia Aguirre"
      ],
      metadatosFooter: "Proyecto de TFG • Apartado 1 del TP • Res. CD-CURZAS 266/23 • Tiempo: 15:00 min",
      escena3D: "anim_01",
      guionOrador: "Muy buenos días, Dra. Deborah Noguera, Esp. Federico Abeiro y Esp. María Cecilia Aguirre.\n\nInicio la defensa formal de mi Proyecto de Trabajo Final de Graduación: 'Evaluación del Desempeño Docente y Factibilidad de Implementación de un Modelo de Retroalimentación 360° en el Departamento de Administración Pública del CURZAS-UNCo (2027)'.\n\n[Pausa de 2 segundos]\n\nComo corresponde a una instancia de anteproyecto previo, esta presentación se orienta a fundamentar la pertinencia, el diseño y la viabilidad de la investigación que proyectamos desarrollar. Siguiendo con total fidelidad la estructura de nuestro Trabajo Práctico de cátedra, la exposición se articula en tres momentos clave: primero, El Problema; segundo, el Estado de la Cuestión y Marco Teórico; y tercero, la Metodología y Viabilidad, ajustándome estrictamente al tiempo pautado de 15 minutos."
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
        "🤝 <strong>Convenios de Cogestión (Hintze):</strong> Articulación municipal para democratizar el acceso universitario.",
        "💻 <strong>Docencia Híbrida Emergente:</strong> Entornos Moodle, presencialidad remota y tutorías a distancia."
      ],
      metadatosFooter: "Primera Parte del TP • Apartado 2: Tema y Contexto • 10 Nodos Territoriales",
      escena3D: "anim_06",
      diagramaSVG: "assets/red_territorial.svg",
      guionOrador: "Comenzando con la Primera Parte del TP: la delimitación del Tema de Investigación y su contexto territorial.\n\n[Énfasis situado]\nNuestro objeto de estudio no se sitúa en un claustro universitario tradicional ni metropolitano. A más de 500 kilómetros de la sede en Viedma, en plena estepa patagónica y en la costa atlántica, docentes del CURZAS sostienen cotidianamente el derecho a la educación superior pública.\n\nFormalizada por la Resolución 135/2022 y bajo convenios de cogestión municipal, la institución cuenta con una red de 10 nodos regionales: desde Valcheta y Ramos Mexía hasta Los Menucos y Comallo. A su vez, la Resolución 196/2022 formalizó la docencia híbrida: diseñar aulas Moodle y tutorizar a distancia.\n\n[Pausa de 2 segundos]\n\nAquí radica el punto de partida del proyecto: nos proponemos indagar si los instrumentos vigentes de evaluación docente —pensados para el aula física tradicional— resultan adecuados o si evidencian limitaciones para registrar y retroalimentar este esfuerzo pedagógico situado en el territorio."
    },

    {
      id: "slide_3",
      numero: 3,
      bloque: "EJE I: 2-EL PROBLEMA",
      esquema: "Delimitación del Problema y Tensión (Apartado 3)",
      badge: "Eje 1 • Desnaturalización • Hipótesis",
      titulo: "Delimitación del Objeto Problema y Tensión Normativa",
      subtitulo: "De la Rutina Administrativa a la Tensión Estatutaria: Art. 75 (Vacancia) vs. Art. 76 (Capacitación)",
      puntosClave: [
        "🔍 <strong>Desnaturalización (Wainerman & Sautu):</strong> Problematizar la rutina de la encuesta de fin de cursada.",
        "⚖️ <strong>Art. 75 Estatuto UNCo (Control Sumativo):</strong> Dos evaluaciones desfavorables causan pérdida del cargo docente.",
        "🌱 <strong>Art. 76 Estatuto UNCo (Capacitación Continua):</strong> Mandato estatutario de formación pedagógica permanente.",
        "🔑 <strong>Hipótesis de Trabajo Central:</strong> Se postula que desvincular el 360° del Art. 75 y articularlo al Art. 76 posibilitaría una recepción formativa y no punitiva."
      ],
      metadatosFooter: "Primera Parte del TP • Apartado 3: Delimitación del Problema • Hipótesis de Desacoplamiento",
      escena3D: "anim_09",
      guionOrador: "En el Apartado 3 del TP aplicamos la desnaturalización de Wainerman y Sautu para cuestionar la rutina burocrática de la encuesta cerrada de fin de cursada.\n\n[Contraste de tensión normativa]\nAl examinar el marco regulatorio identificamos una tensión estructural en el Estatuto de la UNCo:\nPor un lado, el Artículo 75 dispone que dos evaluaciones negativas consecutivas causan la vacancia del cargo, lo que comprensiblemente suscita prevención gremial ante instrumentos evaluativos no consensuados.\nPor otro lado, el Artículo 76 prescribe la implementación de programas anuales de capacitación docente.\n\n[Pausa de 2 segundos]\n\n[Hipótesis en modo potencial]\nFrente a esta tensión, nuestro proyecto no pretende imponer soluciones predeterminadas, sino formular una hipótesis de indagación central: se postula que un eventual desacoplamiento de la evaluación 360° respecto del régimen del Artículo 75, articulándola exclusivamente al Artículo 76 con estricto anonimato, podría mitigar la prevención sindical y habilitar un clima de confianza para la autorreflexión docente."
    },

    {
      id: "slide_4",
      numero: 4,
      bloque: "EJE I: 2-EL PROBLEMA",
      esquema: "Pregunta Central y Objetivos del TFG (Apartado 4)",
      badge: "Eje 1 • Consistencia Metodológica • 2027",
      titulo: "Pregunta de Investigación y Definición de Objetivos",
      subtitulo: "Determinación de las Condiciones de Factibilidad en el Ciclo Lectivo 2027",
      puntosClave: [
        "❓ <strong>Pregunta General:</strong> ¿Cuáles son las condiciones de factibilidad organizacional, técnica, normativa y de gobernanza que se requerirían para implementar el modelo 360° formativo?",
        "🎯 <strong>Objetivo General:</strong> Determinar las condiciones de factibilidad integral para la eventual adopción del modelo en el Departamento.",
        "📋 <strong>OE1 (Normativo):</strong> Relevar normas y contrastar prescripción estatutaria vs. prácticas empíricas.",
        "👥 <strong>OE2 (Cultural):</strong> Explorar percepciones, disposiciones y temores de docentes y estudiantes.",
        "⚙️ <strong>OE3 (Condicionantes):</strong> Identificar cuellos de botella técnicos, anonimato y diálogo paritario.",
        "💡 <strong>OE4 (Propositivo):</strong> Formular lineamientos orientativos viables en función de los hallazgos."
      ],
      metadatosFooter: "Primera Parte del TP • Apartado 4: Objetivos del TFG • Matriz de Consistencia",
      escena3D: "anim_11",
      guionOrador: "Concluimos la Primera Parte del TP definiendo la matriz de consistencia de la investigación.\n\n[Pausa de 2 segundos]\n\nLa pregunta rectora que se proyecta responder es:\n¿Cuáles son las condiciones de factibilidad organizacional, técnica, normativa y de gobernanza multinivel para la eventual implementación de un modelo 360° en el Departamento de Administración Pública durante 2027?\n\n[La matriz de objetivos en potencial]\nPara responder a este interrogante, el Objetivo General se propone determinar dichas condiciones de factibilidad. Los cuatro objetivos específicos desagregan el plan de indagación: primero, caracterizar la brecha entre la norma formal y la práctica real; segundo, explorar las percepciones y disposiciones subjetivas de la comunidad; tercero, relevar los condicionantes técnicos y de cogobierno paritario; y cuarto, formular lineamientos orientativos viables que puedan servir de insumo a las autoridades universitarias."
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
      subtitulo: "Relevamiento en Tres Escalas (Internacional, Nacional y Regional) y Justificación del Estudio",
      puntosClave: [
        "🌍 <strong>Escala Internacional (Sifuentes, 2016; Obando, 2014):</strong> Evidencia que la aceptación docente del 360° se supedita al anonimato y al fin formativo.",
        "🇦🇷 <strong>Escala Nacional (Marquina, 2012; Pérez, 2021):</strong> Advierten sobre la primacía de la investigación sobre la didáctica y la tutoría virtual.",
        "📍 <strong>Escala Regional (UNCo/CURZAS):</strong> Ausencia de registros de dispositivos sistemáticos de retroalimentación formativa y colegiada.",
        "🎯 <strong>Vacancia Científica Identificada:</strong> No se registran estudios empíricos sobre factibilidad 360° en universidades públicas cogobernadas con redes patagónicas."
      ],
      metadatosFooter: "Segunda Parte del TP • Apartado 5: Antecedentes y Estado del Arte • Justificación de Vacancia",
      escena3D: "anim_17",
      guionOrador: "Ingresamos a la Segunda Parte del TP abordando, en primer lugar, el Apartado 5: los Antecedentes y el Estado del Arte de la Cuestión. Tal como simboliza nuestra escultura del David del Conocimiento en pantalla, examinamos la literatura científica en tres escalas geográficas:\n\n[Escala 1: Internacional]\nEstudios de Sifuentes en México y Obando Freire en Cuba indican que la metodología 360° en universidades puede alcanzar alta aceptación entre los docentes, siempre y cuando se asegure el anonimato estricto y la ausencia total de consecuencias sancionatorias.\n\n[Escala 2: Nacional]\nMarquina y Pérez señalan que en las universidades argentinas los regímenes de carrera suelen descuidar la retroalimentación didáctica y las tutorías virtuales.\n\n[Escala 3: Regional y Vacancia]\nY en el ámbito de la UNCo, constatamos una vacancia empírica sobre este tipo de dispositivos.\n\n[Pausa de 2 segundos]\n\nEsta vacancia no es una debilidad, sino la razón de ser del proyecto: justifica la necesidad de realizar un estudio preliminar riguroso sobre las posibilidades reales de implementación en una universidad patagónica descentralizada."
    },

    {
      id: "slide_6",
      numero: 6,
      bloque: "EJE II: 3-ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO",
      esquema: "Marco Teórico: Epistemología y Longo (Apartado 6)",
      badge: "Eje 2 • Marco Teórico • Lentes Conceptuales",
      titulo: "Marco Teórico: Enrique de la Garza y Francisco Longo",
      subtitulo: "La Teoría como Configuración Abierta y el Enfoque Sistémico de Empleo Público",
      puntosClave: [
        "🌐 <strong>Configuración Abierta (De la Garza):</strong> La teoría como red conceptual flexible para interrogar la realidad sin imponer dogmatismos.",
        "🏛️ <strong>Modelo de Empleo Público (Longo, 2006):</strong> Gestión estratégica de personas en el Estado orientada al aprendizaje institucional.",
        "⚙️ <strong>Interdependencia de 4 Subsistemas:</strong> Rendimiento, Desarrollo (capacitación), Organización del Trabajo (nodos) y Relaciones Humanas (CCT).",
        "💡 <strong>Axioma Conceptual de Longo:</strong> 'Evaluar el rendimiento sin conectarlo con el desarrollo y la capacitación constituye un ejercicio burocrático estéril'."
      ],
      metadatosFooter: "Segunda Parte del TP • Apartado 6: Marco Teórico Sustantivo • De la Garza & Longo",
      escena3D: "anim_12",
      diagramaSVG: "assets/Sistemas-longo.svg",
      guionOrador: "En el Apartado 6 del TP establecemos los lentes conceptuales del estudio.\n\nEpistemológicamente nos situamos en Enrique de la Garza Toledo: asumimos la teoría como una configuración abierta, no como un sistema dogmático cerrado, permitiéndonos interrogar la trama social y deliberativa de la universidad pública sin preconceptos.\n\nEn el plano sustantivo, adoptamos el modelo de Francisco Longo (2006). Como observamos en el diagrama oficial, Longo postula que los subsistemas de recursos humanos operan de manera interdependiente:\n\n[Axioma central de Longo - Énfasis conceptual]\n'Evaluar el rendimiento sin conectarlo con el desarrollo y la capacitación constituye un ejercicio burocrático estéril.'\n\nEste postulado orienta nuestra mirada: en el CURZAS, indagar la factibilidad de evaluar formativamente el rendimiento cobra sentido únicamente si se analiza su potencial conexión con la capacitación (Desarrollo), las exigencias de la docencia en los nodos (Organización del Trabajo) y el marco paritario con ADUNC (Relaciones Humanas)."
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
        "🔄 <strong>Triangulación Multiactoral Propuesta:</strong> Explorar la articulación de 4 miradas: autoevaluación, coevaluación de pares, estudiantes y dirección.",
        "🤝 <strong>Poder Compartido (Carlos Matus):</strong> La viabilidad no puede decretarse; requiere indagar condiciones de acuerdo y concertación en cogobierno.",
        "🗺️ <strong>Poligobernanza (Cao & Blutman):</strong> Categoría para analizar la articulación horizontal entre Rectorado, Sede Viedma y Nodos.",
        "🖥️ <strong>Estado Plataforma (Oscar Oszlak):</strong> Tecnologías digitales (Moodle/SIU) analizadas como soporte técnico con resguardo estricto de anonimato."
      ],
      metadatosFooter: "Segunda Parte del TP • Apartado 6: Conceptos Centrales • Matus, Cao/Blutman & Oszlak",
      escena3D: "anim_15",
      diagramaSVG: "assets/modelo_360.svg",
      guionOrador: "Completando los conceptos centrales del Apartado 6, caracterizamos el dispositivo 360 grados cuya factibilidad se busca indagar.\n\n[La propuesta del modelo]\nFrente a las limitaciones de las encuestas tradicionales, el modelo propone triangular cuatro perspectivas: la autoevaluación reflexiva del docente, la coevaluación entre colegas de cátedra o área, la apreciación estudiantil y la visión departamental, con el propósito hipotético de generar reportes cualitativos orientados a la mejora pedagógica.\n\n[Pausa de 2 segundos]\n\nPara analizar si esta propuesta es viable en el CURZAS, recurrimos a tres autores fundamentales:\nCarlos Matus nos enseña que en organizaciones públicas el poder es compartido: la viabilidad dependerá de la concertación con claustros y con ADUNC.\nHoracio Cao y Gustavo Blutman nos brindan la categoría de poligobernanza para entender la complejidad institucional entre Rectorado y Nodos.\nY Oscar Oszlak aporta criterios para examinar si las plataformas Moodle y SIU podrían albergar el sistema garantizando anonimato técnico sin derivar en tecno-vigilancia."
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
        "🎤 <strong>Muestra Cualitativa Proyectada (8 Entrevistas):</strong> 4 docentes (presenciales y tutores virtuales), 2 directivos, 1 referente gremial de ADUNC y 1 estudiante avanzado.",
        "📊 <strong>Sondeo Cuantitativo Previsto (45 Respondientes):</strong> Cuestionario digital autoadministrado a 15 docentes y 30 estudiantes (escala Likert)."
      ],
      metadatosFooter: "Tercera Parte del TP • Apartado 7: Metodología • Diseño Muestral Preliminar",
      escena3D: "anim_19",
      guionOrador: "Arribamos a la Tercera Parte del TP: Metodología, Fases y Viabilidad.\n\nEn el Apartado 7 diseñamos un enfoque metodológico mixto con preponderancia cualitativa ($CUAL \\rightarrow cuan$).\n\n[Fundamentación del diseño]\nConsideramos que este enfoque es el idóneo porque la dimensión cualitativa permitirá profundizar en las percepciones, temores y condiciones de viabilidad gremial, mientras que el sondeo cuantitativo descriptivo aportará una primera aproximación estructurada a las tendencias de aceptación en la comunidad. Se proyecta como un estudio de caso situado no experimental y transversal delimitado al ciclo 2027.\n\n[Muestra preliminar de referencia]\nTratándose del proyecto previo, la muestra se diseñó bajo criterios de rigor y realismo operativo para un investigador individual: se prevén 8 entrevistas a informantes estratégicos —docentes, directivos, gremio ADUNC y estudiantes avanzados— articuladas con un sondeo exploratorio a 45 participantes y análisis documental normativo."
    },

    {
      id: "slide_9",
      numero: 9,
      bloque: "EJE III: 4-METODOLOGÍA",
      esquema: "Matriz de Operacionalización (Apartado 7)",
      badge: "Eje 3 • 5 Dimensiones Analíticas",
      titulo: "Matriz de Operacionalización en Cinco Dimensiones",
      subtitulo: "Variables, Indicadores Empíricos y Fuentes para Indagar la Factibilidad Integral",
      puntosClave: [
        "⚖️ <strong>1. Dimensión Normativa y Estatutaria:</strong> Indagar la compatibilidad estatutaria (Art. 75 vs 76) y la no sumatividad en el marco del CCT.",
        "💻 <strong>2. Dimensión Técnica e Instrumental:</strong> Evaluar la capacidad de Moodle/SIU para formularios breves con inhabilitación de IPs y logs.",
        "🏢 <strong>3. Dimensión Organizacional y Procedimental:</strong> Examinar la capacidad departamental para canalizar diagnósticos hacia la capacitación.",
        "🤝 <strong>4. Dimensión Cultural y Actitudinal:</strong> Auscultar el clima de confianza institucional y la disposición docente a la autorreflexión.",
        "🗳️ <strong>5. Dimensión Gobernanza Multinivel:</strong> Explorar la viabilidad de acuerdos colegiados en el Consejo Directivo y concertación con ADUNC."
      ],
      metadatosFooter: "Tercera Parte del TP • Apartado 7: Matriz de Operacionalización • Categorías de Indagación",
      escena3D: "anim_20",
      guionOrador: "Para guiar el futuro trabajo de campo empírico, operacionalizamos la noción de factibilidad en cinco dimensiones analíticas interrelacionadas:\n\n[Las 5 dimensiones como guías de campo]\n1. Dimensión Normativa: indagar la compatibilidad legal estatutaria y la preservación de la estabilidad laboral.\n2. Dimensión Técnica: explorar si las plataformas Moodle y SIU ofrecen condiciones seguras de anonimato técnico y accesibilidad en nodos remotos.\n3. Dimensión Organizacional: relevar la capacidad institucional del Departamento para procesar la información.\n4. Dimensión Cultural: auscultar las actitudes, temores y expectativas del cuerpo docente y estudiantil ante la coevaluación.\n5. Dimensión de Gobernanza: evaluar las condiciones de deliberación y búsqueda de consensos en cogobierno y con la representación paritaria de ADUNC.\n\n[Pausa de 2 segundos]\n\nEsta matriz define las variables, indicadores empíricos y fuentes documentales que se aplicarán en el terreno."
    },

    {
      id: "slide_10",
      numero: 10,
      bloque: "EJE III: 4-METODOLOGÍA",
      esquema: "Cronograma y Viabilidad de Recursos (Apartados 8 y 9)",
      badge: "Eje 3 • Plan 2027 • Costo Cero",
      titulo: "Fases de Campo, Cronograma (7 Meses) y Viabilidad",
      subtitulo: "Seis Fases Proyectadas de Ejecución (Mayo a Noviembre 2027) y Recursos Disponibles",
      puntosClave: [
        "🗓️ <strong>Fase 1 (Mes 1 / Mayo):</strong> Tramitación de avales departamentales, contacto institucional y prueba piloto instrumental.",
        "🗓️ <strong>Fases 2-3 (Meses 2-3 / Jun-Jul):</strong> Relevamiento documental, 8 entrevistas semiestructuradas y aplicación del sondeo digital.",
        "🗓️ <strong>Fases 4-6 (Meses 4-7 / Ago-Nov):</strong> Triangulación analítica, redacción de lineamientos de TFG, supervisión final y defensa oral.",
        "💰 <strong>Viabilidad Proyectada (Apartado 9):</strong> Estimación de costo marginal cero para el CURZAS mediante recursos tecnológicos preexistentes."
      ],
      metadatosFooter: "Tercera Parte del TP • Apartados 8 y 9: Cronograma y Viabilidad de Recursos",
      escena3D: "anim_21",
      guionOrador: "En los Apartados 8 y 9 del TP fundamentamos la viabilidad temporal y operativa del proyecto.\n\n[Cronograma proyectado]\nEl trabajo de campo se planificó para desarrollarse a lo largo de 7 meses durante 2027, distribuido en seis fases secuenciales: prevé iniciar en mayo con la solicitud de avales académicos y la prueba piloto; en junio se concretarían las entrevistas cualitativas; en julio se aplicaría el cuestionario digital; en agosto se realizaría la triangulación analítica; y entre septiembre y noviembre se redactarían los lineamientos y el informe final.\n\n[Pausa de 2 segundos]\n\n[Viabilidad de recursos en potencial]\nAsimismo, el Apartado 9 acredita la viabilidad del estudio: se estima que la investigación operará a costo marginal cero para el CURZAS, ya que no demandará erogaciones presupuestarias adicionales al apoyarse en la infraestructura tecnológica y las herramientas analíticas de código abierto ya disponibles."
    },

    {
      id: "slide_11",
      numero: 11,
      bloque: "EJE III: 4-METODOLOGÍA",
      esquema: "Garantías Éticas y Ley 25.326 (Apartado 9 - Ética)",
      badge: "Eje 3 • Ley Nacional N° 25.326",
      titulo: "Garantías Éticas, Protección de Datos y No Afectación",
      subtitulo: "Blindaje Institucional Proyectado para Asegurar la Participación Libre y Segura",
      puntosClave: [
        "🛡️ <strong>Protección de Datos (Ley 25.326):</strong> Protocolo de anonimato técnico, sin registro de direcciones IP, correos ni metadatos.",
        "🧩 <strong>Mitigación de Deducción Identitaria:</strong> Agrupamiento de variables demográficas en cátedras unipersonales para impedir inferencias.",
        "📝 <strong>Consentimiento Informado:</strong> Validación voluntaria previa para entrevistas y sondeos, con revocabilidad en cualquier etapa.",
        "🤝 <strong>Compromiso de No Afectación Laboral:</strong> Los datos se reservarán a fines académicos del TFG, sin acceso para jurados de permanencia ni sumarios."
      ],
      metadatosFooter: "Tercera Parte del TP • Criterios Éticos • Ley 25.326 • Tutela Gremial Paritaria",
      escena3D: "anim_23",
      guionOrador: "Para cerrar la Tercera Parte, establecemos el marco ético que regirá la recolección de datos.\n\n[Los tres compromisos éticos proyectados]\nEn primer lugar, bajo las previsiones de la Ley Nacional 25.326 de Protección de Datos Personales, se diseñó un protocolo que garantiza la disociación de identidades, impidiendo el registro de correos electrónicos o direcciones IP.\n\nEn segundo lugar, para cátedras con dotaciones reducidas o unipersonales, se prevé agrupar categorías demográficas para neutralizar cualquier posibilidad de deducción identitaria.\n\n[Pausa de 2 segundos]\n\nY en tercer lugar, se establece el compromiso explícito de no afectación laboral: la información recabada tendrá exclusivo destino científico para este TFG y no podrá formar parte de legajos de permanencia ni expedientes disciplinarios."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 12: CIERRE, PROYECCIONES DE FACTIBILIDAD Y ESPACIO PARA EL TRIBUNAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_12",
      numero: 12,
      bloque: "CIERRE Y PROYECCIONES",
      esquema: "Proyecciones de Factibilidad y Apertura al Tribunal",
      badge: "Proyecto de TFG • Hipótesis Abierta",
      titulo: "Proyecciones de la Investigación, Valor Público y Cierre",
      subtitulo: "Aportes Esperados para el CURZAS-UNCo • Espacio de Intercambio con el Tribunal Evaluador",
      puntosClave: [
        "🎯 <strong>Hipótesis Central a Contrastar:</strong> Se postula que el modelo 360° resultaría factible si se lograra consensuar su carácter formativo (Art. 76) y el anonimato técnico.",
        "🔬 <strong>Prudencia Epistemológica:</strong> Al ser un proyecto previo, no se dan conclusiones por sentadas; corresponderá al trabajo de campo en 2027 determinar su viabilidad real.",
        "🏛️ <strong>Aporte y Valor Público Esperado:</strong> De corroborarse la viabilidad, aportaría evidencia situada propia para fortalecer la docencia híbrida en territorio patagónico.",
        "💬 <strong>Intercambio con el Tribunal:</strong> Quedo a entera disposición para recibir sus observaciones, críticas constructivas y sugerencias metodológicas."
      ],
      metadatosFooter: "Cierre de Anteproyecto • Límite 15:00 Minutos • Seminario de Integración y Aplicación",
      escena3D: "anim_25",
      guionOrador: "[Cierre en modo potencial - Prudencia epistemológica]\nPara concluir esta exposición, reitero que nos encontramos ante la defensa de un Proyecto de Investigación previo: no partimos de conclusiones cerradas ni damos la viabilidad por sentada.\n\nNuestra hipótesis de trabajo plantea que un dispositivo de retroalimentación 360° podría constituir una alternativa viable y enriquecedora siempre que se logre un desacoplamiento efectivo del régimen sumativo del Artículo 75 y se garantice el anonimato técnico.\n\n[Pausa de 2 segundos]\n\nSerá el trabajo de campo empírico planificado para 2027 el que contraste estas condiciones, identifique los límites reales y determine en qué medida es factible avanzar hacia su adopción en nuestra universidad pública patagónica.\n\nAgradezco profundamente las orientaciones recibidas durante el cursado del SIA por parte de la Dra. Deborah Noguera, el Esp. Federico Abeiro y la Esp. Cecilia Aguirre.\n\nConcluyo en tiempo reglamentario y quedo a entera disposición del tribunal para responder a sus preguntas y recibir sus valiosas sugerencias para seguir perfeccionando este proyecto. Muchas gracias."
    }
  ]
};

// Exportación global para el navegador
if (typeof window !== "undefined") {
  window.PRESENTACION_DATA = PRESENTACION_DATA;
}
