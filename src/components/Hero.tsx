import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, PresentationControls, ContactShadows, Float } from '@react-three/drei'
import * as THREE from 'three'

function AbstractMaterialSculpture() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
            meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.1
        }
    })

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
                <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                <meshPhysicalMaterial
                    color="#D9CDB8" // Sand
                    metalness={0.1}
                    roughness={0.4}
                    clearcoat={0.5}
                    clearcoatRoughness={0.2}
                    envMapIntensity={1}
                />
            </mesh>
        </Float>
    )
}

export function Hero() {
    return (
        <section className="relative w-full h-screen bg-ivory overflow-hidden flex items-center justify-center">
            {/* 3D Canvas Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                    <PresentationControls
                        global
                        snap={true}
                        rotation={[0, 0.3, 0]}
                        polar={[-Math.PI / 3, Math.PI / 3]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                    >
                        <AbstractMaterialSculpture />
                    </PresentationControls>
                    <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#2A2A2A" />
                    <Environment preset="city" />
                </Canvas>
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 pointer-events-none flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl md:text-8xl font-serif text-charcoal tracking-tight">
                    SAAD FILALI
                </h1>
                <h2 className="text-3xl md:text-5xl font-serif text-charcoal/80 mt-2 tracking-widest">
                    STUDIO
                </h2>
                <p className="mt-8 text-charcoal/60 font-sans tracking-widest uppercase text-sm md:text-base max-w-md">
                    Matière • Objet • Espace
                </p>
            </div>
        </section>
    )
}
