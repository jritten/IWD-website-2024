import React from "react";
import "./App.css";
import Attendees from "./components/attendee-section/attendee";
import DevTeam from "./components/devTeam-section/devTeam";
import Hero from "./components/hero-banner/hero";
import Hosts from "./components/hosts-section/hosts";
import Location from "./components/location-section/location";
import NavBar from "./components/navbar/navbar";
import Organizers from "./components/organizers-section/organizers";
import Partners from "./components/partners-section/partners";
import Sessions from "./components/sessions-section/sessions";
import Speakers from "./components/speakers-section/speakers";
import JobBoard from "./components/Job_Board_section/JobBoard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Location />
      {/* <WomenTechmakers /> */}
      <Sessions />
      <Speakers />
      <Attendees />
      {/* Hosts section is modified to reflect Organizers for the IWD 2025 Summit */}
      {/* <Organizers /> */}
      <Hosts />
      <Partners />
      {/* <Facilitators /> */}
      <JobBoard />
      <DevTeam />
    </div>
  );
}

export default App;