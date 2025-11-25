import React, { useEffect } from 'react';
import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = props => {
  const gltf = useGLTF('/models/react.glb');

  // 🐛 **ONE-TIME LOG** (shows **EXACT** names → Reply me!)
  useEffect(() => {
    console.log('🔥 NODES:', Object.keys(gltf.nodes));
    console.log('🔥 MATS:', Object.keys(gltf.materials));
  }, []);

  return (
    <Float floatIntensity={1} dispose={null}>
      <group position={[8, 8, 0]} {...props} scale={0.3} dispose={null}>
        {Object.entries(gltf.nodes).map(([name, node]) =>
          node.isMesh ? (
            <mesh
              key={name}
              
              castShadow
              receiveShadow
              geometry={node.geometry}
              position={[0, 0.079, 0.181]}
              scale={[0.39, 0.39, 0.5]}
              // scale={1.4}
              rotation={[0, 0, -Math.PI / 2]}
              material={gltf.materials[node.material.name]}
            />
          ) : null
        )}
      </group>
    </Float>
  );
};

useGLTF.preload('/models/react.glb');
export default ReactLogo;
