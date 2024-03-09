import React, { useState, useEffect, useMemo } from "react";
import "./navbar.css";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const sections = useMemo(
    () => [
      { id: "sessions-div", text: "Sessions" },
      { id: "speakers-div", text: "Speakers" },
      { id: "location-div", text: "Location" },
      { id: "sponsors-div", text: "Sponsors" },
      { id: "organizers-div", text: "Organizers" },
      { id: "facilitators-div", text: "Facilitators" },
      { id: "devTeam-div", text: "Dev Team" },
    ],
    []
  );

  const [activeItem, setActiveItem] = useState(null);
  const [open, setOpen] = useState(false);

  const scrollHandler = (sectionId) => {
    const target = document.querySelector(`#${sectionId}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let maxIoU = -1; // Initialize with -1
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

          if (IoU > maxIoU) {
            activeSection = section.id;
            maxIoU = IoU;
          }
        }
      });

      setActiveItem(activeSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

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
          {sections.map((section) => (
            <li
              key={section.id}
              className={activeItem === section.id ? "active" : ""}
            >
              <a onClick={() => scrollHandler(section.id)}>{section.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="hamburger-list">
          {sections.map((section) => (
            <li
              key={section.id}
              className={activeItem === section.id ? "active" : ""}
            >
              <a onClick={() => scrollHandler(section.id)}>{section.text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
