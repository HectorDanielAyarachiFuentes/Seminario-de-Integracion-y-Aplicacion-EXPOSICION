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
  // LAS 15 FILMINAS ESTRATÉGICAS — ESTRUCTURA COHERENTE CON EL PROYECTO TFG
  // ═══════════════════════════════════════════════════════════════════════════
  slides: [
    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 1: APERTURA PROTOCOLAR (0:40 min)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_1",
      numero: 1,
      tiempoSugerido: "0:40 min",
      bloque: "APERTURA PROTOCOLAR",
      esquema: "Carátula y Encuadre de la Defensa (0:40)",
      badge: "UNCo • CURZAS • Mesa Final SIA",
      titulo: "Evaluación Docente y Factibilidad del Modelo 360°",
      subtitulo: "Dpto. de Administración Pública del CURZAS-UNCo • Proyecto 2027",
      puntosClave: [
        "🎓 <strong>Carrera:</strong> Lic. en Gestión de RR. HH. (CCC) — SIA 2026",
        "👤 <strong>Tesista:</strong> Tec. Sup. Héctor D. Ayarachi Fuentes (Leg. 8252)",
        "🏛️ <strong>Ámbito:</strong> Sede Viedma y 10 Nodos (Res. CD-CURZA 266/23)",
        "🧭 <strong>Recorrido:</strong> 1. Problematización • 2. Marco/Antecedentes • 3. Metodología"
      ],
      metadatosFooter: "Apertura • Defensa de Proyecto TFG • Res. CD-CURZA N° 266/23",
      escena3D: "anim_01",
      preziInline: {
        master: {
          eyebrow: "ANTEPROYECTO TFG • SIA 2026",
          title: "Evaluación Docente 360°",
          subtitle: "Factibilidad en el Dpto. de Administración Pública • CURZAS–UNCo (2027)",
          pills: [
            "Lic. en Gestión de RR.HH. (CCC) • Leg. 8252",
            "Sede Viedma + 10 Nodos Territoriales"
          ]
        },
        topics: [
          {
            id: "encuadre",
            kicker: "01 · ENCUADRE",
            title: "Identidad y Cátedra",
            meta: "4 ejes · Res. 266/23",
            theme: "apertura",
            subtopics: [
              {
                kicker: "TESISTA Y CARRERA",
                title: "RR.HH. (CCC) • Leg. 8252",
                lead: "Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes",
                detail: "Anteproyecto de Trabajo Final de Graduación del Ciclo de Complementación Curricular de la Licenciatura en Gestión de Recursos Humanos (SIA 2026), en Viedma, Río Negro.",
                tags: ["SIA 2026", "CURZAS–UNCo", "DNI 35.492.138", "Res. CD-CURZA 266/23"]
              },
              {
                kicker: "EQUIPO DE CÁTEDRA",
                title: "Tribunal y Cátedra SIA",
                lead: "Seminario de Integración y Aplicación (Defensa 15:00 min)",
                detail: "Presentación ante la Dra. Deborah Noguera (Docente Responsable) y los docentes de cátedra Esp. Federico Abeiro y Esp. María Cecilia Aguirre bajo modalidad virtual.",
                tags: ["Dra. Noguera", "Esp. Abeiro", "Esp. Aguirre", "3 Bloques / 15:00 min"]
              },
              {
                kicker: "RECORTE ESPACIAL",
                title: "Sede Viedma y 10 Nodos",
                lead: "Dpto. de Administración Pública (LAP y CCC LGRH)",
                detail: "Abarca la sede cabecera en Viedma y diez nodos territoriales con aulas híbridas en Río Negro (SAO, Sierra Grande, Conesa, Río Colorado y Línea Sur) bajo Res. CD-CURZA N° 196/2022.",
                tags: ["Viedma", "10 Nodos Híbridos", "Res. 196/2022", "SIED UNCo"],
                targetSlide: 1,
                targetLabel: "Ir a Filmina 2 (Territorio) ↗"
              },
              {
                kicker: "HORIZONTE 2027",
                title: "Proyecto Previo Situado",
                lead: "Prudencia epistemológica y contraste en campo",
                detail: "Diseño previo de investigación proyectado para mayo–noviembre de 2027. Las condiciones de factibilidad se enuncian como hipótesis de indagación abiertas a evidencia empírica.",
                tags: ["Campo 2027", "Mayo–Noviembre", "Sin presuponer viabilidad"]
              }
            ]
          },
          {
            id: "bloque1",
            kicker: "BLOQUE 1",
            title: "Problematización",
            meta: "F2–F4 · 3:40 min",
            theme: "bloque1",
            subtopics: [
              {
                kicker: "MARCO VIGENTE (F2)",
                title: "Ley 24.521, Estatuto y CCT",
                lead: "Qué ocurre hoy en las cátedras del Departamento",
                detail: "Rigen los informes anuales de cátedra con encuesta estudiantil (Art. 74 del Estatuto UNCo Ord. 0988/25 y Ord. 0910/97) y las evaluaciones cuatrienales (Art. 75), bajo tutela del CCT Dec. 1246/2015.",
                tags: ["Art. 74–75 Estatuto", "Ord. 0910/97", "CCT Dec. 1246/15"],
                targetSlide: 1,
                targetLabel: "Ir a Filmina 2 ↗"
              },
              {
                kicker: "TENSIÓN CENTRAL (F3)",
                title: "Permanencia vs. Formación",
                lead: "Art. 75 (control/vacancia) vs. Art. 76 (capacitación)",
                detail: "El problema radica en la primacía de circuitos sumativos de permanencia (pérdida de estabilidad tras dos evaluaciones negativas) frente al derecho y deber estatutario de capacitación continua (Art. 76).",
                tags: ["Art. 75 vs. Art. 76", "Sesgo sumativo", "Dilema institucional"],
                targetSlide: 2,
                targetLabel: "Ir a Filmina 3 ↗"
              },
              {
                kicker: "CONSISTENCIA (F4)",
                title: "Objetivo General y 5 EE.",
                lead: "Arquitectura de investigación y supuestos abiertos",
                detail: "Se indagan 5 dimensiones clave para valorar si es posible implementar devolución multiactoral desacoplada de sanciones punitivas y consensuada en ámbitos colegiados y paritarios.",
                tags: ["Wainerman y Sautu", "1 OG + 5 OE", "Recorte 2027"],
                targetSlide: 3,
                targetLabel: "Ir a Filmina 4 ↗"
              },
              {
                kicker: "5 DIMENSIONES",
                title: "Mapa Analítico 360°",
                lead: "Factibilidad integral (no meramente técnica)",
                detail: "1) Normativa; 2) Técnica e infraestructura (Moodle/SIU); 3) Organizacional; 4) Cultural docente y confianza; 5) Gobernanza multinivel y articulación gremial paritaria.",
                tags: ["Normativa", "Técnica", "Organizacional", "Cultural", "Gobernanza"],
                targetSlide: 3,
                targetLabel: "Ver Objetivos en F4 ↗"
              }
            ]
          },
          {
            id: "bloque2",
            kicker: "BLOQUE 2",
            title: "Marco y Conceptos",
            meta: "F5–F7 · 4:00 min",
            theme: "bloque2",
            subtopics: [
              {
                kicker: "ESTADO DEL ARTE (F5)",
                title: "Revisión en 3 Escalas",
                lead: "Búsqueda exploratoria preliminar (Dialnet, SciELO, Redalyc, EPAA, RDI)",
                detail: "Integra estudios internacionales (Obando Freire 2014; Sifuentes 2016; Hernández-Villafaña 2023 n=1.431; Vázquez Cid 2021), nacionales (Chiroleu 2002; Marquina 2013) y locales en CURZA (Cariaga 2019).",
                tags: ["Internacional", "Nacional Argentina", "Local CURZA (Cariaga)"],
                targetSlide: 4,
                targetLabel: "Ir a Filmina 5 ↗"
              },
              {
                kicker: "VACANCIA SITUADA (F5)",
                title: "Brecha en Redes Híbridas",
                lead: "Aporte del diagnóstico patagónico en UNCo",
                detail: "Los antecedentes verifican aceptación cuando la devolución es formativa (71,7% en UABC), pero no abordan cómo articular un modelo 360° en universidades nacionales con nodos híbridos dispersos.",
                tags: ["Vacancia preliminar", "SNRD/SEDICI en TFG", "Docencia híbrida"],
                targetSlide: 4,
                targetLabel: "Ver Vacancia en F5 ↗"
              },
              {
                kicker: "NÚCLEO FORMATIVO (F6)",
                title: "Longo, De la Garza y 360°",
                lead: "Configuración abierta y 4 miradas convergentes",
                detail: "Integra la gestión pública estratégica de rendimiento/desarrollo (Longo 2006), la teoría como configuración abierta (De la Garza 2001) y las 4 perspectivas 360° (Lepsinger y Lucia) vinculadas al Art. 76.",
                tags: ["Longo (2006)", "De la Garza (2001)", "4 Miradas Art. 76"],
                targetSlide: 5,
                targetLabel: "Ir a Filmina 6 ↗"
              },
              {
                kicker: "GOBERNANZA (F7)",
                title: "Matus, Oszlak y Poligobernanza",
                lead: "Viabilidad política en arenas de poder compartido",
                detail: "La viabilidad requiere negociación en cogobierno y paritarias (Matus 1993), capacidades digitales no punitivas en Estado plataforma (Oszlak 2020) y coordinación multinivel sede-nodos (Cao y Blutman 2023).",
                tags: ["Matus (PES)", "Oszlak (2020)", "Cao y Blutman (2023)"],
                targetSlide: 6,
                targetLabel: "Ir a Filmina 7 ↗"
              }
            ]
          },
          {
            id: "bloque3",
            kicker: "BLOQUE 3",
            title: "Metodología y Ética",
            meta: "F8–F11 · 4:50 min",
            theme: "bloque3",
            subtopics: [
              {
                kicker: "DISEÑO MIXTO (F8)",
                title: "Caso Único y Vigilancia",
                lead: "Descriptivo-exploratorio • Triangulación QUAN+QUAL",
                detail: "Articula corte cuantitativo y cualitativo (Hernández Sampieri) manteniendo vigilancia epistemológica (Bourdieu) y extrañamiento reflexivo (Guber) por la doble pertenencia del tesista al CURZAS.",
                tags: ["Caso único", "QUAN + QUAL", "Bourdieu y Guber"],
                targetSlide: 7,
                targetLabel: "Ir a Filmina 8 ↗"
              },
              {
                kicker: "MATRIZ 5×N (F9)",
                title: "Operacionalización Empírica",
                lead: "Traducción de las 5 dimensiones a indicadores verificables",
                detail: "Cada dimensión (Normativa, Técnica, Organizacional, Cultural y Gobernanza) se desagrega en variables observables e ítems cruzados en encuesta digital, guías de entrevista y grilla documental.",
                tags: ["5 Dimensiones", "Indicadores", "Fuentes Cruzadas"],
                targetSlide: 8,
                targetLabel: "Ir a Filmina 9 ↗"
              },
              {
                kicker: "TÉCNICAS DE CAMPO (F10)",
                title: "Sondeo, Entrevistas y Docs",
                lead: "Trabajo de campo estratificado (Viedma y 10 Nodos)",
                detail: "Sondeo digital censal (~45–60 casos entre docentes y estudiantes), ~10–15 entrevistas semiestructuradas intencionales (autoridades, gremio ADUNC, referentes de nodos) y análisis de contenido (Bardin).",
                tags: ["Censo digital", "~10–15 entrevistas", "Análisis Bardin"],
                targetSlide: 9,
                targetLabel: "Ir a Filmina 10 ↗"
              },
              {
                kicker: "BLINDAJE ÉTICO (F11)",
                title: "Ley 25.326 y Tutela CCT",
                lead: "Garantía técnica y normativa de no afectación laboral",
                detail: "Tokens disociados sin registro de IP ni correos en el sondeo (Ley 25.326), consentimiento informado, seudonimización de transcripciones y garantía paritaria de no injerencia sobre el Art. 75.",
                tags: ["Sin IP ni correo", "Ley 25.326", "Consentimiento", "CCT 1246/15"],
                targetSlide: 10,
                targetLabel: "Ir a Filmina 11 ↗"
              }
            ]
          },
          {
            id: "cierre",
            kicker: "CIERRE",
            title: "Proyección y Respaldo",
            meta: "F12–F15 · 1:50 min",
            theme: "cierre",
            subtopics: [
              {
                kicker: "TRANSFERENCIA (F12)",
                title: "Aporte Situado al Dpto.",
                lead: "Insumo diagnóstico para políticas de desarrollo docente",
                detail: "Generar evidencia local útil para comisiones académicas y paritarias del CURZAS-UNCo sobre condiciones reales de implementación formativa, evitando extrapolaciones mecánicas.",
                tags: ["Política formativa", "Diagnóstico CURZAS", "Art. 76"],
                targetSlide: 11,
                targetLabel: "Ir a Filmina 12 ↗"
              },
              {
                kicker: "LIMITACIONES (F13)",
                title: "Alcance y Resguardos",
                lead: "Lo que el proyecto evalúa y lo que no da por supuesto",
                detail: "El anteproyecto determina condiciones de factibilidad y tensiones previas; no ejecuta aún el sistema 360° ni infiere generalización estadística fuera del Departamento estudiado.",
                tags: ["Validez interna", "Saturación teórica", "Sin extrapolación"],
                targetSlide: 12,
                targetLabel: "Ir a Filmina 13 ↗"
              },
              {
                kicker: "SÍNTESIS FINAL (F14)",
                title: "Agradecimientos y Cierre",
                lead: "Institución, familia, cátedra y comunidad CURZAS",
                detail: "Cierre protocolar de los 15 minutos reglamentarios con espacio abierto para preguntas, intercambios metodológicos y devoluciones del tribunal evaluador.",
                tags: ["Agradecimientos", "15:00 exactos", "Espacio Tribunal"],
                targetSlide: 13,
                targetLabel: "Ir a Filmina 14 ↗"
              },
              {
                kicker: "BIBLIOGRAFÍA (F15)",
                title: "35 Fuentes Jerarquizadas",
                lead: "Normas APA 7 ordenadas por bloque e importancia",
                detail: "Corpus completo articulado con el TFG: normativa universitaria y paritaria, gestión pública y gobernanza, antecedentes empíricos de 3 escalas y bibliografía metodológica.",
                tags: ["35 Referencias APA 7", "Normativa + Teoría", "Panel Respaldo (M)"],
                targetSlide: 14,
                targetLabel: "Ir a Filmina 15 ↗"
              }
            ]
          }
        ]
      },
      guionOrador: "[Saludo y propósito • 0:40 min]\nBuenos días al equipo docente evaluador: Dra. Deborah Noguera, Esp. Federico Abeiro y Esp. María Cecilia Aguirre.\n\nDefiendo mi proyecto de investigación previo bajo Resolución 266/23 sobre la factibilidad de un modelo de retroalimentación docente 360° en el Departamento de Administración Pública del CURZAS para 2027.\n\n[Hoja de ruta]\nOrganizo la exposición en tres bloques: 1) qué problema indagamos; 2) con qué conceptos y antecedentes lo abordamos; y 3) cómo y con qué resguardos haremos el trabajo de campo en 15 minutos exactos."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // BLOQUE 1: PROBLEMATIZACIÓN (3:40 min — Filminas 2 a 4)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_2",
      numero: 2,
      tiempoSugerido: "1:10 min",
      bloque: "BLOQUE 1: PROBLEMATIZACIÓN",
      esquema: "Dónde, Qué se Hace y Normativa (1:10)",
      badge: "Bloque 1 • Recorte Territorial • Res. 196/22",
      titulo: "Ámbito de Estudio: Viedma y 10 Nodos Híbridos",
      subtitulo: "Dpto. de Administración Pública (LAP y CCC LGRH) • CURZAS-UNCo",
      puntosClave: [
        "🏛️ <strong>Sede Central:</strong> Viedma — conducción académica y cogobierno",
        "🌐 <strong>Red Territorial:</strong> 10 Nodos en Río Negro (Res. 196/2022)",
        "📜 <strong>Normativa Vigente:</strong> Ord. CS 0988/25 • Ord. 0910/97 • CCT Dec. 1246/15",
        "🧭 <strong>Supuesto Orientador:</strong> Predominio de control sumativo vs. devolución formativa"
      ],
      metadatosFooter: "Bloque 1 • Recorte Territorial, Normativa y Situación Inicial",
      escena3D: "anim_06",
      diagramaSVG: "assets/red_territorial.svg",
      anexoInteractivo: {
        titulo: "Anexo Interactivo — Maqueta 3D de Río Negro y 10 Nodos CURZAS",
        archivo: "assets/maqueta_rionegro_3d.html",
        etiqueta: "🗺️ Ver Anexo: Maqueta 3D Río Negro",
        atajo: "A"
      },
      guionOrador: "[Ubicación y sentido práctico • 1:10 min]\nEl estudio se realizará en el Departamento de Administración Pública del CURZAS, que integra la sede Viedma con diez Nodos en Río Negro bajo cursada híbrida (Resolución 196/2022).\n\n[Qué ocurre hoy]\nActualmente rigen los informes anuales de cátedra con encuesta estudiantil (Art. 74 del Estatuto) y las evaluaciones cuatrienales de permanencia (Art. 75), en el marco de la Ordenanza 0910/97 y el Convenio Colectivo 1246/15.\n\n[Por qué indagar esto]\nNuestro supuesto inicial plantea que estos dispositivos priorizan el control administrativo y dejan abierta la pregunta sobre si es viable incorporar retroalimentación formativa sin afectar derechos laborales."
    },

    {
      id: "slide_3",
      numero: 3,
      tiempoSugerido: "1:15 min",
      bloque: "BLOQUE 1: PROBLEMATIZACIÓN",
      esquema: "Tensión Art. 75 vs. 76 y Delimitación (1:15)",
      badge: "Bloque 1 • Tensión Estatutaria • 5 Dimensiones",
      titulo: "El Problema: Control de Permanencia vs. Capacitación",
      subtitulo: "Tensión Art. 75 vs. Art. 76 (Estatuto UNCo) • 5 Dimensiones de Factibilidad",
      puntosClave: [
        "⚖️ <strong>Tensión Central:</strong> Art. 75 (vacancia tras 2 negativas) vs. Art. 76 (capacitación)",
        "📍 <strong>Alcance 2027:</strong> Mayo a noviembre • Viedma y Nodos • Actores del Dpto.",
        "📐 <strong>5 Dimensiones:</strong> Normativa • Técnica • Organizacional • Cultural • Gobernanza",
        "🏛️ <strong>Sentido del Proyecto:</strong> Evitar diagnósticos sumativos y orientar la formación docente"
      ],
      metadatosFooter: "Bloque 1 • Problematización, Delimitaciones y Relevancia",
      escena3D: "anim_09",
      guionOrador: "[Desnaturalizar el problema • 1:15 min]\nSiguiendo a Wainerman y Sautu (2011), cuestionamos tratar la evaluación como un simple trámite administrativo.\n\n[La tensión que justifica el proyecto]\nPor un lado, el Art. 75 prevé la vacancia del cargo tras dos evaluaciones negativas, lo que explica la cautela docente. Por otro, el Art. 76 ordena planes anuales de capacitación continua que hoy carecen de insumos pedagógicos multiactorales.\n\n[Delimitación y sentido]\nDe mayo a noviembre de 2027 analizaremos cinco condiciones reales de factibilidad —normativa, técnica, organizacional, cultural y de gobernanza— para aportar al Departamento un diagnóstico útil y no una receta importada."
    },

    {
      id: "slide_4",
      numero: 4,
      tiempoSugerido: "1:15 min",
      bloque: "BLOQUE 1: PROBLEMATIZACIÓN",
      esquema: "Pregunta Rectora y 4 Objetivos (1:15)",
      badge: "Bloque 1 • Qué Vamos a Hacer • Tabla 1",
      titulo: "Pregunta de Investigación y Objetivos (2027)",
      subtitulo: "Consistencia entre Pregunta General, Objetivos Específicos y Diseño (Tabla 1)",
      puntosClave: [
        "❓ <strong>Pregunta:</strong> ¿Qué condiciones vuelven factible una retroalimentación 360° en 2027?",
        "🔍 <strong>OE1 — Diagnóstico Actual:</strong> Relevar normas estatutarias vs. prácticas vigentes",
        "🗣️ <strong>OE2 — Mirada Actoral:</strong> Explorar percepciones y confianza de docentes, alumnos y gestión",
        "🧭 <strong>OE3 y OE4 — Viabilidad y Aporte:</strong> Condicionantes (pares horizontales, ADUNC) y lineamientos"
      ],
      metadatosFooter: "Bloque 1 • Pregunta General, Objetivos y Matriz de Consistencia",
      escena3D: "anim_11",
      guionOrador: "[Pregunta y objetivo central • 1:15 min]\nToda la investigación responde a una pregunta concreta: ¿cuáles son las condiciones de factibilidad organizacional, técnica, normativa, cultural y de gobernanza para implementar una retroalimentación 360° en el Departamento en 2027?\n\n[Qué haremos paso a paso]\n1. Primero, relevar qué dicen las normas frente a cómo se evalúa hoy en la práctica.\n2. Segundo, escuchar qué perciben y temen docentes, estudiantes y autoridades.\n3. Tercero, identificar trabas técnicas y paritarias, incluyendo cómo resolver la coevaluación entre pares en cátedras unipersonales mediante pares horizontales por área.\n4. Cuarto, proponer lineamientos orientativos ajustados a los límites reales encontrados."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // BLOQUE 2: MARCO TEÓRICO, ANTECEDENTES Y CONCEPTUALIZACIONES (4:00 min)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_5",
      numero: 5,
      tiempoSugerido: "1:15 min",
      bloque: "BLOQUE 2: MARCO, ANTECEDENTES Y CONCEPTOS",
      esquema: "Lentes Aplicadas: Epistemología y Longo (1:15)",
      badge: "Bloque 2 • Conceptos Aplicados • Longo",
      titulo: "Conceptualizaciones Aplicadas: Gestión Pública del Rendimiento",
      subtitulo: "Configuración Abierta (De la Garza, 2001) y 5 Subsistemas de Longo (2006) en el CURZAS",
      puntosClave: [
        "🧩 <strong>Enfoque Abierto:</strong> Indagar posibilidades institucionales sin dogmas previos",
        "⚙️ <strong>Eje Rendimiento (Longo):</strong> De control burocrático a desarrollo docente (5 de 7 subsistemas)",
        "🔗 <strong>Articulación Práctica:</strong> Rendimiento + Capacitación Art. 76 + Aulas Híbridas",
        "🛡️ <strong>Resguardo Laboral:</strong> Gestión del Empleo (CCT) + Diálogo Paritario (ADUNC)"
      ],
      metadatosFooter: "Bloque 2 • Conceptualización Sistémica Aplicada al CURZAS",
      escena3D: "anim_12",
      diagramaSVG: "assets/Sistemas-longo.svg",
      guionOrador: "[Cómo aplicamos la teoría al caso • 1:15 min]\nNo usamos la teoría como dogma cerrado: con De la Garza Toledo (2001) reconstruimos qué margen real de viabilidad existe en la organización.\n\n[Para qué sirve Longo en este diseño]\nDel modelo de empleo público de Longo (2006) —que abarca siete subsistemas— operativizamos cinco interdependientes para analizar el CURZAS:\n- Rendimiento, orientado a la mejora pedagógica.\n- Desarrollo, conectado al Art. 76 del Estatuto.\n- Organización del trabajo, atento a las aulas híbridas.\n- Empleo y Relaciones Humanas, para cuidar la estabilidad del CCT y el clima paritario.\n\nEl sentido práctico es claro: evaluar sin ofrecer formación docente vacía de contenido al proceso."
    },

    {
      id: "slide_6",
      numero: 6,
      tiempoSugerido: "1:20 min",
      bloque: "BLOQUE 2: MARCO, ANTECEDENTES Y CONCEPTUALIZACIONES",
      esquema: "Dispositivo 360° y Poligobernanza (1:20)",
      badge: "Bloque 2 • Modelo 360° • 4 Planos",
      titulo: "Dispositivo 360° y Poligobernanza en Cuatro Planos",
      subtitulo: "4 Miradas Formativas • 4 Niveles de Decisión • Poder Compartido y Actores Situados",
      puntosClave: [
        "🔄 <strong>4 Miradas 360°:</strong> Autoevaluación • Pares Horizontales • Estudiantes • Dirección",
        "🗺️ <strong>4 Planos (Cao & Blutman):</strong> Macro (CS) • Meso (CURZAS) • Micro (Nodos) • ADUNC",
        "🤝 <strong>Viabilidad Política (Matus / Oszlak):</strong> Acuerdo paritario + Moodle/SIU sin tecno-vigilancia",
        "👥 <strong>Recorte Analítico:</strong> Actores situados (práctica real) frente a claustros formales"
      ],
      metadatosFooter: "Bloque 2 • Arquitectura 360° y Poligobernanza Universitaria",
      escena3D: "anim_15",
      diagramaSVG: "assets/modelo_360.svg",
      guionOrador: "[Qué dispositivo analizamos • 1:20 min]\nExploramos la factibilidad de articular cuatro miradas formativas: autoevaluación docente, coevaluación de pares —resolviendo cátedras unipersonales por tramo curricular—, heteroevaluación estudiantil y devolución departamental, mitigando sesgos de una sola fuente (Lepsinger y Lucia, 2009).\n\n[Por qué importa la poligobernanza]\nEn una universidad cogobernada nadie decide solo (Matus, 1993). Por eso examinamos cuatro planos (Cao y Blutman, 2023): Consejo Superior, Consejo Directivo CURZAS, Red de Nodos y mesa paritaria ADUNC.\n\n[Capacidades digitales]\nSiguiendo a Oszlak (2020), analizaremos si Moodle y SIU garantizan anonimato técnico real para los actores situados."
    },

    {
      id: "slide_7",
      numero: 7,
      tiempoSugerido: "1:25 min",
      bloque: "BLOQUE 2: MARCO, ANTECEDENTES Y CONCEPTUALIZACIONES",
      esquema: "Antecedentes Preliminares y Posible Vacancia (1:25)",
      badge: "Bloque 2 • Búsqueda Preliminar • 3 Escalas",
      titulo: "Antecedentes Preliminares y Posible Área de Vacancia",
      subtitulo: "Rastreo Exploratorio en Buscadores (Torraco, 2016) • Sin Cierre Prematuro",
      puntosClave: [
        "🔎 <strong>Qué y Dónde Buscamos:</strong> 5 descriptores (<em>evaluación 360°, formativa, carrera académica, híbrida, capacidades</em>) en Dialnet, SciELO, Redalyc, EPAA y RDI UNCo",
        "🌍 <strong>Internacional:</strong> Sifuentes (2016), Obando (2014), Hernández-Villafaña (2023, n=1.431), Vázquez (2021)",
        "🇦🇷 <strong>Nacional y Local:</strong> Chiroleu (2002) y Marquina (2013); Cariaga (2019, CURZA Pilquen) + normativa",
        "🧭 <strong>Vacancia Provisoria:</strong> Área posible en la intersección local; confirmación recién en TFG 2027"
      ],
      metadatosFooter: "Bloque 2 • Relevamiento Preliminar (Dialnet, SciELO, Redalyc, EPAA, RDI UNCo)",
      escena3D: "anim_17",
      guionOrador: "[Búsqueda preliminar y palabras clave • 1:25 min]\nSiguiendo a Torraco (2016), realizamos un rastreo preliminar con cinco palabras clave —'evaluación docente 360°', 'retroalimentación formativa universitaria', 'carrera académica', 'docencia híbrida' y 'capacidades estatales'— en Dialnet, SciELO, Redalyc, EPAA y el RDI UNCo, ampliable en 2027 a SNRD, Google Académico, SEDICI y RevEle.\n\n[1. Escala Internacional — México, Ecuador y Cuba]\nSifuentes (2016), Obando (2014), Hernández-Villafaña y Luna Serrano (2023, sobre 1.431 docentes) y Vázquez Cid de León (2021) muestran aceptación del 360° formativo y rechazo al uso salarial o punitivo.\n\n[2. Escala Nacional — Argentina]\nChiroleu (2002) y Marquina (2013) evidencian fragmentación y peso burocrático-sumativo, sin estudios 360° hallados hasta aquí en universidades nacionales.\n\n[3. Escala Regional y Local — UNCo / CURZAS]\nSeparando ciencia de normativa: Cariaga (2019, Revista Pilquen) entrevistó a 10 docentes del CURZA y reclamó políticas de desarrollo digital, mientras las ordenanzas vigentes (0988/25, 0910/97, Dec. 1246/15, Res. 196/22) no formalizan devoluciones confidenciales.\n\n[Prudencia epistemológica]\nNo damos por inexistente nada en lo local: postulamos una posible vacancia provisoria que recién confirmaremos al completar la revisión ampliada y el campo 2027."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // BLOQUE 3: METODOLOGÍA (4:50 min — Filminas 8 a 11)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_8",
      numero: 8,
      tiempoSugerido: "1:20 min",
      bloque: "BLOQUE 3: METODOLOGÍA",
      esquema: "Diseño Mixto, Población y Muestra (1:20)",
      badge: "Bloque 3 • CUAL→cuan • n=9 + n=45",
      titulo: "Diseño Metodológico, Población y Muestreo",
      subtitulo: "Estudio de Caso Transversal (2027) • Triangulación Documental, Entrevistas y Sondeo",
      puntosClave: [
        "🔬 <strong>Estrategia:</strong> Mixta CUAL → cuan (no experimental transversal • alcance propositivo)",
        "🏫 <strong>Población (N):</strong> ~38 docentes • ~130 estudiantes avanzados • 5 gestión / ADUNC",
        "🎤 <strong>Cualitativa (n = 9):</strong> 4 docentes • 2 autoridades • 1 ADUNC • 2 estudiantes (Sede y Nodos)",
        "📊 <strong>Sondeo (n = 45):</strong> 15 Form. A (15 ítems) + 30 Form. B (12 ítems) • Análisis Bardin / R"
      ],
      metadatosFooter: "Bloque 3 • Enfoque Mixto, Muestreo Intencional y Técnicas (Anexos I–II)",
      escena3D: "anim_19",
      guionOrador: "[Estrategia general • 1:20 min]\nEn 2027 ejecutaremos un estudio de caso no experimental, transversal y mixto de predominio cualitativo (CUAL → cuan; Hernández-Sampieri et al., 2014).\n\n[Población y cómo seleccionamos la muestra]\nSobre unos 38 docentes, 130 estudiantes avanzados y 5 actores de conducción y ADUNC:\n- Realizaremos 9 entrevistas semiestructuradas (Anexo I): 4 docentes bajo saturación teórica, 2 autoridades, 1 paritario de ADUNC y 2 estudiantes (uno de Viedma y uno de Nodos).\n- Sumaremos un sondeo exploratorio voluntario a 45 participantes (15 docentes con Formulario A y 30 estudiantes con Formulario B, excluyendo al grupo piloto) analizado con Bardin (2002), estadística descriptiva en R y triangulación."
    },

    {
      id: "slide_9",
      numero: 9,
      tiempoSugerido: "1:15 min",
      bloque: "BLOQUE 3: METODOLOGÍA",
      esquema: "Operacionalización en 5 Dimensiones (1:15)",
      badge: "Bloque 3 • Tabla 2 • Qué Medimos",
      titulo: "Matriz de Operacionalización en 5 Dimensiones",
      subtitulo: "De la Pregunta de Factibilidad a Indicadores Empíricos (Tabla 2)",
      puntosClave: [
        "⚖️ <strong>1. Normativa:</strong> Deslinde expreso del Art. 75 y ajuste al CCT 1246/15",
        "💻 <strong>2. Técnica:</strong> Moodle/SIU (<15 min) • tope ≤15 ítems • umbral n ≥ 5 cursos",
        "🏢 <strong>3. Organizacional:</strong> Flujo interno en Dpto. y devolución al Plan Art. 76",
        "🤝 <strong>4 y 5. Cultural y Gobernanza:</strong> Confianza en pares horizontales + acuerdo ADUNC"
      ],
      metadatosFooter: "Bloque 3 • Tabla 2: Operacionalización y Control Métrico (≤15 ítems)",
      escena3D: "anim_20",
      guionOrador: "[Cómo medimos la factibilidad • 1:15 min]\nPara no opinar en abstracto, la Tabla 2 desagrega la factibilidad en cinco dimensiones observables:\n\n1. Normativa: compatibilidad estatutaria y cláusula de destino puramente formativo.\n2. Técnica: usabilidad en Moodle/SIU en menos de 15 minutos, cuestionarios acotados anti-fatiga y umbral mínimo de 5 respuestas por curso para resguardar el anonimato futuro.\n3. Organizacional: si el Departamento puede transformar diagnósticos en capacitación del Art. 76.\n4. Cultural: confianza en autoevaluación, pares horizontales y criterio estudiantil.\n5. Gobernanza: viabilidad de aval en Consejo y concertación con ADUNC.\n\nEn el análisis cuantitativo recodificaremos los ítems invertidos excluyendo NS/NC."
    },

    {
      id: "slide_10",
      numero: 10,
      tiempoSugerido: "1:10 min",
      bloque: "BLOQUE 3: METODOLOGÍA",
      esquema: "Cronograma 2027 y Recursos (1:10)",
      badge: "Bloque 3 • May–Nov 2027 • $0 CURZAS",
      titulo: "Plan de Trabajo (7 Meses) y Viabilidad Operativa",
      subtitulo: "6 Fases Secuenciales (Tabla 3) • $0 Institucional / $160.000 ARS Autofinanciado (Tabla 4)",
      puntosClave: [
        "🗓️ <strong>Fases 1–3 (May–Jul 2027):</strong> Avales y piloto (2 doc. + 5 est.) • 9 entrevistas • sondeo n=45",
        "🗓️ <strong>Fases 4–6 (Ago–Nov 2027):</strong> Triangulación • redacción TFG • entrega por mesa de entradas",
        "💰 <strong>Presupuesto:</strong> $0 para el CURZAS • $160.000 ARS autofinanciados por el tesista",
        "🛠️ <strong>Soporte Técnico:</strong> Sondeo remoto en Nodos • software libre (Quarto, R, PSPP)"
      ],
      metadatosFooter: "Bloque 3 • Tablas 3 y 4: Ejecución 2027 y Recursos Propios",
      escena3D: "anim_21",
      guionOrador: "[Viabilidad operativa en 2027 • 1:10 min]\nEl proyecto es plenamente ejecutable en siete meses, de mayo a noviembre de 2027.\n\n[Las 6 fases]\nEn mayo tramitamos el aval institucional y calibramos el piloto con 2 docentes y 5 estudiantes; en junio realizamos el análisis documental y las 9 entrevistas; entre junio y julio aplicamos el sondeo digital en Viedma y los 10 Nodos contemplando el receso invernal; agosto queda para triangulación; septiembre y octubre para lineamientos y redacción; y noviembre para entrega formal por mesa de entradas.\n\n[Viabilidad económica real]\nNo irroga costo presupuestario al CURZAS: el gasto operativo estimado de $160.000 ARS es autofinanciado íntegramente por mí, apoyado en software libre y encuestas digitales remotas."
    },

    {
      id: "slide_11",
      numero: 11,
      tiempoSugerido: "1:05 min",
      bloque: "BLOQUE 3: METODOLOGÍA",
      esquema: "Reflexividad y Ética de Datos (1:05)",
      badge: "Bloque 3 • Ley 25.326 • Anexo IV",
      titulo: "Reflexividad del Tesista y Protocolo Ético",
      subtitulo: "Control de Doble Pertenencia Institucional y Resguardo Diferenciado de Identidad",
      puntosClave: [
        "🔍 <strong>Vigilancia Epistemológica:</strong> Control de sesgo y asimetría de rol (tesista alumno/egresado)",
        "🔐 <strong>Sondeo Anónimo (Ley 25.326):</strong> Tokens aleatorios sin registro de IP ni correos",
        "🛡️ <strong>Entrevistas Confidenciales:</strong> Seudonimia (DOC-01, GREM-01) y custodia cifrada",
        "📝 <strong>Garantías Formales:</strong> Consentimiento escrito (Anexo IV) y respeto al CCT 1246/15"
      ],
      metadatosFooter: "Bloque 3 • Protocolo Ético, Ley N° 25.326 y Anexos III–IV",
      escena3D: "anim_23",
      guionOrador: "[Por qué cuidar nuestro propio rol • 1:05 min]\nInvestigar la unidad académica donde curso y de la cual soy egresado técnico exige vigilancia epistemológica (Bourdieu, 2003; Guber, 2004) para evitar sesgos de complacencia o incomodidad por rol.\n\n[Protocolo ético en dos planos]\nEn terreno garantizamos consentimiento informado previo (Anexo IV) y cumplimiento de la Ley 25.326: el sondeo opera con anonimato técnico mediante tokens sin IP ni correos, y las entrevistas bajo confidencialidad y seudonimia.\n\nAsimismo, deslindamos las reglas de esta investigación respecto de un eventual sistema futuro, recomendando custodia neutral externa y bloqueo de reportes con menos de cinco respuestas."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // CIERRE: PROYECCIONES, DISEÑO FINAL, GRATITUD Y BIBLIOGRAFÍA (1:50 min)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_12",
      numero: 12,
      tiempoSugerido: "0:50 min",
      bloque: "CIERRE DE DEFENSA",
      esquema: "Sentido y Alcance Abierto (0:50)",
      badge: "Cierre • Proyecto TFG • Sin Anticipar Resultados",
      titulo: "Sentido del Proyecto y Alcance Abierto (2027)",
      subtitulo: "Hipótesis Abierta a Contrastación Empírica • Aporte Esperado al CURZAS",
      puntosClave: [
        "🎯 <strong>Sin Apriorismos:</strong> El trabajo de campo 2027 dirá qué es viable y qué no",
        "⚖️ <strong>Condiciones Críticas a Probar:</strong> Consenso ADUNC • deslinde Art. 75 • anonimato",
        "🏛️ <strong>Valor Público:</strong> Insumo situado para docencia presencial e híbrida en Patagonia",
        "💬 <strong>Devolución de Mesa:</strong> Apertura a sugerencias metodológicas del Tribunal"
      ],
      metadatosFooter: "Cierre • Síntesis Proyectiva y Apertura al Tribunal Evaluador",
      escena3D: "anim_25",
      guionOrador: "[Cierre objetivo • 0:50 min]\nEn síntesis, este proyecto no presupone que el modelo 360° sea automáticamente viable ni declara certezas antes de investigar.\n\nSu sentido concreto es someter a prueba empírica en 2027 —mediante 9 entrevistas, 45 cuestionarios y análisis documental— si existen condiciones reales de acuerdo paritario, resguardo técnico y articulación formativa con el Art. 76 en Viedma y los 10 Nodos.\n\n[Pausa de 2 segundos]\n\nEl resultado dotará al Departamento de criterios propios basados en evidencia local. Quedo atento a las observaciones del Tribunal."
    },

    {
      id: "slide_13",
      numero: 13,
      tiempoSugerido: "0:30 min",
      bloque: "CIERRE DE DEFENSA",
      esquema: "Correspondencia con Planilla Final (0:30)",
      badge: "Cierre • Guía Oficial UNCo-CURZAS",
      titulo: "Estructura Completa del Diseño de Investigación",
      subtitulo: "Correspondencia 1:1 entre el Documento Escrito y la Exposición",
      puntosClave: [
        "🏛️ <strong>Preliminares:</strong> Carátula, Título descriptivo y Área Temática",
        "🧭 <strong>Apartados 1 y 2:</strong> Problema (1.1–1.4) y Marco de Referencia / Estado del Arte (2.1–2.4)",
        "🔬 <strong>Apartado 3:</strong> Metodología completa (3.1–3.5) e Instrumentos (Anexos I–IV)",
        "📅 <strong>Apartados 4 y 5:</strong> Bibliografía APA (35 fuentes) y Cronograma anual en 6 fases"
      ],
      metadatosFooter: "Planilla Oficial: Diseño de Investigación Completo 2025 • UNCo-CURZAS",
      escena3D: "anim_28",
      anexoInteractivo: {
        archivo: "Material Catedra/Diseño de Investigación completo 2025.pdf",
        titulo: "Planilla Oficial: Diseño de Investigación Completo 2025 (UNCo-CURZAS)",
        etiqueta: "📄 Ver Planilla Oficial (PDF)",
        atajo: "A"
      },
      guionOrador: "[Validación estructural • 0:30 min]\nTodo el recorrido defendido responde íntegramente a la planilla oficial del Diseño de Investigación Completo del CURZAS: Carátula, 1. Problema, 2. Marco de Referencia, 3. Metodología con instrumentos ya redactados en Anexos I a IV, 4. Bibliografía APA y 5. Cronograma de siete meses."
    },

    {
      id: "slide_14",
      numero: 14,
      tiempoSugerido: "0:20 min",
      bloque: "CIERRE DE DEFENSA",
      esquema: "Agradecimientos (0:20)",
      badge: "CURZAS • UNCo • Gratitud",
      titulo: "Agradecimientos",
      subtitulo: "Reconocimiento Institucional y Humano",
      puntosClave: [
        "🎓 <strong>Cátedra SIA:</strong> Dra. Deborah Noguera • Esp. Federico Abeiro • Esp. María Cecilia Aguirre",
        "🏛️ <strong>CURZAS-UNCo:</strong> Dpto. de Administración Pública (Sede Viedma y 10 Nodos)",
        "🤝 <strong>Entorno:</strong> Familia, compañeros y pares de carrera",
        "⚖️ <strong>Tribunal Evaluador:</strong> Muchas gracias por su tiempo y devoluciones"
      ],
      metadatosFooter: "Agradecimientos • Lic. en Gestión de RR. HH. (CCC) • CURZAS-UNCo",
      escena3D: "anim_26",
      guionOrador: "[Gratitud final • 0:20 min]\nAgradezco sinceramente al equipo docente del SIA por su guía rigurosa durante todo el cursado, a la comunidad del CURZAS en Viedma y los 10 Nodos, a mi familia y compañeros, y a ustedes como Tribunal por su escucha."
    },

    {
      id: "slide_15",
      numero: 15,
      tiempoSugerido: "0:10 min",
      bloque: "CIERRE DE DEFENSA",
      esquema: "Bibliografía APA por Filminas y Jerarquía (0:10)",
      badge: "Normas APA 7 • 35 Fuentes del TP Final",
      titulo: "Bibliografía Completa del TP Final",
      subtitulo: "35 Fuentes Ordenadas por Secuencia de Exposición (F1–F11) y Jerarquía de Importancia",
      puntosClave: [
        "⚖️ <strong>F1–F4 • Bloque 1 (Normas y Problema):</strong> Ley 24.521 › Dec. 1246/15 › Ord. 0988/25 (Res. AU 0001/24) › Longo (2004/06) › Wainerman y Sautu (2011) › Sautu (2005) › Ord. 0910/97 › Res. 135 y 196/22 › Res. 266/23",
        "🧩 <strong>F5–F6 • Bloque 2a (Teoría, 360° y Gobernanza):</strong> De la Garza (2001) › Lepsinger y Lucia (2009) › Cao y Blutman (2023, 2021) › Matus (1993) › Oszlak (2020) › Chiavenato (2020) › Aguilar Villanueva (2006)",
        "🔎 <strong>F7 • Bloque 2b (Estado del Arte):</strong> Torraco (2016) › Jiménez Becerra (2008) › Hernández-Villafaña (2023) › Sifuentes (2016) › Vázquez Cid (2021) › Obando (2014) › Marquina (2013) › Chiroleu (2002) › Cariaga (2019)",
        "🔬 <strong>F8–F11 • Bloque 3 (Metodología y Ética):</strong> Hernández-Sampieri et al. (2014) › Flyvbjerg (2005) › Giménez (2012) › Glaser y Strauss (1967) › Bardin (2002) › Denzin (1978) › Bourdieu (2003) › Guber (2004) › Ley 25.326"
      ],
      metadatosFooter: "Bibliografía Completa Ordenada por Jerarquía y Filminas • Panel Respaldo (Tecla M)",
      escena3D: "anim_27",
      abrirTabDrawer: "bibliografia",
      guionOrador: "[Cierre de fuentes • 0:10 min]\nQuedan integradas todas las 35 referencias del Proyecto TFG final, organizadas en el orden de las filminas y jerarquizadas de mayor a menor peso teórico, normativo y metodológico. Pueden abrirlas en detalle desde Respaldo. Muchas gracias."
    }
  ]
};

// Exportación global para el navegador
if (typeof window !== "undefined") {
  window.PRESENTACION_DATA = PRESENTACION_DATA;
}
