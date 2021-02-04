import { Suspense, useMemo, useRef } from "react";
import { extend, useFrame, useLoader } from "react-three-fiber";
import { Html, Text } from "@react-three/drei";

import * as THREE from "three";
import one from "./a1-crop.jpg";
import two from "./a2-crop.jpg";
import three from "./a3-crop.jpg";
import four from "./a4-crop.jpg";
import five from "./a5-crop.jpg";
import six from "./a6-crop.jpg";
import rock from "./rock2.png";
import { TextureLoader } from "three";

const CustomBox = () => {
  const loader = new THREE.TextureLoader();
  loader.crossOrigin = "Anonymous";
  loader.mimeType = "image/*";
  loader.responseType = "blob";
  const imageN = loader.load(
    "https://www.abimpex.com/prd/bianco-antico-granite.jpg",
    (res) => {
      console.log("image", res);
    }
  );
  // const image1 = useLoader(
  //   loader,
  //   "https://www.abimpex.com/prd/bianco-antico-granite.jpg"
  // );
  /// https://picsum.photos/200
  const image1 = new THREE.TextureLoader().load(one);
  const image7 = useLoader(THREE.TextureLoader, "https://picsum.photos/200");
  const image2 = useLoader(THREE.TextureLoader, two);
  const image3 = useLoader(THREE.TextureLoader, three);
  const image4 = useLoader(THREE.TextureLoader, six);
  const image5 = useLoader(THREE.TextureLoader, five);
  const image6 = useLoader(THREE.TextureLoader, four);

  const text = new TextureLoader().load(
    "https://www.abimpex.com/prd/bianco-antico-granite.jpg"
  );

  const l = fetch(
    "https://95.216.149.208:5000/image/bianco-antico-granite.jpg",
    {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "https://6rso3.csb.app/",
      "Access-Control-Allow-Headers": "*"
    }
  )
    .then((res) => console.log("fetch", res))
    .catch((err) => console.log(err));

  const dimension = [
    {
      side: "Side1",
      image: "https://www.abimpex.com/prd/bianco-antico-granite.jpg",
      topLength: 20,
      leftHeight: 10,
      rightHeight: 10,
      bottomLength: 20,
      isCuttingEdge: false
    },
    {
      side: "Side2",
      image: "https://www.abimpex.com/prd/bianco-antico-granite.jpg",
      topLength: 10,
      leftHeight: 10,
      rightHeight: 10,
      bottomLength: 10,
      isCuttingEdge: false
    },
    {
      side: "Side3",
      image: "https://www.abimpex.com/prd/bianco-antico-granite.jpg",
      topLength: 20,
      leftHeight: 10,
      rightHeight: 10,
      bottomLength: 20,
      isCuttingEdge: false
    },
    {
      side: "Side4",
      image: "https://www.abimpex.com/prd/bianco-antico-granite.jpg",
      topLength: 10,
      leftHeight: 10,
      rightHeight: 10,
      bottomLength: 10,
      isCuttingEdge: false
    },
    {
      side: "Side5",
      image: "https://www.abimpex.com/prd/bianco-antico-granite.jpg",
      topLength: 20,
      leftHeight: 10,
      rightHeight: 10,
      bottomLength: 20,
      isCuttingEdge: false
    },
    {
      side: "Side6",
      image: "https://www.abimpex.com/prd/bianco-antico-granite.jpg",
      topLength: 20,
      leftHeight: 10,
      rightHeight: 10,
      bottomLength: 20,
      isCuttingEdge: false
    }
  ];

  const ref = useRef();

  const cubeVertices = [
    [0, 0, 0], //0
    [2, 0, 0], // 1
    [0, 0, 1], // 2
    [2, 0, 1], // 3
    [0, 1, 0], // 4
    [2, 1, 0], // 5
    [0, 1, 1], // 6
    [2, 1, 1] // 7
  ];
  /**
  const cubeVertices = [
    [0, 0, 0], //0
    [20, 0, 0], // 1
    [0, 0, 10], // 2
    [20, 0, 10], // 3
    [0, 10, 0], // 4
    [20, 10, 0], // 5
    [0, 10, 10], // 6
    [20, 10, 10] // 7
  ]; */
  const cubeFaces = [
    [0, 3, 2],
    [0, 1, 3],
    [1, 7, 3],
    [1, 5, 7],
    [5, 6, 7],
    [5, 4, 6],
    [4, 2, 6],
    [4, 0, 2],
    [2, 7, 6],
    [2, 3, 7],
    [4, 1, 0],
    [4, 5, 1]
  ];

  const vertices = useMemo(
    () => cubeVertices.map((v) => new THREE.Vector3(...v)),
    []
  );
  const faces = useMemo(() => cubeFaces.map((f) => new THREE.Face3(...f)), []);
  // useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));

  return (
    <Suspense fallback={null}>
      <mesh ref={ref}>
        <boxGeometry args={[2, 2, 4]} attach="geometry" />
        <meshStandardMaterial attachArray="material" map={image1} />
        <meshStandardMaterial map={image2} attachArray="material" />
        <meshStandardMaterial map={image3} attachArray="material" />
        <meshStandardMaterial map={image4} attachArray="material" />
        <meshStandardMaterial map={image5} attachArray="material" />
        <meshStandardMaterial map={image6} attachArray="material" />
      </mesh>
    </Suspense>
  );
};
export default CustomBox;
/**
 * vertices={vertices}
          faces={faces}
          onUpdate={(self) => self.computeFaceNormals()}
 */
