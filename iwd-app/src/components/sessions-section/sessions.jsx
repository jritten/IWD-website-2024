import React from "react";
import "./sessions.css";
import SessionCard from "../session-cards/session-card";
import sessionCards from "./content-list";

function Sessions() {
  return (
    <div className="sessions-div">
      {sessionCards.map((session, index) => (
        
      ))}
    </div>
  );
}

export default Sessions;
