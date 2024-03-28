import React from "react";
import "./speakers.css";
import "../../globalStyles.css";
import SpeakerCard from "../speaker-cards/speaker-card";
import speakersData from "./speakers-list.js";
import blob1 from "../../assets/designs/blob1.png";
import blob2 from "../../assets/designs/blob2.png";
import quotes from "../../assets/designs/quotes.png";
import box from "../../assets/designs/boxes-1.png";



function Speakers() {
  return (
    /* app-section style is necessary, please do not delete */
    <div id="speakers-div" className="app-section speakers-div">
      <div className="section-title z-10" id="speaker-title">
        Speakers
        <img class="h-[50px]" src={quotes}></img>
      </div>
      <div className="speaker-cards-container z-10">
        {speakersData.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
      <img class="absolute right-0 bottom-0 h-[2/3] w-1/3" src={blob2}></img>
      <img class="absolute right-20 bottom-0 h-[400px]" src={box}></img>
    </div>
  );
}

export default Speakers;
