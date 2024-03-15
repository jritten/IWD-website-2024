import React from 'react';
import './devTeam-card.css'
import linkedInIcon from '../../assets/linkedin-icon.png'

function DevTeamCard({imageurl, name, linkedIn}) {
    return (
        <div className='devTeam-card'>
            <div className="devTeam-image">
                <img src={imageurl} alt="Organizer image"/>
            </div>
            <div className='devTeam-name'>
                {name || "Rocket Homes"}
            </div>
            <div className='devTeam-linkedin'>
                <a href={linkedIn}>
                    <img src={linkedInIcon} alt="LinkedIn Icon" />
                </a>
            </div>
        </div>
    );
}

export default DevTeamCard;