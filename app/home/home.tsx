
import { useState } from "react";
import home from './home.module.css';
import Education from '../education/education';
import Skills from '../skills/skills';



export default function Home({ mobile = false }: { mobile?: boolean }) {
  function skillText(text : string = "") {
    return <p>{text}</p>
  }
  return (
    <div className={home.home}>
      <h1>Ethan Kim</h1>
      <div className={home.profile}>
        <img src={'/images/profile.webp'} alt="profile" />
      </div>
      <div className={home.iconContainer}>
        <a className={home.icon}  href="mailto:ethankimufg@gmail.com"><img src={'/images/gmail_icon.webp'} alt="gmail" /></a>
        <a className={home.icon}  href="https://github.com/DoctorKrill08"><img src={'/images/github_logo.webp'} alt="github" /></a>
        <a className={home.icon} href="https://www.linkedin.com/in/ethan-kim-590275394/"><img src={'/images/linkedin_logo.webp'} alt="linkedin" /></a>
        <a className={home.icon} href="https://www.youtube.com/@EthanKim-t7d"><img src={'/images/youtube_logo.webp'} alt="youtube" /></a>
      </div>
      <p style={{fontSize: '24px', textAlign: 'center', marginLeft: '10px', marginRight: '10px'}}>
        Hello! I am an aspiring Computer Science Major at UNC Chapel Hill. I have been developing software for over 5 years now, please take a look below to see my education, skills, experience, and projects.
      </p>
      <Education />
      <Skills />
    </div>

  );
}
