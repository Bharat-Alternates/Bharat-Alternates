"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"
import * as THREE from "three"
import { AnimatedButton } from "@/components/ui/animated-button"

// Globe component with dots representing major financial centers
function Globe({ radius = 2 }) {
  const globeRef = useRef<THREE.Mesh>(null)
  const dotsGroup = useRef<THREE.Group>(null)
  const { viewport } = useThree()
  const isMobile = viewport.width < 5

  // Rotate the globe slowly
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001
    }
    if (dotsGroup.current) {
      dotsGroup.current.rotation.y += 0.001
    }
  })

  // Financial centers with their coordinates (longitude, latitude)
  const financialCenters = [
    { name: "Mumbai", lon: 72.8777, lat: 19.076, size: 0.06, color: "#4c6ef5" },
    { name: "Delhi", lon: 77.1025, lat: 28.7041, size: 0.05, color: "#4c6ef5" },
    { name: "Bangalore", lon: 77.5946, lat: 12.9716, size: 0.05, color: "#4c6ef5" },
    { name: "Chennai", lon: 80.2707, lat: 13.0827, size: 0.045, color: "#4c6ef5" },
    { name: "Kolkata", lon: 88.3639, lat: 22.5726, size: 0.045, color: "#4c6ef5" },
    { name: "Hyderabad", lon: 78.4867, lat: 17.385, size: 0.045, color: "#4c6ef5" },
    { name: "Ahmedabad", lon: 72.5714, lat: 23.0225, size: 0.04, color: "#4c6ef5" },
    { name: "Pune", lon: 73.8567, lat: 18.5204, size: 0.04, color: "#4c6ef5" },
    // International financial centers
    { name: "New York", lon: -74.006, lat: 40.7128, size: 0.04, color: "#12b886" },
    { name: "London", lon: -0.1278, lat: 51.5074, size: 0.04, color: "#12b886" },
    { name: "Tokyo", lon: 139.6917, lat: 35.6895, size: 0.04, color: "#12b886" },
    { name: "Singapore", lon: 103.8198, lat: 1.3521, size: 0.04, color: "#12b886" },
    { name: "Hong Kong", lon: 114.1694, lat: 22.3193, size: 0.04, color: "#12b886" },
    { name: "Dubai", lon: 55.2708, lat: 25.2048, size: 0.04, color: "#12b886" },
  ]

  // Convert lat/lon to 3D coordinates
  const latLonToVector3 = (lat: number, lon: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (lon + 180) * (Math.PI / 180)
    const x = -radius * Math.sin(phi) * Math.cos(theta)
    const z = radius * Math.sin(phi) * Math.sin(theta)
    const y = radius * Math.cos(phi)
    return new THREE.Vector3(x, y, z)
  }

  return (
    <>
      {/* Globe sphere */}
      <Sphere ref={globeRef} args={[radius, 64, 64]} position={[0, 0, 0]}>
        <meshPhongMaterial
          color="#1a1a4a"
          transparent={true}
          opacity={0.8}
          emissive="#000033"
          emissiveIntensity={0.1}
          shininess={5}
        />
      </Sphere>

      {/* Grid lines */}
      <lineSegments>
        <sphereGeometry args={[radius * 1.001, 48, 24]} />
        <lineBasicMaterial color="#4c6ef5" transparent opacity={0.15} />
      </lineSegments>

      {/* Financial centers dots */}
      <group ref={dotsGroup}>
        {financialCenters.map((center, index) => {
          const position = latLonToVector3(center.lat, center.lon, radius * 1.02)
          return (
            <mesh key={index} position={position}>
              <sphereGeometry args={[isMobile ? center.size * 0.7 : center.size, 16, 16]} />
              <meshBasicMaterial color={center.color} />
            </mesh>
          )
        })}
      </group>

      {/* Highlight India with a subtle glow */}
      <mesh position={latLonToVector3(20.5937, 78.9629, radius * 1.03)}>
        <sphereGeometry args={[radius * 0.3, 32, 32]} />
        <meshBasicMaterial color="#4c6ef5" transparent opacity={0.1} />
      </mesh>
    </>
  )
}

// Animated particles floating around the globe
function Particles({ count = 1000 }) {
  const points = useRef<THREE.Points>(null)

  // Create particles in a spherical distribution
  const particlesPosition = new Float32Array(count * 3)
  const particlesSizes = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    const radius = 2.5 + Math.random() * 2
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)

    particlesPosition[i3] = radius * Math.sin(phi) * Math.cos(theta)
    particlesPosition[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    particlesPosition[i3 + 2] = radius * Math.cos(phi)

    particlesSizes[i] = Math.random() * 2
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.0005
      points.current.rotation.x += 0.0002
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particlesPosition} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={particlesSizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

// Main 3D scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Globe />
      <Particles />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        rotateSpeed={0.2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

export default function Hero3DGlobe() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#020b1c] to-[#0c1f4c] pt-16 text-white">
      {/* 3D Globe */}
      <div className="absolute inset-0 z-0">
        {mounted && (
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <Scene />
          </Canvas>
        )}
      </div>

      {/* Content overlay */}
      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
        <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-blue-50 [text-shadow:_0_2px_10px_rgba(0,0,0,0.3)]">
          India's Most Trusted Platform for PMS & AIF Investments
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 md:text-xl [text-shadow:_0_1px_5px_rgba(0,0,0,0.3)]">
          Expert guidance, transparent insights, and a seamless investment experience tailored for you.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Get Started
          </AnimatedButton>
          <AnimatedButton href="/about" variant="outline" size="lg">
            Learn More
          </AnimatedButton>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="container relative z-10 mx-auto px-4 pb-20">
        <div className="mt-10 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Assets Under Management" value="₹5000 Cr+" change="+15%" color="#3b82f6" />
          <StatCard title="Portfolio Performance" value="18.5% CAGR" change="+2.3%" color="#10b981" />
          <StatCard title="Client Growth" value="500+" change="+9%" color="#8b5cf6" />
          <StatCard title="Investment Strategies" value="12+" color="#f97316" />
        </div>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  change,
  color,
}: {
  title: string
  value: string
  change?: string
  color: string
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-blue-800/30 bg-[#051230]/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-blue-100">{title}</h3>
      </div>
      <div className="mb-2">
        <div className="text-2xl font-bold tracking-tight">{value}</div>
        {change && (
          <div className="mt-1 text-sm text-green-400">
            {change}
            <span className="ml-2 text-blue-200">from last year</span>
          </div>
        )}
      </div>
    </div>
  )
}
