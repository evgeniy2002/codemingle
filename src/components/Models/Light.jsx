/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/light.gltf 
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Light(props) {
  const { nodes, materials } = useGLTF('../models/light.gltf');
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0.526, 0]} scale={0.637}>
        <mesh geometry={nodes.Vert_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Vert_2.geometry} material={materials.Handle} />
        <mesh geometry={nodes.Vert_3.geometry} material={materials.bulb} />
        <mesh geometry={nodes.Vert_4.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Vert_5.geometry} material={materials['Material.003']} />
      </group>
    </group>
  );
}

useGLTF.preload('../models/light.gltf');