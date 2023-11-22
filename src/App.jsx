import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Info } from './components/Info';
import { Cursor } from './components/Cursor';

import { Header } from './components/Header';

import { PathSkills } from './components/PathSkills';
import { Preloader } from './components/Preloader';

import { ContextProvider } from './components/context/Context';
import { StartsCanvas } from './components/Stars';

const WorksPage = React.lazy(() => import('./components/Works'));
const SkillFrontendPage = React.lazy(() => import('./components/SkillCircle/SkillFrontend'));
const AboutPage = React.lazy(() => import('./components/Home'));
const ContactPage = React.lazy(() => import('./components/Contact'));

export default function App() {
  return (
    <div
      className="relative  bg-gray-950 min-h-screen  text-white
    ">
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<PathSkills />} />
          <Route
            path="/projects"
            element={
              <Suspense fallback={null}>
                <WorksPage />
              </Suspense>
            }
          />
          <Route
            path="/skills"
            element={
              <Suspense fallback={null}>
                <SkillFrontendPage />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={null}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={null}>
                <ContactPage />
              </Suspense>
            }
          />
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
