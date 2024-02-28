import React from 'react';
import "./speaker-card.css";

function SpeakerCard(imageurl, name, position, company, description) {
  return (
    <div className="speaker-card">
       <div className="speaker-image">
          <img src={imageurl} alt="Speaker image"/>
       </div>
       <div className='speaker-name'>
          {name}
       </div>
       <div className='speaker-position'>
          {position}
       </div>
       <div className='speaker-company'>
          {company}
       </div>
       <div className='speaker-description'>
          {description} 
       </div>
    </div>
  );
}

export default SpeakerCard;
