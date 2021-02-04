import React, { Suspense } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useThree } from "react-three-fiber";
import img from "./rock2.png";
import Scene from "./Scene";
const Rock = () => {
  // const url = "https://www.abimpex.com/prd/bianco-antico-granite.jpg";
  const image = useLoader(THREE.TextureLoader, img);

  return (
    <>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <color attach="background" args={["black"]} />
        <ambientLight intensity={3} color="white" />
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
        {/* <pointLight position={[0, 0, 0]} /> */}
        <Scene />
      </Canvas>
    </>
  );
};
export default Rock;
