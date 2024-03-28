import React from "react";
import "./organizers.css";
import OrganizerCard from "../organizer-cards/organizer-cards";
import organizersData from "./organizers-list";
import speakersData from "../speakers-section/speakers-list";
import "../../globalStyles.css";
import bulb from "../../assets/designs/lightbulb.png";
import branch1 from "../../assets/designs/branch1.png";
import bridge from "../../assets/designs/bridge.png";




function Organizers() {
  return (
    /* app-section style is necessary, please do not delete */
    <div id="organizers-div" className="app-section organizers-div">
      <div className="section-title" id="organizers-title">
        Organizers
        <img class="h-[60px] mx-4" src={bulb}></img>
      </div>
      <div className="organizers-cards-container z-10">
        {organizersData.map((organizer, index) => (
          <OrganizerCard key={index} {...organizer} />
        ))}
      </div>
      <img
        class="absolute bottom-0 right-0 sm:top-0 sm:left-0 w-[400px] lg:w-[360px]"
        src={branch1}
      ></img>
      <img
        class="absolute invisible lg:visible right-0 bottom-0 h-[300px]"
        src={bridge}
      ></img>
    </div>
  );
}

export default Organizers;
