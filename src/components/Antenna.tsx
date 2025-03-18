import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Antenna = ({ isOn }: { isOn: boolean }) => {
    const ref = useRef<THREE.Mesh | null>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x = isOn ? Math.sin(Date.now() * 0.005) * 0.5 : 0;
    }
  });

  return (
    <mesh ref={ref} position={[0, 1.2, 0]} castShadow>
      <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
      <meshStandardMaterial color="silver" />
    </mesh>
  );
};

export default Antenna;
