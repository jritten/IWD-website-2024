import React from "react";
import "./devTeam.css";
import devTeamData from "./devTeam-list";
import DevTeamCard from "../devTeam-cards/devTeam-card";
import "../../globalStyles.css";

function DevTeam() {
  return (
    <div className="app-section devTeam-div">
      <div className="section-title-2">Dev Team</div>
      <div className="devTeam-cards-container">
        {devTeamData.map((devMember, index) => (
          <DevTeamCard key={index} {...devMember} />
        ))}
      </div>
    </div>
  );
}

export default DevTeam;
