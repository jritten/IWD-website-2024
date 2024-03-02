import "./App.css";
import React from "react";
import NavBar from "./components/navbar/navbar";
import Hero from "./components/hero-banner/hero";
import Speakers from "./components/speakers-section/speakers";
import Sessions from "./components/sessions-section/sessions";
import Location from "./components/location-section/location";
import Sponsors from "./components/sponsors-section/sponsors";
import Organizers from "./components/organizers-section/organizers";
import Facilitators from "./components/facilitators-section/facilitators";
import DevTeam from "./components/devTeam-section/devTeam";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Sessions />
      <Speakers />
      <Location />
      <Sponsors />
      <Organizers />
      <Facilitators />
      <DevTeam />
    </div>
  );
}

export default App;
