/**
 * =============================================================================
 * METADATOS Y CONTENIDO DE LA PRESENTACIÓN FINAL — ANTEPROYECTO DE TFG (15 FILMINAS)
 * Universidad Nacional del Comahue — CURZAS
 * Seminario de Integración y Aplicación (SIA 2026)
 * Autor: Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes
 * =============================================================================
 * ENFOQUE EPISTEMOLÓGICO: PROYECTO DE INVESTIGACIÓN PREVIO
 * - Modo potencial / condicional (hipótesis abiertas a contrastación empírica en 2027)
 * - Prudencia metodológica: no se dan conclusiones por sentadas ni la viabilidad por cerrada
 * - Estructura canónica alineada 1:1 con el Documento TFG completo y Diseño Final 2025
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
    normativaMarco: "Resolución CD-CURZA N° 266/23 (Reglamento de TFG) • Estatuto UNCo (Ord. CS N° 0988/2025)",
    ano: "2026",
    lugar: "Viedma, Río Negro — República Argentina"
  },

  timing: {
    totalMinutos: 15,
    alertaAmarillaMinutos: 11, // Advertencia visual a los 11 min (quedan 4 min para Metodología y Cierre)
    alertaRojaMinutos: 13.5,   // Cierre inminente a los 13:30 min (queda 1:30 min para conclusión)
    promedioPorSlideMin: 1.0   // ~1:00 min por filmina (15 filminas * 1.0 min = 15:00 min)
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
        autor: "Obando Freire et al. (2014) & Sifuentes et al. (2016)",
        concepto: "Estudios empíricos sobre evaluación 360° en educación superior (Ecuador, Cuba y México): demuestran que la triangulación multiactoral favorece la autocrítica pedagógica si media confidencialidad técnica y destino estrictamente formativo."
      },
      {
        autor: "Hernández-Villafaña & Luna Serrano (2023) / Vázquez Cid de León et al. (2021)",
        concepto: "Evidencia empírica en universidades públicas mexicanas (n=1.431 docentes UABC y tutorías híbridas): el 71,7% usa resultados para mejorar su docencia, rechaza usos punitivos y valora el 360° para competencias de tutoría virtual."
      },
      {
        autor: "Mónica Marquina (2013)",
        concepto: "Análisis de la profesión académica argentina: constata fragmentación estamentaria y predominio de evaluaciones sumativas y burocráticas, evidenciando una vacancia de circuitos formativos colegiados."
      },
      {
        autor: "Pierre Bourdieu (2003) & Rosana Guber (2004)",
        concepto: "Vigilancia epistemológica y extrañamiento reflexivo para controlar sesgos de deseabilidad social y asimetrías de poder derivados de la doble pertenencia institucional del tesista."
      }
    ],

    normativa: [
      {
        norma: "Resolución CD-CURZA N° 266/23",
        descripcion: "Reglamento de Trabajos Finales de Graduación (TFG) del CURZAS-UNCo. Define la estructura canónica del proyecto y las pautas de inscripción, dirección y dictamen."
      },
      {
        norma: "Ordenanza CS N° 0988/2025 (Estatuto UNCo)",
        descripcion: "Texto ordenado del Estatuto: Art. 17 reconoce al CURZAS como Complejo Universitario Regional; Título X regula la Carrera Docente (Art. 74 informes anuales, Art. 75 permanencia cuatrienal, Art. 76 Capacitación continua)."
      },
      {
        norma: "Decreto PEN N° 1246/2015 (CCT Docente Universitario)",
        descripcion: "Convenio Colectivo de Trabajo Docente. Protege la estabilidad laboral, libertad de cátedra y establece garantías de debido proceso y tutela gremial paritaria (ADUNC)."
      },
      {
        norma: "Resolución CD-CURZA N° 196/2022 (Docencia Híbrida)",
        descripcion: "Reglamenta las mediaciones tecnológicas, la presencialidad remota sincrónica y las tutorías virtuales en la Red de Nodos Territoriales del CURZAS (SIED UNCo)."
      },
      {
        norma: "Ordenanza CS N° 0910/1997 y modif.",
        descripcion: "Reglamento General de Carrera Docente de la UNCo: Título II regula informes anuales de cátedra y encuestas de opinión estudiantil."
      },
      {
        norma: "Ley Nacional N° 25.326",
        descripcion: "Protección de los Datos Personales. Marco legal para el anonimato técnico en origen (tokens sin IP en sondeo) y confidencialidad/seudonimización en entrevistas."
      }
    ],

    objetivos: [
      {
        nivel: "Objetivo General",
        texto: "Analizar las condiciones de factibilidad organizacional, técnica, normativa, cultural y de gobernanza multinivel para la implementación de un modelo de retroalimentación multiactoral (360°) en la evaluación del desempeño docente en el Departamento de Administración Pública del CURZAS-UNCo (2027)."
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
        sede: "Nodo 1: San Antonio Oeste / Las Grutas (Golfo San Matías)",
        detalle: "Nodo estratégico en la costa atlántica rionegrina, nexo pesquero, turístico y portuario con cursadas híbridas mediadas por tecnología."
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
        sede: "Nodo 4: Río Colorado (Valle del Río Colorado / Noreste)",
        detalle: "Portal noreste de la provincia sobre la RN 22 y el límite con La Pampa, con articulación regional para formación universitaria híbrida."
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
        sede: "Nodo 10: Ingeniero Jacobacci (Línea Sur Oeste)",
        detalle: "Nodo cabecera del sector occidental de la Línea Sur sobre la Ruta Nacional 23, articulador regional de la meseta patagónica."
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
    ],

    bibliografia: [
      {
        categoria: "Gestión Pública, Talento y Políticas Estatales",
        cita: "Aguilar Villanueva, L. F. (2006). Gobernanza y gestión pública. Fondo de Cultura Económica."
      },
      {
        categoria: "Gestión Pública, Talento y Políticas Estatales",
        cita: "Cao, H., y Blutman, G. (2021). Escenarios prospectivos para el Estado y la administración pública argentina: El modelo de la poligobernanza y las transformaciones tecnológicas. Instituto Nacional de la Administración Pública (INAP)."
      },
      {
        categoria: "Gestión Pública, Talento y Políticas Estatales",
        cita: "Cao, H., y Blutman, G. (2023). Escenarios futuros para el Estado y la Administración Pública. Colección, 34(1), 143–176. https://doi.org/10.46553/colec.34.2023.p143-176"
      },
      {
        categoria: "Gestión Pública, Talento y Políticas Estatales",
        cita: "Chiavenato, I. (2020). Gestión del talento humano: El nuevo papel de los recursos humanos en las organizaciones (5.ª ed.). McGraw-Hill Interamericana."
      },
      {
        categoria: "Gestión Pública, Talento y Políticas Estatales",
        cita: "Longo, F. (2006). Mérito y flexibilidad: La gestión de las personas en las organizaciones del sector público. Paidós."
      },
      {
        categoria: "Gestión Pública, Talento y Políticas Estatales",
        cita: "Matus, C. (1993). Política, planificación y gobierno. Fundación ALTADIR."
      },
      {
        categoria: "Gestión Pública, Talento y Políticas Estatales",
        cita: "Oszlak, O. (2020). El Estado en la era exponencial. Instituto Nacional de la Administración Pública."
      },
      {
        categoria: "Evaluación Docente y Modelo 360°",
        cita: "Hernández-Villafaña, A. D., y Luna Serrano, E. (2023). Metaevaluación del sistema de evaluación docente en una universidad pública mexicana. Archivos Analíticos de Políticas Educativas, 31(11), 1–24. https://doi.org/10.14507/epaa.31.7501"
      },
      {
        categoria: "Evaluación Docente y Modelo 360°",
        cita: "Lepsinger, R., y Lucia, A. D. (2009). The art and science of 360 degree feedback (2.ª ed.). Pfeiffer."
      },
      {
        categoria: "Evaluación Docente y Modelo 360°",
        cita: "Marquina, M. (2013). ¿Hay una profesión académica argentina? Avances y reflexiones sobre un objeto en construcción. Pensamiento Universitario, 15(15), 35–58."
      },
      {
        categoria: "Evaluación Docente y Modelo 360°",
        cita: "Obando Freire, F. X., López Fernández, R., Luna Álvarez, D., Luna Álvarez, E., Luna Álvarez, W., y Alpízar Fernández, R. (2014). Sistema de evaluación docente mediante el modelo 360 grados y el portafolio electrónico. Medisur, 12(2), 334–340."
      },
      {
        categoria: "Evaluación Docente y Modelo 360°",
        cita: "Sifuentes Ocegueda, E., Suárez Flores, M., y Lara González, L. M. (2016). La evaluación de 360° aplicada al personal docente de nivel superior. Revista de Investigación en Tecnologías de la Información, 4(7), 17–23."
      },
      {
        categoria: "Evaluación Docente y Modelo 360°",
        cita: "Vázquez Cid de León, C., Domínguez Herrera, J. E., Aguilar Cruz, C., Ramírez Castillo, E. A., y Vázquez Arango, M. de L. (2021). Evaluación 360° de las tutorías presenciales y en línea en universidades públicas. UNACIENCIA: Revista de Estudios e Investigaciones, 14(27), 103–120."
      },
      {
        categoria: "Epistemología y Metodología de Investigación",
        cita: "Bardin, L. (2002). Análisis de contenido. Akal."
      },
      {
        categoria: "Epistemología y Metodología de Investigación",
        cita: "Bourdieu, P. (2003). El oficio de científico: Ciencia de la ciencia y reflexividad. Anagrama."
      },
      {
        categoria: "Epistemología y Metodología de Investigación",
        cita: "De la Garza Toledo, E. (2001). La epistemología crítica y el concepto de configuración: Alternativas a la estructura y a la acción. En Los retos de las ciencias sociales en el siglo XXI (pp. 45–68). Plaza y Valdés."
      },
      {
        categoria: "Epistemología y Metodología de Investigación",
        cita: "Denzin, N. K. (1978). The research act: A theoretical introduction to sociological methods (2.ª ed.). McGraw-Hill."
      },
      {
        categoria: "Epistemología y Metodología de Investigación",
        cita: "Flyvbjerg, B. (2005). Cinco malentendidos acerca de la investigación mediante los estudios de caso. Revista Española de Investigaciones Sociológicas, 106, 33–62."
      },
      {
        categoria: "Epistemología y Metodología de Investigación",
        cita: "Giménez, G. (2012). El estatuto metodológico del estudio de caso en la investigación social. Cultura y Representaciones Sociales, 7(13), 33–52."
      },
      {
        categoria: "Epistemología y Metodología de Investigación",
        cita: "Glaser, B. G., y Strauss, A. L. (1967). The discovery of grounded theory: Strategies for qualitative research. Aldine Publishing Company."
      },
      {
        categoria: "Epistemología y Metodología de Investigación",
        cita: "Guber, R. (2004). El salvaje metropolitano: Reconstrucción del conocimiento social en el trabajo de campo. Paidós."
      },
      {
        categoria: "Epistemología y Metodología de Investigación",
        cita: "Hernández Sampieri, R., Fernández Collado, C., y Baptista Lucio, M. P. (2014). Metodología de la investigación (6.ª ed.). McGraw-Hill Interamericana."
      },
      {
        categoria: "Epistemología y Metodología de Investigación",
        cita: "Jiménez Becerra, A. (2008). El estado del arte y la investigación de la investigación: Reflexiones metodológicas. En La práctica investigativa en ciencias sociales (pp. 27–42). UPN / CLACSO."
      },
      {
        categoria: "Epistemología y Metodología de Investigación",
        cita: "Sautu, R. (2005). Todo es teoría: Objetivos y métodos de investigación. Lumiere."
      },
      {
        categoria: "Epistemología y Metodología de Investigación",
        cita: "Torraco, R. J. (2016). Writing integrative literature reviews: Using the past and present to explore the future. Human Resource Development Review, 15(4), 404–428. https://doi.org/10.1177/1534484316671606"
      },
      {
        categoria: "Epistemología y Metodología de Investigación",
        cita: "Wainerman, C., y Sautu, R. (2011). La trastienda de la investigación (4.ª ed.). Manantial."
      },
      {
        categoria: "Marco Legal, Estatutario e Institucional",
        cita: "Congreso de la Nación Argentina. (2000). Ley N° 25.326: Protección de los Datos Personales. Boletín Oficial de la República Argentina."
      },
      {
        categoria: "Marco Legal, Estatutario e Institucional",
        cita: "Ministerio de Educación. (1995). Ley N° 24.521 de Educación Superior. Boletín Oficial de la República Argentina."
      },
      {
        categoria: "Marco Legal, Estatutario e Institucional",
        cita: "Poder Ejecutivo Nacional. (2015). Decreto N° 1246/2015: Convenio Colectivo de Trabajo para los Docentes de las Instituciones Universitarias Nacionales. Boletín Oficial."
      },
      {
        categoria: "Marco Legal, Estatutario e Institucional",
        cita: "Universidad Nacional del Comahue. (1997). Ordenanza CS N° 0910/1997: Reglamento de Carrera Docente (texto ordenado a Ord. CS N° 0887/2021). Consejo Superior."
      },
      {
        categoria: "Marco Legal, Estatutario e Institucional",
        cita: "Universidad Nacional del Comahue. (2025). Ordenanza CS N° 0988/2025: Texto ordenado del Estatuto UNCo (Título X: De la Carrera Docente). Asamblea Universitaria."
      },
      {
        categoria: "Marco Legal, Estatutario e Institucional",
        cita: "Consejo Directivo del CURZAS. (2022). Resolución CD N° 135/2022 y Resolución CD-CURZA N° 196/2022: Nodos Territoriales y Pautas de Docencia Híbrida (SIED UNCo)."
      },
      {
        categoria: "Marco Legal, Estatutario e Institucional",
        cita: "Consejo Directivo del CURZAS. (2023). Resolución CD-CURZAS N° 266/2023: Reglamento de Trabajo Final de Graduación del Departamento de Administración Pública."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LAS 15 FILMINAS ESTRATÉGICAS — ESTRUCTURA COHERENTE CON EL PROYECTO TFG
  // ═══════════════════════════════════════════════════════════════════════════
  slides: [
    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 1: APERTURA PROTOCOLAR (Carátula Oficial TFG)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_1",
      numero: 1,
      bloque: "APERTURA PROTOCOLAR",
      esquema: "Carátula Oficial y Presentación del Proyecto TFG",
      badge: "UNCo • CURZAS • Res. CD-CURZA N° 266/23",
      titulo: "Evaluación Docente y Factibilidad del Modelo 360°",
      subtitulo: "Proyecto de Investigación Situado en el Dpto. de Administración Pública del CURZAS-UNCo (2027)",
      puntosClave: [
        "🎓 <strong>Carrera y Materia:</strong> Licenciatura en Gestión de Recursos Humanos (CCC) — Seminario de Integración y Aplicación (Año 2026)",
        "👤 <strong>Tesista:</strong> Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes (Legajo N° 8252 • DNI N° 35.492.138)",
        "🏛️ <strong>Institución:</strong> UNCo — CURZAS • Dpto. de Administración Pública (Sede Viedma y 10 Nodos)",
        "👥 <strong>Cátedra SIA:</strong> Dra. Deborah Noguera • Esp. Federico Abeiro • Esp. María Cecilia Aguirre"
      ],
      metadatosFooter: "Final Proyecto TFG • Carátula Oficial • Res. CD-CURZA N° 266/23 • Tiempo: 15:00 min",
      escena3D: "anim_01",
      guionOrador: "Muy buenos días, Dra. Deborah Noguera, Esp. Federico Abeiro y Esp. María Cecilia Aguirre.\n\nInicio la defensa formal de mi Proyecto de Trabajo Final de Graduación: 'Evaluación del Desempeño Docente y Factibilidad de Implementación de un Modelo de Retroalimentación 360° en el Departamento de Administración Pública del CURZAS-UNCo (2027)'.\n\n[Pausa de 2 segundos]\n\nComo proyecto de investigación previo bajo la Resolución CD-CURZA N° 266/23, esta exposición fundamenta la pertinencia, el diseño metodológico y la viabilidad del futuro estudio de campo en 2027. La presentación sigue la arquitectura oficial del documento: Primera Parte (El Problema), Segunda Parte (Marco de Referencia y Estado del Arte), Tercera Parte (Metodología, Ética, Cronograma y Viabilidad), cierre con la estructura del Diseño Final, Agradecimientos y Bibliografía."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EJE I: PRIMERA PARTE DEL TFG — EL PROBLEMA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_2",
      numero: 2,
      bloque: "EJE I: EL PROBLEMA",
      esquema: "Tema de Investigación, Encuadre Longo y Territorio",
      badge: "Eje 1 • Tema y Territorio • Res. 196/2022",
      titulo: "Tema de Investigación: El CURZAS y sus 10 Nodos",
      subtitulo: "Capacidades Estatales en el Dpto. de Administración Pública y Docencia Híbrida (Res. CD-CURZA N° 196/2022)",
      puntosClave: [
        "🏛️ <strong>Sede Central Viedma:</strong> Coordina la Lic. en Administración Pública y el CCC de Lic. en Gestión de RRHH.",
        "🌐 <strong>Red de 10 Nodos en Río Negro:</strong> Valcheta, Ramos Mexía, Sierra Colorada, Los Menucos, Maquinchao, Ing. Jacobacci, SAO/Las Grutas, Sierra Grande, Gral. Conesa y Río Colorado.",
        "💻 <strong>Docencia Híbrida (Res. CD-CURZA N° 196/2022):</strong> Aulas Moodle, presencialidad remota sincrónica y tutorías territoriales.",
        "⚖️ <strong>Marco Regulatorio Vigente:</strong> Estatuto UNCo (Ord. CS N° 0988/2025, Título X), Ord. CS N° 0910/1997 y CCT Docente (Dec. PEN N° 1246/2015)."
      ],
      metadatosFooter: "Primera Parte • Tema, Encuadre de Longo (2006) y Contexto Institucional/Normativo",
      escena3D: "anim_06",
      diagramaSVG: "assets/red_territorial.svg",
      anexoInteractivo: {
        titulo: "Anexo Interactivo — Maqueta 3D de Río Negro y 10 Nodos CURZAS",
        archivo: "assets/maqueta_rionegro_3d.html",
        etiqueta: "🗺️ Ver Anexo: Maqueta 3D Río Negro",
        atajo: "A"
      },
      guionOrador: "Comenzando por la Primera Parte del proyecto: la delimitación del Tema de Investigación en la intersección entre la Administración Pública y la Gestión de Recursos Humanos, bajo el enfoque de Francisco Longo y Oscar Oszlak.\n\n[Énfasis situado]\nNuestro caso se ubica en el Departamento de Administración Pública del CURZAS-UNCo, cuya sede central en Viedma articula cursadas presenciales e híbridas con una Red Territorial de 10 Nodos Universitarios distribuidos en la Costa Atlántica, Valle Medio, Noreste y Línea Sur, formalizados bajo pautas de mediación tecnológica por la Resolución CD-CURZA N° 196/2022.\n\n[Pausa de 2 segundos]\n\nEn el plano regulatorio, la permanencia docente descansa en los informes anuales con encuesta estudiantil (Art. 74 del Estatuto UNCo, Ord. CS 0988/2025) y evaluaciones cuatrienales ante jurados con estudiante evaluador y veeduría gremial (Art. 75), en armonía con la Ordenanza 0910/1997 y el Decreto 1246/2015. Desde este marco se formula nuestro supuesto orientador: indagar si estos instrumentos sumativos dejan un área de vacancia respecto a la retroalimentación formativa y colegiada."
    },

    {
      id: "slide_3",
      numero: 3,
      bloque: "EJE I: EL PROBLEMA",
      esquema: "Delimitación del Problema, Dimensiones y Justificación",
      badge: "Eje 1 • Desnaturalización • 5 Dimensiones",
      titulo: "Delimitación del Problema y Tensión Art. 75 vs. Art. 76",
      subtitulo: "Problematización Situada (Wainerman & Sautu, 2011) • Alcance 2027 • 3 Planos de Justificación",
      puntosClave: [
        "🔍 <strong>Problematización y Tensión Normativa:</strong> El Art. 75 (dos evaluaciones negativas determinan vacancia del cargo) genera prevención docente, mientras el Art. 76 consagra la capacitación docente continua.",
        "📍 <strong>4 Delimitaciones (SIA):</strong> Conceptual (subsistemas de Longo), Espacial (Viedma + 10 Nodos), Temporal (Mayo–Noviembre 2027) y Poblacional (docentes, estudiantes, conducción y ADUNC).",
        "📐 <strong>5 Dimensiones de Factibilidad:</strong> Normativa/Estatutaria, Técnica/Instrumental, Organizacional/Procedimental, Cultural/Actitudinal y Gobernanza Multinivel.",
        "🏛️ <strong>Justificación en 3 Planos:</strong> Disciplinar (capacidades estatales en universidades públicas), Institucional (diagnóstico departamental) y Profesional (síntesis LGRH)."
      ],
      metadatosFooter: "Primera Parte • Delimitación del Objeto Problema y Justificación en 3 Planos",
      escena3D: "anim_09",
      guionOrador: "Aplicando la desnaturalización de Wainerman y Sautu, cuestionamos la rutina de reducir la evaluación a un trámite administrativo sumativo.\n\n[Tensión estructural en el Estatuto UNCo]\nMientras el Artículo 75 fija consecuencias de vacancia tras dos evaluaciones cuatrienales negativas consecutivas —generando comprensible cautela docente—, el Artículo 76 ordena articular programas anuales de capacitación pedagógica continua sin contar hoy con diagnósticos formativos situados.\n\n[Pausa de 2 segundos]\n\nDelimitamos el estudio al ciclo 2027 (mayo a noviembre) en Sede Viedma y los 10 Nodos Territoriales, examinando cinco dimensiones de factibilidad: normativa, técnica, organizacional, cultural y de gobernanza multinivel, justificadas en los planos cognitivo-disciplinar, social-institucional y profesional."
    },

    {
      id: "slide_4",
      numero: 4,
      bloque: "EJE I: EL PROBLEMA",
      esquema: "Pregunta General, Objetivos y Matriz de Consistencia",
      badge: "Eje 1 • Consistencia Metodológica • 2027",
      titulo: "Pregunta de Investigación, Objetivos y Consistencia",
      subtitulo: "Matriz Articulada con los Subsistemas de Longo (2006) — Tabla 1 del TFG",
      puntosClave: [
        "❓ <strong>Pregunta General:</strong> ¿Cuáles son las condiciones de factibilidad organizacional, técnica, normativa, cultural y de gobernanza multinivel para implementar un modelo 360° en el Dpto. de Adm. Pública (CURZAS-UNCo, 2027)?",
        "🎯 <strong>Objetivo General:</strong> Analizar las condiciones de factibilidad organizacional, técnica, normativa, cultural y de gobernanza multinivel para la implementación del modelo multiactoral (360°).",
        "📋 <strong>OE1 (Normativo) y OE2 (Cultural):</strong> Relevar normas vs. prácticas vigentes; explorar percepciones y confianza institucional de docentes, estudiantes y autoridades.",
        "⚙️ <strong>OE3 (Condicionantes) y OE4 (Propositivo):</strong> Identificar condicionantes técnicos (incluida coevaluación horizontal en cátedras unipersonales), paritarios y de poligobernanza; y proponer lineamientos orientativos."
      ],
      metadatosFooter: "Primera Parte • Pregunta General, Objetivos (General + 4 Específicos) y Tabla 1 de Consistencia",
      escena3D: "anim_11",
      guionOrador: "Concluimos la Primera Parte con la pregunta rectora y los objetivos de la investigación.\n\nLa pregunta general indaga cuáles son las condiciones de factibilidad organizacional, técnica, normativa, cultural y de gobernanza multinivel para implementar un modelo de retroalimentación 360° en el Departamento durante 2027.\n\n[Objetivos y Matriz de Consistencia]\nEl Objetivo General busca analizar esas cinco condiciones de factibilidad, desagregado en cuatro objetivos específicos:\n1. Caracterizar normas estatutarias frente a prácticas vigentes.\n2. Explorar percepciones, disposiciones y confianza institucional en docentes, estudiantes y autoridades.\n3. Identificar condicionantes técnico-organizacionales —incluyendo la resolución de cátedras unipersonales mediante pares horizontales por tramo curricular— junto a resguardos paritarios y de confidencialidad.\n4. Proponer lineamientos orientativos adaptados al caso."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EJE II: SEGUNDA PARTE DEL TFG — MARCO TEÓRICO Y ESTADO DEL ARTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_5",
      numero: 5,
      bloque: "EJE II: MARCO TEÓRICO Y ESTADO DEL ARTE",
      esquema: "Marco Teórico: De la Garza Toledo y Modelo de Longo",
      badge: "Eje 2 • Marco Teórico • Lentes Conceptuales",
      titulo: "Marco Teórico: Epistemología Abierta y Modelo de Longo",
      subtitulo: "Configuración Abierta (De la Garza, 2001), Pirámide Invertida (Sautu, 2005) y 5 Subsistemas Focalizados",
      puntosClave: [
        "🌐 <strong>Epistemología Crítica (De la Garza Toledo, 2001):</strong> La teoría como configuración abierta para reconstruir el campo de lo institucionalmente viable sin dogmatismos.",
        "🏛️ <strong>Modelo de Empleo Público (Longo, 2006):</strong> Superar la lógica burocrática hacia mérito, flexibilidad y valor público (7 subsistemas generales, 5 focalizados en este estudio).",
        "⚙️ <strong>Articulación de 5 Subsistemas Clave:</strong> Gestión del Rendimiento (eje formativo), Desarrollo (Art. 76), Organización del Trabajo (aulas híbridas), Empleo (estabilidad CCT) y Relaciones Humanas (clima y ADUNC).",
        "💡 <strong>Postulado Central:</strong> Evaluar el rendimiento sin ofrecer vías de perfeccionamiento docente (Desarrollo Art. 76) lo reduce a un trámite burocrático estéril."
      ],
      metadatosFooter: "Segunda Parte • Marco Teórico: Posicionamiento Epistemológico y Modelo de Francisco Longo",
      escena3D: "anim_12",
      diagramaSVG: "assets/Sistemas-longo.svg",
      guionOrador: "Ingresamos a la Segunda Parte del Proyecto: el Marco Teórico y el Estado del Arte, siguiendo el orden estricto del documento de TFG y del Diseño de Investigación oficial.\n\nEn el plano epistemológico asumimos con Enrique de la Garza Toledo la teoría como una configuración abierta que permite indagar el campo de posibilidades institucionales sin apriorismos dogmáticos, articulada en pirámide invertida según Ruth Sautu.\n\n[Modelo Sistémico de Francisco Longo]\nComo observamos en el diagrama oficial y la arquitectura 3D de subsistemas, la gestión pública de personas integra siete componentes; en nuestra investigación focalizamos cinco subsistemas interdependientes alrededor de la Gestión del Rendimiento: Desarrollo (capacitación del Art. 76), Organización del Trabajo (especificidad de aulas híbridas y nodos), Empleo (estabilidad bajo CCT) y Relaciones Humanas y Sociales (clima de confianza y concertación paritaria)."
    },

    {
      id: "slide_6",
      numero: 6,
      bloque: "EJE II: MARCO TEÓRICO Y ESTADO DEL ARTE",
      esquema: "Dispositivo 360°, Poligobernanza, Matus y Oszlak",
      badge: "Eje 2 • Modelo 360° • Poligobernanza",
      titulo: "Dispositivo 360° y Poligobernanza Universitaria",
      subtitulo: "Triangulación Multiactoral, 4 Planos Decisionales (Cao & Blutman), Poder Compartido (Matus) y Oszlak",
      puntosClave: [
        "🔄 <strong>Modelo 360° Formativo (Lepsinger & Lucia, 2009; Chiavenato, 2020):</strong> 4 miradas (Autoevaluación, Pares —o pares horizontales en cátedras unipersonales—, Estudiantes y Dirección Departamental).",
        "🗺️ <strong>Poligobernanza en 4 Planos (Aguilar Villanueva, 2006; Cao & Blutman, 2021, 2023):</strong> Macro (CS/Rectorado), Meso (CD CURZAS/Dpto.), Micro (10 Nodos) y Transversal (Paritaria ADUNC).",
        "🤝 <strong>Poder Compartido y Estado Plataforma (Matus, 1993; Oszlak, 2020):</strong> Viabilidad política concertada en cogobierno y capacidades digitales (Moodle/SIU) sin tecno-vigilancia.",
        "⚖️ <strong>Precisión Categorial:</strong> Diferenciación analítica entre <em>Claustros</em> (estamentos formales Ley 24.521) y <em>Actores Situados</em> (quienes practican y habitan la enseñanza cotidiana)."
      ],
      metadatosFooter: "Segunda Parte • Dispositivo 360°, Poligobernanza, Poder Compartido y Actores Situados",
      escena3D: "anim_15",
      diagramaSVG: "assets/modelo_360.svg",
      guionOrador: "Completando el Marco Teórico, precisamos cómo opera el dispositivo 360 grados propuesto frente al régimen sumativo.\n\nIntegra cuatro fuentes complementarias: autoevaluación reflexiva, coevaluación de pares —resolviendo cátedras unipersonales mediante pares horizontales del mismo tramo curricular—, heteroevaluación estudiantil y apreciación departamental.\n\n[Gobernanza y viabilidad política]\nPara analizar su factibilidad en una universidad argentina cogobernada articulamos cuatro planos de poligobernanza (Cao y Blutman; Aguilar Villanueva): Macro en Consejo Superior, Meso en Consejo Directivo CURZAS, Micro en los 10 Nodos y Transversal con ADUNC. Con Carlos Matus ponderamos la negociación sobre poder compartido; con Oscar Oszlak examinamos el uso de Moodle y SIU para fortalecer capacidades estatales con resguardo anónimo; y distinguimos formalmente entre claustros jurídicos (Ley 24.521) y actores situados concretos."
    },

    {
      id: "slide_7",
      numero: 7,
      bloque: "EJE II: MARCO TEÓRICO Y ESTADO DEL ARTE",
      esquema: "Antecedentes Empíricos, Estado del Arte y Vacancia",
      badge: "Eje 2 • Estado del Arte • 3 Escalas",
      titulo: "Estado del Arte en Tres Escalas y Vacancia Situada",
      subtitulo: "Revisión Sistemática (Torraco, 2016; Jiménez Becerra, 2008) y Oportunidad Científica en el CURZAS",
      puntosClave: [
        "🌍 <strong>Escala Internacional (México, Ecuador y Cuba):</strong> Sifuentes Ocegueda et al. (2016), Obando Freire et al. (2014), Hernández-Villafaña y Luna Serrano (2023, n=1.431 UABC: 71,7% usa resultados formativos y rechaza uso salarial) y Vázquez Cid de León et al. (2021, tutorías virtuales).",
        "🇦🇷 <strong>Escala Nacional (Marquina, 2013):</strong> Diagnóstico de fragmentación académica y primacía de dispositivos sumativos; vacancia empírica sobre modelos 360° en universidades nacionales.",
        "📍 <strong>Escala Regional (UNCo / CURZAS):</strong> Ord. CS N° 0988/2025 (Arts. 74–76), Ord. CS N° 0910/1997, Dec. 1246/2015 y Res. CD-CURZA N° 196/2022 sin dispositivos colegiados formativos.",
        "🎯 <strong>Vacancia Empírica Identificada:</strong> Ausencia de estudios sobre factibilidad 360° en una unidad académica pública, cogobernada, patagónica y con docencia híbrida en red."
      ],
      metadatosFooter: "Segunda Parte • Estado del Arte (3 Escalas Geográficas) y Síntesis de Vacancia",
      escena3D: "anim_17",
      guionOrador: "Siguiendo el orden del documento final, abordamos el Estado del Arte y la Vacancia de la Investigación en tres escalas jerárquicas (Torraco, 2016; Jiménez Becerra, 2008), simbolizado en pantalla por el Oráculo del Conocimiento.\n\n[Tres escalas]\n1. A nivel internacional destacan Sifuentes et al. (2016) en Nayarit, Obando Freire et al. (2014) en Ecuador y Cuba, Hernández-Villafaña y Luna Serrano (2023) sobre 1.431 docentes en México —donde 71,7% valoró el uso formativo rechazando el punitivo—, y Vázquez Cid de León et al. (2021) sobre tutorías virtuales 360°.\n2. En el plano nacional, Marquina (2013) advierte el peso burocrático-sumativo de la carrera académica, sin registrarse estudios empíricos previos sobre factibilidad 360° en universidades públicas argentinas.\n3. Regionalmente, la normativa UNCo y CURZAS (Ord. 0988/25, Ord. 0910/97, Dec. 1246/15 y Res. 196/22) no contempla circuitos confidenciales formativos, delimitando con claridad nuestra vacancia situada."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EJE III: TERCERA PARTE DEL TFG — METODOLOGÍA, CRONOGRAMA, ÉTICA Y VIABILIDAD
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_8",
      numero: 8,
      bloque: "EJE III: METODOLOGÍA Y VIABILIDAD",
      esquema: "Enfoque Mixto, Población, Muestra e Instrumentos",
      badge: "Eje 3 • Mixto CUAL→cuan • n=9 + n=45",
      titulo: "Diseño Metodológico, Población y Muestra Situada",
      subtitulo: "Estudio de Caso No Experimental Transversal (2027) • Triangulación Normativa, Entrevistas y Sondeo",
      puntosClave: [
        "🔬 <strong>Diseño y Alcance:</strong> Enfoque mixto CUAL → cuan (Hernández-Sampieri et al., 2014); estudio de caso descriptivo, exploratorio y propositivo (Flyvbjerg, 2005; Giménez, 2012).",
        "🏫 <strong>Población Estimada (N):</strong> N_doc ≈ 38 docentes (sede y nodos), N_est ≈ 130 estudiantes avanzados (3°-4° LAP y CCC-LGRH) y N_inst = 5 actores de gestión/ADUNC.",
        "🎤 <strong>Submuestra Cualitativa (n = 9 Informantes Clave):</strong> 4 docentes (saturación teórica, Glaser & Strauss), 2 directivos, 1 paritario ADUNC y 2 estudiantes (1 presencial Viedma + 1 híbrido Nodos).",
        "📊 <strong>Sondeo Cuantitativo (n = 45) y Técnicas:</strong> 15 docentes (Form. A: 13 Likert + 2 abiertas) y 30 estudiantes (Form. B: 10 Likert + 2 abiertas); análisis de contenido (Bardin, 2002) y triangulación (Denzin, 1978)."
      ],
      metadatosFooter: "Tercera Parte • Metodología: Diseño, Población, Muestra (n=9 / n=45) y Técnicas (Anexos I y II)",
      escena3D: "anim_19",
      guionOrador: "Ingresamos a la Tercera Parte del Proyecto: Metodología, Materiales, Técnicas y Métodos.\n\nDiseñamos una estrategia mixta de predominio cualitativo complementada con un sondeo descriptivo (CUAL → cuan), estructurada como estudio de caso no experimental y transversal para el ciclo 2027.\n\n[Población y Muestra exacta]\nSobre una población de referencia estimada en ~38 docentes, ~130 estudiantes avanzados y 5 actores de conducción y paritaria ADUNC, seleccionamos:\n- Una submuestra cualitativa de 9 informantes clave: 4 docentes (bajo criterio de saturación teórica), 2 autoridades académicas, 1 representante gremial de ADUNC y 2 estudiantes avanzados (uno presencial de Viedma y uno híbrido de Nodos Territoriales).\n- Un sondeo exploratorio a 45 participantes (15 docentes con el Formulario A de 15 ítems y 30 estudiantes con el Formulario B de 12 ítems), excluyendo a quienes participen de la prueba piloto (2 docentes y 5 estudiantes)."
    },

    {
      id: "slide_9",
      numero: 9,
      bloque: "EJE III: METODOLOGÍA Y VIABILIDAD",
      esquema: "Matriz de Operacionalización en 5 Dimensiones (Tabla 2)",
      badge: "Eje 3 • Tabla 2 • 5 Dimensiones",
      titulo: "Matriz de Operacionalización en Cinco Dimensiones",
      subtitulo: "Variables, Definiciones Operacionales, Indicadores Empíricos y Fuentes (Tabla 2 del TFG)",
      puntosClave: [
        "⚖️ <strong>1. Normativa y Estatutaria:</strong> Compatibilidad con Ord. CS 0988/25, Ord. 0910/97 y CCT 1246/15; cláusula de no sumatividad y deslinde de permanencia.",
        "💻 <strong>2. Técnica e Instrumental:</strong> Accesibilidad Moodle/SIU (<15 min), tokens sin IP, custodia neutral futura, umbral mínimo n ≥ 5 y tope de ≤15 ítems anti-fatiga.",
        "🏢 <strong>3. Organizacional y Procedimental:</strong> Circuitos de procesamiento en Departamento, plazos de reporte y transferencia de insumos al plan del Art. 76.",
        "🤝 <strong>4. Cultural y Actitudinal:</strong> Confianza institucional, hábito de autoevaluación, disposición a pares (cátedras afines) y pertinencia del juicio estudiantil.",
        "🗳️ <strong>5. Gobernanza Multinivel:</strong> Legitimación en Consejo Departamental/Directivo y concertación paritaria previa con ADUNC."
      ],
      metadatosFooter: "Tercera Parte • Tabla 2: Matriz de Operacionalización y Criterios Métricos (R / PSPP)",
      escena3D: "anim_20",
      guionOrador: "La Tabla 2 del documento operacionaliza la factibilidad en cinco dimensiones analíticas con sus variables, indicadores empíricos e instrumentos:\n\n1. Normativa: articulación jurídica y cláusula estricta de destino formativo.\n2. Técnica: usabilidad de Moodle/SIU, brevedad para mitigar fatiga (máximo 15 reactivos) y regla protectora de umbral mínimo (n mayor o igual a 5 reportes por curso) en un eventual modelo futuro.\n3. Organizacional: capacidad operativa de canalizar demandas hacia la capacitación del Art. 76.\n4. Cultural: confianza institucional, autorreflexión docente y criterio estudiantil.\n5. Gobernanza Multinivel: consensos colegiados y acuerdo paritario con ADUNC.\n\nEn el procesamiento cuantitativo por R/PSPP los reactivos invertidos se recodifican automáticamente (6 menos puntaje) excluyendo NS/NC del promedio."
    },

    {
      id: "slide_10",
      numero: 10,
      bloque: "EJE III: METODOLOGÍA Y VIABILIDAD",
      esquema: "Cronograma (7 Meses / 6 Fases) y Viabilidad Presupuestaria",
      badge: "Eje 3 • Mayo–Nov 2027 • $0 CURZAS",
      titulo: "Cronograma (7 Meses) y Viabilidad de Recursos",
      subtitulo: "Seis Fases Secuenciales (Tabla 3) • Presupuesto Autofinanciado $160.000 ARS / $0 para CURZAS (Tabla 4)",
      puntosClave: [
        "🗓️ <strong>Fases 1–3 (May–Jul 2027):</strong> Aval departamental (Anexo III) y prueba piloto (2 doc. + 5 est.) en mayo; relevamiento documental y 9 entrevistas en junio; sondeo (n=45) en jun–jul.",
        "🗓️ <strong>Fases 4–6 (Ago–Nov 2027):</strong> Triangulación analítica en agosto; formulación de lineamientos y borrador TFG en sep–oct; revisión final y entrega por mesa de entradas en noviembre.",
        "💰 <strong>Viabilidad Económica (Tabla 4):</strong> Costo presupuestario $0 para el CURZAS; gasto directo estimado de $160.000 ARS (nov. 2026 ajustables por IPC-INDEC) 100% autofinanciado por el tesista (nodos por vía digital/remota).",
        "🛠️ <strong>Recursos Humanos y Técnicos:</strong> Dedicación 15–20 h/sem del tesista, Director/a de TFG a designar, Moodle/SIU y entorno abierto Docs-as-Code (Quarto/Typst/R/Zotero, $0)."
      ],
      metadatosFooter: "Tercera Parte • Tabla 3 (Cronograma Mayo–Nov 2027) y Tabla 4 (Presupuesto Autofinanciado)",
      escena3D: "anim_21",
      guionOrador: "Las Tablas 3 y 4 del Proyecto acreditan su factibilidad operativa y financiera en 2027.\n\n[Cronograma en 6 Fases - 7 Meses]\nSe ejecuta entre mayo y noviembre de 2027: en mayo se gestionan avales (Anexo III) y prueba piloto con 2 docentes y 5 estudiantes; en junio el análisis documental y las 9 entrevistas; entre junio y julio el sondeo digital en Viedma y los 10 Nodos considerando el receso invernal; en agosto la triangulación; en septiembre y octubre la redacción de lineamientos y borrador; y en noviembre la presentación formal por mesa de entradas para el circuito de tribunal.\n\n[Viabilidad Financiera Real]\nImplica costo presupuestario cero para la institución: el presupuesto operativo directo estimado en $160.000 ARS (insumos, conectividad domiciliaria, traslados urbanos en Viedma y encuadernación) es asumido 100% mediante autofinanciamiento del tesista, apoyado en software libre ($0) y relevamiento digital remoto en nodos."
    },

    {
      id: "slide_11",
      numero: 11,
      bloque: "EJE III: METODOLOGÍA Y VIABILIDAD",
      esquema: "Reflexividad Metodológica y Consideraciones Éticas",
      badge: "Eje 3 • Bourdieu/Guber • Ley 25.326",
      titulo: "Vigilancia Epistemológica, Reflexividad y Ética",
      subtitulo: "Resguardo ante Doble Pertenencia Institucional y Protocolo Diferenciado (Ley N° 25.326 • Anexo IV)",
      puntosClave: [
        "🔍 <strong>Reflexividad Situada (Bourdieu, 2003; Guber, 2004):</strong> Control explícito de deseabilidad social y asimetrías de rol (tesista alumno/egresado) mediante extrañamiento reflexivo y triangulación.",
        "🔐 <strong>Sondeo vs. Entrevistas (Ley 25.326):</strong> Anonimato técnico en sondeo (tokens sin IP/correos) vs. confidencialidad y seudonimización (DOC-01, GREM-01) con atribución funcional agregada en entrevistas.",
        "🛡️ <strong>Deslinde de Custodia y Umbral n ≥ 5:</strong> En el estudio, custodia cifrada del tesista; en un eventual modelo 360° futuro, custodia pedagógica externa a Dirección y bloqueo de reportes con n < 5.",
        "📝 <strong>Consentimiento Informado y CCT:</strong> Validación voluntaria previa (Anexo IV) y garantía expresa de no afectación laboral bajo el Decreto N° 1246/2015."
      ],
      metadatosFooter: "Tercera Parte • Vigilancia Epistemológica, Protocolo Ley 25.326 y Anexos III–IV",
      escena3D: "anim_23",
      guionOrador: "Un eje decisivo del documento es la articulación entre reflexividad metodológica y resguardos éticos.\n\nSiguiendo a Pierre Bourdieu y Rosana Guber, asumimos explícitamente la doble condición situada del tesista dentro del CURZAS para controlar riesgos de deseabilidad social o asimetría de rol.\n\n[Protocolo ético diferenciado bajo Ley 25.326]\n1. En el sondeo digital rige anonimato técnico en origen mediante tokens sin IP ni correos.\n2. En las entrevistas rige confidencialidad profesional con códigos seudonimizados y atribución funcional agregada para cargos únicos.\n3. Se deslindan las garantías de este TFG frente al futuro modelo institucional (custodia externa a Dirección y umbral mínimo de 5 respuestas por curso), resguardado por consentimiento informado escrito (Anexo IV) y garantía de no afectación laboral (Decreto 1246/2015)."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 12: CIERRE, PROYECCIONES Y ESPACIO PARA EL TRIBUNAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_12",
      numero: 12,
      bloque: "CIERRE Y PROYECCIONES",
      esquema: "Proyecciones de Factibilidad y Apertura al Tribunal",
      badge: "Proyecto de TFG • Hipótesis Abierta",
      titulo: "Proyecciones de la Investigación, Valor Público y Cierre",
      subtitulo: "Aportes Esperados para el CURZAS-UNCo • Espacio de Intercambio con Cátedra y Tribunal",
      puntosClave: [
        "🎯 <strong>Hipótesis Abierta a Contrastación:</strong> La factibilidad del 360° dependerá de verificar empíricamente el consenso paritario, el deslinde del Art. 75 (Art. 76) y el anonimato técnico.",
        "🔬 <strong>Prudencia Epistemológica:</strong> Al ser un proyecto de investigación previo, el trabajo de campo en 2027 determinará los alcances y límites reales de viabilidad sin anticipar resultados.",
        "🏛️ <strong>Valor Público Esperado:</strong> Dotar al Departamento de Administración Pública de lineamientos situados propios para fortalecer la docencia presencial e híbrida en la Patagonia.",
        "💬 <strong>Espacio de Devolución:</strong> Quedo a entera disposición de la cátedra del SIA para recibir observaciones, sugerencias metodológicas y ajustes previos a la ejecución."
      ],
      metadatosFooter: "Cierre de Proyecto • Tiempo Total: 15:00 Minutos • Seminario de Integración y Aplicación",
      escena3D: "anim_25",
      guionOrador: "[Cierre en modo potencial - Prudencia epistemológica]\nPara cerrar la presentación sustantiva del proyecto, subrayo nuestra prudencia metodológica: no partimos de certezas cerradas ni damos por descontada la viabilidad del modelo 360 grados.\n\nSerá el trabajo de campo planificado para 2027 —con sus 9 entrevistas, 45 cuestionarios y análisis normativo documental— el que contraste en qué medida el deslinde del Artículo 75, la articulación al Artículo 76 y el resguardo técnico generan condiciones reales de viabilidad en el CURZAS.\n\n[Pausa de 2 segundos]\n\nDe verificarse estas condiciones, aspiramos a ofrecer al Departamento de Administración Pública lineamientos situados que enriquezcan la enseñanza en Viedma y en sus 10 Nodos Territoriales. Quedo a entera disposición del equipo docente para recibir sus aportes y sugerencias."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 13: DISEÑO DE INVESTIGACIÓN COMPLETO (INFORME FINAL PRESENTADO)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_13",
      numero: 13,
      bloque: "CIERRE Y ENTREGA FINAL",
      esquema: "Diseño de Investigación Completo (Estructura Informe Final)",
      badge: "Guía Oficial UNCo-CURZAS • Informe Final",
      titulo: "Diseño de Investigación Completo: Estructura del Informe Final",
      subtitulo: "Esquema Canónico de Cátedra (UNCo-CURZAS) — Integración Completa en el Documento Definitivo",
      puntosClave: [
        "🏛️ <strong>Preliminares (Carátula, Título y Área Temática):</strong> Universidad (UNCo-CURZAS), Carrera (Lic. Gestión RRHH / Adm. Pública), Asignatura (SIA), Docentes, Título descriptivo, Tesista, e-mail y Año 2026.",
        "🧭 <strong>1. Problema (1.1 a 1.4):</strong> Tema y contexto socioeconómico/histórico, formulación espacial-temporal (CURZAS 2027) con pregunta general, objetivos (general y específicos) y justificación.",
        "📚 <strong>2. Marco de Referencia (2.1 a 2.4):</strong> Marco teórico y esquema conceptual (Longo, De la Garza, Poligobernanza), Estado del Arte en 3 escalas, preguntas específicas e hipótesis / supuestos.",
        "🔬 <strong>3. Metodología (3.1 a 3.5):</strong> Tipo de estudio (mixto CUAL→cuan), técnicas e instrumentos (Anexos I–IV), población (N), muestra (n=9 / n=45), fuentes secundarias y análisis (Bardin / R / Denzin).",
        "📅 <strong>4. Bibliografía (APA) y 5. Cronograma:</strong> Referencias completas bajo Normas APA 7ª Ed. y plan de trabajo tentativo (articulado dentro del horizonte anual reglamentario en 6 fases)."
      ],
      metadatosFooter: "Planilla Oficial: Diseño de Investigación Completo 2025 • UNCo-CURZAS • Correspondencia 1:1 con TFG",
      escena3D: "anim_28",
      anexoInteractivo: {
        archivo: "Material Catedra/Diseño de Investigación completo 2025.pdf",
        titulo: "Planilla Oficial: Diseño de Investigación Completo 2025 (UNCo-CURZAS)",
        etiqueta: "📄 Ver Planilla Oficial (PDF)",
        atajo: "A"
      },
      guionOrador: "Antes de los agradecimientos finales, sintetizamos en este cierre cómo todo el contenido defendido queda ensamblado exactamente dentro de la estructura oficial del Diseño de Investigación Completo (UNCo-CURZAS).\n\nEn los Preliminares figuran Carátula reglamentaria, Título y Área Temática.\nLuego los cinco apartados canónicos que acabamos de desarrollar:\n1. Problema (1.1 contexto socioeconómico-institucional; 1.2 formulación espacio-temporal y pregunta general; 1.3 objetivos; 1.4 justificación).\n2. Marco de Referencia (2.1 marco teórico y esquema conceptual; 2.2 estado del arte; 2.3 preguntas derivadas; 2.4 supuestos).\n3. Metodología (3.1 tipo de estudio; 3.2 técnicas e instrumentos de Anexos I y II; 3.3 población y muestra n=9 / n=45; 3.4 fuentes secundarias normativas; 3.5 técnicas de análisis cuali-cuantitativo).\n\nSe completa con 4. Bibliografía en Normas APA y 5. Cronograma proyectado en fases dentro del plazo anual reglamentario. Pueden abrir la guía PDF oficial desde el botón adjunto o presionando la tecla A."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 14: AGRADECIMIENTOS INSTITUCIONALES Y HUMANOS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_14",
      numero: 14,
      bloque: "CIERRE Y RECONOCIMIENTO",
      esquema: "Agradecimientos",
      badge: "CURZAS • UNCo • Gratitud",
      titulo: "Agradecimientos",
      subtitulo: "Reconocimiento a Quienes Acompañaron la Construcción de este Proyecto",
      puntosClave: [
        "🎓 <strong>Cátedra SIA (UNCo-CURZAS):</strong> A la Dra. Deborah Noguera, el Esp. Federico Abeiro y la Esp. María Cecilia Aguirre por su guía metodológica y rigor crítico.",
        "🏛️ <strong>Comunidad CURZAS y Red Territorial:</strong> Al Departamento de Administración Pública, Sede Viedma y los 10 Nodos de Río Negro que inspiraron este estudio situado.",
        "🤝 <strong>Compañeros, Familia y Pares:</strong> Por el acompañamiento cotidiano, el diálogo académico y el sostén durante todo el trayecto de formación.",
        "⚖️ <strong>Honorable Tribunal Evaluador:</strong> Muchas gracias por su tiempo, lectura atenta y aportes para fortalecer la futura ejecución del Trabajo Final de Graduación."
      ],
      metadatosFooter: "Agradecimientos • Licenciatura en Gestión de Recursos Humanos (CCC) • CURZAS-UNCo",
      escena3D: "anim_26",
      guionOrador: "Antes de presentar las fuentes de respaldo, deseo expresar un sincero agradecimiento.\n\nEn primer lugar, al equipo docente del Seminario de Integración y Aplicación —Dra. Deborah Noguera, Esp. Federico Abeiro y Esp. María Cecilia Aguirre— por su acompañamiento exigente y constructivo durante todo el proceso.\n\nEn segundo término, al CURZAS y a la Universidad Nacional del Comahue, junto a quienes sostienen la educación superior pública tanto en Viedma como en cada uno de los 10 Nodos rionegrinos.\n\nFinalmente, a mi familia, compañeros de carrera y al Tribunal Evaluador por su escucha y valiosas devoluciones."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 15 (ÚLTIMA): SECCIÓN DE BIBLIOGRAFÍA Y MARCO NORMATIVO
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_15",
      numero: 15,
      bloque: "BIBLIOGRAFÍA",
      esquema: "Bibliografía y Marco Normativo (Sección Final)",
      badge: "Normas APA 7 • 33 Fuentes",
      titulo: "Bibliografía y Fuentes de Referencia",
      subtitulo: "Corpus Teórico, Metodológico, Jurídico e Institucional Citado en el Documento TFG",
      puntosClave: [
        "📚 <strong>Gestión Pública y Poligobernanza:</strong> Longo (2004/2006); Matus (1993); Oszlak (2020); Cao y Blutman (2021, 2023); Aguilar Villanueva (2006).",
        "🔄 <strong>Evaluación Docente y Modelo 360°:</strong> Chiavenato (2020); Lepsinger y Lucia (2009); Sifuentes Ocegueda et al. (2016); Obando Freire et al. (2014); Hernández-Villafaña y Luna Serrano (2023); Vázquez Cid de León et al. (2021); Marquina (2013).",
        "🔬 <strong>Epistemología, Metodología y Reflexividad:</strong> Wainerman y Sautu (2011); Sautu (2005); De la Garza Toledo (2001); Bourdieu (2003); Guber (2004); Hernández-Sampieri et al. (2014); Flyvbjerg (2005); Giménez (2012); Glaser y Strauss (1967); Denzin (1978); Bardin (2002); Torraco (2016); Jiménez Becerra (2008).",
        "📜 <strong>Marco Legal y Normativo UNCo:</strong> Ley N° 24.521; Ley N° 25.326; Decreto PEN N° 1246/2015 (CCT); Ord. CS N° 0988/2025 y 0910/1997; Res. CD-CURZA N° 196/2022 y N° 266/2023."
      ],
      metadatosFooter: "Sección de Bibliografía (Normas APA 7ª Ed.) • Trabajo Final de Graduación • CURZAS - UNCo",
      escena3D: "anim_27",
      abrirTabDrawer: "bibliografia",
      guionOrador: "Como cierre documental de esta presentación, ponemos a disposición las 33 referencias bibliográficas y normativas que sustentan íntegramente el documento del Proyecto de Trabajo Final de Graduación.\n\nEl corpus integra cuatro pilares verificables: gestión pública y poligobernanza (Longo, Matus, Oszlak, Aguilar Villanueva, Cao y Blutman); antecedentes empíricos 360 grados (Lepsinger y Lucia, Chiavenato, Sifuentes Ocegueda et al., Obando Freire et al., Hernández-Villafaña y Luna Serrano, Vázquez Cid de León et al., y Marquina); epistemología, metodología y reflexividad (De la Garza Toledo, Wainerman y Sautu, Bourdieu, Guber, Flyvbjerg, Giménez, Hernández-Sampieri et al., Bardin, Denzin y Glaser & Strauss); y la base jurídica vigente UNCo-CURZAS.\n\nTodas las citas completas en formato APA 7 pueden consultarse en detalle desde la pestaña Bibliografía del panel de Respaldo."
    }
  ]
};

// Exportación global para el navegador
if (typeof window !== "undefined") {
  window.PRESENTACION_DATA = PRESENTACION_DATA;
}
