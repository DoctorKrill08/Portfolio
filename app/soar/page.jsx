'use client'
import ProjectSummary, * as projects from "../projects/project_summary";
import projectStyles from '../projects/projects.module.css'
import styles from './soar.module.css'
import about from '../about/about.module.css';

import FadeInWhenVisible from '../animations';


export default function Soar() {

  return (
    <div>

      <FadeInWhenVisible style = {{marginTop: '0px'}}>
        <ProjectSummary projectNumber={projects.SOAR}>
          <p style={{ marginTop: '10px' }}>
            During this season, I was the lead programmer of the team. I programmed the robot in Java using Android Studio. This years game pieces were called samples.
          </p>

          <i style={{marginTop:'10px'}}>
            Please see the notable features below:
          </i>
        </ProjectSummary>
      </FadeInWhenVisible>
      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>State Machine</h1>
        <p>SOAR has a Drivetrain, Vertical Slides, a Shoulder, an Arm Extension, a Claw, and Camera. Therefore to control the robot efficiently without using several buttons, I used a <b>State Machine</b> where the state of the robot determines each of the subsystems state. This allowed the robot to be controlled with only 4 buttons, with the rest of the buttons being used as overrides.</p>
        <img src={"/images/SOARStateMachine.webp"} style={{maxWidth:'90%'}} />
      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Sample Tracking</h1>
        <p>Since SOAR uses a simple claw, picking up samples can be difficult where a slight misalignment can cause the claw to miss. To overcome this, I developed a <b>sample tracking algorithm</b> that uses a camera on the claw to detect samples, where the driver presses a single button and the robot aligns itself over the sample and picks it up. This system uses OpenCV with contour detection looking for red, yellow, and blue blobs, then a boxfit to determine the position and orientation of the sample. Next, a PID controller generates a drive and strafe power for the drivetrain proportional to the pixel error from the center of the camera to the sample position, allowing the robot to align itself over the sample and pick it up. Finally, the robot rotates its claw to align itself and then picks it up.</p>
        <video
          style={{ marginTop: "20px",maxWidth: "90%"}}
          controls = {true}
          autoPlay = {false}
          loop = {true}
          muted = {true}
        >
          <source src={'/videos/soarCV.mp4'} type="video/mp4" />
        </video>
        <p style={{marginTop:'10px'}}>
          This sample tracking abilitiy would make the robot much more accurate during autonomous and teleOp.
        </p>
      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Autonomous</h1>
        <i>
          For Localization, the robot utilized dead wheel odometry combined with IMU. For Pathing, I used Pedro Pathing, an FTC Community Pathing library which utilizes multiple PIDF controllers to make the robot follow lines and bezier curves.
        </i>
        <p style={{ marginTop: '10px' }}>
          SOAR achieved the <b>#1 Autonomous Offensive Power Rating in North Carolina</b>.
          To achieve this, SOAR utilized <b>its sample tracking algoirthm</b> to pick up samples in the submersible (a zone where pieces positions are scrambled). To improve reliability, I also added the ability for the driver to tell the robot where to go before the match started and what color to target, this on its own is not perfect as the robot may be misaligned but combining it with the sample tracking algorithm made the robot much more accurate.
        </p>

        <video
          style={{ marginTop: "20px",maxWidth: "90%"}}
          controls = {true}
          autoPlay = {false}
          loop = {true}
          muted = {true}
        >
          <source src={'/videos/soarAuto.mp4'} type="video/mp4" />
        </video>
        <p style={{marginTop:'10px'}}>
          Above shows the robots sample autonomous.
        </p>
      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>TeleOp</h1>
        <p>
          Using state machines and sample tracking, the driver could pick up a piece in two clicks of a button (first click to go to scouting mode and the second to identify, move to, and grab a sample), then, to deposit the piece, it would also take only 2 buttons (1 to go to deposit mode, the other to open the claw)
        </p>
        <i style={{ marginTop: '10px' }}>
          Below is a button that leads to a youtube video of the robot in TeleOp mode scoring 14 samples and level 2 climb.
        </i>

        <a className={projectStyles.projectLearnMore} href={'https://www.youtube.com/watch?v=AqtvNAsqsFQ'}>Click Here</a>
      </FadeInWhenVisible>

    </div>
  );
}
