/**
 * =============================================================================
 * OBJETOS 3D — BLOQUE V: ESCULTURAS 21 A 25
 * Presentación de Tesina • CURZAS - UNCo
 * =============================================================================
 * Representación visual concreta y pertinente de Cronograma, Recursos, Ética y Cierre:
 * 21. anim_21: Espiral Temporal Helicoidal de 7 Meses y 6 Hitos de Campo (Cronograma 2027)
 * 22. anim_22: Trípode Dórico de Viabilidad de Recursos (Apartado 9: Humanos, Técnicos, Costo Cero)
 * 23. anim_23: Cofre Blindado Ley 25.326, Balanza Ética y Pergamino de Inmunidad Laboral
 * 24. anim_24: Faro Monumental de Valor Público y Modernización Docente en la Patagonia
 * 25. anim_25: Gran Medallón de Graduación Laureado UNCo y Atril Abierto al Tribunal Evaluador
 *
 * NOTA DE DISEÑO (Minimalismo y Cero Colisiones):
 * - Espacio amplio entre componentes concéntricos (cero colisiones circulares).
 * - Una única placa técnica grabada de orfebrería por escultura montada en el chasis.
 * - Eliminación de micro-diales redundantes y cartelas co-planares.
 */

window.Presentation3D_Objects = window.Presentation3D_Objects || {};

// ──────────────────────────────────────────────────────────────────────────
// 21. CRONOGRAMA 2027: Espiral Temporal Helicoidal y 6 Balizas de Campo
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_21"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    // Chasis mecanizado con cantoneras de latón
    const chassis = engine.createMachinedChassis(1.64, 0.10, 1.64, { color: 0x1e293b });
    chassis.position.y = -0.92;
    g.add(chassis);

    // Placa técnica de cronograma en el frente del chasis
    const plaqueMaster = engine.createEngravedPlaque(
      1.10,
      0.22,
      "CRONOGRAMA DE ACTIVIDADES 2027",
      "Plan de Trabajo de 7 Meses Intensivos (Mayo - Noviembre)",
      ["6 FASES SECUENCIALES", "DEFENSA ORAL 2027"],
      { theme: "dark" }
    );
    plaqueMaster.position.set(0, -0.84, 0.81);
    g.add(plaqueMaster);

    const group = new THREE.Group();
    group.position.set(0, -0.05, 0);

    // Reloj astronómico horizontal sobre el chasis (anillo graduado de 12 divisiones)
    const dialBase = engine.createGraduatedDial(0.68, {
      divisions: 12,
      title: "2027",
      sub: "7 MESES",
      theme: "dark"
    });
    dialBase.rotation.x = 0;
    dialBase.position.y = -0.80;
    group.add(dialBase);

    // Eje central de latón pulido (Gnomon) emergiendo del centro del dial
    const gnomon = new THREE.Mesh(
      new THREE.CylinderGeometry(0.032, 0.048, 1.54, 24),
      engine.brassMat(0xd4af37)
    );
    gnomon.position.y = -0.02;
    group.add(gnomon);

    // Espiral helicoidal ascendente (inicia a y = -0.55 con radio 0.75, sin colisionar con la base)
    const spiralPoints = [];
    const totalPoints = 120;
    for (let i = 0; i <= totalPoints; i++) {
      const u = i / totalPoints;
      const angle = u * Math.PI * 4.2;
      const radius = 0.72 - u * 0.30;
      const y = -0.55 + u * 1.15;
      spiralPoints.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
    }
    const spiralCurve = new THREE.CatmullRomCurve3(spiralPoints);
    const spiralTube = new THREE.Mesh(
      new THREE.TubeGeometry(spiralCurve, 72, 0.022, 10, false),
      engine.brassMat(0xffd700)
    );
    group.add(spiralTube);

    // 6 Balizas luminosas esféricas a lo largo de la espiral
    const phases = [
      { name: "F1 (MAYO)", sub: "Avales y Prueba Piloto", u: 0.10, col: "#38bdf8", hex: 0x38bdf8 },
      { name: "F2 (JUNIO)", sub: "9 Entrevistas y Normativa", u: 0.28, col: "#2563eb", hex: 0x2563eb },
      { name: "F3 (JULIO)", sub: "Sondeo 45 Casos", u: 0.46, col: "#059669", hex: 0x059669 },
      { name: "F4 (AGOSTO)", sub: "Triangulación Analítica", u: 0.64, col: "#d97706", hex: 0xd97706 },
      { name: "F5 (SEP-OCT)", sub: "Redacción Lineamientos", u: 0.82, col: "#7c3aed", hex: 0x7c3aed },
      { name: "F6 (NOVIEMBRE)", sub: "Entrega y Defensa Oral", u: 0.98, col: "#dc2626", hex: 0xdc2626 }
    ];

    engine.anim21_beacons = [];
    phases.forEach((ph) => {
      const pt = spiralCurve.getPoint(ph.u);

      const beacon = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 16, 16),
        new THREE.MeshStandardMaterial({
          color: ph.hex,
          emissive: ph.hex,
          emissiveIntensity: 0.65,
          roughness: 0.2
        })
      );
      beacon.position.copy(pt);
      group.add(beacon);
      engine.anim21_beacons.push(beacon);

      const label = engine.createLabelSprite(ph.name, ph.sub, ph.col, false, { x: 0.50, y: 0.15 });
      label.position.set(pt.x * 1.35, pt.y + 0.12, pt.z * 1.35);
      group.add(label);
    });

    // Puntero cronológico orbital superior
    engine.anim21_pointer = new THREE.Mesh(
      new THREE.ConeGeometry(0.07, 0.20, 16),
      engine.brassMat(0xffd700)
    );
    engine.anim21_pointer.position.set(0, 0.82, 0);
    group.add(engine.anim21_pointer);

    const mainTitle = engine.createLabelSprite("CRONOGRAMA DE ACTIVIDADES 2027", "7 Meses Intensivos • 6 Fases Secuenciales", "#0f2d59", true);
    mainTitle.position.set(0, 1.15, 0);
    group.add(mainTitle);

    g.add(group);
  },

  animate(engine, t) {
    if (engine.anim21_pointer) {
      engine.anim21_pointer.rotation.y = t * 0.5;
    }
    if (engine.anim21_beacons) {
      engine.anim21_beacons.forEach((b, i) => {
        b.scale.setScalar(1 + Math.sin(t * 2 + i * 0.8) * 0.15);
      });
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 22. VIABILIDAD INTEGRAL: Trípode Monumental de Recursos (Apartado 9 TFG)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_22"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.6, 0.22, -1.22);

    // Chasis triangular maquinado con cantoneras de latón
    const chassis = engine.createMachinedChassis(1.60, 0.10, 1.60, { color: 0x1e293b });
    chassis.position.y = -0.92;
    g.add(chassis);

    // Placa técnica de viabilidad institucional (Elevada sobre el pedestal, sin quedar enterrada)
    const plaqueMaster = engine.createEngravedPlaque(
      1.10,
      0.22,
      "VIABILIDAD INTEGRAL DEL PROYECTO",
      "Recursos Humanos, Técnicos y Económicos (Tabla 4 TFG)",
      ["COSTO $0 CURZAS", "AUTOFINANCIADO ($160K)", "SOFTWARE LIBRE"],
      { theme: "dark" }
    );
    plaqueMaster.position.set(0, -0.62, 1.02);
    plaqueMaster.rotation.x = -0.20;
    g.add(plaqueMaster);

    const group = new THREE.Group();
    group.position.set(0, -0.05, 0);

    // 1. Pedestal triangular escalonado de granito pulido
    const triBaseLow = new THREE.Mesh(
      new THREE.CylinderGeometry(1.30, 1.40, 0.10, 3),
      engine.graniteMat(0x0f172a, 0.3, 0.3)
    );
    triBaseLow.position.y = -0.84;
    triBaseLow.receiveShadow = true;
    group.add(triBaseLow);

    const triBaseTop = new THREE.Mesh(
      new THREE.CylinderGeometry(1.18, 1.24, 0.08, 3),
      engine.marbleMat(0xf8fafc, 0.25)
    );
    triBaseTop.position.y = -0.74;
    triBaseTop.receiveShadow = true;
    group.add(triBaseTop);

    // 2. Las 3 Columnas Clásicas Acanaladas (Distribución sin colisión de carteles)
    const pillars = [
      {
        name: "RECURSOS HUMANOS",
        sub: "Tesista Tec. Sup. + Cátedra",
        angle: -Math.PI / 6,
        col: "#1d4ed8",
        hex: 0x1d4ed8,
        labelPos: [1.42, 0.78, -0.2]
      },
      {
        name: "RECURSOS TÉCNICOS",
        sub: "Moodle • SIU • R / PSPP",
        angle: Math.PI / 2,
        col: "#0284c7",
        hex: 0x0284c7,
        labelPos: [0, 0.95, 0.88]
      },
      {
        name: "RECURSOS ECONÓMICOS",
        sub: "$0 CURZAS ($160k Propio)",
        angle: (7 * Math.PI) / 6,
        col: "#15803d",
        hex: 0x16a34a,
        labelPos: [-1.42, 0.78, -0.2]
      }
    ];

    pillars.forEach((pil) => {
      const px = Math.cos(pil.angle) * 0.85;
      const pz = Math.sin(pil.angle) * 0.85;

      const colMesh = engine.createClassicalColumn(1.08, 0.10, pil.hex, true);
      colMesh.position.set(px, -0.15, pz);
      group.add(colMesh);

      const label = engine.createLabelSprite(
        pil.name,
        pil.sub,
        pil.col,
        false,
        { x: 0.64, y: 0.17 }
      );
      label.position.set(...pil.labelPos);
      group.add(label);
    });

    // 3. Tablero triangular de cristal óptico puro
    const glassRoof = new THREE.Mesh(
      new THREE.CylinderGeometry(1.02, 1.02, 0.06, 3),
      engine.glassMat(0x38bdf8, { roughness: 0.05, transmission: 0.94, opacity: 0.85, thickness: 1.0 })
    );
    glassRoof.position.y = 0.44;
    group.add(glassRoof);

    // Clamps de fijación de latón en los 3 vértices
    for (let i = 0; i < 3; i++) {
      const a = (i * 2 * Math.PI) / 3 - Math.PI / 6;
      const cx = Math.cos(a) * 0.95;
      const cz = Math.sin(a) * 0.95;
      const clamp = new THREE.Mesh(
        new THREE.BoxGeometry(0.10, 0.08, 0.12),
        engine.brassMat(0xd4af37)
      );
      clamp.position.set(cx, 0.44, cz);
      clamp.rotation.y = -a;
      group.add(clamp);
    }

    // 4. Medallón oficial central en oro puro con Escudo Académico UNCo
    engine.anim22_seal = new THREE.Group();
    engine.anim22_seal.position.set(0, 0.52, 0);

    const sealDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.30, 0.30, 0.04, 32),
      engine.goldMat(0xffd700)
    );
    engine.anim22_seal.add(sealDisc);

    const sealUNCo = engine.createAcademicSeal(0.22);
    sealUNCo.rotation.x = Math.PI / 2;
    sealUNCo.position.y = 0.025;
    engine.anim22_seal.add(sealUNCo);

    const sealWreath = new THREE.Mesh(
      new THREE.TorusGeometry(0.26, 0.018, 16, 48),
      engine.brassMat(0xd4af37)
    );
    sealWreath.rotation.x = Math.PI / 2;
    engine.anim22_seal.add(sealWreath);

    group.add(engine.anim22_seal);

    const sealLight = new THREE.PointLight(0xffd700, 1.5, 2.2);
    sealLight.position.set(0, 0.65, 0);
    group.add(sealLight);

    const mainTitle = engine.createLabelSprite(
      "VIABILIDAD INTEGRAL DEL PROYECTO",
      "Costo $0 CURZAS • $160k Autofinanciado • Software Libre",
      "#0f2d59",
      true
    );
    mainTitle.position.set(0, 1.55, 0);
    group.add(mainTitle);

    g.add(group);
  },

  animate(engine, t) {
    if (engine.anim22_seal) {
      engine.anim22_seal.rotation.y = t * 0.45;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// ──────────────────────────────────────────────────────────────────────────
// 23. REFLEXIVIDAD Y ÉTICA: Lente Epistemológica, Bóveda 25.326 y Anexo IV
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_23"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.56, 0.22, -1.22);

    const chassis = engine.createMachinedChassis(1.88, 0.10, 1.18, { color: 0x1e293b });
    chassis.position.set(0, -0.92, -0.08);
    g.add(chassis);

    // Atril frontal independiente sobre el borde delantero del plinto (100% despejado)
    const plaqueCradle = new THREE.Mesh(
      engine.getRoundedBoxGeo(1.18, 0.13, 0.16, 0.015, 3),
      engine.graniteMat(0x1e293b, 0.54, 0.15)
    );
    plaqueCradle.position.set(0, -0.96, 0.88);
    plaqueCradle.castShadow = true;
    plaqueCradle.receiveShadow = true;
    g.add(plaqueCradle);

    const plaqueMaster = engine.createEngravedPlaque(
      1.22,
      0.24,
      "REFLEXIVIDAD Y PROTOCOLO ÉTICO",
      "Bourdieu (2003) • Guber (2004) • Ley N° 25.326 • CCT 1246/15",
      ["SONDEO ANÓNIMO SIN IP", "SEUDONIMIA DOC-01", "ANEXO IV • NO SUMATIVO"],
      { theme: "dark" }
    );
    plaqueMaster.position.set(0, -0.87, 0.94);
    plaqueMaster.rotation.x = -0.32;
    g.add(plaqueMaster);

    const group = new THREE.Group();
    const ivoryMat = engine.marbleMat(0xf7f5ef, 0.44);
    const slateMat = engine.graniteMat(0x1e293b, 0.50, 0.16);
    const brassMat = engine.brassMat(0xcfa346);
    const goldMat = engine.goldMat(0xe0ba56);

    // Riel de latón en el zócalo conectando los 3 dispositivos (y = -0.86)
    const conduit = new THREE.Mesh(
      engine.getRoundedBoxGeo(1.62, 0.025, 0.08, 0.006, 2),
      brassMat
    );
    conduit.position.set(0, -0.86, 0.06);
    group.add(conduit);

    // 1. CENTRO: Lente Óptica de Vigilancia Epistemológica (Bourdieu & Guber)
    const vigilGroup = new THREE.Group();
    vigilGroup.position.set(0, -0.87, -0.18);

    const centerPedPts = [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.22, 0),
      new THREE.Vector2(0.18, 0.06),
      new THREE.Vector2(0.08, 0.22),
      new THREE.Vector2(0.07, 0.44),
      new THREE.Vector2(0.15, 0.54),
      new THREE.Vector2(0, 0.54)
    ];
    const centerPed = new THREE.Mesh(new THREE.LatheGeometry(centerPedPts, 40), ivoryMat);
    centerPed.castShadow = true;
    centerPed.receiveShadow = true;
    vigilGroup.add(centerPed);

    // Horquilla de latón sosteniendo la lente reflexiva
    const forkBase = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.042, 0.12, 20), brassMat);
    forkBase.position.y = 0.60;
    vigilGroup.add(forkBase);

    engine.anim23_lens = new THREE.Group();
    engine.anim23_lens.position.y = 0.88;

    const bezelOuter = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.022, 20, 64), goldMat);
    engine.anim23_lens.add(bezelOuter);

    const bezelInner = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.008, 14, 48), brassMat);
    engine.anim23_lens.add(bezelInner);

    // Cristal óptico de vigilancia epistemológica (Azul Zafiro claro)
    const opticGlass = new THREE.Mesh(
      new THREE.CylinderGeometry(0.20, 0.20, 0.026, 40),
      engine.glassMat(0x0284c7, { opacity: 0.72, roughness: 0.05, transmission: 0.65 })
    );
    opticGlass.rotation.x = Math.PI / 2;
    engine.anim23_lens.add(opticGlass);

    // Retícula en cruz sobre la lente (control analítico de doble pertenencia)
    const crossH = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.38, 8), goldMat);
    crossH.rotation.z = Math.PI / 2;
    engine.anim23_lens.add(crossH);
    const crossV = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.38, 8), goldMat);
    engine.anim23_lens.add(crossV);

    vigilGroup.add(engine.anim23_lens);
    g.add(vigilGroup);

    const labelVigil = engine.createLabelSprite(
      "VIGILANCIA EPISTEMOLÓGICA",
      "Bourdieu (2003) & Guber (2004) • Control de Rol",
      "#0f2d59",
      false,
      { x: 0.72, y: 0.20 }
    );
    labelVigil.position.set(0, 0.44, -0.18);
    group.add(labelVigil);

    // 2. IZQUIERDA (-0.78): Bóveda Criptográfica Anclada (Sondeo Anónimo Ley 25.326)
    const vaultGroup = new THREE.Group();
    vaultGroup.position.set(-0.78, -0.87, 0.08);

    const vaultPed = new THREE.Mesh(
      engine.getRoundedBoxGeo(0.54, 0.07, 0.42, 0.012, 2),
      slateMat
    );
    vaultPed.position.y = 0.035;
    vaultGroup.add(vaultPed);

    const vaultBody = new THREE.Mesh(
      engine.getRoundedBoxGeo(0.46, 0.42, 0.34, 0.022, 3),
      slateMat
    );
    vaultBody.position.y = 0.28;
    vaultBody.castShadow = true;
    vaultGroup.add(vaultBody);

    const vaultTrim = new THREE.Mesh(
      engine.getRoundedBoxGeo(0.48, 0.04, 0.36, 0.010, 2),
      brassMat
    );
    vaultTrim.position.y = 0.47;
    vaultGroup.add(vaultTrim);

    // Candado dorado escultural frontal con aro
    const shackle = new THREE.Mesh(
      new THREE.TorusGeometry(0.075, 0.014, 14, 32, Math.PI),
      goldMat
    );
    shackle.position.set(0, 0.52, 0.08);
    vaultGroup.add(shackle);

    const lockDial = new THREE.Mesh(
      new THREE.CylinderGeometry(0.095, 0.095, 0.026, 32),
      goldMat
    );
    lockDial.rotation.x = Math.PI / 2;
    lockDial.position.set(0, 0.28, 0.178);
    vaultGroup.add(lockDial);

    const lockGem = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.048, 1),
      engine.glassMat(0x10b981, { opacity: 0.94, roughness: 0.06 })
    );
    lockGem.position.set(0, 0.28, 0.20);
    vaultGroup.add(lockGem);

    g.add(vaultGroup);

    const labelVault = engine.createLabelSprite(
      "1. SONDEO ANÓNIMO",
      "Ley 25.326 • Tokens sin IP ni Correos",
      "#047857",
      false,
      { x: 0.66, y: 0.19 }
    );
    labelVault.position.set(-0.78, -0.04, 0.08);
    group.add(labelVault);

    // 3. DERECHA (+0.78): Atril de Consentimiento Informado (Anexo IV) y Seudonimia (DOC-01)
    const lecternGroup = new THREE.Group();
    lecternGroup.position.set(0.78, -0.87, 0.08);

    const lectPts = [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.18, 0),
      new THREE.Vector2(0.15, 0.05),
      new THREE.Vector2(0.055, 0.20),
      new THREE.Vector2(0.062, 0.36),
      new THREE.Vector2(0.14, 0.42),
      new THREE.Vector2(0, 0.42)
    ];
    const lectPed = new THREE.Mesh(new THREE.LatheGeometry(lectPts, 36), ivoryMat);
    lectPed.castShadow = true;
    lecternGroup.add(lectPed);

    const folioTilt = new THREE.Group();
    folioTilt.position.set(0, 0.46, 0.02);
    folioTilt.rotation.x = -0.52;

    const folioBack = new THREE.Mesh(
      engine.getRoundedBoxGeo(0.56, 0.38, 0.026, 0.008, 2),
      brassMat
    );
    folioBack.castShadow = true;
    folioTilt.add(folioBack);

    // Página impresa nítida del Anexo IV y garantía CCT
    const makeDocTex = () => {
      const cw = 640, ch = 440;
      const canvas = document.createElement("canvas");
      canvas.width = cw;
      canvas.height = ch;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "#fdfbf6";
      ctx.fillRect(0, 0, cw, ch);
      ctx.fillStyle = "#0f2d59";
      ctx.fillRect(0, 0, cw, 64);

      ctx.fillStyle = "#f0cf70";
      ctx.font = "800 28px 'Cinzel', Georgia, serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("ANEXO IV • CONSENTIMIENTO INFORMADO", cw / 2, 33);

      ctx.textAlign = "left";
      ctx.fillStyle = "#1e293b";
      ctx.font = "700 23px 'Inter', sans-serif";
      ctx.fillText("✓ Voluntariedad y reserva garantizada", 42, 128);
      ctx.fillText("✓ Entrevistas: Códigos DOC-01 / GREM-01", 42, 188);
      ctx.fillText("✓ Custodia cifrada y umbral n ≥ 5", 42, 248);

      ctx.fillStyle = "#991b1b";
      ctx.font = "800 24px 'Inter', sans-serif";
      ctx.fillText("⚖ SIN EFECTO ART. 75 • CCT DEC. 1246/15", 42, 330);

      ctx.strokeStyle = "#cfa346";
      ctx.lineWidth = 4;
      ctx.strokeRect(12, 12, cw - 24, ch - 24);

      const tex = new THREE.CanvasTexture(canvas);
      tex.anisotropy = 4;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      return tex;
    };

    const folioPage = new THREE.Mesh(
      new THREE.PlaneGeometry(0.51, 0.34),
      new THREE.MeshStandardMaterial({ map: makeDocTex(), roughness: 0.45, metalness: 0.03 })
    );
    folioPage.position.z = 0.015;
    folioTilt.add(folioPage);

    lecternGroup.add(folioTilt);
    g.add(lecternGroup);

    const labelConsent = engine.createLabelSprite(
      "2. ENTREVISTAS Y ANEXO IV",
      "Seudonimia DOC-01 • Garantía CCT 1246/15",
      "#b91c1c",
      false,
      { x: 0.66, y: 0.19 }
    );
    labelConsent.position.set(0.78, -0.04, 0.08);
    group.add(labelConsent);

    const mainTitle = engine.createLabelSprite(
      "REFLEXIVIDAD Y BLINDAJE ÉTICO",
      "Control de Rol (Bourdieu/Guber) • Ley 25.326 • CCT 1246/15",
      "#0f2d59",
      true
    );
    mainTitle.position.set(0, 1.16, 0);
    group.add(mainTitle);

    g.add(group);
  },

  animate(engine, t) {
    if (engine.anim23_lens) {
      engine.anim23_lens.rotation.y = Math.sin(t * 0.75) * 0.35;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 24. VALOR PÚBLICO: Faro Monumental de Modernización y Capacidades UNCo
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_24"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.5, 0.22, -1.22);

    // Chasis octogonal maquinado con cantoneras de latón
    const chassis = engine.createMachinedChassis(1.50, 0.10, 1.50, { color: 0x1e293b });
    chassis.position.y = -0.92;
    g.add(chassis);

    // Placa técnica de valor público
    const plaqueMaster = engine.createEngravedPlaque(
      1.10,
      0.22,
      "VALOR PÚBLICO Y MODERNIZACIÓN",
      "Hacia una Universidad Formativa, Situada y Democrática",
      ["CURZAS • UNIVERSIDAD NACIONAL DEL COMAHUE"],
      { theme: "dark" }
    );
    plaqueMaster.position.set(0, -0.84, 0.74);
    g.add(plaqueMaster);

    const group = new THREE.Group();
    group.position.set(0, -0.05, 0);

    // Zócalo de granito pulido bajo el faro (para que no colisione con el fuste cónico)
    const towerBaseGranite = new THREE.Mesh(
      new THREE.CylinderGeometry(0.58, 0.64, 0.12, 24),
      engine.graniteMat(0x0f172a, 0.3, 0.2)
    );
    towerBaseGranite.position.y = -0.82;
    group.add(towerBaseGranite);

    // Anillo exterior de orientación náutica/patagónica en el zócalo
    const compassRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.62, 0.018, 16, 48),
      engine.brassMat(0xd4af37)
    );
    compassRing.rotation.x = Math.PI / 2;
    compassRing.position.y = -0.76;
    group.add(compassRing);

    // Torre monumental del faro en mármol blanco de fuste cónico
    const towerShaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.44, 1.40, 24),
      engine.marbleMat(0xf8fafc)
    );
    towerShaft.position.y = -0.10;
    group.add(towerShaft);

    // Escudo institucional UNCo sobre el portal de la torre
    const seal = engine.createAcademicSeal(0.10);
    seal.position.set(0, -0.32, 0.36);
    group.add(seal);

    // Balcón de latón con barandilla
    const balcony = new THREE.Mesh(
      new THREE.CylinderGeometry(0.36, 0.36, 0.05, 24),
      engine.brassMat(0xd4af37)
    );
    balcony.position.y = 0.62;
    group.add(balcony);

    // Linterna de cristal del faro
    const lantern = new THREE.Mesh(
      new THREE.CylinderGeometry(0.26, 0.26, 0.35, 16),
      engine.glassMat(0xffffff, { roughness: 0.08, transmission: 0.92, opacity: 0.5 })
    );
    lantern.position.y = 0.81;
    group.add(lantern);

    // Cúpula dorada superior
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2),
      engine.brassMat(0xffd700)
    );
    dome.position.y = 0.98;
    group.add(dome);

    // Grupo giratorio de la baliza luminosa
    engine.anim24_beaconGroup = new THREE.Group();
    engine.anim24_beaconGroup.position.set(0, 0.81, 0);

    const bulb = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xffd700 })
    );
    engine.anim24_beaconGroup.add(bulb);

    const beamLight = new THREE.PointLight(0xffd700, 2.2, 4.0);
    engine.anim24_beaconGroup.add(beamLight);

    const beamCone1 = new THREE.Mesh(
      new THREE.ConeGeometry(0.50, 1.8, 24, 1, true),
      engine.glassMat(0xffd700, { roughness: 0.4, transmission: 0.85, opacity: 0.22 })
    );
    beamCone1.rotation.x = Math.PI / 2;
    beamCone1.position.z = 0.92;
    engine.anim24_beaconGroup.add(beamCone1);

    const beamCone2 = new THREE.Mesh(
      new THREE.ConeGeometry(0.50, 1.8, 24, 1, true),
      engine.glassMat(0x38bdf8, { roughness: 0.4, transmission: 0.85, opacity: 0.22 })
    );
    beamCone2.rotation.x = -Math.PI / 2;
    beamCone2.position.z = -0.92;
    engine.anim24_beaconGroup.add(beamCone2);

    group.add(engine.anim24_beaconGroup);

    // 4 Ejes de conclusiones situadas alrededor del faro (Espaciadas y legibles)
    const conclusions = [
      { name: "DESACOPLAMIENTO ART. 75", angle: 0, col: "#2563eb" },
      { name: "CAPACITACIÓN ART. 76", angle: Math.PI / 2, col: "#0284c7" },
      { name: "DOCENCIA HÍBRIDA", angle: Math.PI, col: "#059669" },
      { name: "CAPACIDADES ESTATALES", angle: (3 * Math.PI) / 2, col: "#7c3aed" }
    ];

    conclusions.forEach((c) => {
      const cx = Math.cos(c.angle) * 0.95;
      const cz = Math.sin(c.angle) * 0.95;
      const label = engine.createLabelSprite(c.name, "Conclusión de Factibilidad", c.col, false, { x: 0.58, y: 0.17 });
      label.position.set(cx, -0.45, cz);
      group.add(label);
    });

    const mainTitle = engine.createLabelSprite("VALOR PÚBLICO Y MODERNIZACIÓN", "Hacia una Universidad Formativa, Situada y Democrática", "#0f2d59", true);
    mainTitle.position.set(0, 1.25, 0);
    group.add(mainTitle);

    g.add(group);
  },

  animate(engine, t) {
    if (engine.anim24_beaconGroup) {
      engine.anim24_beaconGroup.rotation.y = t * 0.75;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 25. DESPEDIDA FORMAL: Medallón de Graduación UNCo y Atril de Defensa Oral
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_25"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.6, 0.22, -1.22);

    // Chasis ceremonial de caoba noble con cantoneras de oro
    const chassis = engine.createMachinedChassis(1.60, 0.10, 1.60, { color: 0x2e1204 });
    chassis.position.y = -0.92;
    g.add(chassis);

    // Placa conmemorativa de oro maestro elevada sobre el pedestal frontal (sin quedar enterrada)
    const plaqueMaster = engine.createEngravedPlaque(
      1.18,
      0.22,
      "UNIVERSIDAD NACIONAL DEL COMAHUE",
      "¡Muchas Gracias por su Atención! • CURZAS",
      ["DECRETO 1246/2015", "TESINA DE LICENCIATURA 2026-2027"],
      { theme: "gold" }
    );
    plaqueMaster.position.set(0, -0.50, 1.10);
    plaqueMaster.rotation.x = -0.18;
    g.add(plaqueMaster);

    const group = new THREE.Group();
    group.position.set(0, -0.05, 0);

    const podBase = new THREE.Mesh(
      new THREE.CylinderGeometry(1.30, 1.40, 0.16, 48),
      engine.graniteMat(0x0f172a)
    );
    podBase.position.y = -0.85;
    group.add(podBase);

    // 1. Gran Medallón Laureado Central UNCo flotante
    engine.anim25_medal = new THREE.Group();
    engine.anim25_medal.position.set(0, 0.18, -0.22);

    const medalDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.68, 0.68, 0.07, 48),
      engine.brassMat(0xffd700)
    );
    medalDisc.rotation.x = Math.PI / 2;
    engine.anim25_medal.add(medalDisc);

    // Gran Escudo Académico Institucional de la Universidad Nacional del Comahue
    const seal = engine.createAcademicSeal(0.38);
    seal.rotation.x = Math.PI / 2;
    seal.position.set(0, 0, 0.045);
    engine.anim25_medal.add(seal);

    const wreath = new THREE.Mesh(
      new THREE.TorusGeometry(0.74, 0.035, 16, 64),
      engine.brassMat(0xd4af37)
    );
    wreath.position.set(0, 0, 0.02);
    engine.anim25_medal.add(wreath);

    group.add(engine.anim25_medal);

    // 2. Dos Columnas / Pebeteros ceremoniales flanqueando el medallón
    [-0.92, 0.92].forEach((posX) => {
      const urnShaft = new THREE.Mesh(
        new THREE.CylinderGeometry(0.075, 0.11, 0.82, 24),
        engine.marbleMat(0xf8fafc)
      );
      urnShaft.position.set(posX, -0.4, -0.15);
      group.add(urnShaft);

      const urnBowl = new THREE.Mesh(
        new THREE.CylinderGeometry(0.17, 0.08, 0.14, 24),
        engine.brassMat(0xffd700)
      );
      urnBowl.position.set(posX, 0.06, -0.15);
      group.add(urnBowl);

      const flame = new THREE.Mesh(
        new THREE.ConeGeometry(0.085, 0.22, 16),
        new THREE.MeshStandardMaterial({
          color: 0xffb703,
          emissive: 0xffb703,
          emissiveIntensity: 0.85,
          roughness: 0.2
        })
      );
      flame.position.set(posX, 0.20, -0.15);
      group.add(flame);
    });

    // 3. Atril ceremonial al frente para el intercambio con el Tribunal Evaluador
    const lecternGroup = new THREE.Group();
    lecternGroup.position.set(0, -0.30, 0.48);

    const lecternBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.20, 0.62, 24),
      engine.graniteMat(0x1e293b)
    );
    lecternGroup.add(lecternBody);

    const lecternShelf = new THREE.Mesh(
      new THREE.BoxGeometry(0.62, 0.035, 0.40),
      engine.brassMat(0xd4af37)
    );
    lecternShelf.position.set(0, 0.33, 0);
    lecternShelf.rotation.x = 0.35;
    lecternGroup.add(lecternShelf);

    // Tomo de tesina ceremonial abierto sobre el atril (Minimalista y noble)
    const bookDesk = new THREE.Group();
    bookDesk.position.set(0, 0.36, 0.04);
    bookDesk.rotation.x = 0.35;

    const bookCover = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.02, 0.34),
      engine.graniteMat(0x4a0e17)
    );
    bookDesk.add(bookCover);

    const bookPages = new THREE.Mesh(
      new THREE.BoxGeometry(0.46, 0.032, 0.32),
      engine.marbleMat(0xfdfbf7)
    );
    bookPages.position.y = 0.024;
    bookDesk.add(bookPages);

    const ribbon = new THREE.Mesh(
      new THREE.BoxGeometry(0.03, 0.008, 0.38),
      new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.3 })
    );
    ribbon.position.set(0, 0.042, 0);
    bookDesk.add(ribbon);

    lecternGroup.add(bookDesk);
    group.add(lecternGroup);

    // Cartela superior de honor al Tribunal Evaluador (elevada sobre el medallón)
    const tribunalSprite = engine.createLabelSprite(
      "ESPACIO DE INTERCAMBIO CON EL TRIBUNAL",
      "Dra. Deborah Noguera • Esp. Federico Abeiro • Esp. María Cecilia Aguirre",
      "#0f2d59",
      true,
      { x: 1.45, y: 0.28 }
    );
    tribunalSprite.position.set(0, 1.65, 0);
    group.add(tribunalSprite);

    g.add(group);
  },

  animate(engine, t) {
    if (engine.anim25_medal) {
      engine.anim25_medal.rotation.y = Math.sin(t * 0.5) * 0.15;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 26. AGRADECIMIENTOS: Monumento Ceremonial de Gratitud Académica (CURZAS • UNCo)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_26"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.66, 0.22, -1.22);

    const baseChassis = engine.createMachinedChassis(1.66, 0.10, 1.14, { color: 0x1e293b });
    baseChassis.position.set(0, -0.92, -0.10);
    g.add(baseChassis);

    // Atril frontal independiente oscuro y de alto contraste (sin reflejos blancos)
    const subCradle = new THREE.Mesh(
      engine.getRoundedBoxGeo(1.22, 0.13, 0.16, 0.015, 3),
      engine.graniteMat(0x1e293b, 0.54, 0.15)
    );
    subCradle.position.set(0, -0.96, 0.84);
    subCradle.castShadow = true;
    subCradle.receiveShadow = true;
    g.add(subCradle);

    const subPlaque = engine.createEngravedPlaque(
      1.24,
      0.24,
      "PROFUNDA GRATITUD ACADÉMICA Y HUMANA",
      "Dra. Deborah Noguera • Esp. Federico Abeiro • Esp. María Cecilia Aguirre",
      ["Sede Viedma & 10 Nodos Territoriales • CURZAS-UNCo 2026"],
      { theme: "dark" }
    );
    subPlaque.position.set(0, -0.87, 0.90);
    subPlaque.rotation.x = -0.32;
    g.add(subPlaque);

    const group = new THREE.Group();
    group.position.set(0, -0.04, 0);

    // Pedestal escalonado ceremonial bajo la estela central
    const tierBase = new THREE.Mesh(
      engine.getRoundedBoxGeo(1.44, 0.11, 0.78, 0.014, 3),
      engine.marbleMat(0xf4f1e8)
    );
    tierBase.position.set(0, -0.78, -0.14);
    tierBase.castShadow = true;
    tierBase.receiveShadow = true;
    group.add(tierBase);

    // Estela central arquitectónica con cornisa dorada y sello UNCo
    const wallSlab = new THREE.Mesh(
      engine.getRoundedBoxGeo(1.36, 0.78, 0.10, 0.016, 3),
      engine.graniteMat(0x1e293b, 0.50, 0.16)
    );
    wallSlab.position.set(0, -0.22, -0.16);
    wallSlab.castShadow = true;
    group.add(wallSlab);

    const cornice = new THREE.Mesh(
      engine.getRoundedBoxGeo(1.44, 0.05, 0.14, 0.010, 2),
      engine.goldMat(0xe0ba56)
    );
    cornice.position.set(0, 0.19, -0.16);
    group.add(cornice);

    const mainPlaque = engine.createEngravedPlaque(
      1.22,
      0.52,
      "AGRADECIMIENTOS",
      "Universidad Nacional del Comahue — CURZAS",
      ["CCC Licenciatura en Gestión de Recursos Humanos", "Seminario de Integración y Aplicación (SIA 2026)"],
      { theme: "dark" }
    );
    mainPlaque.position.set(0, -0.22, -0.095);
    group.add(mainPlaque);

    // Sello UNCo coronando el frontón de la estela
    const topSeal = engine.createAcademicSeal(0.18);
    topSeal.rotation.x = Math.PI / 2;
    topSeal.position.set(0, 0.36, -0.14);
    group.add(topSeal);

    // 4 Monumentos / Faros Honoríficos correspondientes a los 4 reconocimientos de Filmina 14
    const honors = [
      {
        title: "CÁTEDRA SIA", sub: "Noguera • Abeiro • Aguirre",
        x: -1.04, z: -0.22, h: 0.96, labelY: 0.72, hex: 0x1d4ed8, color: "#1d4ed8", isOuter: true
      },
      {
        title: "TRIBUNAL EVALUADOR", sub: "Lectura y Aportes",
        x: 1.04, z: -0.22, h: 0.96, labelY: 0.72, hex: 0xd97706, color: "#b45309", isOuter: true
      },
      {
        title: "CURZAS Y 10 NODOS", sub: "Dpto. Adm. Pública",
        x: -0.88, z: 0.42, h: 0.42, labelY: -0.04, hex: 0x0f766e, color: "#0f766e", isOuter: false
      },
      {
        title: "FAMILIA Y PARES", sub: "Sostén Cotidiano",
        x: 0.88, z: 0.42, h: 0.42, labelY: -0.04, hex: 0xe11d48, color: "#be123c", isOuter: false
      }
    ];

    engine.anim26_rings = [];
    honors.forEach((hItem, idx) => {
      const baseTopY = hItem.isOuter ? -0.84 + hItem.h / 2 : -0.84 + hItem.h / 2;
      if (hItem.isOuter) {
        const col = engine.createClassicalColumn(hItem.h, 0.072, 0xcfa346, true);
        col.position.set(hItem.x, -0.36, hItem.z);
        group.add(col);
      } else {
        const podPts = [
          new THREE.Vector2(0, -0.82),
          new THREE.Vector2(0.14, -0.82),
          new THREE.Vector2(0.10, -0.60),
          new THREE.Vector2(0.13, -0.44),
          new THREE.Vector2(0, -0.44)
        ];
        const pod = new THREE.Mesh(new THREE.LatheGeometry(podPts, 32), engine.marbleMat(0xf4f1e8));
        pod.position.set(hItem.x, 0, hItem.z);
        pod.castShadow = true;
        group.add(pod);
      }

      const gemY = hItem.isOuter ? 0.30 : -0.31;
      const gem = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.105, 1),
        engine.glassMat(hItem.hex, { opacity: 0.90, roughness: 0.08 })
      );
      gem.position.set(hItem.x, gemY, hItem.z);
      group.add(gem);

      const ring = engine.createBrassArmillaryRing(0.155, 0.010);
      ring.position.set(hItem.x, gemY, hItem.z);
      ring.rotation.x = idx % 2 === 0 ? 0.55 : -0.55;
      group.add(ring);
      engine.anim26_rings.push(ring);

      const honSprite = engine.createLabelSprite(
        hItem.title,
        hItem.sub,
        hItem.color,
        false,
        { x: 0.62, y: 0.18 }
      );
      honSprite.position.set(hItem.x, hItem.labelY, hItem.z);
      group.add(honSprite);
    });

    const titleSprite = engine.createLabelSprite(
      "AGRADECIMIENTOS",
      "Reconocimiento Institucional y Humano • CURZAS-UNCo",
      "#0f2d59",
      true
    );
    titleSprite.position.set(0, 1.30, 0);
    group.add(titleSprite);

    g.add(group);
  },

  animate(engine, t) {
    if (engine.anim26_rings) {
      engine.anim26_rings.forEach((ring, idx) => {
        ring.rotation.y = t * (idx % 2 === 0 ? 0.65 : -0.65);
        ring.rotation.z = Math.sin(t * 0.9 + idx) * 0.25;
      });
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 27. BIBLIOGRAFÍA: Códice de Fuentes Científicas y Marco Normativo
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_27"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.55, 0.22, -1.22);

    const baseRack = engine.createMachinedChassis(1.62, 0.11, 1.18, { color: 0x1e293b });
    baseRack.position.y = -0.92;
    g.add(baseRack);

    const group = new THREE.Group();
    group.position.set(0, -0.04, 0);

    // 5 Volúmenes ordenados por secuencia de filminas y jerarquía (F1–F11)
    const volumes = [
      { label: "1. B1 NORMATIVA (F1-F4)", col: 0x0f2d59, h: 0.96, t: 0.14 },
      { label: "2. B1 PROBLEMA LONGO", col: 0x334155, h: 0.90, t: 0.13 },
      { label: "3. B2a TEORÍA 360° (F5-F6)", col: 0x1e3a8a, h: 0.94, t: 0.14 },
      { label: "4. B2b ANTECEDENTES (F7)", col: 0x0f766e, h: 0.88, t: 0.13 },
      { label: "5. B3 MÉTODO Y ÉTICA (F8-F11)", col: 0x7c2d12, h: 0.84, t: 0.12 }
    ];

    engine.anim27_orbit = new THREE.Group();
    const startX = -0.52;
    const stepX = 0.26;

    volumes.forEach((v, idx) => {
      const volGroup = new THREE.Group();
      const xPos = startX + idx * stepX;
      volGroup.position.set(xPos, -0.82 + v.h / 2, -0.06);
      volGroup.rotation.y = (idx - 2) * 0.05;

      // Bloque de páginas marfil mate
      const pagesMesh = new THREE.Mesh(
        new THREE.BoxGeometry(v.t * 0.86, v.h * 0.94, 0.56),
        engine.marbleMat(0xf6f4ee)
      );
      volGroup.add(pagesMesh);

      // Lomo y tapas en tono mate editorial
      const coverMat = new THREE.MeshStandardMaterial({
        color: v.col,
        roughness: 0.56,
        metalness: 0.12,
        envMapIntensity: 0.72
      });
      const spineMesh = new THREE.Mesh(
        new THREE.BoxGeometry(v.t, v.h, 0.06),
        coverMat
      );
      spineMesh.position.z = 0.28;
      volGroup.add(spineMesh);

      [-v.t * 0.45, v.t * 0.45].forEach((cx) => {
        const sideCover = new THREE.Mesh(
          new THREE.BoxGeometry(0.018, v.h, 0.58),
          coverMat
        );
        sideCover.position.x = cx;
        volGroup.add(sideCover);
      });

      // Filetes dorados en el lomo
      [-0.24, 0.24].forEach((by) => {
        const band = new THREE.Mesh(
          new THREE.BoxGeometry(v.t * 1.03, 0.016, 0.068),
          engine.brassMat(0xcfa346)
        );
        band.position.set(0, v.h * by, 0.28);
        volGroup.add(band);
      });

      group.add(volGroup);
    });

    // Sujetalibros satinados laterales
    [-0.70, 0.70].forEach((bx) => {
      const endPlate = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, 0.44, 0.52),
        engine.brassMat(0xcfa346)
      );
      endPlate.position.set(bx, -0.60, -0.06);
      group.add(endPlate);
    });

    // Placa frontal de referencia bibliográfica
    const bibPlaque = engine.createEngravedPlaque(
      1.24,
      0.26,
      "BIBLIOGRAFÍA DEL TFG (JERÁRQUICA)",
      "35 Fuentes Ordenadas por Filminas (F1–F11) • APA 7",
      ["B1: Ley 24.521, Ord. 0988/25, Longo • B2: De la Garza, 360°, Cao", "B2b: Torraco, Cariaga • B3: Sampieri, Flyvbjerg, Bourdieu, Ley 25.326"],
      { theme: "dark" }
    );
    bibPlaque.position.set(0, -0.68, 0.56);
    bibPlaque.rotation.x = -0.32;
    group.add(bibPlaque);

    // Aro armilar editorial flotando sobre la colección
    const bibRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.76, 0.012, 18, 72),
      engine.brassMat(0xcfa346)
    );
    bibRing.rotation.x = Math.PI / 2 - 0.16;
    engine.anim27_orbit.position.set(0, 0.28, -0.06);
    engine.anim27_orbit.add(bibRing);
    group.add(engine.anim27_orbit);

    const titleSprite = engine.createLabelSprite(
      "BIBLIOGRAFÍA DE REFERENCIA",
      "35 Fuentes Académicas, Jurídicas e Institucionales • APA 7",
      "#0f2d59",
      true
    );
    titleSprite.position.set(0, 1.24, 0);
    group.add(titleSprite);

    g.add(group);
  },

  animate(engine, t) {
    if (engine.anim27_orbit) {
      engine.anim27_orbit.rotation.y = t * 0.35;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 28. DISEÑO DE INVESTIGACIÓN COMPLETO: Códice Arquitectónico de 5 Capítulos
//     (Estructura Oficial UNCo-CURZAS: Carátula + 5 Secciones + Plan Anual)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_28"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.55, 0.22, -1.22);

    const baseChassis = engine.createMachinedChassis(1.66, 0.10, 1.42, { color: 0x1e293b });
    baseChassis.position.y = -0.92;
    g.add(baseChassis);

    const plaqueMaster = engine.createEngravedPlaque(
      1.20,
      0.22,
      "DISEÑO DE INVESTIGACIÓN COMPLETO",
      "Estructura Oficial del Informe Final • UNCo-CURZAS",
      ["CARÁTULA • 1. PROBLEMA", "2. MARCO • 3. METODOLOGÍA", "4. APA • 5. CRONOGRAMA"],
      { theme: "dark" }
    );
    plaqueMaster.position.set(0, -0.84, 0.74);
    g.add(plaqueMaster);

    const group = new THREE.Group();
    group.position.set(0, -0.04, 0);

    const ivoryMat = engine.marbleMat(0xf7f5ef, 0.44);
    const goldMat = engine.goldMat(0xe0ba56);
    const brassMat = engine.brassMat(0xcfa346);

    // 1. Plancha de Carátula, Título y Área Temática (con sello UNCo frontal)
    const folioCover = new THREE.Mesh(
      engine.getRoundedBoxGeo(1.28, 0.10, 0.96, 0.016, 3),
      ivoryMat
    );
    folioCover.position.set(0, -0.77, -0.04);
    folioCover.castShadow = true;
    folioCover.receiveShadow = true;
    group.add(folioCover);

    const spineTrim = new THREE.Mesh(
      engine.getRoundedBoxGeo(0.06, 0.115, 0.98, 0.012, 3),
      brassMat
    );
    spineTrim.position.set(-0.62, -0.77, -0.04);
    group.add(spineTrim);

    const coverSeal = engine.createAcademicSeal(0.085);
    coverSeal.position.set(0, -0.71, 0.36);
    group.add(coverSeal);

    // Helper para placa frontal amplia con tipografía grande y legible en cada escalón
    const createTierBanner = (w, h, title, subs, accentHex) => {
      const cw = Math.round(w * 1500);
      const ch = Math.round(h * 1500);
      const canvas = document.createElement("canvas");
      canvas.width = cw;
      canvas.height = ch;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "#faf8f3";
      ctx.fillRect(0, 0, cw, ch);

      // Acento cromático superior e inferior
      ctx.fillStyle = accentHex;
      ctx.fillRect(0, 0, cw, Math.max(8, ch * 0.075));
      ctx.fillRect(0, ch - Math.max(6, ch * 0.05), cw, Math.max(6, ch * 0.05));

      const fitAndDraw = (txt, maxSize, minSize, weight, fontFam, color, yFrac) => {
        let px = maxSize;
        ctx.font = `${weight} ${px}px ${fontFam}`;
        while (px > minSize && ctx.measureText(txt).width > cw * 0.90) {
          px -= 2;
          ctx.font = `${weight} ${px}px ${fontFam}`;
        }
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(txt, cw / 2, ch * yFrac);
      };

      fitAndDraw(title, Math.round(ch * 0.42), 28, "800", "'Cinzel', Georgia, serif", accentHex, 0.37);
      fitAndDraw(subs, Math.round(ch * 0.23), 18, "600", "'Inter', sans-serif", "#1e293b", 0.72);

      const tex = new THREE.CanvasTexture(canvas);
      tex.anisotropy = 4;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;

      return new THREE.Mesh(
        new THREE.PlaneGeometry(w, h),
        new THREE.MeshStandardMaterial({
          map: tex,
          roughness: 0.42,
          metalness: 0.04
        })
      );
    };

    // 2. Tres cuerpos centrales escalonados de la pirámide con nombres grandes y claros
    const chapters = [
      {
        w: 1.14, h: 0.20, d: 0.72, y: -0.57, col: 0x1e3a8a, accent: "#0f2d59",
        title: "1. EL PROBLEMA",
        subs: "1.1 Tema • 1.2 Formulación • 1.3 Objetivos • 1.4 Justificación",
        tabs: 4, tabCol: 0x38bdf8
      },
      {
        w: 0.92, h: 0.20, d: 0.58, y: -0.35, col: 0x0f766e, accent: "#065f46",
        title: "2. MARCO DE REFERENCIA",
        subs: "2.1 Teoría • 2.2 Estado del Arte • 2.3 Preguntas • 2.4 Supuestos",
        tabs: 4, tabCol: 0x34d399
      },
      {
        w: 0.70, h: 0.20, d: 0.46, y: -0.13, col: 0xb45309, accent: "#78350f",
        title: "3. METODOLOGÍA",
        subs: "3.1 Estudio • 3.2 Técnicas • 3.3 Muestra • 3.4 Fuentes • 3.5 Análisis",
        tabs: 5, tabCol: 0xfbbf24
      }
    ];

    engine.anim28_beacons = [];
    chapters.forEach((ch) => {
      const chapMat = new THREE.MeshStandardMaterial({
        color: ch.col,
        roughness: 0.52,
        metalness: 0.12,
        envMapIntensity: 0.78
      });

      const body = new THREE.Mesh(
        engine.getRoundedBoxGeo(ch.w, ch.h, ch.d, 0.016, 3),
        chapMat
      );
      body.position.set(0, ch.y, -0.06);
      body.castShadow = true;
      body.receiveShadow = true;
      group.add(body);

      const inlayH = ch.h * 0.68;
      const inlayD = ch.d * 1.02;
      const pageInlay = new THREE.Mesh(
        engine.getRoundedBoxGeo(ch.w * 0.94, inlayH, inlayD, 0.008, 2),
        ivoryMat
      );
      pageInlay.position.set(0, ch.y, -0.06);
      group.add(pageInlay);

      // Cartel frontal legible incrustado al ras sobre cada nivel de la pirámide
      const bannerMesh = createTierBanner(ch.w * 0.89, inlayH * 0.88, ch.title, ch.subs, ch.accent);
      bannerMesh.position.set(0, ch.y, -0.06 + inlayD / 2 + 0.004);
      group.add(bannerMesh);

      // Sub-apartados luminosos (1.1-1.4 / 2.1-2.4 / 3.1-3.5) sobre la cornisa derecha
      for (let i = 0; i < ch.tabs; i++) {
        const zOff = ch.tabs === 1 ? 0 : ((i / (ch.tabs - 1)) - 0.5) * (ch.d * 0.66);
        const beacon = new THREE.Mesh(
          new THREE.OctahedronGeometry(0.026, 1),
          engine.glassMat(ch.tabCol, { opacity: 0.92, roughness: 0.08 })
        );
        beacon.position.set(ch.w / 2 - 0.05, ch.y + ch.h / 2 + 0.030, -0.06 + zOff);
        group.add(beacon);
        engine.anim28_beacons.push(beacon);
      }
    });

    // Dos varillas doradas de encuadernación que atraviesan la arquitectura documental
    [-0.51, 0.51].forEach((rx) => {
      const rod = new THREE.Mesh(
        new THREE.CylinderGeometry(0.016, 0.018, 0.94, 24),
        brassMat
      );
      rod.position.set(rx, -0.30, -0.06);
      group.add(rod);

      const finial = new THREE.Mesh(new THREE.SphereGeometry(0.032, 18, 18), goldMat);
      finial.position.set(rx, 0.18, -0.06);
      group.add(finial);
    });

    // 3. Corona superior: Atril del Informe Final (4. Bibliografía APA) y Anillo Anual (5. Cronograma)
    const crownPedestalPts = [
      new THREE.Vector2(0, -0.035),
      new THREE.Vector2(0.18, -0.035),
      new THREE.Vector2(0.11, 0.045),
      new THREE.Vector2(0.09, 0.12),
      new THREE.Vector2(0.16, 0.16),
      new THREE.Vector2(0, 0.16)
    ];
    const crownPedestal = new THREE.Mesh(new THREE.LatheGeometry(crownPedestalPts, 40), goldMat);
    crownPedestal.position.z = -0.06;
    group.add(crownPedestal);

    // Manuscrito abierto final inclinado sobre el pedestal corona
    const codexGroup = new THREE.Group();
    codexGroup.position.set(0, 0.19, -0.04);
    codexGroup.rotation.x = 0.28;

    const codexBoard = new THREE.Mesh(
      engine.getRoundedBoxGeo(0.46, 0.024, 0.30, 0.008, 3),
      new THREE.MeshStandardMaterial({ color: 0x0f2d59, roughness: 0.50, metalness: 0.14 })
    );
    codexGroup.add(codexBoard);

    [-0.10, 0.10].forEach((px) => {
      const pageCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.018, -0.10),
        new THREE.Vector3(px * 0.9, 0.044, -0.04),
        new THREE.Vector3(px * 1.9, 0.026, 0.06)
      ]);
      const pageMesh = new THREE.Mesh(
        new THREE.TubeGeometry(pageCurve, 14, 0.018, 12, false),
        ivoryMat
      );
      pageMesh.scale.set(1.5, 0.5, 2.4);
      codexGroup.add(pageMesh);
    });

    const bookmark = new THREE.Mesh(
      engine.getRoundedBoxGeo(0.028, 0.008, 0.26, 0.002, 2),
      new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.48 })
    );
    bookmark.position.set(0, 0.032, 0.04);
    codexGroup.add(bookmark);
    group.add(codexGroup);

    // Anillo Armilar Anual (5. Cronograma: Plan de Trabajo a 1 Año = 12 hitos)
    engine.anim28_chronoRing = new THREE.Group();
    engine.anim28_chronoRing.position.set(0, 0.52, -0.04);
    engine.anim28_chronoRing.rotation.x = 0.38;

    const ringMesh = new THREE.Mesh(
      new THREE.TorusGeometry(0.36, 0.013, 18, 64),
      brassMat
    );
    ringMesh.rotation.x = Math.PI / 2;
    engine.anim28_chronoRing.add(ringMesh);

    for (let m = 0; m < 12; m++) {
      const ang = (m * 2 * Math.PI) / 12;
      const bead = new THREE.Mesh(
        new THREE.SphereGeometry(m % 3 === 0 ? 0.026 : 0.018, 14, 14),
        m % 3 === 0 ? goldMat : ivoryMat
      );
      bead.position.set(Math.cos(ang) * 0.36, 0, Math.sin(ang) * 0.36);
      engine.anim28_chronoRing.add(bead);
    }

    const coreCrystal = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.11, 1),
      engine.glassMat(0x38bdf8, { opacity: 0.88, roughness: 0.06 })
    );
    engine.anim28_chronoRing.add(coreCrystal);
    engine.anim28_crystal = coreCrystal;

    group.add(engine.anim28_chronoRing);

    // Etiquetas laterales claras para Capítulos 4 y 5 en la cúspide
    const bibCallout = engine.createLabelSprite("4. BIBLIOGRAFÍA", "Normas APA Completas", "#0f2d59", false, { x: 0.68, y: 0.20 });
    bibCallout.position.set(0.72, 0.24, 0.06);
    group.add(bibCallout);

    const cronoCallout = engine.createLabelSprite("5. CRONOGRAMA", "Plan de Trabajo (1 Año)", "#b45309", false, { x: 0.68, y: 0.20 });
    cronoCallout.position.set(-0.72, 0.54, 0.06);
    group.add(cronoCallout);

    const titleSprite = engine.createLabelSprite(
      "DISEÑO DE INVESTIGACIÓN COMPLETO",
      "Informe Final UNCo-CURZAS • Carátula + 5 Capítulos • Cronograma 1 Año",
      "#0f2d59",
      true
    );
    titleSprite.position.set(0, 1.12, 0);
    group.add(titleSprite);

    g.add(group);
  },

  animate(engine, t) {
    if (engine.anim28_chronoRing) {
      engine.anim28_chronoRing.rotation.y = t * 0.34;
    }
    if (engine.anim28_crystal) {
      engine.anim28_crystal.rotation.y = -t * 0.65;
      engine.anim28_crystal.position.y = Math.sin(t * 1.5) * 0.02;
    }
    if (engine.anim28_beacons) {
      engine.anim28_beacons.forEach((b, i) => {
        b.rotation.y = t * 0.8 + i * 0.4;
      });
    }
  }
};
