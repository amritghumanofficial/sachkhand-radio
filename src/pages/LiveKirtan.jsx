// src/pages/LiveKirtan.jsx
import React, { useRef } from "react";
import RadioPlayer from "../components/RadioPlayer";
import "../styles/home.css"; // Same CSS as Home.jsx
import goldentemple from "../assets/golden-temple.png";

const LiveKirtan = () => {
  const audioRef = useRef(null);

  return (
    <div className="home-container">
      <div className="player-card">
        <img
          src={goldentemple}
          alt="Golden Temple - Live Radio Broadcast"
          className="responsive-img"
        />
        <div className="player-body">
            <p>🎧 Audio: Live Kirtan from Sachkhand Sri Harminder Sahib, Amritsar</p>
          <RadioPlayer
            streamUrl="https://live.sgpc.net:8443/;nocache=889869"
            audioRef={audioRef}
          />
        </div>
      </div>
    </div>
  );
};

export default LiveKirtan;
