import { useThree } from '@react-three/fiber'
import React, { Suspense } from 'react'
import FieldTexture from './VideoTexture'
// const RectAreaLight = ({ lookAt = [0, 0, 0], ...props }) => <rectAreaLight {...props} onUpdate={self => self.lookAt(...lookAt)} />

export default function Scene({ children }) {
  const { scene } = useThree()
  return (
    <>
			<ambientLight />
			<pointLight
				position={[5, 10, 10]}
				penumbra={1}
				intensity={1}
				castShadow
				distance={100}
				color={'white'}
			/>
      <Suspense fallback={null}>{children}</Suspense>
    </>
  )
}
