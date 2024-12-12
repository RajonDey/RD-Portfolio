import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  Preload,
  Decal,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Box = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = React.useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.2;
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -10]} />
      <boxGeometry />
      <meshStandardMaterial />
      {/* <Html occlude distanceFactor={1.5} position={[0, 0, 0.51]} transform>
        <span>HI</span>
      </Html> */}
      <Decal
        position={[0, 0, 1]}
        rotation={[0, 0, 0]}
        scale={1}
        map={decal}
        flatShading
      />
    </mesh>
  );
};

const BoxCanvas = ({ icon }) => {
  return (
    <Canvas camera={{ position: [2, 1, 5], fov: 25 }}>
      <Suspense fallback={<CanvasLoader />}>
        <Box imgUrl={icon} />
        <OrbitControls makeDefault />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BoxCanvas;
