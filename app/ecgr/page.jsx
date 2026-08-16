'use client'
import ProjectSummary, * as projects from "../projects/project_summary";
import projectStyles from '../projects/projects.module.css'
import styles from './ecgr.module.css'
import about from '../about/about.module.css';

import FadeInWhenVisible from '../animations';


export default function ECGR() {
  return (
    <div>
      <FadeInWhenVisible style = {{marginTop: '0px', textAlign: 'center', marginBottom: '30px'}}>
        <ProjectSummary projectNumber={projects.ECGR}>
          <i style={{ margin: '10px 10px 10px 10px' }}>
            *NOTE: I have handed over BOTH the ECG Robotics Blog page and the Night Owls Team page over to their new respective owners. Therefore it is possible that these pages may have changed since the creation of this page.
          </i>
        </ProjectSummary>
      </FadeInWhenVisible>

      <FadeInWhenVisible style={{ marginTop: '0px', textAlign: 'center' }} className="bubble">
        <h1>ECG Robotics Blog</h1>
        <img style={{ maxWidth: '80%' }} src={'/images/ecgr_blog1.webp'} />
        <i>Above shows a screenshot taken of the ECG Robotics blogs page</i>
        <p>I came up with the idea of the blog and then created it, and added it to the ECG Robotics website. I made each blog page mdx compatable so non programmers would have an easier time creating a blog.</p>
        <p>The blog would include competitions that teams competed in and major events like kickoff.</p>
        <img style={{ maxWidth: '80%' }} src={'/images/cpe.webp'} />
        <i>Above shows a screenshot taken of the CPE competition, which I made a blog about!</i>
        <i style={{marginTop: '10px'}}>Click the button below to see the blog page yourself!</i><a className={projectStyles.projectLearnMore} href={'https://www.ecgrobotics.org/blog'}>Click Here</a>

      </FadeInWhenVisible>
      <FadeInWhenVisible style={{ marginTop: '0px', textAlign: 'center' }} className="bubble">
        <h1>Night Owls Team Page</h1>
        <p>The Night Owls Team Page is a page that displays information about the Night Owls Team, including robots from various seasons, outreach and team rosters. It acts as both a display of the team (showing activity) but also a historical record of the team{"'"}s progress. Take a look below at some screenshots of the team page (in case it changes significantly by the time you are reading this).</p>
        <img style={{ maxWidth: '80%' }} src={'/images/ecgr_team1.webp'} />
        <i>Above shows a screenshot taken of the team overview page.</i>
        <img style={{ maxWidth: '80%' }} src={'/images/ecgr_team2.webp'} />
        <i>Above shows a screenshot taken of the team awards page</i>
        <img style={{ maxWidth: '80%' }} src={'/images/ecgr_team3.webp'} />
        <i>Above shows a screenshot taken of the team page where the user can select a season to view robots, outreach and team roster for.</i>
        <img style={{ maxWidth: '80%' }} src={'/images/ecgr_team4.webp'} />
        <i>Above shows a screenshot taken of the team page where the user can select a part of the robot to learn more about it (ex. arm, slides, climb, etc)</i>
        <img style={{ maxWidth: '80%' }} src={'/images/ecgr_team5.webp'} />
        <i>Above shows a screenshot taken of the team page where the user is viewing the robot{"'"}s climb system. On the actual website a video is playing demonstrating the climb.</i>
        <img style={{ maxWidth: '80%' }} src={'/images/ecgr_team6.webp'} />
        <i>Above shows a screenshot taken of the team page where the robot{"'"}s programming is being explained.</i>
        <img style={{ maxWidth: '80%' }} src={'/images/ecgr_team7.webp'} />
        <i>Above shows a screenshot taken of the team page where the team roster is being shown.</i>
        <img style={{ maxWidth: '80%' }} src={'/images/ecgr_team8.webp'} />
        <i>Above shows a screenshot taken of the team page where the team{"'"}s outreach is being shown.</i>

        <i style={{marginTop: '10px'}}>Click the button below to see the team page yourself!</i><a className={projectStyles.projectLearnMore} href={'https://www.ecgrobotics.org/ftc10195'}>Click Here</a>

      </FadeInWhenVisible>
    </div>
  );
}
