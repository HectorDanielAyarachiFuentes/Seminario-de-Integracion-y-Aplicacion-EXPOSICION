/**
 * =============================================================================
 * OBJETOS 3D — BLOQUE II: ESCULTURAS 6 A 10
 * Presentación de Tesina • CURZAS - UNCo
 * =============================================================================
 * Representación visual concreta y pertinente de la Sección 2 (Tiempo 1):
 * 6. anim_06: Maqueta Geodésica de la República Argentina y Río Negro (Conservada Oficial)
 * 7. anim_07: Red de Aulas Híbridas y Terminales Conectadas (Res. CD-CURZA N° 196/2022)
 * 8. anim_08: Prisma de Ruptura y Refracción Epistemológica (Wainerman & Sautu, 2011)
 * 9. anim_09: Balanza Dual de Tensión Normativa (Art. 75 Cesantía vs. Art. 76 Capacitación)
 * 10. anim_10: Pentágono Orbital de Factibilidad (Núcleo Pregunta y 5 Sellos de Viabilidad)
 */

window.Presentation3D_Objects = window.Presentation3D_Objects || {};

// ──────────────────────────────────────────────────────────────────────────
// 6. EL CURZAS EN EL TERRITORIO: Maqueta Geodésica de Argentina y Río Negro
//    (Mapas continentales, Malvinas, Antártida y alto relieve de Río Negro)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_06"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.95);

    const buildShapeFromPts = (pts) => {
      const s = new THREE.Shape();
      pts.forEach(([x, z], idx) => {
        if (idx === 0) s.moveTo(x, -z);
        else s.lineTo(x, -z);
      });
      s.closePath();
      return s;
    };

    // 1. Mar Argentino / Océano Atlántico Sur (elevado sobre la meseta de mármol y = -1.0385)
    const oceanPlate = new THREE.Mesh(
      new THREE.CylinderGeometry(1.88, 1.91, 0.024, 64),
      engine.graniteMat(0x071a33, 0.25, 0.45)
    );
    oceanPlate.position.y = -1.026;
    oceanPlate.receiveShadow = true;
    g.add(oceanPlate);

    const oceanRim = new THREE.Mesh(
      new THREE.TorusGeometry(1.89, 0.022, 16, 64),
      engine.brassMat(0xd4af37)
    );
    oceanRim.rotation.x = Math.PI / 2;
    oceanRim.position.y = -1.015;
    g.add(oceanRim);

    const seaWater = new THREE.Mesh(
      new THREE.CylinderGeometry(1.86, 1.86, 0.016, 64),
      new THREE.MeshStandardMaterial({
        color: 0x0369a1,
        emissive: 0x072642,
        emissiveIntensity: 0.35,
        roughness: 0.16,
        metalness: 0.18,
        transparent: true,
        opacity: 0.86
      })
    );
    seaWater.position.y = -1.012;
    seaWater.receiveShadow = true;
    g.add(seaWater);

    // Cartela cartográfica técnica en latón grabado con pie anclado limpiamente dentro del plato oceánico
    const cartoucheGroup = new THREE.Group();
    cartoucheGroup.position.set(-1.00, -0.71, 0.86);
    cartoucheGroup.rotation.y = Math.PI * 0.12;

    const cartouche = engine.createEngravedPlaque(
      0.92,
      0.38,
      "PROVINCIA DE RÍO NEGRO",
      "Sede Viedma • 10 Nodos (Res. CD 135/22)",
      ["CURZAS • UNCo", "Docencia Híbrida • Res. 196/22"],
      { theme: "dark" }
    );
    cartouche.rotation.x = -Math.PI * 0.16;
    cartoucheGroup.add(cartouche);

    const plaqueFoot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.020, 0.028, 0.29, 16),
      engine.brassMat(0xd4af37)
    );
    plaqueFoot.position.set(0, -0.16, -0.02);
    cartoucheGroup.add(plaqueFoot);

    const plaqueBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.085, 0.105, 0.022, 24),
      engine.brassMat(0xd4af37)
    );
    plaqueBase.position.set(0, -0.295, -0.02);
    cartoucheGroup.add(plaqueBase);
    g.add(cartoucheGroup);

    // Rosa de los vientos / Dial de orientación geodésica apoyado plano sobre la plataforma
    const compassRose = engine.createGraduatedDial(0.21, {
      title: "N",
      sub: "SUR",
      divisions: 36,
      theme: "dark"
    });
    compassRose.position.set(-1.18, -0.986, -0.80);
    g.add(compassRose);

    // 1.B. Territorio Continental Argentino + Tierra del Fuego (Coordenadas Geodésicas 50m)
    const argPts = [[0.626, -0.6913], [0.6044, -0.6561], [0.5904, -0.5654], [0.574, -0.539], [0.5705, -0.4475], [0.5513, -0.4343], [0.5392, -0.3859], [0.5484, -0.3393], [0.5384, -0.3296], [0.5539, -0.2962], [0.6302, -0.2363], [0.6119, -0.1888], [0.6308, -0.1536], [0.6557, -0.1457], [0.6512, -0.0955], [0.5867, 0.0039], [0.5412, 0.0347], [0.3377, 0.0831], [0.2538, 0.0664], [0.2559, 0.1051], [0.2727, 0.1166], [0.2638, 0.1174], [0.2664, 0.157], [0.2475, 0.1896], [0.2568, 0.231], [0.2471, 0.2503], [0.1652, 0.2741], [0.082, 0.2371], [0.0687, 0.2433], [0.0754, 0.3568], [0.1127, 0.3858], [0.1335, 0.3823], [0.125, 0.3674], [0.1537, 0.3577], [0.1646, 0.4096], [0.1374, 0.4254], [0.1082, 0.3929], [0.0772, 0.407], [0.1194, 0.4334], [0.0603, 0.4862], [0.0588, 0.5557], [0.0367, 0.5821], [0.038, 0.6129], [0.0037, 0.6094], [-0.0421, 0.6349], [-0.0799, 0.7044], [-0.0729, 0.7387], [-0.0268, 0.7889], [0.0293, 0.8021], [0.0349, 0.8382], [0.0088, 0.861], [0.0333, 0.8707], [-0.0605, 0.9596], [-0.0813, 1.0502], [-0.1005, 1.0608], [-0.1255, 1.03], [-0.1239, 1.0467], [-0.1417, 1.052], [-0.1092, 1.0661], [-0.1372, 1.0854], [-0.1566, 1.1426], [-0.148, 1.1391], [-0.1369, 1.1884], [-0.1586, 1.191], [-0.1306, 1.1998], [-0.0967, 1.2553], [-0.1828, 1.2289], [-0.2922, 1.2245], [-0.3203, 1.1875], [-0.325, 1.1118], [-0.3696, 1.1171], [-0.396, 1.0626], [-0.4066, 1.015], [-0.4027, 0.9913], [-0.3845, 0.9904], [-0.3812, 0.9649], [-0.3592, 0.9455], [-0.3619, 0.9218], [-0.346, 0.8962], [-0.3629, 0.8654], [-0.3559, 0.8311], [-0.3329, 0.8056], [-0.338, 0.773], [-0.3251, 0.7572], [-0.3403, 0.7141], [-0.3268, 0.6956], [-0.3373, 0.663], [-0.3155, 0.6322], [-0.3635, 0.5918], [-0.3136, 0.5909], [-0.3089, 0.5733], [-0.3518, 0.5574], [-0.3467, 0.5178], [-0.3662, 0.4668], [-0.3568, 0.4571], [-0.3846, 0.4351], [-0.3883, 0.37], [-0.3664, 0.3524], [-0.3891, 0.2327], [-0.3768, 0.2054], [-0.3832, 0.1403], [-0.3713, 0.1368], [-0.3666, 0.0778], [-0.3318, 0.0488], [-0.3588, -0.0251], [-0.3664, -0.1061], [-0.3593, -0.1342], [-0.3153, -0.1747], [-0.3314, -0.246], [-0.2998, -0.3296], [-0.2857, -0.3366], [-0.2882, -0.4194], [-0.3077, -0.4264], [-0.3049, -0.4546], [-0.3342, -0.525], [-0.3266, -0.5355], [-0.3533, -0.5698], [-0.3532, -0.5918], [-0.3359, -0.6182], [-0.3284, -0.6737], [-0.3043, -0.693], [-0.3227, -0.7678], [-0.2981, -0.8479], [-0.262, -0.891], [-0.2398, -0.9588], [-0.1988, -0.9746], [-0.2216, -1.0186], [-0.2084, -1.0468], [-0.2254, -1.1049], [-0.2091, -1.1401], [-0.2208, -1.1806], [-0.1293, -1.2334], [-0.1038, -1.324], [-0.1196, -1.3398], [-0.0808, -1.3926], [-0.0524, -1.4023], [-0.0414, -1.4296], [-0.0043, -1.4032], [0.0911, -1.3918], [0.114, -1.339], [0.1465, -1.4094], [0.2346, -1.412], [0.3076, -1.3187], [0.3792, -1.258], [0.4702, -1.2281], [0.6451, -1.119], [0.6506, -1.1014], [0.6051, -1.0442], [0.5622, -0.9447], [0.7298, -0.9236], [0.753, -0.9438], [0.7868, -0.9359], [0.8683, -1.0134], [0.8853, -1.097], [0.9222, -1.1022], [0.9419, -1.089], [0.955, -1.0345], [0.9358, -0.9614], [0.8555, -0.9236], [0.7814, -0.8664], [0.7834, -0.8506], [0.768, -0.8514], [0.626, -0.6913]];
    const tdfPts = [[-0.0956, 1.4788], [-0.1072, 1.2852], [-0.0841, 1.323], [-0.0943, 1.3213], [-0.0964, 1.3389], [-0.0787, 1.3433], [-0.0696, 1.3653], [-0.03, 1.4084], [0.0256, 1.4506], [0.08, 1.4638], [0.0656, 1.4841], [0.0134, 1.4946], [-0.0184, 1.4832], [-0.0956, 1.4788]];

    const argExtrudeOpts = {
      depth: 0.048,
      bevelEnabled: true,
      bevelThickness: 0.008,
      bevelSize: 0.006,
      bevelSegments: 2
    };
    const argMat = engine.marbleMat(0xdce6f2, 0.35);
    const argEdgeMat = new THREE.LineBasicMaterial({ color: 0x1e293b, transparent: true, opacity: 0.5 });

    [argPts, tdfPts].forEach((pts) => {
      const geo = new THREE.ExtrudeGeometry(buildShapeFromPts(pts), argExtrudeOpts);
      const mesh = new THREE.Mesh(geo, argMat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.y = -1.010;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo, 24), argEdgeMat));
      g.add(mesh);
    });

    // 1.C. Islas Malvinas (Gran Malvina e Isla Soledad en relieve alabastro con borde dorado sobre el Mar Argentino)
    const malvGranPts = [[0.4005, 1.1517], [0.4122, 1.1541], [0.4304, 1.1427], [0.4404, 1.1504], [0.4669, 1.1453], [0.4728, 1.1389], [0.4818, 1.1478], [0.4263, 1.2168], [0.4011, 1.2193], [0.3882, 1.2397], [0.3645, 1.2448], [0.3441, 1.2282], [0.3603, 1.2142], [0.3738, 1.2142], [0.4025, 1.1913], [0.3996, 1.1849], [0.3819, 1.19], [0.376, 1.1836], [0.4033, 1.1746], [0.3828, 1.1555], [0.3789, 1.1389], [0.4005, 1.1517]];
    const malvSolPts = [[0.5166, 1.1275], [0.5281, 1.135], [0.5497, 1.1338], [0.5532, 1.1402], [0.5504, 1.1466], [0.5416, 1.1466], [0.5419, 1.1541], [0.56, 1.1657], [0.5623, 1.1669], [0.5596, 1.1517], [0.5623, 1.1466], [0.5849, 1.1427], [0.597, 1.1594], [0.5845, 1.1669], [0.5973, 1.1746], [0.5926, 1.1836], [0.524, 1.2129], [0.5249, 1.2333], [0.4824, 1.2232], [0.4914, 1.2423], [0.4699, 1.2461], [0.4644, 1.2601], [0.4549, 1.2512], [0.4462, 1.2384], [0.4468, 1.2307], [0.4562, 1.2168], [0.4541, 1.2104], [0.4801, 1.1874], [0.4963, 1.181], [0.4949, 1.1555], [0.5127, 1.1389], [0.5111, 1.1275], [0.5166, 1.1275]];

    const malvinasGroup = new THREE.Group();
    const malvExtrudeOpts = {
      depth: 0.056,
      bevelEnabled: true,
      bevelThickness: 0.010,
      bevelSize: 0.007,
      bevelSegments: 2
    };
    const malvMat = engine.marbleMat(0xfef9e7, 0.22);
    const malvEdgeMat = new THREE.LineBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.92 });

    [malvGranPts, malvSolPts].forEach((pts) => {
      const geo = new THREE.ExtrudeGeometry(buildShapeFromPts(pts), malvExtrudeOpts);
      const islandMesh = new THREE.Mesh(geo, malvMat);
      islandMesh.rotation.x = -Math.PI / 2;
      islandMesh.position.y = -1.010;
      islandMesh.castShadow = true;
      islandMesh.receiveShadow = true;
      islandMesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo, 16), malvEdgeMat));
      malvinasGroup.add(islandMesh);
    });

    // Plataforma submarina sutil alrededor de Malvinas para resaltarlas sobre el Mar Argentino
    const malvHalo = new THREE.Mesh(
      new THREE.RingGeometry(0.14, 0.165, 36),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35, side: THREE.DoubleSide })
    );
    malvHalo.rotation.x = -Math.PI / 2;
    malvHalo.position.set(0.47, -1.002, 1.19);
    malvinasGroup.add(malvHalo);
    g.add(malvinasGroup);

    // 2. PROVINCIA DE RÍO NEGRO EN ALTO RELIEVE DE LATÓN DORADO (ALINEADA SOBRE NORPATAGONIA)
    const rnPts = [[-0.155, -0.0418], [-0.0822, -0.0128], [0.0019, 0.0224], [0.0713, 0.0541], [0.1345, 0.0831], [0.1821, 0.121], [0.1816, 0.2002], [0.212, 0.2354], [0.2217, 0.2626], [0.1698, 0.2732], [0.1234, 0.2644], [0.0767, 0.2371], [0.0682, 0.2556], [0.0727, 0.2996], [0.0726, 0.348], [-0.3714, 0.348], [-0.379, 0.3084], [-0.3786, 0.2688], [-0.3518, 0.2556], [-0.3235, 0.2354], [-0.2709, 0.1966], [-0.2154, 0.1474], [-0.159, 0.0946], [-0.1351, 0.0796], [-0.1558, 0.018], [-0.155, -0.0418]];
    const rnGeo = new THREE.ExtrudeGeometry(buildShapeFromPts(rnPts), {
      depth: 0.068,
      bevelEnabled: true,
      bevelThickness: 0.012,
      bevelSize: 0.009,
      bevelSegments: 2
    });
    const rnMesh = new THREE.Mesh(rnGeo, engine.brassMat(0xd4af37));
    rnMesh.rotation.x = -Math.PI / 2;
    rnMesh.position.y = -0.960;
    rnMesh.castShadow = true;
    rnMesh.receiveShadow = true;
    rnMesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(rnGeo, 24), new THREE.LineBasicMaterial({ color: 0xfef08a, transparent: true, opacity: 0.55 })));
    g.add(rnMesh);

    // 3. SEDES DEL CURZAS: Viedma y los 10 Nodos Territoriales (Res. CD N° 135/2022)
    engine.sedes06 = [
      { id: "viedma", nombre: "VIEDMA", subtitulo: "Sede Central Académica", tipo: "Sede Cabecera", x: 0.2033, z: 0.2442, isCentral: true, colorGem: 0xffd700 },
      { id: "san_antonio", nombre: "SAO / LAS GRUTAS", subtitulo: "Costa Atlántica / Golfo San Matías", tipo: "Nodo Territorial", x: 0.0773, z: 0.2318, isCentral: false, colorGem: 0x38bdf8 },
      { id: "sierra_grande", nombre: "SIERRA GRANDE", subtitulo: "Costa Atlántica Sur", tipo: "Nodo Territorial", x: 0.0505, z: 0.3137, isCentral: false, colorGem: 0x38bdf8 },
      { id: "conesa", nombre: "GENERAL CONESA", subtitulo: "Valle Conesa / Nexo Vial", tipo: "Nodo Territorial", x: 0.1097, z: 0.1808, isCentral: false, colorGem: 0x38bdf8 },
      { id: "rio_colorado", nombre: "RÍO COLORADO", subtitulo: "Valle del Río Colorado / Noreste", tipo: "Nodo Territorial", x: 0.1338, z: 0.0875, isCentral: false, colorGem: 0x38bdf8 },
      { id: "valcheta", nombre: "VALCHETA", subtitulo: "Portal Línea Sur", tipo: "Nodo Territorial", x: -0.0041, z: 0.2318, isCentral: false, colorGem: 0x38bdf8 },
      { id: "ramos_mexia", nombre: "RAMOS MEXÍA", subtitulo: "Meseta Central / RN 23", tipo: "Nodo Territorial", x: -0.0754, z: 0.2169, isCentral: false, colorGem: 0x38bdf8 },
      { id: "sierra_colorada", nombre: "SIERRA COLORADA", subtitulo: "Centro Geográfico Provincial", tipo: "Nodo Territorial", x: -0.1113, z: 0.223, isCentral: false, colorGem: 0x38bdf8 },
      { id: "los_menucos", nombre: "LOS MENUCOS", subtitulo: "Región Sur Central / RN 23", tipo: "Nodo Territorial", x: -0.1323, z: 0.2459, isCentral: false, colorGem: 0x38bdf8 },
      { id: "maquinchao", nombre: "MAQUINCHAO", subtitulo: "Línea Sur Centro-Oeste", tipo: "Nodo Territorial", x: -0.171, z: 0.282, isCentral: false, colorGem: 0x38bdf8 },
      { id: "ing_jacobacci", nombre: "ING. JACOBACCI", subtitulo: "Línea Sur Oeste / RN 23", tipo: "Nodo Territorial", x: -0.2267, z: 0.289, isCentral: false, colorGem: 0x38bdf8 }
    ];

    engine.nodeGems06 = [];
    engine.nodeArcs06 = [];
    const viedmaSede = engine.sedes06[0];
    const viedmaPos = new THREE.Vector3(viedmaSede.x, -0.54, viedmaSede.z);

    // Luz cálida de Sede Viedma
    const viedmaLight = new THREE.PointLight(0xffd700, 1.3, 1.8);
    viedmaLight.position.set(viedmaSede.x, -0.46, viedmaSede.z);
    g.add(viedmaLight);

    // Luz dinámica de escaneo radar
    const radarPingLight = new THREE.PointLight(0x38bdf8, 0.9, 1.2);
    radarPingLight.position.set(viedmaSede.x, -0.68, viedmaSede.z);
    g.add(radarPingLight);
    engine.anim06_radarLight = radarPingLight;

    engine.sedes06.forEach((sede) => {
      const pinGroup = new THREE.Group();
      if (sede.isCentral) {
        // Obelisco Viedma apoyado sobre Río Negro (tope y = -0.880)
        const col = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.044, 0.34, 24), engine.marbleMat(0xffffff));
        col.position.y = -0.71;
        pinGroup.add(col);

        const orb = new THREE.Mesh(
          new THREE.SphereGeometry(0.044, 20, 20),
          new THREE.MeshStandardMaterial({
            color: 0xffd700,
            roughness: 0.08,
            metalness: 0.35,
            emissive: 0xb45309,
            emissiveIntensity: 0.35,
            transparent: true,
            opacity: 0.92
          })
        );
        orb.position.y = -0.52;
        pinGroup.add(orb);
        engine.nodeGems06.push({ mesh: orb, sede });
      } else {
        // Balizas de los 10 Nodos (proporcionadas sin colisión)
        const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.0055, 0.007, 0.14, 12), engine.brassMat());
        mast.position.y = -0.81;
        pinGroup.add(mast);

        const gem = new THREE.Mesh(
          new THREE.SphereGeometry(0.015, 16, 16),
          new THREE.MeshStandardMaterial({
            color: 0x38bdf8,
            emissive: 0x0284c7,
            emissiveIntensity: 0.55,
            roughness: 0.2,
            metalness: 0.1
          })
        );
        gem.position.y = -0.73;
        pinGroup.add(gem);
        engine.nodeGems06.push({ mesh: gem, sede });

        // Arco de transmisión desde Viedma
        const nodeTarget = new THREE.Vector3(sede.x, -0.73, sede.z);
        const dist = viedmaPos.distanceTo(nodeTarget);
        const mid = new THREE.Vector3().addVectors(viedmaPos, nodeTarget).multiplyScalar(0.5);
        mid.y = -0.52 + dist * 0.52;

        const curve = new THREE.QuadraticBezierCurve3(viedmaPos, mid, nodeTarget);
        const tube = new THREE.Mesh(
          new THREE.TubeGeometry(curve, 24, 0.0026, 6, false),
          new THREE.MeshStandardMaterial({ color: 0xe6b800, roughness: 0.2, metalness: 0.8, emissive: 0x996515, emissiveIntensity: 0.15, transparent: true, opacity: 0.78 })
        );
        g.add(tube);

        const pulse = new THREE.Mesh(new THREE.SphereGeometry(0.009, 12, 12), new THREE.MeshBasicMaterial({ color: 0xfffad0 }));
        pulse.position.copy(nodeTarget);
        g.add(pulse);

        engine.nodeArcs06.push({ mesh: tube, curve, pulse, target: nodeTarget });
      }

      pinGroup.position.set(sede.x, 0, sede.z);
      g.add(pinGroup);
    });

    const activeHalo = new THREE.Mesh(
      new THREE.RingGeometry(0.016, 0.032, 32),
      new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.88, side: THREE.DoubleSide })
    );
    activeHalo.rotation.x = -Math.PI / 2;
    activeHalo.position.set(viedmaSede.x, -0.874, viedmaSede.z);
    g.add(activeHalo);
    engine.nodeActiveHalo06 = activeHalo;
  },

  animate(engine, t) {
    if (engine.sedes06 && engine.sedes06.length > 0) {
      const cycleDuration = 3.0;
      const activeIdx = Math.floor(t / cycleDuration) % engine.sedes06.length;

      if (activeIdx !== engine.activeNodeIndex06) {
        engine.activeNodeIndex06 = activeIdx;
        const activeNode = engine.sedes06[activeIdx];
        if (window.updateNodeHUD) {
          window.updateNodeHUD(activeNode);
        }
      }

      const activeNode = engine.sedes06[activeIdx];
      if (engine.nodeActiveHalo06) {
        engine.nodeActiveHalo06.position.set(activeNode.x, -0.874, activeNode.z);
        const s = 1.0 + Math.sin(t * 5) * 0.22;
        engine.nodeActiveHalo06.scale.set(s, s, s);
      }

      if (engine.anim06_radarLight) {
        engine.anim06_radarLight.position.set(activeNode.x, -0.71, activeNode.z);
        engine.anim06_radarLight.color.setHex(activeNode.isCentral ? 0xffd700 : 0x38bdf8);
        engine.anim06_radarLight.intensity = 0.85 + Math.sin(t * 5) * 0.3;
      }

      if (engine.nodeGems06) {
        engine.nodeGems06.forEach((item, idx) => {
          if (idx === activeIdx) {
            item.mesh.scale.set(1.35, 1.35, 1.35);
          } else {
            item.mesh.scale.set(1.0, 1.0, 1.0);
          }
        });
      }

      if (engine.nodeArcs06) {
        engine.nodeArcs06.forEach((item, arcIdx) => {
          const prog = (t * 0.45 + arcIdx * 0.10) % 1.0;
          if (item.curve && item.pulse) {
            item.pulse.position.copy(item.curve.getPoint(prog));
          }
        });
      }
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 7. DOCENCIA HÍBRIDA: Red Territorial de los 10 Nodos Regionales
//    (Res. CD N° 135/2022 y Res. CD-CURZA N° 196/2022 • Cogestión Municipal)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_07"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.40);

    const netGroup = new THREE.Group();
    netGroup.position.set(0, -0.15, 0);

    // Servidor / Terminal Central Sede Viedma (Esbelta columna clásica y esfera Moodle)
    const centralCol = engine.createClassicalColumn(0.88, 0.085, 0xd4af37, true);
    centralCol.position.set(0, -0.44, 0);
    netGroup.add(centralCol);

    // Chapa técnica grabada en la base del servidor central
    const plaqueNet = engine.createEngravedPlaque(
      0.78,
      0.26,
      "RED DE AULAS HÍBRIDAS",
      "Sede Central Viedma • 10 Nodos Conectados (Res. CD 196/22)",
      ["TELECOMUNICACIONES CURZAS"],
      { theme: "dark" }
    );
    plaqueNet.position.set(0, -0.88, 0.42);
    g.add(plaqueNet);

    // Fino aro armilar orbital en el remate
    const centralRing = engine.createBrassArmillaryRing(0.24, 0.008);
    centralRing.position.set(0, 0.18, 0);
    netGroup.add(centralRing);
    engine.anim07_centralRing = centralRing;

    // Dial de sincronismo y latencia de telecomunicaciones en el servidor
    const syncDial = engine.createGraduatedDial(0.12, {
      title: "SYNC",
      sub: "100%",
      divisions: 24,
      isPercentage: true,
      theme: "dark"
    });
    syncDial.position.set(0, 0.38, 0);
    syncDial.rotation.x = Math.PI / 2;
    netGroup.add(syncDial);

    // Núcleo holográfico luminoso del servidor Moodle / Videoconferencias
    const serverGlobe = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 20, 20),
      new THREE.MeshStandardMaterial({
        color: 0xffd700,
        emissive: 0xd97706,
        emissiveIntensity: 0.45,
        roughness: 0.10,
        metalness: 0.25,
        transparent: true,
        opacity: 0.92
      })
    );
    serverGlobe.position.set(0, 0.18, 0);
    netGroup.add(serverGlobe);

    const centralLight = new THREE.PointLight(0xffd700, 1.4, 2.0);
    centralLight.position.set(0, 0.18, 0);
    netGroup.add(centralLight);

    // 1 sola luz dinámica de barrido de radar (elimina el overhead de 10 luces fijas)
    const radarSweepLight = new THREE.PointLight(0x38bdf8, 1.1, 1.5);
    radarSweepLight.position.set(1.15, -0.27, 0);
    netGroup.add(radarSweepLight);
    engine.anim07_sweepLight = radarSweepLight;

    // ÚNICA Cartela Maestra Superior (despejada, limpia y sin sobrecarga)
    const labelMaster = engine.createLabelSprite(
      "RED TERRITORIAL DE NODOS REGIONALES",
      "Sede Central Viedma • 10 Nodos Conectados (Res. CD 135/22 y 196/22)",
      "#0f2d59",
      true
    );
    labelMaster.position.set(0, 1.15, 0);
    g.add(labelMaster);

    // Los 10 Nodos Territoriales oficiales (Res. CD N° 135/2022)
    engine.nodos07 = [
      { id: "los_menucos", nombre: "LOS MENUCOS", subtitulo: "Región Sur Central", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "sierra_colorada", nombre: "SIERRA COLORADA", subtitulo: "Centro Geográfico", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "valcheta", nombre: "VALCHETA", subtitulo: "Portal Línea Sur", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "ramos_mexia", nombre: "RAMOS MEXÍA", subtitulo: "Meseta de Somuncura", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "san_antonio", nombre: "SAO / LAS GRUTAS", subtitulo: "Costa Atlántica", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "conesa", nombre: "GENERAL CONESA", subtitulo: "Valle Conesa / Nexo Vial", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "rio_colorado", nombre: "RÍO COLORADO", subtitulo: "Valle del Río Colorado", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "maquinchao", nombre: "MAQUINCHAO", subtitulo: "Línea Sur Centro-Oeste", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "ing_jacobacci", nombre: "ING. JACOBACCI", subtitulo: "Línea Sur Oeste", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "sierra_grande", nombre: "SIERRA GRANDE", subtitulo: "Costa Atlántica Sur", tipo: "Nodo Territorial", col: 0x38bdf8 }
    ];

    engine.anim07_lasers = [];
    engine.anim07_termBeacons = [];
    const rRing = 1.15;

    engine.nodos07.forEach((nodo, idx) => {
      const angle = (idx / engine.nodos07.length) * Math.PI * 2;
      const x = Math.cos(angle) * rRing;
      const z = Math.sin(angle) * rRing;

      // Baliza esbelta de aula híbrida: mástil de latón pulido con gema de cristal
      const nodeGroup = new THREE.Group();
      nodeGroup.position.set(x, -0.65, z);

      // Micro-base de latón
      const pinBase = new THREE.Mesh(
        new THREE.CylinderGeometry(0.035, 0.045, 0.08, 16),
        engine.brassMat(0xd4af37)
      );
      pinBase.position.y = 0.04;
      nodeGroup.add(pinBase);

      // Mástil delgado
      const pinMast = new THREE.Mesh(
        new THREE.CylinderGeometry(0.007, 0.007, 0.28, 12),
        engine.brassMat(0xffd700)
      );
      pinMast.position.y = 0.22;
      nodeGroup.add(pinMast);

      // Gema cristalina luminosa de la terminal con emisión intrínseca
      const beaconOrb = new THREE.Mesh(
        new THREE.SphereGeometry(0.032, 16, 16),
        new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x0284c7,
          emissiveIntensity: 0.5,
          roughness: 0.15,
          metalness: 0.1
        })
      );
      beaconOrb.position.set(0, 0.38, 0);
      nodeGroup.add(beaconOrb);

      const targetWorldY = -0.65 + 0.38; // -0.27
      engine.anim07_termBeacons.push({ mesh: beaconOrb, node: nodo, x, z });

      netGroup.add(nodeGroup);

      // Fino rayo de fibra óptica de transmisión sincrónica
      const lineCurve = new THREE.LineCurve3(
        new THREE.Vector3(0, 0.18, 0),
        new THREE.Vector3(x, targetWorldY, z)
      );
      const tube = new THREE.Mesh(
        new THREE.TubeGeometry(lineCurve, 20, 0.0028, 6, false),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65 })
      );
      netGroup.add(tube);

      const pulseBall = new THREE.Mesh(
        new THREE.SphereGeometry(0.010, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xe0f2fe })
      );
      pulseBall.position.copy(lineCurve.v1);
      netGroup.add(pulseBall);

      engine.anim07_lasers.push({ tube, curve: lineCurve, pulse: pulseBall });
    });

    // Halo fino de radar de escaneo activo
    const radarRing = new THREE.Mesh(
      new THREE.RingGeometry(0.035, 0.055, 24),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85, side: THREE.DoubleSide })
    );
    radarRing.rotation.x = -Math.PI / 2;
    radarRing.position.set(rRing, -0.27, 0);
    netGroup.add(radarRing);
    engine.anim07_radarRing = radarRing;

    g.add(netGroup);
  },

  animate(engine, t) {
    if (engine.anim07_centralRing) {
      engine.anim07_centralRing.rotation.y = t * 0.6;
      engine.anim07_centralRing.rotation.x = Math.sin(t * 0.3) * 0.25;
    }

    if (engine.anim07_lasers) {
      engine.anim07_lasers.forEach((item, i) => {
        const prog = (t * 0.7 + i * 0.1) % 1.0;
        if (item.curve && item.pulse) {
          item.pulse.position.copy(item.curve.getPoint(prog));
        }
        if (item.tube) {
          item.tube.material.opacity = 0.35 + Math.sin(t * 3 + i) * 0.25;
        }
      });
    }

    if (engine.nodos07 && engine.nodos07.length > 0) {
      const cycleDuration = 2.6;
      const activeIdx = Math.floor(t / cycleDuration) % engine.nodos07.length;

      if (activeIdx !== engine.activeNodeIndex07) {
        engine.activeNodeIndex07 = activeIdx;
        const activeNode = engine.nodos07[activeIdx];
        if (window.updateNodeHUD) {
          window.updateNodeHUD(activeNode);
        }
      }

      if (engine.anim07_sweepLight && engine.anim07_radarRing) {
        const beacon = engine.anim07_termBeacons[activeIdx];
        if (beacon) {
          engine.anim07_radarRing.position.set(beacon.x, -0.27, beacon.z);
          const s = 1.0 + Math.sin(t * 6) * 0.20;
          engine.anim07_radarRing.scale.set(s, s, s);

          engine.anim07_sweepLight.position.set(beacon.x, -0.27, beacon.z);
          engine.anim07_sweepLight.intensity = 1.0 + Math.sin(t * 6) * 0.35;

          engine.anim07_termBeacons.forEach((b, idx) => {
            if (idx === activeIdx) {
              b.mesh.scale.set(1.4, 1.4, 1.4);
              if (b.mesh.material.emissiveIntensity !== undefined) {
                b.mesh.material.emissiveIntensity = 1.0;
              }
            } else {
              b.mesh.scale.set(1.0, 1.0, 1.0);
              if (b.mesh.material.emissiveIntensity !== undefined) {
                b.mesh.material.emissiveIntensity = 0.40;
              }
            }
          });
        }
      }
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 8. DESNATURALIZACIÓN: Bloque de Carbón Burocrático y Prisma de Ruptura
//    (De la rutina cotidiana al objeto científico • Wainerman & Sautu)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_08"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const ruptureGroup = new THREE.Group();
    ruptureGroup.position.set(0, -0.1, 0);

    // Banco de trabajo / Chasis maquinado en caoba y latón (asentado al ras del plinto)
    const benchChassis = engine.createMachinedChassis(1.76, 0.12, 0.68, { color: 0x2e1204 });
    benchChassis.position.y = -0.87;
    ruptureGroup.add(benchChassis);

    // 1. Bloque de carbón / roca opaca izquierda (La rutina administrativa cotidiana)
    const viseGroup = new THREE.Group();
    viseGroup.position.set(-0.66, 0.05, 0);

    const viseBase = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.08, 0.44),
      engine.graniteMat(0x0f172a)
    );
    viseBase.position.y = -0.32;
    viseGroup.add(viseBase);

    // Tornillo de banco de latón
    const viseScrew = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.25, 16),
      engine.brassMat(0xd4af37)
    );
    viseScrew.rotation.z = Math.PI / 2;
    viseScrew.position.set(-0.24, -0.22, 0);
    viseGroup.add(viseScrew);

    const viseHandle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.03, 24),
      engine.goldMat(0xffd700)
    );
    viseHandle.rotation.z = Math.PI / 2;
    viseHandle.position.set(-0.36, -0.22, 0);
    viseGroup.add(viseHandle);

    const routineRock = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.36, 1),
      engine.graniteMat(0x1e293b, 0.85, 0.1)
    );
    routineRock.castShadow = true;
    viseGroup.add(routineRock);

    const labelLeft = engine.createLabelSprite("RUTINA COTIDIANA", "Encuesta de Papel Sumativa", "#475569", false);
    labelLeft.position.set(0, 0.62, 0);
    viseGroup.add(labelLeft);
    ruptureGroup.add(viseGroup);

    // 2. Haz de investigación que penetra hacia el centro
    const beamIn = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.015, 0.42, 12),
      engine.brassMat(0xffd700)
    );
    beamIn.rotation.z = Math.PI / 2;
    beamIn.position.set(-0.25, 0.05, 0);
    ruptureGroup.add(beamIn);

    // 3. Prisma de cristal óptico puro montado en soporte goniométrico de latón
    const prismGroup = new THREE.Group();
    prismGroup.position.set(0.08, 0.05, 0);

    const prismStand = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.28, 0.06, 24),
      engine.brassMat(0xd4af37)
    );
    prismStand.position.y = -0.42;
    prismGroup.add(prismStand);

    const prismMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 0.75, 3),
      engine.glassMat(0xf8fafc, { transmission: 0.95, roughness: 0.05, ior: 1.65 })
    );
    prismMesh.castShadow = true;
    prismGroup.add(prismMesh);

    // Cuadrante / Dial graduado horizontal en la base del prisma (sin cruzar la geometría)
    const prismDial = engine.createGraduatedDial(0.12, {
      title: "VIGILANCIA",
      sub: "EPIST",
      divisions: 24,
      theme: "dark"
    });
    prismDial.position.set(0, -0.375, 0);
    prismDial.rotation.x = 0;
    prismGroup.add(prismDial);

    ruptureGroup.add(prismGroup);
    engine.anim08_prism = prismMesh;

    const labelCenter = engine.createLabelSprite("VIGILANCIA EPISTEMOLÓGICA", "Ruptura Científica (Wainerman & Sautu)", "#0f2d59", false);
    labelCenter.position.set(0.08, 0.78, 0);
    ruptureGroup.add(labelCenter);

    // 4. Objeto científico puro facetado emergiendo en pedestal dorado a la derecha
    const gemGroup = new THREE.Group();
    gemGroup.position.set(0.72, 0.05, 0);

    const gemPedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.24, 0.35, 24),
      engine.brassMat(0xd4af37)
    );
    gemPedestal.position.y = -0.28;
    gemGroup.add(gemPedestal);

    const scienceGem = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.34, 0),
      engine.glassMat(0x38bdf8, { roughness: 0.06, opacity: 0.90 })
    );
    scienceGem.position.y = 0.08;
    gemGroup.add(scienceGem);
    engine.anim08_gem = scienceGem;

    const lightGem = new THREE.PointLight(0x38bdf8, 1.4, 1.6);
    lightGem.position.y = 0.08;
    gemGroup.add(lightGem);

    const labelRight = engine.createLabelSprite("OBJETO CIENTÍFICO", "Factibilidad Situada del 360°", "#0369a1", false);
    labelRight.position.set(0, 0.65, 0);
    gemGroup.add(labelRight);

    ruptureGroup.add(gemGroup);

    // Chapa grabada en el frente del chasis
    const plaqueRupture = engine.createEngravedPlaque(
      0.72,
      0.22,
      "RUPTURA EPISTEMOLÓGICA",
      "De la Rutina al Objeto Científico (Wainerman & Sautu 2011)",
      ["FACTIBILIDAD 360° SITUADA"],
      { theme: "dark" }
    );
    plaqueRupture.position.set(0, -0.85, 0.36);
    ruptureGroup.add(plaqueRupture);

    g.add(ruptureGroup);
  },

  animate(engine, t) {
    if (engine.anim08_gem) {
      engine.anim08_gem.rotation.y = t * 1.2;
      engine.anim08_gem.rotation.x = t * 0.6;
    }
    if (engine.anim08_prism) {
      engine.anim08_prism.rotation.y = t * 0.4;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 9. TENSIÓN NORMATIVA: Balanza Dual de Tensión Estatutaria (Art. 75 vs. Art. 76)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_09"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.50, 0.22, -1.22);

    const scaleGroup = new THREE.Group();
    scaleGroup.position.set(0, -0.15, 0);

    // Chasis de caoba noble monumental
    const scaleChassis = engine.createMachinedChassis(1.72, 0.12, 0.65, { color: 0x2e1204 });
    scaleChassis.position.y = -0.95;
    scaleGroup.add(scaleChassis);

    // Fuste y pedestal central de columna clásica acanalada
    const centralPillar = engine.createClassicalColumn(1.25, 0.11, 0xd4af37, true);
    centralPillar.position.set(0, -0.35, 0);
    scaleGroup.add(centralPillar);

    // Cuadrante graduado de inclinación de la balanza en el fulcro (orientado hacia el frente)
    const balanceDial = engine.createGraduatedDial(0.14, {
      title: "EQUILIBRIO",
      sub: "ART. 75/76",
      divisions: 30,
      theme: "dark"
    });
    balanceDial.position.set(0, 0.38, 0.06);
    balanceDial.rotation.x = Math.PI / 2;
    scaleGroup.add(balanceDial);

    // Barra oscilante de latón maquinado
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 1.55, 16),
      engine.brassMat(0xd4af37)
    );
    beam.rotation.z = Math.PI / 2;
    beam.position.y = 0.38;
    scaleGroup.add(beam);
    engine.anim09_beam = beam;

    // Platillo Izquierdo: Art. 75 (Candado / Ponderación punitiva de vacancia)
    const leftPanGroup = new THREE.Group();
    leftPanGroup.position.set(-0.68, 0.15, 0);

    const leftPan = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.22, 0.03, 32),
      engine.brassMat()
    );
    leftPanGroup.add(leftPan);

    const lockBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.16, 0.08),
      engine.graniteMat(0x475569)
    );
    lockBody.position.y = 0.10;
    leftPanGroup.add(lockBody);

    const lockShackle = new THREE.Mesh(
      new THREE.TorusGeometry(0.07, 0.015, 12, 24, Math.PI),
      engine.brassMat(0xd4af37)
    );
    lockShackle.position.y = 0.18;
    leftPanGroup.add(lockShackle);

    const labelLeft = engine.createLabelSprite(
      "ART. 75 ESTATUTO",
      "Control Sumativo • Vacancia",
      "#b91c1c",
      false,
      { x: 0.64, y: 0.17 }
    );
    labelLeft.position.set(0, 0.78, 0);
    leftPanGroup.add(labelLeft);
    scaleGroup.add(leftPanGroup);
    engine.anim09_left = leftPanGroup;

    // Platillo Derecho: Art. 76 (Antorcha de Capacitación Continua)
    const rightPanGroup = new THREE.Group();
    rightPanGroup.position.set(0.68, 0.25, 0);

    const rightPan = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.22, 0.03, 32),
      engine.brassMat()
    );
    rightPanGroup.add(rightPan);

    const torch = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.05, 0.22, 16),
      engine.brassMat(0xffd700)
    );
    torch.position.y = 0.12;
    rightPanGroup.add(torch);

    const flame = new THREE.Mesh(
      new THREE.ConeGeometry(0.06, 0.16, 16),
      engine.glassMat(0xf59e0b, { roughness: 0.06, opacity: 0.90 })
    );
    flame.position.y = 0.28;
    rightPanGroup.add(flame);

    const flameLight = new THREE.PointLight(0xf59e0b, 1.4, 1.4);
    flameLight.position.y = 0.30;
    rightPanGroup.add(flameLight);

    const labelRight = engine.createLabelSprite(
      "ART. 76 ESTATUTO",
      "Capacitación y Desarrollo Formativo",
      "#059669",
      false,
      { x: 0.64, y: 0.17 }
    );
    labelRight.position.set(0, 0.78, 0);
    rightPanGroup.add(labelRight);
    scaleGroup.add(rightPanGroup);
    engine.anim09_right = rightPanGroup;

    // Chapa grabada en el frente del chasis de la balanza
    const plaqueScale = engine.createEngravedPlaque(
      0.78,
      0.24,
      "TENSIÓN ESTATUTARIA",
      "Art. 75 Régimen Sumativo vs. Art. 76 Desarrollo Formativo",
      ["ESTATUTO UNCo • CCT DOCENTE"],
      { theme: "dark" }
    );
    plaqueScale.position.set(0, -0.72, 0.36);
    plaqueScale.rotation.x = -0.12;
    scaleGroup.add(plaqueScale);

    g.add(scaleGroup);
  },

  animate(engine, t) {
    const swing = Math.sin(t * 1.4) * 0.05;
    if (engine.anim09_beam) {
      engine.anim09_beam.rotation.z = Math.PI / 2 + swing;
    }
    if (engine.anim09_left) {
      engine.anim09_left.position.y = 0.15 - swing * 1.5;
    }
    if (engine.anim09_right) {
      engine.anim09_right.position.y = 0.25 + swing * 1.5;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 10. PREGUNTA CENTRAL: Pentágono Orbital de Factibilidad (5 Dimensiones)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_10"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.50, 0.22, -1.22);

    const pentGroup = new THREE.Group();
    pentGroup.position.set(0, -0.05, 0);

    // Chasis de caoba noble inferior con cantoneras
    const baseChassis = engine.createMachinedChassis(1.20, 0.12, 1.20, { color: 0x2e1204 });
    baseChassis.position.y = -0.95;
    g.add(baseChassis);

    // Núcleo central pulsante: La Pregunta General de TFG con Escudo Académico UNCo
    const coreMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, 32, 32),
      engine.marbleMat(0xfdfbf7)
    );
    pentGroup.add(coreMesh);

    const sealCore = engine.createAcademicSeal(0.13);
    sealCore.position.set(0, 0, 0.26);
    pentGroup.add(sealCore);

    const coreRing = engine.createBrassArmillaryRing(0.38, 0.014);
    coreRing.rotation.x = Math.PI / 2;
    pentGroup.add(coreRing);

    const coreLight = new THREE.PointLight(0xffd700, 1.5, 1.8);
    pentGroup.add(coreLight);

    const labelCore = engine.createLabelSprite("PREGUNTA CENTRAL", "¿Condiciones de Factibilidad 2027?", "#0f2d59", true);
    labelCore.position.set(0, 0.70, 0);
    pentGroup.add(labelCore);

    // 5 Nodos Orbitales de las Cinco Dimensiones de Factibilidad
    const dims = [
      { name: "1. NORMATIVA", sub: "CCT y Estatuto UNCo", angle: 0, col: 0x38bdf8 },
      { name: "2. TÉCNICA", sub: "Moodle y Anonimato", angle: (2 * Math.PI) / 5, col: 0x10b981 },
      { name: "3. ORGANIZACIONAL", sub: "Circuitos y Art. 76", angle: (4 * Math.PI) / 5, col: 0xf59e0b },
      { name: "4. CULTURAL", sub: "Confianza Docente", angle: (6 * Math.PI) / 5, col: 0x8b5cf6 },
      { name: "5. GOBERNANZA", sub: "Cogobierno y ADUNC", angle: (8 * Math.PI) / 5, col: 0xec4899 }
    ];

    engine.anim10_arms = [];
    dims.forEach((d) => {
      const armGroup = new THREE.Group();
      const r = 0.90;
      const x = Math.cos(d.angle) * r;
      const z = Math.sin(d.angle) * r;

      // Brazo tensor de latón maquinado con estrías
      const armGeo = new THREE.CylinderGeometry(0.010, 0.010, r, 12);
      const armMesh = new THREE.Mesh(armGeo, engine.brassMat());
      armMesh.position.set(x / 2, 0, z / 2);
      armMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(x, 0, z).normalize());
      armGroup.add(armMesh);

      // Sello esférico / gema facetada de dimensión
      const sealMesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.13, 0),
        engine.glassMat(d.col, { opacity: 0.88, roughness: 0.08 })
      );
      sealMesh.position.set(x, 0, z);
      armGroup.add(sealMesh);

      const labelDim = engine.createLabelSprite(d.name, d.sub, "#0f2d59", false);
      labelDim.position.set(x, 0.32, z);
      armGroup.add(labelDim);

      pentGroup.add(armGroup);
      engine.anim10_arms.push(sealMesh);
    });

    // Chapa maestra de factibilidad en el frente
    const plaquePent = engine.createEngravedPlaque(
      0.84,
      0.26,
      "MATRIZ PENTAGONAL DE FACTIBILIDAD",
      "Las 5 Dimensiones Empíricas del Modelo 360°",
      ["CONDICIONES DE VIABILIDAD 2027"],
      { theme: "dark" }
    );
    plaquePent.position.set(0, -0.86, 0.62);
    g.add(plaquePent);

    g.add(pentGroup);
    engine.anim10_group = pentGroup;
  },

  animate(engine, t) {
    if (engine.anim10_group) {
      engine.anim10_group.rotation.y = t * 0.25;
    }
    if (engine.anim10_arms) {
      engine.anim10_arms.forEach((seal, idx) => {
        seal.rotation.y = t * 1.5 + idx;
      });
    }
  }
};
