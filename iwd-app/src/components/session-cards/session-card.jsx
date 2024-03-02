import React, { useState } from "react";
import "./session-card.css";

function SessionCard({
  title,
  imageUrl,
  speaker,
  moderator,
  panelists,
  time,
  place,
  description,
  type, //for special panel card
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`session-card ${isExpanded ? "expanded" : ""}`}>
      <div className="main-content">
        <div className="imageContainer">
          <img src={imageUrl} alt="Person" />
        </div>
        <div className="infoContainer">
          <div className="title">{title}</div>
          {type === "panel" ? (
            <div className="moderator">
              <span style={{ fontWeight: "bold" }}>Moderator:</span> {moderator}
            </div>
          ) : (
            <div className="speaker">By {speaker}</div>
          )}
          {type === "panel" && (
            <div className="panelists">
              <span style={{ fontWeight: "bold" }}>Panelists:</span> {panelists}
            </div>
          )}
          <div className="time">
            From <span>{time}</span> in {place}
          </div>
        </div>
        <div
          className={`arrowContainer ${isExpanded ? "expanded" : ""}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
          <span
            className={`material-symbols-outlined ${
              isExpanded ? "rotate" : ""
            }`}
            style={{ fontSize: "50px" }}
          >
            expand_circle_down
          </span>
        </div>
      </div>
      <div
        className="description-container"
        style={{
          maxHeight: isExpanded ? "1000px" : "0px",
          transition: "max-height 0.6s ease",
          overflow: "hidden",
        }}
      >
        {isExpanded && ( // Render description content only when expanded
          <div className="description">{description}</div>
        )}
      </div>
    </div>
  );
}

export default SessionCard;
