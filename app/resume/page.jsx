'use client'
import ProjectSummary, * as projects from "../projects/project_summary";
import projectStyles from '../projects/projects.module.css'
import styles from './resume.module.css'
import about from '../about/about.module.css';

import FadeInWhenVisible from '../animations';


export default function Aware() {

  return (
    <div>
      <FadeInWhenVisible className="bubble" style = {{marginTop: '0px'}}>
        <h1>
          Resume
        </h1>
        TBA
        <p>
          Click on the button below to download my resume
        </p>
        <a className={projectStyles.projectLearnMore} href={'https://'}>Click Here</a>

      </FadeInWhenVisible>
    </div>
  );
}
