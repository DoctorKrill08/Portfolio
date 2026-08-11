import React from 'react'
import { useState, useEffect} from "react";
import styles from './projects.module.css';
import FadeInWhenVisible from '../animations';
import { number } from 'motion';


export default function Skills({mobile = false }) {
  const LINK = 'link'
  const DESCRIPTION = 'description'
  const TITLE = 'title'
  const IMAGE = 'image'
  const SKILLS = 'skills'

  const link = 'http://127.0.0.1:3000/'
  const UFG = 0
  const SOAR = 1
  const FURY = 2
  const AWARE = 3
  const MOM = 4

  const NAME = 'NAME'

  const projects = []
  projects[UFG] = {
      [NAME]: 'UFG',
      [LINK]: link + 'ufg',
      [DESCRIPTION]: '2022 to Present\nMy very first project! A roblox multiplayer fighting game where players fight eachother as various Undertale characters. This game achieved over 6 million visits and over 2 millio unique users.',
      [TITLE]: 'Undertale Fighting Game',
      [IMAGE]: '/images/UFGIcon.webp',
      [SKILLS]: [],
    }
  projects[SOAR] = {
      [NAME]: 'SOAR',
      [LINK]: link + 'soar',
      [DESCRIPTION]: '2024 to 2025/nMy first robot! SOAR was a FIRST Tech Challenge Robot for the INTO THE DEEP Season. With the software I developed, this robot achieved the #1 Autonomous Offensive Power Rating in the State',
      [TITLE]: 'SOAR',
      [IMAGE]: '/images/SOAR.webp',
      [SKILLS]: [],
    }
  projects[FURY] = {
      [NAME]: 'FURY',
      [LINK]: link + 'fury',
      [DESCRIPTION]: '2025 to 2026\nFURY was a FIRST Tech Challenge Robot for the DECODE Season. This robot won ours teams very first competition since 2017 with impressive software feats like shooting while moving and rapid fire capabilities.',
      [TITLE]: 'FURY',
      [IMAGE]: '/images/FURY.webp',
      [SKILLS]: [],
    }
  projects[AWARE] = {
      [NAME]: 'AWARE',
      [LINK]: link + 'aware',
      [DESCRIPTION]: 'Summer of 2026\nAWARE was an over 20 year old Pioner 3-DX Robot that was refitted with modern equipment. This Robot was inteded for agricultural robot research. I developed software allowing this robot to accomplish autonomous obstacle avoidance while pathing towards its goal.',
      [TITLE]: 'AWARE',
      [IMAGE]: '/images/AWARE.webp',
      [SKILLS]: [],
    }
  projects[MOM] = {
      [NAME]: 'MOM',
      [LINK]: link + 'mom',
      [DESCRIPTION]: 'Summer of 2026\nMOM was a robot that was intended for picking up toys and cloths from the floor. Through my software this robot achieved full wireless FPV control while being able to autonomously track, follow and avoid april tags.',
      [TITLE]: 'MOM',
      [IMAGE]: '/images/MOM.webp',
      [SKILLS]: [],
    }


  const [selectedProject, setSelectedProject] = useState(UFG);
  const projectLength = Object.keys(projects).length

  function getLeft(projectNumber) {
    if (projectNumber - 1 < 0) {
      return projectLength - 1
    }
    if (projectNumber > projectLength - 1) {
      projectNumber = projectLength
    }
    return projectNumber - 1
  }
  function getRight(projectNumber) {
    if (projectNumber >= projectLength - 1) {
      return 0
    }
    if (projectNumber < 0) {
      projectNumber = 0
    }
    return projectNumber + 1
  }


  return (
    <FadeInWhenVisible className="bubble" threshold={0.2} rootMargin='0px 200px'>
      <h1 style={{ height: '70px', borderBottom: '1px solid rgba(255, 255, 255, 0.7)', marginBottom: '20px', marginTop: '10px'}}>Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <a key={index}  href={project[LINK]}>
            <div className={styles.projectBubble}>
              <h2>{project[TITLE]}</h2>
              <div className={styles.project}>
                <img src={project[IMAGE]} alt={project[TITLE]} />
              </div>
                <p>{project[DESCRIPTION]}</p>
            </div>
          </a>
        ))}
      </div>
     </FadeInWhenVisible>
  );
}
