/**
 * =============================================================================
 * OBJETOS 3D — BLOQUE III: ESCULTURAS 11 A 15 (EDICIÓN MINIMALISTA)
 * Presentación de Tesina • CURZAS - UNCo
 * =============================================================================
 * 11. anim_11: Diana de Coherencia de Objetivos (Núcleo General + 4 Ejes Cardinales)
 * 12. anim_12: Prisma Heptagonal de los 7 Subsistemas de Empleo Público (Longo, 2006)
 * 13. anim_13: Mecanismo de Engranajes Sistémicos de RRHH (Rendimiento, Desarrollo, Relaciones)
 * 14. anim_14: Escáner Radar Circular 360° (Mitigación de sesgos con 4 focos convergentes)
 * 15. anim_15: Cúpula Geodésica de los 4 Cuadrantes del CURZAS (Blindaje Ético Art. 76)
 */

window.Presentation3D_Objects = window.Presentation3D_Objects || {};

// ──────────────────────────────────────────────────────────────────────────
// 11. OBJETIVO GENERAL Y ESPECÍFICOS: 4 Figuras Clásicas con Props y Etiquetas -> Meta General
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_11"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.66, 0.22, -1.22);

    const targetGroup = new THREE.Group();
    targetGroup.position.set(0, -0.06, 0);

    // Columna central elevada sosteniendo el Gran Prisma del Objetivo General
    const centerPillar = engine.createClassicalColumn(0.96, 0.09, 0xd4af37, true);
    centerPillar.position.set(0, -0.44, -0.14);
    targetGroup.add(centerPillar);

    const generalCore = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.18, 0),
      engine.glassMat(0x0ea5e9, { roughness: 0.04, opacity: 0.92 })
    );
    generalCore.position.set(0, 0.28, -0.14);
    targetGroup.add(generalCore);
    engine.anim11_core = generalCore;

    const generalHalo = engine.createBrassArmillaryRing(0.28, 0.011);
    generalHalo.position.set(0, 0.28, -0.14);
    targetGroup.add(generalHalo);
    engine.anim11_halo = generalHalo;

    const coreLight = new THREE.PointLight(0xffd700, 1.45, 2.2);
    coreLight.position.set(0, 0.34, -0.14);
    targetGroup.add(coreLight);

    // Etiqueta clara para el Objetivo General
    const lblGeneral = engine.createLabelSprite(
      "OBJETIVO GENERAL",
      "Analizar factibilidad 360° en 5 dimensiones (2027)",
      "#0f2d59",
      true,
      { x: 1.42 }
    );
    lblGeneral.position.set(0, 1.18, -0.14);
    targetGroup.add(lblGeneral);

    // Anillos concéntricos en el piso del foro (Tabla 1 de Consistencia)
    [0.52, 0.98].forEach((rad) => {
      const floorRing = engine.createBrassArmillaryRing(rad, 0.008);
      floorRing.rotation.x = Math.PI / 2;
      floorRing.position.set(0, -0.92, 0);
      targetGroup.add(floorRing);
    });

    // 4 Figuras Clásicas estilo David en arco escalonado con objeto simbólico y etiqueta por cada Objetivo Específico
    const axes = [
      {
        title: "OE1 · NORMA vs. PRÁCTICA", sub: "Reglamentos y SIU",
        x: -1.10, z: 0.34, col: 0x0f2d59, lblY: 0.16, prop: "scroll"
      },
      {
        title: "OE2 · VOCES Y CONFIANZA", sub: "Docentes y Alumnos",
        x: 1.10, z: 0.34, col: 0x0f625a, lblY: 0.16, prop: "orb"
      },
      {
        title: "OE3 · TRABAS Y PARES", sub: "ADUNC y Pares Horiz.",
        x: -0.72, z: -0.52, col: 0xb45309, lblY: 0.62, prop: "gears"
      },
      {
        title: "OE4 · LINEAMIENTOS", sub: "Pautas Prudentes Dpto.",
        x: 0.72, z: -0.52, col: 0x4c1d3d, lblY: 0.62, prop: "compass"
      }
    ];

    axes.forEach((ax) => {
      const ped = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.21, 0.08, 28),
        engine.marbleMat(0xf8f6f0, 0.35)
      );
      ped.position.set(ax.x, -0.90, ax.z);
      targetGroup.add(ped);

      const figOE = engine.createClassicalFigure({
        scale: 0.56,
        pose: "reaching",
        togaColor: ax.col
      });
      figOE.position.set(ax.x, -0.86, ax.z);
      figOE.rotation.y = Math.atan2(-ax.x, -0.14 - ax.z);
      targetGroup.add(figOE);

      // Atributo simbólico junto a cada figura
      if (ax.prop === "scroll") {
        const scroll = new THREE.Mesh(
          new THREE.CylinderGeometry(0.032, 0.032, 0.22, 16),
          engine.marbleMat(0xfef9e7)
        );
        scroll.rotation.z = Math.PI / 3;
        scroll.position.set(ax.x + 0.14, -0.32, ax.z - 0.10);
        targetGroup.add(scroll);
      } else if (ax.prop === "orb") {
        const heartOrb = new THREE.Mesh(
          new THREE.SphereGeometry(0.065, 16, 16),
          engine.glassMat(0x10b981, { opacity: 0.90 })
        );
        heartOrb.position.set(ax.x - 0.14, -0.28, ax.z - 0.10);
        targetGroup.add(heartOrb);
      } else if (ax.prop === "gears") {
        const twinRing = engine.createBrassArmillaryRing(0.085, 0.012);
        twinRing.position.set(ax.x + 0.14, -0.26, ax.z + 0.10);
        targetGroup.add(twinRing);
      } else if (ax.prop === "compass") {
        const prism = new THREE.Mesh(
          new THREE.OctahedronGeometry(0.075, 0),
          engine.glassMat(0xa855f7, { opacity: 0.92 })
        );
        prism.position.set(ax.x - 0.14, -0.26, ax.z + 0.10);
        targetGroup.add(prism);
      }

      // Etiqueta nítida por cada Objetivo Específico
      const lblAx = engine.createLabelSprite(ax.title, ax.sub, "#0f2d59", false, { x: 0.72 });
      lblAx.position.set(ax.x, ax.lblY, ax.z);
      targetGroup.add(lblAx);

      // Haz dorado convergente desde cada Objetivo Específico hacia el Objetivo General
      const beamCurve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(ax.x * 0.80, -0.30, ax.z * 0.80),
        new THREE.Vector3(ax.x * 0.35, 0.18, ax.z * 0.35),
        new THREE.Vector3(0, 0.28, -0.14)
      );
      const beamMesh = new THREE.Mesh(
        new THREE.TubeGeometry(beamCurve, 18, 0.005, 8, false),
        engine.goldMat(0xffd700)
      );
      targetGroup.add(beamMesh);
    });

    // Placa museográfica frontal
    const frontPlaque = engine.createEngravedPlaque(
      1.10,
      0.23,
      "TABLA 1 • CONSISTENCIA DE OBJETIVOS",
      "1 Objetivo General + 4 Objetivos Específicos",
      ["NORMATIVO • CULTURAL • GOBERNANZA • PROPOSITIVO"],
      { theme: "dark" }
    );
    frontPlaque.position.set(0, -0.90, 0.96);
    frontPlaque.rotation.x = -0.28;
    targetGroup.add(frontPlaque);

    g.add(targetGroup);
    engine.anim11_group = targetGroup;
  },

  animate(engine, t) {
    if (engine.anim11_group) {
      engine.anim11_group.rotation.y = Math.sin(t * 0.35) * 0.10;
    }
    if (engine.anim11_core) {
      engine.anim11_core.rotation.y = t * 0.8;
    }
    if (engine.anim11_halo) {
      engine.anim11_halo.rotation.x = t * 0.5;
      engine.anim11_halo.rotation.y = t * 0.35;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 12. LOS 7 SUBSISTEMAS DE RRHH: Estructura Arquitectónica Minimalista (Francisco Longo)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_12"] = {
  build(engine, g) {
    // Basamento monumental estándar (superficie superior en y = -1.0385)
    engine.createMuseumPlinth(g, 1.50, 0.22, -1.22);

    // Chasis mecanizado descansando al ras sobre la tarima de mármol
    const chassis = engine.createMachinedChassis(2.40, 0.10, 0.72, { color: 0x1e293b });
    chassis.position.y = -0.99;
    g.add(chassis);

    const plaqueMaster = engine.createEngravedPlaque(
      1.10,
      0.22,
      "MODELO SISTÉMICO DE RRHH (LONGO)",
      "Francisco Longo (2006) • 5 Subsistemas Focalizados en TFG",
      ["RENDIMIENTO 360°", "DESARROLLO ART. 76", "EMPLEO Y RELACIONES"],
      { theme: "dark" }
    );
    plaqueMaster.position.set(0, -0.90, 0.42);
    plaqueMaster.rotation.x = -0.18;
    g.add(plaqueMaster);

    // Posición vertical calibrada para que los 4 collarines de latón (-0.8825) apoyen sobre el chasis (-0.926)
    const longoGroup = new THREE.Group();
    longoGroup.position.set(0, -0.04, 0);

    const fullW = 2.34;
    const colY = 0.0;
    const colH = 0.82;
    const panelDepth = 0.024;

    const frostedGlass = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.12,
      metalness: 0.05,
      transparent: true,
      opacity: 0.88
    });

    const edgeLineMat = new THREE.LineBasicMaterial({
      color: 0xc5a059,
      transparent: true,
      opacity: 0.45
    });

    const createArchPanel = (w, h, d, x, y, z = 0, mat = frostedGlass) => {
      const panelGroup = new THREE.Group();
      panelGroup.position.set(x, y, z);

      const geo = new THREE.BoxGeometry(w, h, d);
      const mesh = new THREE.Mesh(geo, mat);
      panelGroup.add(mesh);

      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo), edgeLineMat);
      panelGroup.add(edges);

      return panelGroup;
    };

    [-0.85, -0.28, 0.28, 0.85].forEach(sx => {
      const pinRod = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.012, 0.33, 16),
        engine.brassMat(0xd4af37)
      );
      pinRod.position.set(sx, -0.715, 0);
      longoGroup.add(pinRod);

      const pinCollar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.038, 0.048, 0.025, 16),
        engine.brassMat(0xffd700)
      );
      pinCollar.position.set(sx, -0.87, 0);
      longoGroup.add(pinCollar);
    });

    const baseY = -0.48;
    const basePanel = createArchPanel(fullW, 0.14, panelDepth * 2, 0, baseY, 0);
    longoGroup.add(basePanel);

    const labelBase = engine.createLabelSprite(
      "7. RELACIONES HUMANAS Y SOCIALES",
      "Clima Laboral • Diálogo Gremial (CCT) • Políticas Sociales",
      "#0a2540",
      false,
      { x: 1.05, y: 0.19 }
    );
    labelBase.position.set(0, baseY, panelDepth + 0.03);
    longoGroup.add(labelBase);

    const colW = 0.48;
    const colX = [-0.85, -0.28, 0.28, 0.85];

    // Columna 1: Organización del Trabajo
    const pOrg = createArchPanel(colW, colH, panelDepth, colX[0], colY);
    longoGroup.add(pOrg);

    const labelOrg = engine.createLabelSprite(
      "ORGANIZACIÓN DEL TRABAJO",
      "Diseño de Puestos • Perfiles de Competencia",
      "#0369a1",
      false,
      { x: 0.54, y: 0.18 }
    );
    labelOrg.position.set(colX[0], colY, panelDepth + 0.03);
    longoGroup.add(labelOrg);

    // Columna 2: Gestión del Empleo
    const pEmp = createArchPanel(colW, colH, panelDepth, colX[1], colY);
    longoGroup.add(pEmp);

    const labelEmp = engine.createLabelSprite(
      "GESTIÓN DEL EMPLEO",
      "Incorporación • Movilidad • Desvinculación",
      "#1d4ed8",
      false,
      { x: 0.54, y: 0.18 }
    );
    labelEmp.position.set(colX[1], colY, panelDepth + 0.03);
    longoGroup.add(labelEmp);

    // Columna 3: Gestión del Rendimiento (EJE 360° MINIMALISTA: ANILLO Y GEMA LIMPIOS SIN COLISIONES)
    const pRend = createArchPanel(colW, colH, panelDepth, colX[2], colY);
    longoGroup.add(pRend);

    const ring360 = engine.createBrassArmillaryRing(0.18, 0.006);
    ring360.position.set(colX[2], colY + 0.16, panelDepth + 0.05);
    longoGroup.add(ring360);
    engine.anim12_ring = ring360;

    const gemCore = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.08, 0),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.4,
        roughness: 0.1,
        metalness: 0.2,
        transparent: true,
        opacity: 0.95
      })
    );
    gemCore.position.set(colX[2], colY + 0.16, panelDepth + 0.05);
    longoGroup.add(gemCore);
    engine.anim12_gem = gemCore;

    const labelRend = engine.createLabelSprite(
      "GESTIÓN DEL RENDIMIENTO",
      "Planificación y Evaluación Formativa 360°",
      "#b45309",
      false,
      { x: 0.56, y: 0.20 }
    );
    labelRend.position.set(colX[2], colY - 0.18, panelDepth + 0.03);
    longoGroup.add(labelRend);

    // Columna 4: Compensación y Desarrollo
    const pComp = createArchPanel(colW, colH * 0.46, panelDepth, colX[3], colY + colH * 0.27);
    longoGroup.add(pComp);

    const labelComp = engine.createLabelSprite(
      "COMPENSACIÓN",
      "Retribución Monetaria y No Monetaria",
      "#059669",
      false,
      { x: 0.52, y: 0.16 }
    );
    labelComp.position.set(colX[3], colY + colH * 0.27, panelDepth + 0.03);
    longoGroup.add(labelComp);

    const pDes = createArchPanel(colW, colH * 0.46, panelDepth, colX[3], colY - colH * 0.27);
    longoGroup.add(pDes);

    const labelDes = engine.createLabelSprite(
      "DESARROLLO (ART. 76)",
      "Carrera • Capacitación y Aprendizaje",
      "#7c3aed",
      false,
      { x: 0.52, y: 0.16 }
    );
    labelDes.position.set(colX[3], colY - colH * 0.27, panelDepth + 0.03);
    longoGroup.add(labelDes);

    // Dintel Superior: Planificación
    const dintelY = 0.52;
    const dintelPanel = createArchPanel(fullW, 0.14, panelDepth * 2, 0, dintelY, 0);
    longoGroup.add(dintelPanel);

    const labelPlan = engine.createLabelSprite(
      "PLANIFICACIÓN DE RECURSOS HUMANOS",
      "Estimación de Necesidades y Escenarios Cuanti/Cualitativos",
      "#0a2540",
      false,
      { x: 1.05, y: 0.19 }
    );
    labelPlan.position.set(0, dintelY, panelDepth + 0.03);
    longoGroup.add(labelPlan);

    // Cúspide: Estrategia Institucional
    const stratY = 0.88;
    const labelStrat = engine.createLabelSprite(
      "ESTRATEGIA INSTITUCIONAL",
      "Misión • Visión • Mandato Universitario",
      "#b91c1c",
      false,
      { x: 0.76, y: 0.19 }
    );
    labelStrat.position.set(0, stratY, panelDepth + 0.03);
    longoGroup.add(labelStrat);

    const arrowLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, stratY - 0.09, panelDepth),
        new THREE.Vector3(0, dintelY + 0.08, panelDepth)
      ]),
      new THREE.LineBasicMaterial({ color: 0x003399, linewidth: 2 })
    );
    longoGroup.add(arrowLine);

    const chevron = new THREE.Mesh(
      new THREE.ConeGeometry(0.024, 0.05, 12),
      new THREE.MeshBasicMaterial({ color: 0x003399 })
    );
    chevron.rotation.x = Math.PI;
    chevron.position.set(0, dintelY + 0.09, panelDepth);
    longoGroup.add(chevron);

    // Flujos sistémicos sutiles
    const flows = [
      { from: new THREE.Vector3(colX[0], dintelY - 0.07, panelDepth), to: new THREE.Vector3(colX[0], colY + colH / 2, panelDepth) },
      { from: new THREE.Vector3(colX[1], dintelY - 0.07, panelDepth), to: new THREE.Vector3(colX[1], colY + colH / 2, panelDepth) },
      { from: new THREE.Vector3(colX[2], dintelY - 0.07, panelDepth), to: new THREE.Vector3(colX[2], colY + colH / 2, panelDepth) },
      { from: new THREE.Vector3(colX[3], dintelY - 0.07, panelDepth), to: new THREE.Vector3(colX[3], colY + colH / 2, panelDepth) },
      { from: new THREE.Vector3(colX[0] + colW / 2, colY, panelDepth), to: new THREE.Vector3(colX[1] - colW / 2, colY, panelDepth) },
      { from: new THREE.Vector3(colX[1] + colW / 2, colY, panelDepth), to: new THREE.Vector3(colX[2] - colW / 2, colY, panelDepth) },
      { from: new THREE.Vector3(colX[2] + colW / 2, colY + colH * 0.27, panelDepth), to: new THREE.Vector3(colX[3] - colW / 2, colY + colH * 0.27, panelDepth) },
      { from: new THREE.Vector3(colX[2] + colW / 2, colY - colH * 0.27, panelDepth), to: new THREE.Vector3(colX[3] - colW / 2, colY - colH * 0.27, panelDepth) },
      { from: new THREE.Vector3(colX[0], baseY + 0.07, panelDepth), to: new THREE.Vector3(colX[0], colY - colH / 2, panelDepth) },
      { from: new THREE.Vector3(colX[1], baseY + 0.07, panelDepth), to: new THREE.Vector3(colX[1], colY - colH / 2, panelDepth) },
      { from: new THREE.Vector3(colX[2], baseY + 0.07, panelDepth), to: new THREE.Vector3(colX[2], colY - colH / 2, panelDepth) },
      { from: new THREE.Vector3(colX[3], baseY + 0.07, panelDepth), to: new THREE.Vector3(colX[3], colY - colH / 2, panelDepth) }
    ];

    engine.anim12_flowPulses = [];
    flows.forEach(fl => {
      const lineGeo = new THREE.BufferGeometry().setFromPoints([fl.from, fl.to]);
      const lineMat = new THREE.LineBasicMaterial({ color: 0xc5a059, transparent: true, opacity: 0.35 });
      const line = new THREE.Line(lineGeo, lineMat);
      longoGroup.add(line);

      const pulse = new THREE.Mesh(
        new THREE.SphereGeometry(0.009, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
      );
      longoGroup.add(pulse);
      engine.anim12_flowPulses.push({ pulse, from: fl.from, to: fl.to });
    });

    const mainTitle = engine.createLabelSprite(
      "7 SUBSISTEMAS DE RECURSOS HUMANOS",
      "Francisco Longo (2006) • Marco Teórico Canónico de Empleo Público",
      "#0a2540",
      true,
      { x: 1.80, y: 0.26 }
    );
    mainTitle.position.set(0, 1.20, 0.08);
    longoGroup.add(mainTitle);

    g.add(longoGroup);
    engine.anim12_group = longoGroup;
  },

  animate(engine, t) {
    if (engine.anim12_gem) {
      engine.anim12_gem.rotation.y = t * 0.7;
      engine.anim12_gem.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
    if (engine.anim12_ring) {
      engine.anim12_ring.rotation.x = t * 0.5;
      engine.anim12_ring.rotation.y = t * 0.35;
    }
    if (engine.anim12_flowPulses) {
      engine.anim12_flowPulses.forEach((item, idx) => {
        const prog = (t * 0.6 + idx * 0.08) % 1.0;
        item.pulse.position.lerpVectors(item.from, item.to, prog);
      });
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 13. SUBSISTEMAS CLAVE: Mecanismo de Engranajes Sistémicos de RRHH
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_13"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const chassis = engine.createMachinedChassis(1.50, 0.10, 1.30, { color: 0x2e1204 });
    chassis.position.y = -0.92;
    g.add(chassis);

    const gearGroup = new THREE.Group();
    gearGroup.position.set(0, -0.1, 0);

    const createGearMesh = (teeth, outerR, innerR, thickness, mat) => {
      const shape = new THREE.Shape();
      for (let i = 0; i < teeth; i++) {
        const a1 = (i / teeth) * Math.PI * 2;
        const a2 = ((i + 0.35) / teeth) * Math.PI * 2;
        const a3 = ((i + 0.65) / teeth) * Math.PI * 2;
        const a4 = ((i + 1) / teeth) * Math.PI * 2;

        const x1 = Math.cos(a1) * innerR, y1 = Math.sin(a1) * innerR;
        const x2 = Math.cos(a2) * outerR, y2 = Math.sin(a2) * outerR;
        const x3 = Math.cos(a3) * outerR, y3 = Math.sin(a3) * outerR;
        const x4 = Math.cos(a4) * innerR, y4 = Math.sin(a4) * innerR;

        if (i === 0) shape.moveTo(x1, y1);
        else shape.lineTo(x1, y1);
        shape.lineTo(x2, y2);
        shape.lineTo(x3, y3);
        shape.lineTo(x4, y4);
      }
      shape.closePath();

      const hole = new THREE.Path();
      hole.absarc(0, 0, innerR * 0.38, 0, Math.PI * 2, true);
      shape.holes.push(hole);

      const gearMesh = new THREE.Mesh(
        new THREE.ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.010 }),
        mat
      );

      // Buje central cilíndrico torneado en latón acoplado al engranaje (rotación unificada sin colisiones)
      const hub = new THREE.Mesh(
        new THREE.CylinderGeometry(innerR * 0.36, innerR * 0.36, thickness * 1.3, 20),
        engine.brassMat(0xffd700)
      );
      hub.rotation.x = Math.PI / 2;
      hub.position.z = thickness * 0.5;
      gearMesh.add(hub);

      return gearMesh;
    };

    // Engranaje 1: GESTIÓN DEL RENDIMIENTO
    const gear1 = createGearMesh(16, 0.45, 0.38, 0.06, engine.brassMat(0xffd700));
    gear1.position.set(-0.38, 0.35, 0);
    gearGroup.add(gear1);
    engine.anim13_g1 = gear1;

    const labelG1 = engine.createLabelSprite("1. RENDIMIENTO", "Evaluación Formativa", "#0f2d59", false);
    labelG1.position.set(-0.38, 0.88, 0);
    gearGroup.add(labelG1);

    // Engranaje 2: GESTIÓN DEL DESARROLLO
    const gear2 = createGearMesh(20, 0.55, 0.46, 0.06, engine.brassMat(0xd4af37));
    gear2.position.set(0.42, -0.05, 0);
    gearGroup.add(gear2);
    engine.anim13_g2 = gear2;

    const labelG2 = engine.createLabelSprite("2. DESARROLLO", "Capacitación Docente (Art. 76)", "#0f2d59", false);
    labelG2.position.set(0.42, 0.58, 0);
    gearGroup.add(labelG2);

    // Engranaje 3: RELACIONES LABORALES
    const gear3 = createGearMesh(14, 0.40, 0.33, 0.06, engine.graniteMat(0x334155));
    gear3.position.set(-0.38, -0.45, 0);
    gearGroup.add(gear3);
    engine.anim13_g3 = gear3;

    const labelG3 = engine.createLabelSprite("3. RELACIONES LABORALES", "Diálogo Gremial (CCT Dec. 1246/15)", "#0f2d59", false);
    labelG3.position.set(-0.38, -0.92, 0);
    gearGroup.add(labelG3);

    const plaqueMaster = engine.createEngravedPlaque(
      1.05,
      0.22,
      "MECANISMO DE ENGRANAJES SISTÉMICOS",
      "Interdependencia Operativa del Empleo Público",
      ["RENDIMIENTO ↔ CAPACITACIÓN ↔ DIÁLOGO GREMIAL"],
      { theme: "dark" }
    );
    plaqueMaster.position.set(0, -0.84, 0.68);
    g.add(plaqueMaster);

    g.add(gearGroup);
  },

  animate(engine, t) {
    if (engine.anim13_g1) engine.anim13_g1.rotation.z = t * 0.8;
    if (engine.anim13_g2) engine.anim13_g2.rotation.z = -t * 0.64;
    if (engine.anim13_g3) engine.anim13_g3.rotation.z = -t * 0.91;
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 14. DISPOSITIVO 360°: Escáner Radar Circular (Mitigación de Sesgos)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_14"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const chassis = engine.createMachinedChassis(1.45, 0.10, 1.45, { color: 0x1e293b });
    chassis.position.y = -0.92;
    g.add(chassis);

    const radarGroup = new THREE.Group();
    radarGroup.position.set(0, -0.1, 0);

    // Plato azimutal graduado horizontal en la base del radar (R = 0.80)
    const azimuthDial = engine.createGraduatedDial(0.80, {
      divisions: 48,
      title: "AZIMUT",
      sub: "360°",
      theme: "dark"
    });
    azimuthDial.rotation.x = 0;
    azimuthDial.position.y = -0.42;
    radarGroup.add(azimuthDial);

    // Pedestal central esbelto
    const centerCore = new THREE.Mesh(
      new THREE.CylinderGeometry(0.20, 0.24, 0.38, 32),
      engine.marbleMat(0xfdfbf7)
    );
    centerCore.position.y = -0.23;
    radarGroup.add(centerCore);

    // Gema luminosa central elevada nítidamente sobre el pedestal (sin choques)
    const coreGem = new THREE.Mesh(
      new THREE.SphereGeometry(0.14, 24, 24),
      engine.glassMat(0xffd700, { transmission: 0.9 })
    );
    coreGem.position.y = 0.14;
    radarGroup.add(coreGem);

    // Cartel principal superior elevado sin colisiones
    const labelCenter = engine.createLabelSprite(
      "ACTO EDUCATIVO",
      "Triangulación Objetiva 360°",
      "#0f2d59",
      true,
      { x: 1.15, y: 0.25 }
    );
    labelCenter.position.set(0, 1.35, 0);
    g.add(labelCenter);

    // 4 Proyectores dispuestos a radio 1.15 (con holgura y separación del dial)
    const actors = [
      { name: "AUTOEVALUACIÓN", sub: "Reflexión Docente", angle: 0 },
      { name: "COEVALUACIÓN", sub: "Pares de Cátedra", angle: Math.PI / 2 },
      { name: "HETEROEVALUACIÓN", sub: "Estudiantes", angle: Math.PI },
      { name: "DIRECCIÓN", sub: "Gestión Departamental", angle: (3 * Math.PI) / 2 }
    ];

    engine.anim14_lights = [];
    actors.forEach((act) => {
      const x = Math.cos(act.angle) * 1.15;
      const z = Math.sin(act.angle) * 1.15;

      const spotGroup = new THREE.Group();
      spotGroup.position.set(x, 0.12, z);
      spotGroup.lookAt(0, 0.14, 0);

      const barrel = new THREE.Mesh(
        new THREE.CylinderGeometry(0.065, 0.045, 0.20, 16),
        engine.brassMat(0xd4af37)
      );
      barrel.rotation.x = Math.PI / 2;
      spotGroup.add(barrel);

      const spotLight = new THREE.PointLight(0x38bdf8, 0.8, 1.4);
      spotLight.position.set(0, 0, 0.12);
      spotGroup.add(spotLight);
      engine.anim14_lights.push(spotLight);

      radarGroup.add(spotGroup);

      const coneCurve = new THREE.LineCurve3(new THREE.Vector3(x, 0.12, z), new THREE.Vector3(0, 0.14, 0));
      const ray = new THREE.Mesh(
        new THREE.TubeGeometry(coneCurve, 12, 0.006, 6, false),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.60 })
      );
      radarGroup.add(ray);

      const labelAct = engine.createLabelSprite(
        act.name,
        act.sub,
        "#0f2d59",
        false,
        { x: 0.52, y: 0.15 }
      );
      labelAct.position.set(x * 1.30, 0.52, z * 1.30);
      radarGroup.add(labelAct);
    });

    const plaqueMaster = engine.createEngravedPlaque(
      1.05,
      0.22,
      "ESCÁNER RADAR CIRCULAR 360°",
      "Mitigación de Sesgos por Triangulación de Perspectivas",
      ["AUTOEVALUACIÓN • PARES • ESTUDIANTES • GESTIÓN"],
      { theme: "dark" }
    );
    plaqueMaster.position.set(0, -0.72, 0.78);
    plaqueMaster.rotation.x = -0.15;
    g.add(plaqueMaster);

    g.add(radarGroup);
    engine.anim14_group = radarGroup;
  },

  animate(engine, t) {
    if (engine.anim14_group) {
      engine.anim14_group.rotation.y = t * 0.18;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 15. DISPOSITIVO 360° Y POLIGOBERNANZA: Pirámide de 4 Planos + Red Armilar 360°
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_15"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.56, 0.22, -1.22);

    const chassis = engine.createMachinedChassis(1.56, 0.10, 1.24, { color: 0x1e293b });
    chassis.position.set(0, -0.92, -0.06);
    g.add(chassis);

    // Atril frontal independiente sobre el borde delantero del plinto (100% despejado)
    const plaqueCradle = new THREE.Mesh(
      engine.getRoundedBoxGeo(1.14, 0.13, 0.16, 0.015, 3),
      engine.graniteMat(0x1e293b, 0.54, 0.15)
    );
    plaqueCradle.position.set(0, -0.96, 0.94);
    plaqueCradle.castShadow = true;
    plaqueCradle.receiveShadow = true;
    g.add(plaqueCradle);

    const plaqueMaster = engine.createEngravedPlaque(
      1.18,
      0.24,
      "DISPOSITIVO 360° Y POLIGOBERNANZA",
      "Macro (CS) • Meso (CURZAS) • Micro (10 Nodos) • ADUNC",
      ["4 MIRADAS FORMATIVAS", "PODER COMPARTIDO (MATUS)", "ANONIMATO (OSZLAK)"],
      { theme: "dark" }
    );
    plaqueMaster.position.set(0, -0.87, 1.00);
    plaqueMaster.rotation.x = -0.32;
    g.add(plaqueMaster);

    const poliGroup = new THREE.Group();
    const ivoryMat = engine.marbleMat(0xf7f5ef, 0.44);
    const brassMat = engine.brassMat(0xcfa346);
    const goldMat = engine.goldMat(0xe0ba56);

    // Helper para placa frontal nítida en cada escalón de Poligobernanza
    const makeTierBanner = (w, h, title, subs, accentHex) => {
      const cw = Math.round(w * 1500);
      const ch = Math.round(h * 1500);
      const canvas = document.createElement("canvas");
      canvas.width = cw;
      canvas.height = ch;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "#faf8f3";
      ctx.fillRect(0, 0, cw, ch);
      ctx.fillStyle = accentHex;
      ctx.fillRect(0, 0, cw, Math.max(6, ch * 0.09));
      ctx.fillRect(0, ch - Math.max(5, ch * 0.06), cw, Math.max(5, ch * 0.06));

      const fitAndDraw = (txt, maxSize, minSize, weight, fam, color, yFrac) => {
        let px = maxSize;
        ctx.font = `${weight} ${px}px ${fam}`;
        while (px > minSize && ctx.measureText(txt).width > cw * 0.90) {
          px -= 2;
          ctx.font = `${weight} ${px}px ${fam}`;
        }
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(txt, cw / 2, ch * yFrac);
      };

      fitAndDraw(title, Math.round(ch * 0.40), 22, "800", "'Cinzel', Georgia, serif", accentHex, 0.36);
      fitAndDraw(subs, Math.round(ch * 0.24), 15, "600", "'Inter', sans-serif", "#1e293b", 0.72);

      const tex = new THREE.CanvasTexture(canvas);
      tex.anisotropy = 4;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;

      return new THREE.Mesh(
        new THREE.PlaneGeometry(w, h),
        new THREE.MeshStandardMaterial({ map: tex, roughness: 0.42, metalness: 0.04 })
      );
    };

    // 1. Tres Planos Decisionales de Poligobernanza (Cao & Blutman; Aguilar Villanueva)
    const govTiers = [
      {
        w: 1.44, h: 0.16, d: 1.04, y: -0.79, col: 0x1e3a8a, accent: "#1e3a8a",
        title: "1. NIVEL MACRO • CS Y RECTORADO UNCo",
        subs: "Estatuto UNCo (Ord. 0988/25) • Carrera Docente"
      },
      {
        w: 1.18, h: 0.16, d: 0.84, y: -0.61, col: 0x0f766e, accent: "#0f766e",
        title: "2. NIVEL MESO • CD CURZAS Y DPTO.",
        subs: "Gestión Académica • Capacitación (Art. 76)"
      },
      {
        w: 0.92, h: 0.16, d: 0.64, y: -0.43, col: 0xb45309, accent: "#92400e",
        title: "3. NIVEL MICRO • 10 NODOS HÍBRIDOS",
        subs: "Res. 196/22 • Tutoría Territorial Río Negro"
      }
    ];

    govTiers.forEach((tier) => {
      const mat = new THREE.MeshStandardMaterial({
        color: tier.col,
        roughness: 0.50,
        metalness: 0.12,
        envMapIntensity: 0.80
      });
      const body = new THREE.Mesh(engine.getRoundedBoxGeo(tier.w, tier.h, tier.d, 0.014, 3), mat);
      body.position.set(0, tier.y, -0.10);
      body.castShadow = true;
      body.receiveShadow = true;
      poliGroup.add(body);

      const inlayD = tier.d * 1.02;
      const inlayH = tier.h * 0.72;
      const inlay = new THREE.Mesh(
        engine.getRoundedBoxGeo(tier.w * 0.92, inlayH, inlayD, 0.008, 2),
        ivoryMat
      );
      inlay.position.set(0, tier.y, -0.10);
      poliGroup.add(inlay);

      const banner = makeTierBanner(tier.w * 0.88, inlayH * 0.90, tier.title, tier.subs, tier.accent);
      banner.position.set(0, tier.y, -0.10 + inlayD / 2 + 0.004);
      poliGroup.add(banner);
    });

    // Anillo Transversal de Concertación Paritaria (ADUNC • Poder Compartido de Matus)
    const parityRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.86, 0.015, 18, 72),
      goldMat
    );
    parityRing.rotation.x = Math.PI / 2 - 0.12;
    parityRing.position.set(0, -0.56, -0.10);
    poliGroup.add(parityRing);
    engine.anim15_parityRing = parityRing;

    // Estación Paritaria lateral (ADUNC)
    const aduncPost = new THREE.Mesh(
      new THREE.CylinderGeometry(0.030, 0.036, 0.42, 20),
      brassMat
    );
    aduncPost.position.set(0.86, -0.58, 0.08);
    poliGroup.add(aduncPost);

    const aduncOrb = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.058, 1),
      engine.glassMat(0xeab308, { opacity: 0.94, roughness: 0.06 })
    );
    aduncOrb.position.set(0.86, -0.34, 0.08);
    poliGroup.add(aduncOrb);

    const aduncLabel = engine.createLabelSprite(
      "4. PARITARIA ADUNC",
      "Poder Compartido (Matus)",
      "#92400e",
      false,
      { x: 0.62, y: 0.18 }
    );
    aduncLabel.position.set(1.06, -0.14, 0.12);
    poliGroup.add(aduncLabel);

    // 2. Pedestal central elevado y Núcleo Plataforma 360° (Oszlak: Moodle/SIU anónimo)
    const stemPts = [
      new THREE.Vector2(0, -0.35),
      new THREE.Vector2(0.18, -0.35),
      new THREE.Vector2(0.075, -0.20),
      new THREE.Vector2(0.060, 0.02),
      new THREE.Vector2(0.12, 0.08),
      new THREE.Vector2(0, 0.08)
    ];
    const centerStem = new THREE.Mesh(new THREE.LatheGeometry(stemPts, 40), ivoryMat);
    centerStem.position.z = -0.10;
    centerStem.castShadow = true;
    poliGroup.add(centerStem);

    const corePos = new THREE.Vector3(0, 0.32, -0.10);

    const coreCrystal = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.165, 1),
      engine.glassMat(0x0284c7, { opacity: 0.88, roughness: 0.06, transmission: 0.65 })
    );
    coreCrystal.position.copy(corePos);
    poliGroup.add(coreCrystal);
    engine.anim15_core = coreCrystal;

    const innerCoreGold = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.082, 0),
      goldMat
    );
    innerCoreGold.position.copy(corePos);
    poliGroup.add(innerCoreGold);

    const coreLight = new THREE.PointLight(0x38bdf8, 1.5, 2.2);
    coreLight.position.copy(corePos);
    poliGroup.add(coreLight);

    const ring1 = engine.createBrassArmillaryRing(0.26, 0.011);
    ring1.position.copy(corePos);
    poliGroup.add(ring1);
    engine.anim15_ring1 = ring1;

    const ring2 = engine.createBrassArmillaryRing(0.34, 0.009);
    ring2.position.copy(corePos);
    ring2.rotation.x = Math.PI / 3;
    poliGroup.add(ring2);
    engine.anim15_ring2 = ring2;

    // 3. Cuatro Miradas del Dispositivo 360° en constelación abierta (sin colisiones entre carteles)
    const actors360 = [
      {
        title: "AUTOEVALUACIÓN", sub: "Reflexión Docente",
        pos: [-0.70, 0.22, 0.34], labelY: 0.48, hex: 0x0284c7, color: "#0369a1"
      },
      {
        title: "COEVALUACIÓN PARES", sub: "O Pares Horizontales",
        pos: [0.70, 0.22, 0.34], labelY: 0.48, hex: 0x10b981, color: "#047857"
      },
      {
        title: "ESTUDIANTES", sub: "Sede y 10 Nodos",
        pos: [-0.66, 0.54, -0.44], labelY: 0.82, hex: 0xf59e0b, color: "#b45309"
      },
      {
        title: "DIRECCIÓN DPTO.", sub: "Articulación Art. 76",
        pos: [0.66, 0.54, -0.44], labelY: 0.82, hex: 0x7c3aed, color: "#6d28d9"
      }
    ];

    actors360.forEach((act) => {
      const pVec = new THREE.Vector3(act.pos[0], act.pos[1], act.pos[2]);

      const beamCurve = new THREE.LineCurve3(corePos, pVec);
      const beam = new THREE.Mesh(
        new THREE.TubeGeometry(beamCurve, 12, 0.008, 8, false),
        brassMat
      );
      poliGroup.add(beam);

      const orb = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.068, 1),
        engine.glassMat(act.hex, { opacity: 0.92, roughness: 0.08 })
      );
      orb.position.copy(pVec);
      poliGroup.add(orb);

      const orbHalo = engine.createBrassArmillaryRing(0.095, 0.005);
      orbHalo.position.copy(pVec);
      orbHalo.rotation.x = Math.PI / 2;
      poliGroup.add(orbHalo);

      const actLabel = engine.createLabelSprite(
        act.title,
        act.sub,
        act.color,
        false,
        { x: 0.62, y: 0.18 }
      );
      actLabel.position.set(act.pos[0], act.labelY, act.pos[2]);
      poliGroup.add(actLabel);
    });

    const labelCore = engine.createLabelSprite(
      "MODELO 360° Y POLIGOBERNANZA",
      "4 Miradas • 4 Planos • Estado Plataforma (Oszlak)",
      "#0f2d59",
      true
    );
    labelCore.position.set(0, 1.32, 0);
    poliGroup.add(labelCore);

    g.add(poliGroup);
  },

  animate(engine, t) {
    if (engine.anim15_core) {
      engine.anim15_core.rotation.y = t * 0.45;
    }
    if (engine.anim15_ring1) {
      engine.anim15_ring1.rotation.x = t * 0.55;
      engine.anim15_ring1.rotation.y = t * 0.35;
    }
    if (engine.anim15_ring2) {
      engine.anim15_ring2.rotation.y = -t * 0.45;
      engine.anim15_ring2.rotation.z = t * 0.30;
    }
    if (engine.anim15_parityRing) {
      engine.anim15_parityRing.rotation.z = t * 0.18;
    }
  }
};
