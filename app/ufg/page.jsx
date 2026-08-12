'use client'
import ProjectSummary, * as projects from "../projects/project_summary";
import projectStyles from '../projects/projects.module.css'
import styles from './ufg.module.css'
import about from '../about/about.module.css';

import FadeInWhenVisible from '../animations';


export default function Ufg() {
  function generateBubble(title, description, videoSrc, learnMoreLink = null) {
    return (
      <FadeInWhenVisible className = "bubble" style={{gap : '20px', padding:'10px'}}>
        <h1>{title}</h1>
        <p>{description}</p>
        <video
          style={{ marginTop: "20px",maxWidth: "min(1000px, 100%)"}}
          controls = {true}
          autoPlay = {false}
          loop = {true}
          muted = {true}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {learnMoreLink && <><i style={{marginTop: '10px'}}>Click the button below to watch a video made during this stage of the games developement</i><a className={projectStyles.projectLearnMore} href={learnMoreLink}>Click Here</a></>}
      </FadeInWhenVisible>
    );
  }

  return (
    <div>
      <FadeInWhenVisible>
        <ProjectSummary projectNumber={projects.UFG}>
          <p style = {{margin: '10px 10px 10px 10px'}}>
            This game was programmed in <b>LuaU</b>, a form of Lua for Roblox, and built in <b>Roblox Studio</b>.
            It started as a <b>passion project</b> between me and two friends and after about two years of updates, the game exploded in popularity and in the span of a couple of months went from about 10k players to over a million.
          </p>
          <i style={{marginTop: '10px'}}>Click the button below to see the game yourself!</i><a className={projectStyles.projectLearnMore} href={'https://www.roblox.com/games/9201541690/Undertale-Fighting-Game'}>Click Here</a>
        </ProjectSummary>
      </FadeInWhenVisible>
      <FadeInWhenVisible className = "bubble">
        <h1>Developers</h1>
        <div className={styles.credits}>
          <div className={styles.miniBubble}>
            <h2>Ethan Kim</h2>
            <i>Creator,Programmer,Game Designer,Visual Effects</i>
            <div className={about.iconContainer}>
              <a className={about.icon}  href="mailto:ethankimufg@gmail.com"><img src={'/images/gmail_icon.webp'} alt="gmail" /></a>
              <a className={about.icon}  href="https://github.com/DoctorKrill08"><img src={'/images/github_logo.webp'} alt="github" /></a>
              <a className={about.icon} href="https://www.linkedin.com/in/ethan-kim-590275394/"><img src={'/images/linkedin_logo.webp'} alt="linkedin" /></a>
              <a className={about.icon}  href="https://www.roblox.com/users/170874514/profile"><img src={'/images/roblox_logo.webp'} alt="roblox" /></a>
            </div>
          </div>
          <div className={styles.miniBubble}>
              <h2>Tyler Knepp</h2>
            <i>Modeler, Map Designer, Community Manager</i>
            <div className={about.iconContainer}>
              <a className={about.icon} href="https://www.linkedin.com/in/tyler-knepp-27b097422"><img src={'/images/linkedin_logo.webp'} alt="linkedin" /></a>
              <a className={about.icon} href="https://www.youtube.com/@TitoDespacito"><img src={'/images/youtube_logo.webp'} alt="youtube" /></a>
               <a className={about.icon} href="https://www.roblox.com/users/170874514/profile"><img src={'/images/roblox_logo.webp'} alt="roblox" /></a>
            </div>
          </div>
          <div className={styles.miniBubble}>
            <h2>Emilio Alanis-Merlin</h2>
            <i>Animator</i>
            <div className={about.iconContainer}>
              <a className={about.icon} href="mailto:alanismerlinemilio@gmail.com"><img src={'/images/gmail_icon.webp'} alt="gmail" /></a>
              <a className={about.icon} href="https://www.roblox.com/users/98459017/profile"><img src={'/images/roblox_logo.webp'} alt="roblox" /></a>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible><h1 style={{ textAlign: 'center',marginTop: '30px', marginBottom: '30px'}}>Timeline</h1></FadeInWhenVisible>
      {generateBubble('Game Creation (March 2022)', 'During the creation of the game, I was started learning to code and ended up creating the games first character, however the quality was not the best...',"/videos/ufgGTFrisk1.mp4")}
      {generateBubble('Pre-Alpha (October 2022)', 'After several months of work the game had 7 characters, a main menu and was released in pre alpha to play. However, we realized the game was still in development and needed to be improved so we decided to step back, delete some characters, and completely rework the game.', '/videos/ufgGTFrisk2.mp4','https://www.youtube.com/watch?v=7YO80dB_Zsg')}
      {generateBubble('Release (February 2023) and Undyne Update (May 2023)', 'After some setbacks and reworks, the game was released including 3 characters (Glitchtale Frisk, Undertale Sans, Omori). Later, in May, a new character (Undyne) and a new map (Ruins) was added.', '/videos/ufgRoar.mp4','https://www.youtube.com/watch?v=-nu1XywrdM8')}
      {generateBubble('XChara Update (June 2023) and Misaka Update (August 2023)', 'During these two updates, the character selection screen was redesigned, new characters (XChara and Misaka) and a new map (Snowdin) were added.', '/videos/ufgXChara.mp4','https://www.youtube.com/watch?v=34SYd8ROQhE')}
      {generateBubble('Halloween (October 2023) and Gaster Update (February 2024)', 'The halloween update saw a halloweenified snowdin and an Omori rework. The Gaster update added a new character (gaster), a new map (waterfall), and a map rotation system. After this update the games playerbase slowly grew to over a hundred visits per day.', '/videos/ufgGaster.mp4')}
      {generateBubble('Asgore Update (August 2024) Sans Rework (November 2024)', 'The Asgore update added a new character and the Sans Update completely reworked sans and added passive abilities. After these updates, the game exploded in popularity reaching thousands of visits a day.', '/videos/ufgSans.mp4','https://www.youtube.com/watch?v=GKCSn05BeiU')}
      {generateBubble('Betty Update (May 2026) and Hiatus', 'During the 2025 to 2026 school year me and the other developers were extremely busy with school and other responsibility so we decided to pause developement on UFG. After exam season we delivered the Betty update which added a new character and the games first skin. Now the games developement is on hiatus for the forseeable future depending on the situation.', '/videos/ufgBetty.mp4')}


    </div>
  );
}
