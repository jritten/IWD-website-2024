import React from 'react';
import "./speaker-card.css";

function SpeakerCard(imageurl, name, position, NA, description) {
  return (
    <div className="speaker-card">
       <div className="speaker-image">
          <img src={imageurl} alt="Speaker image"/>
       </div>
       <div className='speaker-name'>
          Martin Jacobs
       </div>
       <div className='speaker-position'>
          UX Designer
       </div>
       <div className='speaker-NA'>
          Rocket Homes
       </div>
       <div className='speaker-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis ut lectus non sollicitudin. 
       </div>
    </div>
  );
}

export default SpeakerCard;
