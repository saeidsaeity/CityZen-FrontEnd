import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TileO = React.forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('/tileO.glb')
    return (
      <group {...props} dispose={null}>
        <group position={[0, 0.35, 0]} scale={[1, 0.1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube303.geometry}
            material={materials.Grass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube303_1.geometry}
            material={materials.City_floor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube303_2.geometry}
            material={materials.Road}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube303_3.geometry}
            material={materials.City_edge}
          />
          <group position={[0.492, 1.002, 0.528]} scale={[0.3, 3, 0.3]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube058.geometry}
              material={materials['Wood.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube058_1.geometry}
              material={materials.Metal_Light}
            />
          </group>
          <group position={[0.524, 1.044, 0.506]} scale={[0.3, 3, 0.3]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube063.geometry}
              material={materials.Wood_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube063_1.geometry}
              material={materials['Wood.004']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028.geometry}
            material={materials['Material.002']}
            position={[0, -2, 0]}
            scale={[0.95, 1, 0.95]}
          />
          <group
            position={[-0.914, 0.86, -0.635]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.15, 1.2, 0.15]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube065.geometry}
              material={materials['Wood.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube065_1.geometry}
              material={materials['Wood_Light.001']}
            />
          </group>
          <group position={[-0.747, 0.86, -0.778]} rotation={[0, 0.412, 0]} scale={[0.15, 1.2, 0.15]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube081.geometry}
              material={materials['Wood.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube081_1.geometry}
              material={materials['Wood_Light.001']}
            />
          </group>
          <group
            position={[-0.446, 0.995, -0.603]}
            rotation={[0, -0.054, 0]}
            scale={[0.18, 1.8, 0.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube030.geometry}
              material={materials['Main.004']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube030_1.geometry}
              material={materials['Walls.002']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube030_2.geometry}
              material={materials['Stone.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube030_3.geometry}
              material={materials['Wood.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube030_4.geometry}
              material={materials['Wood_Light.004']}
            />
          </group>
          <group
            position={[-0.231, 0.956, -0.686]}
            rotation={[-Math.PI, 1.554, -Math.PI]}
            scale={[0.18, 1.8, 0.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube031.geometry}
              material={materials['Main.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube031_1.geometry}
              material={materials['Wood.006']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube031_2.geometry}
              material={materials['Wood_Light.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube031_3.geometry}
              material={materials['Walls.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube031_4.geometry}
              material={materials['Stone.006']}
            />
          </group>
          <group position={[-0.683, 0.859, -0.017]} scale={[0.18, 1.8, 0.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube026.geometry}
              material={materials['Main.011']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube026_1.geometry}
              material={materials['Walls.007']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube026_2.geometry}
              material={materials['Stone.014']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube026_3.geometry}
              material={materials['Wood.016']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube026_4.geometry}
              material={materials['Wood_Light.012']}
            />
          </group>
          <group position={[0.291, 0.882, 0.362]} scale={[0.3, 3, 0.3]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder041.geometry}
              material={materials['Wood.015']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder041_1.geometry}
              material={materials.Green}
            />
          </group>
          <group position={[0.191, 0.847, 0.399]} scale={[0.3, 3, 0.3]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder042.geometry}
              material={materials['Wood.015']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder042_1.geometry}
              material={materials.Green}
            />
          </group>
          <group position={[0.539, 0.862, 0.574]} scale={[0.3, 3, 0.3]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder043.geometry}
              material={materials['Wood.015']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder043_1.geometry}
              material={materials.Green}
            />
          </group>
          <group position={[-0.583, 0.915, 0.578]} rotation={[0, 0.834, 0]} scale={[0.42, 3.3, 0.43]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube298.geometry}
              material={materials['Stone.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube298_1.geometry}
              material={materials['Stone_Light.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube298_2.geometry}
              material={materials['Wood.008']}
            />
          </group>
          <group
            position={[0.387, 0.915, -0.53]}
            rotation={[-2.938, -0.519, -3.112]}
            scale={[0.571, 3.298, 0.46]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube300.geometry}
              material={materials['Stone.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube300_1.geometry}
              material={materials['Stone_Light.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube300_2.geometry}
              material={materials['Wood.008']}
            />
          </group>
          <group position={[-0.175, 0.982, 0.028]} rotation={[0, 1.038, 0]} scale={[0.42, 4.2, 0.42]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube297.geometry}
              material={materials.Metal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube297_1.geometry}
              material={materials['Stone_Light.004']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube297_2.geometry}
              material={materials['Stone.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube297_3.geometry}
              material={materials['Wood.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube297_4.geometry}
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
              geometry={nodes.Cube299.geometry}
              material={materials['Stone_Light.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube299_1.geometry}
              material={materials['Stone.011']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube299_2.geometry}
              material={materials['Wood.011']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube299_3.geometry}
              material={materials['Main.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube299_4.geometry}
              material={materials['Wood_Light.008']}
            />
          </group>
          <group
            position={[0.777, 0.388, -0.765]}
            rotation={[0, -0.828, 0]}
            scale={[0.25, 2.5, 0.25]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube301.geometry}
              material={materials['Stone_Light.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube301_1.geometry}
              material={materials['Stone.011']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube301_2.geometry}
              material={materials['Wood.011']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube301_3.geometry}
              material={materials['Main.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube301_4.geometry}
              material={materials['Wood_Light.008']}
            />
          </group>
        </group>
      </group>
    )
  })
  
  useGLTF.preload('/tileO.glb')

export default TileO