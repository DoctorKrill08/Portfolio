'use client';
import React from 'react';
import { useState, useEffect } from "react";
import './globals.css';
import Sidebar from './sidebar/sidebar';
import About from './about/about';
import Education from './education/education';
import Skills from './skills/skills';
import Projects from './projects/projects';


function useIsMobile(): boolean {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = (): void => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallScreen;
}

export default function Page() {
  const mobile : boolean = useIsMobile();


  return (
    <div className='home'>
        <Sidebar mobile={mobile} />
        <About mobile={mobile}/>
        <Education />
        <Skills />
        <Projects />
    </div>
  );
}
