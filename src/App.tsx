import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from '@react-three/drei'
import { Model } from './components/Model'

function App() {

  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas>
          <Model />
          <ambientLight />
          <OrbitControls />
        </Canvas>
      </div>

    </>
  )
}

export default App
