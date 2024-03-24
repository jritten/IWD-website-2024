import "./App.css";
import React from "react";
import NavBar from "./components/navbar/navbar";
import Hero from "./components/hero-banner/hero";
import Speakers from "./components/speakers-section/speakers";
import Sessions from "./components/sessions-section/sessions";
import Location from "./components/location-section/location";
import Partners from "./components/partners-section/partners";
import Organizers from "./components/organizers-section/organizers";
import Hosts from "./components/hosts-section/hosts";
import Facilitators from "./components/facilitators-section/facilitators";
import DevTeam from "./components/devTeam-section/devTeam";
import WomenTechmakers from "./components/wtm-section/wtm";
import Attendees from "./components/attendee_section/attendee.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <WomenTechmakers />
      <Sessions />
      <Speakers />
      <Attendees />
      <Location />
      <Partners />
      <Organizers />
      <Hosts />
      {/* <Facilitators /> */}
      <DevTeam />
    </div>
  );
}

export default App;
