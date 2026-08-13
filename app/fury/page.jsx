'use client'
import ProjectSummary, * as projects from "../projects/project_summary";
import projectStyles from '../projects/projects.module.css'
import styles from './fury.module.css'
import about from '../about/about.module.css';

import FadeInWhenVisible from '../animations';


export default function Fury() {

  return (
    <div>

      <FadeInWhenVisible style = {{marginTop: '0px'}}>
        <ProjectSummary projectNumber={projects.FURY}>
          <p style={{ marginTop: '10px' }}>
            During this season, I was the captain of the team, but I still led software. This robot was programmed in Java via Android Studio. This seasons scoring mechanism were balls called artifacts, where shooting these into a goal earned points.
          </p>

          <i style={{marginTop:'10px'}}>
            Please see the notable features below:
          </i>
        </ProjectSummary>
      </FadeInWhenVisible>
      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Adaptable Flywheel Control</h1>
        <p>This robot did <b>rapid fire</b> meaning it shot 3 balls back to back extremely quickly. This meant the robots flywheel had to be able to maintain speed in this short time frame to prevent missing the ladder shots.
          To do this I first employed a simple PID Controller but I realized this either was too slow or too aggressive. Then I combined it with Feedforward so that feedforward would maintain the correct speed (more stable) and the PID Controller would react to the changes in flywheel speed.
          This worked better but I noticed the robot would, especially when not at full battery, undershoot the ladder balls. To fix this I made the PID part of the control system switch to a <b>bang bang</b> controller while shooting AND added <b>Battery Voltage Normalization</b> to the PIDF Control System.
        </p>
        <img src={"/images/FuryControl.webp"} style={{ maxWidth: '90%', marginTop: '20px' }} />
        <video
          style={{ marginTop: "20px",maxWidth: "90%"}}
          controls = {true}
          autoPlay = {false}
          loop = {true}
          muted = {true}
        >
          <source src={'/videos/furyFar.mp4'} type="video/mp4" />
        </video>
        <i style={{marginTop:'10px'}}>
          Above shows the adaptable flywheel control works even at far ranges.
        </i>
      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Kalman Filter Real Time Localization</h1>
        <p>
          This year there were many benefits to being localized the entire time including turret automatic aiming, shooting while moving, autonomous movement, and determining flywheel velocity based on distance to goal.
          However, pure odometry and IMU readings are prone to drift and therefore as the round goes on, the robots position and orientation can become inaccurate.
          To fix this, I used <b>April Tag Localization</b> to get a global reference for the robot{"'"}s position and orientation. However, this was prone to noise, especially at greater distances, poor angles, and while the flywheel was spinning.
        </p>
        <p style={{marginTop: '20px'}}>
          To combine the approaches and reduce the cons of both, I used a <b>Kalman Filter</b> to smooth the noisy April Tag readings and estimate the robot{"'"}s position and orientation over time, where odometry variance was proportional to the displacement of the robot, and April Tag variance was proportional to the amount of pixels of the tag (far away or poor angle = less pixels).
        </p>
        <i style={{marginTop:'10px'}}>
          This Kalman Filter allowed the robot to effectively maintain localization throughout the entire match.
        </i>
      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Automations</h1>
        <i>
          Due to being constantly localized, I implemented automations including automatic turret aiming, dynamic flywheel velocity, and shooting while moving.
        </i>
        <h2 style={{ marginTop: '10px' }}>
          Turret Aiming
        </h2>
        <p style={{ marginTop: '10px' }}>
          Given the robots current position, heading, and a goal position, the target angle of the turret can be calculated to aim at the goal. I did this by using trigonometry (atan2) to calculate the angle between the robot{"'"}s current position and the goal position and then using the calculated angle and the robot{"'"}s heading to calculate the target angle of the turret.
        </p>
        <video
          style={{ marginTop: "20px",maxWidth: "90%"}}
          controls = {true}
          autoPlay = {false}
          loop = {true}
          muted = {true}
        >
          <source src={'/videos/furyTurret.mp4'} type="video/mp4" />
        </video>
        <i style={{marginTop:'10px'}}>
          Above demonstrates turret tracking based on odometry readings. The turret had a limited degree of rotation.
        </i>
        <h2 style={{ marginTop: '10px' }}>
          Dynamic Flywheel Velocity
        </h2>
        <p style={{ marginTop: '10px' }}>
          To calcualte the target velocity of the flywheel, I created a manually measured regression line of over 20 data points that mapped the distance (X-axis, Independent Variable) of the robot from the goal to the target velocity (Y-Axis, Dependent Variable). Using this regression line, I could calculate the target velocity of the flywheel based on the distance of the robot from the goal.
        </p>
        <h2 style={{ marginTop: '10px' }}>
          Shooting While Moving
        </h2>
        <p style={{ marginTop: '10px' }}>
          Finally, probably the robot{"'"}s most impressive feat, shooting while moving, uses the following logic to generate a phantom goal for the robot to aim at while it is moving:
        </p>
        <div style={{textAlign:'left', marginTop:'20px',marginBottom:'20px'}}>
          <p>
            1. The robot calculates the distance from the goal
          </p>
          <p>
            2.Based on the distance the robot calculates the amount of time it will take for the ball to reach the goal (based on regression line of shots at various distances and how long they took to land).
          </p>
          <p>
            3. The robot then takes its current velocity and multiplies it by the time it takes for the ball to reach the goal to calculate the displacement of how far the ball wil be away from the goal.
          </p>
          <p>
            4. The robot then generates a phantom goal located at the goal position minus the displacement calculated in step 3.
          </p>
          <p>
            5. Finally, the logic of turret aiming and flywheel velocity above is used given the position of the phantom goal instead of the actual position.
          </p>
        </div>

        <video
          style={{ marginTop: "20px",maxWidth: "90%"}}
          controls = {true}
          autoPlay = {false}
          loop = {true}
          muted = {true}
        >
          <source src={'/videos/furyShooting.mp4'} type="video/mp4" />
        </video>
        <p style={{marginTop:'10px'}}>
          Above shows the robot shooting while moving.
        </p>
      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Autonomous</h1>
        <i>
          This robot uses Pedro Pathing, an FTC Pathing library that uses PID Control to follow lines and bezier curves autonomously. Autonomous period in FTC lasts 30 seconds.
        </i>

        <p>
          To achieve an 18 ball autonomous, we used the robots many automations for shooting combined with Pedro Pathing{"'"}s Pathing library for moving.
        </p>

        <video
          style={{ marginTop: "20px",maxWidth: "90%"}}
          controls = {true}
          autoPlay = {false}
          loop = {true}
          muted = {true}
        >
          <source src={'/videos/furyAuto.mp4'} type="video/mp4" />
        </video>
        <i style={{marginTop:'10px'}}>
          Above shows the robot performing an attempted 18 ball autonomous.
        </i>

        <p style={{marginTop: '30px'}}>
          To collaborate with teamates who may be using the near zone, I created a far zone autonomous that would use opencv to detect balls and then have the robot use a PID Controller on the Drivetrain to move the robot to the largest cluster of visible balls.
        </p>

        <video
          style={{ marginTop: "20px",maxWidth: "90%"}}
          controls = {true}
          autoPlay = {false}
          loop = {true}
          muted = {true}
        >
          <source src={'/videos/furyCV.mp4'} type="video/mp4" />
        </video>
        <i style={{marginTop:'10px'}}>
          Above shows the robot demonstrating the ball tracking camera vision
        </i>
      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>TeleOp</h1>
        <p>
          This was the first year our robot won a FTC competiton since 2017. During teleOp the robot would implement the same automations as autonomous, but with a human driver controlling it.
        </p>
        <i style={{ marginTop: '10px' }}>
          Below is a button that leads to a youtube video of the robot winning the Southeast Qualifer Competition Final{"'"}s round.
        </i>

        <a className={projectStyles.projectLearnMore} href={'https://www.youtube.com/watch?v=Onoq7LBrgVw'}>Click Here</a>
      </FadeInWhenVisible>

    </div>
  );
}
