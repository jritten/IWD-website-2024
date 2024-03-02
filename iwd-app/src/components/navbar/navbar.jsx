import React, { useState, useEffect } from "react";
import "./navbar.css";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [activeItem, setActiveItem] = useState(null);
  const [open, setOpen] = useState(false);

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

  // Also set active item style based on
  // user scroll
  useEffect(() => {
    const appSections = document.querySelectorAll(".app-section");
    const handleScroll = () => {
      const appDiv = document.querySelector(".App");
      const divScrollTop = appDiv.scrollTop; // Get the current scroll position within the div
      const scrollHeight = appDiv.scrollHeight; // Total scrollable height
      const offsetHeight = appDiv.offsetHeight; // Visible height of the div
      const bottomReached = divScrollTop + offsetHeight >= scrollHeight; // Check if bottom is reached

      // what to do if above all sections (hero banner)
      let inHeroArea = divScrollTop < appSections[0].offsetTop;
      if (inHeroArea) {
        setActiveItem(null);
      }

      // what to do if within one of the sections
      appSections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (divScrollTop >= sectionTop && divScrollTop < sectionBottom) {
          setActiveItem(section.className);
        } else if (bottomReached && index === appSections.length - 1) {
          // If the bottom of the container is reached and it's the last section
          setActiveItem(section.className);
        }
      });
    };

    const appDiv = document.querySelector(".App");
    appDiv.addEventListener("scroll", handleScroll);

    return () => appDiv.removeEventListener("scroll", handleScroll);
  }, []);

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
          <li
            className={
              activeItem === "app-section sessions-div" ? "active" : ""
            }
          >
            <a onClick={() => scrollHandler("sessions-div")}>Sessions</a>
          </li>

          <li
            className={
              activeItem === "app-section speakers-div" ? "active" : ""
            }
          >
            <a onClick={() => scrollHandler("speakers-div")}>Speakers</a>
          </li>

          <li
            className={
              activeItem === "app-section location-div" ? "active" : ""
            }
          >
            <a onClick={() => scrollHandler("location-div")}>Location</a>
          </li>

          <li
            className={
              activeItem === "app-section sponsors-div" ? "active" : ""
            }
          >
            <a onClick={() => scrollHandler("sponsors-div")}>Sponsors</a>
          </li>

          <li
            className={
              activeItem === "app-section organizers-div" ? "active" : ""
            }
          >
            <a onClick={() => scrollHandler("organizers-div")}>Organizers</a>
          </li>

          <li
            className={
              activeItem === "app-section facilitators-div" ? "active" : ""
            }
          >
            <a onClick={() => scrollHandler("facilitators-div")}>
              Facilitators
            </a>
          </li>
          <li
            className={activeItem === "app-section devTeam-div" ? "active" : ""}
          >
            <a onClick={() => scrollHandler("devTeam-div")}>Dev Team</a>
          </li>
        </ul>
      </nav>
      {open && (
        <ul className="hamburger-list">
          <li className={activeItem === "sessions-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("sessions-div")}>Sessions</a>
          </li>
          <li className={activeItem === "speakers-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("speakers-div")}>Speakers</a>
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
