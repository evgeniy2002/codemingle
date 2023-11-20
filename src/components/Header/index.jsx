import React, { useLayoutEffect } from 'react';

import menu from '../../assets/menu.png';

import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap-trial/dist/gsap';

import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const header = React.useRef();
  const location = useLocation();

  return (
    <header
      ref={header}
      className={`header fixed ${
        (location.pathname === '/skills' || location.pathname === '/projects') && 'bg-[#03071297]'
      }  w-full overflow-hidden z-[7] max-sm:pt-2`}>
      <div className="container">
        <div className="relative flex items-center justify-between h-[90px] max-sm:h-[70px]">
          <h1 className="text-white title text-4xl ">Code Mingle</h1>
          <Link
            to={'/'}
            className={`w-8 h-8 rotate-45 cursor-pointer   ${
              location.pathname === '/' && 'pointer-events-none opacity-30'
            }`}>
            <img src={menu} alt="" className="w-auto h-auto" />
          </Link>
        </div>
      </div>
    </header>
  );
};
