import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// A compact Three.js scene with advanced lighting and three look effects
// - Physical lighting with HDR-ish feel via environment map approximation
// - Bloom-like glow via additive transparent sprites
// - Filmic color tone mapping, ACES, and fog for depth
export default function ThreeShowcase() {
  const mountRef = useRef(null);
  const requestRef = useRef(0);

  useEffect(() => {
    const mountEl = mountRef.current;
    const width = mountEl.clientWidth;
    const height = 460;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mountEl.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0b10, 0.012);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(2.2, 1.6, 4.2);

    // Environment lighting approximation with a gradient cube texture
    const envSize = 64;
    const data = new Uint8Array(envSize * envSize * 3);
    for (let i = 0; i < envSize * envSize; i++) {
      const y = (i / envSize) | 0;
      const t = y / envSize;
      const r = 10 + 30 * (1 - t);
      const g = 20 + 40 * (1 - t);
      const b = 40 + 210 * t;
      data[i * 3] = r;
      data[i * 3 + 1] = g;
      data[i * 3 + 2] = b;
    }
    const envTex = new THREE.DataTexture(data, envSize, envSize, THREE.RGBFormat);
    envTex.needsUpdate = true;
    envTex.colorSpace = THREE.SRGBColorSpace;

    scene.background = null;

    // Lights: key, rim, fill with physically based materials
    const key = new THREE.DirectionalLight(0xffffff, 2.0);
    key.position.set(3, 5, 2);
    scene.add(key);

    const rim = new THREE.DirectionalLight(0x7cc6ff, 1.6);
    rim.position.set(-3, 2, -3);
    scene.add(rim);

    const fill = new THREE.HemisphereLight(0x8ec5ff, 0x0a0a0f, 0.8);
    scene.add(fill);

    // Ground
    const groundGeo = new THREE.PlaneGeometry(20, 20);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0f1116,
      metalness: 0.6,
      roughness: 0.9,
      envMap: envTex,
      envMapIntensity: 1.0,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.6;
    ground.receiveShadow = true;
    scene.add(ground);

    // Main object: a trio of glossy torus knots
    const knots = [];
    const geo = new THREE.TorusKnotGeometry(0.6, 0.18, 220, 36);
    const palette = [0x90caf9, 0xe1bee7, 0xa5d6a7];
    for (let i = 0; i < 3; i++) {
      const mat = new THREE.MeshPhysicalMaterial({
        color: palette[i],
        metalness: 0.95,
        roughness: 0.15,
        transmission: 0.15,
        thickness: 0.5,
        envMap: envTex,
        envMapIntensity: 1.5,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set((i - 1) * 1.6, 0, i === 1 ? -0.4 : 0.4);
      scene.add(mesh);
      knots.push(mesh);
    }

    // Add subtle sparkles using additive sprites (bokeh-ish glow)
    const spriteMat = new THREE.SpriteMaterial({
      color: new THREE.Color('#8B5CF6'),
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    for (let i = 0; i < 40; i++) {
      const s = new THREE.Sprite(spriteMat.clone());
      s.scale.setScalar(0.12 + Math.random() * 0.25);
      s.position.set((Math.random() - 0.5) * 6, Math.random() * 2, (Math.random() - 0.5) * 6);
      scene.add(s);
    }

    // Resize
    const onResize = () => {
      const w = mountEl.clientWidth;
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
      renderer.setSize(w, height);
    };
    window.addEventListener('resize', onResize);

    // Animate
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      knots.forEach((m, i) => {
        m.rotation.x = 0.4 + t * 0.25 + i * 0.1;
        m.rotation.y = 0.6 + t * 0.18 + i * -0.1;
      });
      key.intensity = 1.8 + Math.sin(t * 0.8) * 0.2;
      rim.intensity = 1.5 + Math.cos(t * 0.6) * 0.2;
      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(requestRef.current);
      renderer.dispose();
      mountEl.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white">Three.js Playground</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              Advanced lighting, physical materials, ACES tone mapping, fog depth, and additive glow for a cinematic look.
            </p>
          </div>
        </div>

        <div ref={mountRef} className="mt-8 w-full rounded-2xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-white/60 to-white/20 dark:from-neutral-900/60 dark:to-neutral-900/20 overflow-hidden"></div>
      </div>
    </section>
  );
}
