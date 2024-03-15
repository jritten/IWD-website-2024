import React from "react";
import "./devTeam.css";
import devTeamData from "./devTeam-list";
import DevTeamCard from "../devTeam-cards/devTeam-card";

function DevTeam() {
  return (
    /* app-section style is necessary, please do not delete */
    <div className="app-section devTeam-div">
      <div className="devTeam-text">
      Dev Team
      </div>
      <div className="devTeam-cards-container">
      {devTeamData.map((devMember, index) => (
          <DevTeamCard key={index} {...devMember}/>
        ))}
      </div>
    </div>
  );
}

export default DevTeam;
