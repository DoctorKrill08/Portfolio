
import { useState } from "react";
import education from './education.module.css';
import FadeInWhenVisible from '../animations';

export default function Education() {
  return (
      <FadeInWhenVisible className="bubble">
        <h1 style={{ marginTop: '20px', marginBottom: '20px', height: '70px', borderBottom: '1px solid rgba(255, 255, 255, 0.7)' }}>Education</h1>
        <div className={education.educationContainer}>
          <div className={education.educationItem} style={{backgroundColor: 'transparent', boxShadow: '0 0 4px rgba(39, 133, 245, 1)'}}>
            <h2>University of North Carolina at Chapel Hill</h2>
            <i>First Year (2026) </i>
            <div className={education.educationItemContainer}>
              <p style={{ width: '100%' }}>Description TBA</p>
            </div>
          </div>
          <div className={education.educationItem} style={{backgroundColor: 'transparent',boxShadow: '0 0 4px rgba(23, 133, 53, 1)'}}>
            <h2>Guilford Technical Commmunity College</h2>
            <i>Graduated (2026)</i>
            <p><b>Associates in Arts & Java Programming Certification</b></p>
            <div className={education.educationItemContainer}>
              <a href="/images/associates_in_arts.webp"><img src={"/images/degree_logo.webp"} alt={"associates_in_arts"} /></a>
              <a href="/images/java_certification.webp"><img src={"/images/java_logo.webp"} alt={"java"} /></a>
              <p>Through my Junior and Senior years of highschool I took dual enrollment classes and eventually earned my Associates in Arts and a Java Programming Certification</p>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
  );
}
