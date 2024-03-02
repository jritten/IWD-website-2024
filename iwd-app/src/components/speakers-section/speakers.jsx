import React from "react";
import "./speakers.css";
import SpeakerCard from "../speaker-cards/speaker-card";
import speakersData from "./speakers-list.js";

function Speakers() {
  return (
    /* app-section style is necessary, please do not delete */
    <div className="app-section speakers-div">
      <div className="speaker-cards-container">
        {speakersData.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </div>
  );
}

export default Speakers;
