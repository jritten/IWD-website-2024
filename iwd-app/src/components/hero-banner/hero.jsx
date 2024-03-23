import React from "react";
import "./hero.css";
import globeGIF from "../../assets/hero/globe.gif";
import heroGirl from "../../assets/hero/women-hero.png";
import background from "../../assets/hero/hero-background.PNG";
import date from "../../assets/hero/rocket-2.jpeg";
import mobilebg from "../../assets/hero/mobile-hero-asset.PNG";
import dateAnimation from "../../assets/hero/date-animation.gif";

function Hero() {
  return (
    <div class="app-section hero-banner" style={{ marginTop: "55px" }}>
      {" "}
      {/* marginTop offsets by exactly the height of Nav */}
      {/* The main responsive container */}
      <div class="flex flex-col my-5 md:flex-row md:my-0 lg:relative">
        {/* background */}
        <div class="w-0 lg:w-2/3 lg:h-auto lg:self-start">
          <img id="background-img" src={background}></img>
        </div>
        {/* foreground */}
        <div class="flex flex-col items-center md:flex-row md:p-2 lg:pl-20 lg:pr-5 md:justify-center lg:absolute">
          {/* woman */}
          <div class="w-4/5 md:1/2 lg:w-2/6">
            <img class="w-full h-full" src={heroGirl}></img>
          </div>
          {/* text & button */}
          <div class="w-4/5 md:1/2 lg:w-2/6 lg:py-2">
            <div className="heading-div">
              <h1>
                Impact <br /> The Future
              </h1>
              <img id="globe-gif" src={globeGIF}></img>
            </div>
            <h2>Detroit International Women's Day Summit 2024</h2>
            <p>
              Tailwind CSS is a highly customizable, low-level CSS framework
              that provides utility classes to build designs directly in your
              markup. It emphasizes rapid UI development, and its approach to
              styling through composition promotes a tighter integration between
              design and development, leading to more maintainable and scalable
              codebases.
            </p>
            <button className="btn tickets-btn">Get Tickets</button>
          </div>
        </div>
        {/* also background */}
        <div class="flex flex-col justify-end w-0 lg:w-1/4 pb-12">
          {/* <img className="h-36 w-full" src={dateAnimation}></img> */}
          <img className="h-auto w-full" src={date}></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
