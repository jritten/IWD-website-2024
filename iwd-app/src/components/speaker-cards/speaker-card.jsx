import React, { useState } from "react";
import SpeakerPopupCard from "../pop-up-card/pop-up-card";
import "./speaker-card.css";

function SpeakerCard({
  imageurl,
  name,
  position,
  company,
  description,
  flower,
}) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handleCardClick = (event) => {
    if (event.target.classList.contains("close-button")) {
      event.stopPropagation();
    } else {
      if (description) {
        openModal();
      }
    }
  };

  return (
    <div
      className="speaker-card px-3 pb-2 min-h-[300px] sm:m-10 sm:p-3 mx-4 my-6 sm:w-[310px] sm:min-h-[410px] w-5/6 lg:w-[310px] lg:min-h-[410px]"
      onClick={handleCardClick}
      style={{
        cursor: description ? (showModal ? "default" : "pointer") : "default",
      }}
    >
      <div className="speaker-image rounded-[0px] w-[130px] h-[130px] sm:w-[172px] sm:h-[172px]">
        <img src={imageurl} alt="Speaker image" />
      </div>
      <div className="speaker-name text:base leading-5 sm:text-3xl sm:leading-10">
        {name || "No Name"}
      </div>
      <div className="speaker-position text-sm leading-4  my-3 sm:text-lg  sm:leading-10">
        {position || "No Position"}
      </div>
      <div className="speaker-company text-xs leading-4  my-3 sm:text-lg  sm:leading-5">
        {company || "No Company"}
      </div>
      {showModal && description && (
        <SpeakerPopupCard
          imageurl={imageurl}
          name={name}
          description={description}
          flower={flower}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default SpeakerCard;
