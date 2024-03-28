import React from "react";
import "./devTeam.css";
import devTeamData from "./devTeam-list";
import DevTeamCard from "../devTeam-cards/devTeam-card";
import "../../globalStyles.css";
import devicon from "../../assets/designs/devicon.png";
import file from "../../assets/designs/file-icon.png";



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
      <img
              class="absolute invisible lg:visible right-0 top-1 h-[180px]"
        src={file}
      ></img>
    </div>
  );
}

export default DevTeam;
