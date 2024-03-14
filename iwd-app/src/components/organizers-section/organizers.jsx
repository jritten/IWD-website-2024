import React from "react";
import "./organizers.css";
import OrganizerCard from "../organizer-cards/organizer-cards";
import organizersData from "./organizers-list";
import speakersData from "../speakers-section/speakers-list";

function Organizers() {
  return (
    /* app-section style is necessary, please do not delete */
    <div className="app-section organizers-div">
      <div className="organizers-text">
        Organizers
      </div>
      <div className="organizers-cards-container">
        {organizersData.map((organizer, index) => (
          <OrganizerCard key={index} {...organizer}/>
        ))}
      </div>
    </div>
  );
}

export default Organizers;
