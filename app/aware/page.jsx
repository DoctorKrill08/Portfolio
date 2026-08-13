'use client'
import ProjectSummary, * as projects from "../projects/project_summary";
import projectStyles from '../projects/projects.module.css'
import styles from './aware.module.css'
import about from '../about/about.module.css';

import FadeInWhenVisible from '../animations';


export default function Aware() {

  return (
    <div>

      <FadeInWhenVisible style = {{marginTop: '0px'}}>
        <ProjectSummary projectNumber={projects.AWARE}>
          <p style={{ marginTop: '10px' }}>
            This project was assigned to me during my CLAEM Internship at NC {"A&T"}.
          </p>

          <i style={{marginTop:'10px'}}>
            Please see the notable features below:
          </i>
        </ProjectSummary>
      </FadeInWhenVisible>
      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Electronics and Communication</h1>
        <p>
          This project uses a Jetson Nano and an Arduino to control the robot. The Jetson Nano acts as the brain and interprets sensor data from cameras, lidar, gps, etc, and controls the overall state of the robot.
          The Arduino recieves information from the Jetson Nano via Serial Port and then decides what to do with it. For example, the Jetson Nano may send a command that says LeftDriveMotor,1 which tells the Arduino to set the left drive motor power to 100%.
        </p>
        <img src={"/images/awareElectronics.webp"} style={{ maxWidth: '90%', marginTop: '20px' }} />
        <i style={{marginTop:'10px'}}>
          Above shows a diagram of the robots communication system between the Jetson Nano and Arduino.
        </i>
        <p style={{marginTop:'10px'}}>
          To ensure the robot does not lose control when the Jetson Nano loses connection or crashes, the Arduino employs a heartbreat system where if the arduino does not receive a heartbeat (ping) from the Jetson Nano within a certain time (1.5 seconds), it will assume the Jetson Nano has lost connection and then stop all motor movements.
        </p>
      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Wireless Control</h1>
        <p>
          To allow the user to control the robot wirelessly, I implemented a <b>Wireless Interface</b> using the Jetson Nano{"'"}s built in wifi hotspot. I chose a hotspot because it allows the Jetson Nano to act as a standalone access point, rather than relying on an external router, meaning it could run anywhere in the world, especially important in an agricultural environment.
          I chose to have the Jetson Nano run Python because it has many libraries I planned to implement and one of these was FastAPI. FastAPI allowed me to make the robot host a server via uvicorn and connect it to a react front-end via websockets.
        </p>
        <img src={"/images/awareWireless.webp"} style={{ maxWidth: '90%', marginTop: '20px' }} />
        <i style={{marginTop:'10px'}}>
          Above shows a diagram of the Robot Wireless Communication System
        </i>
        <img src={"/images/awareInterface.webp"} style={{ maxWidth: '90%', marginTop: '20px' }} />
        <i style={{marginTop:'10px'}}>
          Above shows the interface. The user simply puts in the robots ip address into search bar and connects to the robot{"'"}s wifi.
        </i>

        <p style={{marginTop:'20px'}}>
          In this interface the user can see out of the camera (allowing for FPV control), change variables (useful for me especially for tuning variables), give the robot commands, control the robot via a joystick (either gamepad or thumbpad), see the robots compass direction, see the robots position on a local map at various zoom levels, see the robots position on a global map, and finally see the robots telemetry output.
        </p>
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
