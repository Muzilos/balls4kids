// import { Canvas } from '@react-three/fiber';
// import * as THREE from 'three';
// import Ball from './Ball';
import './App.css';
// import { Suspense } from 'react';
// import { Vector3 } from 'three';
// import Controls from './Controls';
import { FieldVideo } from './Video';

function App() {
  // Get the video
  // var video = document.getElementById("video");
  // if (video.paused) {
  //   video.play()
  // }
  return (
    <>
    <FieldVideo>
      
    </FieldVideo>
    {/**
    <Canvas
      camera={{ position: [0, 0, -10], fov: 50, zoom: 2 }}
      onCreated={({ scene, camera, gl }) => {
        camera.lookAt(new Vector3(0,0,0))
        scene.background = null
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}>
        <ambientLight />
        <pointLight
          position={[5, 10, 10]}
          penumbra={1}
          intensity={1}
          castShadow
          distance={100}
          color={'white'}
        />
        <Suspense fallback={null}>
          <Ball/>
          <Controls/>
        </Suspense>
    </Canvas>*/}
    </>
  );
}

export default App;
