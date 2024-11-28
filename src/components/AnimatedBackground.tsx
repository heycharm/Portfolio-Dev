import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Points() {
  const count = 2000;
  const ref = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      
      positions[i * 3] = 15 * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = 15 * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = 15 * Math.cos(theta);
    }
    
    return positions;
  }, [count]);

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" sizeAttenuation transparent opacity={0.8} />
    </points>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 20] }}>
        <ambientLight intensity={0.5} />
        <Points />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}