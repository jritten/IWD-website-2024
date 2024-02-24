import React from "react";
import "./navbar.css";
function NavBar() {
  return (
    //<div className="navbar">{/* navbar content goes here */}I  NavBar</div>
    <nav className="Nav">
    <ul>
      <li><a href="#speakers">Speakers</a></li>
      <li><a href="#sessions">Sessions</a></li>
      <li><a href="#location">Location</a></li>
      <li><a href="#sponsors">Sponsors</a></li>
      <li><a href="#organizers">Organizers</a></li>
      <li><a href="#facilitators">Facilitators</a></li>
      <li><a href="#devteam">Dev Team</a></li>
    </ul>
  </nav>
  
  );
}

export default NavBar;
