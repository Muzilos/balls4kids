import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Ball from './Ball';
// import FieldTexture from './VideoTexture';

import './App.css';
import { Suspense } from 'react';

function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, -10], fov: 50 }}
      onCreated={({ camera, gl, scene }) => {
        camera.lookAt(new THREE.Vector3(0, 0, 0))
        scene.background = null
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Ball/>
      </Suspense>
    </Canvas>
  );
}

export default App;
