// import React, { useRef, useState } from "react";
// import RadioPlayer from "../components/RadioPlayer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/home.css"; 

// const Home = () => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlay = () => {
//     if (!audioRef.current) return;

//     if (audioRef.current.paused) {
//       audioRef.current.play();
//       setIsPlaying(true);
//     } else {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row justify-content-center">
//         <div className="col-12 col-sm-8 col-md-6 col-lg-4">
//           <div className="card text-center shadow-sm custom-card">
//             <img
//               src="https://shiningsikh.com/wp-content/uploads/2024/12/golden-temple-spiritual-haven-amritsar_984027-264587.avif"
//               alt="Golden Temple - Live Radio Broadcast"
//               className="card-img-top img-fluid custom-img"
//             />
            
//             <div className="card-body p-3">
//               <RadioPlayer
//                 streamUrl="https://live.sgpc.net:8443/;nocache=889869"
//                 audioRef={audioRef}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// src/pages/Home.jsx
import React, { useRef, useState } from "react";
import RadioPlayer from "../components/RadioPlayer";
import "../styles/home.css"; // External styles
import goldentemple from "../assets/golden-temple.png";
const Home = () => {
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

export default Home;
