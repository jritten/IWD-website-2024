import React from "react";
import "./sessions.css";
import SessionCard from "../session-cards/session-card";
import sessionCards from "./content-list";

function Sessions() {
  return (
    /* app-section style is necessary, please do not delete */
    <div className="app-section sessions-div">
      {sessionCards.map((session, index) => (
        // Use React.Fragment to keep the structure without rendering anything
        <React.Fragment key={index}>
          {/* <SessionCard {...session} /> */}
        </React.Fragment>
      ))}
    </div>
  );
}
export default Sessions;
