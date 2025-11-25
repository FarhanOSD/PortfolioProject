import { useRef } from 'react';
import React, { useEffect } from 'react';
import {  useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import {
  useGLTF,
  Stage,
  Grid,
  OrbitControls,
  Environment,
} from '@react-three/drei';
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from '@react-three/postprocessing';
import { easing } from 'maath';

export default function Robot() {
  return (
    <Float floatIntensity={1} dispose={null}>
      <fog attach="fog" args={['black', 15, 22.5]} />
      <Stage
        intensity={0.5}
        environment="city"
        shadows={{ type: 'accumulative', bias: -0.001, intensity: Math.PI }}
        adjustCamera={false}
      >
        <Kamdo rotation={[0, Math.PI, 0]} />
      </Stage>
      <Grid
        renderOrder={-1}
        position={[0, -1.85, 0]}
        infiniteGrid
        cellSize={0.6}
        cellThickness={0.6}
        sectionSize={3.3}
        sectionThickness={1.5}
        sectionColor={[0.5, 0.5, 10]}
        fadeDistance={30}
      />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.05}
        enableZoom={false}
        makeDefault
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={2} mipmapBlur />
        <ToneMapping />
      </EffectComposer>
      <Environment background preset="sunset" blur={0.8} />
    </Float>
  );
}



function Kamdo(props) {
  const head = useRef();
  const stripe = useRef();
  const light = useRef();
  const { nodes, materials } = useGLTF('https://sketchfab.com/models/ae6ba586eb364ab293f6d1e0a04c4026/embed?annotations_visible=0&autospin=-0.1&autostart=1&camera=0&double_click=0&internal=1&max_texture_size=1024&orbit_constraint_pan=1&orbit_constraint_zoom_in=40&orbit_constraint_zoom_out=60&preload=1&scrollwheel=0&sound_enable=0&transparent=1&ui_animations=0&ui_annotations=0&ui_ar=1&ui_ar_help=0&ui_color=white&ui_fadeout=0&ui_fullscreen=1&ui_help=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_theatre=0&ui_theme=dark&ui_vr=0&ui_watermark=0');
  useFrame((state, delta) => {
    const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2;
    stripe.current.color.setRGB(2 + t * 20, 2, 20 + t * 50);
    easing.dampE(
      head.current.rotation,
      [0, state.pointer.x * (state.camera.position.z > 1 ? 1 : -1), 0],
      0.4,
      delta
    );
    light.current.intensity = 1 + t * 4;
  });

  // console.log('GLTF nodes:', nodes);
  // if (!nodes || !nodes.body001 || !nodes.head001 || !nodes.stripe001) {
  //   console.warn('GLTF nodes not ready:', nodes);
  //   return null; // or a loading spinner
  // }

 if (stripe.current?.color) {
   stripe.current.color.setRGB(2 + t * 20, 2, 20 + t * 50);
 }

  return (
    <group {...props}>
      {nodes?.body001?.geometry && (
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.body001.geometry}
          material={materials.Body}
        />
      )}

      <group ref={head}>
        {nodes?.head001?.geometry && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.head001.geometry}
            material={materials.head}
          />
        )}
        {nodes?.stripe001?.geometry &&
          
          
          <mesh castShadow receiveShadow geometry={nodes.stripe001.geometry}>
            <meshBasicMaterial ref={stripe} toneMapped={false} />
            <pointLight
              ref={light}
              intensity={1}
              color={[10, 2, 5]}
              distance={2.5}
            />
          </mesh>
        }
      </group>
    </group>
  );
}

useGLTF.preload('https://sketchfab.com/models/ae6ba586eb364ab293f6d1e0a04c4026/embed?annotations_visible=0&autospin=-0.1&autostart=1&camera=0&double_click=0&internal=1&max_texture_size=1024&orbit_constraint_pan=1&orbit_constraint_zoom_in=40&orbit_constraint_zoom_out=60&preload=1&scrollwheel=0&sound_enable=0&transparent=1&ui_animations=0&ui_annotations=0&ui_ar=1&ui_ar_help=0&ui_color=white&ui_fadeout=0&ui_fullscreen=1&ui_help=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_theatre=0&ui_theme=dark&ui_vr=0&ui_watermark=0');
