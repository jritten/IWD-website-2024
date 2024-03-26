import React from "react";
import "./App.css";
import Attendees from "./components/attendee_section/attendee.jsx";
import DevTeam from "./components/devTeam-section/devTeam";
import Hero from "./components/hero-banner/hero";
import Hosts from "./components/hosts-section/hosts";
import Location from "./components/location-section/location";
import NavBar from "./components/navbar/navbar";
import Organizers from "./components/organizers-section/organizers";

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
      <Organizers />
      <Hosts />
      <Partners />
      {/* <Facilitators /> */}
      <DevTeam />
    </div>
  );
}

export default App;
