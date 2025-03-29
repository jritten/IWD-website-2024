import MenuIcon from "@mui/icons-material/Menu";
 import Button from "@mui/material/Button";
 import React, { useEffect, useState } from "react";
 import "./navbar.css";
 import compasslogo from "../../assets/compass_gray.png"; 
 
 
 function NavBar() {
   const [activeItem, setActiveItem] = useState(null);
   const [open, setOpen] = useState(false);
   const [navbarStyle, setNavbarStyle] = useState(false);
 
   const sections = [
     { id: "location-div", text: "Location" },
     { id: "attendee-section.attendee-div", text: "Attendees" },
     // { id: "wtm-section", text: "Techmakers" },
     { id: "sessions-div", text: "Sessions" },
     { id: "speakers-div", text: "Speakers" },
     { id: "partners-div", text: "Partners" },
     { id: "JobBoard-div", text: "Job Board" },
     { id: "organizers-div", text: "Organizers" },
     // { id: "hosts-div", text: "Hosts" },
     { id: "devTeam-div", text: "Dev Team" },
     { id: "contactus-div", text: "Contact Us" },
   ];
 
   useEffect(() => {
     // Set up an observer for the hero section to toggle navbar style
     const heroObserver = new IntersectionObserver(
       ([entry]) => {
         // Directly toggle navbar style based on hero section's visibility
         setNavbarStyle(
           entry.boundingClientRect.top < entry.rootBounds.height / 2
         );
       },
       {
         threshold: 0,
         rootMargin: "-90% 0px -90% 0px", // Adjust rootMargin to control when the change occurs
       }
     );
 
     const heroSection = document.querySelector("#hero-section");
     if (heroSection) {
       heroObserver.observe(heroSection);
     }
 
     // Clean up observer on component unmount
     return () => {
       if (heroSection) {
         heroObserver.unobserve(heroSection);
       }
     };
   }, []);
 
   useEffect(() => {
     const sectionObserver = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             setActiveItem(entry.target.id);
           }
         });
       },
       { threshold: 0.1 }
     );
 
     // Observe all sections for setting active state
     sections.forEach((section) => {
       const sectionEl = document.querySelector(`#${section.id}`);
       if (sectionEl) {
         sectionObserver.observe(sectionEl);
       }
     });
 
     return () => {
       sections.forEach((section) => {
         const sectionEl = document.querySelector(`#${section.id}`);
         if (sectionEl) {
           sectionObserver.unobserve(sectionEl);
         }
       });
     };
   }, []);
 
   const toggleDrawer = () => setOpen(!open);
 
   const handleNavigation = (event, sectionId) => {
     event.preventDefault();
     setActiveItem(sectionId);
     const target = document.querySelector(`#${sectionId}`);
     if (target) {
       target.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   return (
     <div className={`navbar ${navbarStyle ? "navbar-alternate" : ""}`}>
       <nav className="Nav">
         <div className="left-section">
           <div className="logo">
             <img src={compasslogo} alt="Compass Logo" />
           </div>
           <div className="hamburger">
             <Button onClick={toggleDrawer}>
               <MenuIcon />
             </Button>
           </div>
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
