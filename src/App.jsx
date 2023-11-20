import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Info } from './components/Info';
import { Cursor } from './components/Cursor';

import { Header } from './components/Header';
import { SkillFrontend } from './components/SkillCircle/SkillFrontend';

import { PathSkills } from './components/PathSkills';
import { Preloader } from './components/Preloader';

import { Works } from './components/Works';
import { Home } from './components/Home';
import { ContextProvider } from './components/context/Context';
import { Contact } from './components/Contact';
import { StartsCanvas } from './components/Stars';

function App() {
  return (
    <div
      className="relative  bg-gray-950 min-h-screen  text-white
    ">
      <ContextProvider>
        <Header />

        <Routes>
          <Route path="/" element={<PathSkills />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/skills/" element={<SkillFrontend />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Home />} />
        </Routes>

        <Info />
        <Preloader />
        {window.innerWidth > 800 && <Cursor />}
      </ContextProvider>

      <div>
        <StartsCanvas />
      </div>
    </div>
  );
}

export default App;
