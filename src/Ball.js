import * as React from 'react';
import { useLoader, useFrame } from "@react-three/fiber";
import{ useEffect, useRef, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Ball = () => {
  const mixer = useRef()
  const gltf = useLoader(GLTFLoader, '/Ball.glb')
  let logoWidth = document.getElementById('B4KCircle').clientWidth
  let videoHeight = document.getElementById('video').clientHeight
  let videoWidth = document.getElementById('video').clientWidth
useEffect(() => {
    if (gltf) {
      gltf.scene.scale.setScalar(3*logoWidth/(videoHeight*2))
      function handleResize() {
        logoWidth = document.getElementById('B4KCircle').clientWidth 
        videoHeight = document.getElementById('video').clientHeight
        videoWidth = document.getElementById('video').clientWidth
        gltf.scene.scale.setScalar(3*logoWidth/(videoHeight*2))
      }
      window.addEventListener("resize", handleResize);
      
      return () => window.removeEventListener("resize", handleResize);
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
  