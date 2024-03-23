import React, { useState } from "react";
import SpeakerPopupCard from "../pop-up-card/pop-up-card";
import "./speaker-card.css";

function SpeakerCard({ imageurl, name, position, company, description }) {
  // state to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Functions to open/close the modal
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to handle clicking the speaker card
  const handleCardClick = (event) => {
    // Check if the close button is clicked
    if (event.target.classList.contains("close-button")) {
      // Prevent the event from bubbling to the parent div
      event.stopPropagation();
    } else {
      // Open the modal if the close button is not clicked
      openModal();
    }
  };

  return (
    <div className="speaker-card" onClick={handleCardClick}>
      <div className="speaker-image">
        <img src={imageurl} alt="Speaker image" />
      </div>
      <div className="speaker-name">{name || "No Name"}</div>
      <div className="speaker-position my-3">{position || "No Position"}</div>
      <div className="speaker-company">{company || "No Company"}</div>
      {/* render the pop-up card if showModal state is true */}
      {showModal && (
        <SpeakerPopupCard
          imageurl={imageurl}
          name={name}
          description={description}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default SpeakerCard;
