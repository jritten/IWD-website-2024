import React from "react";
import "./sessions.css";
import SessionCard from "../session-cards/session-card";
import sessionCards from "./content-list";

function Sessions() {
  return (
    <div className="app-section sessions-div" id="sessions-div">
      <div className="header-container">
        <div class="sessions-title">
          Agenda
          {/* <img src={underlineImg} alt="" class="underline" /> */}
        </div>
      </div>
      {sessionCards.map((session, index) => (
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
  );
}
export default Sessions;
