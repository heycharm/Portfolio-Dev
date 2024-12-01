import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import PropTypes from 'prop-types';
// import Loader from '../Loader';

const Ball = ({ imgUrl }) => {
  const defaultTexture = '/default-image.png'; // Replace with actual fallback URL
  const [decal] = useTexture([imgUrl || defaultTexture]);

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 0, 0.1]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense>
        <OrbitControls enableZoom={false} target={[0, 0, 0]} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default BallCanvas;
