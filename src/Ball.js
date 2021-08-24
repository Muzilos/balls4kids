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
useEffect(() => {
    if (gltf) {
      gltf.scene.scale.setScalar(1.7*logoWidth/videoHeight)
      function handleResize() {
        logoWidth = document.getElementById('B4KCircle').clientWidth 
        videoHeight = document.getElementById('video').clientHeight
        gltf.scene.scale.setScalar(1.5*logoWidth/videoHeight)
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
  