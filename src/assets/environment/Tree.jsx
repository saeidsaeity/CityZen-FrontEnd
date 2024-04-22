import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export  default function Tree(props) {
  const { nodes, materials } = useGLTF('/oak_trees.glb', "draco/gltf/")
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.003}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[59.158, 3.573, 306.075]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Treesmall_bark1_0.geometry}
              material={materials.bark1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_0_leaf1_0.geometry}
              material={materials.leaf1}
              position={[21.862, 162.292, 54.251]}
              rotation={[-2.82, -0.656, -2.941]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_7_leaf1_0.geometry}
              material={materials.leaf1}
              position={[7.548, 225.597, 61.367]}
              rotation={[1.972, -1.137, 2.139]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_8_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-18.856, 132.432, 6.796]}
              rotation={[0.785, 0.747, -0.752]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_10_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-0.394, 127.925, 36.923]}
              rotation={[2.619, 0.473, -2.28]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_11_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-13.871, 205.512, 29.257]}
              rotation={[2.155, -0.417, 2.382]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_16_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-30.916, 263.663, 16.28]}
              rotation={[2.255, 0.663, -2.87]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_17_leaf1_0.geometry}
              material={materials.leaf1}
              position={[3.758, 204.418, 52.112]}
              rotation={[2.933, -0.868, -2.866]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_18_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-17.958, 175.742, 10.005]}
              rotation={[2.152, 1.032, -2.225]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_21_leaf1_0.geometry}
              material={materials.leaf1}
              position={[8.17, 151.327, 44.726]}
              rotation={[2.604, 0.476, -2.875]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_25_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-31.956, 165.984, 36.215]}
              rotation={[1.02, 0.203, -0.318]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_26_leaf1_0.geometry}
              material={materials.leaf1}
              position={[2.501, 179.498, 53.175]}
              rotation={[2.749, 0.352, -2.969]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_29_leaf1_0.geometry}
              material={materials.leaf1}
              position={[1.522, 192.076, 53.554]}
              rotation={[2.421, 0.7, -2.684]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_30_leaf1_0.geometry}
              material={materials.leaf1}
              position={[4.306, 157.387, 24.655]}
              rotation={[2.053, -1.262, 2.158]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_31_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-17.591, 164.858, 8.71]}
              rotation={[2.287, 1.308, -2.045]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_33_leaf1_0.geometry}
              material={materials.leaf1}
              position={[5.632, 162.233, -8.891]}
              rotation={[0.775, -0.347, -0.153]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_36_leaf1_0.geometry}
              material={materials.leaf1}
              position={[25.982, 241.581, 28.849]}
              rotation={[1.493, -0.084, -0.364]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_37_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-1.657, 148.854, 33.59]}
              rotation={[1.685, -0.326, 1.915]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_38_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-4.508, 112.137, 40.729]}
              rotation={[2.297, 0.865, -2.175]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_39_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-29.585, 257.577, 15.572]}
              rotation={[0.723, -0.163, 0.142]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_40_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-15.158, 108.859, 5.944]}
              rotation={[2.282, 1.175, -2.14]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_41_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-1.465, 108.808, 38.318]}
              rotation={[2.741, -0.838, 2.837]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_42_leaf1_0.geometry}
              material={materials.leaf1}
              position={[5.548, 212.121, 56.53]}
              rotation={[2.544, 0.566, -2.791]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_43_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-31.013, 268.906, 14.422]}
              rotation={[2.171, 0.032, -2.809]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_47_leaf1_0.geometry}
              material={materials.leaf1}
              position={[11.326, 172.377, 29.225]}
              rotation={[1.14, -0.087, 0.188]}
            />
          </group>
          <group position={[-234.425, 1.687, 272.216]} rotation={[0, -1.171, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Treemedium_bark1_0.geometry}
              material={materials.bark1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_0_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[32.879, 212.995, -2.064]}
              rotation={[2.915, -0.018, 3.137]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_3_leaf1_0.geometry}
              material={materials.leaf1}
              position={[15.307, 370.645, -34.742]}
              rotation={[-0.389, 0.941, 0.32]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_4_leaf1_0.geometry}
              material={materials.leaf1}
              position={[31.146, 333.889, 86.405]}
              rotation={[0.596, 1.114, -0.547]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_5_leaf1_0.geometry}
              material={materials.leaf1}
              position={[24.458, 338.817, -17.529]}
              rotation={[1.287, -1.029, 1.243]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_6_leaf1_0.geometry}
              material={materials.leaf1}
              position={[19.672, 228.408, 31.312]}
              rotation={[-3.109, 0.963, 3.114]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_7_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[39.154, 401.576, 26.918]}
              rotation={[2.849, -1.054, 2.886]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_8_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[19.468, 234.93, -103.081]}
              rotation={[-0.041, -0.055, 0.006]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_11_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[86.813, 436.833, -58.966]}
              rotation={[0.738, -0.356, -0.635]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_12_leaf1_0.geometry}
              material={materials.leaf1}
              position={[55.287, 225.936, -6.843]}
              rotation={[0.518, -0.028, 0.016]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_13_leaf1_0.geometry}
              material={materials.leaf1}
              position={[2.526, 407.899, -56.712]}
              rotation={[1.809, 0.2, -3.099]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_14_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-94.556, 289.517, -38.912]}
              rotation={[1.379, 0.711, -1.179]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_15_leaf1_0.geometry}
              material={materials.leaf1}
              position={[25.853, 241.864, 42.783]}
              rotation={[1.479, -0.867, 1.45]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_16_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[20.828, 244.065, -15.315]}
              rotation={[0.729, -1.159, 0.686]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_17_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[19.244, 342.225, -12.133]}
              rotation={[2.59, 0.559, -2.826]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_19_leaf1_0.geometry}
              material={materials.leaf1}
              position={[26.604, 264.372, -134.543]}
              rotation={[-0.27, -0.583, -0.151]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_20_leaf1_0.geometry}
              material={materials.leaf1}
              position={[25.247, 268.778, 65.646]}
              rotation={[-2.883, -0.09, -3.118]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_22_leaf1_0.geometry}
              material={materials.leaf1}
              position={[65.103, 327.62, 104.687]}
              rotation={[2.481, 0.702, -2.676]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_23_leaf1_0.geometry}
              material={materials.leaf1}
              position={[40.152, 352.148, -28.035]}
              rotation={[-0.775, -0.974, -0.68]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_24_leaf1_0.geometry}
              material={materials.leaf1}
              position={[27.212, 315.965, -12.141]}
              rotation={[1.264, -1.044, 1.219]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_25_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[21.703, 259.184, 59.641]}
              rotation={[-3.091, -0.146, -3.134]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_28_leaf1_0.geometry}
              material={materials.leaf1}
              position={[121.797, 312.211, -8.039]}
              rotation={[1.838, -1.042, 1.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_29_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[19.396, 312.04, -10.791]}
              rotation={[2.277, 1.016, -2.358]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_31_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[23.624, 347.315, -13.215]}
              rotation={[2.61, -0.292, 2.974]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_32_leaf1_0.geometry}
              material={materials.leaf1}
              position={[29.354, 384.597, -25.645]}
              rotation={[0.233, -0.317, 0.074]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_34_leaf1_0.geometry}
              material={materials.leaf1}
              position={[3.166, 188.884, -7.083]}
              rotation={[1.908, -0.048, 3.006]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_35_leaf1_0.geometry}
              material={materials.leaf1}
              position={[61.261, 229.521, 0.926]}
              rotation={[2.929, -0.049, 3.131]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_36_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[20.171, 221.572, -65.403]}
              rotation={[0.697, -0.37, 0.646]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_37_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[76.765, 242.819, -9.572]}
              rotation={[0.153, -0.313, 0.047]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_38_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[52.378, 221.167, -6.415]}
              rotation={[0.14, -0.262, 0.037]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_40_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[52.004, 220.601, -0.67]}
              rotation={[-2.263, -0.478, -2.635]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_41_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-62.186, 234.994, -22.742]}
              rotation={[0.332, 1.152, -0.355]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_43_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[10.126, 208.047, -4.653]}
              rotation={[2.017, 1.097, -2.064]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_44_leaf1_0.geometry}
              material={materials.leaf1}
              position={[18.166, 207.093, -15.398]}
              rotation={[0.467, -0.316, 0.156]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_46_leaf1_0.geometry}
              material={materials.leaf1}
              position={[38.386, 371.53, 86.809]}
              rotation={[0.782, -0.815, 0.626]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_49_leaf1_0.geometry}
              material={materials.leaf1}
              position={[19.997, 358.134, -18.908]}
              rotation={[2.323, 1.105, -2.379]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_50_leaf1_0.geometry}
              material={materials.leaf1}
              position={[56.111, 373.879, -35.523]}
              rotation={[0.342, -0.641, 0.031]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_52_leaf1_0.geometry}
              material={materials.leaf1}
              position={[11.388, 182.885, -16.343]}
              rotation={[0.579, 0.53, -0.319]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_53_leaf1_0.geometry}
              material={materials.leaf1}
              position={[31.448, 336.495, 86.96]}
              rotation={[1.879, 0.902, -1.957]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_54_leaf1_0.geometry}
              material={materials.leaf1}
              position={[28.27, 283.835, 69.95]}
              rotation={[1.019, 0.277, -0.419]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_55_leaf1_0.geometry}
              material={materials.leaf1}
              position={[123.998, 325.019, -15.456]}
              rotation={[0.878, -0.714, 0.733]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_57_leaf1_0.geometry}
              material={materials.leaf1}
              position={[31.443, 455.113, -22.464]}
              rotation={[2.321, 0.385, -2.893]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_58_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-6.762, 192.136, -7.309]}
              rotation={[2.434, 0.682, -2.497]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_59_leaf1_0.geometry}
              material={materials.leaf1}
              position={[15.899, 213.041, -31.836]}
              rotation={[1.724, 0.635, -1.826]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_60_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-94.149, 316.485, -45.91]}
              rotation={[2.565, 0.4, -2.319]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_61_leaf1_0.geometry}
              material={materials.leaf1}
              position={[83.035, 248.693, -4.963]}
              rotation={[-3.072, -0.768, -3.093]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_62_leaf1_0.geometry}
              material={materials.leaf1}
              position={[-3.073, 435.678, -78.122]}
              rotation={[1.019, 0.703, -0.826]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_65_leaf1_0.geometry}
              material={materials.leaf1}
              position={[12.936, 211.967, -43.668]}
              rotation={[0.724, 0.387, -0.253]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_66_leaf1_0.geometry}
              material={materials.leaf1}
              position={[18.341, 337.691, -18.253]}
              rotation={[0.644, 0.999, -0.563]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_67_leaf1_0.geometry}
              material={materials.leaf1}
              position={[18.957, 220.684, 17.09]}
              rotation={[-2.442, -0.262, -2.927]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_69_leaf1_0.geometry}
              material={materials.leaf1}
              position={[36.82, 221.119, -2.128]}
              rotation={[2.382, 0.257, -2.905]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_70_leaf1_0.geometry}
              material={materials.leaf1}
              position={[8.563, 180.89, -3.361]}
              rotation={[2.661, 0.282, -2.998]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_2_196_72_leaf1_0.geometry}
              material={materials.leaf1}
              position={[46.759, 362.627, -32.512]}
              rotation={[0.285, 0.064, -0.019]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_73_leaf1_0.geometry}
              material={materials.leaf1}
              position={[32.591, 302.941, 79.745]}
              rotation={[1.319, 0.709, -1.195]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_10_3_77_leaf1_0.geometry}
              material={materials.leaf1}
              position={[5.152, 159.114, -7.496]}
              rotation={[0.209, 0.22, -0.025]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_79_2_leaf1_0.geometry}
              material={materials.leaf1}
              position={[34.002, 436.142, -17.838]}
              rotation={[1.608, -0.714, 1.086]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_79_1_leaf1_0.geometry}
              material={materials.leaf1}
              position={[32.084, 439.547, -17.543]}
              rotation={[2.464, 0.327, -2.887]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_79_leaf1_0.geometry}
              material={materials.leaf1}
              position={[72.374, 402.392, -46.268]}
              rotation={[2.177, -0.531, 2.306]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leafplanes_4_13_3_82_leaf1_0.geometry}
              material={materials.leaf1}
              position={[60.165, 325.201, 100.492]}
              rotation={[0.358, -0.575, 0.2]}
            />
          </group>
          <group position={[0, 3.684, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.treelarge_bark1_0.geometry}
              material={materials.bark1}
            />
            <group position={[-25.712, 289.163, -91.792]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_3_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-54.026, 237.197, 169.757]}
                rotation={[-2.912, 0.362, 3.059]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_7_leaf1_0.geometry}
                material={materials.leaf1}
                position={[9.927, 52.831, 107.821]}
                rotation={[2.35, 0.293, -2.857]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_9_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-68.112, 166.127, 40.343]}
                rotation={[2.318, 0.472, -2.685]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_11_leaf1_0.geometry}
                material={materials.leaf1}
                position={[123.83, 31.285, 176.73]}
                rotation={[-0.177, -0.815, -0.13]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_13_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-52.597, -13.488, 28.653]}
                rotation={[0.241, 0.042, 0.102]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_15_leaf1_0.geometry}
                material={materials.leaf1}
                position={[40.211, 113.539, 146.717]}
                rotation={[2.783, 0.697, -2.905]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_19_leaf1_0.geometry}
                material={materials.leaf1}
                position={[4.167, -70.741, 99.606]}
                rotation={[2.207, 0.389, -2.668]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_22_leaf1_0.geometry}
                material={materials.leaf1}
                position={[58.535, 69.222, 31.618]}
                rotation={[1.206, 0.785, -1.076]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_24_leaf1_0.geometry}
                material={materials.leaf1}
                position={[64.616, -66.54, 112.032]}
                rotation={[-2.905, -0.46, -3.035]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_32_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-27.447, -42.835, 56.392]}
                rotation={[-0.972, 0.789, 0.805]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_35_leaf1_0.geometry}
                material={materials.leaf1}
                position={[128.38, -43.344, 91.381]}
                rotation={[-1.533, -0.945, -1.525]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_36_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-15.747, -40.07, 64.128]}
                rotation={[1.533, -0.418, 1.478]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_38_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-43.297, -24.072, 44.173]}
                rotation={[2.298, 0.499, -2.647]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_42_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-0.615, 138.508, 265.647]}
                rotation={[2.51, -0.063, -3.045]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_44_leaf1_0.geometry}
                material={materials.leaf1}
                position={[39.947, 132.649, 103.07]}
                rotation={[0.294, 0.738, -0.201]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_48_leaf1_0.geometry}
                material={materials.leaf1}
                position={[126.437, 249.344, 226.175]}
                rotation={[1.601, -0.908, 1.888]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_50_leaf1_0.geometry}
                material={materials.leaf1}
                position={[60.312, 62.962, 40.714]}
                rotation={[2.094, -0.873, 2.216]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_51_leaf1_0.geometry}
                material={materials.leaf1}
                position={[103.89, 12.85, 166.893]}
                rotation={[-2.731, -1.286, -2.363]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_56_leaf1_0.geometry}
                material={materials.leaf1}
                position={[29.003, 191.604, 116.375]}
                rotation={[2.053, -0.317, 2.605]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_59_leaf1_0.geometry}
                material={materials.leaf1}
                position={[24.473, 242.571, 154.236]}
                rotation={[-3.03, 0.114, 3.129]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_63_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-45.169, -16.369, 39.265]}
                rotation={[1.952, -0.096, 2.907]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_68_leaf1_0.geometry}
                material={materials.leaf1}
                position={[3.162, 57.587, 103.473]}
                rotation={[2.441, 0.301, -2.897]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_72_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-0.471, -63.943, 92.627]}
                rotation={[2.324, 0.357, -2.785]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_73_leaf1_0.geometry}
                material={materials.leaf1}
                position={[49.618, 166.498, 81.255]}
                rotation={[0.186, 0.787, -0.132]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_78_leaf1_0.geometry}
                material={materials.leaf1}
                position={[71.322, 147.728, 170.967]}
                rotation={[-2.794, -1.079, -2.833]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_80_leaf1_0.geometry}
                material={materials.leaf1}
                position={[76.446, 117.474, -4.361]}
                rotation={[0.174, 0.139, -0.024]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_81_leaf1_0.geometry}
                material={materials.leaf1}
                position={[16.26, 38.685, 103.41]}
                rotation={[-0.12, 0.013, 0.002]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_82_leaf1_0.geometry}
                material={materials.leaf1}
                position={[120.745, -43.079, 93.574]}
                rotation={[3.133, -1.346, 2.87]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_82_1_leaf1_0.geometry}
                material={materials.leaf1}
                position={[22.534, -45.917, 196.008]}
                rotation={[-2.721, -0.422, -2.901]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_83_leaf1_0.geometry}
                material={materials.leaf1}
                position={[78.885, 345.829, 186.876]}
                rotation={[3.045, -0.462, 3.099]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_85_leaf1_0.geometry}
                material={materials.leaf1}
                position={[111.218, 110.97, 123.423]}
                rotation={[-2.611, -1.367, -2.368]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_88_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-5.175, 164.216, 144.211]}
                rotation={[0.836, -0.009, 0.01]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_93_leaf1_0.geometry}
                material={materials.leaf1}
                position={[31.341, 273.995, 143.11]}
                rotation={[1.108, 0.871, -0.993]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_93_1_leaf1_0.geometry}
                material={materials.leaf1}
                position={[35.474, 269.421, 150.926]}
                rotation={[2.555, 0.096, -2.782]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_94_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-54.848, 144.303, 51.864]}
                rotation={[2.403, 1.052, -2.207]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_95_leaf1_0.geometry}
                material={materials.leaf1}
                position={[3.395, 95.917, 228.045]}
                rotation={[0.983, 0.972, -0.892]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_96_leaf1_0.geometry}
                material={materials.leaf1}
                position={[4.428, 54.563, 94.761]}
                rotation={[-0.03, -0.018, -0.001]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_98_leaf1_0.geometry}
                material={materials.leaf1}
                position={[34.076, 235.09, 143.338]}
                rotation={[0.853, -0.549, 0.539]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_101_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-40.001, 123.8, 55.497]}
                rotation={[0.647, -0.787, 0.491]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_104_leaf1_0.geometry}
                material={materials.leaf1}
                position={[34.371, 240.804, 154.453]}
                rotation={[2.711, 0.562, -2.901]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_108_leaf1_0.geometry}
                material={materials.leaf1}
                position={[5.885, 242.089, 86.397]}
                rotation={[-0.191, 0.504, 0.093]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_109_leaf1_0.geometry}
                material={materials.leaf1}
                position={[38.744, 131.514, 112.336]}
                rotation={[1.952, 0.286, -2.528]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_110_leaf1_0.geometry}
                material={materials.leaf1}
                position={[26.566, 231.292, 156.113]}
                rotation={[2.718, 0.143, -3.077]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_114_leaf1_0.geometry}
                material={materials.leaf1}
                position={[110.577, 209.071, 208.67]}
                rotation={[-2.768, -0.91, -2.841]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_117_leaf1_0.geometry}
                material={materials.leaf1}
                position={[57.544, 57.157, 38.565]}
                rotation={[-0.487, -0.188, -0.099]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_118_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-32.163, 194.414, 157.177]}
                rotation={[-2.91, 1.027, 2.943]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_119_leaf1_0.geometry}
                material={materials.leaf1}
                position={[32.259, 223.181, 157.102]}
                rotation={[2.752, 0.245, -3.042]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_122_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-85.584, 30.749, 1.715]}
                rotation={[0.408, 1.283, -0.27]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_125_leaf1_0.geometry}
                material={materials.leaf1}
                position={[78.497, 7.021, 158.004]}
                rotation={[2.596, 0.401, -2.909]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_128_leaf1_0.geometry}
                material={materials.leaf1}
                position={[42.431, 271.223, 140.204]}
                rotation={[0.455, -0.14, 0.183]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_131_leaf1_0.geometry}
                material={materials.leaf1}
                position={[13.094, -65.226, 87.963]}
                rotation={[1.498, -0.454, 1.405]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_135_leaf1_0.geometry}
                material={materials.leaf1}
                position={[24.486, 45.514, 169.278]}
                rotation={[2.93, 0.144, 3.091]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_137_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-7.888, -49.017, 77.313]}
                rotation={[1.621, -0.009, 2.957]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_138_leaf1_0.geometry}
                material={materials.leaf1}
                position={[60.586, 68.549, 27.756]}
                rotation={[0.218, 0.497, -0.105]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_146_leaf1_0.geometry}
                material={materials.leaf1}
                position={[56.665, 129.034, 150.592]}
                rotation={[0.763, -0.277, 0.256]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_147_leaf1_0.geometry}
                material={materials.leaf1}
                position={[162.962, 173.525, 118.993]}
                rotation={[1.211, -1.121, 1.089]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_148_leaf1_0.geometry}
                material={materials.leaf1}
                position={[72.822, 155.761, 176.809]}
                rotation={[-3.037, -0.055, -3.136]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_156_leaf1_0.geometry}
                material={materials.leaf1}
                position={[141.363, 41.459, 187.663]}
                rotation={[2.825, -1.263, -3.075]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_157_leaf1_0.geometry}
                material={materials.leaf1}
                position={[26.082, 122.941, 140.293]}
                rotation={[2.494, -0.333, 2.899]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_158_leaf1_0.geometry}
                material={materials.leaf1}
                position={[38.89, 182.288, 158.031]}
                rotation={[3.043, -0.755, 3.074]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_160_leaf1_0.geometry}
                material={materials.leaf1}
                position={[81.644, 10.509, 158.851]}
                rotation={[1.73, 0.306, -2.06]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_161_leaf1_0.geometry}
                material={materials.leaf1}
                position={[47.578, 43.274, 56.371]}
                rotation={[1.399, 0.785, -1.33]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_163_leaf1_0.geometry}
                material={materials.leaf1}
                position={[58.36, 53.648, 50.961]}
                rotation={[1.899, -0.775, 2.023]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_167_leaf1_0.geometry}
                material={materials.leaf1}
                position={[31.929, 210.054, 141.96]}
                rotation={[0.778, 0.348, 0.022]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_168_leaf1_0.geometry}
                material={materials.leaf1}
                position={[9.94, 86.381, 208.34]}
                rotation={[1.328, 0.181, -0.629]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_170_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-43.778, -19.423, 33.053]}
                rotation={[-0.168, 0.361, -0.048]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_171_leaf1_0.geometry}
                material={materials.leaf1}
                position={[26.184, 35.476, 140.988]}
                rotation={[1.415, 0.2, -0.904]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_172_leaf1_0.geometry}
                material={materials.leaf1}
                position={[51.462, -17.798, 125.98]}
                rotation={[0.083, -0.768, 0.058]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_173_leaf1_0.geometry}
                material={materials.leaf1}
                position={[58.889, 194.569, 67.569]}
                rotation={[-0.203, -0.276, -0.056]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_177_leaf1_0.geometry}
                material={materials.leaf1}
                position={[80.949, 131.378, -16.747]}
                rotation={[-0.377, -0.119, -0.047]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_178_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-46.461, 137.425, 51.165]}
                rotation={[0.8, -0.626, 0.543]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_183_leaf1_0.geometry}
                material={materials.leaf1}
                position={[95.474, 191.729, 193.931]}
                rotation={[2.317, -1.175, 2.585]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_186_leaf1_0.geometry}
                material={materials.leaf1}
                position={[1.052, 55.129, 97.025]}
                rotation={[-0.705, 1.057, 0.638]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_187_leaf1_0.geometry}
                material={materials.leaf1}
                position={[1.074, 120.161, 249.603]}
                rotation={[1.594, -1.054, 1.597]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_192_leaf1_0.geometry}
                material={materials.leaf1}
                position={[104.791, 14.242, 163.049]}
                rotation={[0.014, -0.814, 0.01]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_195_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-77.614, 24.35, 3.06]}
                rotation={[-0.348, 0.423, 0.148]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_196_leaf1_0.geometry}
                material={materials.leaf1}
                position={[56.493, 306.487, 150.062]}
                rotation={[2.007, 0.021, -3.091]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_197_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-9.911, -56.689, 67.894]}
                rotation={[-0.245, -0.264, -0.065]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_200_leaf1_0.geometry}
                material={materials.leaf1}
                position={[79.524, -0.354, 156.486]}
                rotation={[-2.89, -0.001, -3.141]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_201_leaf1_0.geometry}
                material={materials.leaf1}
                position={[48.377, 27.522, 67.023]}
                rotation={[-0.4, -0.076, -0.032]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_2_202_1_leaf1_0.geometry}
                material={materials.leaf1}
                position={[46.498, -98.536, 99.826]}
                rotation={[0.276, -0.648, 0.172]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_204_leaf1_0.geometry}
                material={materials.leaf1}
                position={[9.551, 45.871, 110.01]}
                rotation={[2.483, 0.803, -2.673]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_5_leaf1_0.geometry}
                material={materials.leaf1}
                position={[44.287, 7.207, 85.858]}
                rotation={[0.176, -0.946, 0.238]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_6_leaf1_0.geometry}
                material={materials.leaf1}
                position={[98.589, 12.107, 157.873]}
                rotation={[1.285, -1.024, 1.878]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_7_leaf1_0.geometry}
                material={materials.leaf1}
                position={[104.874, 20.633, 169.211]}
                rotation={[2.778, -0.498, 2.473]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_13_leaf1_0.geometry}
                material={materials.leaf1}
                position={[55.566, 309.275, 151.245]}
                rotation={[2.5, -0.653, 2.804]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_13_2_leaf1_0.geometry}
                material={materials.leaf1}
                position={[55.566, 309.275, 151.245]}
                rotation={[0.449, -0.765, 0.148]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_13_3_leaf1_0.geometry}
                material={materials.leaf1}
                position={[55.566, 309.275, 151.245]}
                rotation={[1.416, 0.38, -1.573]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_13_1_leaf1_0.geometry}
                material={materials.leaf1}
                position={[43.156, 291.682, 145.603]}
                rotation={[0.989, 0.756, -0.912]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_23_leaf1_0.geometry}
                material={materials.leaf1}
                position={[28.119, 215.565, 144.531]}
                rotation={[0.677, 0.586, 0.009]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_24_leaf1_0.geometry}
                material={materials.leaf1}
                position={[32.227, 173.493, 119.359]}
                rotation={[0.258, -0.519, 0.13]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_29_leaf1_0.geometry}
                material={materials.leaf1}
                position={[38.75, 16.244, 79.993]}
                rotation={[0.342, 0.867, -0.265]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_31_leaf1_0.geometry}
                material={materials.leaf1}
                position={[36.095, 176.37, 151.912]}
                rotation={[1.882, 1.022, -1.845]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_33_leaf1_0.geometry}
                material={materials.leaf1}
                position={[12.689, 267.895, 214.367]}
                rotation={[2.775, 0.149, -2.94]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_37_leaf1_0.geometry}
                material={materials.leaf1}
                position={[109.565, -49.634, 96.923]}
                rotation={[2.928, -1.168, 3.011]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_38_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-3.138, 59.987, 94.395]}
                rotation={[-0.492, 1.029, 0.43]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_39_leaf1_0.geometry}
                material={materials.leaf1}
                position={[29.091, 206.703, 175.263]}
                rotation={[2.436, -0.712, 2.265]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_41_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-46.69, -22.749, 37.909]}
                rotation={[0.231, -0.146, -0.413]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_42_leaf1_0.geometry}
                material={materials.leaf1}
                position={[11.175, 52.488, 108.478]}
                rotation={[2.263, 0.268, -2.833]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_43_leaf1_0.geometry}
                material={materials.leaf1}
                position={[9.646, 87.946, 222.116]}
                rotation={[2.939, 0.29, 2.85]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_52_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-42.25, 129.282, 53.351]}
                rotation={[0.339, 0.187, -0.365]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_53_leaf1_0.geometry}
                material={materials.leaf1}
                position={[59.261, 54.63, 46.654]}
                rotation={[0.49, -1.16, 0.455]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_55_leaf1_0.geometry}
                material={materials.leaf1}
                position={[85.91, 175.968, 185.631]}
                rotation={[2.117, -0.917, 2.171]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_58_leaf1_0.geometry}
                material={materials.leaf1}
                position={[142.868, 157.662, 121.261]}
                rotation={[2.421, -0.924, 2.237]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_4_60_leaf1_0.geometry}
                material={materials.leaf1}
                position={[51.833, 174.662, 77.167]}
                rotation={[0.434, 0.573, -0.246]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_3_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-13.581, 73.411, 84.9]}
                rotation={[-0.201, 1.24, 0.415]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_5_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-94.593, 77.257, 138.511]}
                rotation={[1.732, 1.291, -1.596]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_7_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-23.75, 14.515, 130.6]}
                rotation={[2.681, 0.834, -2.861]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_8_leaf1_0.geometry}
                material={materials.leaf1}
                position={[19.898, -38.286, 211.63]}
                rotation={[3.082, 0.263, -3.098]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_10_leaf1_0.geometry}
                material={materials.leaf1}
                position={[16.395, -3.204, 276.943]}
                rotation={[2.604, 0.089, -3.126]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_9_leaf1_0.geometry}
                material={materials.leaf1}
                position={[47.751, -44.292, 133.482]}
                rotation={[2.732, -0.291, 3.031]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_leaf1_0.geometry}
                material={materials.leaf1}
                position={[91.273, 96.95, 124.713]}
                rotation={[0.555, -1.174, 0.611]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leafplanes_1_leaf1_0.geometry}
                material={materials.leaf1}
                position={[-41.883, 117.672, 60.343]}
                rotation={[0.546, 0.654, -0.364]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/oak_trees.glb',"draco/gltf/")


