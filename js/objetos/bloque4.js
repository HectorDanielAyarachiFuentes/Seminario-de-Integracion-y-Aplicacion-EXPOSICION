/**
 * =============================================================================
 * OBJETOS 3D — BLOQUE IV: ESCULTURAS 16 A 20 (EDICIÓN MINIMALISTA)
 * Presentación de Tesina • CURZAS - UNCo
 * =============================================================================
 * 16. anim_16: Mesa Redonda de Cogobierno Paritario y Servidor Criptográfico (Matus + Oszlak)
 * 17. anim_17: Escultura El Oráculo del Conocimiento (Estado del Arte y Posible Vacancia)
 * 18. anim_18: Probeta Doble de Triangulación Mixta (CUAL -> cuan) y Bitácora de Caso
 * 19. anim_19: Muestrario de Informantes Clave (9 Entrevistas) y Matriz de 45 Cuestionarios
 * 20. anim_20: Ábaco Matricial de las 5 Dimensiones e Indicadores Empíricos de Factibilidad
 */

window.Presentation3D_Objects = window.Presentation3D_Objects || {};

// ──────────────────────────────────────────────────────────────────────────
// 16. POLIGOBERNANZA Y CAPACIDADES: Mesa de Cogobierno y Servidor Criptográfico
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_16"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const chassis = engine.createMachinedChassis(1.50, 0.10, 1.50, { color: 0x1e293b });
    chassis.position.y = -0.92;
    g.add(chassis);

    const plaqueMaster = engine.createEngravedPlaque(
      1.10,
      0.22,
      "PODER COMPARTIDO Y POLIGOBERNANZA",
      "Matus • Cao & Blutman • Oszlak (Estado Exponencial)",
      ["ADUNC GREMIO", "DOCENTES", "ESTUDIANTES", "GESTIÓN"],
      { theme: "dark" }
    );
    plaqueMaster.position.set(0, -0.84, 0.74);
    g.add(plaqueMaster);

    const group = new THREE.Group();
    group.position.set(0, -0.05, 0);

    // 1. Mesa circular de cogobierno paritario de nogal y bisel de latón
    const tableTop = new THREE.Mesh(
      new THREE.CylinderGeometry(1.05, 1.05, 0.08, 48),
      engine.graniteMat(0x1e293b, 0.3, 0.4)
    );
    tableTop.position.y = -0.3;
    group.add(tableTop);

    const tableRim = new THREE.Mesh(
      new THREE.TorusGeometry(1.05, 0.018, 16, 64),
      engine.brassMat(0xd4af37)
    );
    tableRim.position.y = -0.3;
    tableRim.rotation.x = Math.PI / 2;
    group.add(tableRim);

    // Escudo institucional UNCo sobre el tablero de cogobierno
    const seal = engine.createAcademicSeal(0.18);
    seal.rotation.x = Math.PI / 2;
    seal.position.set(0, -0.25, 0.42);
    group.add(seal);

    // Columna central de soporte de la mesa (apoyada limpiamente sobre el chasis)
    const tablePedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.32, 0.50, 32),
      engine.marbleMat(0xf8fafc)
    );
    tablePedestal.position.y = -0.58;
    group.add(tablePedestal);

    // 2. 4 Escaños de representación colegiada en la mesa
    const seats = [
      { name: "ADUNC (GREMIO)", sub: "Representación Paritaria", angle: 0, col: "#dc2626", hex: 0xdc2626 },
      { name: "CLAUSTRO DOCENTE", sub: "Profesores y Asistentes", angle: Math.PI / 2, col: "#2563eb", hex: 0x2563eb },
      { name: "CLAUSTRO ESTUDIANTIL", sub: "Comunidad de Alumnos", angle: Math.PI, col: "#16a34a", hex: 0x16a34a },
      { name: "AUTORIDADES", sub: "Gestión Departamental", angle: (3 * Math.PI) / 2, col: "#d97706", hex: 0xd97706 }
    ];

    seats.forEach((seat) => {
      const sx = Math.cos(seat.angle) * 1.02;
      const sz = Math.sin(seat.angle) * 1.02;

      const chair = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.14, 0.18, 24),
        engine.brassMat(seat.hex)
      );
      chair.position.set(sx, -0.22, sz);
      group.add(chair);

      const back = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.24, 0.04),
        engine.marbleMat(0xffffff)
      );
      back.position.set(sx * 1.08, -0.06, sz * 1.08);
      back.rotation.y = -seat.angle + Math.PI / 2;
      group.add(back);

      const label = engine.createLabelSprite(seat.name, seat.sub, seat.col, false, { x: 0.58, y: 0.17 });
      label.position.set(sx * 1.25, 0.22, sz * 1.25);
      group.add(label);
    });

    // 3. Servidor central criptográfico
    const serverTower = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.32, 0.72, 6),
      engine.graniteMat(0x0f172a, 0.2, 0.6)
    );
    serverTower.position.y = 0.12;
    group.add(serverTower);

    for (let k = 0; k < 4; k++) {
      const slot = new THREE.Mesh(
        new THREE.BoxGeometry(0.38, 0.025, 0.38),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
      );
      slot.position.y = -0.12 + k * 0.14;
      group.add(slot);
    }

    const cryptoPadlock = new THREE.Mesh(
      new THREE.TorusGeometry(0.12, 0.03, 16, 32, Math.PI),
      engine.brassMat(0xffd700)
    );
    cryptoPadlock.position.set(0, 0.62, 0);
    group.add(cryptoPadlock);

    const cryptoBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.22, 0.16, 0.1),
      engine.brassMat(0xffd700)
    );
    cryptoBody.position.set(0, 0.48, 0);
    group.add(cryptoBody);

    // Anillo giratorio de poligobernanza (rotación libre sin colisiones)
    engine.anim16_polyRing = engine.createBrassArmillaryRing(0.75, 0.012);
    engine.anim16_polyRing.position.y = 0.12;
    engine.anim16_polyRing.rotation.x = Math.PI / 2;
    group.add(engine.anim16_polyRing);

    const titleSprite = engine.createLabelSprite("PODER COMPARTIDO Y POLIGOBERNANZA", "Matus • Cao & Blutman • Oszlak", "#0f2d59", true);
    titleSprite.position.set(0, 0.95, 0);
    group.add(titleSprite);

    g.add(group);
  },

  animate(engine, t) {
    if (engine.anim16_polyRing) {
      engine.anim16_polyRing.rotation.z = t * 0.25;
      engine.anim16_polyRing.rotation.x = Math.PI / 2 + Math.sin(t * 0.8) * 0.1;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 17. ESTADO DEL ARTE Y POSIBLE VACANCIA: El Oráculo Esculpido del Conocimiento
//     (Diseño orgánico de alta poligonización por Lathe + Tube + Códice)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_17"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.55, 0.22, -1.22);

    // Atril frontal independiente sobre el borde delantero del plinto (100% despejado delante del podio)
    const plaqueCradle = new THREE.Mesh(
      engine.getRoundedBoxGeo(1.10, 0.13, 0.15, 0.015, 3),
      engine.graniteMat(0x1e293b, 0.54, 0.15)
    );
    plaqueCradle.position.set(0, -0.965, 1.21);
    plaqueCradle.castShadow = true;
    plaqueCradle.receiveShadow = true;
    g.add(plaqueCradle);

    const plaqueMaster = engine.createEngravedPlaque(
      1.12,
      0.22,
      "ESTADO DEL ARTE • ANTECEDENTES",
      "Dialnet • SciELO • Redalyc • EPAA • RDI UNCo",
      ["INTERNACIONAL", "NACIONAL", "REGIONAL / LOCAL", "POSIBLE VACANCIA"],
      { theme: "dark" }
    );
    plaqueMaster.position.set(0, -0.89, 1.27);
    plaqueMaster.rotation.x = -0.30;
    g.add(plaqueMaster);

    const group = new THREE.Group();
    group.position.set(0, -0.05, 0);

    const ivoryMat = engine.marbleMat(0xf8f6f0, 0.44);
    const warmMarbleMat = engine.marbleMat(0xf2efe6, 0.50);
    const slateMat = engine.graniteMat(0x1e293b, 0.54, 0.15);
    const goldMat = engine.goldMat(0xe0ba56);
    const brassMat = engine.brassMat(0xcfa346);
    const togaMat = new THREE.MeshStandardMaterial({
      color: 0x163868,
      roughness: 0.62,
      metalness: 0.08
    });

    // 1. Rotonda circular escalonada y altar central amplio (sin chasis cuadrado ni desbordes)
    const base0 = new THREE.Mesh(
      new THREE.CylinderGeometry(1.08, 1.14, 0.08, 64),
      slateMat
    );
    base0.position.y = -0.945;
    base0.receiveShadow = true;
    base0.castShadow = true;
    group.add(base0);

    const base1 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.98, 1.03, 0.10, 64),
      warmMarbleMat
    );
    base1.position.y = -0.855;
    base1.receiveShadow = true;
    group.add(base1);

    const rim1 = new THREE.Mesh(
      new THREE.TorusGeometry(0.99, 0.013, 18, 72),
      brassMat
    );
    rim1.rotation.x = Math.PI / 2;
    rim1.position.y = -0.805;
    group.add(rim1);

    const base2 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.80, 0.86, 0.10, 64),
      ivoryMat
    );
    base2.position.y = -0.755;
    base2.receiveShadow = true;
    group.add(base2);

    const rim2 = new THREE.Mesh(
      new THREE.TorusGeometry(0.81, 0.012, 18, 64),
      brassMat
    );
    rim2.rotation.x = Math.PI / 2;
    rim2.position.y = -0.705;
    group.add(rim2);

    // Altar torneado de perfil clásico moldurado (y in [-0.705, -0.36], corona superior r = 0.61)
    const altarProfile = [
      new THREE.Vector2(0, -0.705),
      new THREE.Vector2(0.68, -0.705),
      new THREE.Vector2(0.65, -0.65),
      new THREE.Vector2(0.54, -0.59),
      new THREE.Vector2(0.49, -0.50),
      new THREE.Vector2(0.53, -0.42),
      new THREE.Vector2(0.62, -0.375),
      new THREE.Vector2(0.61, -0.36),
      new THREE.Vector2(0, -0.36)
    ];
    const pedestalAltar = new THREE.Mesh(
      new THREE.LatheGeometry(altarProfile, 48),
      ivoryMat
    );
    pedestalAltar.castShadow = true;
    pedestalAltar.receiveShadow = true;
    group.add(pedestalAltar);

    const altarRim = new THREE.Mesh(
      new THREE.TorusGeometry(0.615, 0.013, 18, 64),
      goldMat
    );
    altarRim.rotation.x = Math.PI / 2;
    altarRim.position.y = -0.36;
    group.add(altarRim);

    // 3 Hitómetros / Plintos de Escala sobre las terrazas escalonadas
    const scaleNodes = [
      { label: "INTERNACIONAL", sub: "México / Ecuador / Cuba", x: -0.84, z: 0.34, col: 0x0ea5e9, yBase: -0.805 },
      { label: "NACIONAL", sub: "Univ. Públicas Arg.", x: 0.0, z: 0.72, col: 0x10b981, yBase: -0.705 },
      { label: "REGIONAL / LOCAL", sub: "UNCo / CURZAS", x: 0.84, z: 0.34, col: 0xf59e0b, yBase: -0.805 }
    ];
    scaleNodes.forEach((sn) => {
      const beaconStand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.055, 0.075, 0.055, 24),
        brassMat
      );
      beaconStand.position.set(sn.x, sn.yBase + 0.0275, sn.z);
      group.add(beaconStand);

      const orb = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.052, 1),
        engine.glassMat(sn.col, { opacity: 0.92, roughness: 0.08 })
      );
      orb.position.set(sn.x, sn.yBase + 0.105, sn.z);
      group.add(orb);
    });

    // ────────────────────────────────────────────────────────────────────────
    // PÓRTICO TRIUNFAL CLÁSICO ENRAIZADO SOBRE EL PODIO (cero columnas flotantes)
    // ────────────────────────────────────────────────────────────────────────
    const archGroup = new THREE.Group();
    archGroup.position.set(0, 0, -0.26);

    [-0.64, 0.64].forEach((x) => {
      // Base de columna asentada exactamente en y = -0.705 (top de base2)
      const col = engine.createClassicalColumn(1.54, 0.062, 0xcfa346, true);
      col.position.set(x, 0.065, 0); // bottom: 0.065 - 0.77 = -0.705; top: +0.835
      archGroup.add(col);
    });

    const archOuter = new THREE.Mesh(
      new THREE.TorusGeometry(0.64, 0.036, 24, 72, Math.PI),
      brassMat
    );
    archOuter.position.set(0, 0.835, 0);
    archGroup.add(archOuter);

    const archInner = new THREE.Mesh(
      new THREE.TorusGeometry(0.56, 0.014, 18, 64, Math.PI),
      ivoryMat
    );
    archInner.position.set(0, 0.835, 0);
    archGroup.add(archInner);

    const archSeal = engine.createAcademicSeal(0.13);
    archSeal.rotation.x = Math.PI / 2;
    archSeal.position.set(0, 1.475, 0.03);
    archGroup.add(archSeal);

    group.add(archGroup);

    // ────────────────────────────────────────────────────────────────────────
    // ESCULTURA DE ALTA POLIGONIZACIÓN: EL ORÁCULO DEL CONOCIMIENTO (SIN CAJAS)
    // ────────────────────────────────────────────────────────────────────────
    const figureGroup = new THREE.Group();
    figureGroup.position.set(0, -0.36, 0.02);

    // Helper orgánico para extremidades esculpidas suaves por Lathe
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
      const m = new THREE.Mesh(new THREE.LatheGeometry(pts, 28), mat);
      m.castShadow = true;
      return m;
    };

    // Calzado/Sandalias esculpidas orgánicamente (sin bloques rectangulares)
    const buildSandaledFoot = (px, pz, yaw) => {
      const f = new THREE.Group();
      const sole = new THREE.Mesh(new THREE.SphereGeometry(0.052, 20, 14), ivoryMat);
      sole.scale.set(0.76, 0.36, 1.65);
      sole.position.y = 0.018;
      f.add(sole);
      const strap = new THREE.Mesh(new THREE.TorusGeometry(0.038, 0.007, 12, 24), goldMat);
      strap.rotation.x = Math.PI / 2.4;
      strap.position.set(0, 0.034, 0.015);
      f.add(strap);
      f.position.set(px, 0, pz);
      f.rotation.y = yaw;
      return f;
    };

    figureGroup.add(buildSandaledFoot(0.11, 0.04, 0.12));
    figureGroup.add(buildSandaledFoot(-0.15, -0.02, -0.22));

    // Piernas en contrapposto (pantorrilla torneada y rodilla suavizada)
    const rightLeg = makeLimb(0.036, 0.056, 0.054, 0.34, ivoryMat);
    rightLeg.position.set(0.11, 0.02, 0.02);
    figureGroup.add(rightLeg);

    const leftLeg = makeLimb(0.035, 0.054, 0.052, 0.34, ivoryMat);
    leftLeg.position.set(-0.14, 0.02, -0.01);
    leftLeg.rotation.z = -0.07;
    leftLeg.rotation.x = 0.08;
    figureGroup.add(leftLeg);

    // Túnica inferior académica drapeada (Lathe acampanado con pliegues y fajín dorado)
    const skirtProfile = [
      new THREE.Vector2(0, 0.30),
      new THREE.Vector2(0.24, 0.30),
      new THREE.Vector2(0.22, 0.38),
      new THREE.Vector2(0.19, 0.50),
      new THREE.Vector2(0.165, 0.62),
      new THREE.Vector2(0.15, 0.66),
      new THREE.Vector2(0, 0.66)
    ];
    const tunicSkirt = new THREE.Mesh(new THREE.LatheGeometry(skirtProfile, 48), togaMat);
    tunicSkirt.scale.set(1.12, 1, 0.86);
    tunicSkirt.castShadow = true;
    figureGroup.add(tunicSkirt);

    // Pliegues verticales esculpidos en la caída de la túnica
    for (let i = 0; i < 6; i++) {
      const a = -0.9 + i * 0.36;
      const foldCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(Math.sin(a) * 0.17, 0.64, Math.cos(a) * 0.14),
        new THREE.Vector3(Math.sin(a) * 0.21, 0.48, Math.cos(a) * 0.16),
        new THREE.Vector3(Math.sin(a) * 0.24, 0.31, Math.cos(a) * 0.18)
      ]);
      const fold = new THREE.Mesh(
        new THREE.TubeGeometry(foldCurve, 16, 0.018, 12, false),
        togaMat
      );
      figureGroup.add(fold);
    }

    const hemTrim = new THREE.Mesh(
      new THREE.TorusGeometry(0.235, 0.008, 14, 56),
      goldMat
    );
    hemTrim.rotation.x = Math.PI / 2;
    hemTrim.scale.set(1.12, 0.86, 1);
    hemTrim.position.y = 0.305;
    figureGroup.add(hemTrim);

    const waistBelt = new THREE.Mesh(
      new THREE.TorusGeometry(0.168, 0.013, 16, 48),
      goldMat
    );
    waistBelt.rotation.x = Math.PI / 2;
    waistBelt.scale.set(1.12, 0.84, 1);
    waistBelt.position.y = 0.65;
    figureGroup.add(waistBelt);

    // Torso anatómico esculpido por Lathe (perfil orgánico pecho-cintura-clavícula)
    const torsoProfile = [
      new THREE.Vector2(0, 0.62),
      new THREE.Vector2(0.155, 0.62),
      new THREE.Vector2(0.145, 0.72),
      new THREE.Vector2(0.168, 0.84),
      new THREE.Vector2(0.188, 0.96),
      new THREE.Vector2(0.175, 1.03),
      new THREE.Vector2(0.105, 1.06),
      new THREE.Vector2(0.062, 1.08),
      new THREE.Vector2(0, 1.08)
    ];
    const torsoMesh = new THREE.Mesh(new THREE.LatheGeometry(torsoProfile, 48), ivoryMat);
    torsoMesh.scale.set(1.22, 1.0, 0.72);
    torsoMesh.castShadow = true;
    figureGroup.add(torsoMesh);

    // Deltoides hombros redondeados + banda/manto diagonal académico con fíbula dorada
    const shoulderLeft = new THREE.Mesh(new THREE.SphereGeometry(0.072, 24, 24), ivoryMat);
    shoulderLeft.position.set(-0.22, 0.99, 0.0);
    figureGroup.add(shoulderLeft);

    const shoulderRight = new THREE.Mesh(new THREE.SphereGeometry(0.070, 24, 24), ivoryMat);
    shoulderRight.position.set(0.22, 0.98, 0.0);
    figureGroup.add(shoulderRight);

    const sashCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.20, 1.02, -0.04),
      new THREE.Vector3(0.18, 0.96, 0.11),
      new THREE.Vector3(0.02, 0.80, 0.15),
      new THREE.Vector3(-0.18, 0.65, 0.10),
      new THREE.Vector3(-0.21, 0.45, 0.04)
    ]);
    const togaSash = new THREE.Mesh(
      new THREE.TubeGeometry(sashCurve, 32, 0.036, 16, false),
      togaMat
    );
    figureGroup.add(togaSash);

    const fibula = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.016, 24), goldMat);
    fibula.rotation.x = Math.PI / 2.2;
    fibula.position.set(0.17, 0.98, 0.11);
    figureGroup.add(fibula);

    // Cuello y Cabeza Clásica Laureada (MIRADA DESPEJADA SIN OBSTRUCCIÓN)
    const neck = makeLimb(0.068, 0.056, 0.054, 0.12, ivoryMat);
    neck.position.set(0, 1.06, 0.01);
    figureGroup.add(neck);

    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.22, 0.02);
    headGroup.rotation.y = 0.22; // Ligera inclinación noble hacia el códice del estado del arte

    const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.092, 32, 28), ivoryMat);
    cranium.scale.set(0.90, 1.12, 1.00);
    cranium.castShadow = true;
    headGroup.add(cranium);

    // Perfil facial suave (sin cajas): puente nasal y arco supraciliar sutiles
    const noseCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.024, 0.088),
      new THREE.Vector3(0, -0.014, 0.105)
    ]);
    const nose = new THREE.Mesh(new THREE.TubeGeometry(noseCurve, 8, 0.011, 10, false), ivoryMat);
    headGroup.add(nose);

    const chin = new THREE.Mesh(new THREE.SphereGeometry(0.034, 18, 16), ivoryMat);
    chin.scale.set(0.88, 0.95, 0.92);
    chin.position.set(0, -0.072, 0.055);
    headGroup.add(chin);

    // Corona de Laurel Académica dorada enmarcando la frente
    const laurelCrown = new THREE.Mesh(
      new THREE.TorusGeometry(0.095, 0.012, 14, 36),
      goldMat
    );
    laurelCrown.rotation.x = Math.PI / 2.35;
    laurelCrown.position.set(0, 0.048, -0.005);
    headGroup.add(laurelCrown);

    // Rulos clásicos posteriores alrededor de la nuca y sienes
    [
      [-0.07, 0.06, -0.03], [0.07, 0.06, -0.03], [-0.08, 0.02, -0.05],
      [0.08, 0.02, -0.05], [0, 0.07, -0.06], [-0.05, -0.02, -0.07],
      [0.05, -0.02, -0.07], [0, 0.09, -0.01], [-0.04, 0.08, 0.02], [0.04, 0.08, 0.02]
    ].forEach(([hx, hy, hz]) => {
      const curl = new THREE.Mesh(new THREE.SphereGeometry(0.034, 14, 14), warmMarbleMat);
      curl.position.set(hx, hy, hz);
      headGroup.add(curl);
    });

    figureGroup.add(headGroup);

    // ────────────────────────────────────────────────────────────────────────
    // BRAZO IZQUIERDO DEL VISOR (-X): Alza el Báculo del Astrolabio y Gema Geodésica
    // (Ubicado lateralmente en X = -0.50 para dejar el rostro 100% despejado)
    // ────────────────────────────────────────────────────────────────────────
    const leftArmCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.22, 0.99, 0.0),
      new THREE.Vector3(-0.35, 0.98, 0.07),
      new THREE.Vector3(-0.44, 1.09, 0.12),
      new THREE.Vector3(-0.47, 1.18, 0.12)
    ]);
    const leftArmMesh = new THREE.Mesh(
      new THREE.TubeGeometry(leftArmCurve, 28, 0.040, 16, false),
      ivoryMat
    );
    leftArmMesh.castShadow = true;
    figureGroup.add(leftArmMesh);

    const leftHand = new THREE.Mesh(new THREE.SphereGeometry(0.042, 18, 18), ivoryMat);
    leftHand.position.set(-0.47, 1.18, 0.12);
    figureGroup.add(leftHand);

    // Báculo astronómico de latón apoyado desde el altar hasta la gema geodésica
    const staffShaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.020, 1.24, 24),
      brassMat
    );
    staffShaft.position.set(-0.47, 0.62, 0.12);
    figureGroup.add(staffShaft);

    const staffFoot = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.044, 0.06, 24), goldMat);
    staffFoot.position.set(-0.47, 0.03, 0.12);
    figureGroup.add(staffFoot);

    const gemHolder = new THREE.Group();
    gemHolder.position.set(-0.47, 1.44, 0.12);

    // Núcleo geodésico poliédrico de alta definición (detail=1 -> 80 caras cristalinas)
    engine.anim17_diamond = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.145, 1),
      engine.glassMat(0x38bdf8, { roughness: 0.05, opacity: 0.88 })
    );
    gemHolder.add(engine.anim17_diamond);

    const innerPrism = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.082, 0),
      goldMat
    );
    gemHolder.add(innerPrism);

    engine.anim17_ring = engine.createBrassArmillaryRing(0.24, 0.010);
    gemHolder.add(engine.anim17_ring);

    engine.anim17_ring2 = engine.createBrassArmillaryRing(0.19, 0.008);
    gemHolder.add(engine.anim17_ring2);

    const gemLight = new THREE.PointLight(0x38bdf8, 1.8, 2.4);
    gemHolder.add(gemLight);

    figureGroup.add(gemHolder);

    // ────────────────────────────────────────────────────────────────────────
    // BRAZO DERECHO DEL VISOR (+X): Señala el Atril y Códice del Estado del Arte
    // ────────────────────────────────────────────────────────────────────────
    const rightArmCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.22, 0.98, 0.0),
      new THREE.Vector3(0.32, 0.82, 0.04),
      new THREE.Vector3(0.37, 0.68, 0.11),
      new THREE.Vector3(0.41, 0.64, 0.14)
    ]);
    const rightArmMesh = new THREE.Mesh(
      new THREE.TubeGeometry(rightArmCurve, 24, 0.039, 16, false),
      ivoryMat
    );
    rightArmMesh.castShadow = true;
    figureGroup.add(rightArmMesh);

    const rightHand = new THREE.Mesh(new THREE.SphereGeometry(0.040, 16, 16), ivoryMat);
    rightHand.position.set(0.41, 0.64, 0.14);
    figureGroup.add(rightHand);

    // Atril esbelto torneado por revolución junto a la figura (+X) sosteniendo códice abierto y pergamino
    const lecternPts = [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.11, 0),
      new THREE.Vector2(0.09, 0.05),
      new THREE.Vector2(0.038, 0.25),
      new THREE.Vector2(0.045, 0.48),
      new THREE.Vector2(0.12, 0.56),
      new THREE.Vector2(0, 0.56)
    ];
    const lecternPedestal = new THREE.Mesh(new THREE.LatheGeometry(lecternPts, 32), warmMarbleMat);
    lecternPedestal.position.set(0.41, 0, 0.12);
    figureGroup.add(lecternPedestal);

    const codexGroup = new THREE.Group();
    codexGroup.position.set(0.41, 0.58, 0.12);
    codexGroup.rotation.x = 0.35;

    const deskTray = new THREE.Mesh(
      engine.getRoundedBoxGeo(0.28, 0.022, 0.20, 0.006, 3),
      brassMat
    );
    codexGroup.add(deskTray);

    // Páginas abiertas en doble curvatura orgánica (Tube/Cylinder)
    [-0.06, 0.06].forEach((px, idx) => {
      const pageCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.015, -0.07),
        new THREE.Vector3(px * 0.9, 0.032, -0.04),
        new THREE.Vector3(px * 1.6, 0.020, 0.04)
      ]);
      const pageRib = new THREE.Mesh(
        new THREE.TubeGeometry(pageCurve, 12, 0.016, 12, false),
        ivoryMat
      );
      pageRib.scale.set(1.4, 0.45, 2.2);
      codexGroup.add(pageRib);
    });

    const scrollCylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(0.020, 0.020, 0.24, 20),
      ivoryMat
    );
    scrollCylinder.rotation.z = Math.PI / 2;
    scrollCylinder.position.set(0, 0.030, 0.065);
    codexGroup.add(scrollCylinder);

    const waxSeal = new THREE.Mesh(
      new THREE.SphereGeometry(0.018, 16, 14),
      new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.4 })
    );
    waxSeal.position.set(0, 0.045, 0.065);
    codexGroup.add(waxSeal);

    figureGroup.add(codexGroup);

    group.add(archGroup);
    group.add(figureGroup);

    // Etiqueta flotante superior de alta resolución
    const mainLabel = engine.createLabelSprite(
      "ESTADO DEL ARTE (RELEVAMIENTO PRELIMINAR)",
      "5 Claves en Buscadores • Posible Vacancia a Verificar",
      "#0f2d59",
      true
    );
    mainLabel.position.set(0, 1.62, 0.12);
    group.add(mainLabel);

    g.add(group);
  },

  animate(engine, t) {
    if (engine.anim17_diamond) {
      engine.anim17_diamond.rotation.y = t * 0.55;
      engine.anim17_diamond.rotation.x = Math.sin(t * 0.7) * 0.22;
      engine.anim17_diamond.position.y = Math.sin(t * 1.4) * 0.022;
    }
    if (engine.anim17_ring) {
      engine.anim17_ring.rotation.x = t * 0.40;
      engine.anim17_ring.rotation.y = t * 0.30;
    }
    if (engine.anim17_ring2) {
      engine.anim17_ring2.rotation.x = -t * 0.35;
      engine.anim17_ring2.rotation.z = t * 0.45;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 18. ESTRATEGIA METODOLÓGICA: Probeta Doble Mixta (CUAL -> cuan)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_18"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const chassis = engine.createMachinedChassis(1.50, 0.10, 1.20, { color: 0x2e1204 });
    chassis.position.y = -0.92;
    g.add(chassis);

    const plaqueMaster = engine.createEngravedPlaque(
      1.10,
      0.22,
      "DISEÑO METODOLÓGICO MIXTO INTEGRADO",
      "Estrategia Secuencial: CUALITATIVO → cuantitativo",
      ["9 ENTREVISTAS EN PROFUNDIDAD", "45 CUESTIONARIOS LIKERT"],
      { theme: "dark" }
    );
    plaqueMaster.position.set(0, -0.84, 0.68);
    g.add(plaqueMaster);

    const group = new THREE.Group();
    group.position.set(0, -0.05, 0);

    const standBase = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.08, 0.6),
      engine.graniteMat(0x1e293b)
    );
    standBase.position.y = -0.7;
    group.add(standBase);

    const standRod = new THREE.Mesh(
      new THREE.CylinderGeometry(0.035, 0.035, 1.5, 16),
      engine.brassMat(0xd4af37)
    );
    standRod.position.set(0, 0.05, -0.15);
    group.add(standRod);

    // 1. Probeta CUALITATIVA (Izquierda, predominante 70%)
    const cualFlask = new THREE.Mesh(
      new THREE.CylinderGeometry(0.32, 0.38, 0.85, 32),
      engine.glassMat(0xffffff, { roughness: 0.1, transmission: 0.9, opacity: 0.6 })
    );
    cualFlask.position.set(-0.45, -0.15, 0);
    group.add(cualFlask);

    const cualLiquid = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.36, 0.65, 32),
      engine.glassMat(0x1d4ed8, { roughness: 0.2, transmission: 0.7, opacity: 0.85 })
    );
    cualLiquid.position.set(-0.45, -0.25, 0);
    group.add(cualLiquid);

    const labelCual = engine.createLabelSprite("PREDOMINIO CUALITATIVO", "Sentidos, Acuerdos y Disposiciones", "#1d4ed8", false, { x: 0.65, y: 0.19 });
    labelCual.position.set(-0.55, 0.42, 0);
    group.add(labelCual);

    // 2. Probeta CUANTITATIVA (Derecha, complementaria 30%)
    const cuanFlask = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.22, 0.65, 32),
      engine.glassMat(0xffffff, { roughness: 0.1, transmission: 0.9, opacity: 0.6 })
    );
    cuanFlask.position.set(0.48, -0.25, 0);
    group.add(cuanFlask);

    const cuanLiquid = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.2, 0.42, 32),
      engine.glassMat(0x10b981, { roughness: 0.2, transmission: 0.7, opacity: 0.85 })
    );
    cuanLiquid.position.set(0.48, -0.36, 0);
    group.add(cuanLiquid);

    const labelCuan = engine.createLabelSprite("SONDEO CUANTITATIVO", "45 Casos • Escala Likert", "#059669", false, { x: 0.62, y: 0.19 });
    labelCuan.position.set(0.55, 0.3, 0);
    group.add(labelCuan);

    // 3. Puente de conexión / Tubo de Triangulación Metodológica
    const bridgeCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.45, 0.28, 0),
      new THREE.Vector3(0.0, 0.58, 0),
      new THREE.Vector3(0.48, 0.12, 0)
    );
    const bridgeTube = new THREE.Mesh(
      new THREE.TubeGeometry(bridgeCurve, 32, 0.035, 16, false),
      engine.glassMat(0x38bdf8, { roughness: 0.15, transmission: 0.95 })
    );
    group.add(bridgeTube);

    engine.anim18_flowDot = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xffd700 })
    );
    group.add(engine.anim18_flowDot);
    engine.anim18_curve = bridgeCurve;

    // Bitácora abierta de caso situado al frente
    const logBook = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.04, 0.34),
      engine.marbleMat(0xfdfbf7)
    );
    logBook.position.set(0, -0.62, 0.22);
    logBook.rotation.x = 0.2;
    group.add(logBook);

    const titleSprite = engine.createLabelSprite("DISEÑO MIXTO: CUAL → cuan", "Estudio de Caso Situado • CURZAS 2027", "#0f2d59", true);
    titleSprite.position.set(0, 0.85, 0);
    group.add(titleSprite);

    g.add(group);
  },

  animate(engine, t) {
    if (engine.anim18_flowDot && engine.anim18_curve) {
      const u = (Math.sin(t * 1.5) + 1) / 2;
      const pt = engine.anim18_curve.getPoint(u);
      engine.anim18_flowDot.position.copy(pt);
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 19. POBLACIÓN Y MUESTRA: 8 Informantes Clave y Matriz de 45 Cuestionarios
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_19"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.55, 0.22, -1.22);

    const chassis = engine.createMachinedChassis(1.55, 0.10, 1.55, { color: 0x1e293b });
    chassis.position.y = -0.92;
    g.add(chassis);

    const plaqueMaster = engine.createEngravedPlaque(
      1.10,
      0.22,
      "DISEÑO MUESTRAL Y TÉCNICAS EMPÍRICAS",
      "Muestreo Intencional Riguroso y Factible",
      ["SATURACIÓN CUALITATIVA", "45 CUESTIONARIOS LIKERT"],
      { theme: "dark" }
    );
    plaqueMaster.position.set(0, -0.84, 0.78);
    g.add(plaqueMaster);

    const group = new THREE.Group();
    group.position.set(0, -0.05, 0);

    // 1. Semicírculo de los 9 Informantes Clave (Tabla TFG: 4 Doc, 2 Aut, 1 ADUNC, 2 Est)
    const informants = [
      { role: "Docente Presencial 1", col: 0x2563eb },
      { role: "Docente Presencial 2", col: 0x2563eb },
      { role: "Docente Tutor Nodos", col: 0x0284c7 },
      { role: "Docente Titular", col: 0x1d4ed8 },
      { role: "Autoridad Dpto.", col: 0xd97706 },
      { role: "Coord. Carrera", col: 0xb45309 },
      { role: "Gremio ADUNC", col: 0xdc2626 },
      { role: "Est. Sede Viedma", col: 0x16a34a },
      { role: "Est. Nodo Híbrido", col: 0x15803d }
    ];

    engine.anim19_busts = [];
    const radiusCual = 1.05;
    informants.forEach((inf, idx) => {
      const angle = -Math.PI * 0.75 + (idx / 8) * Math.PI * 0.9;
      const x = Math.cos(angle) * radiusCual;
      const z = Math.sin(angle) * radiusCual;

      const bustGroup = new THREE.Group();
      bustGroup.position.set(x, -0.3, z);

      const ped = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.09, 0.28, 16),
        engine.brassMat(inf.col)
      );
      bustGroup.add(ped);

      const head = new THREE.Mesh(
        new THREE.SphereGeometry(0.075, 16, 16),
        engine.marbleMat(0xf8fafc)
      );
      head.position.y = 0.21;
      bustGroup.add(head);

      group.add(bustGroup);
      engine.anim19_busts.push(bustGroup);
    });

    // Micrófono central de entrevista semiestructurada
    const micPole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.55, 16),
      engine.brassMat(0xd4af37)
    );
    micPole.position.set(0, -0.35, 0);
    group.add(micPole);

    const micHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 16, 16),
      engine.graniteMat(0x0f172a)
    );
    micHead.position.set(0, -0.05, 0);
    group.add(micHead);

    const labelCual = engine.createLabelSprite("9 ENTREVISTAS EN PROFUNDIDAD", "4 Doc. • 2 Directivos • ADUNC • 2 Est.", "#1d4ed8", false, { x: 0.75, y: 0.2 });
    labelCual.position.set(-0.2, 0.25, 0);
    group.add(labelCual);

    // 2. Matriz de 45 esferas luminosas (Sondeo Cuantitativo: 15 docentes + 30 estudiantes)
    const matrixGroup = new THREE.Group();
    matrixGroup.position.set(0.65, -0.3, 0.45);
    engine.anim19_dots = [];

    let count = 0;
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 9; col++) {
        count++;
        const isDocente = count <= 15;
        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(0.032, 12, 12),
          new THREE.MeshStandardMaterial({
            color: isDocente ? 0xffb703 : 0x06d6a0,
            emissive: isDocente ? 0xffb703 : 0x06d6a0,
            emissiveIntensity: 0.35,
            roughness: 0.3
          })
        );
        dot.position.set((col - 4) * 0.08, (row - 2) * 0.08, 0);
        matrixGroup.add(dot);
        engine.anim19_dots.push(dot);
      }
    }
    group.add(matrixGroup);

    const labelCuan = engine.createLabelSprite("45 CUESTIONARIOS LIKERT", "15 Docentes (Amarillo) + 30 Estudiantes (Verde)", "#059669", false, { x: 0.75, y: 0.2 });
    labelCuan.position.set(0.65, 0.12, 0.45);
    group.add(labelCuan);

    const mainTitle = engine.createLabelSprite("DISEÑO MUESTRAL Y TÉCNICAS", "Muestreo Intencional Riguroso y Factible", "#0f2d59", true);
    mainTitle.position.set(0, 0.85, 0);
    group.add(mainTitle);

    g.add(group);
  },

  animate(engine, t) {
    if (engine.anim19_dots) {
      engine.anim19_dots.forEach((dot, i) => {
        dot.position.z = Math.sin(t * 2 + i * 0.15) * 0.02;
      });
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 20. MATRIZ DE OPERACIONALIZACIÓN: Ábaco Neoclásico Monumental de 5 Columnas
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_20"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.72, 0.22, -1.22);

    const chassis = engine.createMachinedChassis(2.14, 0.10, 0.64, { color: 0x1e293b });
    chassis.position.set(0, -0.92, -0.10);
    g.add(chassis);

    // Atril frontal independiente adelantado sobre el plinto (cero intersección con la base del ábaco)
    const plaqueCradle = new THREE.Mesh(
      engine.getRoundedBoxGeo(1.24, 0.13, 0.16, 0.015, 3),
      engine.graniteMat(0x1e293b, 0.54, 0.15)
    );
    plaqueCradle.position.set(0, -0.96, 0.74);
    plaqueCradle.castShadow = true;
    plaqueCradle.receiveShadow = true;
    g.add(plaqueCradle);

    const plaqueMaster = engine.createEngravedPlaque(
      1.26,
      0.24,
      "MATRIZ DE OPERACIONALIZACIÓN",
      "5 Dimensiones • Indicadores Empíricos • Fuentes (Tabla 2)",
      ["NORMATIVA • TÉCNICA • ORGANIZACIONAL • CULTURAL • GOBERNANZA"],
      { theme: "dark" }
    );
    plaqueMaster.position.set(0, -0.87, 0.80);
    plaqueMaster.rotation.x = -0.30;
    g.add(plaqueMaster);

    const group = new THREE.Group();
    group.position.set(0, -0.04, -0.10);

    const abacusWidth = 2.16;

    const abacusBase = new THREE.Mesh(
      engine.getRoundedBoxGeo(abacusWidth, 0.12, 0.50, 0.014, 3),
      engine.graniteMat(0x1e293b, 0.50, 0.16)
    );
    abacusBase.position.y = -0.75;
    abacusBase.castShadow = true;
    group.add(abacusBase);

    const baseMolding = new THREE.Mesh(
      engine.getRoundedBoxGeo(abacusWidth * 1.02, 0.026, 0.52, 0.008, 2),
      engine.brassMat(0xd4af37)
    );
    baseMolding.position.y = -0.68;
    group.add(baseMolding);

    const abacusHeader = new THREE.Mesh(
      engine.getRoundedBoxGeo(abacusWidth, 0.15, 0.50, 0.014, 3),
      engine.graniteMat(0x1e293b, 0.50, 0.16)
    );
    abacusHeader.position.y = 0.52;
    abacusHeader.castShadow = true;
    group.add(abacusHeader);

    const headerMolding = new THREE.Mesh(
      engine.getRoundedBoxGeo(abacusWidth * 1.02, 0.026, 0.52, 0.008, 2),
      engine.brassMat(0xd4af37)
    );
    headerMolding.position.y = 0.44;
    group.add(headerMolding);

    // Helper para placa frontal nítida en la viga superior por cada columna
    const makeHeaderPlate = (title, colHex) => {
      const cw = 360, ch = 120;
      const canvas = document.createElement("canvas");
      canvas.width = cw;
      canvas.height = ch;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "#faf8f3";
      ctx.fillRect(0, 0, cw, ch);
      ctx.fillStyle = colHex;
      ctx.fillRect(0, 0, cw, 16);
      ctx.fillRect(0, ch - 8, cw, 8);

      let px = 40;
      ctx.font = `800 ${px}px 'Inter', sans-serif`;
      while (px > 20 && ctx.measureText(title).width > cw * 0.88) {
        px -= 2;
        ctx.font = `800 ${px}px 'Inter', sans-serif`;
      }
      ctx.fillStyle = colHex;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(title, cw / 2, ch * 0.54);

      const tex = new THREE.CanvasTexture(canvas);
      tex.anisotropy = 4;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;

      return new THREE.Mesh(
        new THREE.PlaneGeometry(0.36, 0.11),
        new THREE.MeshStandardMaterial({ map: tex, roughness: 0.42, metalness: 0.04 })
      );
    };

    const dimensions = [
      { name: "1. NORMATIVA", short: "1. NORMATIVA", sub: "Estatuto • CCT 1246/15", col: "#1d4ed8", hex: 0x1d4ed8, x: -0.84 },
      { name: "2. TÉCNICA", short: "2. TÉCNICA", sub: "Moodle/SIU • n ≥ 5", col: "#0284c7", hex: 0x0284c7, x: -0.42 },
      { name: "3. ORGANIZACIONAL", short: "3. ORGANIZAC.", sub: "Capacitación Art. 76", col: "#d97706", hex: 0xd97706, x: 0.0 },
      { name: "4. CULTURAL", short: "4. CULTURAL", sub: "Confianza y Pares", col: "#16a34a", hex: 0x16a34a, x: 0.42 },
      { name: "5. GOBERNANZA", short: "5. GOBERNANZA", sub: "Cogobierno • ADUNC", col: "#7c3aed", hex: 0x7c3aed, x: 0.84 }
    ];

    engine.anim20_discs = [];
    dimensions.forEach((dim, idx) => {
      const rod = new THREE.Mesh(
        new THREE.CylinderGeometry(0.022, 0.022, 1.14, 20),
        engine.brassMat(dim.hex)
      );
      rod.position.set(dim.x, -0.11, 0);
      group.add(rod);

      // Placa incrustada en el dintel superior sobre cada varilla (siempre visible)
      const colPlate = makeHeaderPlate(dim.short, dim.col);
      colPlate.position.set(dim.x, 0.525, 0.254);
      group.add(colPlate);

      const finial = new THREE.Mesh(
        new THREE.SphereGeometry(0.042, 18, 18),
        engine.brassMat(0xe0ba56)
      );
      finial.position.set(dim.x, 0.62, 0);
      group.add(finial);

      // 3 Cuentas tricolores (Variables • Indicadores • Fuentes) con alto contraste cromático
      for (let k = 0; k < 3; k++) {
        const beadGroup = new THREE.Group();
        const disc = new THREE.Mesh(
          new THREE.CylinderGeometry(0.095, 0.095, 0.052, 28),
          engine.marbleMat(0xf8fafc)
        );
        beadGroup.add(disc);

        const coreBand = new THREE.Mesh(
          new THREE.CylinderGeometry(0.098, 0.098, 0.022, 28),
          engine.glassMat(dim.hex, { opacity: 0.90, roughness: 0.14 })
        );
        beadGroup.add(coreBand);

        const beadRing = new THREE.Mesh(
          new THREE.TorusGeometry(0.098, 0.008, 12, 28),
          engine.brassMat(0xcfa346)
        );
        beadRing.rotation.x = Math.PI / 2;
        beadGroup.add(beadRing);

        beadGroup.position.set(dim.x, -0.44 + k * 0.27, 0);
        group.add(beadGroup);
        engine.anim20_discs.push({ group: beadGroup, basePosY: -0.44 + k * 0.27, speed: 0.8 + k * 0.4 });
      }

      // Carteles grandes escalonados en dos niveles claros (x = 0.70 de ancho, cero superposición)
      const isAlt = idx % 2 === 1;
      const labelY = isAlt ? 1.15 : 0.84;
      const label = engine.createLabelSprite(dim.name, dim.sub, dim.col, false, { x: 0.70, y: 0.20 });
      label.position.set(dim.x, labelY, 0.10);
      group.add(label);

      const connH = labelY - 0.62;
      const connLine = new THREE.Mesh(
        new THREE.CylinderGeometry(0.007, 0.007, connH, 10),
        engine.brassMat(0xd4af37)
      );
      connLine.position.set(dim.x, 0.62 + connH / 2, 0.04);
      group.add(connLine);
    });

    const mainTitle = engine.createLabelSprite("MATRIZ DE OPERACIONALIZACIÓN", "5 Dimensiones • Indicadores Empíricos • Fuentes (Tabla 2)", "#0f2d59", true);
    mainTitle.position.set(0, 1.54, 0.08);
    group.add(mainTitle);

    g.add(group);
  },

  animate(engine, t) {
    if (engine.anim20_discs) {
      engine.anim20_discs.forEach((d, i) => {
        d.group.position.y = d.basePosY + Math.sin(t * d.speed + i) * 0.032;
        d.group.rotation.y = t * 0.25;
      });
    }
  }
};
