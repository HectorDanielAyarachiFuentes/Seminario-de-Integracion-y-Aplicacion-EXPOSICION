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

      ctx.shadowColor = "rgba(15, 23, 42, 0.14)";
      ctx.shadowBlur = 16;
      ctx.shadowOffsetY = 4;

      ctx.fillStyle = opts?.bg || "#ffffff";

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
      ctx.strokeStyle = opts?.borderColor || (isMain ? "rgba(180, 131, 36, 0.75)" : "rgba(15, 23, 42, 0.18)");
      ctx.lineWidth = isMain ? 2 : 1.5;
      ctx.stroke();

      // Filete superior institucional en cartelas principales
      if (isMain) {
        ctx.save();
        ctx.clip();
        ctx.fillStyle = "#0f2d59";
        ctx.fillRect(pad, pad, w, 6);
        ctx.fillStyle = "#d4af37";
        ctx.fillRect(pad, pad + 6, w, 2);
        ctx.restore();
      }

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const titleY = subtitle ? (pad + h * (isMain ? 0.41 : 0.37)) : (logicalHeight / 2);
      ctx.font = `700 ${fontTitleSize}px 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
      ctx.fillStyle = color;
      ctx.fillText(title, logicalWidth / 2, titleY);

      if (subtitle) {
        const lineY = pad + h * 0.61;
        ctx.strokeStyle = "rgba(180, 131, 36, 0.25)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pad + 28, lineY);
        ctx.lineTo(pad + w - 28, lineY);
        ctx.stroke();

        ctx.font = `600 ${fontSubSize}px 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
        ctx.fillStyle = opts?.subColor || "#475569";
        ctx.fillText(subtitle, logicalWidth / 2, pad + h * 0.80);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        toneMapped: false,
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

      // 2. Carátula mate con tipografía autoajustada y márgenes internos proporcionales
      const canvas = document.createElement("canvas");
      canvas.width = 1280;
      canvas.height = Math.max(160, Math.round(1280 * (h / w)));
      const ctx = canvas.getContext("2d");

      const isDark = opts.theme !== "light";
      ctx.fillStyle = isDark ? "#0f172a" : "#f7f5f0";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const padOuter = Math.max(12, Math.round(Math.min(22, canvas.height * 0.065)));
      const padInner = padOuter + Math.max(8, Math.round(Math.min(12, canvas.height * 0.04)));

      ctx.strokeStyle = "#cfa346";
      ctx.lineWidth = 3.5;
      ctx.strokeRect(padOuter, padOuter, canvas.width - padOuter * 2, canvas.height - padOuter * 2);
      ctx.lineWidth = 1.25;
      ctx.strokeRect(padInner, padInner, canvas.width - padInner * 2, canvas.height - padInner * 2);

      const maxSafeWidth = canvas.width - 200;
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

      const hasDetails = details && details.length > 0;
      const titleY = hasDetails ? canvas.height * 0.275 : (subtitle ? canvas.height * 0.38 : canvas.height * 0.50);
      drawFittedLine(
        title,
        canvas.height * (hasDetails ? 0.165 : 0.21),
        20,
        "bold",
        "'Cinzel', serif, Georgia",
        isDark ? "#f0cf70" : "#0f2d59",
        titleY
      );

      if (subtitle) {
        drawFittedLine(
          subtitle,
          canvas.height * (hasDetails ? 0.105 : 0.135),
          15,
          "600",
          "'Inter', sans-serif",
          isDark ? "#e2e8f0" : "#334155",
          hasDetails ? canvas.height * 0.51 : canvas.height * 0.67
        );
      }

      if (hasDetails) {
        ctx.strokeStyle = "rgba(207, 163, 70, 0.42)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(canvas.width * 0.14, canvas.height * 0.65);
        ctx.lineTo(canvas.width * 0.86, canvas.height * 0.65);
        ctx.stroke();

        const detailText = details.join("  •  ");
        drawFittedLine(
          detailText,
          canvas.height * 0.090,
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

      // 3. Cuatro remaches satinados sobrios en esquinas del marco exterior
      const sx = w * 0.468;
      const sy = h * 0.425;
      [[-sx, -sy], [sx, -sy], [-sx, sy], [sx, sy]].forEach(([cx, cy]) => {
        const rivet = new THREE.Mesh(
          new THREE.SphereGeometry(0.007, 16, 12),
          this.goldMat(0xdfba52)
        );
        rivet.scale.set(1, 1, 0.45);
        rivet.position.set(cx, cy, 0.016);
        plaqueGroup.add(rivet);
      });

      return plaqueGroup;
    },

    /**
     * Instala una placa museográfica frontal sobre un zócalo/atril bajo de granito y latón,
     * garantizando que su borde inferior nunca quede enterrado debajo de floorY.
     */
    createMountedPlaque(w = 1.08, h = 0.27, title = "", subtitle = "", details = [], opts = {}) {
      const mount = new THREE.Group();
      const tilt = opts.tilt !== undefined ? opts.tilt : -0.25;
      const floorY = opts.floorY !== undefined ? opts.floorY : -1.0385;
      const clearance = opts.clearance !== undefined ? opts.clearance : 0.024;

      const plaque = this.createEngravedPlaque(w, h, title, subtitle, details, opts);
      const bottomOffset = (h * 0.5) * Math.cos(tilt) + 0.014 * Math.abs(Math.sin(tilt));
      plaque.position.set(0, floorY + clearance + bottomOffset, 0);
      plaque.rotation.x = tilt;
      mount.add(plaque);

      const railH = Math.max(0.020, clearance + 0.008);
      const rail = new THREE.Mesh(
        buildRoundedBoxGeo(w * 0.72, railH, 0.095, 0.006, 2),
        this.graniteMat(0x1e293b, 0.45, 0.25)
      );
      rail.position.set(0, floorY + railH * 0.5, -0.02);
      rail.castShadow = true;
      rail.receiveShadow = true;
      mount.add(rail);

      [-w * 0.28, w * 0.28].forEach((fx) => {
        const foot = new THREE.Mesh(
          new THREE.CylinderGeometry(0.014, 0.018, clearance + 0.032, 16),
          this.brassMat(0xcfa346)
        );
        foot.position.set(fx, floorY + (clearance + 0.032) * 0.5, -0.025);
        mount.add(foot);
      });

      return mount;
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
    },

    /**
     * Figura Humana Clásica Esculpida en Mármol ("Estilo David" / Escultura Académica)
     * Enraizada en y = 0, altura total ~1.34 * scale.
     * Soporta poses expresivas: 'teaching' | 'burdened' | 'open' | 'raisingOrb' | 'dialogue' | 'reaching'
     */
    createClassicalFigure(opts = {}) {
      const fig = new THREE.Group();
      const scale = opts.scale !== undefined ? opts.scale : 1.0;
      const pose = opts.pose || "open";
      const ivoryMat = this.marbleMat(opts.marbleColor || 0xf8f6f0, 0.42);
      const warmMarbleMat = this.marbleMat(0xf0ece1, 0.48);
      const goldMat = this.goldMat(0xe0ba56);
      const togaMat = new THREE.MeshStandardMaterial({
        color: opts.togaColor !== undefined ? opts.togaColor : 0x163868,
        roughness: 0.58,
        metalness: 0.08
      });

      const makeLimb = (rBot, rMid, rTop, len, mat) => {
        const pts = [
          new THREE.Vector2(0, 0),
          new THREE.Vector2(rBot, 0),
          new THREE.Vector2(rBot * 1.15, len * 0.18),
          new THREE.Vector2(rMid, len * 0.56),
          new THREE.Vector2(rTop * 0.96, len * 0.86),
          new THREE.Vector2(rTop, len),
          new THREE.Vector2(0, len)
        ];
        const m = new THREE.Mesh(new THREE.LatheGeometry(pts, 24), mat);
        m.castShadow = true;
        m.receiveShadow = true;
        return m;
      };

      const buildFoot = (px, pz, yaw) => {
        const f = new THREE.Group();
        const sole = new THREE.Mesh(new THREE.SphereGeometry(0.050, 18, 12), ivoryMat);
        sole.scale.set(0.76, 0.36, 1.62);
        sole.position.y = 0.018;
        f.add(sole);
        const strap = new THREE.Mesh(new THREE.TorusGeometry(0.036, 0.006, 10, 20), goldMat);
        strap.rotation.x = Math.PI / 2.4;
        strap.position.set(0, 0.032, 0.014);
        f.add(strap);
        f.position.set(px, 0, pz);
        f.rotation.y = yaw;
        return f;
      };

      fig.add(buildFoot(0.10, 0.03, 0.10));
      fig.add(buildFoot(-0.13, -0.02, -0.20));

      const rightLeg = makeLimb(0.035, 0.054, 0.052, 0.34, ivoryMat);
      rightLeg.position.set(0.10, 0.02, 0.02);
      fig.add(rightLeg);

      const leftLeg = makeLimb(0.034, 0.052, 0.050, 0.34, ivoryMat);
      leftLeg.position.set(-0.13, 0.02, -0.01);
      leftLeg.rotation.z = -0.06;
      leftLeg.rotation.x = 0.07;
      fig.add(leftLeg);

      // Túnica inferior drapeada
      const skirtProfile = [
        new THREE.Vector2(0, 0.30),
        new THREE.Vector2(0.23, 0.30),
        new THREE.Vector2(0.21, 0.39),
        new THREE.Vector2(0.185, 0.51),
        new THREE.Vector2(0.16, 0.62),
        new THREE.Vector2(0.145, 0.66),
        new THREE.Vector2(0, 0.66)
      ];
      const tunicSkirt = new THREE.Mesh(new THREE.LatheGeometry(skirtProfile, 36), togaMat);
      tunicSkirt.scale.set(1.10, 1, 0.85);
      tunicSkirt.castShadow = true;
      fig.add(tunicSkirt);

      for (let i = 0; i < 5; i++) {
        const a = -0.8 + i * 0.40;
        const foldCurve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(Math.sin(a) * 0.165, 0.64, Math.cos(a) * 0.135),
          new THREE.Vector3(Math.sin(a) * 0.20, 0.48, Math.cos(a) * 0.155),
          new THREE.Vector3(Math.sin(a) * 0.23, 0.31, Math.cos(a) * 0.175)
        ]);
        fig.add(new THREE.Mesh(new THREE.TubeGeometry(foldCurve, 12, 0.016, 10, false), togaMat));
      }

      const waistBelt = new THREE.Mesh(new THREE.TorusGeometry(0.162, 0.012, 14, 40), goldMat);
      waistBelt.rotation.x = Math.PI / 2;
      waistBelt.scale.set(1.10, 0.84, 1);
      waistBelt.position.y = 0.65;
      fig.add(waistBelt);

      // Grupo superior articulado desde la cintura (permite inclinación expresiva en 'burdened')
      const upperBody = new THREE.Group();
      upperBody.position.set(0, 0.63, 0);
      if (pose === "burdened") {
        upperBody.rotation.x = 0.32;
      } else if (opts.torsoLeanX) {
        upperBody.rotation.x = opts.torsoLeanX;
      }

      const torsoProfile = [
        new THREE.Vector2(0, 0.0),
        new THREE.Vector2(0.15, 0.0),
        new THREE.Vector2(0.142, 0.09),
        new THREE.Vector2(0.165, 0.21),
        new THREE.Vector2(0.185, 0.33),
        new THREE.Vector2(0.17, 0.40),
        new THREE.Vector2(0.10, 0.43),
        new THREE.Vector2(0.06, 0.45),
        new THREE.Vector2(0, 0.45)
      ];
      const torsoMesh = new THREE.Mesh(new THREE.LatheGeometry(torsoProfile, 36), ivoryMat);
      torsoMesh.scale.set(1.20, 1.0, 0.72);
      torsoMesh.castShadow = true;
      upperBody.add(torsoMesh);

      const shoulderL = new THREE.Mesh(new THREE.SphereGeometry(0.068, 20, 20), ivoryMat);
      shoulderL.position.set(-0.21, 0.36, 0);
      upperBody.add(shoulderL);

      const shoulderR = new THREE.Mesh(new THREE.SphereGeometry(0.068, 20, 20), ivoryMat);
      shoulderR.position.set(0.21, 0.36, 0);
      upperBody.add(shoulderR);

      // Banda académica cruzada con fíbula dorada
      const sashCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.19, 0.39, -0.04),
        new THREE.Vector3(0.17, 0.33, 0.11),
        new THREE.Vector3(0.02, 0.17, 0.145),
        new THREE.Vector3(-0.17, 0.03, 0.09)
      ]);
      upperBody.add(new THREE.Mesh(new THREE.TubeGeometry(sashCurve, 24, 0.033, 14, false), togaMat));

      const fibula = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.015, 20), goldMat);
      fibula.rotation.x = Math.PI / 2.2;
      fibula.position.set(0.16, 0.35, 0.11);
      upperBody.add(fibula);

      // Cuello y Cabeza Clásica estilo David
      const neck = makeLimb(0.064, 0.054, 0.052, 0.11, ivoryMat);
      neck.position.set(0, 0.43, 0.01);
      upperBody.add(neck);

      const headGroup = new THREE.Group();
      headGroup.position.set(0, 0.58, 0.02);
      if (pose === "burdened") {
        headGroup.rotation.x = 0.24;
      } else if (pose === "raisingOrb") {
        headGroup.rotation.x = -0.16;
      } else if (opts.headRotY) {
        headGroup.rotation.y = opts.headRotY;
      }

      const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.088, 28, 24), ivoryMat);
      cranium.scale.set(0.90, 1.12, 1.0);
      cranium.castShadow = true;
      headGroup.add(cranium);

      const noseCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.022, 0.084),
        new THREE.Vector3(0, -0.014, 0.102)
      ]);
      headGroup.add(new THREE.Mesh(new THREE.TubeGeometry(noseCurve, 8, 0.010, 8, false), ivoryMat));

      const chin = new THREE.Mesh(new THREE.SphereGeometry(0.032, 14, 14), ivoryMat);
      chin.scale.set(0.88, 0.95, 0.92);
      chin.position.set(0, -0.068, 0.052);
      headGroup.add(chin);

      // Rulos clásicos de mármol estilo David
      [
        [-0.065, 0.058, -0.025], [0.065, 0.058, -0.025], [-0.075, 0.018, -0.045],
        [0.075, 0.018, -0.045], [0, 0.068, -0.055], [-0.048, -0.02, -0.065],
        [0.048, -0.02, -0.065], [0, 0.086, -0.008], [-0.038, 0.076, 0.025], [0.038, 0.076, 0.025]
      ].forEach(([hx, hy, hz]) => {
        const curl = new THREE.Mesh(new THREE.SphereGeometry(0.032, 12, 12), warmMarbleMat);
        curl.position.set(hx, hy, hz);
        headGroup.add(curl);
      });

      if (opts.laurel) {
        const crown = new THREE.Mesh(new THREE.TorusGeometry(0.091, 0.011, 12, 32), goldMat);
        crown.rotation.x = Math.PI / 2.35;
        crown.position.set(0, 0.045, -0.005);
        headGroup.add(crown);
      }

      upperBody.add(headGroup);

      // Poses expresivas de brazos (coordenadas relativas a upperBody en y=0.63)
      let lPts, rPts;
      if (pose === "burdened") {
        // Ambos brazos alzados sosteniendo peso opresivo sobre los hombros
        lPts = [[-0.21, 0.36, 0], [-0.30, 0.44, 0.10], [-0.26, 0.62, 0.08]];
        rPts = [[0.21, 0.36, 0], [0.30, 0.44, 0.10], [0.26, 0.62, 0.08]];
      } else if (pose === "raisingOrb") {
        // Brazo derecho alzado sosteniendo esfera de luz; izquierdo reflexivo al pecho
        lPts = [[-0.21, 0.36, 0], [-0.28, 0.22, 0.12], [-0.10, 0.24, 0.19]];
        rPts = [[0.21, 0.36, 0], [0.32, 0.52, 0.08], [0.24, 0.76, 0.10]];
      } else if (pose === "teaching") {
        // Gesto oratorio / docente abriendo la mano hacia la comunidad e híbrido
        lPts = [[-0.21, 0.36, 0], [-0.32, 0.28, 0.12], [-0.40, 0.34, 0.24]];
        rPts = [[0.21, 0.36, 0], [0.34, 0.40, 0.12], [0.44, 0.48, 0.22]];
      } else if (pose === "reaching") {
        // Brazo extendido hacia adelante convergiendo a un objetivo común
        lPts = [[-0.21, 0.36, 0], [-0.26, 0.20, 0.06], [-0.22, 0.08, 0.10]];
        rPts = [[0.21, 0.36, 0], [0.22, 0.34, 0.20], [0.12, 0.38, 0.38]];
      } else if (pose === "dialogue") {
        // Brazos cordiales en intercambio colegiado horizontal
        lPts = [[-0.21, 0.36, 0], [-0.29, 0.24, 0.10], [-0.22, 0.22, 0.22]];
        rPts = [[0.21, 0.36, 0], [0.29, 0.26, 0.12], [0.24, 0.30, 0.26]];
      } else {
        // 'open': Brazos abiertos en serenidad y apertura formativa
        lPts = [[-0.21, 0.36, 0], [-0.34, 0.32, 0.10], [-0.42, 0.38, 0.18]];
        rPts = [[0.21, 0.36, 0], [0.34, 0.32, 0.10], [0.42, 0.38, 0.18]];
      }

      const armSpecs = [
        { key: "leftArm", origin: [-0.21, 0.36, 0], pts: lPts },
        { key: "rightArm", origin: [0.21, 0.36, 0], pts: rPts }
      ];
      armSpecs.forEach(({ key, origin, pts }) => {
        const armPivot = new THREE.Group();
        armPivot.position.set(origin[0], origin[1], origin[2]);

        const localPts = pts.map(
          (p) => new THREE.Vector3(p[0] - origin[0], p[1] - origin[1], p[2] - origin[2])
        );
        const curve = new THREE.CatmullRomCurve3(localPts);
        const arm = new THREE.Mesh(new THREE.TubeGeometry(curve, 20, 0.036, 14, false), ivoryMat);
        arm.castShadow = true;
        armPivot.add(arm);

        const end = localPts[localPts.length - 1];
        const hand = new THREE.Mesh(new THREE.SphereGeometry(0.038, 14, 14), ivoryMat);
        hand.position.copy(end);
        armPivot.add(hand);

        upperBody.add(armPivot);
        fig[key] = armPivot;
      });

      fig.add(upperBody);
      fig.upperBody = upperBody;
      fig.headGroup = headGroup;
      fig.userData.basePose = {
        upperX: upperBody.rotation.x,
        headX: headGroup.rotation.x,
        headY: headGroup.rotation.y
      };
      fig.scale.setScalar(scale);
      return fig;
    },

    /**
     * Anima de forma orgánica y claramente visible una figura clásica esculpida (`createClassicalFigure`),
     * dejando los pies firmes en el pedestal y articulando torso, cabeza y hombros con desfase natural.
     */
    animateClassicalFigure(fig, t, opts = {}) {
      if (!fig) return;
      const base = fig.userData?.basePose || { upperX: 0, headX: 0, headY: 0 };
      const phase = opts.phase || 0;
      const speed = opts.speed !== undefined ? opts.speed : 1.55;
      const wt = t * speed + phase;

      // Armónicos suaves para evitar rigidez pendular y generar pausas expresivas naturales
      const breathWave = Math.sin(wt) * 0.78 + Math.sin(wt * 0.5 + 0.8) * 0.22;
      const gazeWave = Math.sin(wt * 0.68 + 0.45 + phase * 0.35) * 0.76 + Math.sin(wt * 1.36 + 0.9) * 0.24;
      const torsoTurnWave = Math.sin(wt * 0.68 + 0.05 + phase * 0.35) * 0.80 + Math.sin(wt * 1.36 + 0.4) * 0.20;
      const swayWave = Math.sin(wt * 0.84 + 1.1);

      const breathAmp = opts.breathAmp !== undefined ? opts.breathAmp : 0.045;
      const torsoYawAmp = opts.torsoYawAmp !== undefined ? opts.torsoYawAmp : 0.14;
      const torsoRollAmp = opts.torsoRollAmp !== undefined ? opts.torsoRollAmp : 0.032;
      const headYawAmp = opts.headYawAmp !== undefined ? opts.headYawAmp : 0.20;
      const headPitchAmp = opts.headPitchAmp !== undefined ? opts.headPitchAmp : 0.065;
      const armPitchAmp = opts.armPitchAmp !== undefined ? opts.armPitchAmp : 0.16;
      const armRollAmp = opts.armRollAmp !== undefined ? opts.armRollAmp : 0.12;
      const asym = opts.armAsym !== false;

      if (fig.upperBody) {
        fig.upperBody.position.y = 0.63 + breathWave * 0.008;
        fig.upperBody.rotation.x = base.upperX + (opts.torsoPitchBias || 0) + breathWave * breathAmp;
        fig.upperBody.rotation.y = (opts.torsoYawBias || 0) + torsoTurnWave * torsoYawAmp;
        fig.upperBody.rotation.z = swayWave * torsoRollAmp;
      }

      if (fig.headGroup) {
        // La cabeza guía el gesto ligeramente antes que el torso (follow-through natural)
        fig.headGroup.rotation.x = base.headX + (opts.headPitchBias || 0) + Math.sin(wt * 0.96 + 0.7) * headPitchAmp;
        fig.headGroup.rotation.y = base.headY + (opts.headYawBias || 0) + gazeWave * headYawAmp;
        fig.headGroup.rotation.z = Math.sin(wt * 0.72 + 1.1) * (headPitchAmp * 0.48);
      }

      const lArmW = opts.leftArmWeight !== undefined ? opts.leftArmWeight : 1.0;
      const rArmW = opts.rightArmWeight !== undefined ? opts.rightArmWeight : 1.0;

      if (fig.leftArm) {
        const lPitchWave = asym ? (Math.sin(wt * 0.95 - 0.3) * 0.75 + Math.sin(wt * 1.9 + 0.5) * 0.25) : breathWave;
        const lRollWave = Math.sin(wt * 0.82 - 0.2);
        fig.leftArm.rotation.x = (opts.leftArmPitchBias || 0) + lPitchWave * armPitchAmp * lArmW;
        fig.leftArm.rotation.z = (opts.leftArmRollBias || 0) - lRollWave * armRollAmp * lArmW;
      }

      if (fig.rightArm) {
        const rPitchWave = asym ? (Math.sin(wt * 1.02 + 1.75) * 0.75 + Math.sin(wt * 2.04 + 0.9) * 0.25) : breathWave;
        const rRollWave = Math.sin(wt * 0.82 + (asym ? 1.45 : -0.2));
        fig.rightArm.rotation.x = (opts.rightArmPitchBias || 0) + rPitchWave * armPitchAmp * rArmW;
        fig.rightArm.rotation.z = (opts.rightArmRollBias || 0) + rRollWave * armRollAmp * rArmW;
      }
    }
  };
})();
