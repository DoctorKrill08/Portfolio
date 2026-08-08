
import { useState } from "react";
import './home.css';

export default function Home({ mobile = false }: { mobile?: boolean }) {

  return (
    <div className="home">
      <h1 className="title">Ethan Kim</h1>
      <div className="profile">
        <img src={'/images/profile.webp'} alt="profile" />
      </div>
      <p className="description">
        Aspiring Computer Science Major at UNC TBD
      </p>
    </div>
  );
}
