import React from 'react';
import './organizer-card.css'

function OrganizerCard({imageurl, name, position}) {
    return (
        <div className='organizer-card'>
            <div className="organizer-image">
                <img src={imageurl = "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"} alt="Organizer image"/>
            </div>
            <div className='organizer-name'>
                {name || "Rocket Homes"}
            </div>
            <div className='organizer-position'>
                {position || "Senior IOS Developer"}
            </div>
        </div>
    );
}

export default OrganizerCard;