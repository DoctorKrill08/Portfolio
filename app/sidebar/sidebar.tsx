
import { useState } from "react";
import './sidebar.css';

export default function Sidebar({ mobile = false }: { mobile?: boolean }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className={'sidebar ' + (sidebarOpen ? 'open' : '') + (mobile ? ' mobile' : '')}>
      <div
        className="hamburger"
        onMouseDown={() => setSidebarOpen(!sidebarOpen)}
      >
        <img src={"/images/menu_burger.webp"}></img>
      </div>
      <button style={{borderTop:'1px solid white'}}> Home </button>
      <button> About </button>
      <button> Projects </button>
      <button> Resume </button>
      <button> Contact </button>
    </div>
  );
}
