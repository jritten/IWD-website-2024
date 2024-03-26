import React from "react";
import "./speakers.css";
import "../../globalStyles.css";
import SpeakerCard from "../speaker-cards/speaker-card";
import speakersData from "./speakers-list.js";

function Speakers() {
  return (
    /* app-section style is necessary, please do not delete */
    <div id="speakers-div" className="app-section speakers-div">
      <div className="section-title">Speakers</div>
      <div className="speaker-cards-container">
        {speakersData.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </div>
  );
}

export default Speakers;
