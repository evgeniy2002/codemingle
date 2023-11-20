import {
  ContactShadows,
  Environment,
  OrbitControls,
  Preload,
  useProgress,
} from '@react-three/drei';

import { Book } from './Models/Book';
import { Radio } from './Models/Radio';
import { ContextPortfolio } from './context/Context';
import React, { Suspense } from 'react';
import { Laptop } from './Models/Laptop';
import { Light } from './Models/Light';
import { Pillow } from './Models/Pillow';
import { Cup } from './Models/Cup';
import { Cube } from './Models/Cube';
import { Chair } from './Models/Chair';
import { Flower } from './Models/Flower';
import { Pictures } from './Models/Pictures';
// import CanvasLoader from './Loader';
const CanvasLoader = () => {
  // const { progress } = useProgress();
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};
export const Experience = () => {
  const { title } = React.useContext(ContextPortfolio);

  const objModal = {
    'stack of books': <Book />,
    'old radio': <Radio />,
    'new laptop': <Laptop />,
    'desk lamp': <Light />,
    'pink pillows': <Pillow />,
    'a cup of coffee': <Cup />,
    "rubik's cube": <Cube />,
    armchair: <Chair />,
    flower: <Flower />,
    'beautiful pictures': <Pictures />,
  };

  return (
    <>
      <ambientLight intensity={1} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <spotLight intensity={0.2} angle={0.1} penumbra={1} position={[10, 35, 10]} castShadow />

      <Suspense fallback={<CanvasLoader />}>
        {objModal[title]}

        {/* <Environment preset="city" /> */}

        <Preload all />
      </Suspense>
      <ContactShadows
        resolution={512}
        position={[0, -0.8, 0]}
        opacity={0.6}
        scale={10}
        blur={2}
        far={0.8}
      />
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    </>
  );
};
