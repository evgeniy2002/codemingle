import React, { useLayoutEffect } from 'react';

import { gsap } from 'gsap-trial/dist/gsap';

import { ContextPortfolio } from '../context/Context';
import { Link } from 'react-router-dom';

export const Contact = () => {
  let tween;

  const marquee = React.useRef();
  const main = React.useRef();

  const tl = React.useRef();
  const { audio } = React.useContext(ContextPortfolio);

  const audioRef = React.useRef();

  const [refs, setRef] = useArrayRef();

  function useArrayRef() {
    const refs = React.useRef([]);
    refs.current = [];
    return [refs, (ref) => ref && refs.current.push(ref)];
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(marquee.current, {
          opacity: 1,
          duration: 2,
          ease: 'power4.inOut',
        })
        .from(
          '.contact__desc',
          {
            opacity: 0,
            duration: 1,
          },
          '-=1',
        )
        .from(
          '.contact__link',
          {
            opacity: 0,
            duration: 1,
          },
          '-=0.5',
        );
    }, main);
    return () => ctx.revert();
  }, []);

  const debounce = (func) => {
    let timer;
    return function (event) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(
        () => {
          func();
        },
        500,
        event,
      );
    };
  };

  const playMarque = () => {
    let progress = tween ? tween.progress() : 0;
    tween && tween.progress(0).kill();
    const width = parseInt(getComputedStyle(refs.current[1]).getPropertyValue('width'), 10);
    const gap = parseInt(getComputedStyle(refs.current[1]).getPropertyValue('column-gap'), 10);

    const disanceToTranslate = gap + width;

    tween = gsap.fromTo(
      refs.current,
      {
        x: 0,
      },
      {
        x: disanceToTranslate,
        duration: 100,
        ease: 'none',
        repeat: -1,
      },
    );
    tween.progress(progress);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    playMarque();

    window.addEventListener('resize', debounce(playMarque));

    return () => {
      window.removeEventListener('resize', playMarque);
    };
  }, []);

  React.useEffect(() => {
    if (audio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audio]);

  return (
    <div className="relative z-[2]" ref={main}>
      <div
        className="flex justify-center items-center pt-32 mb-10 w-full opacity-0 overflow-hidden max-sm:mb-0"
        ref={marquee}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="flex gap-[2rem] mr-10 max-sm:gap-[1rem] max-sm:mr-0" ref={setRef}>
            <p className="contact__text text-[12rem]  uppercase whitespace-nowrap mr-4">
              Lets talk
            </p>
            <p className="contact__text text-[12rem]  uppercase whitespace-nowrap mr-4">
              Lets talk
            </p>
            <p className="contact__text text-[12rem]  uppercase whitespace-nowrap mr-4">
              Lets talk
            </p>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="flex items-end  justify-between max-sm:block ">
          <div className="contact__desc max-w-sm ">
            <p className=" relative top-[20px] text-gray-200  text-[16px] max-sm:text-[18px]">
              I will always consider cooperation with authors and creative teams.
            </p>
          </div>

          <div className="contact__link flex  gap-12 pl-10 max-sm:pl-0 max-sm:mt-20 ">
            <Link to={'https://github.com/evgeniy2002'} className="text-[18px]">
              Github
            </Link>
            <Link to={'mailto:evgenij.kobzev2002@inbox.ru'} className="text-[18px]">
              Mail
            </Link>
          </div>
        </div>
      </div>
      <audio
        src={'https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3'}
        ref={audioRef}
        autoPlay={true}
        loop></audio>
    </div>
  );
};
