import React from 'react'
import { useState, useEffect} from "react";
import skills from './skills.module.css';
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export default function Skills() {
  const blue = 'rgba(70, 98, 255, 0.3)'
  const green = 'rgba(80, 255, 94, 0.3)'
  const yellow = 'rgba(255, 211, 45, 0.3)'

  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { type: 'tween', ease: 'easeOut', duration: 0.6 }
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 20,
        transition: { type: 'tween', ease: 'easeOut', duration: 0.6 }
      });
    }
  }, [inView, animation])

  return (
    <motion.div ref = {ref} className="bubble" initial={{ opacity: 0, y: 20 }} animate={animation}>
      <h1 style={{height: '70px', borderBottom: '1px solid rgba(255, 255, 255, 0.7)' }}>Skills</h1>
      <h2 style={{ marginTop: '20px', marginBottom: '10px', fontSize: '36px'}}>Languages</h2>
      <br/>
      <div className={skills.skillBox} style={{borderBottom: '1px solid rgba(255, 255, 255, 0.7)'}}>
        <div className={skills.skillIcon} style={{ backgroundColor: blue }}>
          <img style={{transform: 'scale(1.1)'}} src="/images/java_logo_white.webp" alt="java_logo_white" />
          <p>Java</p>
        </div>
        <div className={skills.skillIcon} style={{ backgroundColor: blue }}>
          <img style={{transform: 'scale(0.75)'}} src="/images/python_white.webp" alt="python_logo_white" />
          <p>Python</p>
        </div>
        <div className={skills.skillIcon} style={{ backgroundColor: blue }}>
          <img style={{transform: 'scale(0.95)'}} src="/images/lua_white.webp" alt="lua_logo_white" />
          <p>Lua</p>
        </div>
        <div className={skills.skillIcon} style={{ backgroundColor: yellow }}>
          <img style={{transform: 'scale(1.05)'}} src="/images/typescript_white.webp" alt="typescript_logo_white" />
          <p>TypeScript</p>
        </div>
        <div className={skills.skillIcon} style={{ backgroundColor: yellow }}>
          <img style={{transform: 'scale(0.8)'}} src="/images/javascript_white.webp" alt="javascript_logo_white" />
          <p>JavaScript</p>
        </div>
        <div className={skills.skillIcon} style={{ backgroundColor: yellow }}>
          <img style={{transform: 'scale(0.9)'}} src="/images/html_white.webp" alt="html_logo_white" />
          <p>HTML</p>
        </div>
        <div className={skills.skillIcon} style={{ backgroundColor: yellow }}>
          <img style={{transform: 'scale(0.7)'}} src="/images/css_white.webp" alt="css_logo_white" />
          <p>CSS</p>
        </div>
      </div>

      <h2 style={{ marginTop: '20px', marginBottom: '10px', fontSize: '36px' }}>Frameworks & Libraries</h2>
      <br/>
      <div className={skills.skillBox}>
        <div className={skills.skillIcon} style={{ backgroundColor: blue }}>
          <img style={{transform : 'scale(0.8)'}} src="/images/react_white.svg" alt="react_logo_white"/>
          <p>React</p>
        </div>
        <div className={skills.skillIcon} style={{ backgroundColor: blue }}>
          <img style={{transform : 'scale(0.8)'}} src="/images/flask_white.webp" alt="flask_logo_white"/>
          <p>Flask</p>
        </div>
        <div className={skills.skillIcon} style={{ backgroundColor: blue }}>
          <img style={{transform : 'scale(0.78)'}} src="/images/fastapi_white.webp" alt="fastapi_logo_white"/>
          <p>FastAPI</p>
        </div>
        <div className={skills.skillIcon} style={{ backgroundColor: yellow }}>
          <img style={{transform : 'scale(0.8)'}} src="/images/websockets_white.webp" alt="websockets_logo_white"/>
          <p>WebSockets</p>
        </div>
        <div className={skills.skillIcon} style={{ backgroundColor: yellow }}>
          <img style={{transform : 'scale(0.8)'}} src="/images/socketio_white.webp" alt="socketio_logo_white"/>
          <p>SocketIO</p>
        </div>
        <div className={skills.skillIcon} style={{ backgroundColor: green }}>
          <img style={{transform : 'scale(0.75)'}} src="/images/opencv_white.webp" alt="opencv_logo_white"/>
          <p>OpenCV</p>
        </div>
        <div className={skills.skillIcon} style={{ backgroundColor: green }}>
          <img style={{transform : 'scale(0.75)'}} src="/images/yolo_white.webp" alt="yolo_logo_white"/>
          <p>YOLO</p>
        </div>
      </div>
     </motion.div>
  );
}
