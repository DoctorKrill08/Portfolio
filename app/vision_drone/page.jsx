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
            I am CURRENTLY working on this project. I am not the project lead and the project is not complete. So far I have made the simulation environment, a working csv flight logger, and a working simulation configuration randomizer. I am currently working on creating and tuning the encoders and predictors for successful state prediction. ALSO this is heavily inspired by SkyJEPA.
          </p>

          <i style={{marginTop:'10px'}}>
            Please see the notable features below:
          </i>
        </ProjectSummary>
      </FadeInWhenVisible>
      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Project AirSim Simulator</h1>
        <p>
          I created a simulation environment for the drone to fly in using Microsoft{"'"}s AirSim simulator. This simulation has deterministic actions, where the same actions, same configs, and same starting state will always result in the same trajectories, however, real life is not like this. To train the JEPA model to predict future states, I created a randomizer that will randomly change the starting state of the drone, the configuration of the drone, and the environment of the simulation. This allows for a more robust model that can predict future states in a variety of situations.
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
        <h1>Data Collection</h1>
        <p>
            Simply flying with random motor outputs fails to get reliable data for training. Instead, having the drone fly to various random waypoints in random simulation configurations preserves realistic physics and trains the drone on what it really should learn: flight.
        </p>
        <p>
            Since randomized simulation configurations makes the drone fly unreliability with default PID gains, a physics rate gain autotuner is used to take the simulation configurations and turn it into rate PID gains. With effective rate control, the other control modes do not need to be retuned (attitude, velocity, position). 
        </p>

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

        <h2>
          How is the latent future state prediction converted into a real world state prediction?
        </h2>
        <p>
          THIS HAS NOT BEEN IMPLEMENTED YET AND GETS TRAINED SEPERATELY. The latent future state prediction will be converted into a real world state prediction by using a <b>Physics Based Prober</b> which acts as a decoder that takes in latent future states and converts it into real world states
        </p>
         <img
          src="/images/prober_diagram.png"
          alt="Prober Architecture"
          style={{ maxWidth: "90%", marginTop: "20px" }}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>Path Planning</h1>
        <p>
          The drone uses Model Predictive Path Integral (MPPI) control to generate thousands of possible actions, uses JEPA to predict the future state, and repeatedly feeds this back into the model with new actions to predict further and further ahead in the future. Then, MPPI gives each series of trajectories a score based on how close the final state was to the goal state, then runs itself again with the best scoring trajectory to generate new trajectories. Once the trajectory is within a certain threshold of the goal state, the drone will execute the first action of the best scoring trajectory and repeat this process until it reaches the goal state. This entire sequence is planned to run at 100 Hz, which is the threshold for real time control.
        </p>
        <img
          src="/images/MPPI_diagram.png"
          alt="MPPI Architecture"
          style={{ maxWidth: "90%", marginTop: "20px" }}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible className={"bubble"} style={{ marginTop: '20px' }}>
        <h1>TRAINING</h1>
        <p>TBD</p>
        <h2>
          Training JEPA State and Action Encoders + Future State Predictor
        </h2>
        <h2>
          Training the Physics Based Prober
        </h2>
        <h2>
          Training JEPA Vision Encoders
        </h2>
        <h2>
          Implementing Vision JEPA and Future State JEPA with MPPI Control
        </h2>

      </FadeInWhenVisible>

    </div>
  );
}
