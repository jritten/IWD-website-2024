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
    const handleScroll = () => {
      let activeIoU = 0;
      let activeSection = null;

      sections.forEach((section) => {
        const target = document.querySelector(`#${section.id}`);
        if (target) {
          const rect = target.getBoundingClientRect();
          const intersectionHeight = Math.max(
            0,
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
          );
          const IoU =
            intersectionHeight /
            (rect.height + window.innerHeight - intersectionHeight);

          if (IoU > activeIoU) {
            activeSection = section.id;
            activeIoU = IoU;
          }
        }
      });

      setActiveItem(activeSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setOpen(!open);

  // Navigation click event handler
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
