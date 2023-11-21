import gsap from 'gsap';
import React, { useLayoutEffect } from 'react';

import headphones from '../../assets/icons/headphones.svg';
import { ContextPortfolio } from '../context/Context';

export const Preloader = () => {
  const [counter, setCounter] = React.useState(0);

  const { setAudio } = React.useContext(ContextPortfolio);

  const loader = React.useRef();
  const count = React.useRef();
  const text = React.useRef();
  const sound = React.useRef();

  const [enableSound, setEnubleSound] = React.useState(false);

  const [refs, setRef] = useArrayRef();

  let tl = React.useRef();

  function useArrayRef() {
    const refs = React.useRef([]);
    refs.current = [];
    return [refs, (ref) => ref && refs.current.push(ref)];
  }

  const headPhones = React.useRef();

  React.useEffect(() => {
    if (enableSound) {
      gsap.set(
        headPhones.current,
        {
          opacity: 0,
          duration: 0.1,
        },
        '<',
      );
      gsap.to(refs.current, {
        opacity: 0,
        duration: 0.6,
        stagger: {
          from: 'center',
          each: 0.04,
        },
      });

      gsap.to(
        text.current,
        {
          top: -30,
          opacity: 0,
          duration: 1,
        },
        '<',
      );
      gsap.to(
        sound.current,
        {
          opacity: 0,

          duration: 1,
        },
        '<',
      );
      gsap.to(loader.current, {
        opacity: 0,
        delay: 1,
        zIndex: -99999,
        duration: 1,
      });

      document.body.classList.remove('lock');
    }
  }, [enableSound]);

  React.useEffect(() => {
    gsap.fromTo(
      headPhones.current,
      {
        opacity: 0.2,
      },
      {
        scale: 1.2,
        opacity: 1,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
      },
    );

    updateCounter();

    document.body.classList.add('lock');
  }, []);
  React.useEffect(() => {
    if (counter === 100) {
      gsap.to(count.current, {
        top: -70,
        delay: 1,
        duration: 1.5,
      });
      gsap.to(sound.current, {
        opacity: 1,
        delay: 2,
        duration: 1,
        visibility: 'visible',
      });
    }
  }, [counter]);

  const updateCounter = () => {
    let currentValue = 0;

    if (counter === 100) {
      return;
    }

    const interval = setInterval(() => {
      currentValue += Math.floor(Math.random() * 10) + 1;

      if (currentValue >= counter) {
        if (currentValue >= 100) {
          clearInterval(interval);
          setCounter(100);
        } else {
          setCounter(currentValue);
        }
      }
    }, Math.floor(Math.random() * 200) + 250);
  };

  const handleSound = () => {
    setEnubleSound(true);
    setAudio(true);
  };

  return (
    <div
      ref={loader}
      className="fixed  w-screen h-full left-0 top-0 flex items-center justify-center z-[99999] bg-gray-950 overflow-y-hidden">
      <div className="absolute left-0 bottom-0 px-[60px] py-[80px] leading-[80%] max-md:px-[30px] max-md:py-[40px]">
        <h1
          className="relative top-0 text-[60px] max-md:text-[50px] max-sm:text-[45px] title "
          ref={count}>
          {counter}%
        </h1>
        <div className="absolute  top-0 w-full h-full after:absolute after:-top-[120px] max-md:after:-top-[70px] after:left-0 after:w-[105%] after:h-[105%] after:bg-gray-950 "></div>
      </div>
      <div className=" text-center">
        <div className="relative">
          {'Code Mingle'.split('').map((item, idx) => (
            <span
              key={idx}
              className="relative text-[70px] title top-0 max-md:text-[60px]"
              ref={setRef}>
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 ">
          <img
            src={headphones}
            alt=""
            className="relative w-8 h-8 mx-auto z-[2]"
            ref={headPhones}
          />
          <div className="relative">
            <p
              className="font-bold uppercase text-[18px] mt-5 relative top-0 max-md:text-[14px]"
              ref={text}>
              grab a pair of headphones and enjoy
            </p>
            <div className="absolute  top-0 w-full h-full after:absolute after:-top-[30px] max-md:after:-top-[30px]  after:left-0 after:w-[105%] after:h-[105%] after:bg-gray-950 "></div>
          </div>
          <div
            className="mt-10 justify-center flex items-center  text-[1rem] opacity-0 invisible  cursor-pointer  "
            ref={sound}
            onClick={handleSound}>
            Click
            <svg
              className="relative w-[80px] top-0 px-[0.4em] max-sm:w-[40px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 68 10">
              <defs></defs>
              <path
                fill="#e2e2dd"
                d="M59.2,9.6V6.2h-58v-2c0,0,0,0,0,0h58V0.7L67,5.1L59.2,9.6Z"></path>
            </svg>
            to enable the sound
          </div>
        </div>
      </div>
    </div>
  );
};
