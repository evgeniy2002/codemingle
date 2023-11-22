import React, { useLayoutEffect } from 'react';

import code from '../../assets/icons/code.svg';
import cube from '../../assets/icons/cube.svg';
import world from '../../assets/icons/world.svg';

import gsap from 'gsap';
import { CanvasModel } from '../CanvasModel';
import { ContextPortfolio } from '../context/Context';

export default function Works() {
  const { setTitle: setModelTitle, audio } = React.useContext(ContextPortfolio);

  const [projects, setProjects] = React.useState([]);
  const [link, setLink] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [picture, setPicture] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState(1);
  const [codeLink, setCodeLink] = React.useState('');
  const [year, setYear] = React.useState('');
  const [skills, setSkills] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);

  const [viewModal, setViewModal] = React.useState(false);

  const imgPreviewRef = React.useRef();
  const modal = React.useRef();
  const navRef = React.useRef();

  const audioRef = React.useRef();

  const [refs, setRef] = useArrayRef();

  const tl = React.useRef();
  const tl1 = React.useRef();

  function useArrayRef() {
    const refs = React.useRef([]);
    refs.current = [];
    return [refs, (ref) => ref && refs.current.push(ref)];
  }

  // const addToRefs = (el) => {
  //   if (el && !revealRefs.current.includes(el)) {
  //     revealRefs.current.push(el);
  //   }
  //   console.log(revealRefs.current);
  // };

  React.useEffect(() => {
    setIsLoading(true);
    const fetchProject = async () => {
      const res = await fetch(
        `https://6541149bf0b8287df1fdbf4a.mockapi.io/projects?category=${category}`,
      );
      const data = await res.json();
      setProjects(data);
      setIsLoading(false);
    };

    fetchProject().catch((err) => console.log(err));
  }, [category]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline().to(refs.current, {
        top: 0,
        duration: 0.8,
        ease: 'power3.inOut',
      });
    });
    return () => ctx.revert();
  }, [projects]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl1.current = gsap
        .timeline({ paused: true })

        .to(refs.current, {
          top: '35px',

          duration: 1,
          ease: 'power4.inOut',
          onReverseComplete: () => {
            setTitle('');
          },
        })
        .to(
          navRef.current,
          {
            opacity: 0,
            display: 'none',
            duration: 1,
            ease: 'power4.inOut',
          },
          '<',
        )

        .to(
          imgPreviewRef.current,
          {
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
            ease: 'power4.inOut',
            duration: 0.9,
          },
          '<',
        )
        .to(modal.current, {
          opacity: 1,
          visibility: 'visible',
          duration: 1,
        })
        .to(
          '.img_modal',
          {
            clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
            // y: 25,
            ease: 'power4.inOut',
            duration: 1,
          },
          '<',
        )
        .to(
          '.modal_name',
          {
            duration: 0.8,
            top: 0,
            ease: 'power4.inOut',
          },
          '<',
        )
        .to(
          '.modal_close',
          {
            duration: 0.8,
            top: 0,
            ease: 'power4.inOut',
            zIndex: 3,
          },
          '<',
        )
        .to(['.modal_title', '.modal_info'], {
          opacity: 1,
          visibility: 'visible',
          duration: 1,
          delay: -0.5,
          ease: 'power4.inOut',
        });
    }, modal);
    return () => ctx.revert();
  }, [title]);

  const handleInformation = ({ link, desc, picture, title, category, linkCode, year, skills }) => {
    setLink(link);
    setDesc(desc);
    setSkills(skills);
    setCodeLink(linkCode);
    setTitle(title);
    setCategory(category);
    setPicture(picture);
    setYear(year);

    modal.current.scrollTo(0, 0);
  };

  React.useEffect(() => {
    tl.current.reverse();
  }, [category]);

  React.useEffect(() => {
    if (picture !== '' && title !== '') {
      setTimeout(() => {
        tl1.current.play();
      }, 500);
    }
  }, [title]);

  React.useEffect(() => {
    gsap.to(navRef.current, {
      opacity: 1,
      duration: 0.8,

      ease: 'power4.inOut',
      visibility: 'visible',
    });
  }, []);

  const openViewModel = () => {
    setModelTitle(title.toLowerCase());
    setViewModal(true);
  };

  const changeCategory = (idx) => {
    setCategory(idx);
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
      <div className="container h-screen overflow-hidden overflow-x-hidden">
        <div
          className="absolute top-[100px]  left-[50%] z-[4] -translate-x-[50%] opacity-0 invisible"
          ref={navRef}>
          <ul className="uppercase relative flex gap-10 text-[25px] max-sm:text-[20px] font-bold">
            <li className="cursor-pointer" onClick={() => changeCategory(1)}>
              Frontend
            </li>
            <li className="cursor-pointer" onClick={() => changeCategory(2)}>
              Backend
            </li>
            <li className="cursor-pointer" onClick={() => changeCategory(3)}>
              3d
            </li>
          </ul>
        </div>

        <div className=" h-full flex max-sm:flex-col ">
          <div className="grow-0 shrink-1 basis-[50%]  flex flex-col justify-center relative z-[3] max-sm:absolute max-sm:top-[55%] max-sm:-translate-y-[50%]">
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              projects.map((item) => (
                <div
                  key={item.id}
                  className="item_name relative w-max h-max cursor-pointer "
                  onMouseEnter={() => !title && setPicture(item.picture)}
                  onClick={() =>
                    handleInformation({
                      link: item.link,
                      linkCode: item.linkCode,
                      desc: item.desc,
                      picture: item.picture,
                      title: item.title,
                      skills: item.skills,
                      category: item.category,
                      year: item.year,
                    })
                  }>
                  <span
                    className="relative  top-[35px] text-[26px] uppercase font-bold tracking-[-0.25px] "
                    ref={setRef}>
                    {item.title}
                  </span>
                  <div className="absolute top-0 w-full h-full after:absolute after:top-[30px] after:left-0 after:w-[105%] after:h-[105%] after:bg-gray-950 "></div>
                </div>
              ))
            )}
          </div>
          {picture && (
            <div className="grow-0 shrink-1 basis-[50%] mb-20 flex items-end justify-end z-[3] max-sm:mb-0 max-sm:absolute max-sm:right-0 max-sm:bottom-0">
              <div
                className=" w-[400px] h-[350px] img_polygon max-[800px]:w-[370px] max-[720px]:w-[320px] max-[720px]:h-[320px]
              max-[500px]:hidden
              "
                ref={imgPreviewRef}>
                <img src={picture} alt="" className=" w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>
        {viewModal && (
          <div
            className={`fixed left-0 top-0 bg-[#d0d0d0] flex items-center justify-center z-[999] w-full h-screen`}>
            <CanvasModel setViewModal={setViewModal} />
          </div>
        )}
        <div
          ref={modal}
          className="overlay overflow-x-hidden fixed  left-0 top-0 w-screen h-screen  overflow-y-scroll bg-gray-950  flex flex-col z-[3] invisible opacity-0">
          <div className=" absolute left-[50%] top-[25%] -translate-x-[50%] py-10  max-[770px]:w-full max-[900px]:px-4 max-[900px]:py-20">
            <div className="absolute left-[50%] top-[5%] -translate-x-[50%] z-[2] max-[770px]:top-[10%] ">
              <h1
                className={`whitespace-nowrap title modal_title opacity-0 invisible text-[160px] max-[1030px]:text-[140px] max-[900px]:text-[100px] max-[770px]:text-[85px]   ${
                  title.length > 14 ? 'max-[500px]:text-[40px]' : 'max-[500px]:text-[65px]'
                } `}>
                {title}
              </h1>
              {/* <div className="absolute top-0 w-full h-full after:absolute after:top-[30px] after:left-0 after:w-[105%] after:h-[105%] after:bg-gray-950 "></div> */}
            </div>
            <div className="absolute -top-[40px] flex justify-between w-full items-center right-0 max-[770px]:px-4 ">
              <div>
                <p className="font-bold text-[20px] relative -top-[20px] modal_name">
                  YEAR: <span className="font-normal text-gray-400">{year}</span>
                </p>
                <div className="absolute top-0 w-full h-full after:absolute after:-top-[25px] after:left-0 after:w-[105%] after:h-[105%] after:bg-gray-950 "></div>
              </div>

              {/* <div className="border-white border-2 py-3 px-5 rounded-full "> */}
              <div className="relative z-[6] ">
                <span
                  className="text-gray-400  relative -top-[30px] modal_close cursor-pointer text-[20px]  "
                  onClick={() => tl1.current.reverse()}>
                  Close
                </span>
                <div className="absolute top-0 w-full h-full after:absolute after:-top-[25px] after:left-0 after:w-[105%] after:h-[105%] after:bg-gray-950 "></div>
              </div>
              {/* </div> */}
            </div>
            <div className="img_modal relative max-w-full h-[370px] mx-auto max-[500px]:h-[240px] polygon">
              <img src={picture} alt="" className="w-full h-full object-cover" />
              <div className="absolute left-0 top-0 w-full h-full bg-gray-900 opacity-40"></div>
            </div>
            <div className="mt-10 mb-5 flex max-[500px]:flex-col-reverse opacity-0 invisible modal_info max-sm:px-0">
              <div className="shrink-0 grow-0 basis-[70%] max-[500px]:basis-full pr-5 max-[500px]:mt-10 max-sm:pr-0">
                <p className="text-[14px] mb-10">{desc}</p>
                {category === 3 ? (
                  <div className="cursor-pointer inline-flex items-center" onClick={openViewModel}>
                    <img src={cube} alt="" className="w-7 h-7 " />
                    <span className="text-white uppercase pl-3">View modal</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between ">
                    {link && (
                      <a href={link}>
                        <img src={world} alt="" className="w-8 h-8 inline-block align-middle" />
                        <span className="inline-block pl-2">Live site</span>
                      </a>
                    )}

                    <a href={codeLink}>
                      <img src={code} alt="" className="w-6 h-6 inline-block align-middle" />
                      <span className="inline-block pl-2">view code</span>
                    </a>
                  </div>
                )}
              </div>
              <div className="grow-0 shrink-1 basis-[30%] mr-5 flex justify-end max-[500px]:justify-start max-[500px]:basis-auto ">
                <div className="flex">
                  <span className=" font-bold pr-5">Skills:</span>
                  <ul className="text-gray-400 whitespace-nowrap max-[800px]:whitespace-normal">
                    {skills.map((item) => (
                      <li className="text-[18px] mb-1" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio
        src={'https://assets.mixkit.co/music/preview/mixkit-nature-meditation-345.mp3'}
        ref={audioRef}
        autoPlay={true}
        loop></audio>
    </>
  );
}
