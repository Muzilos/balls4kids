import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Ball from './Ball';
import FieldTexture from './VideoTexture';
import Camera from './Camera';
import PointLight from './PointLight';
import './App.css';
import { Suspense } from 'react';
import { Vector3 } from 'three';
import Controls from './Controls';
import Scene from './FieldScene';

function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, -10], fov: 50, zoom: 2 }}
      onCreated={({ scene, camera, gl }) => {
        camera.lookAt(new Vector3(0,0,0))
        scene.background = FieldTexture
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}>
        <Scene 
          // background = {FieldTexture}
        />
      {/* <ambientLight />
      <pointLight
        color='blue' 
        intensity={100}
        power={1000}
        decay={1}
        position={[500, 50, 50]} /> */}
      <Suspense fallback={null}>
        <Ball/>
        <Controls/>
      </Suspense>
    </Canvas>
  );
}

export default App;
