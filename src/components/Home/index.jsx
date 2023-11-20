import React, { useLayoutEffect } from 'react';

import { gsap } from 'gsap-trial/dist/gsap';

import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';

import music from '../../assets/music/AboutPage.mp3';

import frontend from '../../assets/frontend.gif';
import hard from '../../assets/hard.gif';
import ok from '../../assets/ok.gif';
import { ContextPortfolio } from '../context/Context';

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const { audio } = React.useContext(ContextPortfolio);

  let tl = React.useRef();

  const audioRef = React.useRef();

  const main = React.useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()

        .from('.code__up', {
          x: 300,
          opacity: 0,
          duration: 1,
          stagger: { each: 0.04, from: 'start' },
          ease: 'power4.inOut',
        })
        .from(
          '.code__down',
          {
            x: 300,
            opacity: 0,
            duration: 1,
            stagger: { each: 0.06, from: 'start' },
            ease: 'power4.inOut',
          },
          '<',
        )

        .from('.home__text', { x: 50, opacity: 0, duration: 0.5 }, '-=.4')
        .from('.main__arrow', {
          height: 0,
          duration: 0.7,
        })

        .from(
          '.main__arrow__pointer',
          {
            opacity: 0,
            duration: 0.8,
          },
          '<',
        );
    }, main);

    return () => ctx.revert();
  }, []);
  React.useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const lines = self.selector('.item__line');
      const titles = self.selector('.about__title');
      const info = self.selector('.about__info');
      const item_titles = self.selector('.item__title');
      const texts = self.selector('.item__desc');
      const pictures = self.selector('.item__pictures');

      lines.forEach((line) => {
        gsap.to(line, {
          width: '100%',
          opacity: 80,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: line,
            start: 'top 60%',
            end: 'bottom 70%',
          },
        });
      });
      titles.forEach((title) => {
        gsap.from(title, {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: title,
            start: 'top 60%',
            end: 'bottom 70%',
          },
        });
      });

      item_titles.forEach((item_title) => {
        gsap.from(item_title, {
          opacity: 0,
          y: 10,
          duration: 0.5,
          scrollTrigger: {
            trigger: item_title,
            start: 'top 60%',
            end: 'bottom 60%',
          },
        });
      });
      texts.forEach((text) => {
        gsap.from(text, {
          opacity: 0,
          y: 10,
          duration: 0.5,
          scrollTrigger: {
            trigger: text,
            start: 'top 70%',
            end: 'bottom 70%',
          },
        });
      });
      pictures.forEach((picture) => {
        gsap.to(picture, {
          clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
          // y: 25,
          ease: 'power4.inOut',
          duration: 2,

          scrollTrigger: {
            trigger: picture,
            start: 'top 90%',
            end: 'bottom 90%',
          },
        });
      });
      info.forEach((item) => {
        gsap.from(item, {
          opacity: 0.1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'top 20%',
            scrub: true,
          },
        });
      });
      // });
    }, main);
    return () => ctx.revert();
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    if (audio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audio]);

  return (
    <section className="relative overflow-x-hidden  py-28 ">
      <div className="container" ref={main}>
        <div className="absolute right-[4rem] top-0 max-sm:hidden">
          <div className="main__arrow relative h-[30rem] w-[1px] bg-[#455762] max-lg:h-[27rem]">
            <div className="main__arrow__pointer absolute w-3 h-3 bg-[#455762] rounded-full top-[105%] right-[50%] translate-x-[50%] "></div>
          </div>
        </div>
        <div className="relative flex flex-col h-screen max-sm:mt-14">
          <div className="w-1/2 max-lg:w-full max-md:w-[80%]">
            <div className="flex flex-wrap gap-2.5 mb-4 max-sm:gap-1.5 max-sm:mb-3">
              <div className="w-28 h-[14px] bg-gradient-to-r from-yellow-200 to-red-400 code__up max-md:w-20 max-md:h-[10px] max-sm:w-12 "></div>

              <div className="w-24 h-[14px] bg-gradient-to-r bg-gray-500 rounded-full code__up max-md:w-16 max-md:h-[10px] max-sm:w-10 "></div>
              <div className="w-4 h-[14px] bg-gradient-to-r bg-gray-500 rounded-full code__up max-md:w-3 max-md:h-[10px] "></div>
              <div className="w-28 h-[14px] bg-gradient-to-r from-yellow-200 to-red-400 code__up max-lg:w-12 max-md:w-24 max-md:h-[10px] max-sm:w-16 "></div>
            </div>
            <div className="flex flex-wrap gap-2.5 mb-4 max-sm:gap-1.5 max-sm:mb-3">
              <div className="w-48 h-[14px] bg-gradient-to-r from-green-300 to-blue-400 code__up max-md:w-30 max-md:h-[10px] max-sm:w-28 "></div>
              <div className="w-4 h-[14px] bg-gradient-to-r bg-gray-500  code__up max-md:w-3 max-md:h-[10px] "></div>
            </div>
            <div className="flex flex-wrap gap-2.5 max-sm:gap-1.5 max-sm:mb-3">
              <div className="w-36 h-[14px] bg-gradient-to-r from-yellow-200 to-red-400 code__up max-md:w-20 max-md:h-[10px] max-sm:w-[5rem] "></div>
              <div className="w-40 h-[14px] bg-gradient-to-r bg-gray-500 rounded-full code__up max-md:w-24 max-md:h-[10px] max-sm:w-16 "></div>
              <div className="w-4 h-[14px] bg-gradient-to-r bg-gray-500 rounded-full code__up max-md:w-3 max-md:h-[10px]"></div>
              <div className="w-48 h-[14px] bg-gradient-to-r from-purple-500 to-pink-500 code__up max-md:w-30 max-md:h-[10px] max-sm:w-16 "></div>
            </div>
          </div>
          <div className="text py-8 home__text max-md:py-5">
            <span className="text-2xl max-sm:text-xl">&lt;div&gt;</span>
            <div className="p-8 max-md:p-4 ">
              <h1 className="text-6xl mb-4 font-medium max-lg:text-4xl max-sm:text-2xl max-sm:mb-2">
                <span className="text-red-500">&lt;</span>Evgeniy Kobzev /
                <span className="text-blue-600">&gt;</span>
              </h1>
              <p className="text-3xl max-sm:text-xl">Web Developer </p>
            </div>
            <span className="text-2xl max-sm:text-xl">&lt;/div&gt;</span>
          </div>
          <div className="w-1/2 max-lg:w-full max-md:w-[80%] ">
            <div className="flex flex-wrap gap-2.5 mb-11 max-sm:mb-9 max-sm:gap-1.5 ">
              <div className="w-44 h-[14px] bg-gradient-to-r from-yellow-200 to-red-300 code__down max-md:w-28 max-md:h-[10px] max-sm:w-20 "></div>
              <div className="w-20 h-[14px] bg-gradient-to-r from-green-200 to-blue-400 code__down max-md:w-12 max-md:h-[10px] max-sm:w-8"></div>
              <div className="w-32 h-[14px] bg-gradient-to-r bg-gray-500 rounded-full code__down max-md:w-24 max-md:h-[10px] max-sm:w-12"></div>
              <div className="w-4 h-[14px] bg-gradient-to-r bg-gray-500 rounded-full code__down max-md:w-3 max-md:h-[10px]"></div>
            </div>
            <div className="flex flex-wrap gap-2.5 mb-4 max-sm:gap-1.5 max-sm:mb-3">
              <div className="w-36 h-[14px] bg-gradient-to-r from-purple-500 to-pink-500 code__down max-md:w-26 max-md:h-[10px] max-sm:w-[4rem]"></div>
              <div className="w-4 h-[14px] bg-gradient-to-r bg-gray-500 rounded-full code__down max-md:w-3 max-md:h-[10px] "></div>
              <div className="w-24 h-[14px] bg-gradient-to-r bg-gray-500 rounded-full code__down max-md:w-16 max-md:h-[10px] max-sm:w-20"></div>
            </div>
            <div className="flex flex-wrap gap-2.5 max-sm:gap-1.5 max-sm:mb-3">
              <div className="w-48 h-[14px] bg-gradient-to-r from-green-300 to-blue-400 code__down max-md:w-30 max-md:h-[10px] max-sm:w-24"></div>
              <div className="w-4 h-[14px] bg-gradient-to-r bg-gray-500 code__down max-md:w-3 max-md:h-[10px]"></div>
              <div className="w-32 h-[14px] bg-gradient-to-r from-yellow-200 to-red-400 code__down max-md:w-20 max-md:h-[10px] max-sm:w-16"></div>
            </div>
          </div>
          {/* {window.innerWidth < 550 && (
            <div
              ref={outputCicle}
              className="absolute outline z-[2] left-[50%] -translate-x-[50%] bottom-[30%] w-6 h-10 bg-white flex justify-center rounded-full">
              <div className=" w-3 h-3 bg-gray-950 mt-1 rounded-full" ref={innerCircle}></div>
            </div>
          )} */}
        </div>
        <div className="relative z-[2]">
          <div className="  mb-40">
            <div className="relative ">
              <span className="item__line  absolute left-0 top-[50%] w-0 h-[1px] bg-white opacity-0 -translate-y-[50%] "></span>
              <h1
                className=" about__title inline-block relative z-[2] px-6 text-[7rem] uppercase ml-[9rem] title bg-gray-950 max-lg:text-[5rem]
            
            max-sm:text-[4rem] max-sm:ml-[2rem] max-[500px]:text-[3rem] max-[500px]:ml-[0rem] max-[500px]:px-1
            ">
                Brief Info
              </h1>
            </div>
            <p className="about__info text-[50px] leading-[55px] max-md:text-[30px]  mt-10 uppercase max-md:leading-[28px]">
              I’m a creative developer / software engineer. I use Javascript, Typescript and React
              to create high-end interactive experiences and products. Ready to advance and embody
              the essence of a true professional.
            </p>
          </div>
          <div>
            <div className="relative mb-6 ">
              <span className="item__line absolute left-0 w-0 h-[1px] bg-white opacity-0 top-[50%] -translate-y-[50%] "></span>
              <h1
                className="about__title inline-block relative z-[2] px-6 text-[7rem] uppercase ml-[9rem] title bg-gray-950 max-lg:text-[5rem]
            
            max-sm:text-[4rem] max-sm:ml-[2rem] max-[500px]:text-[3rem] max-[500px]:ml-[0rem] max-[500px]:px-1
            ">
                My Advantages
              </h1>
            </div>
            <div
              className="relative py-24 
          
          after:w-full after:h-[2px]  after:bg-[#696969] after:absolute after:left-0 after:top-full max-sm:py-14
          ">
              <div className=" flex justify-between px-20 items-center max-lg:px-10 max-md:block max-md:px-0">
                <div className="grow-0 shrink-1 basis-[30%] flex flex-col max-lg:basis-[40%]">
                  <h1 className="item__title title text-[45px] leading-[45px] font-bold max-sm:leading-[30px]">
                    I never stop learning
                  </h1>

                  <p className="item__desc text-[18px] text-gray-400 mt-10 max-lg:text-[16px] max-lg:mt-5 max-md:leading-[21px] ">
                    As a frontend developer, the path to mastery is paved with continuous learning.
                    Technologies evolve, design trends shift, and embracing this perpetual learning
                    journey ensures staying at the forefront of web development.
                  </p>
                </div>
                <div className="polygon item__pictures grow-0 shrink-0 basis-[35%] max-lg:basis-[50%] max-md:mt-16 max-sm:max-w-[400px] max-sm:h-[400px] max-sm:mx-auto">
                  <img src={frontend} alt="" className="w-full" />
                </div>
              </div>
            </div>
            <div
              className="relative py-24 before:w-full before:h-[2px]  before:bg-[#696969] before:absolute before:left-0 before:top-0
          
          after:w-full after:h-[2px]  after:bg-[#696969] after:absolute after:left-0 after:top-full max-sm:py-14
          ">
              <div className=" flex justify-between px-20 items-center max-lg:px-10 max-md:block max-md:px-0">
                <div className="polygon item__pictures grow-0 shrink-0 basis-[35%] max-lg:basis-[50%] max-md:hidden max-md:mt-16 max-sm:max-w-[320px] max-sm:h-full max-sm:mx-auto">
                  <img src={hard} alt="" className="w-full" />
                </div>
                <div className="grow-0 shrink-1 basis-[30%] flex flex-col max-lg:basis-[40%]">
                  <h1 className="item__title title text-[45px] leading-[45px] font-bold max-sm:leading-[30px]">
                    Skill + Hard Work + Attn to Detail
                  </h1>

                  <p className="item__desc text-[18px] text-gray-400 mt-10 max-lg:text-[16px] max-lg:mt-5 max-md:leading-[21px]">
                    In the realm of frontend development, the equation for success involves skillful
                    coding, dedicated hard work, and an unwavering attention to detail. Each line of
                    code is a brushstroke, and the fusion of skills, diligence, and precision
                    creates a seamless and visually captivating user experience.
                  </p>
                </div>
                <div className="polygon item__pictures grow-0 shrink-0 basis-[35%] max-lg:basis-[50%] hidden max-md:block max-md:mt-16 max-sm:max-w-[400px] max-sm:h-full max-sm:mx-auto">
                  <img src={hard} alt="" className="w-full" />
                </div>
              </div>
            </div>

            <div
              className="relative py-24 before:w-full before:h-[2px]  before:bg-[#696969] before:absolute before:left-0 before:top-0
          
        max-sm:py-14
          ">
              <div className=" flex justify-between px-20 items-center max-lg:px-10 max-md:block max-md:px-0">
                <div className="grow-0 shrink-1 basis-[30%] flex flex-col max-lg:basis-[40%]">
                  <h1 className="item__title title text-[45px] leading-[45px] font-bold max-sm:leading-[30px]">
                    Eager to Conquer Challenges
                  </h1>

                  <p className="item__desc text-[18px] text-gray-400 mt-10 max-lg:text-[16px] max-lg:mt-5 max-md:leading-[21px] ">
                    Challenges fuel my passion. Whether it's troubleshooting bugs or brainstorming
                    innovative solutions, I approach problems with enthusiasm, turning obstacles
                    into opportunities for growth.
                  </p>
                </div>
                <div className="polygon item__pictures grow-0 shrink-0 basis-[35%] max-lg:basis-[50%] max-md:mt-16 max-sm:max-w-[400px] max-sm:h-full max-sm:mx-auto">
                  <img src={ok} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio src={music} ref={audioRef} autoPlay={true} loop></audio>
    </section>
  );
};
