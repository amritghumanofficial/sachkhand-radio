import React, { useState, useEffect } from "react";
import RadioPlayer from "../components/RadioPlayer";

const Katha = () => {
  const [kathaUrl, setKathaUrl] = useState(localStorage.getItem("katha") || "default-katha-url");
  const [kathaImage, setKathaImage] = useState("");

  useEffect(() => {
    const savedUrl = localStorage.getItem("katha");
     const savedImg = localStorage.getItem("kathaImage");
    if (savedUrl) {
      setKathaUrl(savedUrl);
    }
     if (savedImg) setKathaImage(savedImg);
  }, []);

  return (
//     <div className="container d-flex justify-content-center mt-5">
//       <div className="card text-center shadow-lg" style={{ width: "25rem" }}>
//         <img 
//           src={kathaImage}
//           alt="Manji Sahib Katha" 
//           className="card-img-top" 
//         />

//         <div className="card-body">
//                     <p>🎧Hukamnama Katha: Gurdwara Sri Manji Sahib Diwan Hall, Sri Amritsar</p>
//             { kathaUrl ? (
//   <RadioPlayer streamUrl={kathaUrl} />  
// ) : (
//   <p>Loading latest Katha stream...</p>
// )}

//         </div>
//       </div>
//     </div>


   <div className="home-container">

        <div className="player-card">
          <img 
       src={kathaImage}
           alt="Manji Sahib Katha" 
           className="card-img-top" 
         />
          <div className="player-body">
          <p>🎧Hukamnama Katha: Gurdwara Sri Manji Sahib Diwan Hall, Sri Amritsar</p>
                { kathaUrl ? (
   <RadioPlayer streamUrl={kathaUrl} />  
 ) : (
   <p>Loading latest Katha stream...</p>
 )}
          </div>
        </div>
      </div>
  );
};

export default Katha;
