import React from "react";
import { WiAlien } from "react-icons/wi";
import StickyHeader from "./StickyHeader";

const HeaderLogo = () => {
  const sticky = StickyHeader(100);

  return (
    <div className="flex items-center justify-center">
      <div className={`${sticky ? "sticky-logo-container" : "logo-container"}`}>
        <WiAlien size={60} color={`${sticky ? "white" : "black"}`} />
      </div>
      <h3>Mountain Dev</h3>
    </div>
  );
};

export default HeaderLogo;
