import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import gsap from 'gsap';

const ParticleField = () => {
  const points = useRef();
  
  useEffect(() => {
    if (points.current) {
      gsap.to(points.current.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={new Float32Array(3000).map(() => (Math.random() - 0.5) * 10)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" sizeAttenuation transparent opacity={0.6} />
    </points>
  );
};

const Hero = () => {
  return (
    <div className="h-screen w-full relative bg-black">
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ParticleField />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      
      <div className="absolute inset-0 flex items-center justify-center text-white z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold mb-4"
          >
            CHINMAY PUNDIR
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            FULL STACK WEB DEVELOPER
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
           <a target='blank' href="https://drive.google.com/file/d/1vVg21o_S-UhPuAig4zdcnJUExLs8bQoc/view?usp=drive_link">DOWNLOAD RESUME</a> 
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;