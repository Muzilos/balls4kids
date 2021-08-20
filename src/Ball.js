import * as THREE from 'three';
import * as React from 'react';
import { useLoader, useFrame } from "@react-three/fiber";
import{ useEffect, useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { settings } from "./settings"

const Ball = () => {
  const mixer = useRef()
  const gltf = useLoader(GLTFLoader, '/Ball.glb')
  const [clock] = React.useState(new THREE.Clock())

  useEffect(() => {
    if (gltf) {
      mixer.current = new THREE.AnimationMixer(gltf.scene)
          //  const action = mixer.current.clipAction(gltf.animations[0])
      console.log(gltf.animations)
        //  action.play()
    }
  }, [gltf])

  useFrame(({clock}) => {
    mixer.current && mixer.current.update(clock.getDelta())
  });

  useFrame(state => {
    if (mixer.current) {
    state.camera.rotation.z += 0.005;
   }
  });


  return gltf ? <primitive object={gltf.scene} /> : null
}
  
export default Ball;
  