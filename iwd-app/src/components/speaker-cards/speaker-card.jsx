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
      className="speaker-card min-h-[330px] md:m-10 mx-4 my-6 md:w-[310px] md:min-h-[410px] w-[170px] min-h-[3rem] lg:w-[310px] lg:min-h-[410px]"
      onClick={handleCardClick}
      style={{
        cursor: description ? (showModal ? "default" : "pointer") : "default",
      }}
    >
      <div className="speaker-image rounded-[0px] w-[130px] h-[130px] md:w-[172px] md:h-[172px]">
        <img src={imageurl} alt="Speaker image" />
      </div>
      <div className="speaker-name text:base leading-5 md:text-3xl md:leading-10">
        {name || "No Name"}
      </div>
      <div className="speaker-position text-sm leading-4  my-3 sm:text-lg  md:leading-10">
        {position || "No Position"}
      </div>
      <div className="speaker-company text-xs leading-4  my-3 sm:text-lg  md:leading-10">
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
