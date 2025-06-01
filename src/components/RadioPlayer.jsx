import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import "./RadioPlayer.css";

const RadioPlayer = ({ streamUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio
        .play()
        .then(() => {})
        .catch((err) => console.log("Play failed:", err));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <div className="radio-container">
      <audio ref={audioRef} src={streamUrl} />
      <div className="controls">
        <button className="circle-btn play-btn" onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button className="circle-btn" onClick={toggleMute}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>
    </div>
  );
};

export default RadioPlayer;
