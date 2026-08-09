
import { useState } from "react";
import skills from './skills.module.css';


export default function Skills() {
  return (
    <div className="bubble">
      <h1 style={{ marginTop: '20px', marginBottom: '20px' }}>Languages</h1>
      <br/>
      <div className={skills.skillBox}>
        <div className= {skills.skillIcon} style={{backgroundColor : 'rgba(70, 98, 255, 0.3)'}}>
          <p>Java</p>
        </div>
        <div className= {skills.skillIcon} style={{backgroundColor : 'rgba(70, 98, 255, 0.3)'}}>
          <p>Python</p>
        </div>
        <div className= {skills.skillIcon} style={{backgroundColor : 'rgba(70, 98, 255, 0.3)'}}>
          <p>Lua</p>
        </div>
        <div className= {skills.skillIcon} style={{backgroundColor : 'rgba(255, 211, 45, 0.3)'}}>
          <p>JavaScript</p>
        </div>
        <div className= {skills.skillIcon} style={{backgroundColor : 'rgba(255, 211, 45, 0.3)'}}>
          <p>HTML</p>
        </div>
        <div className= {skills.skillIcon} style={{backgroundColor : 'rgba(255, 211, 45, 0.3)'}}>
          <p>CSS</p>
        </div>
      </div>
     </div>
  );
}
