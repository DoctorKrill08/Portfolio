'use client';
import React from 'react';
import { useState, useEffect } from "react";
import './globals.css';
import Sidebar from './sidebar/sidebar';
import About from './about/about';
import Education from './education/education';
import Skills from './skills/skills';
import Projects from './projects/projects';

export default function Page() {
  return (
      <div>
        <About/>
        <Education />
        <Skills />
        <Projects />
      </div>
  );
}
