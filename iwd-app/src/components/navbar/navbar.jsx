import React, { useState } from "react";
import "./navbar.css";

import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [activeItem, setActiveItem] = useState(null);

  const scrollHandler = (className) => {
    // responsible for the scrolling
    const element = document.querySelector(`.${className}`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
      setActiveItem(className);
      {
        /* if use hovers over a section set it as active section */
      }
    }
  };

  // HAMBURGER MENU HANDLING
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <nav className="Nav">
      <div className="hamburger">
        <Button className="hamburger-btn" onClick={handleDrawerOpen}>
          <MenuIcon />
        </Button>
      </div>

      <Drawer anchor="top" open={open} onClose={handleDrawerClose}>
        {/* the following is copy-pasted, the only difference is that this list has the class name hamburger-list,
            and thats how its modified in the css, instead of Nav li or Nav ul for the main header list */}
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
      </Drawer>

      {/*used class-name of each "div"/component to reference it in the navbar scrolling functionality*/}
      {/*this part will allow scrolling as well as check which section the user is currently hovering over or clicked*/}
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
          <a onClick={() => scrollHandler("facilitators-div")}>Facilitators</a>
        </li>

        <li className={activeItem === "devTeam-div" ? "active" : ""}>
          <a onClick={() => scrollHandler("devTeam-div")}>Dev Team</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
