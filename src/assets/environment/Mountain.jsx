import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Mountain(props) {
  const { nodes, materials } = useGLTF('/mountain_low_poly_for_distant_mountains.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['default']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/mountain_low_poly_for_distant_mountains.glb')
