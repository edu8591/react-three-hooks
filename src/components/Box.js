import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Box(props) {
  const ref = useRef();
  const [rotate, setRotate] = useState(false);

  const handleClick = () => setRotate(!rotate);

  useFrame((_state, delta) => {
    ref.current.rotation.x += delta * rotate;
    ref.current.rotation.y += 0.5 * delta * rotate;
  });
  return (
    <mesh {...props} ref={ref} onClick={handleClick}>
      <boxGeometry />
      <meshBasicMaterial color={"lime"} wireframe />
    </mesh>
  );
}
export default Box;
