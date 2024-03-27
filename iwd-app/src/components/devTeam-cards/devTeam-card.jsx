import React from "react";
import "./devTeam-card.css";
import linkedInIcon from "../../assets/linkedin-icon.png";

function DevTeamCard({ imageurl, name, linkedIn, status }) {
  return (
    <div className="devTeam-card sm:w-[234px] h-[328px] m-8">
      <div className="devTeam-image sm:w-[203px] h-[225px] m-4">
        <img src={imageurl} alt="DevTeam image" />
        <div className="popup">
          <p>
            University of Michigan-Dearborn <br />
            {status || "Junior"}
          </p>
        </div>
      </div>
      <div className="devTeam-name">{name || "Rocket Homes"}</div>
      <div className="devTeam-linkedin">
        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
          <img id="linkedin-icon" src={linkedInIcon} alt="LinkedIn Icon" />
        </a>
      </div>
    </div>
  );
}

export default DevTeamCard;
