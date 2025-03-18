import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ControlPanel = () => {
  const [active, setActive] = useState(false);
  const panelRef = useRef<THREE.Group>(null);

  // Animate rotation if active
  useFrame(() => {
    if (panelRef.current) {
      panelRef.current.rotation.y += active ? 0.02 : 0;
    }
  });

  return (
    <group ref={panelRef} position={[0, 1, -5]}>
      {/* Panel Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.5, 2]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Button */}
      <mesh
        position={[0, 0.3, 0]}
        onClick={() => setActive(!active)}
        castShadow
      >
        <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
        <meshStandardMaterial color={active ? "red" : "green"} />
      </mesh>
    </group>
  );
};

export default ControlPanel;
