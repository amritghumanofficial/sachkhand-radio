import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LiveKirtan from "./pages/LiveKirtan";
import Hukamnama from "./pages/Hukamnama";
import Katha from "./pages/Katha";
import Footer from "./components/Footer";
import AdminPage from "./pages/AdminPage";
import "./App.css";

const App = () => {
   // 🔒 Disable Right Click Globally
  // useEffect(() => {
  //   const handleRightClick = (e) => {
  //     e.preventDefault();
  //   };
  //   document.addEventListener("contextmenu", handleRightClick);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleRightClick);
  //   };
  // }, []);
  return (
    <>
     <div className="app-container">
      <Navbar />
      
          
          <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live-kirtan" element={<LiveKirtan />} />
          <Route path="/hukamnama" element={<Hukamnama />} />
          <Route path="/katha" element={<Katha />} />
          <Route path="/adminPage" element={<AdminPage />} />
        </Routes>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default App;
