import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Perspective } from './components/Perspective';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
export function App() {
  return <main className="min-h-screen w-full bg-[#F5F5F7] selection:bg-[#0071E3] selection:text-white">
      <Navbar />
      <Hero />
      <Perspective />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>;
}