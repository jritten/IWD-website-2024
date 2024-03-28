import React from "react";
import "./devTeam.css";
import devTeamData from "./devTeam-list";
import DevTeamCard from "../devTeam-cards/devTeam-card";
import "../../globalStyles.css";
import devicon from "../../assets/designs/devicon.png";


function DevTeam() {
  return (
    <div id="devTeam-div" className="app-section devTeam-div">
      <div className="section-title" id="devteam-title">
        Dev Team 
        <img class="h-[60px] mx-4" src={devicon}></img>
      </div>
      <div className="devTeam-cards-container">
        {devTeamData.map((devMember, index) => (
          <DevTeamCard key={index} {...devMember} />
        ))}
      </div>
    </div>
  );
}

export default DevTeam;
