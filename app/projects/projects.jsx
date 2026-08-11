import React from 'react'
import { useState, useEffect} from "react";
import styles from './projects.module.css';
import FadeInWhenVisible from '../animations';
import * as skills from '../skills/skill_buttons'
import SkillIcon from '../skills/skill_buttons';
import skillStyle from '../skills/skills.module.css';
import { transform } from 'motion';


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
      [DESCRIPTION]: 'March of 2022 to Present\nMy very first project! A roblox multiplayer fighting game where players fight eachother as various Undertale characters. This game achieved over 6 million visits and over 2 million unique users.',
      [TITLE]: 'Undertale Fighting Game',
      [IMAGE]: '/images/UFGIcon.webp',
      [SKILLS]: <div className={skillStyle.projectSkills}>
        <div className={skillStyle.projectSkillTitle}><h2>Skills</h2></div>
        <div className={skillStyle.skillBox}>
          <SkillIcon skill={skills.LUA} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.GAME_DEVELOPEMENT} type={skills.OTHER} />
        </div>
        </div>
    }
  projects[SOAR] = {
      [NAME]: 'SOAR',
      [LINK]: link + 'soar',
      [DESCRIPTION]: ' December of 2024 to August of 2025\nMy first robot! SOAR was a FIRST Tech Challenge Robot for the INTO THE DEEP Season built by team #10195 Night Owls. With the software I developed, this robot achieved the #1 Autonomous Offensive Power Rating in the State',
      [TITLE]: 'SOAR',
      [IMAGE]: '/images/SOAR.webp',
      [SKILLS]: <div className={skillStyle.projectSkills}>
        <div className={skillStyle.projectSkillTitle}><h2>Skills</h2></div>
        <div className={skillStyle.skillBox}>
          <SkillIcon skill={skills.JAVA} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.OPENCV} type={skills.FRAMEWORKS} />
        </div>

        <div className={skillStyle.projectSkillTitle}><h2>Hardware</h2></div>
        <div className={skillStyle.skillBox}>
          <SkillIcon skill={skills.WHEELED_ODOMETRY} type={skills.HARDWARE} />
          <SkillIcon skill={skills.IMU} type={skills.HARDWARE} />
          <SkillIcon skill={skills.WEBCAM} type={skills.HARDWARE} />
        </div>
        <div className={skillStyle.projectSkillTitle}><h2>Abilities</h2></div>
        <div className={skillStyle.skillBox}>
          <SkillIcon skill={skills.CONTROL} type={skills.OTHER} />
          <SkillIcon skill={skills.APRIL_TAGS} type={skills.OTHER} />
        </div>
        </div>
    }
  projects[FURY] = {
      [NAME]: 'FURY',
      [LINK]: link + 'fury',
      [DESCRIPTION]: 'January of 2025 to June of 2026\nFURY was a FIRST Tech Challenge Robot for the DECODE Season built by team #10195 Night Owls. This robot won our teams very first competition since 2017 with impressive software feats like shooting while moving and rapid fire capabilities due to the software I developed.',
      [TITLE]: 'FURY',
      [IMAGE]: '/images/FURY.webp',
    [SKILLS]: <div className={skillStyle.projectSkills}>
      <div className={skillStyle.projectSkillTitle}><h2>Skills</h2></div>
      <div className={skillStyle.skillBox}>
        <SkillIcon skill={skills.JAVA} type={skills.LANGUAGES} />
        <SkillIcon skill={skills.OPENCV} type={skills.FRAMEWORKS} />
      </div>


      <div className={skillStyle.projectSkillTitle}><h2>Hardware</h2></div>
      <div className={skillStyle.skillBox}>
        <SkillIcon skill={skills.WHEELED_ODOMETRY} type={skills.HARDWARE} />
        <SkillIcon skill={skills.IMU} type={skills.HARDWARE} />
        <SkillIcon skill={skills.WEBCAM} type={skills.HARDWARE} />
      </div>

      <div className={skillStyle.projectSkillTitle}><h2>Abilities</h2></div>
      <div className={skillStyle.skillBox}>
        <SkillIcon skill={skills.CONTROL} type={skills.OTHER} />
        <SkillIcon skill={skills.LOCALIZATION} type={skills.OTHER} />
        <SkillIcon skill={skills.APRIL_TAGS} type={skills.OTHER} />
        <SkillIcon skill={skills.SENSOR_FUSION} type={skills.OTHER} />
      </div>
      </div>
    }
  projects[AWARE] = {
      [NAME]: 'AWARE',
      [LINK]: link + 'aware',
      [DESCRIPTION]: 'Summer of 2026\nAWARE was an over 20 year old Pioner 3-DX Robot that was refitted with modern equipment. This Robot was inteded for agricultural robot research. I developed software allowing this robot to accomplish autonomous obstacle avoidance while pathing towards its goal.',
      [TITLE]: 'AWARE',
      [IMAGE]: '/images/AWARE.webp',
      [SKILLS]: <div className={skillStyle.projectSkills}>
        <div className={skillStyle.projectSkillTitle}><h2>Skills</h2></div>
        <div className={skillStyle.skillBox}>
          <SkillIcon skill={skills.PYTHON} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.TYPESCRIPT} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.HTML} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.CSS} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.FAST_API} type={skills.FRAMEWORKS} />
          <SkillIcon skill={skills.WEBSOCKETS} type={skills.FRAMEWORKS} />
          <SkillIcon skill={skills.REACT} type={skills.FRAMEWORKS} />
          <SkillIcon skill={skills.OPENCV} type={skills.FRAMEWORKS} />
          <SkillIcon skill={skills.YOLO} type={skills.FRAMEWORKS} />
        </div>

        <div className={skillStyle.projectSkillTitle}><h2>Hardware</h2></div>
        <div className={skillStyle.skillBox}>
          <SkillIcon skill={skills.JETSON_NANO} type={skills.HARDWARE} />
          <SkillIcon skill={skills.ARDUINO} type={skills.HARDWARE} />
          <SkillIcon skill={skills.DEPTH_CAMERA} type={skills.HARDWARE} />
          <SkillIcon skill={skills.LIDAR} type={skills.HARDWARE} />
          <SkillIcon skill={skills.WHEELED_ODOMETRY} type={skills.HARDWARE} />
          <SkillIcon skill={skills.IMU} type={skills.HARDWARE} />
          <SkillIcon skill={skills.GPS} type={skills.HARDWARE} />
          <SkillIcon skill={skills.RADIO} type={skills.HARDWARE} />
        </div>

        <div className={skillStyle.projectSkillTitle}><h2>Abilities</h2></div>
        <div className={skillStyle.skillBox}>
          <SkillIcon skill={skills.CONTROL} type={skills.OTHER} />
          <SkillIcon skill={skills.MAPPING} type={skills.OTHER} />
          <SkillIcon skill={skills.PATHING} type={skills.OTHER} />
          <SkillIcon skill={skills.LOCALIZATION} type={skills.OTHER} />
          <SkillIcon skill={skills.SENSOR_FUSION} type={skills.OTHER} />
        </div>

        </div>
    }
  projects[MOM] = {
      [NAME]: 'MOM',
      [LINK]: link + 'mom',
      [DESCRIPTION]: 'Summer of 2026\nMOM was a robot that was intended for picking up toys and cloths from the floor. Through my software this robot achieved full wireless FPV control while being able to autonomously track, follow and avoid april tags.',
      [TITLE]: 'MOM',
      [IMAGE]: '/images/MOM.webp',
      [SKILLS]: <div className={skillStyle.projectSkills}>
        <div className={skillStyle.projectSkillTitle}><h2>Skills</h2></div>
        <div className={skillStyle.skillBox}>
          <SkillIcon skill={skills.PYTHON} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.JAVASCRIPT} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.HTML} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.CSS} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.FLASK} type={skills.FRAMEWORKS} />
          <SkillIcon skill={skills.SOCKETIO} type={skills.FRAMEWORKS} />
          <SkillIcon skill={skills.OPENCV} type={skills.FRAMEWORKS} />
        </div>

        <div className={skillStyle.projectSkillTitle}><h2>Hardware</h2></div>
        <div className={skillStyle.skillBox}>
          <SkillIcon skill={skills.JETSON_NANO} type={skills.HARDWARE} />
           <SkillIcon skill={skills.ARDUINO} type={skills.HARDWARE} />
          <SkillIcon skill={skills.DEPTH_CAMERA} type={skills.HARDWARE} />
        </div>

        <div className={skillStyle.projectSkillTitle}><h2>Abilities</h2></div>
        <div className={skillStyle.skillBox}>
          <SkillIcon skill={skills.CONTROL} type={skills.OTHER} />
          <SkillIcon skill={skills.APRIL_TAGS} type={skills.OTHER} />
        </div>
        </div>
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
    <FadeInWhenVisible className="bubble" threshold={0.1} rootMargin='0px 400px'>
      <h1 style={{ height: '70px', borderBottom: '1px solid rgba(255, 255, 255, 0.7)', marginBottom: '20px', marginTop: '10px'}}>Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectBubble}>
            <h2>{project[TITLE]}</h2>
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
