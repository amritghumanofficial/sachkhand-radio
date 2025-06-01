import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") === "true");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!authenticated) {
      navigate("/adminPage"); 
    }
  }, [authenticated, navigate]);

  const handleLogin = () => {
    if (username === "amritghuman" && password === "amritghumanofficial") {
      localStorage.setItem("authenticated", "true");
      setAuthenticated(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    setAuthenticated(false);
    setUsername("");
    setPassword("");

    navigate("/adminPage");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem("kathaImage", reader.result); // ✅ Base64 image save
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    localStorage.removeItem("kathaImage");
    alert("Katha image reset successfully.");
  };


  if (!authenticated) {
    return (
      <div className="container mt-5">
        <h2 className="text-center">Admin Login</h2>
        <div className="card p-4 shadow-lg">
          <label>Username:</label>
          <input
            type="text"
            className="form-control mb-3"
            value={username} // ✅ Now binds with state
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            className="form-control mb-3"
            value={password} // ✅ Now binds with state
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-success w-100" onClick={handleLogin}>Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">Update Daily Streams</h2>
      <div className="card p-4 shadow-lg">
        <label>Hukamnama Stream URL:</label>
        <input 
          type="text" 
          className="form-control mb-3" 
          value={localStorage.getItem("hukamnama") || ""} 
          onChange={(e) => localStorage.setItem("hukamnama", e.target.value)}
        />

        <label>Katha Stream URL:</label>
        <input 
          type="text" 
          className="form-control mb-3" 
          value={localStorage.getItem("katha") || ""} 
          onChange={(e) => localStorage.setItem("katha", e.target.value)}
        />

           <label>Upload Katha Image:</label>
        <input
          type="file"
          accept="image/*"
          className="form-control mb-3"
          onChange={handleImageUpload}
        />

        <button className="btn btn-warning w-100 mb-2" onClick={handleResetImage}>Reset Katha Image</button>

        <button className="btn btn-primary w-100">Save Links</button>

        <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AdminPage;
