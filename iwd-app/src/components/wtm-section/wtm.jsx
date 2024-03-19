import React from "react";
import "./wtm.css";
import Carousel from "../carousel/carousel"

function WomenTechmakers(){
  return (
    <div className="app-section wtm-section">
      <h2>Meet the Women Techmakers</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <Carousel />
    </div>
  );
};

export default WomenTechmakers;
