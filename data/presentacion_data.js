/**
 * =============================================================================
 * METADATOS Y CONTENIDO DE LA PRESENTACIÓN FINAL — ANTEPROYECTO DE TFG (19 FILMINAS)
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
    legajo: "Legajo CURZA-8284 — DNI N° 35.492.138",
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
        texto: "Analizar en 2027 las condiciones de factibilidad organizacional, técnica, normativa, cultural y de gobernanza multinivel para una eventual implementación futura de un modelo de retroalimentación multiactoral (360°) en el Departamento de Administración Pública del CURZAS-UNCo."
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
        respuesta: "Como planteo a develar en el estudio, se contemplan dos resguardos necesarios: 1) Desacoplamiento Normativo del Art. 75 del Estatuto (permanencia) y vinculación al Art. 76 (capacitación continua); 2) Blindaje Técnico con anonimato estadístico auditado."
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

      // ── BLOQUE 2a: MARCO TEÓRICO, MODELO 360° Y POLIGOBERNANZA (F8–F10) ──
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F8–F10)",
        filminas: "F8",
        jerarquia: "Epistemología Rectora",
        cita: "De la Garza Toledo, E. (2001). La epistemología crítica y el concepto de configuración: Alternativas a la estructura y a la acción. En Los retos de las ciencias sociales en el siglo XXI (pp. 45–68). Plaza y Valdés."
      },
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F8–F10)",
        filminas: "F9",
        jerarquia: "Núcleo 360°",
        cita: "Lepsinger, R., y Lucia, A. D. (2009). The art and science of 360 degree feedback (2.ª ed.). Pfeiffer."
      },
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F8–F10)",
        filminas: "F10",
        jerarquia: "Poligobernanza Principal",
        cita: "Cao, H., y Blutman, G. (2023). Escenarios futuros para el Estado y la Administración Pública. Colección, 34(1), 143–176. https://doi.org/10.46553/colec.34.2023.p143-176"
      },
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F8–F10)",
        filminas: "F10",
        jerarquia: "Viabilidad Política",
        cita: "Matus, C. (1993). Política, planificación y gobierno. Fundación ALTADIR."
      },
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F8–F10)",
        filminas: "F4, F10",
        jerarquia: "Capacidades Digitales",
        cita: "Oszlak, O. (2020). El Estado en la era exponencial. Instituto Nacional de la Administración Pública (CLAD/INAP)."
      },
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F8–F10)",
        filminas: "F10",
        jerarquia: "Base Prospectiva",
        cita: "Cao, H., y Blutman, G. (2021). Escenarios prospectivos para el Estado y la administración pública argentina: El modelo de la poligobernanza y las transformaciones tecnológicas. Instituto Nacional de la Administración Pública (INAP)."
      },
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F8–F10)",
        filminas: "F9",
        jerarquia: "Enfoque Formativo",
        cita: "Chiavenato, I. (2020). Gestión del talento humano: El nuevo papel de los recursos humanos en las organizaciones (5.ª ed.). McGraw-Hill Interamericana."
      },
      {
        categoria: "2. Bloque 2a — Teoría, Modelo 360° y Poligobernanza (F8–F10)",
        filminas: "F10",
        jerarquia: "Gobernanza Base",
        cita: "Aguilar Villanueva, L. F. (2006). Gobernanza y gestión pública. Fondo de Cultura Económica."
      },

      // ── BLOQUE 2b: ANTECEDENTES EMPÍRICOS Y ESTADO DEL ARTE EN 3 ESCALAS (F11) ──
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F11)",
        filminas: "F11",
        jerarquia: "Guía Revisión Rectora",
        cita: "Torraco, R. J. (2016). Writing integrative literature reviews: Using the past and present to explore the future. Human Resource Development Review, 15(4), 404–428. https://doi.org/10.1177/1534484316671606"
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F11)",
        filminas: "F11",
        jerarquia: "Guía Revisión",
        cita: "Jiménez Becerra, A. (2008). El estado del arte y la investigación de la investigación: Reflexiones metodológicas. En La práctica investigativa en ciencias sociales (pp. 27–42). UPN / CLACSO."
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F11)",
        filminas: "F11",
        jerarquia: "Int. Empírico (n=1.431)",
        cita: "Hernández-Villafaña, A. D., y Luna Serrano, E. (2023). Metaevaluación del sistema de evaluación docente en una universidad pública mexicana. Archivos Analíticos de Políticas Educativas, 31(11), 1–24. https://doi.org/10.14507/epaa.31.7501"
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F11)",
        filminas: "F11",
        jerarquia: "Int. Modelo 360°",
        cita: "Sifuentes Ocegueda, E., Suárez Flores, M., y Lara González, L. M. (2016). La evaluación de 360° aplicada al personal docente de nivel superior. Revista de Investigación en Tecnologías de la Información, 4(7), 17–23."
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F11)",
        filminas: "F11",
        jerarquia: "Int. Tutoría Híbrida",
        cita: "Vázquez Cid de León, C., Domínguez Herrera, J. E., Aguilar Cruz, C., Ramírez Castillo, E. A., y Vázquez Arango, M. de L. (2021). Evaluación 360° de las tutorías presenciales y en línea en universidades públicas. UNACIENCIA: Revista de Estudios e Investigaciones, 14(27), 103–120."
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F11)",
        filminas: "F11",
        jerarquia: "Int. Pedagógico",
        cita: "Obando Freire, F. X., López Fernández, R., Luna Álvarez, D., Luna Álvarez, E., Luna Álvarez, W., y Alpízar Fernández, R. (2014). Sistema de evaluación docente mediante el modelo 360 grados y el portafolio electrónico. Medisur, 12(2), 334–340."
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F11)",
        filminas: "F11",
        jerarquia: "Nacional Principal",
        cita: "Marquina, M. (2013). ¿Hay una profesión académica argentina? Avances y reflexiones sobre un objeto en construcción. Pensamiento Universitario, 15(15), 35–58."
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F11)",
        filminas: "F11",
        jerarquia: "Nacional Fundacional",
        cita: "Chiroleu, A. (2002). La profesión académica en Argentina. Espacios en Blanco. Serie Indagaciones, 12, 51–73."
      },
      {
        categoria: "3. Bloque 2b — Antecedentes y Estado del Arte (F11)",
        filminas: "F11",
        jerarquia: "Local CURZA-UNCo",
        cita: "Cariaga, R. (2019). El rol del docente universitario en las propuestas educativas virtualizadas. Revista Pilquen. Sección Psicopedagogía, 16(2), 14–28."
      },

      // ── BLOQUE 3: METODOLOGÍA, MUESTREO, ANÁLISIS Y RESGUARDO ÉTICO (F12–F15) ──
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F12–F15)",
        filminas: "F12–F14",
        jerarquia: "Diseño Mixto Rector",
        cita: "Hernández Sampieri, R., Fernández Collado, C., y Baptista Lucio, M. P. (2014). Metodología de la investigación (6.ª ed.). McGraw-Hill Interamericana."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F12–F15)",
        filminas: "F12",
        jerarquia: "Estudio de Caso",
        cita: "Flyvbjerg, B. (2005). Cinco malentendidos acerca de la investigación mediante los estudios de caso. Revista Española de Investigaciones Sociológicas, 106, 33–62."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F12–F15)",
        filminas: "F12",
        jerarquia: "Validación Caso",
        cita: "Giménez, G. (2012). El estatuto metodológico del estudio de caso en la investigación social. Cultura y Representaciones Sociales, 7(13), 33–52."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F12–F15)",
        filminas: "F12",
        jerarquia: "Saturación Cualitativa",
        cita: "Glaser, B. G., y Strauss, A. L. (1967). The discovery of grounded theory: Strategies for qualitative research. Aldine Publishing Company."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F12–F15)",
        filminas: "F12–F14",
        jerarquia: "Análisis Contenido",
        cita: "Bardin, L. (2002). Análisis de contenido. Akal."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F12–F15)",
        filminas: "F12, F13",
        jerarquia: "Triangulación",
        cita: "Denzin, N. K. (1978). The research act: A theoretical introduction to sociological methods (2.ª ed.). McGraw-Hill."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F12–F15)",
        filminas: "F15",
        jerarquia: "Vigilancia Reflexiva",
        cita: "Bourdieu, P. (2003). El oficio de científico: Ciencia de la ciencia y reflexividad. Anagrama."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F12–F15)",
        filminas: "F15",
        jerarquia: "Extrañamiento Campo",
        cita: "Guber, R. (2004). El salvaje metropolitano: Reconstrucción del conocimiento social en el trabajo de campo. Paidós."
      },
      {
        categoria: "4. Bloque 3 — Metodología, Muestreo y Resguardo Ético (F12–F15)",
        filminas: "F13, F15",
        jerarquia: "Tutela Legal Datos",
        cita: "Congreso de la Nación Argentina. (2000). Ley N° 25.326: Protección de los Datos Personales. Boletín Oficial de la República Argentina."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LAS 19 FILMINAS MINIMALISTAS — EN POTENCIAL Y LENGUAJE DOCENTE CLARO
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
      esquema: "Carátula del Anteproyecto TFG (0:25)",
      badge: "Proyecto Previo TFG • Res. 266/23",
      titulo: "Evaluación Docente y Factibilidad de un Modelo 360°",
      subtitulo: "Plan de investigación (2027) • Dpto. de Administración Pública • CURZAS–UNCo",
      fichaPortada: [
        { etiqueta: "Tesista", valor: "Tec. Sup. Héctor D. Ayarachi Fuentes (Leg. CURZA-8284)" },
        { etiqueta: "Carrera", valor: "Lic. en Gestión de Recursos Humanos (CCC)" },
        { etiqueta: "Ámbito", valor: "Sede Viedma y 10 Nodos (Río Negro)" },
        { etiqueta: "Cátedra SIA", valor: "Dra. D. Noguera · Esp. F. Abeiro · Esp. M. C. Aguirre" }
      ],
      puntosClave: [],
      metadatosFooter: "Res. CD-CURZA N° 266/23 • SIA 2026 • Estudio previsto 2027",
      escena3D: "anim_01",
      guionOrador: "[Saludo y aclaración inicial • 0:25 min]\nBuenos días al equipo docente de la cátedra: Dra. Deborah Noguera, Esp. Federico Abeiro y Esp. María Cecilia Aguirre.\n\nLo que presento hoy es un proyecto previo de Trabajo Final de Graduación (Res. CD-CURZA 266/23) pensado para investigar en 2027. Como es un estudio todavía por hacer, hablaré siempre en potencial: nuestra intención es averiguar si sería viable pensar a futuro —para años posteriores— en una evaluación docente «360°» (reunir distintas miradas solo para acompañar y mejorar las clases) en el Departamento de Administración Pública del CURZAS."
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
          resumen: "Dónde queda y qué pasa hoy • Qué nos preguntamos • Objetivos",
          targetSlide: 2,
          tono: "b1"
        },
        {
          romano: "02",
          titulo: "Estado de la Cuestión y Marco Teórico",
          resumen: "De la Garza • Longo • Poligobernanza (Cao y Blutman / Oszlak) • Estado del Arte",
          targetSlide: 7,
          tono: "b2"
        },
        {
          romano: "03",
          titulo: "Metodología",
          resumen: "Cómo investigaríamos en 2027 • Muestras • Tiempos y cuidado de datos",
          targetSlide: 11,
          tono: "b3"
        }
      ],
      puntosClave: [],
      metadatosFooter: "3 Secciones + Cierre y Referencias APA 7",
      escena3D: "anim_03",
      guionOrador: "[Hoja de ruta inicial • 0:25 min]\nPara ordenar los quince minutos de charla, vamos a recorrer tres grandes partes:\n\n1. Primero, «El Problema»: ubicarnos en tiempo y espacio en el CURZAS, revisar qué planteo nos lleva a indagar la evaluación actual y contar qué querríamos averiguar.\n2. Segundo, «Estado de la Cuestión y Marco Teórico»: explicar en lenguaje sencillo qué ideas y experiencias previas nos sirven de guía.\n3. Y tercero, «Metodología»: contar cómo llevaríamos adelante el trabajo de campo en 2027, cuidando siempre la privacidad y el respeto hacia quienes participen."
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
      badge: "Paso 1 • Espacio y Tiempo",
      titulo: "El CURZAS en el Territorio (2027)",
      subtitulo: "Dónde y cuándo realizaríamos la investigación",
      puntosClave: [
        "<strong>¿Qué es el CURZAS?</strong> Complejo Universitario Regional de la UNCo (Art. 17)",
        "<strong>¿Dónde funciona?</strong> Sede Central en Viedma + 10 Nodos en Río Negro",
        "<strong>¿Cuándo iríamos al campo?</strong> Trabajo previsto de mayo a noviembre de 2027"
      ],
      metadatosFooter: "Eje 1 • Ordenanza CS N° 0988/25 • Res. CD N° 135/22",
      escena3D: "anim_06",
      diagramaSVG: "assets/red_territorial.svg",
      anexoInteractivo: {
        titulo: "Maqueta 3D de Río Negro y los 10 Nodos del CURZAS",
        archivo: "assets/maqueta_rionegro_3d.html",
        etiqueta: "🗺️ Maqueta 3D Nodos",
        atajo: "A"
      },
      guionOrador: "[Ubicación espacio-temporal • 0:40 min]\nArrancamos ubicándonos en tiempo y espacio: el trabajo de campo se realizaría entre mayo y noviembre de 2027 dentro del CURZAS de la Universidad Nacional del Comahue.\n\nComo se ve en el mapa, el CURZAS no es solo un edificio en Viedma: también llega de manera presencial y virtual a diez localidades o Nodos distribuidos en la Línea Sur, la Costa Atlántica y los Valles de Río Negro."
    },

    {
      id: "slide_eje1_ambito",
      numero: 4,
      tiempoSugerido: "0:45 min",
      bloque: "EJE 1 · EL PROBLEMA",
      esquema: "1.1 Unidad Académica y Práctica Híbrida (0:45)",
      badge: "Paso 2 • Dónde Miramos",
      titulo: "Departamento de Administración Pública",
      subtitulo: "El espacio concreto donde observaríamos la docencia actual",
      puntosClave: [
        "<strong>Dónde enfocamos:</strong> Carreras de Administración Pública y Lic. en RR. HH.",
        "<strong>Doble modalidad:</strong> Clases en aula de Viedma + aulas virtuales hacia 10 Nodos",
        "<strong>Reglas vigentes:</strong> Estatuto UNCo, Ord. 0910/97 y Convenio Colectivo 1246/15"
      ],
      metadatosFooter: "Eje 1 • Docencia Híbrida (Res. CD-CURZA N° 196/22)",
      escena3D: "anim_07",
      guionOrador: "[Dónde se ubica dentro del CURZAS • 0:45 min]\nDentro del CURZAS elegimos trabajar específicamente con el Departamento de Administración Pública, donde se cursan la Licenciatura en Administración Pública y el CCC de Recursos Humanos.\n\nLo interesante de este espacio —como ilustra la escena— es que muchos docentes dan clase a la vez para quienes están en Viedma y para estudiantes conectados desde los diez Nodos (Res. 196/2022), siempre bajo el Estatuto de la UNCo, el Reglamento de Carrera Docente y el Convenio Colectivo de Trabajo."
    },

    {
      id: "slide_eje1_problema",
      numero: 5,
      tiempoSugerido: "0:55 min",
      bloque: "EJE 1 · EL PROBLEMA",
      esquema: "1.2 El Problema y Objeto de Estudio (0:55)",
      badge: "Paso 3 • Planteo y Objeto",
      titulo: "El Problema y Objeto a Indagar",
      subtitulo: "De la evaluación pensada como control a una posible mirada formativa",
      puntosClave: [
        "<strong>Reglas actuales:</strong> Informe anual (Art. 74) y evaluación cuatrienal (Art. 75: riesgo cargo)",
        "<strong>Planteo a develar:</strong> ¿Genera cautela este control y falta guía para el Art. 76?",
        "<strong>Objeto de estudio:</strong> Analizar en 2027 si un 360° serviría a futuro, solo para mejorar"
      ],
      metadatosFooter: "Eje 1 • Tensión Art. 75 vs. Art. 76 • Planteo a develar",
      escena3D: "anim_09",
      guionOrador: "[Qué pasa hoy y planteo a develar • 0:55 min]\n¿Cuál es la inquietud que da origen a este estudio? En las normas vigentes existen dos instancias: el informe anual con encuesta estudiantil (Art. 74) y la evaluación cada cuatro años (Art. 75), donde dos resultados negativos seguidos pueden dejar vacante un cargo.\n\nComo simboliza la figura de la izquierda, aparece aquí un planteo a develar en 2027: cuando evaluar se asocia a aprobar o perder el cargo, eso podría generar cautela en el docente; además, querríamos conocer si el programa anual de capacitación (Art. 76) recibe hoy devoluciones claras sobre lo que pasa en las aulas presenciales y virtuales.\n\n[Objeto de estudio]\nPor eso nuestro objeto de estudio —representado en el círculo de la derecha— sería investigar en 2027 si resultaría viable pensar, para años posteriores, en una evaluación «360°» (juntando la mirada del propio docente, sus colegas, estudiantes y dirección) pensada únicamente para ayudar a mejorar las clases y planificar capacitaciones, totalmente separada de sanciones o legajos."
    },

    {
      id: "slide_eje1_dimensiones",
      numero: 6,
      tiempoSugerido: "0:40 min",
      bloque: "EJE 1 · EL PROBLEMA",
      esquema: "1.3 Pregunta Central y 5 Dimensiones (0:40)",
      badge: "Paso 4 • Factibilidad",
      titulo: "Pregunta Central y 5 Dimensiones",
      subtitulo: "¿Qué tendría que darse para que este modelo sirviera en años posteriores?",
      puntosClave: [
        "<strong>1. Reglas y leyes:</strong> Que encaje con Estatuto y Convenio sin tocar estabilidad",
        "<strong>2. Herramientas:</strong> Que Moodle / SIU permitan encuestas breves y 100 % anónimas",
        "<strong>3. Organización:</strong> Que sirva para armar cursos del Art. 76 sin sumar papeleo",
        "<strong>4 y 5. Clima y Acuerdos:</strong> Confianza entre pares + acuerdo en cogobierno y ADUNC"
      ],
      metadatosFooter: "Eje 1 • Estudio en 2027 para evaluar viabilidad futura",
      escena3D: "anim_10",
      guionOrador: "[Pregunta central y 5 dimensiones • 0:40 min]\nDe esa inquietud nace nuestra pregunta central. Aclaro algo fundamental: en 2027 no vamos a implementar el modelo, sino a investigarlo. Lo que queremos averiguar ese año es si estarían dadas las condiciones reales en el Departamento para que una propuesta así sirva y pueda aplicarse en años posteriores.\n\nLo analizaríamos desde cinco costados concretos:\n1) Reglas y normas: si sería compatible con el Estatuto y el Convenio Colectivo sin riesgo sancionatorio;\n2) Lo técnico: si Moodle o el SIU permitirían encuestas muy cortas, fáciles de usar en los Nodos y totalmente anónimas;\n3) La organización diaria: si ayudaría a diseñar capacitaciones del Art. 76 sin recargar de tareas;\n4) El clima humano: si habría confianza real entre docentes, alumnos y directivos;\n5) Los acuerdos políticos: si tendría consenso en los órganos de cogobierno y con el gremio ADUNC."
    },

    {
      id: "slide_eje1_objetivos",
      numero: 7,
      tiempoSugerido: "0:40 min",
      bloque: "EJE 1 · EL PROBLEMA",
      esquema: "1.3 Objetivo General vs. Específicos (0:40)",
      badge: "Tabla 1 • Dos Niveles de Metas",
      titulo: "Objetivo General y Específicos",
      subtitulo: "Qué estudiaríamos en 2027 para proyectar si serviría a futuro (Tabla 1)",
      objetivoGeneral: "Analizar en 2027 las condiciones reales (legales, técnicas, organizativas, culturales y de acuerdos) para saber si sería factible una evaluación 360° aplicable en años posteriores.",
      etiquetaEspecificos: "Objetivos Específicos (Pasos del estudio en 2027)",
      puntosClave: [
        "<strong>OE1 · Reglas vs. práctica:</strong> Revisar qué dicen las normas y cómo se evalúa hoy en el SIU",
        "<strong>OE2 · Escuchar voces:</strong> Conocer qué piensan docentes, estudiantes y gestión sobre el 360°",
        "<strong>OE3 · Trabas y soluciones:</strong> Detectar límites técnicos, paritarios y pares en cátedras chicas",
        "<strong>OE4 · Pautas posibles:</strong> Sugerir lineamientos prudentes solo hasta donde el campo acompañe"
      ],
      metadatosFooter: "Eje 1 • Matriz de Consistencia y Articulación con Longo (Tabla 1)",
      escena3D: "anim_11",
      guionOrador: "[Diferencia entre Objetivo General y Específicos • 0:40 min]\nSiguiendo la Matriz de Consistencia del proyecto (Tabla 1), separamos claramente dos niveles de objetivos:\n\n[1. Objetivo General — La gran pregunta]\nPor un lado, el Objetivo General resume la meta completa: investigar durante 2027 si estarían dadas las cinco condiciones de factibilidad para pensar en una evaluación 360° aplicable en años posteriores dentro del Departamento.\n\n[2. Objetivos Específicos — Los cuatro pasos para indagarla]\nY los cuatro Objetivos Específicos marcan el camino concreto paso a paso:\n- Primero (OE1), mirar las reglas escritas junto a lo que realmente se hace hoy con encuestas e informes.\n- Segundo (OE2), escuchar qué opinan docentes, alumnos y autoridades, y qué necesitarían para confiar.\n- Tercero (OE3), detectar qué trabas técnicas o gremiales habría, e indagar si en materias de un solo docente serviría dialogar con colegas de materias cercanas («pares horizontales»).\n- Y cuarto (OE4), si el campo muestra viabilidad —y respetando los límites que encontremos—, redactar recomendaciones simples y posibles."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EJE 2: ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO (4:00 min — Filminas 8 a 11)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_eje2_delagarza",
      numero: 8,
      tiempoSugerido: "0:45 min",
      bloque: "EJE 2 · ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO",
      esquema: "2.1 Construcción Teórica Principal: De la Garza (0:45)",
      badge: "Base Epistemológica",
      titulo: "La Teoría como Configuración Abierta",
      subtitulo: "Enrique de la Garza Toledo (2001) • Epistemología crítica como base del estudio",
      puntosClave: [
        "<strong>Enfoque principal:</strong> La teoría no es un dogma cerrado, sino una <em>configuración abierta</em> que articula Administración Pública y RR. HH.",
        "<strong>Base de la investigación:</strong> Concibe la universidad como proceso abierto de actores reflexivos para reconstruir el <em>campo de lo viable</em> en 2027.",
        "<strong>Por qué lo elegimos:</strong> Evita importar recetas cerradas, dialoga con la realidad del CURZAS y ordena los conceptos en pirámide invertida (Sautu, 2005)."
      ],
      metadatosFooter: "Eje 2 • De la Garza Toledo (2001) • Configuración Abierta",
      escena3D: "anim_29",
      guionOrador: "[Construcción teórica principal • 0:45 min]\nPara abrir el Eje 2 definimos primero nuestro posicionamiento teórico con Enrique de la Garza Toledo (2001), quien concibe la teoría como una «configuración abierta»: no como un sistema cerrado de axiomas rígidos, sino como una red flexible de categorías que articula la Administración Pública con la Gestión de Recursos Humanos.\n\nElegimos este autor como base principal porque una universidad pública cogobernada y con diez Nodos no funciona mecánicamente; investigar factibilidad exige reconstruir el campo de lo institucionalmente viable en 2027 sin dar conclusiones cerradas de antemano."
    },

    {
      id: "slide_eje2_longo",
      numero: 9,
      tiempoSugerido: "1:05 min",
      bloque: "EJE 2 · ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO",
      esquema: "2.1 Enfoque Neural: Subsistema de Longo (1:05)",
      badge: "Columna Vertebral",
      titulo: "Gestión Estratégica del Rendimiento",
      subtitulo: "Francisco Longo (2006) • Subsistema central articulado en el empleo público",
      puntosClave: [
        "<strong>Subsistema central:</strong> La <em>Gestión del Rendimiento</em> (evaluación formativa 360° en 4 miradas) legitima el mérito si supera la auditoría punitiva.",
        "<strong>Articulación sistémica:</strong> Se enlaza con <em>Desarrollo</em> (Art. 76), <em>Organización del Trabajo</em> (aulas híbridas), <em>Empleo</em> (CCT) y <em>Relaciones Humanas</em> (ADUNC).",
        "<strong>Por qué es eje neural:</strong> Estructura la Matriz de Consistencia del TFG: evaluar el desempeño en aislamiento resulta estéril si no nutre la formación ni respeta la estabilidad."
      ],
      metadatosFooter: "Eje 2 • Francisco Longo (2006) • 5 Subsistemas Focalizados en el TFG",
      escena3D: "anim_12",
      diagramaSVG: "assets/Sistemas-longo.svg",
      guionOrador: "[Enfoque neural o central • 1:05 min]\nSobre esa base abierta apoyamos nuestro eje central: el modelo sistémico de gestión pública de Francisco Longo (2006). El estudio focaliza en el subsistema de Gestión del Rendimiento, entendido no como control burocrático sino como un proceso reflexivo de mejora donde encajaría una retroalimentación 360° en cuatro miradas (autoevaluación, pares o pares horizontales, estudiantes y dirección).\n\nElegimos a Longo como columna vertebral del análisis porque demuestra que evaluar sin conectar con el subsistema de Desarrollo (la capacitación del Art. 76), con la Organización del Trabajo en aulas híbridas y con la Gestión del Empleo y las Relaciones Humanas en paritaria vacía de sentido formativo al dispositivo."
    },

    {
      id: "slide_eje2_poligobernanza",
      numero: 10,
      tiempoSugerido: "0:55 min",
      bloque: "EJE 2 · ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO",
      esquema: "2.1 Poligobernanza y Capacidades Estatales (0:55)",
      badge: "Conceptos Complementarios",
      titulo: "Poligobernanza y Capacidades Digitales",
      subtitulo: "Cao y Blutman (2023) • Oscar Oszlak (2020) • Articulación en red del CURZAS",
      puntosClave: [
        "<strong>Poligobernanza (Cao y Blutman, 2023):</strong> Dirección compartida en 4 planos —Macro (UNCo), Meso (CURZAS), Micro (10 Nodos) y Transversal (ADUNC)— frente a la complejidad territorial.",
        "<strong>Capacidades digitales (Oszlak, 2020):</strong> Plataformas abiertas (Moodle/SIU) al servicio formativo y del anonimato técnico, evitando el tecno-autoritarismo.",
        "<strong>Por qué los incorporamos:</strong> Aterrizan el modelo en la universidad cogobernada: la viabilidad requiere consensos en poder compartido (Matus, 1993) y resguardo tecnológico confiable."
      ],
      metadatosFooter: "Eje 2 • Poligobernanza (Cao & Blutman) • Estado Exponencial (Oszlak) • Matus",
      escena3D: "anim_15",
      diagramaSVG: "assets/modelo_360.svg",
      guionOrador: "[Conceptos complementarios • 0:55 min]\nComo conceptos complementarios incorporamos la poligobernanza de Horacio Cao y Gustavo Blutman (2023) junto a las capacidades estatales en la era exponencial de Oscar Oszlak (2020). En una universidad pública no hay mando vertical único: las decisiones circulan en red entre el Consejo Superior, el CURZAS, los diez Nodos territoriales y la paritaria con ADUNC.\n\nIncorporar esta dupla conceptual resulta indispensable porque, siguiendo a Oszlak (y en sintonía con las arenas de poder compartido de Carlos Matus), plataformas como Moodle o el SIU solo fortalecen capacidades de gestión si aseguran anonimato real y sentido formativo, nunca vigilancia tecno-burocrática."
    },

    {
      id: "slide_eje2_estado_arte",
      numero: 11,
      tiempoSugerido: "1:15 min",
      bloque: "EJE 2 · ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO",
      esquema: "2.2 Estado del Arte en 3 Niveles (1:15)",
      badge: "Relevamiento Abierto",
      titulo: "Estado del Arte y Posible Vacancia",
      subtitulo: "Antecedentes en 3 escalas (Dialnet, SciELO, Redalyc, EPAA y RDI UNCo)",
      puntosClave: [
        "<strong>Internacional:</strong> Circuitos 360° reducen sesgos, captan tutorías híbridas y funcionan solo si son formativos (<em>Sifuentes, 2016; Obando, 2014; Vázquez Cid, 2021; Hernández-Villafaña, 2023, n = 1.431</em>).",
        "<strong>Nacional:</strong> Fragmentación académica y primacía de controles burocráticos sobre instancias colegiadas de mejora (<em>Chiroleu, 2002; Marquina, 2013</em>).",
        "<strong>Local (UNCo–CURZAS):</strong> Tensiones docentes ante la virtualidad y demanda de formación continua (<em>Cariaga, 2019, Pilquen</em>); normativa actual sin devoluciones 360°.",
        "<strong>Pertinencia y nota abierta:</strong> Los estudios internacionales validan el 360° en docencia híbrida y el deslinde punitivo. <em>Relevamiento preliminar abierto, sujeto a agregados y cambios en 2027 (SNRD, SEDICI y RevEle).</em>"
      ],
      metadatosFooter: "Eje 2 • Estado del Arte Preliminar y Abierto • Posible Vacancia (2027)",
      escena3D: "anim_17",
      guionOrador: "[Estado del arte en tres estadios • 1:15 min]\nPara el estado del arte organizamos la búsqueda preliminar en tres niveles geográficos. A escala internacional, investigaciones empíricas en México, Ecuador y Cuba —como Hernández-Villafaña sobre 1.431 docentes y Vázquez Cid en tutorías híbridas— muestran que la evaluación 360° reduce sesgos de la encuesta única y capta mejor la tutoría virtual, siempre que quede desligada de sanciones o salarios.\n\nEn el plano nacional, Chiroleu y Marquina advierten que predominan controles burocrático-sumativos frente a circuitos formativos. Y en el ámbito local, Romina Cariaga (2019) documenta en el propio CURZA la necesidad de sostener el desarrollo docente en entornos virtuales.\n\n[Pertinencia y aclaración de apertura]\nEstos antecedentes —en especial los internacionales— resultan pertinentes porque aportan evidencia empírica sobre entornos híbridos y resguardo no punitivo donde aún no hallamos estudios situados locales. Aclaramos expresamente que este relevamiento es preliminar y permanece abierto a cambios o nuevos agregados durante la revisión ampliada de 2027."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EJE 3: METODOLOGÍA (4:40 min — Filminas 12 a 15)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_8",
      numero: 12,
      tiempoSugerido: "1:10 min",
      bloque: "EJE 3 · METODOLOGÍA",
      esquema: "3.1 Cómo Investigaríamos y Con Quiénes (1:10)",
      badge: "Plan de Campo 2027",
      titulo: "Cómo Haríamos el Estudio (2027)",
      subtitulo: "Primero escuchar en profundidad y luego acompañar con encuestas breves",
      puntosClave: [
        "<strong>Estrategia mixta:</strong> Peso principal en entrevistas + encuesta descriptiva de apoyo",
        "<strong>Universo estimado:</strong> ~38 docentes • ~130 alumnos avanzados • 5 referentes",
        "<strong>Muestras previstas:</strong> 9 entrevistas en profundidad + ~45 encuestas voluntarias"
      ],
      metadatosFooter: "Eje 3 • Sampieri • Flyvbjerg • Muestra a confirmar por censo 2027",
      escena3D: "anim_19",
      guionOrador: "[Cómo trabajaríamos en 2027 • 1:10 min]\nEn la tercera parte explicamos cómo haríamos la investigación en 2027. Elegimos estudiar este Departamento en particular usando un método combinado donde lo más importante es escuchar y comprender en profundidad (enfoque mixto CUAL → cuan, según Sampieri y Flyvbjerg).\n\nPartiendo de una estimación aproximada de 38 docentes, 130 estudiantes avanzados y 5 referentes entre gestión y gremio —cifras que confirmaremos con datos reales en mayo de 2027—, planeamos hacer 9 entrevistas (a docentes de Viedma y Nodos, autoridades, un representante de ADUNC y estudiantes) hasta que dejen de surgir ideas nuevas, sumado a unos 45 cuestionarios breves y voluntarios."
    },

    {
      id: "slide_9",
      numero: 13,
      tiempoSugerido: "1:15 min",
      bloque: "EJE 3 · METODOLOGÍA",
      esquema: "3.2 Herramientas y Cruce de Datos (1:15)",
      badge: "Anexos I y II • Tabla 2",
      titulo: "Herramientas y Cruce de Miradas",
      subtitulo: "Tres formas de recoger información sobre las mismas 5 dimensiones",
      puntosClave: [
        "<strong>1. Leer documentos:</strong> Comparar ordenanzas con encuestas SIU y cursos Art. 76",
        "<strong>2. Entrevistas (Anexo I):</strong> 3 guías flexibles ordenadas por temas (Bardin)",
        "<strong>3. Encuesta corta (Anexo II):</strong> Menos de 15 preguntas + cruce de toda la información"
      ],
      metadatosFooter: "Eje 3 • Triangulación (Denzin, 1978) • Análisis Temático",
      escena3D: "anim_20",
      guionOrador: "[Herramientas simples y poco tiempo • 1:15 min]\nPara no molestar ni recargar el tiempo de los colegas, dejamos armadas tres herramientas concretas en los Anexos:\n1. Primero revisaríamos papeles reales: comparar lo que dicen las ordenanzas con los formularios actuales del SIU y los planes de capacitación del Art. 76.\n2. Segundo, realizaríamos entrevistas con guías flexibles (Anexo I), ordenando luego las opiniones por temas en común.\n3. Tercero, enviaríamos formularios digitales muy cortos —menos de 15 preguntas que se responden en pocos minutos (Anexo II)— para cruzar los números con lo escuchado en entrevistas y documentos, buscando no quedarnos con una sola versión."
    },

    {
      id: "slide_10",
      numero: 14,
      tiempoSugerido: "1:10 min",
      bloque: "EJE 3 · METODOLOGÍA",
      esquema: "3.4 Plan de 7 Meses y Costo Cero (1:10)",
      badge: "Costo $0 CURZAS",
      titulo: "Tiempos (7 Meses) y Recursos",
      subtitulo: "Previsto de mayo a noviembre de 2027 • 100 % autofinanciado",
      puntosClave: [
        "<strong>May–Jul 2027:</strong> Pedir avales, probar encuesta piloto, 9 entrevistas y sondeo online",
        "<strong>Ago–Nov 2027:</strong> Analizar todo, redactar pautas posibles y entregar el trabajo final",
        "<strong>Sin costo institucional:</strong> $160.000 propios + herramientas gratuitas y vía remota"
      ],
      metadatosFooter: "Eje 3 • Tablas 3 y 4 (Dedicación estimada 15–20 h/sem)",
      escena3D: "anim_21",
      guionOrador: "[Cronograma y costos • 1:10 min]\nTodo el trabajo de campo llevaría siete meses durante 2027: en mayo pediríamos los avales formales del Departamento (Anexo III) y haríamos una prueba piloto —dejando fuera de la muestra final a quienes prueben el cuestionario—; en junio y julio haríamos las entrevistas y la encuesta digital en Viedma y Nodos; en agosto analizaríamos la información; y entre septiembre y noviembre redactaríamos el informe final.\n\nNo implicaría ningún gasto para la universidad: cubriría los $160.000 estimados con recursos propios, programas gratuitos y encuentros por videollamada con los Nodos."
    },

    {
      id: "slide_11",
      numero: 15,
      tiempoSugerido: "1:05 min",
      bloque: "EJE 3 · METODOLOGÍA",
      esquema: "3.3 Cuidado de Objetividad y Privacidad (1:05)",
      badge: "Ley 25.326 • Anexo IV",
      titulo: "Transparencia y Cuidado Ético",
      subtitulo: "Cuidar la objetividad del tesista y proteger la identidad de todos",
      puntosClave: [
        "<strong>Cuidar mi mirada:</strong> Como soy de este Dpto., pregunto sobre reglas, nunca personas",
        "<strong>Privacidad real (Ley 25.326):</strong> Encuestas sin IP ni correo; apodos en entrevistas",
        "<strong>Regla futura sugerida:</strong> Custodia neutral, mínimo 5 respuestas y cero uso en legajos"
      ],
      metadatosFooter: "Eje 3 • Bourdieu & Guber • Resguardo CCT 1246/15",
      escena3D: "anim_23",
      guionOrador: "[Transparencia, doble rol y privacidad • 1:05 min]\nQuiero detenerme en un punto muy importante para cualquier colega: como soy alumno del CCC y egresado técnico de este mismo Departamento, alguien podría preguntarse si mi cercanía afecta la mirada o genera incomodidad al responder. Siguiendo a Bourdieu y Guber, cuidamos eso preguntando siempre sobre el funcionamiento del sistema y las reglas —nunca calificando personas— y contrastando con documentos escritos.\n\nAdemás, bajo la Ley 25.326 de Protección de Datos: en las encuestas no se guarda correo, IP ni horario; en las entrevistas usamos consentimiento escrito (Anexo IV) y códigos en lugar de nombres propios. Y si algún día el Departamento evaluara usar un 360°, recomendaríamos custodia neutral y al menos 5 respuestas por curso para proteger a quienes dictan materias solos —sin tocar jamás legajos ni concursos."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // CIERRE Y RESPALDO (1:50 min — Filminas 16 a 19)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_12",
      numero: 16,
      tiempoSugerido: "0:50 min",
      bloque: "CIERRE",
      esquema: "Sentido y Límite del Anteproyecto (0:50)",
      badge: "Síntesis Final",
      titulo: "Sentido y Alcance del Proyecto",
      subtitulo: "Aportar información seria en 2027 sin adelantar conclusiones",
      puntosClave: [
        "<strong>Estudio abierto:</strong> Indagar qué funcionaría sin anticipar resultados",
        "<strong>Aporte pensado:</strong> Dar evidencia útil si el Dpto. quiere fortalecer el Art. 76",
        "<strong>Escucha al Tribunal:</strong> Abierto a mejoras para llegar mejor al campo en 2027"
      ],
      metadatosFooter: "Cierre • Defensa Oral SIA 2026",
      escena3D: "anim_25",
      guionOrador: "[Cierre del proyecto • 0:50 min]\nPara cerrar: el sentido de este proyecto es ir al terreno en 2027 a escuchar a todos los actores para conocer si esta propuesta serviría en años posteriores, qué generaría dudas y qué límites existen en nuestro CURZAS, dejando un insumo claro que ayude —si el Departamento así lo decide— a fortalecer la capacitación docente (Art. 76).\n\n[Pausa de 2 segundos]\n\nQuedo atento a las observaciones y preguntas de la cátedra."
    },

    {
      id: "slide_13",
      numero: 17,
      tiempoSugerido: "0:30 min",
      bloque: "CIERRE",
      esquema: "Correspondencia con Planilla Oficial (0:30)",
      badge: "Diseño UNCo–CURZAS",
      titulo: "Alineación con Planilla Oficial",
      subtitulo: "Correspondencia completa entre el documento escrito y esta exposición",
      puntosClave: [
        "<strong>Ejes 1 y 2:</strong> El Problema (1.1–1.4) • Estado de la Cuestión y Marco Teórico (2.1–2.4)",
        "<strong>Eje 3:</strong> Metodología (3.1–3.5) e Instrumentos ya preparados (Anexos I–IV)",
        "<strong>Respaldo formal:</strong> 35 referencias APA 7 y Cronograma en 6 etapas"
      ],
      metadatosFooter: "Diseño de Investigación Completo 2025",
      escena3D: "anim_28",
      anexoInteractivo: {
        archivo: "Material Catedra/Diseño de Investigación completo 2025.pdf",
        titulo: "Planilla Oficial: Diseño de Investigación Completo 2025 (UNCo-CURZAS)",
        etiqueta: "📄 Planilla Oficial (PDF)",
        atajo: "A"
      },
      guionOrador: "[Validación formal • 0:30 min]\nEl proyecto escrito sigue punto por punto la estructura de la planilla oficial de la cátedra y la Resolución 266/23, incluyendo las guías de entrevista, cuestionarios modelo, consentimiento informado y referencias."
    },

    {
      id: "slide_14",
      numero: 18,
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
      guionOrador: "[Gratitud • 0:20 min]\nMuchas gracias a las docentes y al docente de la cátedra por el acompañamiento durante este seminario, a la comunidad del CURZAS en Viedma y los diez Nodos, y a mi familia y compañeros de cursado."
    },

    {
      id: "slide_15",
      numero: 19,
      tiempoSugerido: "0:10 min",
      bloque: "CIERRE",
      esquema: "Bibliografía APA 7 (0:10)",
      badge: "35 Fuentes APA 7",
      titulo: "Respaldo Bibliográfico",
      subtitulo: "Referencias organizadas por eje y jerarquía",
      puntosClave: [
        "<strong>Eje 1 · Problema:</strong> Ley 24.521, Estatuto UNCo, CCT 1246/15, Wainerman y Sautu",
        "<strong>Eje 2 · Estado de la Cuestión y Marco Teórico:</strong> De la Garza, Longo, Cao y Blutman, Oszlak, Cariaga",
        "<strong>Eje 3 · Metodología:</strong> Sampieri, Flyvbjerg, Bardin, Bourdieu, Ley 25.326"
      ],
      metadatosFooter: "Detalle completo en Panel Respaldo (Tecla M)",
      escena3D: "anim_27",
      abrirTabDrawer: "bibliografia",
      guionOrador: "[Fuentes • 0:10 min]\nTodas las referencias normativas y académicas en formato APA 7 quedan disponibles para consulta en el panel de Respaldo. Muchas gracias."
    }
  ]
};

// Exportación global para el navegador
if (typeof window !== "undefined") {
  window.PRESENTACION_DATA = PRESENTACION_DATA;
}
