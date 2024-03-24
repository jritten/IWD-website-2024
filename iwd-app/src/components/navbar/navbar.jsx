import React, { useState, useEffect } from "react";
import "./navbar.css";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [activeItem, setActiveItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState(false);

  // Define your sections
  const sections = [
    { id: "location-div", text: "Location" },
    { id: "wtm-section", text: "Techmakers" },
    { id: "sessions-div", text: "Sessions" },
    { id: "speakers-div", text: "Speakers" },
    { id: "hosts-div", text: "Hosts" },
    { id: "partners-div", text: "Partners" },
    { id: "attendee-div", text: "Attendees" },
    { id: "organizers-div", text: "Organizers" },
    { id: "devTeam-div", text: "Dev Team" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting;
          if (isIntersecting) {
            const isAfterWtmSection =
              entry.target.id === "location-div" ||
              document.querySelector("#wtm-section").getBoundingClientRect()
                .bottom < 0;
            setNavbarStyle(isAfterWtmSection);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observing the 'location-div' to change the navbar style
    const target = document.querySelector("#location-div");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  const toggleDrawer = () => setOpen(!open);

  const handleNavigation = (event, sectionId) => {
    event.preventDefault();
    const target = document.querySelector(`#${sectionId}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`navbar ${navbarStyle ? "navbar-alternate" : ""}`}>
      <nav className="Nav">
        <div className="hamburger">
          <Button onClick={toggleDrawer}>
            <MenuIcon />
          </Button>
        </div>
        <ul>
          {sections.map((section) => (
            <li
              key={section.id}
              className={activeItem === section.id ? "active" : ""}
            >
              <a
                href={`#${section.id}`}
                onClick={(e) => handleNavigation(e, section.id)}
              >
                {section.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="hamburger-list py-3">
          {sections.map((section) => (
            <li
              key={section.id}
              className={activeItem === section.id ? "active" : ""}
            >
              <a
                href={`#${section.id}`}
                onClick={(e) => handleNavigation(e, section.id)}
              >
                {section.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
