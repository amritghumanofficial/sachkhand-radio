import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Sachkhand Live Radio | Designed by Amrit Ghuman</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    background: "#333",
    color: "white",
    position: "fixed",
    paddingTop: "15px",
    bottom: 0,
    width: "100%",




     // Gold gradient line at the top
    borderTop: "4px solid",
    borderImage: "linear-gradient(90deg, #b9935a 0%, #f7e07c 40%, #f7d560 60%, #b9935a 100%) 1",
    // Optional: add some spacing between line and text
    boxShadow: "0 -2px 20px rgba(247, 224, 124, 0.08)"
  },
};

export default Footer;
