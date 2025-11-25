

import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, useVideoTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DemoMonitor = props => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    '/models/ultrawide_monitor.glb'
  );
  const { actions } = useAnimations(animations, group);
  const txt = useVideoTexture(
    props.texture ? props.texture : '/textures/project/project1.mp4'
  );

  useEffect(() => {
    if (txt) {
      txt.flipY = false;
    }
  }, [txt]);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, -0.001, Math.PI]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group
            rotation={[0, 0, Math.PI / 2]}
            scale={[19.412, 536.206, 242.198]}
          >
            <mesh
              name="Ultrawide_Monitor_Screen_0"
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Screen_0.geometry}
              position={[0, 0, 0]} // Adjust if needed to match original placement
              rotation={[3.151, -0.005, 0.031]} // Adjust if needed
              scale={[1, 1, 1]}
            >
              {' '}
              // Adjust if needed for ultrawide fit
              <meshBasicMaterial map={txt} toneMapped={true} />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Body_0_1.geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Lights_0.geometry}
              material={materials.Lights}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/ultrawide_monitor.glb');
export default DemoMonitor;
