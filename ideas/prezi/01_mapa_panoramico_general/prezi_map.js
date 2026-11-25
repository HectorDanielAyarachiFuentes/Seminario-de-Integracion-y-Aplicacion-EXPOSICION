/**
 * ============================================================================
 * CONTROLADOR ESPACIAL PREZI (PreziController)
 * Jerarquía interactiva de 3 niveles sobre lienzo vectorial/DOM:
 *   Nivel 0: Vista General (Constelación de los 5 Bloques desde un área amplia)
 *   Nivel 1: Zoom al Planeta Temático (Bloque + órbita circular de sus Filminas)
 *   Nivel 2: Zoom al Subtema (Apertura de la Filmina + Escultura 3D)
 * Incluye transición automática ("achique y vuelo") al cambiar entre bloques.
 * ============================================================================
 */
class PreziController {
  constructor(app) {
    this.app = app;

    // Dimensiones lógicas del lienzo espacial Prezi
    this.WORLD_W = 1600;
    this.WORLD_H = 960;
    this.HUB = { x: 800, y: 455, r: 102 };
    this.PLANET_RADIUS = 86;
    this.SUBTOPIC_RADIUS = 37;

    // Estado de cámara y jerarquía
    this.isOpen = false;
    this.isFlying = false;
    this.autoZoomEnabled = true;
    this.level = 0; // 0 = Vista General, 1 = Zoom a Planeta
    this.focusedSectionIndex = null;
    this.overviewScale = 0.72;
    this.cam = { x: 0, y: 0, scale: 0.72 };
    this.flightTimeline = null;
    this.flightResolve = null;

    // Datos estructurados de bloques y filminas
    this.planets = [];
    this.subtopics = [];
    this.slideToSubtopic = new Map();

    // Referencias DOM
    this.overlay = document.getElementById("prezi-overlay");
    this.viewport = document.getElementById("prezi-viewport");
    this.world = document.getElementById("prezi-world");
    this.svgLayer = document.getElementById("prezi-svg-layer");
    this.nodesLayer = document.getElementById("prezi-nodes-layer");
    this.flightBannerText = document.getElementById("prezi-flight-text");

    this.crumbOverview = document.getElementById("prezi-crumb-overview");
    this.crumbSep1 = document.getElementById("prezi-crumb-sep-1");
    this.crumbPlanet = document.getElementById("prezi-crumb-planet");
    this.crumbSep2 = document.getElementById("prezi-crumb-sep-2");
    this.crumbSlide = document.getElementById("prezi-crumb-slide");

    this.btnClose = document.getElementById("prezi-close-btn");
    this.btnOverview = document.getElementById("prezi-btn-overview");
    this.btnZoomOut = document.getElementById("prezi-btn-zoom-out");
    this.btnZoomIn = document.getElementById("prezi-btn-zoom-in");
    this.btnPrev = document.getElementById("prezi-btn-prev");
    this.btnNext = document.getElementById("prezi-btn-next");
    this.btnEnterSlide = document.getElementById("prezi-btn-enter-slide");
    this.btnAutoZoom = document.getElementById("prezi-toggle-autozoom");
    this.zoomReadout = document.getElementById("prezi-zoom-readout");

    this.buildHierarchy();
    if (this.overlay && this.viewport && this.world) {
      this.renderCanvasDOM();
      this.bindEvents();
    }
  }

  /**
   * Construye la jerarquía espacial leyendo dinámicamente las secciones
   * oficiales de app.getDefenseSections() y app.data.slides.
   */
  buildHierarchy() {
    const sections =
      this.app && typeof this.app.getDefenseSections === "function"
        ? this.app.getDefenseSections()
        : [];
    const slides = (this.app && this.app.data && this.app.data.slides) || [];

    // Anclajes en sentido horario alrededor del centro (800, 455),
    // diseñados para que cada planeta abra sus satélites hacia la derecha sin colisiones.
    const anchorSpecs = {
      apertura: {
        x: 255,
        y: 210,
        theme: "apertura",
        kicker: "APERTURA",
        desc: "Título, institución y encuadre inicial"
      },
      eje1: {
        x: 1120,
        y: 195,
        theme: "bloque1",
        kicker: "BLOQUE 1",
        desc: "Problematización, contexto y objetivos"
      },
      eje2: {
        x: 1140,
        y: 675,
        theme: "bloque2",
        kicker: "BLOQUE 2",
        desc: "Marco teórico, antecedentes y conceptos"
      },
      eje3: {
        x: 525,
        y: 705,
        theme: "bloque3",
        kicker: "BLOQUE 3",
        desc: "Diseño metodológico y resguardo ético"
      },
      cierre: {
        x: 165,
        y: 565,
        theme: "cierre",
        kicker: "CIERRE",
        desc: "Impacto esperado, citas y respaldo"
      }
    };

    this.planets = [];
    this.subtopics = [];
    this.slideToSubtopic.clear();

    sections.forEach((sec, secIdx) => {
      const fallbackAngle = ((secIdx / Math.max(1, sections.length)) * Math.PI * 2) - Math.PI * 0.75;
      const spec = anchorSpecs[sec.id] || {
        x: Math.round(this.HUB.x + Math.cos(fallbackAngle) * 440),
        y: Math.round(this.HUB.y + Math.sin(fallbackAngle) * 280),
        theme: "bloque1",
        kicker: sec.shortLabel || sec.code || `BLOQUE ${secIdx + 1}`,
        desc: sec.title || ""
      };

      const startIdx = sec.range[0];
      const endIdx = sec.range[1];
      const secSlides = [];
      let totalSeconds = 0;

      for (let i = startIdx; i <= endIdx && i < slides.length; i++) {
        const secs = this.parseDurationSeconds(slides[i].tiempoSugerido);
        secSlides.push({ slideIndex: i, slide: slides[i], seconds: secs });
        totalSeconds += secs;
      }

      const planet = {
        sectionIndex: secIdx,
        id: sec.id,
        title: sec.title,
        shortTitle: this.formatPlanetTitle(sec),
        kicker: spec.kicker,
        desc: spec.desc,
        theme: spec.theme,
        x: spec.x,
        y: spec.y,
        r: this.PLANET_RADIUS,
        range: sec.range,
        totalSeconds,
        timeFormatted: this.formatDuration(totalSeconds),
        subtopics: [],
        orbitRadius: secSlides.length >= 4 ? 160 : secSlides.length === 3 ? 152 : 148
      };

      const count = secSlides.length;
      const maxSpanDeg = count >= 4 ? 54 : count === 3 ? 44 : count === 2 ? 26 : 0;

      secSlides.forEach((item, subIdx) => {
        let angleDeg = 0;
        if (count > 1) {
          angleDeg = -maxSpanDeg + (subIdx / (count - 1)) * (maxSpanDeg * 2);
        }
        const angleRad = (angleDeg * Math.PI) / 180;
        const sx = Math.round(planet.x + Math.cos(angleRad) * planet.orbitRadius);
        const sy = Math.round(planet.y + Math.sin(angleRad) * planet.orbitRadius);

        const subNode = {
          slideIndex: item.slideIndex,
          slideNumber: item.slide.numero || item.slideIndex + 1,
          sectionIndex: secIdx,
          theme: spec.theme,
          x: sx,
          y: sy,
          r: this.SUBTOPIC_RADIUS,
          shortLabel: this.formatSubtopicLabel(item.slide),
          fullTitle: item.slide.titulo || "",
          seconds: item.seconds,
          timeFormatted: this.formatDuration(item.seconds)
        };

        planet.subtopics.push(subNode);
        this.subtopics.push(subNode);
        this.slideToSubtopic.set(item.slideIndex, subNode);
      });

      planet.clusterBox = this.computeClusterBox(planet);
      this.planets.push(planet);
    });
  }

  /**
   * Calcula la caja envolvente del planeta + todos sus satélites para centrar
   * el Nivel 1 de Prezi sin recortar bordes.
   */
  computeClusterBox(planet) {
    let minX = planet.x - planet.r;
    let maxX = planet.x + planet.r;
    let minY = planet.y - planet.r;
    let maxY = planet.y + planet.r;

    planet.subtopics.forEach((sub) => {
      minX = Math.min(minX, sub.x - sub.r);
      maxX = Math.max(maxX, sub.x + sub.r);
      minY = Math.min(minY, sub.y - sub.r);
      maxY = Math.max(maxY, sub.y + sub.r);
    });

    const pad = 34;
    return {
      minX: minX - pad,
      maxX: maxX + pad,
      minY: minY - pad,
      maxY: maxY + pad
    };
  }

  formatPlanetTitle(sec) {
    const map = {
      apertura: "Evaluación 360°",
      eje1: "Problematización",
      eje2: "Marco y Conceptos",
      eje3: "Metodología",
      cierre: "Cierre y Respaldo"
    };
    return map[sec.id] || sec.title || sec.code || "Bloque";
  }

  formatSubtopicLabel(slide) {
    if (!slide) return "";
    if (slide.subtitulo && slide.numero === 1) return "Encuadre Inicial";
    const raw = String(slide.titulo || "")
      .split(":")[0]
      .replace(/\s*\([^)]*\)/g, "")
      .trim();
    const words = raw.split(/\s+/);
    if (words.length <= 3 && raw.length <= 26) return raw;
    const candidate = words.slice(0, 3).join(" ");
    return candidate.length > 26 ? `${candidate.slice(0, 24)}…` : candidate;
  }

  parseDurationSeconds(value) {
    if (typeof value === "number" && Number.isFinite(value)) {
      return Math.max(0, Math.round(value));
    }
    const str = String(value || "").trim();
    const mmss = str.match(/(\d+)\s*:\s*(\d+)/);
    if (mmss) {
      return parseInt(mmss[1], 10) * 60 + parseInt(mmss[2], 10);
    }
    const numeric = parseFloat(str);
    return Number.isFinite(numeric) ? Math.max(0, Math.round(numeric * 60)) : 0;
  }

  formatDuration(seconds) {
    const safe = Math.max(0, Math.round(seconds || 0));
    const mins = Math.floor(safe / 60);
    const secs = safe % 60;
    return `${mins}:${String(secs).padStart(2, "0")}`;
  }

  /**
   * Renderiza el Núcleo Central, líneas orbitales SVG, Planetas y Subtemas.
   */
  renderCanvasDOM() {
    if (!this.svgLayer || !this.nodesLayer) return;

    this.svgLayer.innerHTML = "";
    this.nodesLayer.innerHTML = "";

    const svgNS = "http://www.w3.org/2000/svg";
    const makeSvg = (tag, attrs) => {
      const el = document.createElementNS(svgNS, tag);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, String(v)));
      return el;
    };

    // 1. Arco secuencial conectando los 5 planetas en el orden de exposición
    for (let i = 0; i < this.planets.length - 1; i++) {
      const a = this.planets[i];
      const b = this.planets[i + 1];
      const midX = (a.x + b.x) / 2;
      const midY = (a.y + b.y) / 2;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const ctrlX = midX - dy * 0.12;
      const ctrlY = midY + dx * 0.12;

      const arc = makeSvg("path", {
        d: `M ${a.x} ${a.y} Q ${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${b.x} ${b.y}`,
        class: "prezi-sequence-arc",
        "data-arc-from": a.sectionIndex,
        "data-arc-to": b.sectionIndex
      });
      this.svgLayer.appendChild(arc);
    }

    // 2. Rayos desde el Núcleo Central hacia cada Planeta + órbitas de satélites
    this.planets.forEach((planet) => {
      const midX = (this.HUB.x + planet.x) / 2;
      const midY = (this.HUB.y + planet.y) / 2;
      const dx = planet.x - this.HUB.x;
      const dy = planet.y - this.HUB.y;
      const ctrlX = midX - dy * 0.1;
      const ctrlY = midY + dx * 0.1;

      const spoke = makeSvg("path", {
        d: `M ${this.HUB.x} ${this.HUB.y} Q ${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${planet.x} ${planet.y}`,
        class: "prezi-spoke-line",
        "data-section-edge": planet.sectionIndex
      });
      this.svgLayer.appendChild(spoke);

      if (planet.subtopics.length > 0) {
        const ring = makeSvg("circle", {
          cx: planet.x,
          cy: planet.y,
          r: planet.orbitRadius,
          class: "prezi-orbit-ring",
          "data-section-edge": planet.sectionIndex
        });
        this.svgLayer.appendChild(ring);
      }

      planet.subtopics.forEach((sub) => {
        const subLine = makeSvg("line", {
          x1: planet.x,
          y1: planet.y,
          x2: sub.x,
          y2: sub.y,
          class: "prezi-subspoke-line",
          "data-section-edge": planet.sectionIndex
        });
        this.svgLayer.appendChild(subLine);

        const stepDot = makeSvg("circle", {
          cx: Math.round((planet.x + sub.x) * 0.5),
          cy: Math.round((planet.y + sub.y) * 0.5),
          r: 2.5,
          class: "prezi-step-dot"
        });
        this.svgLayer.appendChild(stepDot);
      });
    });

    // 3. Núcleo Central
    const hubEl = document.createElement("button");
    hubEl.type = "button";
    hubEl.className = "prezi-hub";
    hubEl.style.left = `${this.HUB.x}px`;
    hubEl.style.top = `${this.HUB.y}px`;
    hubEl.title = "Volver a la Vista General de toda la defensa";
    hubEl.innerHTML = `
      <span class="prezi-hub-eyebrow">CURZAS • UNCo</span>
      <h2 class="prezi-hub-title">Defensa 360°</h2>
      <span class="prezi-hub-meta">${this.app.totalSlides} Filminas · 15:00 min</span>
    `;
    hubEl.addEventListener("click", (e) => {
      e.stopPropagation();
      this.zoomToOverview(true);
    });
    this.nodesLayer.appendChild(hubEl);

    // 4. Planetas y Subtemas DOM
    this.planetEls = [];
    this.subtopicEls = new Map();

    this.planets.forEach((planet) => {
      const pEl = document.createElement("button");
      pEl.type = "button";
      pEl.className = "prezi-planet";
      pEl.dataset.theme = planet.theme;
      pEl.dataset.sectionIndex = String(planet.sectionIndex);
      pEl.style.left = `${planet.x}px`;
      pEl.style.top = `${planet.y}px`;
      pEl.title = `${planet.title} (${planet.subtopics.length} filminas · ${planet.timeFormatted} min)`;
      pEl.innerHTML = `
        <span class="prezi-planet-kicker">${planet.kicker}</span>
        <h3 class="prezi-planet-title">${planet.shortTitle}</h3>
        <p class="prezi-planet-desc">${planet.desc}</p>
        <span class="prezi-planet-meta">${planet.subtopics.length} fil. · ${planet.timeFormatted}</span>
      `;
      pEl.addEventListener("click", (e) => {
        e.stopPropagation();
        this.focusPlanet(planet.sectionIndex, true);
      });
      this.nodesLayer.appendChild(pEl);
      this.planetEls.push(pEl);

      planet.subtopics.forEach((sub) => {
        const sEl = document.createElement("button");
        sEl.type = "button";
        sEl.className = "prezi-subtopic";
        sEl.dataset.theme = sub.theme;
        sEl.dataset.slideIndex = String(sub.slideIndex);
        sEl.dataset.sectionIndex = String(sub.sectionIndex);
        sEl.style.left = `${sub.x}px`;
        sEl.style.top = `${sub.y}px`;
        sEl.title = `Filmina ${sub.slideNumber}: ${sub.fullTitle} (${sub.timeFormatted} min)`;
        sEl.innerHTML = `
          <span class="prezi-sub-num">F${sub.slideNumber}</span>
          <span class="prezi-sub-label">${sub.shortLabel}</span>
          <span class="prezi-sub-time">${sub.timeFormatted}</span>
        `;
        sEl.addEventListener("click", (e) => {
          e.stopPropagation();
          this.drillIntoSlide(sub.slideIndex);
        });
        this.nodesLayer.appendChild(sEl);
        this.subtopicEls.set(sub.slideIndex, sEl);
      });
    });

    this.syncActiveState(this.app.currentSlideIndex || 0);
  }

  /**
   * Eventos del lienzo interactivo: pan con arrastre, zoom con rueda,
   * barra inferior y breadcrumbs jerárquicos.
   */
  bindEvents() {
    let isPointerDown = false;
    let moved = false;
    let startX = 0;
    let startY = 0;
    let camStartX = 0;
    let camStartY = 0;

    this.viewport.addEventListener("pointerdown", (e) => {
      if (this.isFlying) return;
      if (e.target.closest("button")) return;
      isPointerDown = true;
      moved = false;
      startX = e.clientX;
      startY = e.clientY;
      camStartX = this.cam.x;
      camStartY = this.cam.y;
      this.viewport.classList.add("is-panning");
      if (window.gsap) window.gsap.killTweensOf(this.cam);
    });

    window.addEventListener("pointermove", (e) => {
      if (!isPointerDown || !this.isOpen) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
      this.cam.x = camStartX + dx;
      this.cam.y = camStartY + dy;
      this.applyTransform();
    });

    const endPan = (e) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      this.viewport.classList.remove("is-panning");
      // Clic limpio sobre fondo vacío regresa un nivel jerárquico (Back to Parent)
      const isBgClick =
        e && (e.target === this.viewport || e.target === this.world || e.target === this.nodesLayer);
      if (!moved && isBgClick && this.level > 0) {
        this.zoomToOverview(true);
      }
    };
    window.addEventListener("pointerup", endPan);
    window.addEventListener("pointercancel", endPan);

    this.viewport.addEventListener(
      "wheel",
      (e) => {
        if (!this.isOpen || this.isFlying) return;
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.14 : 0.88;
        const rect = this.viewport.getBoundingClientRect();
        this.zoomByFactor(factor, e.clientX - rect.left, e.clientY - rect.top);
      },
      { passive: false }
    );

    if (this.crumbOverview) {
      this.crumbOverview.addEventListener("click", () => this.zoomToOverview(true));
    }
    if (this.crumbPlanet) {
      this.crumbPlanet.addEventListener("click", () => {
        const targetSec =
          this.focusedSectionIndex !== null
            ? this.focusedSectionIndex
            : this.getSectionIndexForSlide(this.app.currentSlideIndex);
        this.focusPlanet(targetSec, true);
      });
    }
    if (this.crumbSlide) {
      this.crumbSlide.addEventListener("click", () => {
        this.drillIntoSlide(this.app.currentSlideIndex);
      });
    }

    if (this.btnClose) {
      this.btnClose.addEventListener("click", () => this.closeOverlay(true));
    }
    if (this.btnOverview) {
      this.btnOverview.addEventListener("click", () => this.zoomToOverview(true));
    }
    if (this.btnZoomOut) {
      this.btnZoomOut.addEventListener("click", () => this.zoomByFactor(0.8));
    }
    if (this.btnZoomIn) {
      this.btnZoomIn.addEventListener("click", () => this.zoomByFactor(1.25));
    }
    if (this.btnEnterSlide) {
      this.btnEnterSlide.addEventListener("click", () => {
        this.drillIntoSlide(this.app.currentSlideIndex);
      });
    }
    if (this.btnPrev) {
      this.btnPrev.addEventListener("click", () => this.stepInOverlay(-1));
    }
    if (this.btnNext) {
      this.btnNext.addEventListener("click", () => this.stepInOverlay(1));
    }

    if (this.btnAutoZoom) {
      this.btnAutoZoom.addEventListener("click", () => {
        this.autoZoomEnabled = !this.autoZoomEnabled;
        this.btnAutoZoom.setAttribute("aria-pressed", String(this.autoZoomEnabled));
      });
    }

    window.addEventListener("resize", () => {
      if (!this.isOpen || this.isFlying) return;
      if (this.level === 0) {
        this.zoomToOverview(false);
      } else if (this.focusedSectionIndex !== null) {
        this.focusPlanet(this.focusedSectionIndex, false);
      }
    });
  }

  /**
   * Cálculo de cámara para encuadrar una región del mundo (x, y, scale).
   */
  computeCameraForBox(box, padX = 56, padY = 48, minScale = 0.34, maxScale = 2.45) {
    const rect =
      this.viewport && typeof this.viewport.getBoundingClientRect === "function"
        ? this.viewport.getBoundingClientRect()
        : null;
    const vw = rect && rect.width > 120 ? rect.width : (typeof window !== "undefined" ? window.innerWidth : 1280);
    const vh = rect && rect.height > 120 ? rect.height : (typeof window !== "undefined" ? window.innerHeight - 64 : 660);

    const boxW = Math.max(80, box.maxX - box.minX);
    const boxH = Math.max(80, box.maxY - box.minY);
    const availW = Math.max(260, vw - padX * 2);
    const availH = Math.max(200, vh - padY * 2 - 44);

    const rawScale = Math.min(availW / boxW, availH / boxH);
    const scale = Math.max(minScale, Math.min(maxScale, rawScale));
    const cx = (box.minX + box.maxX) * 0.5;
    const cy = (box.minY + box.maxY) * 0.5;

    return {
      x: vw * 0.5 - cx * scale,
      y: (vh - 38) * 0.5 - cy * scale,
      scale
    };
  }

  computeOverviewCamera() {
    const cam = this.computeCameraForBox(
      { minX: 48, maxX: this.WORLD_W - 48, minY: 42, maxY: this.WORLD_H - 42 },
      36,
      26,
      0.34,
      1.35
    );
    this.overviewScale = cam.scale;
    return cam;
  }

  computeSubtopicCamera(slideIndex, zoomScale = 2.75) {
    const sub = this.slideToSubtopic.get(slideIndex);
    if (!sub) return this.computeOverviewCamera();
    const half = 68;
    return this.computeCameraForBox(
      { minX: sub.x - half, maxX: sub.x + half, minY: sub.y - half, maxY: sub.y + half },
      40,
      36,
      1.2,
      zoomScale
    );
  }

  applyTransform() {
    if (this.world) {
      this.world.style.transform = `translate3d(${this.cam.x.toFixed(2)}px, ${this.cam.y.toFixed(2)}px, 0) scale(${this.cam.scale.toFixed(4)})`;
    }
    if (this.zoomReadout) {
      const base = this.overviewScale || 1;
      const pct = Math.max(25, Math.round((this.cam.scale / base) * 100));
      this.zoomReadout.textContent = `${pct}%`;
    }
  }

  tweenCamera(targetCam, duration = 0.65, ease = "power3.inOut", onComplete = null) {
    if (!window.gsap || duration <= 0) {
      this.cam.x = targetCam.x;
      this.cam.y = targetCam.y;
      this.cam.scale = targetCam.scale;
      this.applyTransform();
      if (onComplete) onComplete();
      return null;
    }
    window.gsap.killTweensOf(this.cam);
    return window.gsap.to(this.cam, {
      x: targetCam.x,
      y: targetCam.y,
      scale: targetCam.scale,
      duration,
      ease,
      onUpdate: () => this.applyTransform(),
      onComplete
    });
  }

  zoomByFactor(factor, anchorX = null, anchorY = null) {
    const rect = this.viewport.getBoundingClientRect();
    const vw = rect.width || window.innerWidth;
    const vh = rect.height || window.innerHeight;
    const ax = anchorX !== null ? anchorX : vw * 0.5;
    const ay = anchorY !== null ? anchorY : vh * 0.5;

    const minS = Math.max(0.28, (this.overviewScale || 0.7) * 0.65);
    const maxS = 3.2;
    const nextScale = Math.max(minS, Math.min(maxS, this.cam.scale * factor));
    const worldX = (ax - this.cam.x) / this.cam.scale;
    const worldY = (ay - this.cam.y) / this.cam.scale;

    this.tweenCamera(
      {
        x: ax - worldX * nextScale,
        y: ay - worldY * nextScale,
        scale: nextScale
      },
      0.24,
      "power2.out"
    );
  }

  getSectionIndexForSlide(slideIndex) {
    const sub = this.slideToSubtopic.get(slideIndex);
    if (sub) return sub.sectionIndex;
    const match = this.planets.findIndex(
      (p) => slideIndex >= p.range[0] && slideIndex <= p.range[1]
    );
    return match >= 0 ? match : 0;
  }

  /**
   * Actualiza los estilos activos (planeta y filmina actual) y las migas de pan.
   */
  syncActiveState(slideIndex) {
    const activeSecIdx = this.getSectionIndexForSlide(slideIndex);
    const activePlanet = this.planets[activeSecIdx];
    const activeSub = this.slideToSubtopic.get(slideIndex);

    if (this.planetEls) {
      this.planetEls.forEach((el) => {
        const sIdx = Number(el.dataset.sectionIndex);
        el.classList.toggle("is-current-block", sIdx === activeSecIdx);
        el.classList.toggle(
          "is-focused",
          this.level === 1 && this.focusedSectionIndex === sIdx
        );
      });
    }

    if (this.subtopicEls) {
      this.subtopicEls.forEach((el, idx) => {
        const sIdx = Number(el.dataset.sectionIndex);
        el.classList.toggle("is-current-slide", idx === slideIndex);
        el.classList.toggle(
          "is-focused-child",
          this.level === 1 && this.focusedSectionIndex === sIdx
        );
      });
    }

    if (this.world) {
      this.world.classList.toggle(
        "has-planet-focus",
        this.level === 1 && this.focusedSectionIndex !== null
      );
    }

    if (this.svgLayer) {
      this.svgLayer.querySelectorAll("[data-section-edge]").forEach((edge) => {
        const sIdx = Number(edge.getAttribute("data-section-edge"));
        edge.classList.toggle("is-active", sIdx === activeSecIdx);
        edge.classList.toggle(
          "is-focused-edge",
          this.level === 1 && this.focusedSectionIndex === sIdx
        );
      });
    }

    // Breadcrumbs jerárquicos
    if (this.crumbOverview) {
      this.crumbOverview.classList.toggle("is-active", this.level === 0);
    }

    const shownPlanet =
      this.level === 1 && this.focusedSectionIndex !== null
        ? this.planets[this.focusedSectionIndex]
        : activePlanet;

    if (this.crumbPlanet && this.crumbSep1) {
      if (this.level >= 1 && shownPlanet) {
        this.crumbSep1.classList.remove("prezi-crumb-hidden");
        this.crumbPlanet.classList.remove("prezi-crumb-hidden");
        this.crumbPlanet.textContent = `${shownPlanet.kicker}: ${shownPlanet.shortTitle}`;
        this.crumbPlanet.classList.toggle("is-active", this.level === 1);
      } else {
        this.crumbSep1.classList.add("prezi-crumb-hidden");
        this.crumbPlanet.classList.add("prezi-crumb-hidden");
      }
    }

    if (this.crumbSlide && this.crumbSep2 && activeSub) {
      if (this.level >= 1) {
        this.crumbSep2.classList.remove("prezi-crumb-hidden");
        this.crumbSlide.classList.remove("prezi-crumb-hidden");
        this.crumbSlide.textContent = `F${activeSub.slideNumber} · ${activeSub.shortLabel}`;
      } else {
        this.crumbSep2.classList.add("prezi-crumb-hidden");
        this.crumbSlide.classList.add("prezi-crumb-hidden");
      }
    }
  }

  /**
   * Nivel 0: Abre el Mapa Panorámico completo ("achique" desde la filmina actual).
   */
  openOverview(animate = true) {
    if (!this.overlay) return;
    this.cancelFlight();

    this.app.closeDocModal();
    this.app.closeSvgModal();
    this.app.toggleNotes(false);
    this.app.toggleDrawer(false);
    this.app.toggleShortcuts(false);
    this.app.toggleSlidesIndex(false);

    const startCam = this.computeSubtopicCamera(this.app.currentSlideIndex, 2.35);
    this.isOpen = true;
    this.level = 0;
    this.focusedSectionIndex = null;

    this.overlay.classList.remove("is-flight-mode");
    this.overlay.classList.add("is-open");
    this.syncActiveState(this.app.currentSlideIndex);

    if (animate && window.gsap) {
      this.cam = { ...startCam };
      this.applyTransform();
      window.gsap.killTweensOf(this.overlay);
      window.gsap.fromTo(
        this.overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.24, ease: "power2.out" }
      );
      this.zoomToOverview(true);
    } else {
      this.overlay.style.opacity = "1";
      this.zoomToOverview(false);
    }
  }

  /**
   * Nivel 1: Abre el mapa directamente enfocado en el Planeta del bloque actual
   * (al hacer clic en la píldora del bloque dentro de la tarjeta de filmina).
   */
  openPlanetForSlide(slideIndex, animate = true) {
    if (!this.overlay) return;
    this.cancelFlight();

    const secIdx = this.getSectionIndexForSlide(slideIndex);
    const startCam = this.computeSubtopicCamera(slideIndex, 2.45);
    this.isOpen = true;
    this.overlay.classList.remove("is-flight-mode");
    this.overlay.classList.add("is-open");

    if (animate && window.gsap) {
      this.cam = { ...startCam };
      this.applyTransform();
      window.gsap.killTweensOf(this.overlay);
      window.gsap.fromTo(
        this.overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.22, ease: "power2.out" }
      );
      this.focusPlanet(secIdx, true);
    } else {
      this.overlay.style.opacity = "1";
      this.focusPlanet(secIdx, false);
    }
  }

  zoomToOverview(animate = true) {
    this.level = 0;
    this.focusedSectionIndex = null;
    this.syncActiveState(this.app.currentSlideIndex);
    const targetCam = this.computeOverviewCamera();
    this.tweenCamera(targetCam, animate ? 0.62 : 0, "power3.inOut");
  }

  focusPlanet(sectionIndex, animate = true) {
    const planet = this.planets[sectionIndex];
    if (!planet) return;
    this.level = 1;
    this.focusedSectionIndex = sectionIndex;
    this.syncActiveState(this.app.currentSlideIndex);

    const targetCam = this.computeCameraForBox(planet.clusterBox, 64, 54, 0.7, 2.25);
    this.tweenCamera(targetCam, animate ? 0.65 : 0, "power3.inOut");
  }

  stepInOverlay(direction) {
    if (this.level === 1 && this.focusedSectionIndex !== null) {
      const nextSec = Math.max(
        0,
        Math.min(this.planets.length - 1, this.focusedSectionIndex + direction)
      );
      this.focusPlanet(nextSec, true);
      return;
    }
    const targetIdx = Math.max(
      0,
      Math.min(this.app.totalSlides - 1, this.app.currentSlideIndex + direction)
    );
    const targetSec = this.getSectionIndexForSlide(targetIdx);
    this.app.goToSlide(targetIdx, { skipPreziFlight: true });
    this.syncActiveState(targetIdx);
    this.focusPlanet(targetSec, true);
  }

  /**
   * Nivel 2: Hace zoom profundo sobre un satélite y abre esa filmina + escena 3D.
   */
  drillIntoSlide(slideIndex) {
    const prevIdx = this.app.currentSlideIndex;
    const direction = slideIndex >= prevIdx ? 1 : -1;
    const subCam = this.computeSubtopicCamera(slideIndex, 2.85);

    const commitSlide = () => {
      if (slideIndex !== this.app.currentSlideIndex) {
        this.app.goToSlide(slideIndex, {
          skipPreziFlight: true,
          preziEntrance: true
        });
      } else if (window.gsap && this.app.slideCard) {
        window.gsap.fromTo(
          this.app.slideCard,
          { scale: 0.88, opacity: 0.35 },
          { scale: 1, opacity: 1, duration: 0.32, ease: "power3.out", clearProps: "transform" }
        );
      }
      this.syncActiveState(slideIndex);
    };

    this.syncActiveState(slideIndex);

    if (window.gsap && this.isOpen) {
      this.isFlying = true;
      window.gsap.killTweensOf(this.overlay);
      this.tweenCamera(subCam, 0.38, "power2.in", () => {
        window.gsap.to(this.overlay, {
          opacity: 0,
          duration: 0.16,
          ease: "power2.out",
          onComplete: () => {
            this.overlay.classList.remove("is-open");
            this.overlay.style.opacity = "";
            this.isOpen = false;
            this.isFlying = false;
            commitSlide();
          }
        });
      });
    } else {
      this.closeOverlay(false);
      commitSlide();
    }
  }

  closeOverlay(animate = true) {
    if (!this.overlay || !this.isOpen) return;
    this.cancelFlight();

    const finish = () => {
      this.overlay.classList.remove("is-open", "is-flight-mode");
      this.overlay.style.opacity = "";
      this.isOpen = false;
    };

    if (animate && window.gsap) {
      const targetCam = this.computeSubtopicCamera(this.app.currentSlideIndex, 2.35);
      this.tweenCamera(targetCam, 0.32, "power2.in");
      window.gsap.killTweensOf(this.overlay);
      window.gsap.to(this.overlay, {
        opacity: 0,
        duration: 0.22,
        delay: 0.12,
        ease: "power2.out",
        onComplete: finish
      });
    } else {
      finish();
    }
  }

  toggleOverlay() {
    if (this.isOpen) {
      this.closeOverlay(true);
    } else {
      this.openOverview(true);
    }
  }

  /**
   * Vuelo automático Prezi entre bloques ("achique" -> paneo orbital -> zoom in)
   * cuando el expositor avanza o retrocede cruzando de un bloque a otro.
   * Devuelve true si ejecutó el vuelo y asumió llamar a onMidSwitch().
   */
  maybePlayBlockFlight(fromIndex, toIndex, isRapid, onMidSwitch) {
    if (
      !this.autoZoomEnabled ||
      isRapid ||
      this.isOpen ||
      !this.overlay ||
      !window.gsap ||
      fromIndex < 0 ||
      fromIndex === toIndex
    ) {
      return false;
    }

    const fromSec = this.getSectionIndexForSlide(fromIndex);
    const toSec = this.getSectionIndexForSlide(toIndex);
    if (fromSec === toSec) {
      return false;
    }

    const fromPlanet = this.planets[fromSec];
    const toPlanet = this.planets[toSec];
    if (!fromPlanet || !toPlanet) return false;

    this.cancelFlight();
    this.isFlying = true;
    this.isOpen = true;
    this.level = 0;
    this.focusedSectionIndex = null;

    if (this.flightBannerText) {
      this.flightBannerText.textContent = `Saltando a ${toPlanet.kicker}: ${toPlanet.shortTitle}`;
    }

    // Encuadre intermedio que abarca tanto el bloque de origen como el de destino
    const spanBox = {
      minX: Math.min(fromPlanet.clusterBox.minX, toPlanet.clusterBox.minX) - 40,
      maxX: Math.max(fromPlanet.clusterBox.maxX, toPlanet.clusterBox.maxX) + 40,
      minY: Math.min(fromPlanet.clusterBox.minY, toPlanet.clusterBox.minY) - 40,
      maxY: Math.max(fromPlanet.clusterBox.maxY, toPlanet.clusterBox.maxY) + 40
    };

    this.overlay.classList.add("is-open", "is-flight-mode");
    this.syncActiveState(fromIndex);

    const startCam = this.computeSubtopicCamera(fromIndex, 2.75);
    const spanCam = this.computeCameraForBox(spanBox, 52, 46, 0.34, 1.15);
    const planetCam = this.computeCameraForBox(toPlanet.clusterBox, 64, 54, 0.72, 2.1);
    const endCam = this.computeSubtopicCamera(toIndex, 2.85);

    this.cam = { ...startCam };
    this.applyTransform();

    let midSwitched = false;
    const tl = window.gsap.timeline({
      onComplete: () => {
        if (!midSwitched && onMidSwitch) {
          midSwitched = true;
          onMidSwitch(true);
        }
        this.overlay.classList.remove("is-open", "is-flight-mode");
        this.overlay.style.opacity = "";
        this.isOpen = false;
        this.isFlying = false;
        this.flightTimeline = null;
      }
    });

    tl.fromTo(
      this.overlay,
      { opacity: 0 },
      { opacity: 1, duration: 0.14, ease: "power2.out" },
      0
    );

    // 1. Achique hacia panorama de enlace entre bloques
    tl.to(
      this.cam,
      {
        x: spanCam.x,
        y: spanCam.y,
        scale: spanCam.scale,
        duration: 0.34,
        ease: "power2.out",
        onUpdate: () => this.applyTransform()
      },
      0.06
    );

    // En la cúspide del achique cambiamos silenciosamente la filmina y 3D subyacente
    tl.call(
      () => {
        this.syncActiveState(toIndex);
        if (!midSwitched && onMidSwitch) {
          midSwitched = true;
          onMidSwitch(true);
        }
      },
      null,
      0.38
    );

    // 2. Aterrizaje breve sobre el Planeta destino
    tl.to(
      this.cam,
      {
        x: planetCam.x,
        y: planetCam.y,
        scale: planetCam.scale,
        duration: 0.28,
        ease: "power2.inOut",
        onUpdate: () => this.applyTransform()
      },
      0.38
    );

    // 3. Zoom profundo al subtema destino y desvanecimiento sobre la tarjeta
    tl.to(
      this.cam,
      {
        x: endCam.x,
        y: endCam.y,
        scale: endCam.scale,
        duration: 0.24,
        ease: "power2.in",
        onUpdate: () => this.applyTransform()
      },
      0.66
    );

    tl.to(
      this.overlay,
      { opacity: 0, duration: 0.16, ease: "power2.out" },
      0.76
    );

    this.flightTimeline = tl;
    return true;
  }

  cancelFlight() {
    if (this.flightTimeline) {
      this.flightTimeline.kill();
      this.flightTimeline = null;
    }
    if (window.gsap) {
      window.gsap.killTweensOf(this.cam);
      if (this.overlay) window.gsap.killTweensOf(this.overlay);
    }
    if (this.isFlying && this.overlay) {
      this.overlay.classList.remove("is-open", "is-flight-mode");
      this.overlay.style.opacity = "";
      this.isOpen = false;
    }
    this.isFlying = false;
  }
}

window.PreziController = PreziController;
