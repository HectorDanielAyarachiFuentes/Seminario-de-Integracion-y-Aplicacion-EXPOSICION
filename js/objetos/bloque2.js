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
      0.98,
      0.38,
      "CURZAS — UNCo (2027)",
      "Sede Viedma + Red de 10 Nodos (Res. 135/22)",
      ["HORIZONTE: MAYO–NOVIEMBRE 2027", "RÍO NEGRO"],
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

    // 1.D. Sector Antártico Argentino (Carta Bicontinental, Península Antártica y Pingüinos)
    const antGroup = new THREE.Group();
    const antApexX = 1.06;
    const antApexZ = 1.18;
    const antRadius = 0.68;
    const antHalfAng = 0.44; // ~25° semiapertura del huso 74°W–25°W

    // Base triangular con arco polar superior (60°S) en relieve oceánico azul profundo
    const sectorShape = new THREE.Shape();
    sectorShape.moveTo(antApexX, -antApexZ);
    const arcSteps = 20;
    for (let i = 0; i <= arcSteps; i++) {
      const ang = -antHalfAng + (i / arcSteps) * (antHalfAng * 2);
      const px = antApexX + Math.sin(ang) * antRadius;
      const pz = antApexZ - Math.cos(ang) * antRadius;
      sectorShape.lineTo(px, -pz);
    }
    sectorShape.closePath();

    const sectorGeo = new THREE.ExtrudeGeometry(sectorShape, {
      depth: 0.018,
      bevelEnabled: true,
      bevelThickness: 0.004,
      bevelSize: 0.004,
      bevelSegments: 2
    });
    const sectorMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.30,
      metalness: 0.14
    });
    const sectorMesh = new THREE.Mesh(sectorGeo, sectorMat);
    sectorMesh.rotation.x = -Math.PI / 2;
    sectorMesh.position.y = -1.010;
    sectorMesh.receiveShadow = true;
    sectorMesh.add(new THREE.LineSegments(
      new THREE.EdgesGeometry(sectorGeo, 20),
      new THREE.LineBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.90 })
    ));
    antGroup.add(sectorMesh);

    // Península Antártica (Tierra de San Martín) y plataforma glaciar hacia el Polo Sur
    const peninsulaPts = [
      [0.86, 0.72], [0.89, 0.68], [0.92, 0.65], [0.93, 0.69],
      [0.90, 0.76], [0.93, 0.82], [1.00, 0.85], [1.09, 0.85],
      [1.17, 0.88], [1.21, 0.96], [1.15, 1.08], [1.06, 1.16],
      [0.97, 1.08], [0.89, 0.95], [0.84, 0.83]
    ];
    const iceShelfGeo = new THREE.ExtrudeGeometry(buildShapeFromPts(peninsulaPts), {
      depth: 0.044,
      bevelEnabled: true,
      bevelThickness: 0.008,
      bevelSize: 0.006,
      bevelSegments: 2
    });
    const iceMat = engine.marbleMat(0xf8fafc, 0.20);
    const iceMesh = new THREE.Mesh(iceShelfGeo, iceMat);
    iceMesh.rotation.x = -Math.PI / 2;
    iceMesh.position.y = -0.992;
    iceMesh.castShadow = true;
    iceMesh.receiveShadow = true;
    iceMesh.add(new THREE.LineSegments(
      new THREE.EdgesGeometry(iceShelfGeo, 22),
      new THREE.LineBasicMaterial({ color: 0x1e3a8a, transparent: true, opacity: 0.65 })
    ));
    antGroup.add(iceMesh);

    // Pareja de pingüinos antárticos esculpidos sobre la plataforma polar
    const makePenguin = (px, pz, yaw, scale = 1.0) => {
      const p = new THREE.Group();
      const darkFeather = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.45, metalness: 0.1 });
      const whiteBelly = engine.marbleMat(0xffffff, 0.35);
      const orangeBeak = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.4 });

      const body = new THREE.Mesh(new THREE.SphereGeometry(0.028, 16, 14), darkFeather);
      body.scale.set(0.95, 1.38, 0.88);
      body.position.y = 0.036;
      p.add(body);

      const belly = new THREE.Mesh(new THREE.SphereGeometry(0.023, 14, 12), whiteBelly);
      belly.scale.set(0.84, 1.18, 0.66);
      belly.position.set(0, 0.033, 0.011);
      p.add(belly);

      const head = new THREE.Mesh(new THREE.SphereGeometry(0.019, 14, 14), darkFeather);
      head.position.set(0, 0.075, 0.004);
      p.add(head);

      const beak = new THREE.Mesh(new THREE.ConeGeometry(0.005, 0.016, 10), orangeBeak);
      beak.rotation.x = Math.PI / 2;
      beak.position.set(0, 0.074, 0.023);
      p.add(beak);

      [-0.026, 0.026].forEach((wx) => {
        const wing = new THREE.Mesh(new THREE.SphereGeometry(0.012, 10, 10), darkFeather);
        wing.scale.set(0.35, 1.65, 0.55);
        wing.position.set(wx, 0.038, 0);
        wing.rotation.z = wx < 0 ? 0.25 : -0.25;
        p.add(wing);
      });

      [-0.010, 0.010].forEach((fx) => {
        const foot = new THREE.Mesh(new THREE.SphereGeometry(0.007, 8, 8), orangeBeak);
        foot.scale.set(0.8, 0.45, 1.4);
        foot.position.set(fx, 0.003, 0.012);
        p.add(foot);
      });

      p.position.set(px, -0.942, pz);
      p.rotation.y = yaw;
      p.scale.setScalar(scale);
      return p;
    };

    antGroup.add(makePenguin(1.025, 0.96, 0.22, 1.08));
    antGroup.add(makePenguin(1.090, 0.975, -0.24, 0.94));

    const antLabel = engine.createLabelSprite(
      "ANTÁRTIDA ARGENTINA",
      "Sector Antártico • Mapa Bicontinental",
      "#0f2d59",
      false,
      { x: 0.52, y: 0.16 }
    );
    antLabel.position.set(1.44, -0.74, 0.90);
    antGroup.add(antLabel);

    g.add(antGroup);

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
        // Sede Central Viedma: Pedestal y Figura Clásica Docente ("Alma Mater CURZAS") irradiando hacia los 10 Nodos
        const col = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.058, 0.16, 24), engine.marbleMat(0xffffff));
        col.position.y = -0.80;
        pinGroup.add(col);

        const almaFig = engine.createClassicalFigure({
          scale: 0.25,
          pose: "teaching",
          togaColor: 0x0f2d59,
          laurel: true
        });
        almaFig.position.y = -0.72;
        almaFig.rotation.y = -0.55;
        pinGroup.add(almaFig);

        const orb = new THREE.Mesh(
          new THREE.SphereGeometry(0.032, 20, 20),
          new THREE.MeshStandardMaterial({
            color: 0xffd700,
            roughness: 0.08,
            metalness: 0.35,
            emissive: 0xb45309,
            emissiveIntensity: 0.45,
            transparent: true,
            opacity: 0.94
          })
        );
        orb.position.y = -0.34;
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

    // Etiquetas explicativas territoriales con márgenes limpios alrededor del mapa
    const lblTerritorio = engine.createLabelSprite(
      "UBICACIÓN ESPACIO–TEMPORAL",
      "CURZAS–UNCo • Ejecución Mayo–Noviembre 2027",
      "#0f2d59",
      true,
      { x: 1.44 }
    );
    lblTerritorio.position.set(0.0, 0.74, -0.45);
    g.add(lblTerritorio);

    const lblViedma = engine.createLabelSprite(
      "SEDE CENTRAL VIEDMA",
      "Conducción Académica y Cogobierno",
      "#996515",
      false,
      { x: 0.82 }
    );
    lblViedma.position.set(viedmaSede.x + 0.62, -0.18, viedmaSede.z - 0.18);
    g.add(lblViedma);

    const lblNodos = engine.createLabelSprite(
      "RED DE 10 NODOS EN RÍO NEGRO",
      "Línea Sur • Costa Atlántica • Valles",
      "#0369a1",
      false,
      { x: 0.86 }
    );
    lblNodos.position.set(-0.74, -0.34, 0.14);
    g.add(lblNodos);
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
// 7. DPTO. ADMINISTRACIÓN PÚBLICA: Escena de Aula Universitaria + 10 Nodos Híbridos
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_07"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.82, 0.22, -1.22);

    const netGroup = new THREE.Group();
    netGroup.position.set(0, -0.10, 0);

    const mahoganyMat = new THREE.MeshStandardMaterial({
      color: 0x3b1806,
      roughness: 0.30,
      metalness: 0.08
    });

    // Estrado circular central (Sede Viedma — Aula del Departamento)
    const dais = new THREE.Mesh(
      new THREE.CylinderGeometry(0.50, 0.56, 0.14, 48),
      engine.marbleMat(0xf8f6f0, 0.35)
    );
    dais.position.y = -0.86;
    dais.receiveShadow = true;
    dais.castShadow = true;
    netGroup.add(dais);

    const daisRim = new THREE.Mesh(
      new THREE.TorusGeometry(0.51, 0.012, 16, 64),
      engine.brassMat(0xd4af37)
    );
    daisRim.rotation.x = Math.PI / 2;
    daisRim.position.y = -0.79;
    netGroup.add(daisRim);

    // Pizarra Académica Institucional detrás del Docente (contexto áulico inequívoco)
    const boardGroup = new THREE.Group();
    boardGroup.position.set(0, -0.14, -0.34);

    [-0.36, 0.36].forEach((bx) => {
      const post = new THREE.Mesh(
        new THREE.CylinderGeometry(0.014, 0.018, 0.72, 16),
        engine.brassMat(0xd4af37)
      );
      post.position.set(bx, -0.34, 0);
      boardGroup.add(post);
    });

    const boardFrame = new THREE.Mesh(
      new THREE.BoxGeometry(0.92, 0.48, 0.032),
      engine.brassMat(0xcfa346)
    );
    boardFrame.castShadow = true;
    boardGroup.add(boardFrame);

    const makeBoardTex = () => {
      const cw = 640, ch = 340;
      const c = document.createElement("canvas");
      c.width = cw;
      c.height = ch;
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#0f2d59";
      ctx.fillRect(0, 0, cw, ch);
      ctx.strokeStyle = "#d4af37";
      ctx.lineWidth = 6;
      ctx.strokeRect(12, 12, cw - 24, ch - 24);
      ctx.textAlign = "center";
      ctx.fillStyle = "#fde68a";
      ctx.font = "800 26px 'Cinzel', Georgia, serif";
      ctx.fillText("DPTO. ADMINISTRACIÓN PÚBLICA", cw / 2, 72);
      ctx.fillStyle = "#ffffff";
      ctx.font = "600 22px 'Inter', sans-serif";
      ctx.fillText("LAP  •  CCC Gestión de RR. HH.", cw / 2, 138);
      ctx.fillStyle = "#7dd3fc";
      ctx.font = "600 20px 'Inter', sans-serif";
      ctx.fillText("Aula Viedma + 10 Nodos Híbridos", cw / 2, 200);
      ctx.fillStyle = "#cbd5e1";
      ctx.font = "500 17px 'Inter', sans-serif";
      ctx.fillText("Estatuto UNCo • Ord. 0910/97 • CCT 1246/15", cw / 2, 268);
      const tex = new THREE.CanvasTexture(c);
      tex.minFilter = THREE.LinearFilter;
      return tex;
    };

    const boardFace = new THREE.Mesh(
      new THREE.PlaneGeometry(0.86, 0.42),
      new THREE.MeshStandardMaterial({ map: makeBoardTex(), roughness: 0.45 })
    );
    boardFace.position.z = 0.018;
    boardGroup.add(boardFace);
    netGroup.add(boardGroup);

    // Figura Clásica Central estilo David: El Docente Universitario en su cátedra
    const profFig = engine.createClassicalFigure({
      scale: 0.72,
      pose: "teaching",
      togaColor: 0x0f2d59,
      laurel: true
    });
    profFig.position.set(0, -0.79, -0.08);
    netGroup.add(profFig);
    engine.anim07_prof = profFig;

    // Escritorio / Atril de Cátedra delante del Profesor (lo identifica como Docente)
    const deskGroup = new THREE.Group();
    deskGroup.position.set(0, -0.62, 0.14);
    const deskTop = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.03, 0.22), mahoganyMat);
    deskTop.position.y = 0.14;
    deskGroup.add(deskTop);
    const deskFront = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.30, 0.025), mahoganyMat);
    deskFront.position.set(0, -0.02, 0.09);
    deskGroup.add(deskFront);
    const deskBook = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.02, 0.12), engine.marbleMat(0xfaf7ee));
    deskBook.position.set(-0.06, 0.165, 0);
    deskGroup.add(deskBook);
    netGroup.add(deskGroup);

    // Portal Holográfico de Clase Híbrida frente al escritorio (Res. 196/22)
    const holoFrame = new THREE.Mesh(
      new THREE.TorusGeometry(0.22, 0.008, 16, 64),
      engine.goldMat(0xffd700)
    );
    holoFrame.position.set(0, -0.18, 0.34);
    netGroup.add(holoFrame);
    engine.anim07_centralRing = holoFrame;

    const holoGlass = new THREE.Mesh(
      new THREE.CylinderGeometry(0.21, 0.21, 0.010, 48),
      engine.glassMat(0x38bdf8, { opacity: 0.30, roughness: 0.06 })
    );
    holoGlass.rotation.x = Math.PI / 2;
    holoGlass.position.set(0, -0.18, 0.34);
    netGroup.add(holoGlass);

    // Dos Estudiantes Presenciales en Viedma con pupitres universitarios mirando al docente
    [
      { x: -0.58, z: 0.44, rotY: 0.78, col: 0x0f625a },
      { x: 0.58, z: 0.44, rotY: -0.78, col: 0x1e3a8a }
    ].forEach((st) => {
      const stPed = new THREE.Mesh(
        new THREE.CylinderGeometry(0.16, 0.19, 0.07, 28),
        engine.graniteMat(0x1e293b)
      );
      stPed.position.set(st.x, -0.90, st.z);
      netGroup.add(stPed);

      const stFig = engine.createClassicalFigure({
        scale: 0.44,
        pose: "dialogue",
        togaColor: st.col
      });
      stFig.position.set(st.x, -0.865, st.z);
      stFig.rotation.y = st.rotY;
      netGroup.add(stFig);

      // Pupitre estudiantil delante de cada estudiante presencial
      const pupitre = new THREE.Group();
      pupitre.position.set(st.x * 0.74, -0.76, st.z - 0.12);
      pupitre.rotation.y = st.rotY;
      const pLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.016, 0.24, 12), engine.brassMat());
      pupitre.add(pLeg);
      const pTop = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.018, 0.12), mahoganyMat);
      pTop.position.y = 0.12;
      pTop.rotation.x = 0.15;
      pupitre.add(pTop);
      netGroup.add(pupitre);
    });

    const centralLight = new THREE.PointLight(0xffd700, 1.35, 2.2);
    centralLight.position.set(0, 0.22, 0.20);
    netGroup.add(centralLight);

    const radarSweepLight = new THREE.PointLight(0x38bdf8, 1.1, 1.6);
    radarSweepLight.position.set(1.16, -0.35, 0);
    netGroup.add(radarSweepLight);
    engine.anim07_sweepLight = radarSweepLight;

    // Anillo exterior de los 10 Nodos Territoriales con figuras estudiantiles remotas conectadas
    engine.nodos07 = [
      { id: "los_menucos", nombre: "LOS MENUCOS", subtitulo: "Región Sur Central", tipo: "Nodo Territorial" },
      { id: "sierra_colorada", nombre: "SIERRA COLORADA", subtitulo: "Centro Geográfico", tipo: "Nodo Territorial" },
      { id: "valcheta", nombre: "VALCHETA", subtitulo: "Portal Línea Sur", tipo: "Nodo Territorial" },
      { id: "ramos_mexia", nombre: "RAMOS MEXÍA", subtitulo: "Meseta de Somuncura", tipo: "Nodo Territorial" },
      { id: "san_antonio", nombre: "SAO / LAS GRUTAS", subtitulo: "Costa Atlántica", tipo: "Nodo Territorial" },
      { id: "conesa", nombre: "GENERAL CONESA", subtitulo: "Valle Conesa", tipo: "Nodo Territorial" },
      { id: "rio_colorado", nombre: "RÍO COLORADO", subtitulo: "Valle Río Colorado", tipo: "Nodo Territorial" },
      { id: "maquinchao", nombre: "MAQUINCHAO", subtitulo: "Línea Sur", tipo: "Nodo Territorial" },
      { id: "ing_jacobacci", nombre: "ING. JACOBACCI", subtitulo: "Línea Sur Oeste", tipo: "Nodo Territorial" },
      { id: "sierra_grande", nombre: "SIERRA GRANDE", subtitulo: "Costa Atlántica Sur", tipo: "Nodo Territorial" }
    ];

    engine.anim07_lasers = [];
    engine.anim07_termBeacons = [];
    const rRing = 1.16;

    engine.nodos07.forEach((nodo, idx) => {
      const angle = (idx / engine.nodos07.length) * Math.PI * 2;
      const x = Math.cos(angle) * rRing;
      const z = Math.sin(angle) * rRing;

      const nodeGroup = new THREE.Group();
      nodeGroup.position.set(x, -0.91, z);

      const pinBase = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.095, 0.05, 20),
        engine.brassMat(0xd4af37)
      );
      pinBase.position.y = 0.025;
      nodeGroup.add(pinBase);

      // Mini-escultura humana en cada Nodo Territorial mirando hacia el aula central
      const remoteStudent = engine.createClassicalFigure({
        scale: 0.24,
        pose: "open",
        togaColor: 0x0284c7
      });
      remoteStudent.position.y = 0.05;
      remoteStudent.rotation.y = Math.atan2(-x, -z);
      nodeGroup.add(remoteStudent);

      const beaconOrb = new THREE.Mesh(
        new THREE.SphereGeometry(0.024, 14, 14),
        new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x0284c7,
          emissiveIntensity: 0.6,
          roughness: 0.15
        })
      );
      beaconOrb.position.set(0, 0.40, 0);
      nodeGroup.add(beaconOrb);

      const targetWorldY = -0.91 + 0.40;
      engine.anim07_termBeacons.push({ mesh: beaconOrb, node: nodo, x, z });
      netGroup.add(nodeGroup);

      // Arco luminoso curvo desde el portal híbrido hacia cada estudiante en su Nodo
      const midPt = new THREE.Vector3(x * 0.5, 0.08, z * 0.5 + 0.10);
      const arcCurve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(0, -0.18, 0.34),
        midPt,
        new THREE.Vector3(x, targetWorldY, z)
      );
      const tube = new THREE.Mesh(
        new THREE.TubeGeometry(arcCurve, 20, 0.0028, 6, false),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.50 })
      );
      netGroup.add(tube);

      const pulseBall = new THREE.Mesh(
        new THREE.SphereGeometry(0.010, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xfef08a })
      );
      netGroup.add(pulseBall);
      engine.anim07_lasers.push({ tube, curve: arcCurve, pulse: pulseBall });
    });

    const radarRing = new THREE.Mesh(
      new THREE.RingGeometry(0.09, 0.115, 28),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85, side: THREE.DoubleSide })
    );
    radarRing.rotation.x = -Math.PI / 2;
    radarRing.position.set(rRing, -0.88, 0);
    netGroup.add(radarRing);
    engine.anim07_radarRing = radarRing;

    // Etiquetas explicativas claras con márgenes libres sobre las figuras
    const lblMaster = engine.createLabelSprite(
      "DPTO. DE ADMINISTRACIÓN PÚBLICA",
      "Aula Presencial (Viedma) + Red de 10 Nodos Híbridos",
      "#0f2d59",
      true,
      { x: 1.48 }
    );
    lblMaster.position.set(0, 1.30, -0.12);
    netGroup.add(lblMaster);

    const lblDocente = engine.createLabelSprite(
      "DOCENTE DE CÁTEDRA",
      "Sede Viedma + Tutoría Virtual",
      "#996515",
      false,
      { x: 0.78 }
    );
    lblDocente.position.set(0, 0.56, -0.06);
    netGroup.add(lblDocente);

    const lblPresencial = engine.createLabelSprite(
      "AULA PRESENCIAL",
      "Estudiantes LAP / RR.HH.",
      "#0f625a",
      false,
      { x: 0.68 }
    );
    lblPresencial.position.set(-1.12, 0.30, 0.42);
    netGroup.add(lblPresencial);

    const lblHibrido = engine.createLabelSprite(
      "10 NODOS HÍBRIDOS",
      "Cursada Sincrónica (Res. 196/22)",
      "#0369a1",
      false,
      { x: 0.72 }
    );
    lblHibrido.position.set(1.22, 0.30, 0.32);
    netGroup.add(lblHibrido);

    // Placa frontal museográfica elevada sobre zócalo al ras del plinto
    const frontPlaque = engine.createMountedPlaque(
      1.10,
      0.27,
      "PRÁCTICA DOCENTE SITUADA",
      "Sede Viedma y 10 Nodos • Res. CD-CURZA N° 196/22",
      ["ESTATUTO UNCo", "ORD. 0910/97", "CCT 1246/15"],
      { theme: "dark", floorY: -1.0385 - (-0.10) }
    );
    frontPlaque.position.set(0, 0, 1.44);
    netGroup.add(frontPlaque);

    g.add(netGroup);
  },

  animate(engine, t) {
    if (engine.anim07_centralRing) {
      engine.anim07_centralRing.rotation.z = t * 0.35;
    }
    if (engine.anim07_prof) {
      engine.anim07_prof.rotation.y = Math.sin(t * 0.6) * 0.14;
    }
    if (engine.anim07_lasers) {
      engine.anim07_lasers.forEach((item, i) => {
        const prog = (t * 0.55 + i * 0.1) % 1.0;
        if (item.curve && item.pulse) {
          item.pulse.position.copy(item.curve.getPoint(prog));
        }
      });
    }
    if (engine.nodos07 && engine.nodos07.length > 0) {
      const activeIdx = Math.floor(t / 2.6) % engine.nodos07.length;
      if (activeIdx !== engine.activeNodeIndex07) {
        engine.activeNodeIndex07 = activeIdx;
        if (window.updateNodeHUD) {
          window.updateNodeHUD(engine.nodos07[activeIdx]);
        }
      }
      const beacon = engine.anim07_termBeacons?.[activeIdx];
      if (beacon && engine.anim07_radarRing && engine.anim07_sweepLight) {
        engine.anim07_radarRing.position.set(beacon.x, -0.88, beacon.z);
        engine.anim07_sweepLight.position.set(beacon.x, -0.45, beacon.z);
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
// 9. EL PROBLEMA: Alegoría Escultórica Humana ("Del Peso Sumativo al Diálogo 360°")
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_09"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.80, 0.22, -1.22);

    const sceneGroup = new THREE.Group();
    sceneGroup.position.set(0, -0.08, 0);

    // ── ESCENA IZQUIERDA (LO QUE OCURRE HOY: CONTROL SUMATIVO ART. 75) ──
    const leftStage = new THREE.Mesh(
      new THREE.CylinderGeometry(0.56, 0.62, 0.12, 36),
      engine.graniteMat(0x1e293b, 0.50, 0.22)
    );
    leftStage.position.set(-0.78, -0.90, 0);
    leftStage.receiveShadow = true;
    sceneGroup.add(leftStage);

    const leftScene = new THREE.Group();
    leftScene.position.set(-0.78, -0.84, 0);

    // Docente solitario inclinado bajo la carga normativa y el candado sumativo
    const burdenedTeacher = engine.createClassicalFigure({
      scale: 0.72,
      pose: "burdened",
      togaColor: 0x334155
    });
    leftScene.add(burdenedTeacher);
    engine.anim09_burdenFig = burdenedTeacher;

    // Losa de Control Sumativo grabada con "ART. 75 · 2 NEGATIVAS = VACANCIA"
    const heavyBlockGroup = new THREE.Group();
    heavyBlockGroup.position.set(0, 1.03, 0.12);

    const heavySlab = new THREE.Mesh(
      new THREE.BoxGeometry(0.64, 0.30, 0.38),
      engine.graniteMat(0x0f172a, 0.45, 0.30)
    );
    heavySlab.rotation.z = -0.05;
    heavySlab.castShadow = true;
    heavyBlockGroup.add(heavySlab);

    const makeSlabTex = () => {
      const cw = 512, ch = 240;
      const c = document.createElement("canvas");
      c.width = cw;
      c.height = ch;
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, cw, ch);
      ctx.strokeStyle = "#dc2626";
      ctx.lineWidth = 6;
      ctx.strokeRect(10, 10, cw - 20, ch - 20);
      ctx.textAlign = "center";
      ctx.fillStyle = "#fca5a5";
      ctx.font = "800 32px 'Cinzel', Georgia, serif";
      ctx.fillText("ART. 75 INC. C", cw / 2, 74);
      ctx.fillStyle = "#ffffff";
      ctx.font = "700 24px 'Inter', sans-serif";
      ctx.fillText("2 NEGATIVAS = VACANCIA", cw / 2, 134);
      ctx.fillStyle = "#94a3b8";
      ctx.font = "600 18px 'Inter', sans-serif";
      ctx.fillText("Control Anual • ¿Cautela?", cw / 2, 190);
      const tex = new THREE.CanvasTexture(c);
      tex.minFilter = THREE.LinearFilter;
      return tex;
    };

    const slabFace = new THREE.Mesh(
      new THREE.PlaneGeometry(0.58, 0.25),
      new THREE.MeshStandardMaterial({ map: makeSlabTex(), roughness: 0.4 })
    );
    slabFace.position.set(0, 0, 0.195);
    slabFace.rotation.z = -0.05;
    heavyBlockGroup.add(slabFace);

    const cageLines = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(0.68, 0.34, 0.42)),
      new THREE.LineBasicMaterial({ color: 0xdc2626, transparent: true, opacity: 0.85 })
    );
    cageLines.rotation.z = -0.05;
    heavyBlockGroup.add(cageLines);

    // Candado carmesí superior simbolizando riesgo laboral
    const lockShackle = new THREE.Mesh(
      new THREE.TorusGeometry(0.065, 0.014, 12, 24, Math.PI),
      engine.brassMat(0xd4af37)
    );
    lockShackle.position.set(0, 0.22, 0.02);
    heavyBlockGroup.add(lockShackle);

    leftScene.add(heavyBlockGroup);
    engine.anim09_heavy = heavyBlockGroup;
    sceneGroup.add(leftScene);

    // Etiqueta clara encima de la escena izquierda
    const lblLeftProblem = engine.createLabelSprite(
      "HIPÓTESIS: CONTROL (ART. 75)",
      "¿Genera cautela? • A comprobar en 2027",
      "#991b1b",
      false,
      { x: 0.94 }
    );
    lblLeftProblem.position.set(-0.82, 0.72, 0.12);
    sceneGroup.add(lblLeftProblem);

    // ── CENTRO: LA BRECHA FORMATIVA (ART. 76 SIN INSUMO PEDAGÓGICO) ──
    const bridgeArcCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.30, -0.24, 0),
      new THREE.Vector3(-0.04, 0.36, 0.14),
      new THREE.Vector3(0.22, -0.08, 0)
    );
    const bridgeArc = new THREE.Mesh(
      new THREE.TubeGeometry(bridgeArcCurve, 28, 0.011, 12, false),
      engine.goldMat(0xffd700)
    );
    sceneGroup.add(bridgeArc);

    const lblBreach = engine.createLabelSprite(
      "¿BRECHA ART. 75 vs. ART. 76?",
      "¿Sería viable pasar del control a mejorar clases?",
      "#0f2d59",
      true,
      { x: 1.38 }
    );
    lblBreach.position.set(0.0, 1.40, 0.10);
    sceneGroup.add(lblBreach);

    // ── ESCENA DERECHA (OBJETO DE ESTUDIO: MODELO 360° FORMATIVO + ART. 76) ──
    const rightStage = new THREE.Mesh(
      new THREE.CylinderGeometry(0.68, 0.74, 0.14, 48),
      engine.marbleMat(0xf8f6f0, 0.32)
    );
    rightStage.position.set(0.76, -0.89, 0);
    rightStage.receiveShadow = true;
    sceneGroup.add(rightStage);

    const rightRim = new THREE.Mesh(
      new THREE.TorusGeometry(0.69, 0.012, 16, 64),
      engine.goldMat(0xffd700)
    );
    rightRim.rotation.x = Math.PI / 2;
    rightRim.position.set(0.76, -0.82, 0);
    sceneGroup.add(rightRim);

    const rightScene = new THREE.Group();
    rightScene.position.set(0.76, -0.82, 0);

    // Docente erguido y libre en el centro del 360° (Autoevaluación + Antorcha Art. 76)
    const openTeacher = engine.createClassicalFigure({
      scale: 0.74,
      pose: "open",
      togaColor: 0x0f2d59,
      laurel: true
    });
    rightScene.add(openTeacher);

    // Antorcha dorada de Capacitación Continua (Art. 76) junto al docente
    const torchPed = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.62, 16), engine.brassMat(0xd4af37));
    torchPed.position.set(0.24, 0.31, 0.10);
    rightScene.add(torchPed);
    const torchFlame = new THREE.Mesh(
      new THREE.ConeGeometry(0.055, 0.14, 16),
      engine.glassMat(0xf59e0b, { roughness: 0.06, opacity: 0.92 })
    );
    torchFlame.position.set(0.24, 0.68, 0.10);
    rightScene.add(torchFlame);

    // 3 Figuras clásicas acompañantes alrededor (Pares, Estudiantes y Dirección) con etiquetas fuera de las figuras
    const companions = [
      { angle: Math.PI * 0.85, col: 0x0f625a, title: "PARES", sub: "Coevaluación", lblPos: [-0.86, 1.06, 0.38], lblW: 0.44 },
      { angle: Math.PI * 0.15, col: 0x0284c7, title: "ESTUDIANTES", sub: "Viedma y Nodos", lblPos: [0.92, 1.04, 0.36], lblW: 0.50 },
      { angle: -Math.PI * 0.50, col: 0xb45309, title: "DIRECCIÓN", sub: "Art. 76", lblPos: [0.46, 1.18, -0.34], lblW: 0.46 }
    ];
    companions.forEach((c) => {
      const r = 0.48;
      const cx = Math.cos(c.angle) * r;
      const cz = Math.sin(c.angle) * r;
      const peer = engine.createClassicalFigure({
        scale: 0.44,
        pose: "dialogue",
        togaColor: c.col
      });
      peer.position.set(cx, 0, cz);
      peer.rotation.y = Math.atan2(-cx, -cz);
      rightScene.add(peer);

      const roleLbl = engine.createLabelSprite(c.title, c.sub, "#0f2d59", false, { x: c.lblW });
      roleLbl.position.set(c.lblPos[0], c.lblPos[1], c.lblPos[2]);
      rightScene.add(roleLbl);
    });

    // Anillos armilares dorados 360° envolviendo el diálogo colegiado
    const ring360Group = new THREE.Group();
    ring360Group.position.set(0, 0.56, 0);

    const rOuter = engine.createBrassArmillaryRing(0.54, 0.010);
    rOuter.rotation.x = Math.PI / 2.2;
    ring360Group.add(rOuter);

    const rInner = engine.createBrassArmillaryRing(0.44, 0.008);
    rInner.rotation.x = -Math.PI / 3;
    ring360Group.add(rInner);

    const warmLight = new THREE.PointLight(0x38bdf8, 1.35, 1.9);
    warmLight.position.y = 0.45;
    rightScene.add(warmLight);

    rightScene.add(ring360Group);
    engine.anim09_rings = ring360Group;
    sceneGroup.add(rightScene);

    // Etiqueta clara encima de la escena derecha
    const lblRightObject = engine.createLabelSprite(
      "OBJETO: POSIBLE MODELO 360°",
      "4 miradas para mejorar • Sin sanciones",
      "#0f625a",
      false,
      { x: 0.96 }
    );
    lblRightObject.position.set(0.84, 0.88, 0.08);
    sceneGroup.add(lblRightObject);

    // Placa museográfica frontal asentada sobre zócalo propio sin recortes ni solapes
    const frontPlaque = engine.createMountedPlaque(
      1.20,
      0.28,
      "PROBLEMA Y OBJETO A INDAGAR",
      "Posible tensión Art. 75 (cargo) vs. Art. 76 (capacitación)",
      ["CONTROL VIGENTE", "HIPÓTESIS FORMATIVA", "VIABILIDAD A EVALUAR"],
      { theme: "dark", floorY: -1.0385 - (-0.08) }
    );
    frontPlaque.position.set(0, 0, 1.24);
    sceneGroup.add(frontPlaque);

    g.add(sceneGroup);
  },

  animate(engine, t) {
    if (engine.anim09_heavy) {
      engine.anim09_heavy.position.y = 1.03 + Math.sin(t * 1.4) * 0.014;
    }
    if (engine.anim09_burdenFig?.upperBody) {
      engine.anim09_burdenFig.upperBody.rotation.x = 0.32 + Math.sin(t * 1.4) * 0.025;
    }
    if (engine.anim09_rings) {
      engine.anim09_rings.rotation.y = t * 0.48;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 10. PREGUNTA CENTRAL Y 5 DIMENSIONES: Foro Pentagonal con Figura Estilo David y Etiquetas
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_10"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.80, 0.22, -1.22);

    const pentGroup = new THREE.Group();
    pentGroup.position.set(0, -0.06, 0);

    // Pedestal central adelantado para el Investigador (Figura estilo David)
    const centerDais = new THREE.Mesh(
      new THREE.CylinderGeometry(0.34, 0.40, 0.12, 40),
      engine.marbleMat(0xf8f6f0, 0.30)
    );
    centerDais.position.set(0, -0.90, 0.16);
    centerDais.receiveShadow = true;
    pentGroup.add(centerDais);

    const thinkerFig = engine.createClassicalFigure({
      scale: 0.80,
      pose: "raisingOrb",
      togaColor: 0x0f2d59,
      laurel: true
    });
    thinkerFig.position.set(0, -0.84, 0.16);
    pentGroup.add(thinkerFig);

    // Esfera luminosa de la Pregunta Central flotando sobre la palma alzada
    const orbGroup = new THREE.Group();
    orbGroup.position.set(0.19, 0.44, 0.24);

    const questionOrb = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.105, 1),
      engine.glassMat(0x38bdf8, { roughness: 0.04, opacity: 0.92 })
    );
    orbGroup.add(questionOrb);

    const orbRing = engine.createBrassArmillaryRing(0.155, 0.008);
    orbGroup.add(orbRing);
    orbGroup.add(new THREE.PointLight(0xffd700, 1.4, 2.2));
    pentGroup.add(orbGroup);
    engine.anim10_orb = orbGroup;

    // Etiqueta maestra de la Pregunta Central
    const lblPregunta = engine.createLabelSprite(
      "PREGUNTA CENTRAL (2027)",
      "¿Sería viable un modelo 360° en el Departamento?",
      "#0f2d59",
      true,
      { x: 1.44 }
    );
    lblPregunta.position.set(0, 1.40, 0.12);
    pentGroup.add(lblPregunta);

    // Anfiteatro Semicircular de las 5 Dimensiones (sin giros que tapen textos ni colisiones)
    const dims = [
      {
        name: "1. NORMATIVA", sub: "Cero sanciones • CCT",
        x: -1.24, z: 0.24, h: 0.44, col: 0x0f2d59, lblX: -1.42, lblY: 0.44, kind: "scales"
      },
      {
        name: "2. TÉCNICA", sub: "Moodle/SIU • Anonimato",
        x: -0.74, z: -0.46, h: 0.68, col: 0x0ea5e9, lblX: -0.92, lblY: 0.58, kind: "lens"
      },
      {
        name: "3. ORGANIZACIONAL", sub: "Enlace Plan Art. 76",
        x: 0.00, z: -0.78, h: 0.88, col: 0xf59e0b, lblX: 0.00, lblY: 0.86, kind: "gear"
      },
      {
        name: "4. CULTURAL", sub: "Confianza Actoral",
        x: 0.74, z: -0.46, h: 0.68, col: 0x10b981, lblX: 0.92, lblY: 0.58, kind: "rings"
      },
      {
        name: "5. GOBERNANZA", sub: "Cogobierno y ADUNC",
        x: 1.24, z: 0.24, h: 0.44, col: 0x8b5cf6, lblX: 1.42, lblY: 0.44, kind: "council"
      }
    ];

    engine.anim10_arms = [];
    const orbOrigin = new THREE.Vector3(0.19, 0.44, 0.24);

    dims.forEach((d) => {
      const colMesh = engine.createClassicalColumn(d.h, 0.052, 0xcfa346, true);
      colMesh.position.set(d.x, -0.94 + d.h / 2, d.z);
      pentGroup.add(colMesh);

      const topY = -0.94 + d.h + 0.14;

      // Símbolo 3D representativo sobre cada columna según su dimensión
      let emblem;
      if (d.kind === "scales") {
        // Balanza normativa equilibrada
        const gScales = new THREE.Group();
        const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.24, 12), engine.goldMat(0xffd700));
        bar.rotation.z = Math.PI / 2;
        gScales.add(bar);
        [-0.11, 0.11].forEach((px) => {
          const pan = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.035, 0.015, 16), engine.brassMat(0xd4af37));
          pan.position.set(px, -0.05, 0);
          gScales.add(pan);
        });
        emblem = gScales;
      } else if (d.kind === "lens") {
        // Lente/Escudo técnico de anonimato digital
        const gLens = new THREE.Group();
        gLens.add(engine.createBrassArmillaryRing(0.11, 0.010));
        const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.095, 0.018, 24), engine.glassMat(d.col, { opacity: 0.88 }));
        glass.rotation.x = Math.PI / 2;
        gLens.add(glass);
        emblem = gLens;
      } else if (d.kind === "gear") {
        // Engranaje organizacional (conexión con Art. 76)
        const gGear = new THREE.Group();
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.10, 0.022, 12, 8), engine.brassMat(0xffd700));
        const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.065, 0), engine.glassMat(d.col, { opacity: 0.92 }));
        gGear.add(ring, gem);
        emblem = gGear;
      } else if (d.kind === "rings") {
        // Dos aros entrelazados de confianza cultural
        const gRings = new THREE.Group();
        const rA = engine.createBrassArmillaryRing(0.09, 0.009);
        rA.position.x = -0.04;
        const rB = engine.createBrassArmillaryRing(0.09, 0.009);
        rB.position.x = 0.04;
        rB.rotation.y = Math.PI / 3;
        gRings.add(rA, rB);
        emblem = gRings;
      } else {
        // Mesa redonda colegiada de gobernanza y ADUNC
        const gCouncil = new THREE.Group();
        const tbl = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.022, 24), engine.brassMat(0xd4af37));
        const dome = new THREE.Mesh(new THREE.OctahedronGeometry(0.065, 0), engine.glassMat(d.col, { opacity: 0.90 }));
        dome.position.y = 0.06;
        gCouncil.add(tbl, dome);
        emblem = gCouncil;
      }

      emblem.position.set(d.x, topY, d.z);
      pentGroup.add(emblem);
      engine.anim10_arms.push(emblem);

      // Haz dorado desde la Pregunta Central hacia cada Dimensión
      const targetPt = new THREE.Vector3(d.x, topY, d.z);
      const midPt = new THREE.Vector3().addVectors(orbOrigin, targetPt).multiplyScalar(0.5);
      midPt.y += 0.12;
      const beamCurve = new THREE.QuadraticBezierCurve3(orbOrigin, midPt, targetPt);
      const beam = new THREE.Mesh(
        new THREE.TubeGeometry(beamCurve, 16, 0.004, 6, false),
        engine.goldMat(0xffd700)
      );
      pentGroup.add(beam);

      // Etiqueta explícita sobre cada columna
      const dimLbl = engine.createLabelSprite(d.name, d.sub, "#0f2d59", false, { x: 0.66 });
      dimLbl.position.set(d.lblX !== undefined ? d.lblX : d.x, d.lblY, d.z);
      pentGroup.add(dimLbl);
    });

    // Placa museográfica frontal asentada sobre zócalo al ras del plinto
    const frontPlaque = engine.createMountedPlaque(
      1.16,
      0.28,
      "5 DIMENSIONES DE FACTIBILIDAD",
      "Pregunta Rectora del Estudio en el CURZAS (2027)",
      ["NORMATIVA • TÉCNICA • ORGANIZACIONAL • CULTURAL • GOBERNANZA"],
      { theme: "dark", floorY: -1.0385 - (-0.06) }
    );
    frontPlaque.position.set(0, 0, 1.24);
    pentGroup.add(frontPlaque);

    g.add(pentGroup);
    engine.anim10_group = pentGroup;
  },

  animate(engine, t) {
    if (engine.anim10_group) {
      engine.anim10_group.rotation.y = Math.sin(t * 0.35) * 0.12;
    }
    if (engine.anim10_orb) {
      engine.anim10_orb.rotation.y = -t * 0.8;
      engine.anim10_orb.position.y = 0.44 + Math.sin(t * 1.6) * 0.016;
    }
    if (engine.anim10_arms) {
      engine.anim10_arms.forEach((emblem, idx) => {
        emblem.rotation.y = t * 0.9 + idx * 0.8;
      });
    }
  }
};
