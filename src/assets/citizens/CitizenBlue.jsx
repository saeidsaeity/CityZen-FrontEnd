import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CitizenBlue(props) {
  const { nodes, materials } = useGLTF('/citizenBlue.glb',"draco/gltf/")
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BlueGameFigure3.geometry}
        material={materials.WoodBlue}
        position={[0, 1.796, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.182}
      />
    </group>
  )
}

useGLTF.preload('/citizenBlue.glb',"draco/gltf/")