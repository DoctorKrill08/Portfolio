import React from 'react'
import { useState } from "react";
import styles from './experience.module.css';
import FadeInWhenVisible from '../animations';


export default function Experience() {
  function skillText(text : string = "") {
    return <p>{text}</p>
  }
  return (
    <div className={styles.home}>
      <FadeInWhenVisible className='bubble'>
        <h1>Experience</h1>
        <div className={styles.container}>
          <div className='miniBubble'>
            <h2>FIRST Tech Challenge (FTC)</h2>
            <i>May 2024 - June 2026</i>
            <h2>Lead Programmer & Team Captain</h2>
            <img style={{ maxWidth: '90%' }} src='/images/ftc_group.webp' alt='ftc group'></img>
            <i>
              Above shows the FTC team I was part of after we just won our first competition since 2017.
            </i>
            <p>
              When I first joined FTC Team 10195, Night Owls, I was a junior in High School, there, I learned how to program in Java and learn the basics of robotics, that summer, my software led to the team reaching the #1 Offensive Power Rating in the State. The year after that, I became captain, and the software I developed there led to our team winning our first qualifier since 2017.
            </p>
            <i>
              See below some of the FTC robots I developed software for (SOAR and FURY).
            </i>
          </div>
          <div className='miniBubble'>
            <h2>A&T CLAEM Internship</h2>
            <i>Summer 2026</i>
            <h2>Software Developer</h2>
            <img style={{ maxWidth: '90%' }} src='/images/claem.webp' alt='claem group'></img>
            <i>
              Above shows me working during the CLAEM internship.
            </i>
            <p>
              The CLAEM internship was a program where high school students interned at A&T and helped graduate students work on there projects, some helped with design and CAD, but I helped with software developement. Here I worked on two robots: AWARE, an agricultural robot, and MOM, an indoor cleaning robot. Here I learned and applied more advanced robotics skills, including mapping, localization, and path planning.
            </p>
            <i>
              Please see below some of the robots I worked on during the CLAEM internship (AWARE and MOM).
            </i>
          </div>
        </div>
      </FadeInWhenVisible>
    </div>

  );
}
