import React, { useLayoutEffect } from 'react';

import gsap from 'gsap';
import { ContextPortfolio } from '../context/Context';

export const Info = () => {
  const { audio, setAudio } = React.useContext(ContextPortfolio);

  const tl = React.useRef();

  const [refs, setRef] = useArrayRef();

  function useArrayRef() {
    const refs = React.useRef([]);
    refs.current = [];
    return [refs, (ref) => ref && refs.current.push(ref)];
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true }).fromTo(
        refs.current,
        { height: 5 },
        {
          height: 20,

          duration: 0.6,
          stagger: {
            yoyo: true,
            repeat: -1,
            from: 'start',
            each: 0.2,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  React.useEffect(() => {
    audio ? tl.current.play() : tl.current.pause();
  }, [audio]);

  return (
    <div className="fixed min-w-full bottom-4 z-[8]  ">
      <div className="container ">
        <div
          className="w-12 h-12 bg-white rounded-full cursor-pointer"
          onClick={() => setAudio(!audio)}>
          <div className="flex items-center justify-center h-full gap-[2px]">
            <div className="w-[2px] h-2 bg-black " ref={setRef}></div>
            <div className="w-[2px] h-3 bg-black " ref={setRef}></div>
            <div className="w-[2px] h-4 bg-black " ref={setRef}></div>
            <div className="w-[2px] h-3 bg-black " ref={setRef}></div>
            <div className="w-[2px] h-2 bg-black " ref={setRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
