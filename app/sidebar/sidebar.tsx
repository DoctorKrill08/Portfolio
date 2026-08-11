'use client';
import { useState,useEffect} from "react";
import './sidebar.css';
import Link from 'next/link'
import { projects,projectLength } from "../projects/project_summary";
import { motion, AnimatePresence } from "framer-motion";

function useIsMobile(): boolean {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = (): void => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallScreen;
}
export default function Sidebar() {
  const mobile : boolean = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  function handleClick() {
    setProjectsOpen(!projectsOpen);
  }

  function hamburgerOnClick() {
    setSidebarOpen(!sidebarOpen);
    setProjectsOpen(false);
  }

  function generateProjectButtons() {
    return (
      <motion.div
        initial={false}
        animate={{
          height: projectsOpen ? "auto" : 0,
          opacity: projectsOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        style={{ overflow: "hidden" }}
      >
        {projects.map((project, index) => (
          <Link key={index} href={project.link}>
            <motion.button
              style={{
                backgroundColor: "rgba(39, 86, 245, 0.3)",
                paddingLeft: "20px",
                height: 60,
                width: "100%",
              }}
            >
              <i>{project.title}</i>
            </motion.button>
          </Link>
        ))}
      </motion.div>
    );
  }

  return (
    <div className={'sidebar ' + (sidebarOpen ? 'open' : '') + (mobile ? ' mobile' : '')}>
      <div
        className="hamburger"
        onMouseDown={() => hamburgerOnClick()}
      >
        <img src={"/images/menu_burger.webp"}></img>
      </div>
      <Link href="/"><motion.button style={{borderTop:'1px solid white'}}> Home </motion.button></Link>
      <motion.button onClick={() => handleClick()}>
        Projects
      </motion.button>
      {generateProjectButtons()}
      <Link href="/resume"><motion.button> Resume </motion.button></Link>
      <Link href="/contact"><motion.button> Contact </motion.button></Link>
    </div>
  );
}
