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
      },
      {
        autor: "Martín Retamozo (2016)",
        concepto: "Viabilidad operativa del proyecto de investigación (cap. «10. Factibilidad», p. 283): establece 5 condiciones para ejecutar una tesis (aptitudes personales, soporte institucional, acceso a fuentes/campo, recursos financieros y dirección), diferenciadas de la factibilidad del modelo 360° investigado."
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
      // ── 1. PRIMERA PARTE TFG · EJE 1: EL PROBLEMA (13 fuentes citadas • F3–F7) ──
      {
        fuenteId: "longo2006",
        categoria: "1. Eje 1 · El Problema (Primera Parte TFG • F3–F7)",
        filminas: "F3–F7",
        jerarquia: "Marco Central RR.HH.",
        cita: "Longo, F. (2004/2006). <em>Mérito y flexibilidad: La gestión de las personas en las organizaciones del sector público</em>. Paidós."
      },
      {
        fuenteId: "oszlak2020",
        categoria: "1. Eje 1 · El Problema (Primera Parte TFG • F3–F7)",
        filminas: "F4, F6",
        jerarquia: "Capacidades Estatales",
        cita: "Oszlak, O. (2020). <em>El Estado en la era exponencial</em>. CLAD e INAP."
      },
      {
        fuenteId: "matus1993",
        categoria: "1. Eje 1 · El Problema (Primera Parte TFG • F3–F7)",
        filminas: "F5–F7",
        jerarquia: "Viabilidad Política",
        cita: "Matus, C. (1993). <em>Política, planificación y gobierno</em>. Fundación ALTADIR."
      },
      {
        fuenteId: "sautu2005",
        categoria: "1. Eje 1 · El Problema (Primera Parte TFG • F3–F7)",
        filminas: "F5–F7",
        jerarquia: "Pirámide Invertida",
        cita: "Sautu, R. (2005). <em>Todo es teoría: Objetivos y métodos de investigación</em>. Lumiere."
      },
      {
        fuenteId: "wainerman2011",
        categoria: "1. Eje 1 · El Problema (Primera Parte TFG • F3–F7)",
        filminas: "F3–F4",
        jerarquia: "Problematización",
        cita: "Wainerman, C., y Sautu, R. (2011). <em>La trastienda de la investigación</em> (3.ª ed.). Manantial."
      },
      {
        fuenteId: "lepsinger2009",
        categoria: "1. Eje 1 · El Problema (Primera Parte TFG • F3–F7)",
        filminas: "F3–F4",
        jerarquia: "Modelo 360° Base",
        cita: "Lepsinger, R., y Lucia, A. D. (2009). <em>The art and science of 360 degree feedback</em> (2.ª ed.). Pfeiffer."
      },
      {
        fuenteId: "obando2014",
        categoria: "1. Eje 1 · El Problema (Primera Parte TFG • F3–F7)",
        filminas: "F4",
        jerarquia: "Evaluación Integral",
        cita: "Obando Freire, F. X., López Fernández, R., Luna Álvarez, D., Luna Álvarez, E., Luna Álvarez, W., y Alpízar Fernández, R. (2014). Sistema de evaluación docente mediante el modelo 360 grados y el portafolio electrónico. <em>Medisur</em>, <em>12</em>(2), 334–340."
      },
      {
        fuenteId: "sifuentes2016",
        categoria: "1. Eje 1 · El Problema (Primera Parte TFG • F3–F7)",
        filminas: "F4",
        jerarquia: "Desempeño 360°",
        cita: "Sifuentes Ocegueda, E., Suárez Flores, M., y Lara González, L. M. (2016). La evaluación de 360° aplicada al personal docente de nivel superior. <em>Revista de Investigación en Tecnologías de la Información</em>, <em>4</em>(7), 17–23."
      },
      {
        fuenteId: "unco2025",
        categoria: "1. Eje 1 · El Problema (Primera Parte TFG • F3–F7)",
        filminas: "F3–F4",
        jerarquia: "Estatuto UNCo",
        cita: "Universidad Nacional del Comahue. (2025). <em>Ordenanza CS N° 0988/2025: Texto ordenado del Estatuto de la Universidad Nacional del Comahue (Título X: De la Carrera Docente)</em>. Consejo Superior, UNCo."
      },
      {
        fuenteId: "unco1997",
        categoria: "1. Eje 1 · El Problema (Primera Parte TFG • F3–F7)",
        filminas: "F3–F4",
        jerarquia: "Carrera Docente",
        cita: "Universidad Nacional del Comahue. (1997). <em>Ordenanza CS N° 0910/1997: Reglamento de Carrera Docente de la Universidad Nacional del Comahue</em>. Consejo Superior, UNCo."
      },
      {
        fuenteId: "pen2015",
        categoria: "1. Eje 1 · El Problema (Primera Parte TFG • F3–F7)",
        filminas: "F3–F4",
        jerarquia: "CCT 1246/2015",
        cita: "Poder Ejecutivo Nacional. (2015). <em>Decreto N° 1246/2015: Convenio Colectivo de Trabajo para los Docentes de las Instituciones Universitarias Nacionales</em>. Boletín Oficial de la República Argentina."
      },
      {
        fuenteId: "curza2022",
        categoria: "1. Eje 1 · El Problema (Primera Parte TFG • F3–F7)",
        filminas: "F4, F6",
        jerarquia: "Mediaciones CURZAS",
        cita: "Consejo Directivo del CURZA. (2022). <em>Resolución CD-CURZA N° 196/2022: Pautas institucionales sobre incorporación de mediaciones tecnológicas dentro de las carreras presenciales y semipresenciales</em>. Centro Universitario Regional Zona Atlántica, Universidad Nacional del Comahue."
      },
      {
        fuenteId: "uncocurzas2023",
        categoria: "1. Eje 1 · El Problema (Primera Parte TFG • F3–F7)",
        filminas: "F1, F7",
        jerarquia: "Reglamento TFG",
        cita: "Consejo Directivo del CURZA. (2023). <em>Resolución CD-CURZA N° 266/2023: Reglamento de Trabajos Finales de Graduación (TFG)</em>. Centro Universitario Regional Zona Atlántica, Universidad Nacional del Comahue."
      },

      // ── 2a. SEGUNDA PARTE TFG (2.1) · EJE 2: MARCO TEÓRICO (14 fuentes citadas • F8–F10) ──
      {
        fuenteId: "delagarza2001",
        categoria: "2a. Eje 2 · Marco Teórico (Segunda Parte 2.1 TFG • F8–F10)",
        filminas: "F8",
        jerarquia: "Epistemología Rectora",
        cita: "De la Garza Toledo, E. (2001). La epistemología crítica y el concepto de configuración: Alternativas a la estructura y a la acción. En E. De la Garza Toledo (Ed.), <em>Los retos de las ciencias sociales en el siglo XXI</em> (pp. 45–68). Plaza y Valdés."
      },
      {
        fuenteId: "sautu2005",
        categoria: "2a. Eje 2 · Marco Teórico (Segunda Parte 2.1 TFG • F8–F10)",
        filminas: "F8",
        jerarquia: "Articulación Teórica",
        cita: "Sautu, R. (2005). <em>Todo es teoría: Objetivos y métodos de investigación</em>. Lumiere."
      },
      {
        fuenteId: "longo2006",
        categoria: "2a. Eje 2 · Marco Teórico (Segunda Parte 2.1 TFG • F8–F10)",
        filminas: "F9",
        jerarquia: "Subsistema Gestión",
        cita: "Longo, F. (2004/2006). <em>Mérito y flexibilidad: La gestión de las personas en las organizaciones del sector público</em>. Paidós."
      },
      {
        fuenteId: "chiavenato2020",
        categoria: "2a. Eje 2 · Marco Teórico (Segunda Parte 2.1 TFG • F8–F10)",
        filminas: "F9",
        jerarquia: "Enfoque Formativo",
        cita: "Chiavenato, I. (2020). <em>Gestión del talento humano: El nuevo papel de los recursos humanos en las organizaciones</em> (5.ª ed.). McGraw-Hill Interamericana."
      },
      {
        fuenteId: "lepsinger2009",
        categoria: "2a. Eje 2 · Marco Teórico (Segunda Parte 2.1 TFG • F8–F10)",
        filminas: "F9",
        jerarquia: "Núcleo Modelo 360°",
        cita: "Lepsinger, R., y Lucia, A. D. (2009). <em>The art and science of 360 degree feedback</em> (2.ª ed.). Pfeiffer."
      },
      {
        fuenteId: "obando2014",
        categoria: "2a. Eje 2 · Marco Teórico (Segunda Parte 2.1 TFG • F8–F10)",
        filminas: "F9",
        jerarquia: "Evaluación 360°",
        cita: "Obando Freire, F. X., López Fernández, R., Luna Álvarez, D., Luna Álvarez, E., Luna Álvarez, W., y Alpízar Fernández, R. (2014). Sistema de evaluación docente mediante el modelo 360 grados y el portafolio electrónico. <em>Medisur</em>, <em>12</em>(2), 334–340."
      },
      {
        fuenteId: "sifuentes2016",
        categoria: "2a. Eje 2 · Marco Teórico (Segunda Parte 2.1 TFG • F8–F10)",
        filminas: "F9",
        jerarquia: "Retroalimentación 360°",
        cita: "Sifuentes Ocegueda, E., Suárez Flores, M., y Lara González, L. M. (2016). La evaluación de 360° aplicada al personal docente de nivel superior. <em>Revista de Investigación en Tecnologías de la Información</em>, <em>4</em>(7), 17–23."
      },
      {
        fuenteId: "aguilar2006",
        categoria: "2a. Eje 2 · Marco Teórico (Segunda Parte 2.1 TFG • F8–F10)",
        filminas: "F10",
        jerarquia: "Gobernanza Base",
        cita: "Aguilar Villanueva, L. F. (2006). <em>Gobernanza y gestión pública</em>. Fondo de Cultura Económica."
      },
      {
        fuenteId: "cao2023",
        categoria: "2a. Eje 2 · Marco Teórico (Segunda Parte 2.1 TFG • F8–F10)",
        filminas: "F10",
        jerarquia: "Poligobernanza Actual",
        cita: "Cao, H., y Blutman, G. (2023). <em>Escenarios futuros para el Estado y la Administración Pública en Argentina</em>. Centro de Investigaciones en Administración Pública."
      },
      {
        fuenteId: "cao2021",
        categoria: "2a. Eje 2 · Marco Teórico (Segunda Parte 2.1 TFG • F8–F10)",
        filminas: "F10",
        jerarquia: "Prospectiva Poligobernanza",
        cita: "Cao, H., y Blutman, G. (2021). <em>Escenarios prospectivos para el Estado y la administración pública argentina</em>. CIAP / UBA."
      },
      {
        fuenteId: "matus1993",
        categoria: "2a. Eje 2 · Marco Teórico (Segunda Parte 2.1 TFG • F8–F10)",
        filminas: "F10",
        jerarquia: "Viabilidad Estratégica",
        cita: "Matus, C. (1993). <em>Política, planificación y gobierno</em>. Fundación ALTADIR."
      },
      {
        fuenteId: "oszlak2020",
        categoria: "2a. Eje 2 · Marco Teórico (Segunda Parte 2.1 TFG • F8–F10)",
        filminas: "F10",
        jerarquia: "Capacidades Digitales",
        cita: "Oszlak, O. (2020). <em>El Estado en la era exponencial</em>. CLAD e INAP."
      },
      {
        fuenteId: "ministerio1995",
        categoria: "2a. Eje 2 · Marco Teórico (Segunda Parte 2.1 TFG • F8–F10)",
        filminas: "F10",
        jerarquia: "Ley de Educ. Superior",
        cita: "Congreso de la Nación Argentina. (1995). <em>Ley N° 24.521: Ley de Educación Superior</em>. Boletín Oficial de la República Argentina."
      },
      {
        fuenteId: "curza2022",
        categoria: "2a. Eje 2 · Marco Teórico (Segunda Parte 2.1 TFG • F8–F10)",
        filminas: "F10",
        jerarquia: "Mediaciones CURZAS",
        cita: "Consejo Directivo del CURZA. (2022). <em>Resolución CD-CURZA N° 196/2022: Pautas institucionales sobre incorporación de mediaciones tecnológicas dentro de las carreras presenciales y semipresenciales</em>. Centro Universitario Regional Zona Atlántica, Universidad Nacional del Comahue."
      },

      // ── 2b. SEGUNDA PARTE TFG (2.2) · EJE 2: ESTADO DEL ARTE Y NORMATIVA (13 fuentes citadas • F11) ──
      {
        fuenteId: "torraco2016",
        categoria: "2b. Eje 2 · Estado del Arte y Normativa (Segunda Parte 2.2 TFG • F11)",
        filminas: "F11",
        jerarquia: "Revisión Integrativa",
        cita: "Torraco, R. J. (2016). Writing integrative literature reviews: Using the past and present to explore the future. <em>Human Resource Development Review</em>, <em>15</em>(4), 404–428. https://doi.org/10.1177/1534484316671606"
      },
      {
        fuenteId: "jimenez2008",
        categoria: "2b. Eje 2 · Estado del Arte y Normativa (Segunda Parte 2.2 TFG • F11)",
        filminas: "F11",
        jerarquia: "Balance Temático",
        cita: "Jiménez Becerra, A. (2008). El estado del arte y la investigación de la investigación: Claves metodológicas para la construcción de balances temáticos. En A. Torres y A. Jiménez (Eds.), <em>Investigación cualitativa en educación y ciencias sociales</em> (pp. 27–42). Universidad Pedagógica Nacional."
      },
      {
        fuenteId: "sifuentes2016",
        categoria: "2b. Eje 2 · Estado del Arte y Normativa (Segunda Parte 2.2 TFG • F11)",
        filminas: "F11",
        jerarquia: "Int. Modelo 360°",
        cita: "Sifuentes Ocegueda, E., Suárez Flores, M., y Lara González, L. M. (2016). La evaluación de 360° aplicada al personal docente de nivel superior. <em>Revista de Investigación en Tecnologías de la Información</em>, <em>4</em>(7), 17–23."
      },
      {
        fuenteId: "obando2014",
        categoria: "2b. Eje 2 · Estado del Arte y Normativa (Segunda Parte 2.2 TFG • F11)",
        filminas: "F11",
        jerarquia: "Int. Portafolio 360°",
        cita: "Obando Freire, F. X., López Fernández, R., Luna Álvarez, D., Luna Álvarez, E., Luna Álvarez, W., y Alpízar Fernández, R. (2014). Sistema de evaluación docente mediante el modelo 360 grados y el portafolio electrónico. <em>Medisur</em>, <em>12</em>(2), 334–340."
      },
      {
        fuenteId: "hernandezvillafana2023",
        categoria: "2b. Eje 2 · Estado del Arte y Normativa (Segunda Parte 2.2 TFG • F11)",
        filminas: "F11",
        jerarquia: "Int. Empírico (n=1.431)",
        cita: "Hernández-Villafaña, A. D., y Luna Serrano, E. (2023). Metaevaluación del sistema de evaluación docente en una universidad pública mexicana. <em>Archivos Analíticos de Políticas Educativas</em>, <em>31</em>(11), 1–24. https://doi.org/10.14507/epaa.31.7501"
      },
      {
        fuenteId: "vazquezciddeleon2021",
        categoria: "2b. Eje 2 · Estado del Arte y Normativa (Segunda Parte 2.2 TFG • F11)",
        filminas: "F11",
        jerarquia: "Int. Tutoría Híbrida",
        cita: "Vázquez Cid de León, C., Domínguez Herrera, J. E., Aguilar Cruz, C., Ramírez Castillo, E. A., y Vázquez Arango, M. de L. (2021). Evaluación 360° de las tutorías presenciales y en línea en universidades públicas. <em>UNACIENCIA: Revista de Estudios e Investigaciones</em>, <em>14</em>(27), 103–120."
      },
      {
        fuenteId: "chiroleu2002",
        categoria: "2b. Eje 2 · Estado del Arte y Normativa (Segunda Parte 2.2 TFG • F11)",
        filminas: "F11",
        jerarquia: "Nacional Fundacional",
        cita: "Chiroleu, A. (2002). La profesión académica en Argentina. <em>Espacios en Blanco. Serie Indagaciones</em>, (12), 51–73."
      },
      {
        fuenteId: "marquina2013",
        categoria: "2b. Eje 2 · Estado del Arte y Normativa (Segunda Parte 2.2 TFG • F11)",
        filminas: "F11",
        jerarquia: "Nacional Principal",
        cita: "Marquina, M. (2013). ¿Hay una profesión académica argentina? Avances y reflexiones sobre un objeto en construcción. <em>Pensamiento Universitario</em>, <em>15</em>(15), 35–58."
      },
      {
        fuenteId: "cariaga2019",
        categoria: "2b. Eje 2 · Estado del Arte y Normativa (Segunda Parte 2.2 TFG • F11)",
        filminas: "F11",
        jerarquia: "Local CURZAS-UNCo",
        cita: "Cariaga, R. (2019). El rol del docente universitario en las propuestas educativas virtualizadas. <em>Revista Pilquen. Sección Psicopedagogía</em>, <em>16</em>(2), 14–28."
      },
      {
        fuenteId: "unco2025",
        categoria: "2b. Eje 2 · Estado del Arte y Normativa (Segunda Parte 2.2 TFG • F11)",
        filminas: "F11",
        jerarquia: "Estatuto UNCo",
        cita: "Universidad Nacional del Comahue. (2025). <em>Ordenanza CS N° 0988/2025: Texto ordenado del Estatuto de la Universidad Nacional del Comahue (Título X: De la Carrera Docente)</em>. Consejo Superior, UNCo."
      },
      {
        fuenteId: "unco1997",
        categoria: "2b. Eje 2 · Estado del Arte y Normativa (Segunda Parte 2.2 TFG • F11)",
        filminas: "F11",
        jerarquia: "Carrera Docente",
        cita: "Universidad Nacional del Comahue. (1997). <em>Ordenanza CS N° 0910/1997: Reglamento de Carrera Docente de la Universidad Nacional del Comahue</em>. Consejo Superior, UNCo."
      },
      {
        fuenteId: "pen2015",
        categoria: "2b. Eje 2 · Estado del Arte y Normativa (Segunda Parte 2.2 TFG • F11)",
        filminas: "F11",
        jerarquia: "CCT 1246/2015",
        cita: "Poder Ejecutivo Nacional. (2015). <em>Decreto N° 1246/2015: Convenio Colectivo de Trabajo para los Docentes de las Instituciones Universitarias Nacionales</em>. Boletín Oficial de la República Argentina."
      },
      {
        fuenteId: "curza2022",
        categoria: "2b. Eje 2 · Estado del Arte y Normativa (Segunda Parte 2.2 TFG • F11)",
        filminas: "F11",
        jerarquia: "Mediaciones CURZAS",
        cita: "Consejo Directivo del CURZA. (2022). <em>Resolución CD-CURZA N° 196/2022: Pautas institucionales sobre incorporación de mediaciones tecnológicas dentro de las carreras presenciales y semipresenciales</em>. Centro Universitario Regional Zona Atlántica, Universidad Nacional del Comahue."
      },

      // ── 3. TERCERA PARTE TFG · EJE 3: METODOLOGÍA, MATRIZ 5D, ÉTICA Y VIABILIDAD (17 fuentes citadas • F12–F15) ──
      {
        fuenteId: "hernandezsampieri2014",
        categoria: "3. Eje 3 · Metodología, Ética y Viabilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F12–F15",
        jerarquia: "Diseño Mixto Rector",
        cita: "Hernández-Sampieri, R., Fernández-Collado, C., y Baptista-Lucio, M. del P. (2014). <em>Metodología de la investigación</em> (6.ª ed.). McGraw-Hill Education."
      },
      {
        fuenteId: "retamozo2016",
        categoria: "3. Eje 3 · Metodología, Ética y Viabilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F12, F15",
        jerarquia: "Viabilidad del Diseño",
        cita: "Retamozo, M. (2016). Instrucciones para hacer un proyecto de tesis en ciencias sociales (Apuntes desde el sur). En C. Gallegos Elías, A. Mejía Martínez y Y. Paredes Vilchiz (Coords.), <em>¿Cómo investigamos? ¿Cómo enseñamos a investigar? Tomo IV. In memoriam Hugo Zemelman Merino</em> (pp. 257–287). Universidad Nacional Autónoma de México."
      },
      {
        fuenteId: "flyvbjerg2005",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F12",
        jerarquia: "Estudio de Caso",
        cita: "Flyvbjerg, B. (2005). Cinco malentendidos acerca de la investigación mediante los estudios de caso. <em>Revista Española de Investigaciones Sociológicas</em>, <em>106</em>, 33–62."
      },
      {
        fuenteId: "gimenez2012",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F12",
        jerarquia: "Validación Caso",
        cita: "Giménez, G. (2012). El estatuto metodológico del estudio de caso en la investigación social. <em>Cultura y Representaciones Sociales</em>, <em>7</em>(13), 33–52."
      },
      {
        fuenteId: "sautu2005",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F12",
        jerarquia: "Coherencia Diseño",
        cita: "Sautu, R. (2005). <em>Todo es teoría: Objetivos y métodos de investigación</em>. Lumiere."
      },
      {
        fuenteId: "wainerman2011",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F12",
        jerarquia: "Cocina Metodológica",
        cita: "Wainerman, C., y Sautu, R. (2011). <em>La trastienda de la investigación</em> (3.ª ed.). Manantial."
      },
      {
        fuenteId: "glaser1967",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F12",
        jerarquia: "Saturación Cualitativa",
        cita: "Glaser, B. G., y Strauss, A. L. (1967). <em>The discovery of grounded theory: Strategies for qualitative research</em>. Aldine Publishing Company."
      },
      {
        fuenteId: "bardin2002",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F12–F13",
        jerarquia: "Análisis Contenido",
        cita: "Bardin, L. (2002). <em>Análisis de contenido</em>. Akal."
      },
      {
        fuenteId: "denzin1978",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F12–F13",
        jerarquia: "Triangulación",
        cita: "Denzin, N. K. (1978). <em>The research act: A theoretical introduction to sociological methods</em> (2.ª ed.). McGraw-Hill."
      },
      {
        fuenteId: "bourdieu2003",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F14",
        jerarquia: "Vigilancia Reflexiva",
        cita: "Bourdieu, P. (2003). <em>El oficio de científico: Ciencia de la ciencia y reflexividad</em>. Anagrama."
      },
      {
        fuenteId: "guber2004",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F14",
        jerarquia: "Extrañamiento Campo",
        cita: "Guber, R. (2004). <em>El salvaje metropolitano: Reconstrucción del conocimiento social en el trabajo de campo</em>. Paidós."
      },
      {
        fuenteId: "ley25326",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F13, F14",
        jerarquia: "Tutela Legal Datos",
        cita: "Congreso de la Nación Argentina. (2000). <em>Ley N° 25.326: Protección de los Datos Personales</em>. Boletín Oficial de la República Argentina."
      },
      {
        fuenteId: "longo2006",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F13",
        jerarquia: "Matriz 5D · Gestión",
        cita: "Longo, F. (2004/2006). <em>Mérito y flexibilidad: La gestión de las personas en las organizaciones del sector público</em>. Paidós."
      },
      {
        fuenteId: "oszlak2020",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F13",
        jerarquia: "Matriz 5D · Capacidades",
        cita: "Oszlak, O. (2020). <em>El Estado en la era exponencial</em>. CLAD e INAP."
      },
      {
        fuenteId: "aguilar2006",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F13",
        jerarquia: "Matriz 5D · Gobernanza",
        cita: "Aguilar Villanueva, L. F. (2006). <em>Gobernanza y gestión pública</em>. Fondo de Cultura Económica."
      },
      {
        fuenteId: "cao2023",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F13",
        jerarquia: "Matriz 5D · Poligobernanza",
        cita: "Cao, H., y Blutman, G. (2023). <em>Escenarios futuros para el Estado y la Administración Pública en Argentina</em>. Centro de Investigaciones en Administración Pública."
      },
      {
        fuenteId: "matus1993",
        categoria: "3. Eje 3 · Metodología, Ética y Factibilidad (Tercera Parte TFG • F12–F15)",
        filminas: "F13",
        jerarquia: "Matriz 5D · Viabilidad",
        cita: "Matus, C. (1993). <em>Política, planificación y gobierno</em>. Fundación ALTADIR."
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
          resumen: "De la Garza • Longo • Cao y Blutman, Oszlak y Matus • Estado del Arte",
          targetSlide: 7,
          tono: "b2"
        },
        {
          romano: "03",
          titulo: "Metodología",
          resumen: "Cómo investigaríamos en 2027 • Muestras • Ética, tiempos y viabilidad",
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
      esquema: "2.1 Posicionamiento Epistemológico: De la Garza (0:45)",
      badge: "Base Epistemológica",
      titulo: "La Teoría como Configuración Abierta",
      subtitulo: "Enrique de la Garza Toledo (2001) • Epistemología crítica latinoamericana",
      epistemologiaData: {
        pilares: [
          {
            etiqueta: "01 · Teoría como Configuración Abierta",
            texto: "Red conceptual flexible —sin axiomas cerrados— que entiende a la universidad como <strong>proceso abierto</strong> construido cotidianamente por <em>sujetos reflexivos</em>."
          },
          {
            etiqueta: "02 · Espacio de Posibilidades Viables",
            texto: "La factibilidad reconstruye en el presente el <strong>«espacio de posibilidades para la acción viable»</strong>, articulado con <em>Matus (1993)</em> en pirámide invertida según <em>Sautu (2005)</em>."
          }
        ],
        flujoPiramide: [
          "Longo (2006) · Empleo público",
          "De la Garza (2001) · Config. abierta",
          "Matus (1993) · Acción viable"
        ],
        flujoNota: "Articulación en pirámide invertida (Sautu, 2005)",
        porQue: "Permite estudiar la factibilidad sin determinismos rígidos, integrando normas, cultura institucional y agencia de los actores."
      },
      puntosClave: [],
      metadatosFooter: "Eje 2 • De la Garza Toledo (2001) • Matus (1993) • Sautu (2005)",
      escena3D: "anim_29",
      guionOrador: "[Posicionamiento epistemológico • 0:45 min]\nPara abrir el Eje 2 definimos nuestro posicionamiento epistemológico desde la epistemología crítica latinoamericana de Enrique de la Garza Toledo (2001). Para el autor, la teoría opera como una «configuración abierta»: no como un dogma cerrado, sino como una red flexible que lee a la universidad como un proceso abierto construido por sujetos reflexivos.\n\n[Espacio de posibilidades viables y pirámide invertida]\nDesde aquí, estudiar la factibilidad en 2027 implica reconstruir en el presente el «espacio de posibilidades para la acción viable» —articulado con Carlos Matus (1993) y organizado conceptualmente en pirámide invertida según Ruth Sautu (2005).\n\n[¿Por qué lo elegimos?]\nElegimos este posicionamiento porque nos permite analizar la factibilidad sin determinismos rígidos, integrando en un mismo plano las normas vigentes, la cultura institucional del CURZAS y la agencia real de docentes, estudiantes y conducción."
    },

    {
      id: "slide_eje2_longo",
      numero: 9,
      tiempoSugerido: "1:05 min",
      bloque: "EJE 2 · ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO",
      esquema: "2.1 Enfoque Neural: Francisco Longo (1:05)",
      badge: "Enfoque Neural • Empleo Público",
      titulo: "Gestión Estratégica del Rendimiento",
      subtitulo: "Francisco Longo (2006) • Subsistema central articulado en red",
      longoVisual: {
        contraste: {
          desde: "Modelo burocrático-weberiano tradicional",
          desdeSub: "Apego formal rígido",
          hacia: "Enfoque de mérito y flexibilidad",
          haciaSub: "Gestión estratégica del valor público"
        },
        centro: {
          kicker: "Subsistema Central",
          titulo: "Gestión del Rendimiento",
          detalle: "Evaluación formativa 360°"
        },
        satelites: [
          {
            id: "organizacion",
            titulo: "Organización del Trabajo",
            detalle: "Aulas híbridas y 10 Nodos · Res. CD-CURZA N° 196/2022"
          },
          {
            id: "desarrollo",
            titulo: "Gestión del Desarrollo",
            detalle: "Programa Anual de Capacitación Docente · Art. 76 Estatuto UNCo"
          },
          {
            id: "relaciones",
            titulo: "Gestión de las Relaciones Humanas y Sociales",
            detalle: "Clima, confidencialidad y acuerdo paritario ADUNC · CCT Dec. PEN N° 1246/2015"
          }
        ],
        porQue: "Aporta un marco propio del empleo público que vincula evaluación con capacitación y diálogo gremial, evitando trasplantes empresariales acríticos."
      },
      puntosClave: [],
      metadatosFooter: "Eje 2 • Francisco Longo (2006) • Enfoque Neural",
      escena3D: "anim_12",
      diagramaSVG: "assets/Sistemas-longo.svg",
      guionOrador: "[Enfoque neural: Francisco Longo • 1:05 min]\nSobre esa base apoyamos nuestro marco central: el modelo de gestión estratégica de personas en el sector público de Francisco Longo (2006), que propone transitar desde el modelo burocrático-weberiano tradicional hacia un enfoque de mérito y flexibilidad.\n\n[Esquema radial en torno al Rendimiento 360°]\nEn el centro del dispositivo ubicamos al Subsistema de Gestión del Rendimiento —entendido como evaluación formativa 360°—, conectado de forma inseparable con tres subsistemas del CURZAS:\n1. Organización del Trabajo, para capturar la realidad de las aulas híbridas y los 10 Nodos bajo la Res. CD-CURZA N° 196/2022.\n2. Gestión del Desarrollo, articulando las devoluciones con el Programa Anual de Capacitación Docente del Art. 76 del Estatuto UNCo.\n3. Gestión de las Relaciones Humanas y Sociales, clave para cuidar el clima, la confidencialidad y el acuerdo paritario con ADUNC bajo el CCT Dec. PEN N° 1246/2015.\n\n[¿Por qué lo elegimos?]\nElegimos a Longo porque aporta un marco propio del empleo público que enlaza evaluación con capacitación y diálogo gremial, evitando trasplantes empresariales acríticos a la universidad pública."
    },

    {
      id: "slide_eje2_poligobernanza",
      numero: 10,
      tiempoSugerido: "0:55 min",
      bloque: "EJE 2 · ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO",
      esquema: "2.1 Autores Complementarios (0:55)",
      badge: "Autores Complementarios",
      titulo: "Poligobernanza, Estado y Poder Compartido",
      subtitulo: "Desarrollo individual de categorías situadas en la universidad pública cogobernada",
      autoresComplementarios: [
        {
          id: "cao-blutman",
          nombre: "Horacio Cao y Gustavo Blutman (2021, 2023)",
          etiqueta: "Poligobernanza",
          temario: "Poligobernanza, «Estado plataforma» y gestión de la complejidad situada en los 4 planos decisionales del CURZAS-UNCo: Macro (UNCo), Meso (CURZAS/Dpto.), Micro (10 Nodos Territoriales) y Transversal paritario (ADUNC).",
          porQueLabel: "¿Por qué los elegimos?",
          porQue: "Permiten pensar una evaluación en red adaptada a la descentralización territorial y las cursadas híbridas, superando encuestas estandarizadas genéricas."
        },
        {
          id: "oszlak",
          nombre: "Oscar Oszlak (2020)",
          etiqueta: "Era Digital",
          temario: "Capacidades estatales en la era digital: uso de plataformas institucionales (Moodle y SIU-Guaraní) para la gestión de personas y el anonimato técnico, sin fiscalización tecno-burocrática.",
          porQueLabel: "¿Por qué lo elegimos?",
          porQue: "Fundamenta cómo aprovechar la infraestructura digital ya existente en la universidad para garantizar confidencialidad y procesamiento útil."
        },
        {
          id: "matus",
          nombre: "Carlos Matus (1993)",
          etiqueta: "Poder Compartido",
          temario: "Planificación Estratégica Situacional, poder compartido y viabilidad en arenas donde ningún actor concentra el monopolio decisional.",
          porQueLabel: "¿Por qué lo elegimos?",
          porQue: "Explica por qué la propuesta solo es viable si se conciertan variables de control compartido (voluntariedad, anonimato y desvinculación de legajos sumativos)."
        }
      ],
      puntosClave: [],
      metadatosFooter: "Eje 2 • Cao y Blutman (2021, 2023) • Oszlak (2020) • Matus (1993)",
      escena3D: "anim_15",
      diagramaSVG: "assets/modelo_360.svg",
      guionOrador: "[Desarrollo individual de autores complementarios • 0:55 min]\nPara adaptar el esquema de Longo a la realidad institucional de la UNCo, incorporamos tres aportes complementarios bien diferenciados:\n\n[1. Horacio Cao y Gustavo Blutman (2021, 2023)]\nSus nociones de poligobernanza y «Estado plataforma» nos permiten mapear la complejidad del CURZAS en cuatro planos decisionales —Macro en UNCo, Meso en CURZAS/Dpto., Micro en los 10 Nodos Territoriales y Transversal en la paritaria con ADUNC—, superando encuestas genéricas para pensar una evaluación en red adaptada a las cursadas híbridas.\n\n[2. Oscar Oszlak (2020)]\nDesde las capacidades estatales en la era digital, Oszlak fundamenta cómo aprovechar la infraestructura institucional existente —Moodle y SIU-Guaraní— para gestionar información útil y asegurar anonimato técnico, evitando cualquier deriva tecno-burocrática.\n\n[3. Carlos Matus (1993)]\nPor último, su Planificación Estratégica Situacional advierte que en arenas de poder compartido ningún actor monopoliza la decisión: la propuesta solo será viable si se conciertan voluntariedad, anonimato y total desvinculación de legajos sumativos."
    },

    {
      id: "slide_eje2_estado_arte",
      numero: 11,
      tiempoSugerido: "1:15 min",
      bloque: "EJE 2 · ESTADO DE LA CUESTIÓN Y MARCO TEÓRICO",
      esquema: "2.2 Estado del Arte en 3 Ámbitos (1:15)",
      badge: "Estado del Arte • 3 Ámbitos",
      titulo: "Estado del Arte y Vacancia de Investigación",
      subtitulo: "Antecedentes empíricos y normativos en tres escalas articuladas",
      estadoArteData: {
        ambitos: [
          {
            id: "internacional",
            titulo: "Internacional",
            fuentes: "Sifuentes Ocegueda et al. (2016) • Obando Freire et al. (2014) • Reyes & Díaz (2020) • Alvarado & Morales (2019)",
            sintesis: "Experiencias 360° en educación superior pública de México y Cuba (encuestas, portafolios y análisis mixtos).",
            porQueLabel: "¿Por qué los elegimos?",
            porQue: "Muestran >85 % de aceptación con anonimato, mitigación de sesgos digitales y resguardo no punitivo."
          },
          {
            id: "nacional",
            titulo: "Nacional",
            fuentes: "Marquina (2012) • Pérez et al. (2021)",
            sintesis: "Tensiones de la profesión académica en universidades públicas argentinas y evaluación 360° de tutorías presenciales y virtuales.",
            porQueLabel: "¿Por qué los elegimos?",
            porQue: "Exponen la brecha entre evaluación de investigación y grado, validando el 360° en tutorías híbridas."
          },
          {
            id: "local",
            titulo: "Local / Institucional",
            fuentes: "Estatuto UNCo (Ord. CS N° 0988/2025, Arts. 74–76) • Ord. CS N° 0910/1997 • CCT Dec. N° 1246/2015 • Res. CD-CURZA N° 196/2022",
            sintesis: "Informes anuales, permanencia cuatrienal, capacitación docente, estabilidad paritaria y red de 10 Nodos híbridos.",
            porQueLabel: "¿Por qué lo elegimos?",
            porQue: "Delimitan el encuadre jurídico, gremial y territorial concreto para insertar el 360° sin vulnerar estabilidad."
          }
        ],
        vacancia: "Ausencia de estudios sobre factibilidad integral de un modelo 360° formativo en una universidad pública patagónica cogobernada y con red territorial híbrida.",
        notaPie: "Selección preliminar sujeta a posibles cambios o agregados."
      },
      puntosClave: [],
      metadatosFooter: "Eje 2 • Antecedentes en 3 Ámbitos • Revisión Abierta 2027",
      escena3D: "anim_17",
      notasAmbitos: [
        {
          id: "internacional",
          ambito: "Ámbito Internacional",
          referentes: "Sifuentes Ocegueda et al. (2016) · Obando Freire et al. (2014) · Reyes & Díaz (2020) · Alvarado & Morales (2019)",
          queTratan: "Evalúan experiencias 360° en educación superior pública de México y Cuba mediante encuestas, portafolios electrónicos y análisis mixtos sobre legitimidad docente.",
          porQue: "Demuestran que el 360° logra >85% de aceptación cuando garantiza anonimato, mitiga sesgos en entornos digitales y cuenta con resguardo gremial no punitivo."
        },
        {
          id: "nacional",
          ambito: "Ámbito Nacional (Argentina)",
          referentes: "Marquina (2012) · Pérez et al. (2021)",
          queTratan: "Analizan las tensiones de la profesión académica en universidades públicas argentinas y la evaluación 360° de tutorías presenciales y virtuales.",
          porQue: "Evidencian la brecha entre la evaluación de investigación/posgrado y la didáctica de grado, y validan el 360° para competencias tutoriales en modalidad híbrida."
        },
        {
          id: "local",
          ambito: "Ámbito Local / Institucional (UNCo y CURZAS)",
          referentes: "Estatuto UNCo (Ord. CS N° 0988/2025, Arts. 74–76) · Ord. CS N° 0910/1997 · CCT Dec. N° 1246/2015 · Res. CD-CURZA N° 196/2022",
          queTratan: "Regulan los informes anuales, las evaluaciones cuatrienales de permanencia, la capacitación docente, la estabilidad laboral paritaria y la red híbrida de 10 Nodos.",
          porQue: "Delimitan el marco jurídico, gremial y territorial concreto donde debe insertarse el circuito formativo sin vulnerar la estabilidad laboral."
        }
      ],
      guionOrador: "[Cierre del Eje 2 • Estado del arte en 3 ámbitos • 1:15 min]\nPara cerrar el Eje 2 organizamos los antecedentes en tres ámbitos complementarios —internacional, nacional y local-institucional—, manteniendo esta selección preliminar abierta a ampliaciones en 2027.\n\n{{AMBITOS}}\n\n[Síntesis de vacancia de investigación]\nAl cruzar los tres niveles identificamos la vacancia que da sentido al proyecto: aunque disponemos de evidencia latinoamericana sobre dispositivos 360°, diagnósticos nacionales sobre la profesión académica y un marco normativo específico en la UNCo, aún no existen estudios sobre la factibilidad integral de un modelo 360° formativo en una universidad pública patagónica cogobernada y con red territorial híbrida."
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
      metadatosFooter: "Eje 3 • Sampieri • Flyvbjerg • Retamozo (2016)",
      escena3D: "anim_19",
      guionOrador: "[Cómo trabajaríamos en 2027 • 1:10 min]\nEn la tercera parte traducimos la vacancia del Eje 2 en un diseño metodológico ejecutable. Siguiendo a Hernández-Sampieri, Flyvbjerg y el criterio de Martín Retamozo (2016) sobre la viabilidad del diseño —incorporar la complejidad del caso sin volver inabarcable el estudio—, trabajaremos con un estudio de caso mixto de predominio cualitativo (CUAL → cuan).\n\nPartiendo de una estimación aproximada de 38 docentes, 130 estudiantes avanzados y 5 referentes entre gestión y gremio —cifras que confirmaremos con censo real en mayo de 2027—, planeamos 9 entrevistas (a docentes de Viedma y Nodos, autoridades, un representante de ADUNC y estudiantes) hasta saturación teórica, más ~45 cuestionarios breves y voluntarios."
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
      id: "slide_11",
      numero: 14,
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

    {
      id: "slide_10",
      numero: 15,
      tiempoSugerido: "1:10 min",
      bloque: "EJE 3 · METODOLOGÍA",
      esquema: "3.4–3.5 Cronograma (7 Meses) y Viabilidad del Estudio (1:10)",
      badge: "Viabilidad del Estudio • Costo $0 CURZAS",
      titulo: "Tiempos (7 Meses) y Viabilidad del Estudio",
      subtitulo: "Mayo–noviembre 2027 • Ejecutabilidad del diseño TFG (Res. 266/23; Retamozo, 2016)",
      puntosClave: [
        "<strong>Cronograma (May–Nov 2027):</strong> Avales y piloto (May), campo (Jun–Jul), análisis (Ago) y entrega TFG (Sep–Nov)",
        "<strong>Aptitudes, institución y acceso:</strong> Formación RR. HH., Moodle/SIU del CURZAS y aval departamental (Anexo III)",
        "<strong>Recursos y dirección ($0 CURZAS):</strong> $160.000 propios, software libre, Nodos vía remota y Director/a (Res. 266/23)"
      ],
      metadatosFooter: "Eje 3 • Retamozo (2016) • Tablas 3 y 4 (15–20 h/sem)",
      escena3D: "anim_21",
      guionOrador: "[Cronograma y viabilidad operativa del proyecto • 1:10 min]\nTodo el trabajo de campo llevaría siete meses continuos durante 2027: en mayo pediríamos avales y haríamos la prueba piloto; en junio y julio las entrevistas y el sondeo en Viedma y Nodos; en agosto la triangulación; y de septiembre a noviembre la redacción y entrega formal.\n\n[Deslinde clave: qué investigamos vs. por qué podemos investigarlo]\nAclaro aquí una distinción fundamental: una cosa es la factibilidad del modelo 360° —que es nuestra pregunta abierta a responder recién tras el campo de 2027— y otra distinta la viabilidad operativa de este proyecto de investigación (Res. 266/23). Para esta segunda nos apoyamos en Martín Retamozo (2016, sección «10. Factibilidad») y sus 5 condiciones de ejecución:\n1) Aptitudes personales: formación técnica en RR. HH. y manejo de herramientas cuali-cuantitativas.\n2) Aspectos institucionales: infraestructura del CURZAS, Moodle y SIU-Guaraní.\n3) Acceso al campo: nota formal de aval departamental (Anexo III) y vínculo situado con Viedma y los 10 Nodos.\n4) Recursos financieros: $160.000 totalmente autofinanciados, software libre y trabajo remoto con Nodos (costo $0 institucional).\n5) Dirección de TFG: a designar conforme al Art. 5° de la Res. CD-CURZA 266/23."
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
        "<strong>Respaldo formal:</strong> 36 referencias APA 7 y Cronograma en 6 etapas"
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
      badge: "36 Fuentes APA 7",
      titulo: "Respaldo Bibliográfico",
      subtitulo: "Fuentes del Proyecto TFG organizadas según cada sección",
      puntosClave: [
        "<strong>Eje 1 · El Problema (13):</strong> Longo, Oszlak, Matus, Sautu, Wainerman, Lepsinger y Lucia, Obando Freire, Sifuentes • <em>Normas:</em> Estatuto UNCo (0988/25), Ord. 0910/97, CCT 1246/15, Res. 196/22 y 266/23",
        "<strong>Eje 2a · Marco Teórico (14):</strong> De la Garza, Sautu, Longo, Chiavenato, Lepsinger y Lucia, Obando Freire, Sifuentes, Aguilar, Cao y Blutman, Matus, Oszlak, Ley 24.521, Res. 196/22",
        "<strong>Eje 2b · Estado del Arte (13):</strong> Torraco, Jiménez Becerra • <em>Int.:</em> Sifuentes, Obando Freire, Hernández-Villafaña, Vázquez Cid • <em>Nac./Local:</em> Chiroleu, Marquina, Cariaga y normativa UNCo–CURZAS",
        "<strong>Eje 3 · Metodología (17):</strong> Hernández-Sampieri, Retamozo, Flyvbjerg, Giménez, Sautu, Wainerman, Glaser y Strauss, Bourdieu, Guber, Bardin, Denzin, Ley 25.326 • <em>Matriz 5D:</em> Longo, Oszlak, Aguilar, Cao y Blutman, Matus"
      ],
      metadatosFooter: "36 fuentes únicas en APA 7 • Detalle completo en Panel Respaldo (Tecla M)",
      escena3D: "anim_27",
      abrirTabDrawer: "bibliografia",
      guionOrador: "[Fuentes • 0:10 min]\nTodas las referencias normativas y académicas del proyecto final —las 36 fuentes en formato APA 7 organizadas exactamente por cada sección del estudio— quedan disponibles para consulta en el panel de Respaldo. Muchas gracias."
    }
  ]
};

// Exportación global para el navegador
if (typeof window !== "undefined") {
  window.PRESENTACION_DATA = PRESENTACION_DATA;
}
