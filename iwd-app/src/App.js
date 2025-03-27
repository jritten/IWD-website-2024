import React from "react";
import "./App.css";
import Attendees from "./components/attendee-section/attendee";
import DevTeam from "./components/devTeam-section/devTeam";
import Hero from "./components/hero-banner/hero";
import Hosts from "./components/hosts-section/hosts";
import Location from "./components/location-section/location";
import ContactUs from "./components/contactus-section/contactus";
import NavBar from "./components/navbar/navbar";
import Organizers from "./components/organizers-section/organizers";
import Partners from "./components/partners-section/partners";
import Sessions from "./components/sessions-section/sessions";
import Speakers from "./components/speakers-section/speakers";

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
      <ContactUs />
    </div>
  );
}

export default App;