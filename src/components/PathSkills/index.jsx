import gsap from 'gsap';
import React from 'react';
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

import { ContextPortfolio } from '../context/Context';

// const start = 'M 0 100 V 50 Q 50 0 100 50 V 100 z';
let start = '';
if (window.innerWidth > 768) {
  start = 'M 0 100 V 50 Q 50 0 100 50 V 100 z';
} else {
  start = 'M 0 100 V 50 Q 50 30 100 50 V 100 z';
}
const end = 'M 0 100 V 0 Q 50 0 100 0 V 100 z';

export const PathSkills = () => {
  const { audio, setNavigation } = React.useContext(ContextPortfolio);

  const tl = React.useRef();

  const path = React.useRef();
  const pathSkills = React.useRef();

  const audioRef = React.useRef();

  const main = React.useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(path.current, {
          duration: 0.8,

          attr: { d: start },
          ease: 'power2.easeIn',
        })
        .to(
          path.current,
          {
            duration: 0.8,
            attr: { d: end },
            ease: 'power2.easeOut',
          },
          '-=0.2',
        )
        .to(pathSkills.current, {
          opacity: 1,
          visibility: 'visible',
          ease: 'power4.inOut',
          duration: 1,
        });
    }, main);
    return () => ctx.revert();
  }, []);

  React.useEffect(() => {
    if (audio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audio]);

  return (
    <div className="fixed  w-full overflow-hidden z-[5] " ref={main}>
      <div className="container ">
        <div className=" h-screen flex items-center justify-center relative z-[5]">
          <div
            className="outline1 absolute w-[30rem] h-[30rem] border-[2px] border-[#6b7280a8]
          max-[500px]:w-[20rem] max-[500px]:h-[20rem] max-[370px]:w-[17rem] max-[370px]:h-[17rem]
          opacity-0 invisible 
          "
            ref={pathSkills}>
            <div className="inline-block z-[2] absolute -left-[6%] top-[56%]">
              <Link
                to={'/contact'}
                onClick={() => setNavigation(false)}
                className="w-3 h-3 border-2 border-white relative rounded-full
                 flex items-center justify-center
              ">
                <div className="bg-white w-1 h-1 rounded-full animate-ping"></div>
              </Link>
              <Link
                to={'/contact'}
                onClick={() => setNavigation(false)}
                className="absolute left-[3rem] top-[0rem] uppercase path__item text-[18px] max-sm:text-[16px] max-sm:left-[2rem]">
                Contact
              </Link>
            </div>
            <div className="inline-block z-[2] absolute left-[55%] -top-[6%] max-[500px]:-top-[6%]">
              <Link
                to={'/projects'}
                onClick={() => setNavigation(false)}
                className="w-3 h-3 border-2 border-white rounded-full relative
                 flex items-center justify-center
              ">
                <div className="bg-white w-1 h-1 rounded-full animate-ping"></div>
              </Link>
              <Link
                onClick={() => setNavigation(false)}
                to={'/projects'}
                className="absolute -left-[2rem] top-[3.5rem] uppercase path__item text-[18px] max-sm:text-[16px] max-sm:top-[2rem]">
                Projects
              </Link>
            </div>
            <div className="inline-block z-[2] absolute left-[103%] top-[50%]">
              <Link
                to={'/skills'}
                onClick={() => setNavigation(false)}
                className="w-3 h-3 border-2 border-white rounded-full relative
                 flex items-center justify-center
              ">
                <div className="bg-white w-1 h-1 rounded-full animate-ping"></div>
              </Link>
              <Link
                to={'/skills'}
                onClick={() => setNavigation(false)}
                className="absolute -left-[6rem] -top-[1.5rem] uppercase path__item text-[18px] max-sm:text-[16px] max-sm:-left-[5rem]">
                Skills
              </Link>
            </div>
            <div className="inline-block z-[2] absolute left-[45%] top-[102%]">
              <Link
                to={'/about'}
                onClick={() => setNavigation(false)}
                className="w-3 h-3 border-2 border-white rounded-full relative
                 flex items-center justify-center
              ">
                <div className="bg-white w-1 h-1 rounded-full animate-ping"></div>
              </Link>
              <Link
                to={'/about'}
                onClick={() => setNavigation(false)}
                className="absolute -left-[0rem] -top-[3rem] uppercase path__item text-[18px] max-sm:text-[16px]">
                About
              </Link>
            </div>
            <div
              className="outline2  absolute w-[30rem] h-[30rem] border-[2px] border-[#6b7280a8]
          max-[500px]:w-[20rem] max-[500px]:h-[20rem] max-[370px]:w-[17rem] max-[370px]:h-[17rem] 
     
          "></div>
          </div>
        </div>

        <svg
          className={`fixed left-0 top-0 w-screen overflow-hidden h-full`}
          viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <path
            ref={path}
            className="path fill-slate-900 stroke-slate-900"
            strokeWidth={'2px'}
            dur={'10s'}
            vectorEffect={'non-scaling-stroke'}
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
          <animateMotion dur={'10s'} repeatCount={'indefinite'}>
            <mpath xlinkHref="#path" />
          </animateMotion>
        </svg>
      </div>
      <audio
        src={'https://assets.mixkit.co/music/preview/mixkit-staring-at-the-night-sky-168.mp3'}
        ref={audioRef}
        autoPlay={true}
        loop></audio>
    </div>
  );
};
