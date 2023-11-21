import React, { useLayoutEffect } from 'react';

import ux from '../../../assets/icons_skill/ux.jpg';
import html from '../../../assets/icons_skill/html.jpeg';
import javascript from '../../../assets/icons_skill/javascript.png';
import css from '../../../assets/icons_skill/css.png';
import sass from '../../../assets/icons_skill/sass.png';
import tailwind from '../../../assets/icons_skill/tailwind.png';
import react from '../../../assets/icons_skill/react.png';
import redux from '../../../assets/icons_skill/redux.png';
import nextjs from '../../../assets/icons_skill/nextjs.png';
import typescript from '../../../assets/icons_skill/typescript.png';
import node from '../../../assets/icons_skill/node.png';
import express from '../../../assets/icons_skill/express.png';
import sql from '../../../assets/icons_skill/sql.png';
import postgresql from '../../../assets/icons_skill/postgresql.png';
import mongodb from '../../../assets/icons_skill/mongodb.png';

import git from '../../../assets/icons_skill/git.png';
import gitlab from '../../../assets/icons_skill/gitlab.png';
import github from '../../../assets/icons_skill/github.png';
import figma from '../../../assets/icons_skill/figma.png';
import blender from '../../../assets/icons_skill/blender.png';
import ubuntu from '../../../assets/icons_skill/ubuntu.png';

import { gsap } from 'gsap-trial/dist/gsap';

import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';
import { ContextPortfolio } from '../../context/Context';

gsap.registerPlugin(ScrollTrigger);

const skillImages = [
  ux,
  html,
  javascript,
  css,
  sass,
  tailwind,
  react,
  redux,
  nextjs,
  typescript,
  node,
  express,
  sql,
  postgresql,
  mongodb,
  git,
  github,
  gitlab,
  figma,
  blender,
  ubuntu,
];

export const SkillFrontend = () => {
  const { audio } = React.useContext(ContextPortfolio);

  const [years, setYears] = React.useState(0);
  const [projects, setProjects] = React.useState(0);

  const [categorySkill, setCategorySkill] = React.useState(1);

  const [isLoading, setIsLoading] = React.useState(false);

  const [skills, setSkills] = React.useState([]);

  const closeRef = React.useRef();

  const [infoSkill, setInfoSkill] = React.useState({});
  const [popupState, setPopupState] = React.useState(false);

  const [skillIdx, setSkillIdx] = React.useState(null);

  const yearsRef = React.useRef();
  const projectsRef = React.useRef();
  const popupRef = React.useRef();

  const infoSkillRef = React.useRef();

  const [refs, setRef] = useArrayRef();

  const modalSkill = React.useRef();

  const tl = React.useRef();
  const skillsTl = React.useRef();
  const popupTl = React.useRef();
  const audioRef = React.useRef();

  function useArrayRef() {
    const refs = React.useRef([]);
    refs.current = [];
    return [refs, (ref) => ref && refs.current.push(ref)];
  }
  React.useEffect(() => {
    setIsLoading(true);
    const fetchSkills = async () => {
      const res = await fetch(
        `https://6541149bf0b8287df1fdbf4a.mockapi.io/skills?category=${categorySkill}`,
      );
      const data = await res.json();

      setSkills(data);
      setIsLoading(false);
    };

    fetchSkills();
  }, [categorySkill]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // const timeline = gsap.timeline();
      tl.current = gsap.timeline();
      if (window.innerWidth > 550) {
        skills.forEach((skill, index) => {
          tl.current.to(
            refs.current[index],
            {
              left: skill.left,
              top: skill.top,

              duration: 1,

              ease: 'power4.easeIn',
            },
            '<',
          );
        });
      } else {
        tl.current.to(
          refs.current,
          {
            opacity: 1,
            duration: 0.5,
            ease: 'power4.easeIn',
          },
          '<',
        );
      }

      return () => ctx.revert();
    });
  }, [skills]);

  React.useEffect(() => {
    if (window.innerWidth > 550) {
      refs.current.forEach((skill) => {
        skill.addEventListener('mousemove', (e) => {
          if (refs.current) {
            let x = e.offsetX;
            let y = e.offsetY;
            let SkillWidth = skill.clientWidth;
            let SkillHeight = skill.clientWidth;
            let moveX = x - SkillWidth / 2;
            let moveY = y - SkillHeight / 2;

            gsap.to(skill, {
              x: moveX,
              y: moveY,

              duration: 0.3,
              ease: 'power3.easeIn',
            });
          }
        });
        refs.current.forEach((skill) => {
          skill.addEventListener('mouseout', (e) => {
            gsap.to(skill, {
              x: 0,
              y: 0,
              duration: 1.5,
              ease: 'power3.easeIn',
            });
          });
        });
      });
    }
  }, [skills]);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      skillsTl.current = gsap.timeline({ paused: true }).to(refs.current[skillIdx], {
        onReverseComplete: () => {
          setSkillIdx(null);
          document.body.classList.remove('lock');
        },
      });

      refs.current.forEach((ref, index) => {
        if (skillIdx !== index) {
          skillsTl.current.to(
            ref,
            {
              opacity: 0,
              pointerEvents: 'none',
              duration: 0.5,
            },
            '<',
          );
        }
      });
      skillsTl.current.to(
        popupRef.current,
        {
          pointerEvents: 'none',
          opacity: 0,
          duration: 0.5,
        },
        '<',
      );
      skillsTl.current.to(refs.current[skillIdx], {
        opacity: 0,
        // pointerEvents: 'none',
        duration: 0.5,
      });
      skillsTl.current.to(refs.current[skillIdx], {
        // opacity: 0,
        pointerEvents: 'none',
        // duration: 0.5,
      });

      skillsTl.current.to(
        modalSkill.current,
        {
          opacity: 1,
          visibility: 'visible',
          duration: 0.8,
        },
        '<',
      );

      skillsTl.current.to(
        '.img_skill_modal',
        {
          clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
          // y: 25,
          ease: 'power4.inOut',
          duration: 1,
        },
        '<',
      );
      skillsTl.current.to(
        '.img_modal_overlay',
        {
          clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
          // y: 25,
          ease: 'power4.inOut',
          duration: 1,
        },
        '-=.4',
      );
      skillsTl.current.from('.title_skill_modal', {
        opacity: 0,
        left: '40%',
        duration: 0.3,
      });
      skillsTl.current.from('.text_skill_modal', {
        opacity: 0,
        y: 20,
        duration: 0.4,
      });
      skillsTl.current.from(infoSkillRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
      });
    }, modalSkill);

    return () => ctx.revert();
  }, [skillIdx]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      popupTl.current = gsap
        .timeline({ paused: true })
        .to(popupRef.current, {
          height: '60%',
          ease: 'power4.inOut',
          duration: 1.5,
          onReverseComplete: () => {
            document.body.classList.remove('lock');
          },
        })

        .to(
          '.popup_item',
          {
            opacity: 1,
            visibility: 'visible',
            duration: 0.5,

            ease: 'power3.inOut',

            onComplete: () => {
              document.body.classList.add('lock');
            },
          },
          '-=.3',
        );
    }, popupRef);

    return () => ctx.revert();
  }, []);

  const handleClickSkill = (idx) => {
    setSkillIdx(idx);
    setInfoSkill(skills[idx]);

    setYears(skills[idx].desc.years);
    setProjects(skills[idx].desc.projects);

    document.body.classList.add('lock');
  };

  const handleMoveSkillsBack = () => {
    skillsTl.current.reverse();
  };

  React.useEffect(() => {
    if (skillIdx !== null) {
      skillsTl.current.play();
    }

    modalSkill.current.scrollTo(0, 0);
  }, [skillIdx]);
  // React.useEffect(() => {
  //   let observer = new IntersectionObserver(
  //     (entries, observer) => {
  //       const entry = entries[0];

  //       if (entry.isIntersecting) {
  //         setTimeout(() => {
  //           updateCounter(years, setYears);
  //           updateCounter(projects, setProjects);
  //           observer.unobserve(entry.target); // Отключаем наблюдение после срабатывания
  //         }, 1000);
  //       }
  //     },
  //     { once: true }, // Устанавливаем опцию `once` в `true`
  //   );
  //   observer.observe(infoSkillRef.current);
  // }, [skillIdx]);

  // const updateCounter = (count, fn) => {
  //   let currentValue = 0;

  //   if (currentValue === count) {
  //     return;
  //   }

  //   const interval = setInterval(() => {
  //     currentValue += 1;

  //     fn(currentValue);
  //     if (currentValue >= count) {
  //       clearInterval(interval);
  //     }
  //   }, 100);
  // };

  React.useEffect(() => {
    if (popupState) {
      gsap.to(refs.current, {
        opacity: 0.2,
        pointerEvents: 'none',
        duration: 0.5,
      });
      popupTl.current.play();
    } else {
      popupTl.current.reverse();
      gsap.to(refs.current, {
        opacity: 1,
        delay: 0.5,
        pointerEvents: 'auto',
        duration: 0.5,
      });
    }
  }, [popupState]);
  const changeCategorySkill = (category) => {
    popupTl.current.reverse();
    window.scrollTo(0, 0);
    setTimeout(() => {
      setPopupState(false);
      setCategorySkill(category);
    }, 1000);
  };

  React.useEffect(() => {
    if (audio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audio]);

  return (
    <>
      <div
        className={`  
      
      ${categorySkill === 1 && 'max-sm:h-[250vh] '}
      ${categorySkill === 2 && 'max-sm:h-[150vh]'}
      ${categorySkill === 3 && 'max-sm:h-[170vh]'}
      
      
      overflow-x-hidden max-sm:pt-20 relative `}>
        <div className="container ">
          <div className="flex items-center justify-center h-screen ">
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              skills.map((item, index) => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                  onClick={() => handleClickSkill(index)}>
                  <div
                    ref={setRef}
                    style={{
                      left: window.innerWidth < 550 && item.leftSm,
                      top: window.innerWidth < 550 && item.topSm,
                      transform: window.innerWidth < 550 && 'translate(-50%, 0)',
                    }}
                    className={`${
                      window.innerWidth < 550 ? 'opacity-0 z-[2]' : 'z-[7] group-hover:z-[8]'
                    } absolute border-2  bg-gray-950 border-[#333] w-[165px] h-[165px] flex items-center justify-center rounded-full`}>
                    <span className="z-[2]  static pointer-events-none group-hover:text-black overflow-hidden ">
                      {item.title}
                    </span>
                    <div className="absolute left-0 top-0   w-full h-full rounded-full group-hover:scale-[1.4] group-hover:bg-white  group-hover:duration-200 "></div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div
            className="overlay fixed outline  left-0 top-0 w-screen h-screen overflow-y-scroll opacity-0  z-[6]  invisible "
            ref={modalSkill}>
            <div className="relative top-52  px-[1rem] max-w-[1000px] mx-auto ">
              <div
                className="absolute right-16 -top-20 cursor-pointer  max-[600px]:right-[1rem] z-[8]"
                onClick={handleMoveSkillsBack}
                ref={closeRef}>
                <span className="text-[20px] uppercase">close</span>
              </div>
              <div className="relative row flex top-6 py-10 items-start max-[600px]:block">
                <div className="grow-0 shrink-0 basis-[50%] ">
                  <div
                    className={`title_skill_modal whitespace-nowrap text-center absolute left-[52%] -top-10 text-[100px] -translate-x-[50%] title font-bold leading-[7rem] z-[2] max-[600px]:-top-[2%] max-[600px]:text-[55px] max-[600px]:leading-[3.5rem] max-[370px]:text-[65px]`}>
                    <p>{infoSkill?.title}</p>
                  </div>
                  <div className="img_skill_modal absolute z-[-1] -top-20 w-[400px] h-[400px] outline2 max-[800px]:w-[300px] polygon max-[600px]:h-[250px] max-[600px]:relative max-[600px]:w-full max-[600px]:-top-10 overflow-hidden">
                    <div className="img_modal_overlay absolute w-full h-full bg-gray-950 opacity-50 top-0 polygon"></div>
                    <img
                      src={skillImages[infoSkill.id - 1]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="  grow-1 shrink-1 basis-auto pl-[2rem] flex flex-col mt-24 max-sm:pl-0 max-sm:mt-0 max-sm:mb-[5rem]">
                  <p className="text_skill_modal self-center">{infoSkill.desc?.text}</p>

                  <div className=" flex mt-20 mx-[-10px] justify-between" ref={infoSkillRef}>
                    <div className="px-[10px] ">
                      <span ref={yearsRef} className="text-[3rem] font-bold ">
                        {years}
                      </span>
                      <p className="info_skill_modal text-gray-400 text-[14px]">
                        Years of Expirence
                      </p>
                    </div>
                    <div className="px-[10px] ">
                      <span ref={projectsRef} className="text-[3rem] font-bold ">
                        {projects}
                      </span>
                      <p className="info_skill_modal text-gray-400 text-[14px]">
                        Projects completed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="fixed -bottom-16 left-0 w-full h-[0%] max-[500px]:h-[8%] bg-slate-950 opacity-90 z-[9] px-[1rem] "
            ref={popupRef}>
            <div className="popup_item opacity-0 invisible flex items-center justify-center h-full gap-24 max-[600px]:gap-12 max-[500px]:gap-6 pb-20 uppercase title">
              <div
                className="cursor-pointer text-[3rem] max-sm:text-[2rem]"
                onClick={() => changeCategorySkill(1)}>
                Frontend
              </div>
              <div
                className="cursor-pointer text-[3rem] max-sm:text-[2rem]"
                onClick={() => changeCategorySkill(2)}>
                Backend
              </div>
              <div
                className="cursor-pointer  text-[3rem] max-sm:text-[2rem]"
                onClick={() => changeCategorySkill(3)}>
                Other
              </div>
            </div>
            <div
              onClick={() => setPopupState(!popupState)}
              className=" absolute left-[50%] -translate-x-[50%] cursor-pointer bottom-[5.5rem] flex gap-1  px-[.9rem] py-[.3rem] rounded-full bg-white ">
              <h1 className="text-black max-md:text-[14px] ">Choose a skills</h1>
            </div>
          </div>
        </div>
        <audio
          src={'https://assets.mixkit.co/music/preview/mixkit-ambient-251.mp3'}
          ref={audioRef}
          autoPlay={true}
          loop></audio>
      </div>
    </>
  );
};
