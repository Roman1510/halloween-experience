import { Canvas } from '@react-three/fiber'
import './App.css'
import { Box, OrbitControls } from '@react-three/drei'

function App() {

  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas>
          <Box position={[0, 0, 0]} args={[1, 1, 1]}>
            <meshBasicMaterial color={'red'} />
          </Box>
          <OrbitControls />
        </Canvas>
      </div>

    </>
  )
}

export default App
