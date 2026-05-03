"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Scene() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { camera } = useThree();

  const mouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const particleGeo = useMemo(() => {
    const positions = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 22;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scrollDrift = scrollY.current * 0.003;
    const floatY = Math.sin(t * 0.5) * 0.2;

    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.08;
      outerRef.current.rotation.y = t * 0.12;
      outerRef.current.position.y = floatY - scrollDrift;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = t * 0.08;
      innerRef.current.rotation.y = t * 0.12;
      innerRef.current.position.y = floatY - scrollDrift;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.x = -t * 0.04;
      pointsRef.current.rotation.y = -t * 0.07;
      pointsRef.current.position.y = floatY * 0.5 - scrollDrift * 0.5;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.02;
    }

    const cam = camera as THREE.PerspectiveCamera;
    cam.position.x += (mouse.current.x * 0.9 - cam.position.x) * 0.04;
    cam.position.y += (mouse.current.y * 0.9 - cam.position.y) * 0.04;
    cam.lookAt(0, 0, 0);
  });

  return (
    <>
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial
          color="#ff5722"
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshBasicMaterial color="#ff5722" transparent opacity={0.06} />
      </mesh>

      <points ref={pointsRef}>
        <icosahedronGeometry args={[2.5, 2]} />
        <pointsMaterial
          color="#f4f1ea"
          size={0.025}
          transparent
          opacity={0.45}
          sizeAttenuation
        />
      </points>

      <points ref={particlesRef} geometry={particleGeo}>
        <pointsMaterial
          color="#f4f1ea"
          size={0.014}
          transparent
          opacity={0.22}
          sizeAttenuation
        />
      </points>
    </>
  );
}

export default function Background3D() {
  return (
    <div
      className="fixed inset-0"
      style={{ zIndex: 0, pointerEvents: "none" }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
