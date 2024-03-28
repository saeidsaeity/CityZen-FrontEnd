import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TileL = React.forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/tileN.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.35, 0]} scale={[1, 0.1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube443.geometry}
          material={materials.Grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube443_1.geometry}
          material={materials.City_floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube443_2.geometry}
          material={materials.City_edge}
        />
        <group position={[0.585, 1.002, 0.675]} rotation={[0, 0.183, 0]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube054.geometry}
            material={materials['Wood.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube054_1.geometry}
            material={materials.Metal_Light}
          />
        </group>
        <group position={[0.621, 1.044, 0.648]} rotation={[0, 0.183, 0]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube057.geometry}
            material={materials.Wood_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube057_1.geometry}
            material={materials['Wood.004']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials['Material.002']}
          position={[0, -2, 0]}
          scale={[0.95, 1, 0.95]}
        />
        <group
          position={[-0.409, 0.995, -0.603]}
          rotation={[0, -0.054, 0]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033.geometry}
            material={materials['Main.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_1.geometry}
            material={materials['Walls.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_2.geometry}
            material={materials['Stone.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_3.geometry}
            material={materials['Wood.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_4.geometry}
            material={materials['Wood_Light.004']}
          />
        </group>
        <group
          position={[-0.194, 0.956, -0.686]}
          rotation={[-Math.PI, 1.554, -Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube034.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube034_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube034_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube034_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube034_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group position={[-0.647, 0.859, -0.017]} scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032.geometry}
            material={materials['Main.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032_1.geometry}
            material={materials['Walls.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032_2.geometry}
            material={materials['Stone.014']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032_3.geometry}
            material={materials['Wood.016']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032_4.geometry}
            material={materials['Wood_Light.012']}
          />
        </group>
        <group position={[0.747, 0.882, 0.766]} rotation={[0, -0.493, 0]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder038.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder038_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.641, 0.847, 0.752]} rotation={[0, -0.493, 0]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder039.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder039_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.711, 0.862, 0.658]} rotation={[0, -0.493, 0]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder040.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder040_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[-0.583, 0.915, 0.578]} rotation={[0, 0.834, 0]} scale={[0.42, 3.3, 0.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube438.geometry}
            material={materials['Stone.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube438_1.geometry}
            material={materials['Stone_Light.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube438_2.geometry}
            material={materials['Wood.008']}
          />
        </group>
        <group
          position={[0.432, 0.915, -0.592]}
          rotation={[-2.938, -0.519, -3.112]}
          scale={[0.571, 3.298, 0.46]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube440.geometry}
            material={materials['Stone.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube440_1.geometry}
            material={materials['Stone_Light.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube440_2.geometry}
            material={materials['Wood.008']}
          />
        </group>
        <group position={[-0.143, 0.982, -0.01]} rotation={[0, 1.038, 0]} scale={[0.45, 4.2, 0.42]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube437.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube437_1.geometry}
            material={materials['Stone_Light.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube437_2.geometry}
            material={materials['Stone.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube437_3.geometry}
            material={materials['Wood.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube437_4.geometry}
            material={materials['Main.007']}
          />
        </group>
        <group
          position={[-0.833, 0.388, 0.843]}
          rotation={[0, -0.828, 0]}
          scale={[0.25, 2.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube439.geometry}
            material={materials['Stone_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube439_1.geometry}
            material={materials['Stone.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube439_2.geometry}
            material={materials['Wood.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube439_3.geometry}
            material={materials['Main.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube439_4.geometry}
            material={materials['Wood_Light.008']}
          />
        </group>
        <group
          position={[0.821, 0.388, -0.82]}
          rotation={[-Math.PI, 0.85, -Math.PI]}
          scale={[0.25, 2.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube441.geometry}
            material={materials['Stone_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube441_1.geometry}
            material={materials['Stone.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube441_2.geometry}
            material={materials['Wood.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube441_3.geometry}
            material={materials['Main.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube441_4.geometry}
            material={materials['Wood_Light.008']}
          />
        </group>
      </group>
    </group>
  )
})

useGLTF.preload('/tileN.glb')

export default TileN