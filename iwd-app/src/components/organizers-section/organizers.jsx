import React from "react";
import "./organizers.css";
import OrganizerCard from "../organizer-cards/organizer-cards";

function Organizers() {
  return (
    /* app-section style is necessary, please do not delete */
    <div className="app-section organizers-div">
      <div className="organizers-text">
        Organizers
      </div>
      <OrganizerCard/>
    </div>
  );
}

export default Organizers;
