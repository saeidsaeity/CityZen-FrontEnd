import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TileR = React.forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('/tileR.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.35, 0]} scale={[1, 0.1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube368.geometry}
          material={materials.Grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube368_1.geometry}
          material={materials.City_floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube368_2.geometry}
          material={materials.Road}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube368_3.geometry}
          material={materials.City_edge}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials['Material.002']}
          position={[0, -2, 0]}
          scale={[0.95, 1, 0.95]}
        />
        <group
          position={[0.134, 0.86, -0.355]}
          rotation={[Math.PI, -0.563, Math.PI]}
          scale={[0.15, 1.2, 0.15]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube163.geometry}
            material={materials['Wood.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube163_1.geometry}
            material={materials['Wood_Light.001']}
          />
        </group>
        <group
          position={[-0.076, 0.86, -0.42]}
          rotation={[-Math.PI, 0.596, -Math.PI]}
          scale={[0.15, 1.2, 0.15]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube165.geometry}
            material={materials['Wood.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube165_1.geometry}
            material={materials['Wood_Light.001']}
          />
        </group>
        <group position={[0.663, 0.995, 0.01]} rotation={[0, -0.054, 0]} scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube239.geometry}
            material={materials['Main.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube239_1.geometry}
            material={materials['Walls.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube239_2.geometry}
            material={materials['Stone.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube239_3.geometry}
            material={materials['Wood.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube239_4.geometry}
            material={materials['Wood_Light.004']}
          />
        </group>
        <group
          position={[-0.265, 0.995, 0.043]}
          rotation={[0, -0.054, 0]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube240.geometry}
            material={materials['Main.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube240_1.geometry}
            material={materials['Walls.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube240_2.geometry}
            material={materials['Stone.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube240_3.geometry}
            material={materials['Wood.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube240_4.geometry}
            material={materials['Wood_Light.004']}
          />
        </group>
        <group
          position={[-0.107, 0.995, -0.763]}
          rotation={[0, -0.054, 0]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube160.geometry}
            material={materials['Main.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube160_1.geometry}
            material={materials['Walls.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube160_2.geometry}
            material={materials['Stone.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube160_3.geometry}
            material={materials['Wood.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube160_4.geometry}
            material={materials['Wood_Light.004']}
          />
        </group>
        <group
          position={[-0.679, 0.995, -0.647]}
          rotation={[0, 0.501, 0]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube166.geometry}
            material={materials['Main.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube166_1.geometry}
            material={materials['Walls.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube166_2.geometry}
            material={materials['Stone.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube166_3.geometry}
            material={materials['Wood.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube166_4.geometry}
            material={materials['Wood_Light.004']}
          />
        </group>
        <group
          position={[-0.764, 0.995, -0.469]}
          rotation={[-Math.PI, 1.567, -Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube167.geometry}
            material={materials['Main.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube167_1.geometry}
            material={materials['Walls.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube167_2.geometry}
            material={materials['Stone.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube167_3.geometry}
            material={materials['Wood.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube167_4.geometry}
            material={materials['Wood_Light.004']}
          />
        </group>
        <group
          position={[-0.757, 0.995, -0.25]}
          rotation={[-Math.PI, 1.567, -Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube168.geometry}
            material={materials['Main.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube168_1.geometry}
            material={materials['Walls.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube168_2.geometry}
            material={materials['Stone.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube168_3.geometry}
            material={materials['Wood.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube168_4.geometry}
            material={materials['Wood_Light.004']}
          />
        </group>
        <group
          position={[0.297, 0.956, 0.137]}
          rotation={[-Math.PI, 1.554, -Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube241.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube241_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube241_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube241_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube241_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group
          position={[-0.325, 0.956, 0.087]}
          rotation={[-Math.PI, 1.554, -Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube242.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube242_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube242_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube242_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube242_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group
          position={[0.878, 0.956, -0.073]}
          rotation={[-Math.PI, 1.554, -Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube244.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube244_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube244_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube244_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube244_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group
          position={[-0.445, 0.956, -0.106]}
          rotation={[-Math.PI, 1.554, -Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube359.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube359_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube359_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube359_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube359_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group
          position={[-0.244, 0.956, -0.748]}
          rotation={[0, 0.063, 0]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube148.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube148_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube148_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube148_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube148_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group position={[0.426, 0.859, -0.711]} scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube369.geometry}
            material={materials['Main.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube369_1.geometry}
            material={materials['Walls.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube369_2.geometry}
            material={materials['Stone.014']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube369_3.geometry}
            material={materials['Wood.016']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube369_4.geometry}
            material={materials['Wood_Light.012']}
          />
        </group>
        <group position={[0.171, 0.921, -0.07]} scale={[0.2, 2, 0.2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube245.geometry}
            material={materials['Wood_Light.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube245_1.geometry}
            material={materials['Wood.013']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube245_2.geometry}
            material={materials['Metal_Light.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube245_3.geometry}
            material={materials['Green.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube245_4.geometry}
            material={materials['Stone.013']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube245_5.geometry}
            material={materials['Yellow.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube245_6.geometry}
            material={materials['Red.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube245_7.geometry}
            material={materials['Gold.001']}
          />
        </group>
        <group position={[-0.556, 0.915, 0.579]} rotation={[0, 0.734, 0]} scale={[0.42, 3.3, 0.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube246.geometry}
            material={materials['Stone.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube246_1.geometry}
            material={materials['Stone_Light.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube246_2.geometry}
            material={materials['Wood.008']}
          />
        </group>
        <group
          position={[0.622, 0.915, 0.597]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[0.42, 3.3, 0.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube247.geometry}
            material={materials['Stone.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube247_1.geometry}
            material={materials['Stone_Light.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube247_2.geometry}
            material={materials['Wood.008']}
          />
        </group>
        <group position={[0.041, 0.982, 0.379]} scale={[0.42, 4.2, 0.42]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube248.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube248_1.geometry}
            material={materials['Stone_Light.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube248_2.geometry}
            material={materials['Stone.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube248_3.geometry}
            material={materials['Wood.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube248_4.geometry}
            material={materials['Main.007']}
          />
        </group>
        <group
          position={[-0.805, 0.388, 0.811]}
          rotation={[0, -0.828, 0]}
          scale={[0.25, 2.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube365.geometry}
            material={materials['Stone_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube365_1.geometry}
            material={materials['Stone.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube365_2.geometry}
            material={materials['Wood.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube365_3.geometry}
            material={materials['Main.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube365_4.geometry}
            material={materials['Wood_Light.008']}
          />
        </group>
        <group position={[0.831, 0.388, 0.808]} rotation={[0, 0.761, 0]} scale={[0.25, 2.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube366.geometry}
            material={materials['Stone_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube366_1.geometry}
            material={materials['Stone.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube366_2.geometry}
            material={materials['Wood.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube366_3.geometry}
            material={materials['Main.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube366_4.geometry}
            material={materials['Wood_Light.008']}
          />
        </group>
      </group>
    </group>
  )
})

useGLTF.preload('/tileR.glb')


export default TileR