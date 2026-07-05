"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from "@react-three/drei"
import * as THREE from "three"

function WaveGrid() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color("#1e3a8a") },
      uColorB: { value: new THREE.Color("#3b82f6") },
    }),
    []
  )

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime * 0.3
    }
  })

  const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying float vElevation;
    
    void main() {
      vUv = uv;
      vec3 pos = position;
      
      float elevation = sin(pos.x * 2.0 + uTime) * 0.15 
                      + sin(pos.y * 2.5 + uTime * 0.8) * 0.12
                      + sin(pos.x * 1.5 - pos.y * 1.5 + uTime * 1.2) * 0.1;
      
      pos.z += elevation;
      vElevation = elevation;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `

  const fragmentShader = `
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform float uTime;
    varying vec2 vUv;
    varying float vElevation;
    
    void main() {
      float mixStrength = (vElevation + 0.3) * 1.5;
      vec3 color = mix(uColorA, uColorB, mixStrength);
      
      // Add grid lines
      float lineX = smoothstep(0.02, 0.0, mod(vUv.x * 30.0, 1.0) - 0.95);
      float lineY = smoothstep(0.02, 0.0, mod(vUv.y * 30.0, 1.0) - 0.95);
      float lines = max(lineX, lineY) * 0.4;
      
      color += vec3(lines * 0.5, lines * 0.7, lines);
      
      // Fade edges
      float fadeX = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x);
      float fadeY = smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
      float alpha = fadeX * fadeY * 0.7;
      
      gl_FragColor = vec4(color, alpha);
    }
  `

  return (
    <mesh ref={meshRef} rotation={[-Math.PI * 0.4, 0, 0]} position={[0, -1, -2]}>
      <planeGeometry args={[12, 8, 100, 100]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function FloatingOrbs() {
  const orbsData = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 3 - 2,
      ] as [number, number, number],
      scale: 0.08 + Math.random() * 0.15,
      speed: 0.5 + Math.random() * 1.5,
      rotationSpeed: 0.5 + Math.random(),
    }))
  }, [])

  return (
    <>
      {orbsData.map((orb, i) => (
        <Float key={i} speed={orb.speed} rotationIntensity={orb.rotationSpeed} floatIntensity={1}>
          <Sphere args={[orb.scale, 16, 16]} position={orb.position}>
            <MeshDistortMaterial
              color="#60a5fa"
              emissive="#3b82f6"
              emissiveIntensity={0.5}
              distort={0.3}
              speed={2}
              transparent
              opacity={0.8}
            />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

function GlowingSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group position={[0, 0.5, -3]}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]}>
        <MeshWobbleMaterial
          color="#1e40af"
          emissive="#3b82f6"
          emissiveIntensity={0.3}
          factor={0.15}
          speed={1}
          transparent
          opacity={0.4}
          wireframe
        />
      </Sphere>
      {/* Inner glow */}
      <Sphere args={[1, 32, 32]}>
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} />
      </Sphere>
    </group>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const { positions, colors } = useMemo(() => {
    const count = 200
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 3
      
      colors[i * 3] = 0.4 + Math.random() * 0.2
      colors[i * 3 + 1] = 0.6 + Math.random() * 0.2
      colors[i * 3 + 2] = 1
    }
    
    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#0A1026"]} />
      <fog attach="fog" args={["#0A1026", 5, 15]} />
      
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#60a5fa" />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color="#3b82f6" />
      
      <WaveGrid />
      <GlowingSphere />
      <FloatingOrbs />
      <ParticleField />
    </>
  )
}

export function Hero3DBackground() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
    }
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#0A1026]" />
  }

  return (
    <div ref={containerRef} className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color("#0A1026"))
        }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
