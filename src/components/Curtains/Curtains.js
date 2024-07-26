// src/components/Curtains/Curtains.js
import React from "react";
import "./Curtains.css";
import curtainImg from "./curtain.png"; // Upewnij się, że obrazek jest w tym samym folderze

const Curtains = ({ children }) => {
  return (
    <>
      <div className="curtain-container">
        <div className="curtain left">
          <img src={curtainImg} alt="Curtain" />
        </div>
        <div className="curtain right">
          <img src={curtainImg} alt="Curtain" />
        </div>
        <div className="children-container">{children}</div>
      </div>
    </>
  );
};

export default Curtains;
