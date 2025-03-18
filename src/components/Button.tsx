import { useState } from "react";

interface ButtonProps {
  position: [number, number, number];
  onClick: () => void;
}

const Button = ({ position, onClick }: ButtonProps) => {
  const [active, setActive] = useState(false);

  return (
    <mesh
      position={position}
      onClick={() => {
        setActive(!active);
        onClick();
      }}
      castShadow
    >
      <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
      <meshStandardMaterial color={active ? "green" : "red"} />
    </mesh>
  );
};

export default Button;
