import { useGLTF } from "@react-three/drei";

import { GroupProps } from "@react-three/fiber";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh; // This ensures that all nodes are recognized as meshes
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

const Model2 = (props: GroupProps) => {
  const { nodes, materials } = useGLTF("./models/tractor_01/scene.gltf") as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_3?.geometry} material={materials.acmat_11} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4?.geometry} material={materials.acmat_16} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5?.geometry} material={materials.acmat_2} />
        <mesh castShadow receiveShadow geometry={nodes.Object_6?.geometry} material={materials.acmat_3} />
        <mesh castShadow receiveShadow geometry={nodes.Object_7?.geometry} material={materials.acmat_4} />
        <mesh castShadow receiveShadow geometry={nodes.Object_8?.geometry} material={materials.acmat_14} />
        <mesh castShadow receiveShadow geometry={nodes.Object_10?.geometry} material={materials.acmat_15} />
        <mesh castShadow receiveShadow geometry={nodes.Object_11?.geometry} material={materials.acmat_17} />
        <mesh castShadow receiveShadow geometry={nodes.Object_12?.geometry} material={materials.acmat_6} />
        <mesh castShadow receiveShadow geometry={nodes.Object_13?.geometry} material={materials.acmat_7} />
        <mesh castShadow receiveShadow geometry={nodes.Object_14?.geometry} material={materials.acmat_8} />
        <mesh castShadow receiveShadow geometry={nodes.Object_15?.geometry} material={materials.acmat_9} />
        <mesh castShadow receiveShadow geometry={nodes.Object_16?.geometry} material={materials.acmat_0} />
        <mesh castShadow receiveShadow geometry={nodes.Object_17?.geometry} material={materials.acmat_0} />
        <mesh castShadow receiveShadow geometry={nodes.Object_18?.geometry} material={materials.acmat_0} />
        <mesh castShadow receiveShadow geometry={nodes.Object_19?.geometry} material={materials.acmat_0} />
        <mesh castShadow receiveShadow geometry={nodes.Object_20?.geometry} material={materials.acmat_0} />
        <mesh castShadow receiveShadow geometry={nodes.Object_21?.geometry} material={materials.acmat_0} />
        <mesh castShadow receiveShadow geometry={nodes.Object_22?.geometry} material={materials.acmat_0} />
        <mesh castShadow receiveShadow geometry={nodes.Object_23?.geometry} material={materials.acmat_1} />
        <mesh castShadow receiveShadow geometry={nodes.Object_24?.geometry} material={materials.acmat_1} />
        <mesh castShadow receiveShadow geometry={nodes.Object_25?.geometry} material={materials.acmat_1} />
        <mesh castShadow receiveShadow geometry={nodes.Object_26?.geometry} material={materials.acmat_1} />
        <mesh castShadow receiveShadow geometry={nodes.Object_27?.geometry} material={materials.acmat_5} />
        <mesh castShadow receiveShadow geometry={nodes.Object_28?.geometry} material={materials.acmat_12} />
        <mesh castShadow receiveShadow geometry={nodes.Object_7_1?.geometry} material={materials.acmat_13} />
        <lineSegments geometry={nodes.Object_7_2?.geometry} material={materials.acmat_13} />
      </group>
    </group>
  );
};

// Preload model
useGLTF.preload("./models/tractor_01/scene.gltf");

export default Model2;
