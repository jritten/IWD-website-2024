import React from "react";
import "./speakers.css";
import SpeakerCard from "../speaker-cards/speaker-card";
import speakersData from "./speakers-list.js";
import underlineImg from "../../assets/Underline.png";

function Speakers() {
  return (
    /* app-section style is necessary, please do not delete */
    <div className="app-section speakers-div" id="speakers-div">
      <div className="speakers-header">Speakers</div>
      <img src={underlineImg} alt="" className="underline2" />
      <div className="speaker-cards-container">
        {speakersData.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </div>
  );
}

export default Speakers;
