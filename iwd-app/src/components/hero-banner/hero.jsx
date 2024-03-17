import React from "react";
import "./hero.css";
import globeGIF from "../../assets/hero/globe.gif";
import heroGirl from "../../assets/hero/women-hero.png";
import background from "../../assets/hero/hero-background.PNG";
import date from "../../assets/hero/rocket-2.jpeg";
import dateAnimation from "../../assets/hero/date-animation.gif";

function Hero() {
  return (
    <div className="app-section hero-banner">
      <div className="background-div">
        <img id="background-img" src={background}></img>
      </div>
      <div className="top-row">
        <div className="title-div">
          <div className="heading-div">
            <h1>
              Impact <br /> the Future
            </h1>
            <img id="globe-gif" src={globeGIF}></img>
          </div>
          <h2>Detroit International Women's Day Summit 2024</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <btn id="tickets-btn">Get Tickets</btn>
        </div>
        <div className="woman-date-column">
          <img id="woman-hero" src={heroGirl}></img>
          <div className="date-img-div">
            {/* <img id="date-animation" src={dateAnimation}></img> */}
            <img id="date-img" src={date}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
