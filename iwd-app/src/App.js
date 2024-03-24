import React from "react";
import "./App.css";
import DevTeam from "./components/devTeam-section/devTeam";
import Facilitators from "./components/facilitators-section/facilitators";
import Hero from "./components/hero-banner/hero";
import Location from "./components/location-section/location";
import NavBar from "./components/navbar/navbar";
import Organizers from "./components/organizers-section/organizers";
import Sessions from "./components/sessions-section/sessions";
import Speakers from "./components/speakers-section/speakers";
import Sponsors from "./components/sponsors-section/sponsors";
import Attendees from "./components/atttendee-section/attendee.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Sessions />
      <Speakers />
      <Attendees /> 
      <Location />
      <Sponsors />
      <Organizers />
      <Facilitators />
      <DevTeam />
    </div>
  );
}

export default App;
