'use client'
import ProjectSummary, * as projects from "../projects/project_summary";
import projectStyles from '../projects/projects.module.css'
import styles from './resume.module.css'
import about from '../about/about.module.css';

import FadeInWhenVisible from '../animations';


export default function Resume() {

  return (
    <div style={{overflowY: 'hidden'}}>
      <FadeInWhenVisible className="bubble" style = {{marginTop: '0px'}}>
        <h1>
          Resume
        </h1>
        <p>
          Click on the button below to download my resume
        </p>
        <a className={projectStyles.projectLearnMore} style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }} href={'/images/Resume.pdf'}>
          <p>Click Here</p>
          <img style={{height: '34px'}} src={'/images/download.webp'} alt="download" />
        </a>
        <img style={{ maxHeight: '500px' }} src={'/images/Resume.webp'} alt="resume" />
        <h1>
          Associates in Arts from Guilford Technical Community College
        </h1>
        <p>
          Click on the button below to download my Associates in Arts
        </p>
        <a className={projectStyles.projectLearnMore} style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }} href={'/images/associates_in_arts.webp'}>
          <p>Click Here</p>
          <img style={{height: '34px'}} src={'/images/download.webp'} alt="download" />
        </a>
        <img style={{ maxHeight: '500px' }} src={'/images/associates_in_arts.webp'} alt="associates" />
        <h1>
          Java Programming Certification from Guilford Technical Community College
        </h1>
        <p>
          Click on the button below to download my Java Programming Certification
        </p>
        <a className={projectStyles.projectLearnMore} style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }} href={'/images/java_certification.webp'}>
          <p>Click Here</p>
          <img style={{height: '34px'}} src={'/images/download.webp'} alt="download" />
        </a>
        <img style={{ maxHeight: '500px' }} src={'/images/java_certification.webp'} alt="associates" />
      </FadeInWhenVisible>
    </div>
  );
}
