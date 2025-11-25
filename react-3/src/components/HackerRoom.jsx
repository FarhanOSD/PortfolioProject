import React, { useMemo } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

export function HackerRoom(props) {
  const { nodes, materials } = useGLTF('/models/cyber_dragon_chair.glb');

  const slateColor = '#475569';

  const monitorTextur = useTexture(
    'textures copy/3MPILL-a1UVs4_metallicRoughness.png'
  );
  const screenTexture = useTexture(
    'textures copy/farhan.png'
  );

  const chairMaterial = useMemo(() => {
    const mat = materials['CHAIR-a1UVs3'].clone();
    mat.color.set(slateColor);
    return mat;
  }, [materials]);

  const monitorMaterial = useMemo(() => {
    const mat = materials['3MPILL-a1UVs4'].clone();
    mat.color.set(slateColor);
    return mat;
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <group scale={0.048}> // The main Size
        <group position={[0, 1171.009, 66.209]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['a2UVs1_key-sup-mou-a2UVs1_0'].geometry}
            material={materials['key-sup-mou-a2UVs1']}
          ></mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['a2UVs1_6_key-sup-mou-a2UVs1_0'].geometry}
            material={materials['key-sup-mou-a2UVs1']}
            position={[0, -228.485, 118.593]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['a2UVs1_5_key-sup-mou-a2UVs1_0'].geometry}
            material={materials['key-sup-mou-a2UVs1']}
            position={[0, 347.066, 62.541]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['a2UVs1_4_key-sup-mou-a2UVs1_0'].geometry}
            material={materials['key-sup-mou-a2UVs1']}
            position={[0, 288.58, 149.176]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['a2UVs1_3_key-sup-mou-a2UVs1_0'].geometry}
            material={materials['key-sup-mou-a2UVs1']}
            position={[0, 178.302, 214.991]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['a2UVs1_2_key-sup-mou-a2UVs1_0'].geometry}
            material={materials['key-sup-mou-a2UVs1']}
            position={[0, 279.658, 214.207]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['a2UVs1_1_key-sup-mou-a2UVs1_0'].geometry}
            material={materials['key-sup-mou-a2UVs1']}
            position={[0, 374.928, 132.351]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JUST_MAT_xBot__xbot_0.geometry}
          material={materials.xbot}
          position={[5.132, 740.407, 13.773]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['mech_HEAD-a1UVs1_0'].geometry}
          material={materials['HEAD-a1UVs1']}
          position={[0, 1448.075, -556.8]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['faceExtra01_HEAD-a1UVs1_0'].geometry}
          material={materials['HEAD-a1UVs1']}
          position={[0, 1720.132, 166.495]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['faceExtra02_HEAD-a1UVs1_0'].geometry}
          material={materials['HEAD-a1UVs1']}
          position={[0, 1692.272, 208.444]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['mainHead_HEAD-a1UVs1_0'].geometry}
          material={materials['HEAD-a1UVs1']}
          position={[0, 1764.443, 126.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['a1UVs1_HEAD-a1UVs1_0'].geometry}
          material={materials['HEAD-a1UVs1']}
          position={[0, 1271.011, -485.395]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['tail_2_1_TAIL+EXTRa1UVs2_0'].geometry}
          material={materials.TAILEXTRa1UVs2}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['a1UVs3_CHAIR-a1UVs3_0'].geometry}
          material={chairMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['a1UVs4_3M+PILL-a1UVs4_0'].geometry}
          material={monitorMaterial}
        >
          <meshMatcapMaterial map={screenTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['monitor_left_3M+PILL-a1UVs4_0'].geometry}
          material={monitorMaterial}
          position={[602.664, 1231.5, 46.289]}
          rotation={[0, 0.419, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['monitorMid_3M+PILL-a1UVs4_0'].geometry}
          material={monitorMaterial}
          position={[0, 1231.501, 182.663]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['monitor_right_3M+PILL-a1UVs4_0'].geometry}
          material={monitorMaterial}
          position={[-602.664, 1231.5, 46.289]}
          rotation={[0, -0.419, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/cyber_dragon_chair.glb');

export default HackerRoom;