import * as THREE from 'three';
import { useLoader, useFrame } from "@react-three/fiber";
import{ useEffect, useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { settings } from "./settings"

const Ball = () => {
  const mixer = useRef()
  const gltf = useLoader(GLTFLoader, '/Ball.glb')

  useEffect(() => {
    if (gltf) {
      mixer.current = new THREE.AnimationMixer(gltf.scene)
      //      const action = mixer.current.clipAction(gltf.animations[0])
      console.log(gltf.animations)
      //    action.play()
    }
  }, [gltf])

  useFrame(({ clock }) => mixer.current && mixer.current.update(clock.getDelta()))
  return gltf ? <primitive object={gltf.scene} /> : null
}
  
export default Ball;
  