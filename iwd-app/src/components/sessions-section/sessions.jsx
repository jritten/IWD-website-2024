import React from "react";
import "./sessions.css";
import SessionCard from "../session-cards/session-card";

function Sessions() {
  return (
    <div className="sessions-div">
      {/* Session div content goes here */}I am Sessions
      <div className="sessions-row">
        <SessionCard
          title="Introduction to React Hooks"
          imageUrl="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          speaker="John Doe"
          time="10:00 AM - 11:30 AM"
          place="Main Hall"
          description="Lorem "
        />
      </div>
    </div>
  );
}

export default Sessions;
