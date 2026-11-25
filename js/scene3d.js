/**
 * =============================================================================
 * MOTOR GRÁFICO 3D PRINCIPAL (ORQUESTADOR MODULAR THREE.JS)
 * Presentación de Tesina • CURZAS - UNCo
 * Autor: Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes
 * =============================================================================
 * Administra el canvas WebGL, iluminación de galería clásica, partículas atmosféricas,
 * transiciones cinematográficas GSAP entre filminas, y el sistema de interacción
 * 360° (rotación, traslación y zoom progresivo con ratón o gestos táctiles).
 *
 * Las esculturas y sus físicas están modularizadas en js/objetos/:
 * - materials.js     -> Paleta PBR de materiales académicos (mármol, latón, cristal, granito)
 * - helpers.js       -> Generadores de pedestales de museo, aros armilares y cartelas 3D
 * - camera_config.js -> Posiciones y ángulos óptimos de cámara por filmina
 * - bloque1.js       -> Esculturas 1 a 5 (Esfera Armilar, Valor Público, Templo, Territorio, Nodos)
 * - bloque2.js       -> Esculturas 6 a 10 (Péndulos, Balanza, Astrolabio, Objetivos, Longo)
 * - bloque3.js       -> Esculturas 11 a 15 (Atril, 4 Escalones, Giroscopio 360°, Cúpula, PES)
 * - bloque4.js       -> Esculturas 16 a 20 (Tensegridad, Teodolito, Pentagrama, Faro, Medallón)
 */

class Presentation3D {
  constructor(canvas) {
    this.canvas = canvas;
    this.scenes = {};
    this.currentSceneId = "anim_01";

    // ── Variables de Interacción 3D (Rotación 360°, Pan y Zoom) ──
    this.userRotation = { x: 0, y: 0 };
    this.targetUserRotation = { x: 0, y: 0 };
    this.userZoom = 0;
    this.targetUserZoom = 0;
    this.userPan = { x: 0, y: 0 };
    this.targetUserPan = { x: 0, y: 0 };
    this.isDragging = false;
    this.previousPointerPos = { x: 0, y: 0 };
    this.dragButton = 0; // 0 = rotar en 3D, 2 = pan/desplazar

    // Estado de transición cinemática entre pedestales de galería
    this.transitionState = {
      exitingGroup: null,
      exitOffset: { x: 0, y: 0, z: 0, scale: 1, rotX: 0, rotY: 0, opacity: 1 },
      enterOffset: { x: 0, y: 0, z: 0, scale: 1, rotY: 0, opacity: 1 }
    };

    // Coordenadas de cámara importadas desde js/objetos/camera_config.js
    this.cameraTargets = window.Scene3DCameraConfig || {};

    const initialCam = this.cameraTargets.anim_01 || { pos: [2.3, 1.4, 6.8], lookAt: [1.4, 0.2, 0] };
    this.currentCamPos = new THREE.Vector3(...initialCam.pos);
    this.targetCamPos = new THREE.Vector3(...initialCam.pos);
    this.currentLookAt = new THREE.Vector3(...initialCam.lookAt);
    this.targetLookAt = new THREE.Vector3(...initialCam.lookAt);

    // Buffers vectoriales reutilizables para el bucle de render (Zero Garbage Collection)
    this._tmpCamDir = new THREE.Vector3();
    this._tmpDesiredCamPos = new THREE.Vector3();
    this._tmpDesiredLookAt = new THREE.Vector3();

    // Control dinámico de encuadre y prioridad: 'default' | 'object' | 'text'
    this.focusMode = "default";
    this.baseGroupX = 1.85; // Centrado en la mitad derecha libre
    this.baseGroupScale = 0.72;
    this.focusAnim = { centerXOffset: 0, scaleMultiplier: 1.0, objectBlend: 0, offsetY: 0 };

    this.init();
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     INICIALIZACIÓN DEL RENDERER Y ESCENA ACADÉMICA (GALERÍA BLANCA CLÁSICA)
     ═══════════════════════════════════════════════════════════════════════════ */
  init() {
    this.scene = new THREE.Scene();
    // Atmósfera de galería clásica en blanco marfil con niebla suave para profundidad
    this.scene.fog = new THREE.FogExp2(0xf4f6f9, 0.025);

    this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.copy(this.currentCamPos);
    this.updateCameraViewOffset();

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    this.renderer.setClearColor(0xf4f6f9, 1);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap; // Respeta shadow.radius para bordes suaves reales

    // Iluminación IBL de estudio fotográfico + sombras reales en suelo de galería (Opción A)
    this.setupStudioEnvironment();
    this.setupMuseumLighting();

    // Motes sutiles de polvo dorado de biblioteca bajo la luz del sol
    this.createAtmosphericMotes();

    // Construcción de las 25 esculturas académicas desde los módulos en js/objetos/
    this.buildAllScenes();

    // Pre-calentamiento y compilación GPU anticipada de shaders (elimina stutter en primera transición)
    this.precompileAllScenes();

    // Controles interactivos de rotación 360°, pan y zoom con ratón o táctil
    this.setupInteractiveControls();

    window.addEventListener("resize", () => this.onWindowResize());
    this.onWindowResize();
    this.clock = new THREE.Clock();
    this.animate();
  }

  setupStudioEnvironment() {
    if (!THREE.PMREMGenerator) return;
    try {
      const pmrem = new THREE.PMREMGenerator(this.renderer);
      pmrem.compileEquirectangularShader();

      const envScene = new THREE.Scene();
      envScene.background = new THREE.Color(0xf3f5f8);

      // Softboxes fotográficas para reflejos IBL satinados en cerámica mate y latón champán
      const topSoftbox = new THREE.Mesh(
        new THREE.PlaneGeometry(14, 14),
        new THREE.MeshBasicMaterial({ color: 0xfffaf0, side: THREE.DoubleSide })
      );
      topSoftbox.position.set(0, 7.5, 0);
      topSoftbox.rotation.x = Math.PI / 2;
      envScene.add(topSoftbox);

      const keyPanel = new THREE.Mesh(
        new THREE.PlaneGeometry(9, 7),
        new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
      );
      keyPanel.position.set(7.5, 3.2, 5.5);
      keyPanel.lookAt(0, 0, 0);
      envScene.add(keyPanel);

      const coolFillPanel = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 7),
        new THREE.MeshBasicMaterial({ color: 0xdbeafe, side: THREE.DoubleSide })
      );
      coolFillPanel.position.set(-8.0, 2.5, 2.0);
      coolFillPanel.lookAt(0, 0, 0);
      envScene.add(coolFillPanel);

      const warmRimPanel = new THREE.Mesh(
        new THREE.PlaneGeometry(8, 5),
        new THREE.MeshBasicMaterial({ color: 0xfef3c7, side: THREE.DoubleSide })
      );
      warmRimPanel.position.set(-1.5, 4.0, -7.5);
      warmRimPanel.lookAt(0, 0, 0);
      envScene.add(warmRimPanel);

      const groundBounce = new THREE.Mesh(
        new THREE.PlaneGeometry(20, 20),
        new THREE.MeshBasicMaterial({ color: 0x334155, side: THREE.DoubleSide })
      );
      groundBounce.position.set(0, -6.0, 0);
      groundBounce.rotation.x = -Math.PI / 2;
      envScene.add(groundBounce);

      const envRT = pmrem.fromScene(envScene, 0.04);
      this.scene.environment = envRT.texture;
      pmrem.dispose();
    } catch (err) {
      console.warn("Entorno IBL omitido:", err);
    }
  }

  setupMuseumLighting() {
    // 1. Luz Ambiental y de Hemisferio calibradas para Opción A (cerámica mate cálida)
    const amb = new THREE.AmbientLight(0xffffff, 0.36);
    this.scene.add(amb);

    const hemi = new THREE.HemisphereLight(0xfffdf8, 0x94a3b8, 0.50);
    this.scene.add(hemi);

    // 2. Lucarna Cenital Suave (ángulo casi cenital para sombra realista apoyada, no desplazada)
    const skylight = new THREE.DirectionalLight(0xfff9f0, 1.22);
    skylight.position.set(1.1, 13.5, 1.8);
    skylight.castShadow = true;
    skylight.shadow.mapSize.set(1024, 1024);
    skylight.shadow.camera.left = -4.5;
    skylight.shadow.camera.right = 6.5;
    skylight.shadow.camera.top = 4.5;
    skylight.shadow.camera.bottom = -4.5;
    skylight.shadow.camera.near = 1;
    skylight.shadow.camera.far = 25;
    skylight.shadow.bias = -0.0002;
    skylight.shadow.normalBias = 0.025;
    skylight.shadow.radius = 7.5; // Penumbra amplia y orgánica sin borde de plataforma
    this.scene.add(skylight);

    // 3. Luz de Relleno Lateral Suave y Recorte posterior
    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 0.46);
    fillLight.position.set(-5, 4, 3);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xfef3c7, 0.68);
    rimLight.position.set(-2, 3.2, -4.2);
    this.scene.add(rimLight);

    // 4. Foco cálido suave para realzar biseles inferiores
    const bottomLight = new THREE.PointLight(0xe5c16c, 0.34, 12);
    bottomLight.position.set(1.6, -1.5, 3.8);
    this.scene.add(bottomLight);

    // 5. Plano receptor invisible sincronizado dinámicamente bajo el zócalo activo (ShadowMaterial tenue)
    const floorCatcher = new THREE.Mesh(
      new THREE.PlaneGeometry(24, 24),
      new THREE.ShadowMaterial({ color: 0x0f172a, opacity: 0.036 })
    );
    floorCatcher.rotation.x = -Math.PI / 2;
    floorCatcher.position.set(this.baseGroupX, -1.292 * this.baseGroupScale - 0.002, 0);
    floorCatcher.receiveShadow = true;
    this.scene.add(floorCatcher);
    this.floorCatcher = floorCatcher;
  }

  createAtmosphericMotes() {
    const count = 75;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = 1.6 + (Math.random() - 0.5) * 4.2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3.0;
    }
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.022,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });

    this.dustParticles = new THREE.Points(geom, mat);
    this.scene.add(this.dustParticles);
  }

  onWindowResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.updateCameraViewOffset();

    // Adaptación responsiva inteligente: evita recortes en pantallas de notebook, proyectores o ventanas estrechas
    const baseFov = 40;
    if (w < 1200 || h < 820) {
      const factorW = w < 1200 ? (1200 / w) : 1.0;
      const factorH = h < 820 ? (820 / h) : 1.0;
      this.camera.fov = Math.min(52, baseFov * Math.max(factorW * 0.92, factorH));
    } else {
      this.camera.fov = baseFov;
    }

    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  }

  updateCameraViewOffset() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (this.focusMode === "object") {
      this.camera.clearViewOffset();
      return;
    }

    // Si las notas están abiertas, centrar la cámara entre la filmina y el atril de notas
    const isNotesOpen = typeof document !== 'undefined' && document.body.classList.contains("notes-open");

    if (w > 1024) {
      const offsetX = isNotesOpen ? -w * 0.08 : -w * 0.18;
      this.camera.setViewOffset(w, h, offsetX, 0, w, h);
    } else if (w > 768) {
      const offsetX = isNotesOpen ? -w * 0.04 : -w * 0.10;
      this.camera.setViewOffset(w, h, offsetX, 0, w, h);
    } else {
      this.camera.clearViewOffset();
    }
  }

  /**
   * Cambia el modo de enfoque de la escultura 3D:
   * - 'object': alinea dinámicamente con el centro exacto de mira de cámara y agranda (+52%)
   * - 'text': desplaza la escultura hacia la derecha fuera del cuadro
   * - 'default': regresa a la posición lateral canónica para convivir con la filmina
   */
  setFocusMode(mode) {
    this.focusMode = mode;
    this.updateCameraViewOffset();

    if (!this.focusAnim) {
      this.focusAnim = { centerXOffset: 0, scaleMultiplier: 1.0, objectBlend: 0, offsetY: 0 };
    }

    let targetOffsetX = 0;
    let targetScale = 1.0;
    let targetObjectBlend = 0;
    let targetOffsetY = 0;

    if (mode === "object") {
      targetOffsetX = 0;
      targetScale = 1.52;
      targetObjectBlend = 1;
      targetOffsetY = 0.18;
    } else if (mode === "text") {
      targetOffsetX = 4.0; // Desplazar fuera del viewport
      targetScale = 0.01;  // Reducir a 0 para que no asome detrás de la filmina
      targetObjectBlend = 0;
      targetOffsetY = 0;
    } else {
      targetOffsetX = 0;
      targetScale = 1.0;
      targetObjectBlend = 0;
      targetOffsetY = 0;
    }

    if (window.gsap) {
      gsap.to(this.focusAnim, {
        centerXOffset: targetOffsetX,
        scaleMultiplier: targetScale,
        objectBlend: targetObjectBlend,
        offsetY: targetOffsetY,
        duration: 0.65,
        ease: "power2.out"
      });
    } else {
      this.focusAnim.centerXOffset = targetOffsetX;
      this.focusAnim.scaleMultiplier = targetScale;
      this.focusAnim.objectBlend = targetObjectBlend;
      this.focusAnim.offsetY = targetOffsetY;
    }
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     CONSTRUCCIÓN MODULAR DE LAS ESCULTURAS ACADÉMICAS ACTIVAS (CON FALLBACK LAZY)
     ═══════════════════════════════════════════════════════════════════════════ */
  ensureSceneBuilt(id) {
    if (this.scenes[id]) return this.scenes[id];

    const group = new THREE.Group();
    group.position.set(this.baseGroupX, 0, 0);
    group.visible = false;
    this.scenes[id] = group;
    this.scene.add(group);

    const objDef = window.Presentation3D_Objects?.[id];
    if (objDef && typeof objDef.build === "function") {
      objDef.build(this, group);
      this.refineSceneGeometry(group);
    }
    return group;
  }

  /**
   * Pule automáticamente cantos duros "años 90" en todas las esculturas:
   * - Reemplaza cajas geométricas secas por cajas con chaflán/bisel suavizado (getRoundedBoxGeo)
   * - Eleva la teselación de cilindros y aros de bajos segmentos a curvas suaves
   * - Habilita sombras suaves sobre sólidos opacos manteniendo sprites y micropartículas
   */
  refineSceneGeometry(group) {
    if (!group || typeof this.getRoundedBoxGeo !== "function") return;
    group.traverse((obj) => {
      if (!obj.isMesh || !obj.geometry) return;
      const g = obj.geometry;
      if (g.userData && g.userData._isRefinedRoundedBox) return;

      const p = g.parameters;
      const gType = g.type || "";

      const matCheck = obj.material;
      const hasMappedTexture = Array.isArray(matCheck)
        ? matCheck.some((m) => Boolean(m && m.map))
        : Boolean(matCheck && matCheck.map);

      if ((gType === "BoxGeometry" || gType === "BoxBufferGeometry") && p && !hasMappedTexture && !Array.isArray(matCheck)) {
        const w = p.width;
        const h = p.height;
        const d = p.depth;
        const minDim = Math.min(w, h, d);
        const maxDim = Math.max(w, h, d);
        // Solo biselar piezas volumétricas reales (omitir tiras/láseres ultra delgados)
        if (w > 0 && h > 0 && d > 0 && minDim >= 0.008 && maxDim >= 0.025) {
          const prevUserData = g.userData;
          obj.geometry = this.getRoundedBoxGeo(w, h, d);
          if (prevUserData && obj.geometry.userData) {
            Object.assign(obj.geometry.userData, prevUserData);
          }
        }
      } else if ((gType === "CylinderGeometry" || gType === "CylinderBufferGeometry") && p) {
        const radial = p.radialSegments || 8;
        const theta = p.thetaLength !== undefined ? p.thetaLength : Math.PI * 2;
        // Suavizar cilindros redondeados (preservando prismas intencionales <= 6 caras)
        if (radial >= 8 && radial < 44 && Math.abs(theta - Math.PI * 2) < 0.01) {
          const rTop = p.radiusTop !== undefined ? p.radiusTop : 1;
          const rBot = p.radiusBottom !== undefined ? p.radiusBottom : 1;
          const h = p.height !== undefined ? p.height : 1;
          obj.geometry = new THREE.CylinderGeometry(
            rTop,
            rBot,
            h,
            48,
            p.heightSegments || 1,
            !!p.openEnded
          );
        }
      } else if ((gType === "TorusGeometry" || gType === "TorusBufferGeometry") && p) {
        const tubSeg = p.tubularSegments || 8;
        if (tubSeg < 48 && Math.abs((p.arc !== undefined ? p.arc : Math.PI * 2) - Math.PI * 2) < 0.01) {
          obj.geometry = new THREE.TorusGeometry(
            p.radius,
            p.tube,
            Math.max(18, p.radialSegments || 12),
            64
          );
        }
      }

      const mat = Array.isArray(obj.material) ? obj.material[0] : obj.material;
      if (mat && !mat.transparent) {
        g.computeBoundingBox?.();
        const box = g.boundingBox;
        if (box) {
          const sz = Math.max(
            box.max.x - box.min.x,
            box.max.y - box.min.y,
            box.max.z - box.min.z
          );
          if (sz >= 0.04) {
            obj.castShadow = true;
            obj.receiveShadow = true;
          }
        }
      }
    });
  }

  /**
   * Ajusta de forma segura la opacidad de sprites y materiales translúcidos en una escultura
   * sin alterar materiales opacos (evita artefactos de depth-sorting en geometrías PBR).
   */
  applyGroupOpacity(group, factor = 1) {
    if (!group) return;
    const clamped = Math.max(0, Math.min(1, factor));
    group.traverse((obj) => {
      if (!obj.material) return;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      mats.forEach((mat) => {
        if (!mat) return;
        if (obj.isSprite || mat.transparent === true) {
          if (mat.userData._baseOpacity === undefined) {
            mat.userData._baseOpacity = mat.opacity !== undefined ? mat.opacity : 1;
          }
          mat.opacity = mat.userData._baseOpacity * clamped;
        }
      });
    });
  }

  buildAllScenes() {
    const activeIds = new Set();
    const slides = window.PRESENTACION_DATA?.slides;
    if (Array.isArray(slides) && slides.length > 0) {
      slides.forEach((s) => {
        if (s?.escena3D) activeIds.add(s.escena3D);
      });
    }
    if (activeIds.size === 0) {
      for (let i = 1; i <= 25; i++) {
        activeIds.add(`anim_${String(i).padStart(2, "0")}`);
      }
    }

    const firstId = slides?.[0]?.escena3D || "anim_01";
    activeIds.forEach((id) => {
      const group = this.ensureSceneBuilt(id);
      group.visible = id === firstId;
    });
  }

  /**
   * Precompila exhaustivamente los shaders, texturas y geometrías en la GPU
   * de forma individual por escena activa, garantizando 0ms de stutter en primera transición.
   */
  precompileAllScenes() {
    try {
      const sceneIds = Object.keys(this.scenes);

      // 1. Ocultar todas las escenas inicialmente
      sceneIds.forEach((k) => {
        this.scenes[k].visible = false;
      });

      // 2. Calentar y compilar cada escena activa individualmente
      sceneIds.forEach((id) => {
        const grp = this.scenes[id];
        if (!grp) return;

        grp.visible = true;

        const camCfg = this.cameraTargets[id] || { pos: [2.3, 1.4, 6.8], lookAt: [1.4, 0.2, 0] };
        this.camera.position.set(camCfg.pos[0], camCfg.pos[1], camCfg.pos[2]);
        this.camera.lookAt(camCfg.lookAt[0], camCfg.lookAt[1], camCfg.lookAt[2]);
        this.camera.updateMatrixWorld();

        this.renderer.compile(this.scene, this.camera);
        this.renderer.render(this.scene, this.camera);

        grp.visible = false;
      });

      // 3. Restaurar escena canónica inicial
      const firstId = window.PRESENTACION_DATA?.slides?.[0]?.escena3D || "anim_01";
      this.currentSceneId = firstId;
      if (this.scenes[firstId]) {
        this.scenes[firstId].visible = true;
      }
      const firstCam = this.cameraTargets[firstId] || { pos: [2.3, 1.4, 6.8], lookAt: [1.4, 0.2, 0] };
      this.targetCamPos.set(...firstCam.pos);
      this.targetLookAt.set(...firstCam.lookAt);
      this.currentCamPos.copy(this.targetCamPos);
      this.currentLookAt.copy(this.targetLookAt);
      this.camera.position.copy(this.currentCamPos);
      this.camera.lookAt(this.currentLookAt);
      this.camera.updateMatrixWorld();
      this.renderer.render(this.scene, this.camera);
    } catch (err) {
      console.warn("Warmup WebGL individual:", err);
    }
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     SISTEMA DE INTERACCIÓN 3D: ROTACIÓN 360°, PAN Y ZOOM CON RATÓN / TÁCTIL
     ═══════════════════════════════════════════════════════════════════════════ */
  setupInteractiveControls() {
    this.canvas.style.cursor = "grab";

    this.canvas.addEventListener("pointerdown", (e) => {
      this.isDragging = true;
      this.dragButton = e.button;
      this.previousPointerPos = { x: e.clientX, y: e.clientY };
      this.canvas.style.cursor = "grabbing";
      try { this.canvas.setPointerCapture(e.pointerId); } catch (_) { }
    });

    window.addEventListener("pointermove", (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.previousPointerPos.x;
      const deltaY = e.clientY - this.previousPointerPos.y;
      this.previousPointerPos = { x: e.clientX, y: e.clientY };

      if (this.dragButton === 0 && !e.shiftKey) {
        this.targetUserRotation.y += deltaX * 0.0075;
        this.targetUserRotation.x += deltaY * 0.0055;
        this.targetUserRotation.x = Math.max(-0.65, Math.min(0.65, this.targetUserRotation.x));
      } else {
        this.targetUserPan.x += deltaX * 0.0035;
        this.targetUserPan.y -= deltaY * 0.0035;
        this.targetUserPan.x = Math.max(-1.8, Math.min(1.8, this.targetUserPan.x));
        this.targetUserPan.y = Math.max(-1.2, Math.min(1.2, this.targetUserPan.y));
      }
    });

    const stopDrag = (e) => {
      if (this.isDragging) {
        this.isDragging = false;
        this.canvas.style.cursor = "grab";
        try { if (e && e.pointerId) this.canvas.releasePointerCapture(e.pointerId); } catch (_) { }
      }
    };
    window.addEventListener("pointerup", stopDrag);
    window.addEventListener("pointercancel", stopDrag);

    // Zoom Progresivo con Rueda del Ratón
    this.canvas.addEventListener("wheel", (e) => {
      e.preventDefault();
      const zoomDelta = e.deltaY * 0.0022;
      this.targetUserZoom = Math.max(-3.5, Math.min(4.5, this.targetUserZoom + zoomDelta));
    }, { passive: false });

    // Doble clic para centrar la escultura
    this.canvas.addEventListener("dblclick", () => {
      this.resetUserControls();
    });

    // Gestos multitáctiles (Pinch-to-zoom en celulares y tablets)
    let initialTouchDist = 0;
    this.canvas.addEventListener("touchstart", (e) => {
      if (e.touches.length === 2) {
        initialTouchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    }, { passive: true });

    this.canvas.addEventListener("touchmove", (e) => {
      if (e.touches.length === 2 && initialTouchDist > 0) {
        const currentDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const diff = (initialTouchDist - currentDist) * 0.006;
        this.targetUserZoom = Math.max(-3.5, Math.min(4.5, this.targetUserZoom + diff));
        initialTouchDist = currentDist;
      }
    }, { passive: true });
  }

  /** Restablece la rotación, desplazamiento y zoom a su pose canónica */
  resetUserControls() {
    if (window.gsap) {
      gsap.to(this.targetUserRotation, { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
      gsap.to(this.targetUserPan, { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
      gsap.to(this, { targetUserZoom: 0, duration: 0.6, ease: "power2.out" });
    } else {
      this.targetUserRotation = { x: 0, y: 0 };
      this.targetUserPan = { x: 0, y: 0 };
      this.targetUserZoom = 0;
    }
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     TRANSICIÓN CINEMATOGRÁFICA ENTRE FILMINAS (GSAP)
     ═══════════════════════════════════════════════════════════════════════════ */
  switchScene(targetId, direction = 1) {
    this.ensureSceneBuilt(targetId);
    if (targetId === this.currentSceneId && this.scenes[targetId]?.visible) return;

    const oldId = this.currentSceneId;
    const oldGroup = this.scenes[oldId];
    const newGroup = this.scenes[targetId];

    this.currentSceneId = targetId;

    // Capturar pose interactiva actual para que la escultura saliente se aleje desde donde estaba, sin saltos
    const prevRotX = this.userRotation.x;
    const prevRotY = this.userRotation.y;
    const prevPanX = this.userPan.x;
    const prevPanY = this.userPan.y;

    // Detectar si el usuario está realizando una transición rápida (< 280ms)
    const now = performance.now();
    const isRapid = (now - (this.lastSwitchTime || 0)) < 280;
    this.lastSwitchTime = now;

    // 1. CANCELAR TRANSICIONES PREVIAS Y GARANTIZAR ESTADO LIMPIO
    if (window.gsap) {
      gsap.killTweensOf(this.transitionState.exitOffset);
      gsap.killTweensOf(this.transitionState.enterOffset);
      gsap.killTweensOf(this.targetCamPos);
      gsap.killTweensOf(this.targetLookAt);
    }

    // Ocultar cualquier grupo saliente previo interrumpido y restaurar opacidad
    if (this.transitionState.exitingGroup && this.transitionState.exitingGroup !== newGroup) {
      this.applyGroupOpacity(this.transitionState.exitingGroup, 1);
      this.transitionState.exitingGroup.visible = false;
      this.transitionState.exitingGroup = null;
    }

    // REGLA CRÍTICA DE RECURSOS: Forzar que NINGUNA escena ajena quede visible en GPU
    Object.keys(this.scenes).forEach((k) => {
      if (k !== targetId && k !== oldId) {
        this.applyGroupOpacity(this.scenes[k], 1);
        this.scenes[k].visible = false;
      }
    });

    // Restablecer amortiguadamente las modificaciones de usuario para la nueva escena
    this.resetUserControls();

    const isForward = direction >= 0;
    const exitDuration = isRapid ? 0.22 : (isForward ? 0.92 : 0.70);
    const enterDuration = isRapid ? 0.28 : 0.96;
    const camDuration = isRapid ? 0.35 : 1.05;

    // 2. Interpolación de Cámara Cinemática al nuevo ángulo canónico
    const camTarget = this.cameraTargets[targetId] || { pos: [2.3, 1.4, 6.8], lookAt: [1.4, 0.2, 0] };
    if (window.gsap) {
      gsap.to(this.targetCamPos, {
        x: camTarget.pos[0],
        y: camTarget.pos[1],
        z: camTarget.pos[2],
        duration: camDuration,
        ease: "power3.inOut"
      });
      gsap.to(this.targetLookAt, {
        x: camTarget.lookAt[0],
        y: camTarget.lookAt[1],
        z: camTarget.lookAt[2],
        duration: camDuration,
        ease: "power3.inOut"
      });
    } else {
      this.targetCamPos.set(...camTarget.pos);
      this.targetLookAt.set(...camTarget.lookAt);
      this.currentCamPos.copy(this.targetCamPos);
      this.currentLookAt.copy(this.targetLookAt);
    }

    if (!newGroup) return;

    if (!window.gsap || !oldGroup || isRapid) {
      if (oldGroup) {
        this.applyGroupOpacity(oldGroup, 1);
        oldGroup.visible = false;
      }
      this.transitionState.exitingGroup = null;
    }

    // 3. Transición natural de profundidad:
    //    - Al avanzar: la escultura saliente retrocede hacia el fondo y se aleja en perspectiva y niebla;
    //      la entrante desliza suavemente al escenario.
    //    - Al retroceder: la saliente sale suavemente y la anterior regresa desde la profundidad.
    newGroup.visible = true;
    this.applyGroupOpacity(newGroup, 1);

    if (oldGroup && !isRapid && window.gsap) {
      this.transitionState.exitingGroup = oldGroup;
      this.transitionState.exitOffset = {
        x: prevPanX,
        y: prevPanY,
        z: 0,
        scale: 1,
        rotX: prevRotX,
        rotY: prevRotY,
        opacity: 1
      };

      const exitTarget = isForward
        ? {
          x: prevPanX - 1.25,
          y: prevPanY + 0.42,
          z: -24.0,
          scale: 0.16,
          rotX: prevRotX * 0.25,
          rotY: prevRotY - 0.36,
          opacity: 0,
          duration: exitDuration,
          ease: "power2.inOut"
        }
        : {
          x: prevPanX + 1.85,
          y: prevPanY - 0.18,
          z: 2.8,
          scale: 0.88,
          rotX: prevRotX * 0.5,
          rotY: prevRotY + 0.28,
          opacity: 0,
          duration: exitDuration,
          ease: "power2.in"
        };

      gsap.to(this.transitionState.exitOffset, {
        ...exitTarget,
        onComplete: () => {
          if (oldGroup) {
            this.applyGroupOpacity(oldGroup, 1);
            oldGroup.visible = false;
          }
          if (this.transitionState.exitingGroup === oldGroup) {
            this.transitionState.exitingGroup = null;
          }
        }
      });
    } else {
      this.transitionState.exitingGroup = null;
      if (oldGroup) {
        this.applyGroupOpacity(oldGroup, 1);
        oldGroup.visible = false;
      }
    }

    if (isRapid) {
      this.transitionState.enterOffset = {
        x: (isForward ? 0.65 : -0.65),
        y: 0.08,
        z: -1.4,
        scale: 0.88,
        rotY: (isForward ? 0.18 : -0.18),
        opacity: 1
      };
    } else if (isForward) {
      this.transitionState.enterOffset = {
        x: 2.0,
        y: -0.16,
        z: 2.2,
        scale: 0.88,
        rotY: 0.28,
        opacity: 0
      };
    } else {
      // Al retroceder, la escultura regresa acercándose desde el fondo
      this.transitionState.enterOffset = {
        x: -1.1,
        y: 0.36,
        z: -18.0,
        scale: 0.22,
        rotY: -0.32,
        opacity: 0
      };
    }

    if (window.gsap) {
      this.applyGroupOpacity(newGroup, this.transitionState.enterOffset.opacity);
      gsap.to(this.transitionState.enterOffset, {
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotY: 0,
        opacity: 1,
        duration: enterDuration,
        delay: (!isRapid && oldGroup && isForward) ? 0.08 : 0,
        ease: "power3.out"
      });
    } else {
      this.transitionState.enterOffset = { x: 0, y: 0, z: 0, scale: 1, rotY: 0, opacity: 1 };
    }
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     LOOP DE RENDERIZADO Y FÍSICA CINEMÁTICA (RAF)
     ═══════════════════════════════════════════════════════════════════════════ */
  animate() {
    requestAnimationFrame(() => this.animate());

    // Suspender renderizado GPU si la pestaña está oculta o minimizada
    if (document.hidden) return;

    const dt = Math.min(this.clock.getDelta(), 0.05);
    const t = this.clock.getElapsedTime();

    // Lerp adaptativo e independiente de la tasa de refresco (60Hz, 120Hz, 144Hz)
    const smoothFactor = 1 - Math.exp(-14 * dt);
    const userFactor = 1 - Math.exp(-12 * dt);

    // 1. Amortiguación e interpolación suave (Lerp) de las órdenes del usuario
    this.userRotation.x += (this.targetUserRotation.x - this.userRotation.x) * userFactor;
    this.userRotation.y += (this.targetUserRotation.y - this.userRotation.y) * userFactor;
    this.userZoom += (this.targetUserZoom - this.userZoom) * userFactor;
    this.userPan.x += (this.targetUserPan.x - this.userPan.x) * userFactor;
    this.userPan.y += (this.targetUserPan.y - this.userPan.y) * userFactor;

    // 2. Zoom Progresivo con Rueda: Dolly de la cámara respecto al objeto (Zero GC)
    this._tmpCamDir.subVectors(this.targetCamPos, this.targetLookAt).normalize();
    const baseDist = this.targetCamPos.distanceTo(this.targetLookAt);
    const effectiveDist = Math.max(2.2, Math.min(12.5, baseDist + this.userZoom));

    this._tmpDesiredCamPos
      .copy(this.targetLookAt)
      .addScaledVector(this._tmpCamDir, effectiveDist);

    this._tmpDesiredCamPos.x += this.userPan.x;
    this._tmpDesiredCamPos.y += this.userPan.y;

    this._tmpDesiredLookAt
      .copy(this.targetLookAt);
    this._tmpDesiredLookAt.x += this.userPan.x;
    this._tmpDesiredLookAt.y += this.userPan.y;

    this.currentCamPos.lerp(this._tmpDesiredCamPos, smoothFactor);
    this.currentLookAt.lerp(this._tmpDesiredLookAt, smoothFactor);
    this.camera.position.copy(this.currentCamPos);
    this.camera.lookAt(this.currentLookAt);

    // 3. Motes dorados de polvo en lenta deriva atmosférica
    if (this.dustParticles) {
      this.dustParticles.rotation.y = t * 0.006;
    }

    // 4. Aplicar rotación orbital y desplazamiento interactivo a la escultura 3D activa
    const centerOffset = this.focusAnim?.centerXOffset || 0;
    const objectBlend = this.focusAnim?.objectBlend || 0;
    const focusOffsetY = this.focusAnim?.offsetY || 0;
    const scaleMult = this.focusAnim?.scaleMultiplier || 1.0;
    const basePosX = (this.baseGroupX !== undefined) ? this.baseGroupX : 1.85;
    const baseScaleMult = (this.baseGroupScale !== undefined) ? this.baseGroupScale : 0.72;
    const splitPosX = basePosX + centerOffset;
    const lookCenterX = this.currentLookAt ? this.currentLookAt.x : basePosX;
    const focusPosX = splitPosX + (lookCenterX - splitPosX) * objectBlend;

    const activeGroup = this.scenes[this.currentSceneId];
    if (activeGroup) {
      const enter = this.transitionState?.enterOffset || { x: 0, y: 0, z: 0, scale: 1, rotY: 0, opacity: 1 };
      activeGroup.position.x = focusPosX + this.userPan.x + enter.x;
      activeGroup.position.y = focusOffsetY + this.userPan.y + enter.y;
      activeGroup.position.z = enter.z;
      activeGroup.rotation.y = this.userRotation.y + enter.rotY;
      activeGroup.rotation.x = this.userRotation.x;
      const baseScale = enter.scale !== undefined ? enter.scale : 1;
      const effectiveScale = baseScale * scaleMult * baseScaleMult;
      activeGroup.scale.setScalar(effectiveScale);
      this.applyGroupOpacity(activeGroup, enter.opacity !== undefined ? enter.opacity : 1);

      if (this.floorCatcher) {
        this.floorCatcher.visible = effectiveScale > 0.12;
        this.floorCatcher.position.set(
          activeGroup.position.x,
          activeGroup.position.y - 1.292 * effectiveScale - 0.002,
          activeGroup.position.z
        );
      }
    }

    // 4b. Escultura saliente alejándose suavemente en profundidad (sin salto de escala)
    const exitingGroup = this.transitionState?.exitingGroup;
    if (exitingGroup && exitingGroup !== activeGroup) {
      const exit = this.transitionState.exitOffset;
      exitingGroup.position.x = focusPosX + exit.x;
      exitingGroup.position.y = focusOffsetY + exit.y;
      exitingGroup.position.z = exit.z;
      exitingGroup.rotation.y = exit.rotY !== undefined ? exit.rotY : 0;
      exitingGroup.rotation.x = exit.rotX !== undefined ? exit.rotX : 0;
      const baseScale = exit.scale !== undefined ? exit.scale : 1;
      exitingGroup.scale.setScalar(baseScale * scaleMult * baseScaleMult);
      this.applyGroupOpacity(exitingGroup, exit.opacity !== undefined ? exit.opacity : 1);
    }

    // 5. Animación modular delegada a la escultura activa
    const activeObj = window.Presentation3D_Objects?.[this.currentSceneId];
    if (activeObj && typeof activeObj.animate === "function") {
      activeObj.animate(this, t);
    }

    this.renderer.render(this.scene, this.camera);
  }
}

// ── Inyección de Materiales y Helpers en el Prototipo del Motor 3D ──
if (window.Scene3DMaterials) {
  Object.assign(Presentation3D.prototype, window.Scene3DMaterials);
}
if (window.Scene3DHelpers) {
  Object.assign(Presentation3D.prototype, window.Scene3DHelpers);
}

// Exportación global para app.js
window.Presentation3D = Presentation3D;
