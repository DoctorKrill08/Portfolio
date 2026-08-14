'use client'
import ProjectSummary, * as projects from "../projects/project_summary";
import projectStyles from '../projects/projects.module.css'
import styles from './aware.module.css'
import about from '../about/about.module.css';

import FadeInWhenVisible from '../animations';


export default function Aware() {

  return (
    <div className={styles.body}>

      <FadeInWhenVisible style = {{marginTop: '0px'}}>
        <ProjectSummary projectNumber={projects.AWARE}>
          <p style={{ marginTop: '10px' }}>
            This project was assigned to me during my CLAEM Internship at NC {"A&T"}.
          </p>
          <i style={{ marginTop: '10px' }}>
            Below is a button that leads to a youtube video of me presenting the project.
          </i>

          <a className={projectStyles.projectLearnMore} href={'https://www.youtube.com/watch?v=iI9UNp3c6yk'}>Click Here</a>

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
        <img src={"/images/awareElectronics.webp"} style={{ marginTop: '20px' }} />
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
        <img src={"/images/awareWireless.webp"} style={{ marginTop: '20px' }} />
        <i style={{marginTop:'10px'}}>
          Above shows a diagram of the Robot Wireless Communication System
        </i>
        <img src={"/images/awareInterface.webp"} style={{ marginTop: '20px' }} />
        <i style={{marginTop:'10px'}}>
          Above shows the interface. The user simply puts in the robots ip address into search bar and connects to the robot{"'"}s wifi.
        </i>

        <p style={{marginTop:'20px'}}>
          In this interface the user can see out of the camera (allowing for FPV control), change variables (useful for me especially for tuning variables), give the robot commands, control the robot via a joystick (either gamepad or thumbpad), see the robots compass direction, see the robots position on a local map at various zoom levels, see the robots position on a global map, and finally see the robots telemetry output.
        </p>
        <video
          style={{ marginTop: "20px"}}
          controls = {true}
          autoPlay = {false}
          loop = {true}
          muted = {true}
        >
          <source src={'/videos/awareFPV.mp4'} type="video/mp4" />
        </video>
        <i style={{marginTop:'10px'}}>
          Above shows a video of the robot being remotely operated in FPV.
        </i>
        <img src={"/images/awareMapInterface.webp"} style={{ marginTop: '20px' }} />
        <i style={{marginTop:'10px'}}>
          Above shows the mapping part of the interface where the user has selected multiple points for the robot to go to.
        </i>
      </FadeInWhenVisible>
      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Sensors</h1>
        <div className={styles.featureContainer}>
          <div className="miniBubble">
            <h2>
              Intel Real Sense D435i
            </h2>
            <img src={"/images/awareCamera.webp"} style={{ maxWidth: '200px', marginTop: '20px' }} />
            <i>
              This Camera is stereoscopic and can measure depth. Additionally, it has an IMU built inside of it.
            </i>
          </div>

          <div className="miniBubble">
            <h2>
              Wheel Encoders
            </h2>
            <img src={"/images/awareOdometry.webp"} style={{ maxWidth: '200px', marginTop: '20px' }} />
            <i>
              To measure positional and rotational displacement, the robot uses wheel encoder based odometry.
            </i>
          </div>

          <div className="miniBubble">
            <h2>
              simpleRTK2b Budget GPS Module + GNSS Attenna
            </h2>
            <img src={"/images/awareGps.webp"} style={{ maxWidth: '200px', marginTop: '20px' }} />
            <i>
              The robot uses RTK GPS to get a global reading on the robot{"'"}s position, speed over ground, and course over ground.
            </i>
          </div>

          <div className="miniBubble">
            <h2>
              RPLidar S2
            </h2>
            <img src={"/images/awareLidar.webp"} style={{ maxWidth: '200px', marginTop: '20px' }} />
            <i>
              To percieve obstacles around the robot, the robot uses an RPLidar S2 2D lidar sensor.
            </i>
          </div>



        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Localization</h1>
        <h2>
          Dead Reckoning
        </h2>
        <p>
          For dead reckoning, I combined IMU and Wheel Encoder odometry to estimate the robots position and heading via a kalman filter. However, this was still not enough as the robot{"'"}s position, especially when outdoors, would drift significantly.
        </p>
        <h2 style={{ marginTop: '10px' }}>
          Global Localization
        </h2>
        <p style={{ marginTop: '10px' }}>
          The robot needed global localization to correct for drift and to ensure accurate positioning.
        </p>
        <img src={"/images/awareUCenter.webp"} style={{ marginTop: '20px' }} />
        <i style={{marginTop:'10px'}}>
          Above shows the u-center software running with a GPS connected.
        </i>
        <p>
          While traditional GPS is effective for cars, it is not accurate enough for a small robot like AWARE.
          Here is a sample I took using matplotlib to visualize the GPS noise.
        </p>
        <img src={"/images/awareGpsNoise.webp"} style={{ marginTop: '20px' }} />
        <i style={{ marginTop: '10px' }}>
          Above shows GPS displacement from its first reading while not moving over 5 minutes, showing that traditional GPS noisiness is over 100 inches, which is not accurate enough for AWARE.
        </i>
        <h2 style={{ marginTop: '10px' }}>
          RTK GPS
        </h2>
        <p style={{ marginTop: '10px' }}>
          RTK (Real Time Kinematics) GPS requires a GPS on a base station (stationary) and the robot (rover). They connect to the same 4 satellites. Given enough survey time, the base station figures out exactly where it is and can calculate the “error” of the given gps readings. Then it sends the error information to the rover, which it uses to remove the error from its gps reading, leading to a much more accurate reading
        </p>
        <img src={"/images/awareRtkDiagram.webp"} style={{ marginTop: '20px' }} />
        <i>
          Above shows the RTK GPS setup, with the base station (stationary) and the robot (rover) connected to the same 4 satellites.
        </i>
        <p>
          To effectively transmit the RTK corrections to the robot, I used a SiK Telemetry Radio to send the RTK data over the air, and then another radio on the robot to recieve this data and write the corrections to the robot{"'"}s GPS module. I chose radio as opposed to using the robot{"'"}s hotspot as the transmission medium, as radio provides a more reliable (no disconnecting), greater range (up to 2km) and direct connection (no need for wifi module on base station).
        </p>
        <img src={"/images/awareRadio.webp"} style={{ maxWidth: 'min(90%, 600px)' }} />
        <i>
          Above shows the two SiK telemtry radios.
        </i>
        <img src={"/images/awareRtkNoise.webp"} style={{ marginTop: '20px' }} />
        <i>
          Above shows RTK GPS displacement from its first reading while not moving over 5 minutes, showing that RTK GPS is much more accurate than traditional GPS (within 10 inches).
        </i>
        <p style={{ marginTop: '10px' }}>
          RTK GPS readings alone suffer from lower frequnecy (1 - 10Hz) and are still noisier than the dead reckoning sensors, so to maximize effectiveness I had to combine both approaches, allowing for the robot to navigate more reliably and accurately.
        </p>

      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Mapping</h1>
        <p>
          Even with perfect localization (which it is not), the robot still needs to map the environment to avoid colliding with obstacles. To do this I used two sensors: a LiDAR and a camera.
        </p>
        <h2>LiDAR</h2>
        <p>
          The lidar provides an extremely accurate baseline of the obstacles around the robot (over 3000 measurements with little noise). However, because it is 2D, it cannot see above or below where the Lidar is located.
        </p>
        <img src={"/images/awareLidarMap.webp"} style={{ maxWidth: '90%', marginTop: '20px' }} />

        <i style={{marginTop:'10px'}}>
          Above shows a map the lidar produced, where red blocks represent obstacles and the yellow block represents the robot.
        </i>

        <h2>Depth Camera</h2>
        <p>
          The Depth Camera provides a 3D view of the environment in front of the robot, then by finding the closest points on each column in view, the robot can generate a 2D top down view map of the closest obstacles. However, these measurements are much noisier, the range is limited, and the field of view is much smaller.
        </p>
        <img src={"/images/awareDepthView.webp"} style={{ maxWidth: '90%', marginTop: '20px' }} />
        <i style={{marginTop:'10px'}}>
          Above shows a 3D view of the environment as seen by the depth camera.
        </i>

        <p style={{ marginTop: '30px' }}>
          By combining both of these sensors, the robot has a more accurate view of the environment and can navigate more effectively.
        </p>

        <video
          style={{ marginTop: "20px",maxWidth: "90%"}}
          controls = {true}
          autoPlay = {false}
          loop = {true}
          muted = {true}
        >
          <source src={'/videos/awareObstacleAvoidance.mp4'} type="video/mp4" />
        </video>
        <i style={{marginTop:'10px'}}>
          Above shows the robot running obstacle avoidance while driving forward. This is purely perception, no object permanence and no target position, just driving forward avoiding collisions.
        </i>
        <p>
          Mapping pure perception is limited, in order to path around obstacles consistently, the map must remember where obstacles were. To achieve this I used a confidence based system where obstacles are saved onto a map at a certain confidence value, then as time passes the confidence decreases until eventually it is removed from the map. Obstacles that are theoretically visible based on the Camera{"'"}s FOV have a greater confidence decay as if they aren{"'"}t actually seen while they should be then it is more likely they are no longer there.
        </p>
      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Obstacle Avoidance</h1>
        <h2>
          Pathing
        </h2>
        <p>
          To navigate around the obstacles without colliding, the robot uses Dynamic Window Approach (DWA) to generate an angle and speed the robot should move at.
          It works by sampling a window of possible movements and selecting the one that minimizes a cost function, where greater changes in angle is a penalty and greater clearance to some degree is a reward.
        </p>
        <video
          style={{ marginTop: "20px",maxWidth: "90%"}}
          controls = {true}
          autoPlay = {false}
          loop = {true}
          muted = {true}
        >
          <source src={'/videos/awareDWADemo.mp4'} type="video/mp4" />
        </video>
        <i style={{marginTop:'10px'}}>
          Above shows a video of DWA in action.
        </i>
        <p>
           I originally tried A* pathfinding but it was too computationally expensive to run every frame. Then I tried using Artificial Potential Fields (APF) but this approach is better suited for aerial drones as on the ground it would easily get stuck at local minima. I finally decided to use DWA after talking to a graduate student about local path planning, where I was informed that the industry standard approach for ground robots is the Dynamic Window Approach.
        </p>
        <h2>
          Control
        </h2>
        <p>
          Based on the path generated by DWA, the robot uses a two PID controller system. Since the robot uses differential drive, the robot cannot simply, for example, drive left. Instead, the robot must turn first, then drive forward. To prevent the robot from constantly stopping to turn, I first created a PID controller for the robot{"'"}s heading, then a second PID controller for the robot{"'"}s forward motion that had a cosine relationship with the heading error (greater heading error means less drive control and vice versa).
        </p>
        <img src={"/images/awareControl.webp"} style={{ maxWidth: '90%', marginTop: '20px' }} />
        <i style={{marginTop:'10px'}}>
          Above shows a diagram of the robot{"'"}s control system.
        </i>

      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Object Detection and Grabbing</h1>
        <p>
          I was fortunate enough to work with a robotic arm. For proof of concept I implemented the YOLO object detection algorithm and trained it on a custom dataset of cups. Then, I made the arm be able to pick the closest identifiable cup and extend out via inverse kinematics to grab to the cup.
          While this arm was never actually attached to aware, I was able to use it to show how, theoretically, aware could use an arm to identify and grab fruits, weeds, etc.
        </p>

        <i style={{ marginTop: '10px' }}>
          Below is a button that leads to a youtube video of me demonstrating the arm cup grabbing logic.
        </i>

        <a className={projectStyles.projectLearnMore} href={'https://www.youtube.com/watch?v=snOgpYrUtvU'}>Click Here</a>
      </FadeInWhenVisible>

    </div>
  );
}
