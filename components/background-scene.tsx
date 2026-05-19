"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function BackgroundScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0.7, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const isMobile = window.innerWidth < 768;
    const particleCount = reducedMotion ? 180 : isMobile ? 420 : 760;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const colorA = new THREE.Color("#0EA5E9");
    const colorB = new THREE.Color("#F59E0B");
    const colorC = new THREE.Color("#F8FAFC");

    for (let i = 0; i < particleCount; i += 1) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 16;
      positions[i3 + 1] = (Math.random() - 0.5) * 9;
      positions[i3 + 2] = (Math.random() - 0.5) * 8;
      const c = Math.random() > 0.75 ? colorB : Math.random() > 0.4 ? colorA : colorC;
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.78,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const waveGeometry = new THREE.PlaneGeometry(18, 6, isMobile ? 56 : 96, isMobile ? 14 : 24);
    const waveMaterial = new THREE.MeshBasicMaterial({
      color: "#0EA5E9",
      transparent: true,
      opacity: 0.11,
      wireframe: true
    });
    const waves = new THREE.Mesh(waveGeometry, waveMaterial);
    waves.rotation.x = -Math.PI / 2.5;
    waves.position.y = -2.6;
    waves.position.z = -1.2;
    scene.add(waves);

    const clock = new THREE.Clock();
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);
    let frame = 0;
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      points.rotation.y = reducedMotion ? 0 : elapsed * 0.018;
      points.rotation.x = reducedMotion ? 0 : Math.sin(elapsed * 0.15) * 0.025;
      waves.position.y = -2.55 + (reducedMotion ? 0 : Math.sin(elapsed * 0.8) * 0.08);
      waves.rotation.z = reducedMotion ? 0 : Math.sin(elapsed * 0.18) * 0.035;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      waveGeometry.dispose();
      waveMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-grand-line">
      <div ref={mountRef} className="absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,.35)_0%,rgba(2,6,23,.35)_42%,#020617_96%)]" />
      <div className="horizon-glow absolute inset-x-0 top-[18%] h-px opacity-80" />
      <div className="fog-layer absolute inset-0 opacity-60" />
      <div className="light-streaks absolute inset-0 opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-[38vh] wave-band opacity-90" />
    </div>
  );
}
