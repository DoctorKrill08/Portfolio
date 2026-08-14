'use client'
import ProjectSummary, * as projects from "../projects/project_summary";
import projectStyles from '../projects/projects.module.css'
import styles from './contact.module.css'
import about from '../about/about.module.css';

import FadeInWhenVisible from '../animations';


export default function Aware() {

  return (
    <div>
      <FadeInWhenVisible className="bubble" style = {{marginTop: '0px'}}>
        <h1>
          Contact
        </h1>
        <h2>Email:</h2>
        <p>
          ethankimufg@gmail.com
        </p>
        <a className={projectStyles.projectLearnMore} href={'mailto:ethankimufg@gmail.com'}>Email Me</a>
        <h2>LinkedIn:</h2>
        <p>
          https://www.linkedin.com/in/ethan-kim-590275394
        </p>
        <a className={projectStyles.projectLearnMore} href={'https://www.linkedin.com/in/ethan-kim-590275394'}>My LinkedIn</a>

      </FadeInWhenVisible>
    </div>
  );
}
