/**
 * ============================================================================
 * ESCENARIO PREZI INTEGRADO EN FILMINA (InlinePreziStage)
 * Se renderiza directamente dentro del div #slide-card (#slide-prezi-stage)
 * siguiendo la jerarquía visual Prezi en 3 niveles:
 *   Nivel 0: Panorama amplio (Planeta Maestro + 5 Planetas en arco derecho)
 *   Nivel 1: Zoom al Planeta (Revela satélites de contenido enriquecido)
 *   Nivel 2: Zoom al Subtema (Abre lente de detalle + enlace directo a filmina)
 * ============================================================================
 */
class InlinePreziStage {
  constructor(app) {
    this.app = app;

    // Dimensiones lógicas del lienzo embebido
    this.WORLD_W = 1280;
    this.WORLD_H = 840;
    this.MASTER = { x: 360, y: 420, r: 162 };
    this.ARC_RADIUS = 455;
    this.TOPIC_RADIUS = 56;
    this.SUB_ORBIT = 190;
    this.SUB_RADIUS = 41;

    // Estado interno
    this.mounted = false;
    this.data = null;
    this.level = 0; // 0 = Panorama, 1 = Planeta, 2 = Detalle Subtema
    this.focusedTopicIdx = null;
    this.focusedSub = null;
    this.overviewScale = 0.6;
    this.cam = { x: 0, y: 0, scale: 0.6 };

    // Referencias DOM dentro de #slide-card
    this.stageEl = document.getElementById("slide-prezi-stage");
    this.viewportEl = document.getElementById("slide-prezi-viewport");
    this.worldEl = document.getElementById("slide-prezi-world");
    this.svgEl = document.getElementById("slide-prezi-svg");
    this.nodesEl = document.getElementById("slide-prezi-nodes");
    this.tipEl = document.getElementById("slide-prezi-tip");

    this.crumbRoot = document.getElementById("prezi-inline-crumb-root");
    this.sep1 = document.getElementById("prezi-inline-sep-1");
    this.crumbTopic = document.getElementById("prezi-inline-crumb-topic");
    this.sep2 = document.getElementById("prezi-inline-sep-2");
    this.crumbSub = document.getElementById("prezi-inline-crumb-sub");

    this.btnBack = document.getElementById("prezi-inline-btn-back");
    this.btnZoomOut = document.getElementById("prezi-inline-btn-zoom-out");
    this.btnZoomIn = document.getElementById("prezi-inline-btn-zoom-in");
    this.btnOverview = document.getElementById("prezi-inline-btn-overview");
    this.zoomReadout = document.getElementById("prezi-inline-zoom-readout");

    this.lensEl = document.getElementById("slide-prezi-detail-lens");
    this.detailCard = document.getElementById("slide-prezi-detail-card");
    this.detailBadge = document.getElementById("prezi-detail-badge");
    this.detailTitle = document.getElementById("prezi-detail-title");
    this.detailLead = document.getElementById("prezi-detail-lead");
    this.detailBody = document.getElementById("prezi-detail-body");
    this.detailTags = document.getElementById("prezi-detail-tags");
    this.detailBtnBack = document.getElementById("prezi-detail-btn-back");
    this.detailBtnJump = document.getElementById("prezi-detail-btn-jump");

    this.topics = [];
    this.subtopics = [];
    this.topicEls = [];
    this.subEls = new Map();
    this.lastViewportSize = { w: 0, h: 0 };

    if (this.stageEl && this.viewportEl && this.worldEl) {
      this.bindEvents();
      this.setupResizeObserver();
    }
  }

  mount(preziData) {
    if (!this.stageEl || !preziData) return;
    const isNewData = this.data !== preziData;
    this.data = preziData;
    this.mounted = true;
    this.stageEl.hidden = false;

    if (isNewData || this.topics.length === 0) {
      this.buildLayout(preziData);
      this.renderCanvas();
    }

    this.level = 0;
    this.focusedTopicIdx = null;
    this.focusedSub = null;
    if (this.lensEl) this.lensEl.hidden = true;
    this.syncVisualState();

    // Esperar al reflow del div visible antes de encuadrar la cámara
    const refit = () => this.zoomToOverview(false);
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(refit);
    } else {
      refit();
    }
  }

  unmount() {
    this.mounted = false;
    if (this.stageEl) this.stageEl.hidden = true;
    if (this.lensEl) this.lensEl.hidden = true;
    if (window.gsap) window.gsap.killTweensOf(this.cam);
  }

  buildLayout(preziData) {
    const rawTopics = Array.isArray(preziData.topics) ? preziData.topics : [];
    const count = rawTopics.length;
    const minAng = -36;
    const maxAng = 36;

    this.topics = [];
    this.subtopics = [];

    rawTopics.forEach((item, idx) => {
      const angDeg = count > 1 ? minAng + (idx / (count - 1)) * (maxAng - minAng) : 0;
      const angRad = (angDeg * Math.PI) / 180;
      const tx = Math.round(this.MASTER.x + Math.cos(angRad) * this.ARC_RADIUS);
      const ty = Math.round(this.MASTER.y + Math.sin(angRad) * this.ARC_RADIUS);

      const topic = {
        index: idx,
        id: item.id || `topic_${idx}`,
        kicker: item.kicker || `0${idx + 1}`,
        title: item.title || "",
        meta: item.meta || "",
        theme: item.theme || "bloque1",
        x: tx,
        y: ty,
        r: this.TOPIC_RADIUS,
        subtopics: []
      };

      const rawSubs = Array.isArray(item.subtopics) ? item.subtopics : [];
      const subCount = rawSubs.length;
      const maxSubSpan = subCount >= 4 ? 45 : subCount === 3 ? 36 : subCount === 2 ? 22 : 0;
      const tiltDeg = count > 1 ? (idx - (count - 1) * 0.5) * -9 : 0;

      rawSubs.forEach((subItem, sIdx) => {
        const offsetDeg = subCount > 1 ? -maxSubSpan + (sIdx / (subCount - 1)) * (maxSubSpan * 2) : 0;
        const sAngDeg = tiltDeg + offsetDeg;
        const sAngRad = (sAngDeg * Math.PI) / 180;
        const sx = Math.round(topic.x + Math.cos(sAngRad) * this.SUB_ORBIT);
        const sy = Math.round(topic.y + Math.sin(sAngRad) * this.SUB_ORBIT);

        const sub = {
          topicIndex: idx,
          subIndex: sIdx,
          theme: topic.theme,
          kicker: subItem.kicker || `${idx + 1}.${sIdx + 1}`,
          title: subItem.title || "",
          lead: subItem.lead || "",
          detail: subItem.detail || "",
          tags: Array.isArray(subItem.tags) ? subItem.tags : [],
          targetSlide: typeof subItem.targetSlide === "number" ? subItem.targetSlide : null,
          targetLabel: subItem.targetLabel || null,
          x: sx,
          y: sy,
          r: this.SUB_RADIUS
        };
        topic.subtopics.push(sub);
        this.subtopics.push(sub);
      });

      topic.clusterBox = this.computeTopicClusterBox(topic);
      this.topics.push(topic);
    });
  }

  computeTopicClusterBox(topic) {
    let minX = topic.x - topic.r;
    let maxX = topic.x + topic.r;
    let minY = topic.y - topic.r;
    let maxY = topic.y + topic.r;

    topic.subtopics.forEach((sub) => {
      minX = Math.min(minX, sub.x - sub.r);
      maxX = Math.max(maxX, sub.x + sub.r);
      minY = Math.min(minY, sub.y - sub.r);
      maxY = Math.max(maxY, sub.y + sub.r);
    });

    const pad = 26;
    return {
      minX: minX - pad,
      maxX: maxX + pad,
      minY: minY - pad,
      maxY: maxY + pad
    };
  }

  renderCanvas() {
    if (!this.svgEl || !this.nodesEl) return;
    this.svgEl.innerHTML = "";
    this.nodesEl.innerHTML = "";
    this.topicEls = [];
    this.subEls.clear();

    const svgNS = "http://www.w3.org/2000/svg";
    const mkSvg = (tag, attrs) => {
      const el = document.createElementNS(svgNS, tag);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, String(v)));
      return el;
    };

    // 1. Arco guía orbital entre los 5 Planetas
    if (this.topics.length >= 2) {
      const first = this.topics[0];
      const last = this.topics[this.topics.length - 1];
      this.svgEl.appendChild(
        mkSvg("path", {
          d: `M ${first.x} ${first.y} A ${this.ARC_RADIUS} ${this.ARC_RADIUS} 0 0 1 ${last.x} ${last.y}`,
          class: "pzl-arc-track"
        })
      );
    }

    // 2. Rayos curvos desde el Planeta Maestro y órbitas de satélites
    this.topics.forEach((topic) => {
      const midX = (this.MASTER.x + topic.x) * 0.5;
      const midY = (this.MASTER.y + topic.y) * 0.5;
      const dy = topic.y - this.MASTER.y;
      const dx = topic.x - this.MASTER.x;
      this.svgEl.appendChild(
        mkSvg("path", {
          d: `M ${this.MASTER.x} ${this.MASTER.y} Q ${(midX - dy * 0.08).toFixed(1)} ${(midY + dx * 0.08).toFixed(1)} ${topic.x} ${topic.y}`,
          class: "pzl-master-ray",
          "data-topic-edge": topic.index
        })
      );

      if (topic.subtopics.length > 0) {
        this.svgEl.appendChild(
          mkSvg("circle", {
            cx: topic.x,
            cy: topic.y,
            r: this.SUB_ORBIT,
            class: "pzl-orbit-ring",
            "data-topic-edge": topic.index
          })
        );
      }

      topic.subtopics.forEach((sub) => {
        this.svgEl.appendChild(
          mkSvg("line", {
            x1: topic.x,
            y1: topic.y,
            x2: sub.x,
            y2: sub.y,
            class: "pzl-sub-spoke",
            "data-topic-edge": topic.index
          })
        );
      });
    });

    // 3. Planeta Maestro central-izquierdo
    const mData = (this.data && this.data.master) || {};
    const masterEl = document.createElement("button");
    masterEl.type = "button";
    masterEl.className = "pzl-master";
    masterEl.style.left = `${this.MASTER.x}px`;
    masterEl.style.top = `${this.MASTER.y}px`;
    masterEl.title = "Clic para volver a la Vista General dentro de esta filmina";
    const pills = Array.isArray(mData.pills)
      ? mData.pills.map((p) => `<span class="pzl-master-pill">${p}</span>`).join("")
      : "";
    masterEl.innerHTML = `
      <span class="pzl-master-eyebrow">${mData.eyebrow || "CURZAS • UNCo"}</span>
      <h3 class="pzl-master-title">${mData.title || "Evaluación 360°"}</h3>
      <p class="pzl-master-sub">${mData.subtitle || ""}</p>
      <div class="pzl-master-pills">${pills}</div>
    `;
    masterEl.addEventListener("click", (e) => {
      e.stopPropagation();
      this.zoomToOverview(true);
    });
    this.nodesEl.appendChild(masterEl);

    // 4. Planetas Temáticos y sus Satélites (revelados en Nivel 1)
    this.topics.forEach((topic) => {
      const tEl = document.createElement("button");
      tEl.type = "button";
      tEl.className = "pzl-topic";
      tEl.dataset.theme = topic.theme;
      tEl.dataset.topicIndex = String(topic.index);
      tEl.style.left = `${topic.x}px`;
      tEl.style.top = `${topic.y}px`;
      tEl.title = `${topic.title} — Clic para hacer zoom y ver sus ${topic.subtopics.length} nodos`;
      const dotSpans = topic.subtopics.map(() => "<span></span>").join("");
      tEl.innerHTML = `
        <span class="pzl-topic-num">${topic.kicker}</span>
        <strong class="pzl-topic-title">${topic.title}</strong>
        <span class="pzl-topic-meta">${topic.meta}</span>
        <span class="pzl-topic-dots">${dotSpans}</span>
      `;
      tEl.addEventListener("click", (e) => {
        e.stopPropagation();
        this.focusTopic(topic.index, true);
      });
      this.nodesEl.appendChild(tEl);
      this.topicEls.push(tEl);

      topic.subtopics.forEach((sub) => {
        const sEl = document.createElement("button");
        sEl.type = "button";
        sEl.className = "pzl-subtopic";
        sEl.dataset.theme = sub.theme;
        sEl.dataset.topicIndex = String(sub.topicIndex);
        sEl.style.left = `${sub.x}px`;
        sEl.style.top = `${sub.y}px`;
        sEl.title = `${sub.title} — Clic para hacer zoom y leer detalle`;
        sEl.innerHTML = `
          <span class="pzl-sub-kicker">${sub.kicker}</span>
          <strong class="pzl-sub-title">${sub.title}</strong>
          <span class="pzl-sub-hint">Ampliar ⊕</span>
        `;
        sEl.addEventListener("click", (e) => {
          e.stopPropagation();
          this.openSubtopicDetail(sub);
        });
        this.nodesEl.appendChild(sEl);
        this.subEls.set(`${sub.topicIndex}:${sub.subIndex}`, sEl);
      });
    });
  }

  bindEvents() {
    let dragging = false;
    let moved = false;
    let sx = 0;
    let sy = 0;
    let cx = 0;
    let cy = 0;

    this.viewportEl.addEventListener("pointerdown", (e) => {
      if (this.level === 2) return;
      if (e.target.closest("button")) return;
      dragging = true;
      moved = false;
      sx = e.clientX;
      sy = e.clientY;
      cx = this.cam.x;
      cy = this.cam.y;
      this.viewportEl.classList.add("is-panning");
      if (window.gsap) window.gsap.killTweensOf(this.cam);
    });

    window.addEventListener("pointermove", (e) => {
      if (!dragging || !this.mounted) return;
      const dx = e.clientX - sx;
      const dy = e.clientY - sy;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
      this.cam.x = cx + dx;
      this.cam.y = cy + dy;
      this.applyTransform();
    });

    const endDrag = (e) => {
      if (!dragging) return;
      dragging = false;
      this.viewportEl.classList.remove("is-panning");
      const isBg =
        e && (e.target === this.viewportEl || e.target === this.worldEl || e.target === this.nodesEl);
      if (!moved && isBg && this.level === 1) {
        this.zoomToOverview(true);
      }
    };
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);

    this.viewportEl.addEventListener(
      "wheel",
      (e) => {
        if (!this.mounted || this.level === 2) return;
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.14 : 0.88;
        const rect = this.viewportEl.getBoundingClientRect();
        this.zoomByFactor(factor, e.clientX - rect.left, e.clientY - rect.top);
      },
      { passive: false }
    );

    if (this.crumbRoot) {
      this.crumbRoot.addEventListener("click", () => this.zoomToOverview(true));
    }
    if (this.crumbTopic) {
      this.crumbTopic.addEventListener("click", () => {
        if (this.focusedTopicIdx !== null) {
          this.focusTopic(this.focusedTopicIdx, true);
        }
      });
    }

    if (this.btnBack) {
      this.btnBack.addEventListener("click", () => this.stepBack());
    }
    if (this.btnOverview) {
      this.btnOverview.addEventListener("click", () => this.zoomToOverview(true));
    }
    if (this.btnZoomOut) {
      this.btnZoomOut.addEventListener("click", () => this.zoomByFactor(0.82));
    }
    if (this.btnZoomIn) {
      this.btnZoomIn.addEventListener("click", () => this.zoomByFactor(1.22));
    }
    if (this.detailBtnBack) {
      this.detailBtnBack.addEventListener("click", () => this.stepBack());
    }
    if (this.lensEl) {
      this.lensEl.addEventListener("click", (e) => {
        if (e.target === this.lensEl) this.stepBack();
      });
    }
    if (this.detailBtnJump) {
      this.detailBtnJump.addEventListener("click", () => {
        if (this.focusedSub && typeof this.focusedSub.targetSlide === "number") {
          this.app.goToSlide(this.focusedSub.targetSlide);
        }
      });
    }
  }

  setupResizeObserver() {
    if (typeof ResizeObserver === "undefined") return;
    this.resizeObs = new ResizeObserver((entries) => {
      if (!this.mounted) return;
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      if (width < 80 || height < 80) return;
      if (
        Math.abs(width - this.lastViewportSize.w) < 4 &&
        Math.abs(height - this.lastViewportSize.h) < 4
      ) {
        return;
      }
      this.lastViewportSize = { w: width, h: height };
      if (this.level === 0) {
        this.zoomToOverview(false);
      } else if (this.level === 1 && this.focusedTopicIdx !== null) {
        this.focusTopic(this.focusedTopicIdx, false);
      }
    });
    this.resizeObs.observe(this.viewportEl);
  }

  getViewportDimensions() {
    const rect =
      this.viewportEl && typeof this.viewportEl.getBoundingClientRect === "function"
        ? this.viewportEl.getBoundingClientRect()
        : null;
    return {
      vw: rect && rect.width > 80 ? rect.width : 640,
      vh: rect && rect.height > 80 ? rect.height : 340
    };
  }

  computeCameraForBox(box, padX = 28, padY = 22, minScale = 0.28, maxScale = 2.6) {
    const { vw, vh } = this.getViewportDimensions();
    const boxW = Math.max(80, box.maxX - box.minX);
    const boxH = Math.max(80, box.maxY - box.minY);
    const availW = Math.max(180, vw - padX * 2);
    const availH = Math.max(150, vh - padY * 2);

    const scale = Math.max(minScale, Math.min(maxScale, Math.min(availW / boxW, availH / boxH)));
    const cx = (box.minX + box.maxX) * 0.5;
    const cy = (box.minY + box.maxY) * 0.5;

    return {
      x: vw * 0.5 - cx * scale,
      y: vh * 0.5 - cy * scale,
      scale
    };
  }

  computeOverviewCamera() {
    // Caja exacta de la constelación (Planeta Maestro a izquierda + 5 Planetas a derecha)
    let minX = this.MASTER.x - this.MASTER.r;
    let maxX = this.MASTER.x + this.MASTER.r;
    let minY = this.MASTER.y - this.MASTER.r;
    let maxY = this.MASTER.y + this.MASTER.r;

    this.topics.forEach((t) => {
      minX = Math.min(minX, t.x - t.r);
      maxX = Math.max(maxX, t.x + t.r);
      minY = Math.min(minY, t.y - t.r);
      maxY = Math.max(maxY, t.y + t.r);
    });

    const cam = this.computeCameraForBox(
      { minX: minX - 24, maxX: maxX + 24, minY: minY - 22, maxY: maxY + 24 },
      24,
      18,
      0.32,
      1.45
    );
    this.overviewScale = cam.scale;
    return cam;
  }

  applyTransform() {
    if (this.worldEl) {
      this.worldEl.style.transform = `translate3d(${this.cam.x.toFixed(2)}px, ${this.cam.y.toFixed(2)}px, 0) scale(${this.cam.scale.toFixed(4)})`;
    }
    if (this.zoomReadout) {
      const base = this.overviewScale || 1;
      const pct = Math.max(30, Math.round((this.cam.scale / base) * 100));
      this.zoomReadout.textContent = `${pct}%`;
    }
  }

  tweenCamera(target, duration = 0.55, ease = "power3.inOut", onComplete = null) {
    if (!window.gsap || duration <= 0) {
      this.cam.x = target.x;
      this.cam.y = target.y;
      this.cam.scale = target.scale;
      this.applyTransform();
      if (onComplete) onComplete();
      return null;
    }
    window.gsap.killTweensOf(this.cam);
    return window.gsap.to(this.cam, {
      x: target.x,
      y: target.y,
      scale: target.scale,
      duration,
      ease,
      onUpdate: () => this.applyTransform(),
      onComplete
    });
  }

  zoomByFactor(factor, ax = null, ay = null) {
    if (this.level === 2) return;
    const { vw, vh } = this.getViewportDimensions();
    const px = ax !== null ? ax : vw * 0.5;
    const py = ay !== null ? ay : vh * 0.5;
    const minS = Math.max(0.28, (this.overviewScale || 0.55) * 0.7);
    const maxS = 2.8;
    const nextScale = Math.max(minS, Math.min(maxS, this.cam.scale * factor));
    const wx = (px - this.cam.x) / this.cam.scale;
    const wy = (py - this.cam.y) / this.cam.scale;

    this.tweenCamera(
      { x: px - wx * nextScale, y: py - wy * nextScale, scale: nextScale },
      0.22,
      "power2.out"
    );
  }

  zoomToOverview(animate = true) {
    this.level = 0;
    this.focusedTopicIdx = null;
    this.focusedSub = null;
    if (this.lensEl) this.lensEl.hidden = true;
    this.syncVisualState();
    const targetCam = this.computeOverviewCamera();
    this.tweenCamera(targetCam, animate ? 0.58 : 0, "power3.inOut");
  }

  focusTopic(topicIndex, animate = true) {
    const topic = this.topics[topicIndex];
    if (!topic) return;
    this.level = 1;
    this.focusedTopicIdx = topicIndex;
    this.focusedSub = null;
    if (this.lensEl) this.lensEl.hidden = true;
    this.syncVisualState();

    const targetCam = this.computeCameraForBox(topic.clusterBox, 26, 20, 0.55, 2.2);
    this.tweenCamera(targetCam, animate ? 0.58 : 0, "power3.inOut");
  }

  openSubtopicDetail(sub) {
    if (!sub || !this.lensEl || !this.detailCard) return;
    this.level = 2;
    this.focusedTopicIdx = sub.topicIndex;
    this.focusedSub = sub;
    this.syncVisualState();

    const subCam = this.computeCameraForBox(
      { minX: sub.x - 56, maxX: sub.x + 56, minY: sub.y - 56, maxY: sub.y + 56 },
      24,
      20,
      1.0,
      2.65
    );
    this.tweenCamera(subCam, 0.36, "power2.in");

    const parentTopic = this.topics[sub.topicIndex];
    this.detailBadge.textContent = `${parentTopic ? parentTopic.title : "Bloque"} • ${sub.kicker}`;
    this.detailTitle.textContent = sub.title;
    this.detailLead.textContent = sub.lead || "";
    this.detailBody.textContent = sub.detail || "";

    if (this.detailTags) {
      this.detailTags.innerHTML = (sub.tags || [])
        .map((tag) => `<span class="slide-prezi-detail-tag">${tag}</span>`)
        .join("");
    }

    if (this.detailBtnJump) {
      if (typeof sub.targetSlide === "number") {
        this.detailBtnJump.classList.remove("is-hidden");
        this.detailBtnJump.textContent = sub.targetLabel || `Ir a Filmina ${sub.targetSlide + 1} ↗`;
      } else {
        this.detailBtnJump.classList.add("is-hidden");
      }
    }

    this.lensEl.hidden = false;
    if (window.gsap) {
      window.gsap.fromTo(
        this.lensEl,
        { opacity: 0 },
        { opacity: 1, duration: 0.22, delay: 0.12, ease: "power2.out" }
      );
      window.gsap.fromTo(
        this.detailCard,
        { scale: 0.72, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.34, delay: 0.14, ease: "back.out(1.25)", clearProps: "transform" }
      );
    }
  }

  stepBack() {
    if (this.level === 2 && this.focusedTopicIdx !== null) {
      this.focusTopic(this.focusedTopicIdx, true);
    } else if (this.level === 1) {
      this.zoomToOverview(true);
    }
  }

  syncVisualState() {
    const isPlanet = this.level >= 1 && this.focusedTopicIdx !== null;
    if (this.worldEl) {
      this.worldEl.classList.toggle("is-planet-level", isPlanet);
    }

    this.topicEls.forEach((el) => {
      const idx = Number(el.dataset.topicIndex);
      el.classList.toggle("is-focused", isPlanet && idx === this.focusedTopicIdx);
    });

    this.subEls.forEach((el) => {
      const tIdx = Number(el.dataset.topicIndex);
      el.classList.toggle("is-revealed", isPlanet && tIdx === this.focusedTopicIdx);
    });

    if (this.svgEl) {
      this.svgEl.querySelectorAll("[data-topic-edge]").forEach((edge) => {
        const tIdx = Number(edge.getAttribute("data-topic-edge"));
        edge.classList.toggle("is-focused-edge", isPlanet && tIdx === this.focusedTopicIdx);
      });
    }

    const topicObj = this.focusedTopicIdx !== null ? this.topics[this.focusedTopicIdx] : null;
    if (this.crumbRoot) this.crumbRoot.classList.toggle("is-active", this.level === 0);

    if (this.crumbTopic && this.sep1) {
      if (this.level >= 1 && topicObj) {
        this.sep1.classList.remove("is-hidden");
        this.crumbTopic.classList.remove("is-hidden");
        this.crumbTopic.textContent = topicObj.title;
        this.crumbTopic.classList.toggle("is-active", this.level === 1);
      } else {
        this.sep1.classList.add("is-hidden");
        this.crumbTopic.classList.add("is-hidden");
      }
    }

    if (this.crumbSub && this.sep2) {
      if (this.level === 2 && this.focusedSub) {
        this.sep2.classList.remove("is-hidden");
        this.crumbSub.classList.remove("is-hidden");
        this.crumbSub.textContent = this.focusedSub.title;
        this.crumbSub.classList.add("is-active");
      } else {
        this.sep2.classList.add("is-hidden");
        this.crumbSub.classList.add("is-hidden");
      }
    }

    if (this.btnBack) {
      this.btnBack.classList.toggle("is-hidden", this.level === 0);
      this.btnBack.textContent = this.level === 2 ? "‹ Volver al Bloque" : "‹ Vista General";
    }

    if (this.tipEl) {
      if (this.level === 0) {
        this.tipEl.textContent = "Clic en cualquier círculo para hacer zoom · Rueda: acercar/alejar · Arrastrar: mover";
      } else if (this.level === 1) {
        this.tipEl.textContent = "Clic en un satélite para ampliar detalle · Clic en el fondo para volver";
      } else {
        this.tipEl.textContent = "Detalle ampliado · Volvé al bloque o saltá directo a la filmina";
      }
    }
  }
}

window.InlinePreziStage = InlinePreziStage;
