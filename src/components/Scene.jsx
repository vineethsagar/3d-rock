import React, { Suspense } from "react";
import * as THREE from "three";
import { extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Box from "./box";
import CustomBox from "./customBox";
extend({ OrbitControls });

const Scene = () => {
  const {
    camera,
    gl: { domElement }
  } = useThree();

  return (
    <Suspense fallback={null}>
      {/* <Box /> */}
      <CustomBox />
      <orbitControls args={[camera, domElement]} />
    </Suspense>
  );
};
export default Scene;
