import React from "react";
import "./devTeam-card.css"; // Ensure this CSS file doesn't conflict with Tailwind styles.
import linkedInIcon from "../../assets/linkedin-icon.png";

function DevTeamCard({ imageurl, name, linkedIn, status }) {
  return (
    // Adjust the card size and margin for smaller screens using Tailwind's responsive design utilities
    <div className="devTeam-card  min-h-[253px] px-3 py-3 mx-4 my-6  w-5/6 sm:m-8 sm:w-[234px] sm:h-[328px]">
      <div className="devTeam-image mb-[10px] w-[130px] h-[130px] sm:w-[203px] sm:h-[225px]">
        <img src={imageurl} alt="DevTeam image" />
        <div className="popup text-center text-10px h-2/4 sm:text-12px sm:h-1/4">
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
