import React from "react";
import "./speakers.css";
import SpeakerCard from "../speaker-cards/speaker-card";

function Speakers() {
  return (
    <div className="speakers-div">
      {/* Speaker div content goes here */}I am Speakers
      <div className="speaker-cards-container">
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
      </div>
    </div>
  );
}

export default Speakers;
