import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Ball from '../Ball';
import '../App.css';
import { Suspense } from 'react';
import { Vector3 } from 'three';
import Controls from '../Controls';
import { FieldVideo } from '../Video';
import { HeaderLogo } from '../Logo';
import { GiveButton, GetButton } from '../GiveGetButtons';
import { AboutButton, ContactButton } from '../AboutContactButtons';
import { withRouter } from 'react-router';
// import LinkButton from './components/LinkButton';

function Home() {
  return (
    <>
    <FieldVideo />
    <HeaderLogo />
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
          {/* <Ball/> */}
          <Controls/>
        </Suspense>
    </Canvas>
    <AboutButton /> 
    <ContactButton />
    <GiveButton /> 
    <GetButton />
    </>
  );
}

const homeClassWithHistory = withRouter(Home);
export {homeClassWithHistory as HomePage};
export {Home};