import React from "react";
import "./facilitators.css";
import facilitatorsData from "./facilitators-list";
import OrganizerCard from "../organizer-cards/organizer-cards";
import "../../globalStyles.css";

function Facilitators() {
  return (
    /* app-section style is necessary, please do not delete */
    <div className="app-section facilitators-div">
      <div className="section-title">Facilitators</div>
      <div className="facilitators-cards-container">
        {facilitatorsData.map((facilitator, index) => (
          <OrganizerCard key={index} {...facilitator} />
        ))}
      </div>
    </div>
  );
}

export default Facilitators;
