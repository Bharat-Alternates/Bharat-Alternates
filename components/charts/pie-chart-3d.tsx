"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

interface PieChartData {
  label: string
  value: number
  color: string
}

interface PieChart3DProps {
  data: PieChartData[]
  height?: number
  title?: string
  interactive?: boolean
}

export default function PieChart3D({ data, height = 300, title, interactive = true }: PieChart3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Initialize scene
    const scene = new THREE.Scene()
    sceneRef.current = scene
    scene.background = new THREE.Color(0xffffff)

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / height, 0.1, 1000)
    cameraRef.current = camera
    camera.position.set(0, 0, 5)

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    rendererRef.current = renderer
    renderer.setSize(containerRef.current.clientWidth, height)
    containerRef.current.appendChild(renderer.domElement)

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Add controls if interactive
    if (interactive) {
      const controls = new OrbitControls(camera, renderer.domElement)
      controlsRef.current = controls
      controls.enableDamping = true
      controls.dampingFactor = 0.05
      controls.rotateSpeed = 0.5
      controls.enableZoom = true
      controls.minDistance = 3
      controls.maxDistance = 10
    }

    // Create pie chart
    createPieChart(data)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      if (controlsRef.current) {
        controlsRef.current.update()
      } else {
        // Auto-rotate if not interactive
        scene.rotation.y += 0.005
      }

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return

      const width = containerRef.current.clientWidth
      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
      rendererRef.current?.dispose()
    }
  }, [data, height, interactive])

  const createPieChart = (chartData: PieChartData[]) => {
    if (!sceneRef.current) return

    // Calculate total value
    const total = chartData.reduce((sum, item) => sum + item.value, 0)

    // Create pie segments
    let startAngle = 0
    const radius = 1.5
    const height = 0.3
    const group = new THREE.Group()

    chartData.forEach((item, index) => {
      const angle = (item.value / total) * Math.PI * 2
      const endAngle = startAngle + angle

      // Create pie segment
      const shape = new THREE.Shape()
      shape.moveTo(0, 0)
      shape.lineTo(radius * Math.cos(startAngle), radius * Math.sin(startAngle))

      // Add arc
      const arcSegments = Math.ceil(angle * 10) + 1
      for (let i = 1; i <= arcSegments; i++) {
        const segmentAngle = startAngle + (angle * i) / arcSegments
        shape.lineTo(radius * Math.cos(segmentAngle), radius * Math.sin(segmentAngle))
      }

      shape.lineTo(0, 0)

      // Extrude settings
      const extrudeSettings = {
        steps: 1,
        depth: height,
        bevelEnabled: false,
      }

      // Create geometry and material
      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
      const color = new THREE.Color(item.color)
      const material = new THREE.MeshPhongMaterial({
        color: color,
        shininess: 50,
        side: THREE.DoubleSide,
      })

      // Create mesh
      const mesh = new THREE.Mesh(geometry, material)
      mesh.rotation.x = -Math.PI / 2
      mesh.position.y = index * 0.02 // Slight offset for each segment for better visibility

      // Add to group
      group.add(mesh)

      // Create edge for better visibility
      const edgesGeometry = new THREE.EdgesGeometry(geometry)
      const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 1 })
      const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial)
      edges.rotation.x = -Math.PI / 2
      edges.position.y = index * 0.02

      group.add(edges)

      startAngle = endAngle
    })

    // Add group to scene
    group.rotation.x = 0.5 // Tilt for 3D effect
    sceneRef.current.add(group)
  }

  return (
    <div className="w-full">
      {title && <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>}
      <div ref={containerRef} style={{ height: `${height}px` }} className="w-full"></div>
      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-4 h-4 mr-2 rounded-sm" style={{ backgroundColor: item.color }}></div>
            <span className="text-sm">
              {item.label}: {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
