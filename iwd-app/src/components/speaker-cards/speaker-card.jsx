import React from 'react';
import "./speaker-card.css";

function SpeakerCard({imageurl, name, position, company, description}) {
  return (
    <div className="speaker-card">
       <div className="speaker-image">
          <img src={imageurl} alt="Speaker image"/>
       </div>
       <div className='speaker-name'>
          {name || "No Name"}
       </div>
       <div className='speaker-company'>
          {position || "No Position"}
       </div>
       <div className='speaker-position'>
          {company || "No Company"}
       </div>
       <div className='speaker-description'>
          {description || "No Description"} 
       </div>
    </div>
  );
}

export default SpeakerCard;
