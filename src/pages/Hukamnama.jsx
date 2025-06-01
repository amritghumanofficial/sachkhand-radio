import React, { useState, useEffect } from "react";
import RadioPlayer from "../components/RadioPlayer";
import HukamnamaImg from "../assets/hukamnama.png"

const Hukamnama = () => {
  const [hukamnamaUrl, setHukamnamaUrl] = useState(localStorage.getItem("hukamnama") || "default-hukamnama-url");

  useEffect(() => {
    const savedUrl = localStorage.getItem("hukamnama");
    if (savedUrl) {
      setHukamnamaUrl(savedUrl);
    }
  }, []);


  
  return (
      <div className="home-container">

        <div className="player-card">
          <img
            src={HukamnamaImg}
            alt="Golden Temple - Live Radio Broadcast"
            className="responsive-img"
          />
          <div className="player-body">
          <p>🎧 Audio: Hukamnama Sahib from Sachkhand Sri Harminder Sahib, Amritsar</p>
           <RadioPlayer streamUrl={hukamnamaUrl} /> 
          </div>
        </div>
      </div>
  );

};

export default Hukamnama;