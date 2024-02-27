import React, { useState } from "react";
import "./navbar.css";

function NavBar() {
  const [activeItem, setActiveItem] = useState(null);

  const scrollHandler = (className) => {// responsible for the scrolling 
    const element = document.querySelector(`.${className}`);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline:'start'});
      setActiveItem(className);{/* if use hovers over a section set it as active section */}
      
    }
  };

  return (
    
    <nav className="Nav">
      {/*used class-name of each "div"/component to reference it in the navbar scrolling functionality*/}
      {/*this part will allow scrolling as well as check which section the user is currently hovering over or clicked*/}
      <ul> 

        <li className={activeItem === 'speakers-div' ? 'active' : ''}>
          <a onClick={() => scrollHandler('speakers-div')}>Speakers</a>
        </li>

        <li className={activeItem === 'sessions-div' ? 'active' : ''}>
          <a onClick={() => scrollHandler('sessions-div')}>Sessions</a>
        </li>

        <li className={activeItem === 'location-div' ? 'active' : ''}>
          <a onClick={() => scrollHandler('location-div')}>Location</a>
        </li>

        <li className={activeItem === 'sponsors-div' ? 'active' : ''}>
          <a onClick={() => scrollHandler('sponsors-div')}>Sponsors</a>
        </li>

        <li className={activeItem === 'organizers-div' ? 'active' : ''}>
          <a onClick={() => scrollHandler('organizers-div')}>Organizers</a>
        </li>

        <li className={activeItem === 'facilitators-div' ? 'active' : ''}>
          <a onClick={() => scrollHandler('facilitators-div')}>Facilitators</a>
        </li>

        <li className={activeItem === 'devTeam-div' ? 'active' : ''}>
          <a onClick={() => scrollHandler('devTeam-div')}>Dev Team</a>
        </li>

      </ul>
    </nav>
  );
}

export default NavBar;