import React from 'react'
import { useState, useEffect} from "react";
import styles from './skills.module.css';
import FadeInWhenVisible from '../animations';
import * as skills from './skill_buttons'
import SkillIcon from './skill_buttons';

export default function Skills() {
  return (
    <FadeInWhenVisible className="bubble">
      <h1 style={{height: '70px', borderBottom: '1px solid rgba(255, 255, 255, 0.7)' }}>Skills</h1>
      <h2 style={{ marginTop: '20px', marginBottom: '10px', fontSize: '36px'}}>Languages</h2>
      <br/>
      <div className={styles.skillBox}>
        <SkillIcon skill={skills.JAVA} type={skills.LANGUAGES} small={false}/>
        <SkillIcon skill={skills.PYTHON} type={skills.LANGUAGES} small={false} />
        <SkillIcon skill={skills.LUA} type={skills.LANGUAGES} small={false}/>
        <SkillIcon skill={skills.TYPESCRIPT} type={skills.LANGUAGES} small={false}/>
        <SkillIcon skill={skills.JAVASCRIPT} type={skills.LANGUAGES} small={false}/>
        <SkillIcon skill={skills.HTML} type={skills.LANGUAGES} small={false}/>
        <SkillIcon skill={skills.CSS} type={skills.LANGUAGES} small={false}/>
      </div>

      <h2 style={{ marginTop: '20px', marginBottom: '10px', fontSize: '36px' }}>Frameworks & Libraries</h2>
      <br />
      <div className={styles.skillBox}>
        <SkillIcon skill={skills.FLASK} type={skills.FRAMEWORKS} small={false}/>
        <SkillIcon skill={skills.FAST_API} type={skills.FRAMEWORKS} small={false}/>
        <SkillIcon skill={skills.WEBSOCKETS} type={skills.FRAMEWORKS} small={false}/>
        <SkillIcon skill={skills.SOCKETIO} type={skills.FRAMEWORKS} small={false}/>
        <SkillIcon skill={skills.REACT} type={skills.FRAMEWORKS} small={false}/>
        <SkillIcon skill={skills.OPENCV} type={skills.FRAMEWORKS} small={false}/>
        <SkillIcon skill={skills.YOLO} type={skills.FRAMEWORKS} small={false}/>
      </div>

     </FadeInWhenVisible>
  );
}
