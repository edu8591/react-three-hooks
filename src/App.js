import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";

function App() {
  return (
    <Canvas>
      <Box position={[-1, 0, 0]} />
      <Box position={[1, 0, 0]} />
    </Canvas>
  );
}

export default App;
