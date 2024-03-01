import React from "react";
import "./hero.css";
import globeGIF from "../../assets/hero/globe.gif"
import heroGirl from "../../assets/hero/women-hero.png";
import background from "../../assets/hero/hero-background.PNG";



function Hero() {
  return (
    <div className="hero-banner">
      <div className="top-row">
        <div className="title-div">
          <div className="heading-div">
            <h1>
              Impact <br /> the Future
            </h1>
            <img id="globe-gif" src={globeGIF}></img>
          </div>
          <h2>International Women's Day 2024</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </p>
          <btn id="tickets-btn">Namaa's button</btn>
        </div>
        <img id="woman-hero" src={heroGirl}></img>
      </div>
      <img id="background-img" src={background}></img>
    </div>
  );
}

export default Hero;
