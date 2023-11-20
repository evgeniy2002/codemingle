import gsap from 'gsap';
import React from 'react';

export const Cursor = () => {
  const cursorRef = React.useRef();
  const followerRef = React.useRef();

  const moveCursor = (e) => {
    const { clientX, clientY } = e;
    gsap.to(cursorRef.current, {
      x: clientX - 10,
      y: clientY - 10,
      duration: 0.5,
    });
    // gsap.to(cursorRef.current, {
    //   x: e.clientX,
    //   y: e.clientY,
    // });
    // gsap.to(followerRef.current, {
    //   x: e.clientX,
    //   y: e.clientY,
    //   duration: 0.9,
    // });
  };

  const onMouseEnterLink = (event) => {
    const link = event.target;
    if (link.classList.contains('view')) {
      gsap.to(cursorRef.current, {
        scale: 4,
        duration: 0.4,
        background: 'transparent',
      });
    }
  };

  const onMouseLeaveLink = (e) => {
    gsap.to(cursorRef.current, { scale: 1, duration: 0.5, background: '#fff' });
  };

  // useLayoutEffect(() => {
  //   gsap.set(cursorRef.current, {
  //     xPercent: -100,
  //     yPercent: -100,
  //   });
  //   gsap.set(followerRef, {
  //     xPercent: 0,
  //     yPercent: 0,
  //   });
  // }, []);

  React.useEffect(() => {
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  });

  return (
    <div
      ref={cursorRef}
      className="cursor fixed left-0 top-0 w-[15px] h-[15px]  bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference p-[10px] flex justify-center items-center">
      {/* <div
        ref={cursorRef}
        className="fixed left-20 top-20 translate-x-[-50%] translate-y-[-50%] rounded-full z-50 pointer-events-none   w-2 h-2 bg-white"></div>
      <div
        ref={followerRef}
        className="fixed left-20 top-20 translate-x-[-50%] translate-y-[-50%] rounded-full z-50 pointer-events-none w-14 h-14 border-2 border-white"></div> */}
    </div>
  );
};
