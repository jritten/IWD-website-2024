import React from 'react';
import './devTeam-card.css'
import linkedInIcon from '../../assets/linkedin-icon.png'

function DevTeamCard({imageurl, name, linkedIn, status}) {
    return (
        <div className='devTeam-card'>
            <div className="devTeam-image">
                <img src={imageurl} alt="DevTeam image"/>
                <div className="popup">
                    <p>
                        University of Michigan-Dearborn <br/>
                        {status || 'Junior'}
                    </p>
                </div>
            </div>
            <div className='devTeam-name'>
                {name || "Rocket Homes"}
            </div>
            <div className='devTeam-linkedin'>
                <a href={linkedIn}>
                    <img id="linkedin-icon" src={linkedInIcon} alt="LinkedIn Icon" />
                </a>
            </div>
        </div>
    );
}

export default DevTeamCard;