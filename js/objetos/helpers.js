/**
 * =============================================================================
 * OBJETOS 3D — HELPERS Y GENERADORES GEOMÉTRICOS (ESTILO OPCIÓN A • INDUSTRIAL)
 * Presentación de Tesina • CURZAS - UNCo
 * =============================================================================
 * Provee geometrías biseladas/suavizadas (sin aristas duras de años 90),
 * pedestales esculpidos por revolución (LatheGeometry 72 seg.), columnas con
 * éntasis clásico, diales suizos, placas grabadas con autoajuste y chasis
 * de bordes suaves para un acabado mate editorial profesional.
 */

(function () {
  const _roundedBoxCache = new Map();
  let _contactShadowTex = null;

  function getContactShadowTexture() {
    if (_contactShadowTex) return _contactShadowTex;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    // Sombra de oclusión ambiental radial suave (sin borde de disco duro ni efecto plataforma)
    const grad = ctx.createRadialGradient(256, 256, 8, 256, 256, 252);
    grad.addColorStop(0.00, "rgba(15, 23, 42, 0.28)");
    grad.addColorStop(0.32, "rgba(15, 23, 42, 0.18)");
    grad.addColorStop(0.56, "rgba(15, 23, 42, 0.08)");
    grad.addColorStop(0.76, "rgba(15, 23, 42, 0.025)");
    grad.addColorStop(0.90, "rgba(15, 23, 42, 0.006)");
    grad.addColorStop(1.00, "rgba(15, 23, 42, 0.0)");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    _contactShadowTex = new THREE.CanvasTexture(canvas);
    return _contactShadowTex;
  }

  /**
   * Genera una caja con todos sus cantos y esquinas suavizados/biselados en 3D
   * conservando exactamente la envolvente exterior (w, h, d) centrada en (0,0,0).
   */
  function buildRoundedBoxGeo(w, h, d, explicitRadius = null, smoothness = 3) {
    const minDim = Math.max(0.004, Math.min(w, h, d));
    const r = Math.max(
      0.0015,
      Math.min(explicitRadius !== null ? explicitRadius : minDim * 0.14, minDim * 0.28)
    );

    const key = `${w.toFixed(4)}_${h.toFixed(4)}_${d.toFixed(4)}_${r.toFixed(4)}_${smoothness}`;
    if (_roundedBoxCache.has(key)) {
      return _roundedBoxCache.get(key);
    }

    const iw = Math.max(0.001, w - 2 * r);
    const ih = Math.max(0.001, h - 2 * r);
    const id = Math.max(0.001, d - 2 * r);
    const rc = Math.max(0.0006, Math.min(iw, ih) * 0.14);

    const shape = new THREE.Shape();
    const x0 = -iw / 2;
    const y0 = -ih / 2;
    shape.moveTo(x0, y0 + rc);
    shape.lineTo(x0, y0 + ih - rc);
    shape.quadraticCurveTo(x0, y0 + ih, x0 + rc, y0 + ih);
    shape.lineTo(x0 + iw - rc, y0 + ih);
    shape.quadraticCurveTo(x0 + iw, y0 + ih, x0 + iw, y0 + ih - rc);
    shape.lineTo(x0 + iw, y0 + rc);
    shape.quadraticCurveTo(x0 + iw, y0, x0 + iw - rc, y0);
    shape.lineTo(x0 + rc, y0);
    shape.quadraticCurveTo(x0, y0, x0, y0 + rc);

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: id,
      bevelEnabled: true,
      bevelSegments: smoothness,
      steps: 1,
      bevelSize: r,
      bevelThickness: r,
      curveSegments: 6
    });
    geo.center();
    geo.computeVertexNormals();
    geo.userData._isRefinedRoundedBox = true;

    _roundedBoxCache.set(key, geo);
    return geo;
  }

  window.Scene3DHelpers = {
    getRoundedBoxGeo(w, h, d, radius = null, smoothness = 3) {
      return buildRoundedBoxGeo(w, h, d, radius, smoothness);
    },

    /** Pedestal de estudio escultórico torneado por revolución (mantiene altura de apoyo exacta) */
    createMuseumPlinth(parent, radius = 1.45, height = 0.22, posY = -1.22) {
      const plinth = new THREE.Group();

      // Geometría exacta: inferior [-0.325*h, +0.28*h], etapa superior [+0.28*h, +0.825*h]
      const yBot = posY - height * 0.325;
      const yMid = posY + height * 0.28;
      const yTop = posY + height * 0.825;

      // 1. Zócalo inferior de basalto mate con chaflán base y entalladura de cuello
      const baseProfile = [
        new THREE.Vector2(0, yBot),
        new THREE.Vector2(radius * 1.07, yBot),
        new THREE.Vector2(radius * 1.11, yBot + height * 0.08),
        new THREE.Vector2(radius * 1.09, yMid - height * 0.07),
        new THREE.Vector2(radius * 1.04, yMid - height * 0.02),
        new THREE.Vector2(radius * 0.99, yMid),
        new THREE.Vector2(0, yMid)
      ];
      const baseMesh = new THREE.Mesh(
        new THREE.LatheGeometry(baseProfile, 72),
        this.graniteMat(0x1e293b, 0.56, 0.14)
      );
      baseMesh.castShadow = true;
      baseMesh.receiveShadow = true;
      plinth.add(baseMesh);

      // 2. Meseta superior cerámica marfil mate con labio biselado continuo
      const topProfile = [
        new THREE.Vector2(0, yMid),
        new THREE.Vector2(radius * 1.00, yMid),
        new THREE.Vector2(radius * 1.035, yMid + height * 0.09),
        new THREE.Vector2(radius * 1.025, yTop - height * 0.10),
        new THREE.Vector2(radius * 0.985, yTop - height * 0.015),
        new THREE.Vector2(radius * 0.96, yTop),
        new THREE.Vector2(0, yTop)
      ];
      const topMesh = new THREE.Mesh(
        new THREE.LatheGeometry(topProfile, 72),
        this.marbleMat(0xf6f4ee, 0.60)
      );
      topMesh.castShadow = true;
      topMesh.receiveShadow = true;
      plinth.add(topMesh);

      // 3. Filete perimetral de latón champán embutido en la garganta
      const rimMesh = new THREE.Mesh(
        new THREE.TorusGeometry(radius * 1.015, 0.013, 18, 72),
        this.brassMat(0xcfa346, 0.26, 0.9)
      );
      rimMesh.rotation.x = Math.PI / 2;
      rimMesh.position.y = yMid + 0.002;
      plinth.add(rimMesh);

      // 4. Halo suave de oclusión de contacto en el suelo de galería (difuminado radial)
      const shadowMesh = new THREE.Mesh(
        new THREE.CircleGeometry(radius * 1.46, 64),
        new THREE.MeshBasicMaterial({
          map: getContactShadowTexture(),
          transparent: true,
          opacity: 0.48,
          depthWrite: false
        })
      );
      shadowMesh.rotation.x = -Math.PI / 2;
      shadowMesh.position.y = yBot - 0.003;
      plinth.add(shadowMesh);

      parent.add(plinth);
      return plinth;
    },

    /** Aro astronómico / armilar en latón satinado de alta resolución */
    createBrassArmillaryRing(radius, tube = 0.018, parent) {
      const geo = new THREE.TorusGeometry(radius, tube, 24, 96);
      const mesh = new THREE.Mesh(geo, this.brassMat());
      if (parent) {
        parent.add(mesh);
      }
      return mesh;
    },

    /**
     * Columna Arquitectónica con Éntasis Torneado y Ábaco Biselado
     */
    createClassicalColumn(height = 1.0, radius = 0.1, hexColor = 0xcfa346, isFluted = true) {
      const colGroup = new THREE.Group();

      // 1. Plinto ático biselado + moldura tórica satinada
      const plinthBox = new THREE.Mesh(
        buildRoundedBoxGeo(radius * 2.8, radius * 0.6, radius * 2.8, radius * 0.14, 3),
        this.graniteMat(0x1e293b)
      );
      plinthBox.position.y = -height / 2 + radius * 0.3;
      plinthBox.castShadow = true;
      plinthBox.receiveShadow = true;
      colGroup.add(plinthBox);

      const torusBase = new THREE.Mesh(
        new THREE.TorusGeometry(radius * 1.18, radius * 0.20, 18, 48),
        this.brassMat(hexColor)
      );
      torusBase.rotation.x = Math.PI / 2;
      torusBase.position.y = -height / 2 + radius * 0.72;
      colGroup.add(torusBase);

      // 2. Fuste esculpido por LatheGeometry continuo entre base y collarín (cero huecos en cualquier proporción)
      const yShaftBot = -height / 2 + radius * 0.70;
      const yShaftTop = height / 2 - radius * 0.60;
      const shaftLen = Math.max(0.05, yShaftTop - yShaftBot);
      const shaftMidY = (yShaftBot + yShaftTop) * 0.5;
      const shaftPts = [
        new THREE.Vector2(0, yShaftBot),
        new THREE.Vector2(radius * 1.02, yShaftBot),
        new THREE.Vector2(radius * 0.99, yShaftBot + shaftLen * 0.25),
        new THREE.Vector2(radius * 0.96, shaftMidY),
        new THREE.Vector2(radius * 0.92, yShaftBot + shaftLen * 0.78),
        new THREE.Vector2(radius * 0.90, yShaftTop),
        new THREE.Vector2(0, yShaftTop)
      ];
      const shaft = new THREE.Mesh(
        new THREE.LatheGeometry(shaftPts, 48),
        this.marbleMat(0xf6f4ee)
      );
      shaft.castShadow = true;
      shaft.receiveShadow = true;
      colGroup.add(shaft);

      if (isFluted) {
        const flutesCount = 12;
        for (let f = 0; f < flutesCount; f++) {
          const a = (f * 2 * Math.PI) / flutesCount;
          const fx = Math.cos(a) * (radius * 0.95);
          const fz = Math.sin(a) * (radius * 0.95);
          const fluteLine = new THREE.Mesh(
            new THREE.CylinderGeometry(0.0038, 0.0038, shaftLen * 0.95, 10),
            this.brassMat(hexColor)
          );
          fluteLine.position.set(fx, shaftMidY, fz);
          colGroup.add(fluteLine);
        }
      }

      // 3. Capitel moldeado + ábaco de bordes suaves
      const collar = new THREE.Mesh(
        new THREE.TorusGeometry(radius * 1.02, radius * 0.13, 18, 48),
        this.brassMat(hexColor)
      );
      collar.rotation.x = Math.PI / 2;
      collar.position.y = height / 2 - radius * 0.62;
      colGroup.add(collar);

      const echPts = [
        new THREE.Vector2(radius * 0.92, 0),
        new THREE.Vector2(radius * 1.15, radius * 0.14),
        new THREE.Vector2(radius * 1.46, radius * 0.34),
        new THREE.Vector2(radius * 1.50, radius * 0.48),
        new THREE.Vector2(0, radius * 0.48)
      ];
      const capitalEchinus = new THREE.Mesh(
        new THREE.LatheGeometry(echPts, 48),
        this.brassMat(hexColor)
      );
      capitalEchinus.position.y = height / 2 - radius * 0.60;
      colGroup.add(capitalEchinus);

      const capitalAbacus = new THREE.Mesh(
        buildRoundedBoxGeo(radius * 3.0, radius * 0.44, radius * 3.0, radius * 0.12, 3),
        this.marbleMat(0xf6f4ee)
      );
      capitalAbacus.position.y = height / 2;
      capitalAbacus.castShadow = true;
      colGroup.add(capitalAbacus);

      return colGroup;
    },

    /**
     * Cartela Editorial Suiza de Alta Precisión en 3D
     */
    createLabelSprite(title, subtitle = "", color = "#0a2540", isMain = false, customScale = null, opts = {}) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const retina = 2;

      const fontTitleSize = isMain ? 40 : 33;
      const fontSubSize = isMain ? 24 : 20;

      ctx.font = `700 ${fontTitleSize}px 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
      const titleWidth = ctx.measureText(title).width;

      ctx.font = `600 ${fontSubSize}px 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
      const subWidth = subtitle ? ctx.measureText(subtitle).width : 0;

      const maxTextWidth = Math.max(titleWidth, subWidth);
      const logicalWidth = Math.max(isMain ? 580 : 450, Math.round(maxTextWidth + 68));
      const logicalHeight = subtitle ? (isMain ? 138 : 118) : (isMain ? 88 : 74);

      canvas.width = logicalWidth * retina;
      canvas.height = logicalHeight * retina;
      ctx.scale(retina, retina);

      const pad = 6;
      const w = logicalWidth - pad * 2;
      const h = logicalHeight - pad * 2;
      const r = 10;

      ctx.shadowColor = "rgba(15, 23, 42, 0.10)";
      ctx.shadowBlur = 14;
      ctx.shadowOffsetY = 3;

      ctx.fillStyle = opts?.bg || "rgba(252, 251, 248, 0.96)";

      ctx.beginPath();
      ctx.moveTo(pad + r, pad);
      ctx.lineTo(pad + w - r, pad);
      ctx.quadraticCurveTo(pad + w, pad, pad + w, pad + r);
      ctx.lineTo(pad + w, pad + h - r);
      ctx.quadraticCurveTo(pad + w, pad + h, pad + w - r, pad + h);
      ctx.lineTo(pad + r, pad + h);
      ctx.quadraticCurveTo(pad, pad + h, pad, pad + h - r);
      ctx.lineTo(pad, pad + r);
      ctx.quadraticCurveTo(pad, pad, pad + r, pad);
      ctx.closePath();
      ctx.fill();

      ctx.shadowColor = "transparent";
      ctx.strokeStyle = opts?.borderColor || (isMain ? "rgba(180, 131, 36, 0.55)" : "rgba(15, 23, 42, 0.16)");
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const titleY = subtitle ? (pad + h * 0.37) : (logicalHeight / 2);
      ctx.font = `700 ${fontTitleSize}px 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
      ctx.fillStyle = color;
      ctx.fillText(title, logicalWidth / 2, titleY);

      if (subtitle) {
        const lineY = pad + h * 0.58;
        ctx.strokeStyle = "rgba(15, 23, 42, 0.08)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pad + 24, lineY);
        ctx.lineTo(pad + w - 24, lineY);
        ctx.stroke();

        ctx.font = `600 ${fontSubSize}px 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
        ctx.fillStyle = opts?.subColor || "#334155";
        ctx.fillText(subtitle, logicalWidth / 2, pad + h * 0.78);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        depthTest: false,
        depthWrite: false
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.renderOrder = opts?.renderOrder || (isMain ? 150 : 120);

      const aspect = logicalWidth / logicalHeight;
      if (customScale) {
        sprite.scale.set(customScale.x, customScale.x / aspect, 1);
      } else {
        const targetWidth = isMain ? 1.52 : 1.15;
        sprite.scale.set(targetWidth, targetWidth / aspect, 1);
      }

      return sprite;
    },

    /** Atril de Museo con base biselada para Cartelas 3D */
    createMuseumPlaqueStand(title, subtitle = "", color = "#0f2d59", standHeight = 0.35, customScale = null) {
      const standGroup = new THREE.Group();

      const baseMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.075, 0.095, 0.028, 48),
        this.brassMat(0xcfa346)
      );
      baseMesh.position.y = 0.014;
      standGroup.add(baseMesh);

      const rodMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.014, standHeight, 24),
        this.brassMat(0xcfa346)
      );
      rodMesh.position.y = standHeight / 2;
      standGroup.add(rodMesh);

      const jointMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.022, 24, 24),
        this.brassMat(0xdfba52)
      );
      jointMesh.position.y = standHeight;
      standGroup.add(jointMesh);

      const plaqueSprite = this.createLabelSprite(title, subtitle, color, false, customScale, { depthTest: false, renderOrder: 130 });
      plaqueSprite.position.y = standHeight + 0.16;
      standGroup.add(plaqueSprite);

      return standGroup;
    },

    /** Dial Graduado Torneado de Precisión (Diseño Industrial Suizo) */
    createGraduatedDial(radius = 0.22, opts = {}) {
      const dialGroup = new THREE.Group();
      const isDark = opts.theme !== "light";

      const bezelPts = [
        new THREE.Vector2(0, -0.018),
        new THREE.Vector2(radius * 1.12, -0.018),
        new THREE.Vector2(radius * 1.135, -0.008),
        new THREE.Vector2(radius * 1.09, 0.014),
        new THREE.Vector2(radius * 1.03, 0.018),
        new THREE.Vector2(0, 0.018)
      ];
      const bezel = new THREE.Mesh(
        new THREE.LatheGeometry(bezelPts, 64),
        this.brassMat(opts.brassColor || 0xcfa346, 0.26, 0.90)
      );
      bezel.castShadow = true;
      dialGroup.add(bezel);

      const rimTorus = new THREE.Mesh(
        new THREE.TorusGeometry(radius * 1.045, 0.010, 18, 64),
        this.goldMat(0xdfba52)
      );
      rimTorus.rotation.x = Math.PI / 2;
      rimTorus.position.y = 0.016;
      dialGroup.add(rimTorus);

      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = isDark ? "#0f172a" : "#faf8f4";
      ctx.beginPath();
      ctx.arc(256, 256, 250, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = isDark ? "rgba(212, 175, 55, 0.45)" : "rgba(180, 131, 36, 0.35)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(256, 256, 235, 0, Math.PI * 2);
      ctx.arc(256, 256, 195, 0, Math.PI * 2);
      ctx.stroke();

      const totalTicks = opts.divisions || 60;
      for (let i = 0; i < totalTicks; i++) {
        const angle = (i * 2 * Math.PI) / totalTicks - Math.PI / 2;
        const isMajor = i % 5 === 0;
        const isCard = i % 15 === 0;
        const len = isCard ? 28 : (isMajor ? 18 : 10);
        const rOuter = 233;
        const rInner = rOuter - len;

        ctx.strokeStyle = isCard ? "#e2bc56" : (isMajor ? (isDark ? "#e2e8f0" : "#0f2d59") : (isDark ? "#64748b" : "#94a3b8"));
        ctx.lineWidth = isCard ? 3 : (isMajor ? 2 : 1.2);

        ctx.beginPath();
        ctx.moveTo(256 + Math.cos(angle) * rOuter, 256 + Math.sin(angle) * rOuter);
        ctx.lineTo(256 + Math.cos(angle) * rInner, 256 + Math.sin(angle) * rInner);
        ctx.stroke();

        if (isMajor && (opts.showNumbers !== false)) {
          const val = opts.isPercentage ? `${Math.round((i / totalTicks) * 100)}` : `${Math.round((i * 360) / totalTicks)}°`;
          const rText = 175;
          const tx = 256 + Math.cos(angle) * rText;
          const ty = 256 + Math.sin(angle) * rText;
          ctx.fillStyle = isCard ? "#e2bc56" : (isDark ? "#94a3b8" : "#475569");
          ctx.font = "bold 18px 'Inter', sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(val, tx, ty);
        }
      }

      if (opts.title) {
        ctx.fillStyle = isDark ? "#f0cf70" : "#0f2d59";
        ctx.font = "bold 22px 'Cinzel', serif, Georgia";
        ctx.textAlign = "center";
        ctx.fillText(opts.title, 256, 310);
        if (opts.sub) {
          ctx.fillStyle = isDark ? "#94a3b8" : "#64748b";
          ctx.font = "14px 'Inter', sans-serif";
          ctx.fillText(opts.sub, 256, 335);
        }
      }

      const faceTex = new THREE.CanvasTexture(canvas);
      faceTex.anisotropy = 4;
      faceTex.minFilter = THREE.LinearFilter;
      const faceMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(radius * 0.98, radius * 0.98, 0.005, 64),
        new THREE.MeshStandardMaterial({
          map: faceTex,
          roughness: 0.42,
          metalness: isDark ? 0.22 : 0.05
        })
      );
      faceMesh.position.y = 0.019;
      dialGroup.add(faceMesh);

      const needlePivot = new THREE.Group();
      needlePivot.position.y = 0.024;

      const needleBlade = new THREE.Mesh(
        new THREE.ConeGeometry(radius * 0.042, radius * 0.80, 12),
        this.goldMat(0xe0ba56)
      );
      needleBlade.rotation.x = Math.PI / 2;
      needleBlade.position.z = radius * 0.36;
      needlePivot.add(needleBlade);

      const needleTail = new THREE.Mesh(
        buildRoundedBoxGeo(radius * 0.055, 0.006, radius * 0.20, 0.002, 2),
        this.brassMat(0xcfa346)
      );
      needleTail.position.z = -radius * 0.11;
      needlePivot.add(needleTail);

      const needleCap = new THREE.Mesh(
        new THREE.CylinderGeometry(radius * 0.115, radius * 0.135, 0.015, 32),
        this.goldMat(0xe0ba56)
      );
      needlePivot.add(needleCap);

      dialGroup.add(needlePivot);
      dialGroup.needle = needlePivot;

      return dialGroup;
    },

    /** Placa Técnica Biselada con Autoajuste Tipográfico y Remaches Discretos */
    createEngravedPlaque(w = 0.85, h = 0.45, title = "", subtitle = "", details = [], opts = {}) {
      const plaqueGroup = new THREE.Group();

      // 1. Bastidor metálico biselado de bordes redondeados
      const basePlate = new THREE.Mesh(
        buildRoundedBoxGeo(w, h, 0.026, Math.min(w, h) * 0.035, 3),
        this.brassMat(opts.brassColor || 0xcfa346, 0.28, 0.88)
      );
      basePlate.castShadow = true;
      basePlate.receiveShadow = true;
      plaqueGroup.add(basePlate);

      // 2. Carátula mate con tipografía autoajustada y alto contraste
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = Math.round(1024 * (h / w));
      const ctx = canvas.getContext("2d");

      const isDark = opts.theme !== "light";
      ctx.fillStyle = isDark ? "#0f172a" : "#f7f5f0";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "#cfa346";
      ctx.lineWidth = 3.5;
      ctx.strokeRect(22, 22, canvas.width - 44, canvas.height - 44);
      ctx.lineWidth = 1.25;
      ctx.strokeRect(34, 34, canvas.width - 68, canvas.height - 68);

      const maxSafeWidth = canvas.width - 170;
      const drawFittedLine = (text, startPx, minPx, weight, family, color, yPos) => {
        let size = Math.max(minPx, Math.round(startPx));
        ctx.font = `${weight} ${size}px ${family}`;
        while (size > minPx && ctx.measureText(text).width > maxSafeWidth) {
          size -= 2;
          ctx.font = `${weight} ${size}px ${family}`;
        }
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, canvas.width / 2, yPos);
      };

      drawFittedLine(
        title,
        canvas.height * 0.165,
        20,
        "bold",
        "'Cinzel', serif, Georgia",
        isDark ? "#f0cf70" : "#0f2d59",
        canvas.height * 0.28
      );

      if (subtitle) {
        drawFittedLine(
          subtitle,
          canvas.height * 0.105,
          15,
          "600",
          "'Inter', sans-serif",
          isDark ? "#e2e8f0" : "#334155",
          canvas.height * 0.50
        );
      }

      if (details && details.length > 0) {
        ctx.strokeStyle = "rgba(207, 163, 70, 0.42)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(canvas.width * 0.14, canvas.height * 0.63);
        ctx.lineTo(canvas.width * 0.86, canvas.height * 0.63);
        ctx.stroke();

        const detailText = details.join("  •  ");
        drawFittedLine(
          detailText,
          canvas.height * 0.088,
          13,
          "500",
          "'Inter', sans-serif",
          isDark ? "#cbd5e1" : "#475569",
          canvas.height * 0.79
        );
      }

      const plaqueTex = new THREE.CanvasTexture(canvas);
      plaqueTex.anisotropy = 4;
      plaqueTex.minFilter = THREE.LinearFilter;
      plaqueTex.magFilter = THREE.LinearFilter;
      plaqueTex.generateMipmaps = false;

      const faceMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(w * 0.92, h * 0.90),
        new THREE.MeshStandardMaterial({
          map: plaqueTex,
          roughness: 0.44,
          metalness: isDark ? 0.12 : 0.04
        })
      );
      faceMesh.position.z = 0.0145;
      plaqueGroup.add(faceMesh);

      // 3. Cuatro remaches satinados sobrios en esquinas
      const sx = w * 0.445;
      const sy = h * 0.415;
      [[-sx, -sy], [sx, -sy], [-sx, sy], [sx, sy]].forEach(([cx, cy]) => {
        const rivet = new THREE.Mesh(
          new THREE.SphereGeometry(0.009, 16, 12),
          this.goldMat(0xdfba52)
        );
        rivet.scale.set(1, 1, 0.45);
        rivet.position.set(cx, cy, 0.016);
        plaqueGroup.add(rivet);
      });

      return plaqueGroup;
    },

    /** Chasis Editorial Biselado con Moldura Continua (sin esquinas duras) */
    createMachinedChassis(w = 1.0, h = 0.14, d = 0.8, opts = {}) {
      const chassis = new THREE.Group();

      const bodyMat = new THREE.MeshStandardMaterial({
        color: opts.color || 0x263142,
        roughness: 0.52,
        metalness: 0.14,
        envMapIntensity: 0.75
      });

      const body = new THREE.Mesh(
        buildRoundedBoxGeo(w, h, d, Math.min(w, h, d) * 0.12, 3),
        bodyMat
      );
      body.castShadow = true;
      body.receiveShadow = true;
      chassis.add(body);

      // Cantoneras suaves y moldura continua de latón champán
      const cx = w / 2 - 0.042;
      const cy = h / 2 - 0.022;
      const cz = d / 2 - 0.042;

      const cornerGeo = buildRoundedBoxGeo(0.082, 0.042, 0.082, 0.010, 3);
      const brassTrimMat = this.brassMat(0xcfa346);
      [
        [-cx, -cy, -cz], [cx, -cy, -cz], [-cx, -cy, cz], [cx, -cy, cz],
        [-cx, cy, -cz], [cx, cy, -cz], [-cx, cy, cz], [cx, cy, cz]
      ].forEach(([x, y, z]) => {
        const corner = new THREE.Mesh(cornerGeo, brassTrimMat);
        corner.position.set(x, y, z);
        chassis.add(corner);
      });

      const trim = new THREE.Mesh(
        buildRoundedBoxGeo(w * 1.008, 0.016, d * 1.008, 0.005, 2),
        brassTrimMat
      );
      trim.position.y = h / 2 + 0.004;
      chassis.add(trim);

      return chassis;
    },

    /** Sello Institucional UNCo en Relieve Torneado de Alta Precisión */
    createAcademicSeal(radius = 0.14, opts = {}) {
      const sealGroup = new THREE.Group();

      const sealPts = [
        new THREE.Vector2(0, -0.011),
        new THREE.Vector2(radius * 0.96, -0.011),
        new THREE.Vector2(radius, -0.004),
        new THREE.Vector2(radius, 0.006),
        new THREE.Vector2(radius * 0.95, 0.012),
        new THREE.Vector2(0, 0.012)
      ];
      const base = new THREE.Mesh(
        new THREE.LatheGeometry(sealPts, 64),
        this.brassMat(opts.brassColor || 0xcfa346)
      );
      sealGroup.add(base);

      const wreath = new THREE.Mesh(
        new THREE.TorusGeometry(radius * 0.92, radius * 0.095, 18, 64),
        this.goldMat(0xdfba52)
      );
      wreath.rotation.x = Math.PI / 2;
      wreath.position.y = 0.011;
      sealGroup.add(wreath);

      const sunCore = new THREE.Mesh(
        new THREE.SphereGeometry(radius * 0.36, 32, 20),
        this.goldMat(0xe0ba56)
      );
      sunCore.scale.set(1, 0.42, 1);
      sunCore.position.y = 0.013;
      sealGroup.add(sunCore);

      return sealGroup;
    }
  };
})();
