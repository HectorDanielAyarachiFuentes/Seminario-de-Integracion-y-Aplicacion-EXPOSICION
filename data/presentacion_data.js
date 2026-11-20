/**
 * =============================================================================
 * METADATOS Y CONTENIDO DE LA PRESENTACIÓN FINAL — TFG / TESINA (12 FILMINAS)
 * Universidad Nacional del Comahue — CURZAS
 * Seminario de Integración y Aplicación (SIA 2026)
 * Autor: Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes
 * =============================================================================
 * ESTRUCTURA CANÓNICA CONDENSADA PARA DEFENSA DE 15 MINUTOS (3 GRANDES EJES):
 * 1. Apertura Protocolar y Carátula Oficial (Filmina 1)
 * 2. EJE I (2-El problema): Territorio, Tensión Estructural y Objetivos (Filminas 2 a 4)
 * 3. EJE II (3-Estado de la cuestión...): Marco Teórico, Modelo 360° y Vacancia (Filminas 5 a 7)
 * 4. EJE III (4-Metodología): Diseño Mixto, 5 Dimensiones, Cronograma y Ética (Filminas 8 a 11)
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
  // LAS 12 FILMINAS ESTRATÉGICAS — DEFENSA OFICIAL DE 15 MINUTOS (SIA 2026)
  // ═══════════════════════════════════════════════════════════════════════════
  slides: [
    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 1: APERTURA PROTOCOLAR Y CARÁTULA OFICIAL
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
      metadatosFooter: "Carátula Oficial • Res. CD-CURZAS 266/23 • Viedma, Río Negro • Tiempo: 15:00 min",
      escena3D: "anim_01",
      guionOrador: "Muy buenos días, miembros del tribunal evaluador, Dra. Deborah Noguera, Esp. Federico Abeiro y Esp. María Cecilia Aguirre. Inicio formalmente la defensa de mi Proyecto de Trabajo Final de Graduación titulado 'Evaluación del Desempeño Docente y Factibilidad de Implementación de un Modelo de Retroalimentación 360° en el Departamento de Administración Pública del CURZAS-UNCo (2027)'. Conforme a las orientaciones de la cátedra, esta presentación se articula en tres grandes ejes: 1) El Problema y los Objetivos; 2) El Estado de la Cuestión y Marco Teórico; y 3) La Metodología y Viabilidad, ajustándome estrictamente al tiempo pautado de 15 minutos."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EJE I: 2-EL PROBLEMA (Filminas 2 a 4)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_2",
      numero: 2,
      bloque: "EJE I: 2-EL PROBLEMA",
      esquema: "Territorio Situado y Descentralización Regional",
      badge: "Eje 1 • Res. CD N° 135/2022 • Contexto",
      titulo: "El CURZAS en el Territorio: Sede Viedma y los 10 Nodos",
      subtitulo: "Despliegue Descentralizado y Nuevas Mediaciones Tecnológicas (Res. 196/2022)",
      puntosClave: [
        "🏛️ <strong>Sede Cabecera Viedma:</strong> Conducción académica y órganos de cogobierno en el Valle Inferior.",
        "🌐 <strong>Red de 10 Nodos:</strong> Costa Atlántica, Valle Medio y Línea Sur a más de 500 km.",
        "🤝 <strong>Convenios de Cogestión (Hintze):</strong> Articulación con Municipios para democratizar el acceso universitario.",
        "💻 <strong>Docencia Híbrida Situada:</strong> Clases sincrónicas, aulas virtuales Moodle y tutorías a distancia."
      ],
      metadatosFooter: "Eje 1: El Problema • 10 Nodos Territoriales • Res. CD N° 135/2022 y Res. 196/2022",
      escena3D: "anim_06",
      diagramaSVG: "assets/red_territorial.svg",
      guionOrador: "Comenzando con el Eje 1, nuestro objeto de estudio no se sitúa en un claustro universitario tradicional ni en una metrópoli. El CURZAS posee una estructura territorial singular formalizada por la Resolución 135/2022: una red que articula desde su sede cabecera en Viedma hacia 10 nodos regionales a lo largo de toda la geografía de Río Negro. Como señala Hintze, opera bajo convenios de cogestión municipal. A su vez, la Resolución 196/2022 formalizó la docencia híbrida: los docentes de Administración Pública y de Recursos Humanos deben diseñar entornos Moodle y tutorizar alumnos a más de 500 km. Sin embargo, los cuestionarios tradicionales en papel siguen siendo ciegos ante estas complejas competencias situadas."
    },

    {
      id: "slide_3",
      numero: 3,
      bloque: "EJE I: 2-EL PROBLEMA",
      esquema: "Tensión Normativa y Desnaturalización",
      badge: "Eje 1 • Ruptura Epistemológica",
      titulo: "Tensión Normativa: Carrera Sumativa vs. Capacitación",
      subtitulo: "Desnaturalización del Problema y Conflicto Estatutario: Art. 75 vs. Art. 76 (Ord. 0988/2025)",
      puntosClave: [
        "🔍 <strong>Desnaturalización (Wainerman & Sautu):</strong> Superar el ritual burocrático de la planilla de fin de cursada.",
        "⚖️ <strong>Art. 75 Estatuto UNCo (Control Sumativo):</strong> Dos evaluaciones desfavorables causan pérdida del cargo (resistencia gremial ADUNC).",
        "🌱 <strong>Art. 76 Estatuto UNCo (Capacitación Continua):</strong> Mandato estatutario de perfeccionamiento pedagógico docente.",
        "🔑 <strong>Desacoplamiento Estratégico:</strong> Desvincular el modelo 360° de la permanencia y anclarlo de forma 100% confidencial en la capacitación."
      ],
      metadatosFooter: "Eje 1: El Problema • Desnaturalización • Tensión Estatutaria Art. 75 vs. Art. 76",
      escena3D: "anim_09",
      guionOrador: "Para transformar una inquietud de gestión en un problema científico genuino, aplicamos la desnaturalización de Wainerman y Sautu, cuestionando la rutina de la encuesta cerrada. Al analizar el marco normativo emerge una fuerte tensión estructural en el nuevo Estatuto de la UNCo: el Artículo 75 dispone que dos evaluaciones desfavorables provocan la vacancia del cargo, generando una lógica de fiscalización y comprensible prevención sindical. En contraste, el Artículo 76 exige implementar programas anuales de capacitación docente. La solución epistemológica y política de nuestro proyecto consiste en desacoplar el modelo 360° del régimen punitivo del Artículo 75, anclándolo exclusivamente como herramienta formativa y confidencial en el Artículo 76."
    },

    {
      id: "slide_4",
      numero: 4,
      bloque: "EJE I: 2-EL PROBLEMA",
      esquema: "Pregunta Central y Matriz de Objetivos",
      badge: "Eje 1 • Consistencia Metodológica",
      titulo: "Pregunta de Investigación y Matriz de Objetivos",
      subtitulo: "Determinación de la Factibilidad Integral en el Ciclo Lectivo 2027 (CURZAS-UNCo)",
      puntosClave: [
        "❓ <strong>Pregunta General:</strong> ¿Cuáles son las condiciones de factibilidad organizacional, técnica, normativa y de gobernanza para implementar el modelo 360° formativo en 2027?",
        "🎯 <strong>Objetivo General:</strong> Determinar las condiciones de factibilidad integral del modelo 360° en el Dpto. de Administración Pública.",
        "📋 <strong>OE1 (Normativo):</strong> Relevar normas y contrastar prescripción estatutaria vs. prácticas empíricas.",
        "👥 <strong>OE2 (Cultural):</strong> Explorar percepciones, disposiciones y temores de docentes y estudiantes.",
        "⚙️ <strong>OE3 (Condicionantes):</strong> Identificar cuellos de botella técnicos, anonimato y diálogo paritario.",
        "💡 <strong>OE4 (Propositivo):</strong> Formular lineamientos orientativos viables adaptados al cogobierno."
      ],
      metadatosFooter: "Eje 1: El Problema • Pregunta Central • 4 Objetivos Específicos • Res. CD-CURZAS 266/23",
      escena3D: "anim_11",
      guionOrador: "Sobre esta base se formula la pregunta rectora: ¿Cuáles son las condiciones de factibilidad organizacional, técnica, normativa y de gobernanza multinivel para implementar un modelo 360° en el Departamento de Administración Pública en 2027? La matriz de objetivos asegura consistencia total: el Objetivo General determina la factibilidad integral; el Objetivo 1 audita la brecha entre la norma escrita y la práctica real; el Objetivo 2 explora las percepciones y temores docentes; el Objetivo 3 releva los condicionantes técnicos y de cogobierno; y el Objetivo 4 diseña lineamientos orientativos viables para las autoridades."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EJE II: 3-ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO (Filminas 5 a 7)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_5",
      numero: 5,
      bloque: "EJE II: 3-ESTADO DE LA CUESTIÓN Y TEORÍA",
      esquema: "Epistemología Crítica y Modelo Sistémico de Empleo Público",
      badge: "Eje 2 • Marco Teórico Sustantivo",
      titulo: "Marco Teórico: Enrique de la Garza y Francisco Longo",
      subtitulo: "La Teoría como Configuración Abierta y la Gestión Estratégica del Rendimiento Público",
      puntosClave: [
        "🌐 <strong>Configuración Abierta (De la Garza):</strong> Red conceptual flexible para interpretar organizaciones complejas y deliberativas.",
        "🏛️ <strong>Modelo de Empleo Público (Longo, 2006):</strong> Gestión de personas en el Estado orientada al aprendizaje y al valor social.",
        "⚙️ <strong>Interdependencia de 4 Subsistemas:</strong> Rendimiento, Desarrollo (capacitación), Organización del Trabajo (nodos) y Relaciones Humanas (CCT).",
        "💡 <strong>Postulado Central de Longo:</strong> 'Evaluar el rendimiento sin conectarlo con el desarrollo constituye un ejercicio burocrático estéril'."
      ],
      metadatosFooter: "Eje 2: Teoría • De la Garza (2001) • Francisco Longo (2006) • Subsistemas de RRHH",
      escena3D: "anim_12",
      diagramaSVG: "assets/Sistemas-longo.svg",
      guionOrador: "Ingresamos al Eje 2: Estado de la Cuestión y Marco Teórico. Epistemológicamente nos posicionamos en Enrique de la Garza Toledo, entendiendo la teoría como una configuración abierta capaz de reconstruir el campo de lo viable. En el plano sustantivo, adoptamos el modelo de gestión estratégica de recursos humanos en el sector público de Francisco Longo (2006). Como observamos en el diagrama oficial, Longo estructura el empleo público en subsistemas interdependientes: evaluar el rendimiento docente cobra sentido únicamente si nutre al subsistema de desarrollo mediante capacitación continua, adecuando la organización del trabajo en los nodos y preservando el diálogo paritario con ADUNC."
    },

    {
      id: "slide_6",
      numero: 6,
      bloque: "EJE II: 3-ESTADO DE LA CUESTIÓN Y TEORÍA",
      esquema: "Triangulación Multiactoral y Arquitectura Formativa",
      badge: "Eje 2 • Dispositivo 360° Formativo",
      titulo: "El Dispositivo de Retroalimentación 360 Grados",
      subtitulo: "Arquitectura Circular en Cuatro Cuadrantes y Lógica Formativa (Obando & Sifuentes)",
      puntosClave: [
        "🔄 <strong>Triangulación Multiactoral:</strong> Cruce de 4 miradas que neutraliza el sesgo y la subjetividad de las encuestas aisladas.",
        "🧭 <strong>4 Cuadrantes Integrados:</strong> 1) Autoevaluación reflexiva; 2) Coevaluación de pares; 3) Apreciación estudiantil; 4) Dirección departamental.",
        "📈 <strong>Lógica Formativa vs. Sumativa:</strong> Generación de reportes diagnósticos cualitativos para la mejora pedagógica continua.",
        "🔒 <strong>Blindaje Técnico Indispensable:</strong> Anonimato estricto, reportes confidenciales de uso exclusivo del docente y sin impacto punitivo."
      ],
      metadatosFooter: "Eje 2: Teoría • Modelo 360° Circular • Obando Freire & Sifuentes • Núcleo Art. 76",
      escena3D: "anim_15",
      diagramaSVG: "assets/modelo_360.svg",
      guionOrador: "En el núcleo del marco conceptual se sitúa el dispositivo 360 grados. Los antecedentes de Obando Freire y Sifuentes en universidades demuestran que las encuestas tradicionales generan sesgos de complacencia o de castigo a la exigencia académica. Nuestro modelo circular triangula cuatro miradas: la autoevaluación reflexiva del docente, la coevaluación entre pares de cátedra, la percepción estudiantil situada y la visión institucional del Departamento. El circuito converge en reportes confidenciales entregados directamente al docente, asegurando un destino exclusivamente pedagógico amparado en el Artículo 76."
    },

    {
      id: "slide_7",
      numero: 7,
      bloque: "EJE II: 3-ESTADO DE LA CUESTIÓN Y TEORÍA",
      esquema: "Poder Compartido, Estado Plataforma y Vacancia Regional",
      badge: "Eje 2 • Poligobernanza & Vacancia",
      titulo: "Poligobernanza, Poder Compartido y Vacancia Patagónica",
      subtitulo: "Carlos Matus, Cao & Blutman, Oscar Oszlak y la Originalidad del Caso CURZAS",
      puntosClave: [
        "🤝 <strong>Poder Compartido (Matus - PES):</strong> La viabilidad no se impone por decreto; se construye concertando con claustros y el gremio ADUNC.",
        "🗺️ <strong>Poligobernanza (Cao & Blutman):</strong> Articulación de redes horizontales entre Rectorado (Neuquén), Sede Viedma y Nodos rionegrinos.",
        "🖥️ <strong>Estado Plataforma (Oszlak):</strong> Plataformas digitales públicas (Moodle/SIU) con anonimato auditado que evitan la tecno-vigilancia.",
        "🎯 <strong>Vacancia Comprobada:</strong> Inexistencia de estudios empíricos de factibilidad 360° en universidades públicas cogobernadas con redes patagónicas."
      ],
      metadatosFooter: "Eje 2: Teoría • Matus (1993) • Cao & Blutman (2023) • Oszlak (2020) • Vacancia Regional",
      escena3D: "anim_16",
      guionOrador: "Para garantizar que la propuesta no quede en una expresión de deseos técnica, recurrimos a tres autores fundamentales de la administración pública. Carlos Matus nos enseña que en organizaciones complejas el poder es compartido: la viabilidad requiere concertación paritaria y acuerdos en cogobierno. Horacio Cao y Gustavo Blutman conceptualizan la poligobernanza patagónica entre la sede central y los nodos descentralizados. Y Oscar Oszlak fundamenta el uso ético de plataformas digitales con anonimato asegurado. El relevamiento de antecedentes confirmó una vacancia científica indiscutible: no existen investigaciones sobre factibilidad 360° en universidades públicas patagónicas con cogobierno y docencia híbrida."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EJE III: 4-METODOLOGÍA (Filminas 8 a 11)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_8",
      numero: 8,
      bloque: "EJE III: 4-METODOLOGÍA",
      esquema: "Estrategia Metodológica Mixta y Diseño Muestral",
      badge: "Eje 3 • Diseño Mixto CUAL->cuan",
      titulo: "Diseño Metodológico Mixto y Muestra Situada",
      subtitulo: "Estudio de Caso No Experimental, Transversal y Triangulación Metodológica (Ciclo Lectivo 2027)",
      puntosClave: [
        "🔬 <strong>Enfoque Mixto ($CUAL \\rightarrow cuan$):</strong> Prioridad cualitativa para profundizar en sentidos y acuerdos políticos, complementada con sondeo descriptivo.",
        "📍 <strong>Estudio de Caso Situado (Flyvbjerg):</strong> Dpto. de Administración Pública del CURZAS-UNCo (Sede Central Viedma y Nodos).",
        "🎤 <strong>Muestra Cualitativa (8 Entrevistas Clave):</strong> 4 docentes (presenciales y tutores virtuales), 2 directivos, 1 referente gremial de ADUNC y 1 estudiante avanzado.",
        "📊 <strong>Sondeo Cuantitativo (45 Respondientes):</strong> Cuestionario digital autoadministrado a 15 docentes y 30 estudiantes (escala Likert)."
      ],
      metadatosFooter: "Eje 3: Metodología • Sampieri (Mixto) • Flyvbjerg (Caso) • 8 Entrevistas • 45 Cuestionarios",
      escena3D: "anim_19",
      guionOrador: "Arribamos al Eje 3: Metodología. Diseñamos un enfoque metodológico mixto con preponderancia cualitativa ($CUAL \\rightarrow cuan$). El componente cualitativo profundiza en los significados, temores y condiciones de viabilidad gremial, mientras que el sondeo cuantitativo aporta frecuencias descriptivas de aceptación. Se trata de un estudio de caso situado no experimental y transversal delimitado al ciclo 2027. La muestra se calibró con estricto rigor y realismo operativo para un investigador individual: 8 entrevistas en profundidad a actores estratégicos —docentes presenciales y tutores de nodos, autoridades, gremio ADUNC y estudiantes— articuladas con un sondeo a 45 respondientes y análisis documental normativo."
    },

    {
      id: "slide_9",
      numero: 9,
      bloque: "EJE III: 4-METODOLOGÍA",
      esquema: "Operacionalización de la Factibilidad Integral",
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
      metadatosFooter: "Eje 3: Metodología • Matriz de Operacionalización • Indicadores Empíricos y Fuentes",
      escena3D: "anim_20",
      guionOrador: "Para operacionalizar la factibilidad sin caer en generalidades abstractas, estructuramos una matriz analítica en cinco dimensiones: la normativa, que garantiza el cumplimiento del Estatuto y del CCT; la técnica, que verifica que los servidores de Moodle y SIU operen con anonimato estricto; la organizacional, que mide la capacidad administrativa del Departamento; la cultural, que evalúa la confianza docente en el fin formativo; y la de gobernanza multinivel, que asegura la deliberación en los órganos de cogobierno y la concertación con el sindicato ADUNC."
    },

    {
      id: "slide_10",
      numero: 10,
      bloque: "EJE III: 4-METODOLOGÍA",
      esquema: "Planificación Temporal y Viabilidad de Recursos",
      badge: "Eje 3 • Plan 2027 (7 Meses)",
      titulo: "Fases de Campo, Cronograma y Viabilidad de Recursos",
      subtitulo: "Seis Fases de Ejecución Continua (Mayo a Noviembre 2027) y Costo Marginal Cero",
      puntosClave: [
        "🗓️ <strong>Fase 1 (Mes 1 / Mayo):</strong> Avales departamentales, contacto institucional y prueba piloto de instrumentos.",
        "🗓️ <strong>Fases 2-3 (Meses 2-3 / Jun-Jul):</strong> Relevamiento normativo, 8 entrevistas semiestructuradas y aplicación del sondeo digital.",
        "🗓️ <strong>Fases 4-6 (Meses 4-7 / Ago-Nov):</strong> Triangulación analítica, redacción de lineamientos de TFG, revisión final y defensa oral.",
        "💰 <strong>Viabilidad Integral (Apartado 9):</strong> Costo marginal cero (infraestructura Moodle/SIU instalada, software abierto R/PSPP) y plena autonomía."
      ],
      metadatosFooter: "Eje 3: Metodología • 6 Fases Secuenciales • Mayo a Noviembre 2027 • Viabilidad Asegurada",
      escena3D: "anim_21",
      guionOrador: "El trabajo de campo se organiza en un cronograma intensivo de 7 meses durante 2027, distribuido en seis fases secuenciales: inicia en mayo con la tramitación de avales y la prueba piloto; continúa en junio con las entrevistas y el análisis normativo; en julio se aplica el cuestionario digital; en agosto se realiza la triangulación analítica; y entre septiembre y noviembre se redactan los lineamientos, el informe final y la preparación de la defensa. En estricto cumplimiento del Apartado 9 de la consigna de cátedra, se demuestra la viabilidad de recursos: el proyecto opera a costo marginal cero para el CURZAS, reutilizando plataformas tecnológicas preexistentes."
    },

    {
      id: "slide_11",
      numero: 11,
      bloque: "EJE III: 4-METODOLOGÍA",
      esquema: "Protección de Datos y Compromiso Institucional",
      badge: "Eje 3 • Ley Nacional N° 25.326",
      titulo: "Garantías Éticas, Protección de Datos y No Afectación",
      subtitulo: "Blindaje Institucional para Asegurar la Participación Libre y Segura de la Comunidad",
      puntosClave: [
        "🛡️ <strong>Protección de Datos (Ley 25.326):</strong> Anonimato técnico estricto, sin registro de direcciones IP, correos ni metadatos.",
        "🧩 <strong>Mitigación de Inferencia:</strong> Agrupamiento de variables demográficas en cátedras unipersonales o reducidas para impedir deducciones.",
        "📝 <strong>Consentimiento Informado:</strong> Aceptación voluntaria previa para entrevistas y sondeos, con revocabilidad en cualquier etapa.",
        "🤝 <strong>Garantía de No Afectación Laboral:</strong> En apego al CCT (Dec. 1246/15), los datos no integrarán expedientes de permanencia ni sumarios."
      ],
      metadatosFooter: "Eje 3: Metodología • Ley 25.326 • Consentimiento Informado • Tutela Gremial Paritaria",
      escena3D: "anim_23",
      guionOrador: "La legitimidad institucional del estudio descansa en un riguroso blindaje ético. Conforme a la Ley Nacional 25.326, garantizamos la disociación total de datos: los cuestionarios no registran correos ni IPs. En cátedras de baja dotación agrupamos variables para neutralizar cualquier inferencia cruzada sobre la identidad docente. Se garantiza el consentimiento informado y, de forma primordial, el compromiso explícito de no afectación laboral: la información recopilada tiene exclusivo fin de investigación académica y no podrá ser remitida jamás a jurados de permanencia ni a instancias sancionatorias."
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
