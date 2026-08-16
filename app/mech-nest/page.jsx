'use client'
import ProjectSummary, * as projects from "../projects/project_summary";
import projectStyles from '../projects/projects.module.css'
import styles from './mechnest.module.css'
import about from '../about/about.module.css';

import FadeInWhenVisible from '../animations';


export default function MechNest() {
  return (
    <div>
      <FadeInWhenVisible style = {{marginTop: '0px', textAlign: 'center', marginBottom: '30px'}}>
        <ProjectSummary projectNumber={projects.MECH_NEST}>
          <p style = {{margin: '10px 10px 10px 10px'}}>
            Mechnest was built in React, hosted via Github Pages, and the domain was purchased from godaddy. At the time of making this website, I was lead programmer and somebody else was captain. The captain said we needed a flagship outreach project and thus MechNest was born. I designed, programmed, and deployed the website myself.
          </p>
          <i style={{marginTop: '10px'}}>Click the button below to see the website yourself!</i><a className={projectStyles.projectLearnMore} href={'https://mech-nest.com/'}>Click Here</a>
        </ProjectSummary>
      </FadeInWhenVisible>

      <FadeInWhenVisible style={{ marginTop: '0px', textAlign: 'center' }} className="bubble">
        <h1>More Info</h1>
        <img style={{ maxWidth: '80%' }} src={'/images/mechnest_sc.webp'} />
        <i>Above shows a screenshot taken of MechNest</i>
        <p>Robotics Teams would upload there Robot CAD and information via a google form. Then it would be reviewed and then added into the website. If a user clicks on a robot card they can fullscreen for a better view, and if they click on the robot{"'"}s picture, it will open the CAD file of the robot. The user could also use filters to search for a specific type of robot (ex. search by season, drivetrain type, subsystems, etc).</p>
      </FadeInWhenVisible>
    </div>
  );
}
