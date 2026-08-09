
import { useState } from "react";
import styles from'./home.module.css';

export default function Home({ mobile = false }: { mobile?: boolean }) {

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Ethan Kim</h1>
      <div className={styles.profile}>
        <img src={'/images/profile.webp'} alt="profile" />
      </div>
      <div className={styles.iconContainer}>
        <a className={styles.icon}  href="mailto:ethankimufg@gmail.com"><img src={'/images/gmail_icon.webp'} alt="gmail" /></a>
        <a className={styles.icon}  href="https://github.com/DoctorKrill08"><img src={'/images/github_logo.webp'} alt="github" /></a>
        <a className={styles.icon} href="https://www.linkedin.com/in/ethan-kim-590275394/"><img src={'/images/linkedin_logo.webp'} alt="linkedin" /></a>
        <a className={styles.icon} href="https://www.youtube.com/@EthanKim-t7d"><img src={'/images/youtube_logo.webp'} alt="youtube" /></a>
      </div>
      <p className={styles.description}>
        Aspiring Computer Science Major at UNC TBD
      </p>
      <div className={styles.education}>
        <h1 style={{ marginTop: '20px', marginBottom: '20px' }}>Education</h1>
        <div className={styles.educationContainer}>
          <div className={styles.educationItem} style={{backgroundColor: '#24688c', borderColor: '#1a2761', boxShadow: '0 0 4px #1a5761'}}>
            <h2>University of North Carolina at Chapel Hill</h2>
            <i>First Year (2026) </i>

          </div>
          <div className={styles.educationItem} style={{backgroundColor: '#2a613f', borderColor: '#d07424', boxShadow: '0 0 4px #d07424'}}>
            <h2>Guilford Technical Commmunity College</h2>
            <i>Graduated (2026)</i>
            <p><b>Associates in Arts & Java Programming Certification</b></p>
            <a href="/images/associates_in_arts.webp"><img src={"/images/degree_logo.webp"} alt={"associates_in_arts"} /></a>
            <a href="/images/java_certification.webp"><img src={"/images/java_logo.webp"} alt={"java"} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
