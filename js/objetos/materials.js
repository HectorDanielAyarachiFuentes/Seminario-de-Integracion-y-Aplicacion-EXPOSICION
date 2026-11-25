/**
 * =============================================================================
 * OBJETOS 3D — PALETA DE MATERIALES EDITORIALES MATE (OPCIÓN A • DISEÑO INDUSTRIAL)
 * Presentación de Tesina • CURZAS - UNCo
 * =============================================================================
 * Fábrica de materiales PBR equilibrados (cerámica arquitectónica mate, basalto
 * micro-granulado, latón champán cepillado y acrílico óptico esmerilado).
 */

(function () {
  let _ceramicTexture = null;
  let _brushedMetalTexture = null;
  let _slateTexture = null;

  function applyAnisotropy(tex) {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = 4;
    return tex;
  }

  /** Textura sutil de cerámica arquitectónica mate (sin vetas ni ruido repetitivo) */
  function getCeramicTexture() {
    if (_ceramicTexture) return _ceramicTexture;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#f7f5f0";
    ctx.fillRect(0, 0, 512, 512);

    // Micro-calidez mineral casi imperceptible (2% variación) para tactilidad sin patrón 90s
    for (let i = 0; i < 1800; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const r = 0.8 + Math.random() * 1.6;
      ctx.fillStyle = Math.random() > 0.5 ? "rgba(255, 255, 255, 0.035)" : "rgba(100, 116, 139, 0.025)";
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    _ceramicTexture = applyAnisotropy(new THREE.CanvasTexture(canvas));
    return _ceramicTexture;
  }

  /** Textura de satinado lineal fino para latón champán y aluminio arquitectónico */
  function getBrushedMetalTexture() {
    if (_brushedMetalTexture) return _brushedMetalTexture;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#b8b8b8";
    ctx.fillRect(0, 0, 512, 512);

    for (let y = 0; y < 512; y += 1) {
      const v = 184 + Math.floor((Math.random() - 0.5) * 18);
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(0, y, 512, 1);
    }

    _brushedMetalTexture = applyAnisotropy(new THREE.CanvasTexture(canvas));
    return _brushedMetalTexture;
  }

  /** Micro-relieve suave de pizarra anodizada / basalto industrial */
  function getSlateTexture() {
    if (_slateTexture) return _slateTexture;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#888888";
    ctx.fillRect(0, 0, 512, 512);

    for (let i = 0; i < 2600; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const r = 0.6 + Math.random() * 1.4;
      ctx.fillStyle = Math.random() > 0.5 ? "rgba(255, 255, 255, 0.06)" : "rgba(15, 23, 42, 0.08)";
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    _slateTexture = applyAnisotropy(new THREE.CanvasTexture(canvas));
    return _slateTexture;
  }

  /** Suaviza el amarillo neón saturado (#ffd700) hacia oro champán de diseño industrial */
  function harmonizeMetalHex(color) {
    if (color === 0xffd700) return 0xe0ba56;
    if (color === 0xfff8dc || color === 0xffea00) return 0xe5c770;
    return color;
  }

  /** Evita blancos clínicos quemados, manteniéndolos en marfil editorial suave */
  function harmonizeCeramicHex(color) {
    if (color === 0xffffff || color === 0xf8fafc) return 0xf6f4ee;
    return color;
  }

  window.Scene3DMaterials = {
    /** Basalto / pizarra arquitectónica mate micro-texturada */
    graniteMat(color = 0x1e293b, roughness = 0.56, metalness = 0.14) {
      const tex = getSlateTexture();
      return new THREE.MeshStandardMaterial({
        color,
        roughness: Math.max(0.42, roughness),
        metalness,
        bumpMap: tex,
        bumpScale: 0.004,
        envMapIntensity: 0.72
      });
    },

    /** Latón champán satinado con reflejos de estudio IBL */
    brassMat(color = 0xcfa346, roughness = 0.28, metalness = 0.88) {
      const tex = getBrushedMetalTexture();
      return new THREE.MeshStandardMaterial({
        color: harmonizeMetalHex(color),
        roughness: Math.max(0.24, roughness),
        metalness,
        roughnessMap: tex,
        envMapIntensity: 1.18
      });
    },

    /** Oro satinado armónico (sin brillo neón plástico) */
    goldMat(color = 0xdfba52) {
      const tex = getBrushedMetalTexture();
      return new THREE.MeshStandardMaterial({
        color: harmonizeMetalHex(color),
        roughness: 0.22,
        metalness: 0.92,
        roughnessMap: tex,
        envMapIntensity: 1.25
      });
    },

    /** Cerámica / porcelana mate editorial cálida */
    marbleMat(color = 0xf6f4ee, roughness = 0.60) {
      const tex = getCeramicTexture();
      return new THREE.MeshStandardMaterial({
        color: harmonizeCeramicHex(color),
        roughness: Math.max(0.52, roughness),
        metalness: 0.02,
        map: tex,
        bumpMap: tex,
        bumpScale: 0.0025,
        envMapIntensity: 0.55
      });
    },

    /** Acrílico óptico esmerilado de estudio (Dieter Rams / Bauhaus) */
    glassMat(color = 0xf8fafc, opts = {}) {
      const cleanOpts = { ...opts };
      delete cleanOpts.transmission;
      delete cleanOpts.thickness;
      delete cleanOpts.ior;

      return new THREE.MeshPhysicalMaterial({
        color: harmonizeCeramicHex(color),
        roughness: cleanOpts.roughness !== undefined ? cleanOpts.roughness : 0.14,
        metalness: 0.08,
        transparent: true,
        opacity: cleanOpts.opacity !== undefined ? cleanOpts.opacity : 0.54,
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
        reflectivity: 0.85,
        envMapIntensity: 1.32,
        ...cleanOpts,
        transmission: 0
      });
    }
  };
})();
