import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Experience } from '../Experience';

export const CanvasModel = ({ setViewModal }) => {
  const closeModel = () => {
    setViewModal(false);
  };

  return (
    <>
      <Canvas shadows camera={{ position: [4, 0, 6], fov: 35 }}>
        <fog attach="fog" args={['#213547', 10, 20]} />

        <Experience />
      </Canvas>

      <div
        className=" absolute cursor-pointer right-[20%] top-[5rem] text-black z-[999] text-[20px]   max-sm:top-[2rem] max-sm:right-[10%]"
        onClick={closeModel}>
        Close
      </div>
    </>
  );
};
