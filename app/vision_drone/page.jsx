'use client'
import ProjectSummary, * as projects from "../projects/project_summary";
import projectStyles from '../projects/projects.module.css'
import styles from './vision.module.css'
import about from '../about/about.module.css';

import FadeInWhenVisible from '../animations';


export default function VisionDrone() {

  return (
    <div>

      <FadeInWhenVisible style = {{marginTop: '0px'}}>
        <ProjectSummary projectNumber={projects.VISION_DRONE}>
          <p style={{ marginTop: '10px' }}>
            I am CURRENTLY working on this project. I am not the project lead and the project is not complete. I am in charge of the simulation, data collection, and training environment. Nonetheless, I have also worked on other aspects, including the actual AI architecture.
          </p>
          <i style={{marginTop:'10px'}}>
            Please see the notable features below:
          </i>
        </ProjectSummary>
      </FadeInWhenVisible>
      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Project AirSim Simulator</h1>
        <p>
          I created a simulation environment for the drone to fly in using Project AirSim and Unreal Engine. This simulation has deterministic actions, where the same actions, same configs, and same starting state will always result in the same trajectories, however, real life is not like this. To train the JEPA model to predict future states, I created a randomizer that will randomly change the starting state of the drone, the configuration of the drone, and the environment of the simulation. This allows for a more robust model that can predict future states in a variety of situations.
        </p>
        <video
          style={{ marginTop: "20px",maxWidth: "90%"}}
          controls = {true}
          autoPlay = {false}
          loop = {true}
          muted = {true}
        >
          <source src={'/videos/drone_sick_trick.mp4'} type="video/mp4" />
        </video>
        <i style={{marginTop:'10px'}}>
          Above shows the drone performing a sick trick in the simulation environment. This is actually a playback I manually fly this trajectory, then had the simulator rerun the drone with the same actions, starting state, and configuration showing that the simulator is deterministic. If the configurations were slightly different the drone would have certainly gone a different trajectory.
        </i>
      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Architecture</h1>
        <img
          src="/images/MyArchitecture.webp"
          alt="architecture"
          style={{ maxWidth: "90%", marginTop: "20px" }}
        />

        <b>
            Drone Dynamics JEPA (World Model)
        </b>
        <p>
          Classical Action expert AI's do not actually understand the consequences of their actions, just what minimizes punishment. To enforce action validity, we need the drone to understand how its motor actions effect the drones state.
          <br/><br/>
        <i>This is where Drone Dynamics JEPA comes in.</i>
          <br/>
          Drone dynamics JEPA takes in action and state histories, encodes them as latent vectors, then, based on future (proposed) actions, the JEPA model predicts the future state.
          <br/>
          Since the state and action histories are forced to be latent vectors, the JEPA model must prioritize key aspects of the drone's state and actions.
        </p>
        <img
          src="/images/jepa_diagram.png"
          alt="JEPA Architecture"
          style={{ maxWidth: "90%", marginTop: "20px" }}
        />
        <b>
          Physics Prober
        </b>
        <p>
          To convert the latent predicted state into an actual usable physical state, decoders are used. 
          However, traditional decoders don't always reflect reality. To improve decoder accuracy, the decoder uses physics (hence the name physics based prober) and drone dynamics to translate the latent state into meaningful physical state.
        </p>
        <img
          src="/images/prober_diagram.png"
          alt="Prober Architecture"
          style={{ maxWidth: "90%", marginTop: "20px" }}
        />

        <b>
          Vision Encoder
        </b>
        <p>
            The vision encoder takes depth data from the camera and strips it down into a 32x32x2 tensor.
            Each "cell" in the 32x32 grid contains the minimum reasonable depth in the cell and the classification of what that cell is looking at (obstacle, wall, etc)
            <i> This has been implemented but not finalized. A higher resolution tensor may be slower but give the drone more useful information</i>
        </p>
        <img
          src="/images/VisionEncoder.png"
          alt="Vision Encoder Example"
          style={{ maxWidth: "90%", marginTop: "20px" }}
        />
        <i>
          The left shows grayscale raw camera input. The right shows the 32x32x2 encoded version (blue is floor, green is goal, darker means further away).
        </i>
        <i style={{ marginTop: '10px' }}>
          Below is a button that leads to a youtube video showing off the vision encoder and obstacle course.
        </i>

        <a className={projectStyles.projectLearnMore} href={'https://www.youtube.com/watch?v=nQfX8dcBXx0'}>Click Here</a>

        <b>
          Action Expert
        </b>
        <p>
            To determine sequences of actions, the action expert is given state and action information along with vision. It is trained with deep reinforcement learning to avoid obstacles and approach the goal.
            It uses the Drone Dynamics JEPA to determine if its actions actually get it where it wants along with vision info to verify its sequence of actions doesn't lead to it flying into a wall.
        </p>
         <img
          src="/images/ObstacleCourseGIF.gif"
          alt="Vision Encoder Example"
          style={{ maxWidth: "90%", marginTop: "20px" }}
        />
        <i>
          The gif above shows the drone seeing and dodging an obstacle. This WAS NOT produced from the action expert but a proof of concept algorithm. Either way the action expert would likely do something similiar to dodge the obstacle.
        </i>

    
      </FadeInWhenVisible>

       <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Flight Controller</h1>
        <p>
          This drone uses a Pixhawk 6C Mini with dual IMUs (each with a gyro, accelerometer and magnetometer), a barometer, and a GPS. The flight controller is responsible for following the commands given by the NVIDIA Jetson while also sending its state estimates to the NVIDIA Jetson. 
        </p>
        <i>
          The flight controller is responsible for state estimation because the current JEPA model relies on accurate state estimates to predict future states. If the state estimates are inaccurate, the future state predictions will be inaccurate as well. The flight controller is responsible for fusing the sensor data from the IMUs, barometer, and GPS to provide accurate state estimates to the NVIDIA Jetson. Eventually the NVIDIA Jetson will implement vision and ideally be able to substitute the GPS with vision, but for now it will use GPS for global positioning feedback.
        </i>
        <p>
          Since we want zero shot simulation to real life transfer, we have the flight controller and the simulator serve the same role: tell JEPA the state estimate, and do the corresponding MPPI generated action.
        </p>
       </FadeInWhenVisible>

       <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Dynamics Data Collection For the JEPA model</h1>
        <p>
            Simply flying with random motor outputs fails to get reliable data for training. Instead, having the drone fly to various random waypoints in random simulation configurations preserves realistic physics and trains the drone on what it really should learn: flight.
        </p>

        <img
          src="/images/NoAutotuner.gif"
          alt="noAutotunerGIF"
          style={{ maxWidth: "90%", marginTop: "20px" }}
        />
        <i>
          Above shows the drone flying WITHOUT the autotuner at 4x speed.
        </i>

        <p>
            Since randomized simulation configurations makes the drone fly unreliability with default PID gains, a physics rate gain autotuner is used to take the simulation configurations and turn it into rate PID gains. With effective rate control, the other control modes do not need to be retuned (attitude, velocity, position). 
        </p>

        <img
          src="/images/AutotunerGIF.gif"
          alt="autotunerGIF"
          style={{ maxWidth: "90%", marginTop: "20px" }}
        />
        <i>
          Above shows the drone flying with the autotuner in action at 4x speed.
        </i>

        <img
          src="/images/controllers.webp"
          alt="Control Structure"
          style={{ maxWidth: "90%", marginTop: "20px" }}
        />
        <i style={{marginTop:'10px'}}>
          Above shows a diagram of the drones control logic, including the auto tuner and various flight modes.
        </i>
        

        <i style={{ marginTop: '10px' }}>
          Below is a button that leads to a youtube video demonstrating the autotuner and control logic.
        </i>

        <a className={projectStyles.projectLearnMore} href={'https://www.youtube.com/watch?v=E7-F3rcVzWI'}>Click Here</a>
       </FadeInWhenVisible>

        <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Reinforcement Learning Training Environment for the Action Expert</h1>
        <h2>Randomly Generated Obstacle Course</h2>
        <p>
          To train the action expert it needs a randomized environment where it must use vision to avoid obstacles while also being physically feasible to reach the goal without collision
          To do this, a obstacle generation algorithm is employed that garuntees no obstacles within a certain radius of the goal, and no obstacles around the walls, a low ceiling to prevent flying over everything, and randomized shaped obstacles to force the drone to learn to dodge various types of obstacles.
        </p>
        <img
          src="/images/ObstacleCourse.webp"
          alt="Obstacle Course"
          style={{ maxWidth: "50%", marginTop: "20px" }}
        />
        <i>
          Above shows an example of the generated obstacle course.
          Blue = Wall,
          Yellow = Goal,
          Pink = Obstacle,
          Red = Obstacle Exclusion,
          Light Blue = Drone Spawn Area,
        </i>
        <img
          src="/images/ObstacleCoursePicture.png"
          alt="Obstacle Course"
          style={{ maxWidth: "50%", marginTop: "20px" }}
        />
        <i>
          Above shows a picture of the obstacle course generated in Unreal Engine
        </i>
        <h2>
          Navigating the Obstacle Course
        </h2>
        <p>
          Baseline autonomous flight proof of concept possible by combining Artificial Potential Field (APF) with a modified Bug2 Algorithm and feeding said algorithm the locations of obstacles in the form of a map.
          This allows for vision data collection, which may or may not end up being used for pretraining the action expert.
        </p>
        <img
          src="/images/ObstacleCourseGIF.gif"
          alt="Vision Encoder Example"
          style={{ maxWidth: "90%", marginTop: "20px" }}
        />
        <i>The GIF is using the APF + Bug2 Pathing system</i>

        <i style={{ marginTop: '10px' }}>
          Below is a button that leads to a youtube video showing the APF + Bug2 Algorithm flying through the obstacle course
        </i>

        <a className={projectStyles.projectLearnMore} href={'https://www.youtube.com/watch?v=XcqVbPQu19E'}>Click Here</a>
        <h2>Learning from the Obstacle Course</h2>
        <p>
          This has not yet been implemented but the action expert will be penalized for collisions, low clearance, sharp manuevers, etc.
          This requires collecting new data like collision prediction, detection, clearance calculations, etc which are possible via Unreal Engine.
          For rewards the action expert will be rewarded for approaching the goal. 
        </p>


      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>JEPA Style Latent State Prediction</h1>
        <i>
          State = [Position Vector(1x3), Velocity Vector (1x3),Rotation Matrix (3x3), Angular Velocity Vector (1x3)] for a total of a 1x18 Vector.
        </i>
        <i>
          Action = [Front Left Motor Thrust, Front Right Motor Thrust, Back Left Motor Thrust, Back Right Motor Thrust] for a total of a 1x4 Vector (in newtons).
        </i>
        <p>
          Traditional, direct state prediction methods, such as reinforcement learning, have a tendency to accumulate error over time, which can lead to poor performance in long term predictions. To combat this, the drone implents a JEPA style architecture that <b>predicts future states </b> based on <b> latent representations of the last 100 states and the last 100 actions </b>.
        </p>
        
        <h2>
          Why last 100 states and actions?
        </h2>
        <p>
          Since the real world is stochastic, the drone needs to be able to predict future states based on a variety of past states and actions. By using the last 100 states and actions, the drone can figure out how its actions effect the world. This allows the drone to predict future states.
        </p>
        <h2>
          Why latent representations?
        </h2>
        <p>
          Latent representations allow for latent predictions. Latent predictions have the benefit of being able to be fed back into the model to predict even further into the future. Doing this with direct state predictions would lead to error accumulation and poor performance. By using latent representations, the drone can predict future states with less error accumulation and better performance.
        </p>
        <img
          src="/images/jepa_diagram.png"
          alt="JEPA Architecture"
          style={{ maxWidth: "90%", marginTop: "20px" }}
        />
        <i style={{marginTop:'10px'}}>
          Above shows a diagram of the JEPA architecture. The State and Action History Encoders take in the last 100 states and actions and encode them into latent representations. The Latent Predictor takes in the latent representations and predicts the next latent representation.
        </i>
      </FadeInWhenVisible>


     

    </div>
  );
}
