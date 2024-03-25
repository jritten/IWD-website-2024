import React from "react";
import "./pop-up-card.css";

function SpeakerPopupCard({ imageurl, name, description, onClose, flower }) {
  const handleOverlayClick = (event) => {
    // only close the modal if the close button is clicked
    if (event.target.classList.contains("close-button")) {
      onClose(); // Call the onClose callback passed from the parent component
    }
  };

  return (
    <div className="speaker-modal-overlay" onClick={handleOverlayClick}>
      <div className="speaker-modal">
        <div className="modal-header">
          <h2>{name || "No Name"}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          <div className="modal-image">
            <img src={imageurl} alt="Speaker image" />
          </div>
          <div className="speaker-description">
            {description || "No Description"}
          </div>
        </div>
        <div className="bottom-right-image">
          <img src={flower} width={100} alt="flower" />
        </div>
      </div>
    </div>
  );
}

export default SpeakerPopupCard;
