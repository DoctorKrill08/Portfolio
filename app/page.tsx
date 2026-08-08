'use client';
import React from 'react';
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className={'sidebar ' + (sidebarOpen ? 'open' : '')}>
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


          <h1 className="title">Ethan Kim</h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Aspiring Computer Science Major at UNC TBD
          </p>
        </div>

      </main>
    </div>
  );
}
