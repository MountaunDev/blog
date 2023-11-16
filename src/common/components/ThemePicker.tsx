"use client";
import React from "react";
import { FaLightbulb, FaMoon } from "react-icons/fa";

const ThemePicker = () => {
  const switchColor = () => {
      document.querySelector("body").classList.toggle("active-dark-mode");
  };

  return (
    <div className="my_switcher d-none d-lg-block">
      <button onClick={switchColor}>
        <span className="setColor dark">
          <FaLightbulb />
        </span>
        <span className="setColor light">
          <FaMoon />
        </span>
      </button>
    </div>
  );
};

export default ThemePicker;
