import React from 'react'
import { useState, useEffect} from "react";
import styles from './projects.module.css';
import FadeInWhenVisible from '../animations';
import { projects, TITLE, DESCRIPTION, LINK, IMAGE, SKILLS, YEAR } from './project_summary';


export default function Skills({ mobile = false }) {



  return (
    <FadeInWhenVisible className="bubble" threshold={0.1} rootMargin='0px 400px'>
      <h1 style={{ height: '70px', borderBottom: '1px solid rgba(255, 255, 255, 0.7)', marginBottom: '20px', marginTop: '10px'}}>Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectBubble}>
            <h2>{project[TITLE]}</h2>
            <p style={{marginBottom : '10px'}}>{project[YEAR]}</p>
            <div className={styles.project}>
              <a className={styles.projectLearnMore} href={project[LINK]}><img src={project[IMAGE]} alt={project[TITLE]}/></a>

            </div>
            <p style={{ whiteSpace: 'pre-wrap'}}>{project[DESCRIPTION]}</p>
          {project[SKILLS]}
          <a className={styles.projectLearnMore} href={project[LINK]}><div>Learn More</div></a>
          </div>
        ))}
      </div>
     </FadeInWhenVisible>
  );
}
