import React from "react";
import NavBar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero-banner/hero.jsx";
import Location from "./components/location-section/location.jsx";
import WomenTechmakers from "./components/wtm-section/wtm.jsx";
import Sessions from "./components/sessions-section/sessions.jsx";
import Speakers from "./components/speakers-section/speakers.jsx";
import Attendees from "./components/attendee_section/attendee.jsx";
import Organizers from "./components/organizers-section/organizers.jsx";
import Hosts from "./components/hosts-section/hosts.jsx";
import Partners from "./components/partners-section/partners.jsx";
import Facilitators from "./components/facilitators-section/facilitators.jsx";
import DevTeam from "./components/devTeam-section/devTeam.jsx";

import "./index.css"
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Location />
      <WomenTechmakers />
      <Sessions />
      <Speakers />
      <Attendees />
      <Organizers />
      <Hosts />
      <Partners />
      <Facilitators />
      <DevTeam />
    </div>
  );
}

export default App;
