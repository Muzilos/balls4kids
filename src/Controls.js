import React, { useRef } from 'react';
import { extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls })
export default function Controls() {
	const controlsRef = useRef();
	const { camera, gl } = useThree();

	useFrame(() => controlsRef.current && controlsRef.current.update());

	return (
		<orbitControls
			ref={controlsRef}
			args={[camera, gl.domElement]}
			enableRotate
			autoRotate
			enablePan={false}
			maxDistance={100}
			minDistance={1}
			minPolarAngle={Math.PI / 6}
			maxPolarAngle={Math.PI / 2}
		/>
	);
}
