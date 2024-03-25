import React from "react";
import "./organizers.css";
import OrganizerCard from "../organizer-cards/organizer-cards";
import organizersData from "./organizers-list";
import speakersData from "../speakers-section/speakers-list";
import "../../globalStyles.css";

function Organizers() {
  return (
    /* app-section style is necessary, please do not delete */
    <div id="organizers-div" className="app-section organizers-div">
      <div className="section-title-2">Organizers</div>
      <div className="organizers-cards-container">
        {organizersData.map((organizer, index) => (
          <OrganizerCard key={index} {...organizer} />
        ))}
      </div>
    </div>
  );
}

export default Organizers;
