import * as THREE from 'three';
import PointLight from './PointLight';

const Camera = () => {
  const camera = new THREE.Camera()
	camera.position = [0, 0, -100]
	camera.fov = 50
	camera.zoom = 100
	// camera.lookAt(PointLight)
  return camera
}
  
export default Camera;