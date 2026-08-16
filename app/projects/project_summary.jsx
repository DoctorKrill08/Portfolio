import * as skills from '../skills/skill_buttons'
import SkillIcon from '../skills/skill_buttons';
import skillStyle from '../skills/skills.module.css';
import { transform } from 'motion';
import projectStyles from './projects.module.css';

  export const LINK = 'link'
  export const DESCRIPTION = 'description'
  export const TITLE = 'title'
  export const IMAGE = 'image'
  export const SKILLS = 'skills'
  export const YEAR = 'year'

  export const UFG = 0
  export const MECH_NEST = 1
  export const SOAR = 2
  export const ECGR = 3
  export const FURY = 4
  export const AWARE = 5
  export const MOM = 6

  export const NAME = 'NAME'

  export const projects = []
  projects[UFG] = {
      [NAME]: 'UFG',
      [LINK]: '/ufg',
      [YEAR]: 'March of 2022 to May of 2026',
      [DESCRIPTION]: 'My very first project! A roblox multiplayer fighting game where players fight eachother as various Undertale characters. This game achieved over 6 million visits and over 2 million unique users.',
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
  projects[MECH_NEST] = {
      [NAME]: 'MECH_NEST',
      [LINK]: '/mech-nest',
      [YEAR]: 'November of 2024 to January of 2025',
      [DESCRIPTION]: 'My first website! Mech-Nest is a CAD repository of robots from various different FTC and FRC teams from various different years. This project was made for team #10195 Night Owls and the website has been fully transfered to the team.',
      [TITLE]: 'Mech-Nest',
      [IMAGE]: '/images/mechnest_logo.webp',
      [SKILLS]: <div className={skillStyle.projectSkills}>
        <div className={skillStyle.projectSkillTitle}><h2>Skills</h2></div>
        <div className={skillStyle.skillBox}>
          <SkillIcon skill={skills.JAVASCRIPT} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.HTML} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.CSS} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.REACT} type={skills.FRAMEWORKS} />
        </div>
        </div>
    }
  projects[SOAR] = {
      [NAME]: 'SOAR',
      [LINK]: '/soar',
      [YEAR]: 'December of 2024 to August of 2025',
      [DESCRIPTION]: 'My first robot! SOAR was a FIRST Tech Challenge Robot for the INTO THE DEEP Season built by team #10195 Night Owls. With the software I developed, this robot achieved the #1 Autonomous Offensive Power Rating in the State',
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
  projects[ECGR] = {
      [NAME]: 'ECGR',
      [LINK]: '/ecgr',
      [YEAR]: 'Summer of 2025',
      [DESCRIPTION]: 'Created generic team pages for all the ECG Robotics Teams, then created a detailed Team #10195 Night Owls Team page. Finally, created a ECG Robotics club blog page.',
      [TITLE]: 'ECGR Team Page & Blog',
      [IMAGE]: '/images/ecgr_logo.webp',
      [SKILLS]: <div className={skillStyle.projectSkills}>
        <div className={skillStyle.projectSkillTitle}><h2>Skills</h2></div>
        <div className={skillStyle.skillBox}>
          <SkillIcon skill={skills.JAVASCRIPT} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.HTML} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.CSS} type={skills.LANGUAGES} />
          <SkillIcon skill={skills.REACT} type={skills.FRAMEWORKS} />
        </div>
        </div>
    }
projects[FURY] = {
      [NAME]: 'FURY',
      [LINK]: '/fury',
      [YEAR]: 'January of 2025 to June of 2026',
      [DESCRIPTION]: 'FURY was a FIRST Tech Challenge Robot for the DECODE Season built by team #10195 Night Owls. This robot won our teams very first competition since 2017 with impressive software feats like shooting while moving and rapid fire capabilities due to the software I developed.',
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
      [LINK]: '/aware',
      [YEAR]: 'Summer of 2026',
      [DESCRIPTION]: 'AWARE was an over 20 year old Pioner 3-DX Robot that was refitted with modern equipment. This Robot was inteded for agricultural robot research. I developed software allowing this robot to accomplish autonomous obstacle avoidance while pathing towards its goal.',
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
      [LINK]: '/mom',
      [YEAR]: 'Summer of 2026',
      [DESCRIPTION]: 'MOM was a robot that was intended for picking up toys and cloths from the floor. Through my software this robot achieved full wireless FPV control while being able to autonomously track, follow and avoid april tags.',
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

  export const projectLength = Object.keys(projects).length

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

export default function ProjectSummary({ projectNumber, children = null}) {
    if (projectNumber < 0 || projectNumber >= projectLength) {
      return null
    }
    const project = projects[projectNumber]
    return (
      <div className='bubble'>
        <h1>{project.title}</h1>
        <h2>{project.year}</h2>
        <div className={projectStyles.project}><img src={project.image}  alt={project.title} /></div>
        <p>{project.description}</p>
        {children}
      </div>
    );
  }
