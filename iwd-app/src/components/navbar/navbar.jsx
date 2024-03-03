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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.className);
          }
        });
      },
      {
        root: document.querySelector(".App"),
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    document.querySelectorAll(".app-section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
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
              activeItem === "app-section partners-div" ? "active" : ""
            }
          >
            <a onClick={() => scrollHandler("partners-div")}>Sponsors</a>
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
          <li className={activeItem === "partners-div" ? "active" : ""}>
            <a onClick={() => scrollHandler("partners-div")}>Sponsors</a>
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
