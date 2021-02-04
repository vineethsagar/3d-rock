import React from "react";
import * as THREE from "three";
import { useLoader } from "react-three-fiber";
import img from "./rock2.png";

const Box = () => {
  const image = useLoader(THREE.TextureLoader, img);

  return (
    <>
      <mesh>
        <boxGeometry attach="geometry" args={[2, 2, 5]} />
        <meshStandardMaterial map={image} attach="material" />
      </mesh>
    </>
  );
};
export default Box;
