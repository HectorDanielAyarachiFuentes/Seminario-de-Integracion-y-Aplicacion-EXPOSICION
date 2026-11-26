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
        autor: "Adriana Chiroleu (2002) & Mónica Marquina (2013)",
        concepto: "Estudios nacionales sobre la profesión académica argentina: advierten fragmentación institucional, desigualdades de permanencia y primacía burocrático-sumativa sobre los circuitos formativos colegiados."
      },
      {
        autor: "Romina Cariaga (2019)",
        concepto: "Antecedente empírico situado en el CURZA-UNCo (Revista Pilquen): mediante entrevistas etnográficas a 10 docentes locales analiza el rol universitario en entornos virtuales y concluye la necesidad de políticas institucionales de desarrollo profesional continuo."
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
      // ── APERTURA Y BLOQUE 1: PROBLEMATIZACIÓN, NORMATIVA Y CONSISTENCIA (F1–F4) ──
      {
        categoria: "1. Bloque 1 — Marco Normativo y Problematización (F1–F4)",
        filminas: "F1–F4",
        jerarquia: "Rector Legal",
        cita: "Ministerio de Educación. (1995). Ley N° 24.521 de Educación Superior. Boletín Oficial de la República Argentina."
      },
      {
        categoria: "1. Bloque 1 — Marco Normativo y Problematización (F1–F4)",
        filminas: "F2–F4, F11",
        jerarquia: "Rector Paritario",
        cita: "Poder Ejecutivo Nacional. (2015). Decreto N° 1246/2015: Convenio Colectivo de Trabajo para los Docentes de las Instituciones Universitarias Nacionales. Boletín Oficial."
      },
      {
        categoria: "1. Bloque 1 — Marco Normativo y Problematización (F1–F4)",
        filminas: "F2–F4",
        jerarquia: "Eje Estatutario",
        cita: "Universidad Nacional del Comahue. (2025). Ordenanza CS N° 0988/2025: Texto ordenado del Estatuto UNCo (reforma Res. AU N° 0001/2024; Título X, Arts. 64–78). Asamblea Universitaria."
      },
      {
        categoria: "1. Bloque 1 — Marco Normativo y Problematización (F1–F4)",
        filminas: "F2–F5",
        jerarquia: "Teoría Central",
        cita: "Longo, F. (2006). Mérito y flexibilidad: La gestión de las personas en las organizaciones del sector público [ed. orig. 2004]. Paidós."
      },
      {
        categoria: "1. Bloque 1 — Marco Normativo y Problematización (F1–F4)",
        filminas: "F3",
        jerarquia: "Problematización",
        cita: "Wainerman, C., y Sautu, R. (2011). La trastienda de la investigación (4.ª ed.). Manantial."
      },
      {
        categoria: "1. Bloque 1 — Marco Normativo y Problematización (F1–F4)",
        filminas: "F2, F4–F5",
        jerarquia: "Consistencia",
        cita: "Sautu, R. (2005). Todo es teoría: Objetivos y métodos de investigación. Lumiere."
      },
      {
        categoria: "1. Bloque 1 — Marco Normativo y Problematización (F1–F4)",
        filminas: "F2–F3",
        jerarquia: "Reglamentario",
        cita: "Universidad Nacional del Comahue. (1997). Ordenanza CS N° 0910/1997: Reglamento de Carrera Docente (texto ordenado a Ord. CS N° 0887/2021). Consejo Superior."
      },
      {
        categoria: "1. Bloque 1 — Marco Normativo y Problematización (F1–F4)",
        filminas: "F2, F6",
        jerarquia: "Territorial CURZAS",
        cita: "Consejo Directivo del CURZAS. (2022). Resolución CD N° 135/2022 y Resolución CD-CURZA N° 196/2022: Nodos Territoriales y Pautas de Docencia Híbrida (SIED UNCo)."
      },
      {
        categoria: "1. Bloque 1 — Marco Normativo y Problematización (F1–F4)",
        filminas: "F1, F10",
        jerarquia: "Reglamento TFG",
        cita: "Consejo Directivo del CURZAS. (2023). Resolución CD-CURZAS N° 266/2023: Reglamento de Trabajos Finales de Graduación del Departamento de Administración Pública."
      },

      // ── BLOQUE 2a: MARCO TEÓRICO, MODELO 360° Y POLIGOBERNANZA (F5–F6) ──
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F5–F6)",
        filminas: "F5",
        jerarquia: "Epistemología Rectora",
        cita: "De la Garza Toledo, E. (2001). La epistemología crítica y el concepto de configuración: Alternativas a la estructura y a la acción. En Los retos de las ciencias sociales en el siglo XXI (pp. 45–68). Plaza y Valdés."
      },
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F5–F6)",
        filminas: "F6",
        jerarquia: "Núcleo 360°",
        cita: "Lepsinger, R., y Lucia, A. D. (2009). The art and science of 360 degree feedback (2.ª ed.). Pfeiffer."
      },
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F5–F6)",
        filminas: "F6",
        jerarquia: "Poligobernanza Principal",
        cita: "Cao, H., y Blutman, G. (2023). Escenarios futuros para el Estado y la Administración Pública. Colección, 34(1), 143–176. https://doi.org/10.46553/colec.34.2023.p143-176"
      },
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F5–F6)",
        filminas: "F6",
        jerarquia: "Viabilidad Política",
        cita: "Matus, C. (1993). Política, planificación y gobierno. Fundación ALTADIR."
      },
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F5–F6)",
        filminas: "F2, F6",
        jerarquia: "Capacidades Digitales",
        cita: "Oszlak, O. (2020). El Estado en la era exponencial. Instituto Nacional de la Administración Pública (CLAD/INAP)."
      },
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F5–F6)",
        filminas: "F6",
        jerarquia: "Base Prospectiva",
        cita: "Cao, H., y Blutman, G. (2021). Escenarios prospectivos para el Estado y la administración pública argentina: El modelo de la poligobernanza y las transformaciones tecnológicas. Instituto Nacional de la Administración Pública (INAP)."
      },
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F5–F6)",
        filminas: "F6",
        jerarquia: "Enfoque Formativo",
        cita: "Chiavenato, I. (2020). Gestión del talento humano: El nuevo papel de los recursos humanos en las organizaciones (5.ª ed.). McGraw-Hill Interamericana."
      },
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F5–F6)",
        filminas: "F6",
        jerarquia: "Gobernanza Base",
        cita: "Aguilar Villanueva, L. F. (2006). Gobernanza y gestión pública. Fondo de Cultura Económica."
      },

      // ── BLOQUE 2b: ANTECEDENTES EMPÍRICOS Y ESTADO DEL ARTE EN 3 ESCALAS (F7) ──
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F7)",
        filminas: "F7",
        jerarquia: "Guía Revisión Rectora",
        cita: "Torraco, R. J. (2016). Writing integrative literature reviews: Using the past and present to explore the future. Human Resource Development Review, 15(4), 404–428. https://doi.org/10.1177/1534484316671606"
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F7)",
        filminas: "F7",
        jerarquia: "Guía Revisión",
        cita: "Jiménez Becerra, A. (2008). El estado del arte y la investigación de la investigación: Reflexiones metodológicas. En La práctica investigativa en ciencias sociales (pp. 27–42). UPN / CLACSO."
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F7)",
        filminas: "F7",
        jerarquia: "Int. Empírico (n=1.431)",
        cita: "Hernández-Villafaña, A. D., y Luna Serrano, E. (2023). Metaevaluación del sistema de evaluación docente en una universidad pública mexicana. Archivos Analíticos de Políticas Educativas, 31(11), 1–24. https://doi.org/10.14507/epaa.31.7501"
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F7)",
        filminas: "F7",
        jerarquia: "Int. Modelo 360°",
        cita: "Sifuentes Ocegueda, E., Suárez Flores, M., y Lara González, L. M. (2016). La evaluación de 360° aplicada al personal docente de nivel superior. Revista de Investigación en Tecnologías de la Información, 4(7), 17–23."
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F7)",
        filminas: "F7",
        jerarquia: "Int. Tutoría Híbrida",
        cita: "Vázquez Cid de León, C., Domínguez Herrera, J. E., Aguilar Cruz, C., Ramírez Castillo, E. A., y Vázquez Arango, M. de L. (2021). Evaluación 360° de las tutorías presenciales y en línea en universidades públicas. UNACIENCIA: Revista de Estudios e Investigaciones, 14(27), 103–120."
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F7)",
        filminas: "F7",
        jerarquia: "Int. Pedagógico",
        cita: "Obando Freire, F. X., López Fernández, R., Luna Álvarez, D., Luna Álvarez, E., Luna Álvarez, W., y Alpízar Fernández, R. (2014). Sistema de evaluación docente mediante el modelo 360 grados y el portafolio electrónico. Medisur, 12(2), 334–340."
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F7)",
        filminas: "F7",
        jerarquia: "Nacional Principal",
        cita: "Marquina, M. (2013). ¿Hay una profesión académica argentina? Avances y reflexiones sobre un objeto en construcción. Pensamiento Universitario, 15(15), 35–58."
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F7)",
        filminas: "F7",
        jerarquia: "Nacional Fundacional",
        cita: "Chiroleu, A. (2002). La profesión académica en Argentina. Espacios en Blanco. Serie Indagaciones, 12, 51–73."
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F7)",
        filminas: "F7",
        jerarquia: "Local CURZA-UNCo",
        cita: "Cariaga, R. (2019). El rol del docente universitario en las propuestas educativas virtualizadas. Revista Pilquen. Sección Psicopedagogía, 16(2), 14–28."
      },

      // ── BLOQUE 3: METODOLOGÍA, MUESTREO, ANÁLISIS Y RESGUARDO ÉTICO (F8–F11) ──
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F8–F11)",
        filminas: "F8–F10",
        jerarquia: "Diseño Mixto Rector",
        cita: "Hernández Sampieri, R., Fernández Collado, C., y Baptista Lucio, M. P. (2014). Metodología de la investigación (6.ª ed.). McGraw-Hill Interamericana."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F8–F11)",
        filminas: "F8",
        jerarquia: "Estudio de Caso",
        cita: "Flyvbjerg, B. (2005). Cinco malentendidos acerca de la investigación mediante los estudios de caso. Revista Española de Investigaciones Sociológicas, 106, 33–62."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F8–F11)",
        filminas: "F8",
        jerarquia: "Validación Caso",
        cita: "Giménez, G. (2012). El estatuto metodológico del estudio de caso en la investigación social. Cultura y Representaciones Sociales, 7(13), 33–52."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F8–F11)",
        filminas: "F8",
        jerarquia: "Saturación Cualitativa",
        cita: "Glaser, B. G., y Strauss, A. L. (1967). The discovery of grounded theory: Strategies for qualitative research. Aldine Publishing Company."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F8–F11)",
        filminas: "F8–F10",
        jerarquia: "Análisis Contenido",
        cita: "Bardin, L. (2002). Análisis de contenido. Akal."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F8–F11)",
        filminas: "F8, F10",
        jerarquia: "Triangulación",
        cita: "Denzin, N. K. (1978). The research act: A theoretical introduction to sociological methods (2.ª ed.). McGraw-Hill."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F8–F11)",
        filminas: "F11",
        jerarquia: "Vigilancia Reflexiva",
        cita: "Bourdieu, P. (2003). El oficio de científico: Ciencia de la ciencia y reflexividad. Anagrama."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F8–F11)",
        filminas: "F11",
        jerarquia: "Extrañamiento Campo",
        cita: "Guber, R. (2004). El salvaje metropolitano: Reconstrucción del conocimiento social en el trabajo de campo. Paidós."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F8–F11)",
        filminas: "F9, F11",
        jerarquia: "Tutela Legal Datos",
        cita: "Congreso de la Nación Argentina. (2000). Ley N° 25.326: Protección de los Datos Personales. Boletín Oficial de la República Argentina."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LAS 18 FILMINAS MINIMALISTAS — POCAS PALABRAS Y FOCO VISUAL CLARO
  // ═══════════════════════════════════════════════════════════════════════════
  slides: [
    // ─────────────────────────────────────────────────────────────────────────
    // APERTURA: CARÁTULA E ÍNDICE GENERAL (0:50 min — Filminas 1 y 2)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_1",
      numero: 1,
      esPortada: true,
      tiempoSugerido: "0:25 min",
      bloque: "APERTURA",
      esquema: "Carátula Oficial del Proyecto TFG (0:25)",
      badge: "Proyecto TFG • Res. 266/23",
      titulo: "Evaluación Docente y Factibilidad de un Modelo 360°",
      subtitulo: "Departamento de Administración Pública • CURZAS–UNCo (2027)",
      fichaPortada: [
        { etiqueta: "Tesista", valor: "Tec. Sup. Héctor D. Ayarachi Fuentes (Leg. 8252)" },
        { etiqueta: "Carrera", valor: "Lic. en Gestión de Recursos Humanos (CCC)" },
        { etiqueta: "Ámbito", valor: "Sede Viedma y 10 Nodos (Río Negro)" },
        { etiqueta: "Cátedra SIA", valor: "Dra. D. Noguera · Esp. F. Abeiro · Esp. M. C. Aguirre" }
      ],
      puntosClave: [],
      metadatosFooter: "Res. CD-CURZA N° 266/23 • SIA 2026",
      escena3D: "anim_01",
      guionOrador: "[Saludo y presentación • 0:25 min]\nBuenos días al equipo docente de la cátedra: Dra. Deborah Noguera, Esp. Federico Abeiro y Esp. María Cecilia Aguirre.\n\nPresento la defensa oral de mi Proyecto previo de Trabajo Final de Graduación (Res. CD-CURZA 266/23): un plan de investigación para ejecutar en 2027 que busca averiguar si es viable incorporar una evaluación docente de retroalimentación 360° con fines 100 % formativos en el Departamento de Administración Pública del CURZAS."
    },

    {
      id: "slide_2_indice",
      numero: 2,
      esIndice: true,
      tiempoSugerido: "0:25 min",
      bloque: "ÍNDICE GENERAL",
      esquema: "Hoja de Ruta en 3 Ejes (0:25)",
      badge: "15:00 min exactos",
      titulo: "Índice General",
      subtitulo: "Recorrido organizado en las tres secciones del proyecto",
      seccionesIndice: [
        {
          romano: "01",
          titulo: "El Problema",
          resumen: "Ubicación CURZAS • Situación actual y objeto • 5 Dimensiones y Objetivos",
          targetSlide: 2,
          tono: "b1"
        },
        {
          romano: "02",
          titulo: "Estado de la Cuestión y Marco Teórico",
          resumen: "Autores clave (Longo, 360°, Gobernanza) • Antecedentes en 3 escalas",
          targetSlide: 7,
          tono: "b2"
        },
        {
          romano: "03",
          titulo: "Metodología",
          resumen: "Diseño CUAL → cuan • Muestra (n=9 / n=45) • Cronograma y Ética",
          targetSlide: 10,
          tono: "b3"
        }
      ],
      puntosClave: [],
      metadatosFooter: "3 Secciones + Cierre y Bibliografía APA 7",
      escena3D: "anim_03",
      guionOrador: "[Hoja de ruta inicial • 0:25 min]\nPara ordenar los quince minutos de exposición, vamos a recorrer tres ejes:\n\n1. Primero, «El Problema»: qué es el CURZAS y dónde nos ubicamos, qué pasa hoy con la evaluación docente, cuál es nuestro objeto de estudio y qué nos proponemos medir.\n2. Segundo, «Estado de la Cuestión y Marco Teórico»: con qué conceptos y estudios previos respaldamos el diseño.\n3. Y tercero, «Metodología»: cómo haremos el trabajo de campo en 2027, con qué muestras, plazos y garantías éticas."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EJE 1: EL PROBLEMA (3:40 min — Filminas 3 a 7)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_eje1_territorio",
      numero: 3,
      tiempoSugerido: "0:40 min",
      bloque: "EJE 1 · EL PROBLEMA",
      esquema: "1.1 Ubicación Espacio-Temporal: El CURZAS (0:40)",
      badge: "Recorte Espacio-Temporal",
      titulo: "¿Dónde nos ubicamos? El CURZAS",
      subtitulo: "Complejo Universitario Regional Zona Atlántica y Sur (UNCo)",
      puntosClave: [
        "<strong>Sede Central:</strong> Viedma — cabecera académica y administrativa",
        "<strong>Despliegue territorial:</strong> Red de 10 Nodos Universitarios en Río Negro",
        "<strong>Horizonte temporal:</strong> Ciclo lectivo mayo–noviembre de 2027"
      ],
      metadatosFooter: "Eje 1 • Art. 17 Estatuto UNCo • Res. CD 135/22",
      escena3D: "anim_06",
      diagramaSVG: "assets/red_territorial.svg",
      anexoInteractivo: {
        titulo: "Maqueta 3D de Río Negro y los 10 Nodos del CURZAS",
        archivo: "assets/maqueta_rionegro_3d.html",
        etiqueta: "🗺️ Maqueta 3D Nodos",
        atajo: "A"
      },
      guionOrador: "[Ubicación espacio-temporal • 0:40 min]\nPrimero nos ubicamos en tiempo y espacio: el estudio se sitúa en el CURZAS de la Universidad Nacional del Comahue, con horizonte de ejecución entre mayo y noviembre de 2027.\n\nEl CURZAS no es un único edificio aislado: articula su Sede Central en Viedma con una Red Territorial de diez Nodos distribuidos en la Línea Sur, la Costa Atlántica y los Valles de Río Negro (Valcheta, Ramos Mexía, Sierra Colorada, Los Menucos, Maquinchao, Jacobacci, SAO, Sierra Grande, Conesa y Río Colorado)."
    },

    {
      id: "slide_eje1_ambito",
      numero: 4,
      tiempoSugerido: "0:45 min",
      bloque: "EJE 1 · EL PROBLEMA",
      esquema: "1.1 Unidad Académica y Modalidad Híbrida (0:45)",
      badge: "Recorte Institucional",
      titulo: "Departamento de Administración Pública",
      subtitulo: "Cómo funciona hoy la enseñanza donde investigamos",
      puntosClave: [
        "<strong>Carreras:</strong> Lic. en Administración Pública y CCC de Gestión de RR. HH.",
        "<strong>Modalidad real:</strong> Aulas presenciales + cursada híbrida en Nodos (Res. 196/22)",
        "<strong>Regulación actual:</strong> Estatuto UNCo (Ord. 0988/25), Ord. 0910/97 y CCT 1246/15"
      ],
      metadatosFooter: "Eje 1 • Res. CD-CURZA N° 196/2022",
      escena3D: "anim_07",
      guionOrador: "[Dónde se establece exactamente • 0:45 min]\nDentro del CURZAS recortamos el estudio en el Departamento de Administración Pública, donde se dictan la Licenciatura en Administración Pública y nuestro Ciclo de Complementación en Recursos Humanos.\n\nAquí el trabajo docente combina clases presenciales en Viedma con enseñanza híbrida y tutorías virtuales hacia los diez Nodos (Resolución 196/2022), regido por el Estatuto de la UNCo, la Ordenanza de Carrera Docente 0910/97 y el Convenio Colectivo 1246/15."
    },

    {
      id: "slide_eje1_problema",
      numero: 5,
      tiempoSugerido: "0:55 min",
      bloque: "EJE 1 · EL PROBLEMA",
      esquema: "1.2 Qué Ocurre Hoy y Objeto de Estudio (0:55)",
      badge: "Nudo Problemático",
      titulo: "El Problema",
      subtitulo: "Tensión entre control sumativo y formación + Objeto de estudio",
      puntosClave: [
        "<strong>Qué pasa hoy:</strong> Controles de permanencia (Art. 74 y Art. 75: 2 negativas = vacancia)",
        "<strong>La brecha:</strong> Prevención docente y falta de insumo formativo para el Art. 76",
        "<strong>Objeto de estudio:</strong> Factibilidad de un modelo 360° 100 % formativo y no punitivo"
      ],
      metadatosFooter: "Eje 1 • Art. 75 vs. Art. 76 (Estatuto UNCo)",
      escena3D: "anim_09",
      guionOrador: "[Qué ocurre hoy y cuál es el problema • 0:55 min]\nEl problema no es que falten normas: hoy funcionan los informes anuales con encuesta estudiantil (Art. 74) y la evaluación cada cuatro años (Art. 75).\n\nEl nudo está en que el Art. 75 inc. c declara vacante el cargo tras dos evaluaciones negativas seguidas. Eso instala una lógica de control sumativo que genera prevención lógica; mientras tanto, el Art. 76 prevé capacitación anual pero no recibe diagnósticos pedagógicos ricos que contemplen las aulas híbridas.\n\n[Objeto de estudio]\nPor eso nuestro objeto de estudio no es evaluar personas ni imponer una receta, sino analizar la factibilidad de implementar una retroalimentación 360° puramente formativa, desconectada por completo de sanciones o concursos."
    },

    {
      id: "slide_eje1_dimensiones",
      numero: 6,
      tiempoSugerido: "0:45 min",
      bloque: "EJE 1 · EL PROBLEMA",
      esquema: "1.3 Pregunta Central y 5 Dimensiones (0:45)",
      badge: "Factibilidad Integral",
      titulo: "Pregunta Central y 5 Dimensiones",
      subtitulo: "¿Qué condiciones reales hacen factible un modelo 360° en 2027?",
      puntosClave: [
        "<strong>1. Normativa:</strong> Compatibilidad con Estatuto y CCT (cero sanciones)",
        "<strong>2. Técnica:</strong> Moodle / SIU ágiles y con anonimato técnico real",
        "<strong>3. Organizacional:</strong> Enlace al Plan Art. 76 sin sobrecarga burocrática",
        "<strong>4 y 5. Cultural y Gobernanza:</strong> Confianza actoral + acuerdo con ADUNC"
      ],
      metadatosFooter: "Eje 1 • 5 Condiciones de Viabilidad",
      escena3D: "anim_10",
      guionOrador: "[Pregunta central y las 5 dimensiones • 0:45 min]\nDe allí nace nuestra pregunta central: ¿qué condiciones reales existen en 2027 en el Departamento para que un modelo 360° sea factible?\n\nEsa factibilidad la desagregamos en cinco dimensiones concretas:\n1. Normativa: que respete el Estatuto y el CCT garantizando cero sanciones.\n2. Técnica: que Moodle y SIU aseguren agilidad y anonimato real en Viedma y Nodos.\n3. Organizacional: que conecte resultados con la capacitación del Art. 76 sin burocracia pesada.\n4. Cultural: que exista confianza entre docentes y estudiantes.\n5. Gobernanza multinivel: que cuente con consenso en cogobierno y acuerdo paritario con ADUNC."
    },

    {
      id: "slide_eje1_objetivos",
      numero: 7,
      tiempoSugerido: "0:35 min",
      bloque: "EJE 1 · EL PROBLEMA",
      esquema: "1.3 Objetivo General y 4 Específicos (0:35)",
      badge: "Tabla 1 • Objetivos",
      titulo: "Objetivos del Proyecto",
      subtitulo: "Analizar la factibilidad en las cinco dimensiones (2027)",
      puntosClave: [
        "<strong>OE1 · Norma vs. Práctica:</strong> Relevar reglamentos, informes y encuestas SIU",
        "<strong>OE2 · Voces y Confianza:</strong> Explorar miradas de docentes, alumnos y gestión",
        "<strong>OE3 · Trabas y Pares:</strong> Indagar límites, ADUNC y pares horizontales",
        "<strong>OE4 · Lineamientos:</strong> Proponer pautas prudentes según el campo"
      ],
      metadatosFooter: "Eje 1 • Matriz de Consistencia",
      escena3D: "anim_11",
      guionOrador: "[Objetivos general y específicos • 0:35 min]\nPara responder esa pregunta, el Objetivo General analiza esas cinco dimensiones de factibilidad mediante cuatro objetivos específicos:\n1. Relevar normas, encuestas del SIU y capacitaciones actuales.\n2. Conocer qué piensan y qué necesitan docentes, estudiantes y autoridades para confiar.\n3. Detectar trabas técnicas, gremiales y cómo resolver cátedras de un solo docente mediante pares horizontales.\n4. Proponer lineamientos orientativos ajustados a lo que muestre el terreno."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EJE 2: ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO (4:00 min — Filminas 8 a 10)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_5",
      numero: 8,
      tiempoSugerido: "1:15 min",
      bloque: "EJE 2 · ESTADO Y MARCO TEÓRICO",
      esquema: "2.1 Epistemología y Subsistemas de Longo (1:15)",
      badge: "Marco Teórico",
      titulo: "Gestión Pública del Rendimiento",
      subtitulo: "De la Garza Toledo (2001) y Francisco Longo (2006)",
      puntosClave: [
        "<strong>Configuración abierta:</strong> Explorar lo viable sin conclusiones previas",
        "<strong>Rendimiento + Desarrollo:</strong> Evaluar solo sirve si nutre al Art. 76",
        "<strong>Empleo + Relaciones:</strong> Resguardo del CCT 1246/15 y diálogo sindical"
      ],
      metadatosFooter: "Eje 2 • 5 Subsistemas de Longo (2006)",
      escena3D: "anim_12",
      diagramaSVG: "assets/Sistemas-longo.svg",
      guionOrador: "[Autores centrales • 1:15 min]\nPasando al segundo eje, usamos la teoría como configuración abierta (De la Garza Toledo, 2001) para no forzar conclusiones previas.\n\nNuestra columna vertebral es Francisco Longo (2006), quien demuestra que evaluar el rendimiento falla si queda aislado: debemos conectarlo con capacitación del Art. 76 (desarrollo), aulas híbridas (organización), estabilidad estatutaria (empleo) y consenso paritario (relaciones humanas)."
    },

    {
      id: "slide_6",
      numero: 9,
      tiempoSugerido: "1:20 min",
      bloque: "EJE 2 · ESTADO Y MARCO TEÓRICO",
      esquema: "2.1 Modelo 360° y Poligobernanza (1:20)",
      badge: "Conceptos Clave",
      titulo: "Modelo 360° y Poligobernanza",
      subtitulo: "Cuatro miradas pedagógicas en cuatro planos de decisión",
      puntosClave: [
        "<strong>4 Miradas 360°:</strong> Autoevaluación • Pares • Estudiantes • Dirección",
        "<strong>4 Planos (Cao & Blutman):</strong> UNCo • CURZAS • 10 Nodos • ADUNC",
        "<strong>Consenso y TIC:</strong> Poder compartido (Matus) y anonimato digital (Oszlak)"
      ],
      metadatosFooter: "Eje 2 • Lepsinger & Lucia • Matus • Oszlak",
      escena3D: "anim_15",
      diagramaSVG: "assets/modelo_360.svg",
      guionOrador: "[360° y gobernanza universitaria • 1:20 min]\nCon Chiavenato y Lepsinger & Lucia planteamos triangular cuatro miradas formativas: autoevaluación, pares horizontales, estudiantes y dirección.\n\nY con Cao y Blutman, Matus y Oszlak ordenamos la universidad como arena de poder compartido en cuatro planos —UNCo, CURZAS, Nodos y ADUNC—, exigiendo herramientas digitales con anonimato real y cero tecno-vigilancia sobre los actores situados."
    },

    {
      id: "slide_7",
      numero: 10,
      tiempoSugerido: "1:25 min",
      bloque: "EJE 2 · ESTADO Y MARCO TEÓRICO",
      esquema: "2.2 Estado de la Cuestión en 3 Escalas (1:25)",
      badge: "Revisión Preliminar",
      titulo: "Estado de la Cuestión y Vacancia",
      subtitulo: "Búsqueda exploratoria con 5 descriptores (Torraco, 2016)",
      puntosClave: [
        "<strong>Internacional:</strong> 71,7 % valora fin formativo; rechazo al uso punitivo",
        "<strong>Nacional y Local:</strong> Peso sumativo (Marquina) y reto virtual (Cariaga, CURZA)",
        "<strong>Posible vacancia:</strong> Sin cruce previo entre 360°, cogobierno y 10 Nodos"
      ],
      metadatosFooter: "Eje 2 • Dialnet, SciELO, Redalyc, EPAA y RDI UNCo",
      escena3D: "anim_17",
      guionOrador: "[Antecedentes en 3 escalas • 1:25 min]\nEn el estado de la cuestión rastreamos cinco descriptores en Dialnet, SciELO, Redalyc, EPAA y RDI UNCo:\n- A escala internacional (Sifuentes, Obando, Vázquez Cid y Hernández-Villafaña sobre 1.431 docentes en México), el 360° corrige sesgos de la encuesta aislada y capta tutorías híbridas siempre que sea confidencial y no punitivo.\n- A escala nacional (Chiroleu, Marquina) y local en el propio CURZA (Cariaga, 2019 en Revista Pilquen), predomina el control sumativo y se reclaman políticas de apoyo virtual.\n\nCon prudencia, planteamos una posible vacancia en este cruce exacto, a verificar en la búsqueda ampliada de 2027."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EJE 3: METODOLOGÍA (4:40 min — Filminas 11 a 14)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_8",
      numero: 11,
      tiempoSugerido: "1:10 min",
      bloque: "EJE 3 · METODOLOGÍA",
      esquema: "3.1 Diseño Mixto, Población y Muestra (1:10)",
      badge: "Estrategia Empírica",
      titulo: "Diseño Mixto y Muestras (2027)",
      subtitulo: "Estudio de caso situado con predominio cualitativo (CUAL → cuan)",
      puntosClave: [
        "<strong>Población estimada:</strong> ~38 docentes • ~130 alumnos avanzados • 5 referentes",
        "<strong>Cualitativa (n = 9):</strong> 4 docentes, 2 autoridades, 1 ADUNC y 2 estudiantes",
        "<strong>Cuantitativa (n = 45):</strong> 15 docentes + 30 estudiantes (sin contar piloto)"
      ],
      metadatosFooter: "Eje 3 • Sampieri • Flyvbjerg • Saturación Teórica",
      escena3D: "anim_19",
      guionOrador: "[Diseño y muestras • 1:10 min]\nEn el tercer eje proponemos un estudio de caso único, transversal y mixto con predominio cualitativo (CUAL → cuan).\n\nSobre una población estimada de 38 docentes, 130 estudiantes avanzados y 5 referentes de gestión y gremio, realizaremos 9 entrevistas intencionales buscando saturación teórica y 45 cuestionarios voluntarios, dejando fuera de la muestra final a los participantes de la prueba piloto."
    },

    {
      id: "slide_9",
      numero: 12,
      tiempoSugerido: "1:15 min",
      bloque: "EJE 3 · METODOLOGÍA",
      esquema: "3.2 Herramientas y Análisis (1:15)",
      badge: "Anexos I y II • Tabla 2",
      titulo: "Instrumentos y Triangulación",
      subtitulo: "Recolección articulada sobre las 5 dimensiones",
      puntosClave: [
        "<strong>Análisis documental:</strong> Ordenanzas vs. formularios SIU y planes Art. 76",
        "<strong>Entrevistas (Anexo I):</strong> 3 guías procesadas por temas (Bardin, 2002)",
        "<strong>Sondeo breve (Anexo II):</strong> Likert ≤15 ítems en R/PSPP + Triangulación"
      ],
      metadatosFooter: "Eje 3 • Denzin (1978) • Bardin (2002)",
      escena3D: "anim_20",
      guionOrador: "[Herramientas y procesamiento • 1:15 min]\nYa dejamos diseñados en los Anexos los tres instrumentos sobre la Matriz de 5 Dimensiones:\n1. Análisis documental comparando normas con encuestas reales del SIU.\n2. Tres guías de entrevista semiestructurada (Anexo I) codificadas con Bardin.\n3. Dos formularios breves de menos de 15 ítems con ítems invertidos de control (Anexo II) procesados en R/PSPP, integrando todo por triangulación metodológica (Denzin)."
    },

    {
      id: "slide_10",
      numero: 13,
      tiempoSugerido: "1:10 min",
      bloque: "EJE 3 · METODOLOGÍA",
      esquema: "3.4 Plan de 7 Meses y Presupuesto (1:10)",
      badge: "Costo $0 CURZAS",
      titulo: "Cronograma (7 Meses) y Viabilidad",
      subtitulo: "Mayo a noviembre de 2027 • 100 % autofinanciado",
      puntosClave: [
        "<strong>May–Jul 2027:</strong> Aval (Anexo III), piloto, 9 entrevistas y sondeo digital",
        "<strong>Ago–Nov 2027:</strong> Triangulación, lineamientos y entrega por mesa de entradas",
        "<strong>Presupuesto propio:</strong> $160.000 ARS + software libre y relevamiento remoto"
      ],
      metadatosFooter: "Eje 3 • Tablas 3 y 4 (15–20 h/sem)",
      escena3D: "anim_21",
      guionOrador: "[Cronograma y recursos • 1:10 min]\nEl trabajo abarca siete meses en seis fases: mayo para avales y piloto; junio y julio para entrevistas y encuesta digital en Viedma y Nodos; agosto para procesamiento; y septiembre a noviembre para redacción y entrega formal.\n\nEs 100 % autofinanciado ($160.000 propios, software libre Quarto/R y videoconferencias con los Nodos sin gastos de traslado)."
    },

    {
      id: "slide_11",
      numero: 14,
      tiempoSugerido: "1:05 min",
      bloque: "EJE 3 · METODOLOGÍA",
      esquema: "3.3 Reflexividad y Resguardo Ético (1:05)",
      badge: "Ley 25.326 • Anexo IV",
      titulo: "Reflexividad y Blindaje Ético",
      subtitulo: "Control del doble rol y resguardo estricto de datos",
      puntosClave: [
        "<strong>Vigilancia reflexiva:</strong> Control por ser alumno y egresado del Departamento",
        "<strong>Anonimato vs. Confidencialidad:</strong> Tokens sin IP en encuesta y seudónimos",
        "<strong>Candados futuros:</strong> Custodia externa, umbral n ≥ 5 y cero impacto laboral"
      ],
      metadatosFooter: "Eje 3 • Bourdieu & Guber • CCT 1246/15",
      escena3D: "anim_23",
      guionOrador: "[Reflexividad y ética • 1:05 min]\nComo soy alumno del CCC y egresado técnico del lugar, aplico vigilancia epistemológica (Bourdieu y Guber): pautas centradas en reglas y no en personas, y contraste documental.\n\nBajo Ley 25.326 separamos el anonimato técnico del sondeo (tokens sin IP ni correo) de la confidencialidad con seudónimos en entrevistas (Anexo IV); y recomendamos custodia neutral y umbral mínimo de 5 respuestas para cualquier futuro 360°, sin tocar jamás legajos ni concursos."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // CIERRE Y RESPALDO (1:50 min — Filminas 15 a 18)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_12",
      numero: 15,
      tiempoSugerido: "0:50 min",
      bloque: "CIERRE",
      esquema: "Sentido y Límite del Proyecto (0:50)",
      badge: "Síntesis Final",
      titulo: "Sentido y Alcance del Proyecto",
      subtitulo: "Producir evidencia situada sin anticipar resultados",
      puntosClave: [
        "<strong>Prudencia metodológica:</strong> El anteproyecto indaga viabilidad, no impone el 360°",
        "<strong>Utilidad institucional:</strong> Insumo real para fortalecer la formación (Art. 76)",
        "<strong>Devolución del Tribunal:</strong> Abierto a sugerencias para el campo 2027"
      ],
      metadatosFooter: "Cierre • Defensa Oral SIA 2026",
      escena3D: "anim_25",
      guionOrador: "[Cierre sólido • 0:50 min]\nEn síntesis, este proyecto busca aportar evidencia empírica rigurosa para que el Departamento decida con fundamentos propios sobre su formación docente (Art. 76), reconociendo con prudencia que el anteproyecto no da por probada la viabilidad antes de ir al terreno en 2027.\n\n[Pausa de 2 segundos]\n\nQuedo a disposición del Tribunal."
    },

    {
      id: "slide_13",
      numero: 16,
      tiempoSugerido: "0:30 min",
      bloque: "CIERRE",
      esquema: "Correspondencia con Planilla Oficial (0:30)",
      badge: "Diseño UNCo–CURZAS",
      titulo: "Alineación con Planilla Oficial",
      subtitulo: "Correspondencia 1:1 entre escrito y defensa",
      puntosClave: [
        "<strong>Ejes 1 y 2:</strong> El Problema (1.1–1.4) • Estado y Marco Teórico (2.1–2.4)",
        "<strong>Eje 3:</strong> Metodología (3.1–3.5) e Instrumentos listos (Anexos I–IV)",
        "<strong>Soporte formal:</strong> 35 fuentes APA 7 y Cronograma en 6 fases"
      ],
      metadatosFooter: "Diseño de Investigación Completo 2025",
      escena3D: "anim_28",
      anexoInteractivo: {
        archivo: "Material Catedra/Diseño de Investigación completo 2025.pdf",
        titulo: "Planilla Oficial: Diseño de Investigación Completo 2025 (UNCo-CURZAS)",
        etiqueta: "📄 Planilla Oficial (PDF)",
        atajo: "A"
      },
      guionOrador: "[Validación formal • 0:30 min]\nEl escrito cumple íntegramente las pautas de la cátedra y la Resolución 266/23 en sus tres secciones troncales, anexos operativos y referencias."
    },

    {
      id: "slide_14",
      numero: 17,
      tiempoSugerido: "0:20 min",
      bloque: "CIERRE",
      esquema: "Agradecimientos (0:20)",
      badge: "Gratitud",
      titulo: "Muchas Gracias",
      subtitulo: "Reconocimiento institucional y humano",
      puntosClave: [
        "<strong>Cátedra SIA:</strong> Dra. Noguera • Esp. Abeiro • Esp. Aguirre",
        "<strong>CURZAS–UNCo:</strong> Dpto. de Administración Pública (Viedma y 10 Nodos)",
        "<strong>Familia y pares:</strong> Acompañamiento en toda la carrera"
      ],
      metadatosFooter: "Lic. en Gestión de RR. HH. (CCC) • CURZAS–UNCo",
      escena3D: "anim_26",
      guionOrador: "[Gratitud • 0:20 min]\nMuchas gracias al equipo docente de la cátedra por su guía durante el cursado, a nuestra comunidad del CURZAS en Viedma y los Nodos, a mi familia y compañeros."
    },

    {
      id: "slide_15",
      numero: 18,
      tiempoSugerido: "0:10 min",
      bloque: "CIERRE",
      esquema: "Bibliografía APA 7 (0:10)",
      badge: "35 Fuentes APA 7",
      titulo: "Respaldo Bibliográfico",
      subtitulo: "Referencias organizadas por eje y jerarquía",
      puntosClave: [
        "<strong>Eje 1 · Problema:</strong> Ley 24.521, Estatuto UNCo, CCT 1246/15, Wainerman y Sautu",
        "<strong>Eje 2 · Estado y Teoría:</strong> Longo, De la Garza, Cao y Blutman, Torraco, Cariaga",
        "<strong>Eje 3 · Metodología:</strong> Sampieri, Flyvbjerg, Bardin, Bourdieu, Ley 25.326"
      ],
      metadatosFooter: "Detalle completo en Panel Respaldo (Tecla M)",
      escena3D: "anim_27",
      abrirTabDrawer: "bibliografia",
      guionOrador: "[Fuentes • 0:10 min]\nLas 35 referencias APA 7 completas pueden consultarse desde el botón de Respaldo. Muchas gracias."
    }
  ]
};

// Exportación global para el navegador
if (typeof window !== "undefined") {
  window.PRESENTACION_DATA = PRESENTACION_DATA;
}
