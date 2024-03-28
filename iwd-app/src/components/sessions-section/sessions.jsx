import React, { useState } from "react";
import "./sessions.css";
import "../../globalStyles.css";

import SessionCard from "../session-cards/session-card";
import talkSeminarsCards from "./lightning-talks";
import agendaCards from "./full-agenda";
import phone1 from "../../assets/designs/phone-1.png";
import tab from "../../assets/designs/tab.png";


function Sessions() {
  const [activeTab, setActiveTab] = useState("Networking");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="sessions-div" className="app-section sessions-div">
      <div className="header-container">
        <div className="section-title">
          Sessions 
          <img class="h-[40px] mx-4" src={tab}></img>
        </div>
      </div>
      <div className="tabs-container">
        <div
          className={`tab ${activeTab === "Networking" ? "active" : ""}`}
          onClick={() => handleTabClick("Networking")}
        >
          <span>Schedule</span>
        </div>
        <div
          className={`tab ${activeTab === "Talks/Seminars" ? "active" : ""}`}
          onClick={() => handleTabClick("Talks/Seminars")}
        >
          <span>Lightning Talks</span>
        </div>
      </div>
      <div className="session-cards-container z-10">
        {activeTab === "Networking" &&
          agendaCards.map((session, index) => (
            <div className="sessions-row" key={index}>
              <SessionCard
                title={session.title}
                imageUrl={session.imageUrl}
                speaker={session.speaker}
                time={session.time}
                place={session.place}
                description={session.description}
                type={session.type}
                moderator={session.moderator}
                panelists={session.panelists}
                showImageBorder={session.showImageBorder}
              />
            </div>
          ))}
        {activeTab === "Talks/Seminars" &&
          talkSeminarsCards.map((session, index) => (
            <div className="sessions-row" key={index}>
              <SessionCard
                title={session.title}
                imageUrl={session.imageUrl}
                speaker={session.speaker}
                time={session.time}
                place={session.place}
                description={session.description}
                type={session.type}
                moderator={session.moderator}
                panelists={session.panelists}
                showImageBorder={session.showImageBorder}
              />
            </div>
          ))}
      </div>
      <img
        class="absolute right-0 bottom-0 w-[400px] lg:w-[360px]"
        src={phone1}
      ></img>
    </div>
  );
}

export default Sessions;