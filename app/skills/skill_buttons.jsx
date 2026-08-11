import styles from './skills.module.css'
export const LANGUAGES = 0
export const FRAMEWORKS = 1
export const HARDWARE = 2
export const OTHER = 3

export const JAVA = 'Java'
export const PYTHON = 'Python'
export const LUA = 'Lua'
export const JAVASCRIPT = 'JavaScript'
export const TYPESCRIPT = 'TypeScript'
export const HTML = 'HTML'
export const CSS = 'CSS'

export const REACT = 'React'
export const FLASK = 'Flask'
export const FAST_API = 'FastAPI'
export const WEBSOCKETS = 'WebSockets'
export const SOCKETIO = 'SocketIO'
export const OPENCV = 'OpenCV'
export const YOLO = 'YOLO'

export const DEPTH_CAMERA = 'Depth Camera'
export const LIDAR = 'LIDAR'
export const WHEELED_ODOMETRY = 'Wheeled Odometry'
export const WEBCAM = 'Webcam'
export const GPS = 'GPS'
export const IMU = 'IMU'
export const JETSON_NANO = 'Jetson Nano'
export const ARDUINO = 'Arduino'
export const RADIO = 'Radio'

export const LOCALIZATION = 'Localization'
export const CONTROL = 'Control'
export const MAPPING = 'Mapping'
export const PATHING = 'Pathing'
export const SENSOR_FUSION = 'Sensor Fusion'
export const GAME_DEVELOPEMENT = 'Game Development'
export const APRIL_TAGS = 'April Tags'
export const AUTONOMOUS = 'Autonomous'
export const TELEOPERATED = 'Teleoperated'
export const FPV = 'FPV'




const blue = 'rgba(70, 98, 255, 0.3)'
const green = 'rgba(80, 255, 94, 0.3)'
const yellow = 'rgba(255, 211, 45, 0.3)'
const purple = 'rgba(150, 100, 255, 0.3)'
const red = 'rgba(255, 70, 70, 0.3)'

const name = 0
const color = 1
const icon = 2
const scale = 3


export default function SkillIcon({ skill,type }) {
  var skills = [];
  skills[LANGUAGES] = {
    [JAVA]: [JAVA, blue, '/images/java_logo_white.webp', 1.3],
    [PYTHON]: [PYTHON, blue, '/images/python_logo_white.webp', 0.8],
    [LUA]: [LUA, blue, '/images/lua_logo_white.webp', 1],
    [JAVASCRIPT]: [JAVASCRIPT, yellow, '/images/javascript_logo_white.webp', 0.9],
    [TYPESCRIPT]: [TYPESCRIPT, yellow, '/images/typescript_logo_white.webp', 1.1],
    [HTML]: [HTML, yellow, '/images/html_logo_white.webp', 1],
    [CSS]: [CSS, yellow, '/images/css_logo_white.webp', 0.8]
  }
  skills[FRAMEWORKS] = {
    [FLASK]: [FLASK, blue, '/images/flask_logo_white.webp', 1],
    [FAST_API]: [FAST_API, blue, '/images/fastapi_logo_white.webp', 0.9],
    [WEBSOCKETS]: [WEBSOCKETS, purple, '/images/websockets_logo_white.webp', 0.9],
    [SOCKETIO]: [SOCKETIO, purple, '/images/socketio_logo_white.webp', 0.9],
    [REACT]: [REACT, yellow, '/images/react_logo_white.svg', 0.9],
    [OPENCV]: [OPENCV, green, '/images/opencv_logo_white.webp', 0.9],
    [YOLO]: [YOLO, green, '/images/yolo_logo_white.webp', 0.9]
  }
  skills[HARDWARE] = {
    [DEPTH_CAMERA]: [DEPTH_CAMERA, green, null, null],
    [LIDAR]: [LIDAR, green, null, null],
    [WEBCAM]: [WEBCAM, green, null, null],
    [WHEELED_ODOMETRY]: [WHEELED_ODOMETRY, yellow, null, null],
    [IMU]: [IMU, yellow, null, null],
    [GPS]: [GPS, blue, null, null],
    [RADIO]: [RADIO, red, null, null],
    [JETSON_NANO]: [JETSON_NANO, purple, null, null],
    [ARDUINO]: [ARDUINO, purple, null, null]
  }

  skills[OTHER] = {
    [LOCALIZATION]: [LOCALIZATION, blue, null, null],
    [APRIL_TAGS]: [APRIL_TAGS, blue, null, null],
    [GAME_DEVELOPEMENT]: [GAME_DEVELOPEMENT, blue, null, null],
    [CONTROL]: [CONTROL, yellow, null, null],
    [MAPPING]: [MAPPING, purple, null, null],
    [PATHING]: [PATHING, purple, null, null],
    [SENSOR_FUSION]: [SENSOR_FUSION, green, null, null],
    [AUTONOMOUS]: [AUTONOMOUS, red, null, null],
    [TELEOPERATED]: [TELEOPERATED, red, null, null],
    [FPV]: [FPV, red, null, null],
  }
  if (!(Object.hasOwn(skills, type))) {
    console.log("type: " + type + " not found")
    return
  }
  skills = skills[type]
  if (!(Object.hasOwn(skills, skill))) {
    console.log("skill: " + skill + " not found")
    return
  }
  skill = skills[skill]
  let image = skill[icon]
  let paddingRight = '5px'

  if (image) {
    paddingRight = '10px'
    image = <img src={image} style={{transform: 'scale(' + skill[scale] + ')'}} alt={skill[name]} />
  }
  return (
    <div className={styles.skillIcon} style={{ backgroundColor: skill[color], paddingRight: paddingRight}}>
      {image}
      {skill[name]}
    </div>
  )
}
