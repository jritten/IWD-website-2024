import React, { useState } from "react";
import "./sessions.css";
import "../../globalStyles.css";

import SessionCard from "../session-cards/session-card";
import networkingCards from "./content-list";
import talkSeminarsCards from "./content-list2";

function Sessions() {
  const [activeTab, setActiveTab] = useState("Networking");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-section sessions-div">
      <div className="header-container">
        <div className="section-title">Sessions</div>
      </div>
      <div className="tabs-container">
        <div
          className={`tab ${activeTab === "Networking" ? "active" : ""}`}
          onClick={() => handleTabClick("Networking")}
        >
          <span>Networking/Social Events</span>
        </div>
        <div
          className={`tab ${activeTab === "Talks/Seminars" ? "active" : ""}`}
          onClick={() => handleTabClick("Talks/Seminars")}
        >
          <span>Talks/Seminars</span>
        </div>
      </div>
      <div className="session-cards-container">
        {activeTab === "Networking" &&
          networkingCards.map((session, index) => (
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
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sessions;
