import * as THREE from 'three';

export default function FieldTexture() {
    const fieldTexture = new THREE.VideoTexture(
        document.getElementById( 'video' )
    )
    return fieldTexture;
}
