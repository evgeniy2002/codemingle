/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/flower/scene.gltf 
Author: Maf'j Alvarez (https://sketchfab.com/blujay)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/margarita-flower-58ce34c65642408cb92eab784af2bd6c
Title: Margarita flower
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Flower(props) {
  const { nodes, materials } = useGLTF('../models/flower/scene.gltf');
  return (
    <group {...props} dispose={null} position-y={-0.8} rotation={[0, 1, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.margarita_flower_green_0.geometry} material={materials.green} />
        <mesh geometry={nodes.margarita_flower_white_0.geometry} material={materials.white} />
        <mesh geometry={nodes.margarita_flower_yellow_0.geometry} material={materials.yellow} />
      </group>
    </group>
  );
}

useGLTF.preload('../models/flower/scene.gltf');
