import React from "react";
import "./session-card.css";

function SessionCard({ title, imageUrl, speaker, time, place }) {
  return (
    <div className="session-card">
      <div className="imageContainer">
        <img src={imageUrl} alt="Person" />
      </div>
      <div className="infoContainer">
        <div className="title">{title}</div>
        <div className="speaker">By {speaker}</div>
        <div className="time">
          From <span>{time}</span> in {place}
        </div>
      </div>
      <div className="arrowContainer">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />

        <span
          className="material-symbols-outlined"
          style={{ fontSize: "50px" }}
        >
          expand_circle_down
        </span>
      </div>
    </div>
  );
}

export default SessionCard;
