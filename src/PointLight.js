import * as THREE from 'three';

const PointLight = () => {
  const light = new THREE.PointLight('blue', 100, 10, 0)
  light.position = [10,10,10]
  return light ? light : null
}
  
export default PointLight;