import React, { useState } from "react";
import "./navbar.css";

import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [activeItem, setActiveItem] = useState(null);

  const scrollHandler = (className) => {
    const element = document.querySelector(`.${className}`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
      setActiveItem(className);
    }
  };

  // HAMBURGER MENU HANDLING
  const [open, setOpen] = useState(false);

  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <div className="navbar">
      <nav className="Nav">
        <div className="hamburger">
          <Button onClick={toggleDrawer}>
            <MenuIcon />
          </Button>
        </div>
        <ul>
          <li className={activeItem === "speakers-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("speakers-div")}>Speakers</a>
          </li>

          <li className={activeItem === "sessions-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("sessions-div")}>Sessions</a>
          </li>

          <li className={activeItem === "location-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("location-div")}>Location</a>
          </li>

          <li className={activeItem === "sponsors-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("sponsors-div")}>Sponsors</a>
          </li>

          <li className={activeItem === "organizers-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("organizers-div")}>Organizers</a>
          </li>

          <li className={activeItem === "facilitators-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("facilitators-div")}>
              Facilitators
            </a>
          </li>

          <li className={activeItem === "devTeam-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("devTeam-div")}>Dev Team</a>
          </li>
        </ul>
      </nav>
      {open && (
        <ul className="hamburger-list">
          <li className={activeItem === "speakers-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("speakers-div")}>Speakers</a>
          </li>

          <li className={activeItem === "sessions-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("sessions-div")}>Sessions</a>
          </li>

          <li className={activeItem === "location-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("location-div")}>Location</a>
          </li>

          <li className={activeItem === "sponsors-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("sponsors-div")}>Sponsors</a>
          </li>

          <li className={activeItem === "organizers-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("organizers-div")}>Organizers</a>
          </li>

          <li className={activeItem === "facilitators-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("facilitators-div")}>
              Facilitators
            </a>
          </li>

          <li className={activeItem === "devTeam-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("devTeam-div")}>Dev Team</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;
