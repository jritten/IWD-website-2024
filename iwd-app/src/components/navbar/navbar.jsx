import React, { useState, useEffect } from "react";
import "./navbar.css";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [activeItem, setActiveItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState(false);

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
          const dynamicThreshold =
            entry.target.clientHeight > window.innerHeight ? 0.1 : 0.5;
          const isIntersecting = entry.intersectionRatio >= dynamicThreshold;

          if (isIntersecting) {
            setActiveItem(entry.target.className);
            const isAfterWtmSection =
              entry.target.className.includes("wtm-section") ||
              document.querySelector(".wtm-section").getBoundingClientRect()
                .top < entry.target.getBoundingClientRect().top;
            setNavbarStyle(isAfterWtmSection);
          }
        });
      },
      {
        root: document.querySelector(".App"),
        rootMargin: "0px",
        threshold: [0, 0.1, 0.5, 1.0],
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
    <div className={`navbar ${navbarStyle ? "navbar-alternate" : ""}`}>
      <nav className="Nav">
        <div className="hamburger">
          <Button onClick={toggleDrawer}>
            <MenuIcon />
          </Button>
        </div>
        <ul>
          <li
            className={activeItem === "app-section wtm-section" ? "active" : ""}
          >
            <a onClick={() => scrollHandler("wtm-section")}>Techmakers</a>
          </li>
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
            <a onClick={() => scrollHandler("partners-div")}>Partners</a>
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
            <a onClick={() => scrollHandler("partners-div")}>Partners</a>
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
