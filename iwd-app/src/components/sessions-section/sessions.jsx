import React, { useState } from "react";
//import "./sessions.css";
import SessionCard from "../session-cards/session-card";
import networkingCards from "./content-list";
import talkSeminarsCards from "./content-list2";

function Sessions() {
  const [activeTab, setActiveTab] = useState("Networking");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-section sessions-div w-full font bg-[#d1ece3] flex flex-col gap-0 items-center p-5">
      <div className="header-container flex">
        <div className="sessions-title text-3xl font-bold text-center w-full h-[152px] font-session text-[40px] leading-[95.43px]">Sessions</div>
      </div>
      <div className="tabs-container flex">
        <div
          className={`tab ${activeTab === "Networking" ? "active" : ""} flex bg-[#2480f0] rounded-lg cursor-pointer text-center  duration-[0.5s] mr-10 px-[px] py-5 border-b-[none] border-2 border-solid border-black first:rounded-tl-[20px] `}
          onClick={() => handleTabClick("Networking")}
        >
          <span >Networking/Social Events</span>
        </div>
        <div
          className={`tab ${activeTab === "Talks/Seminars" ? "active " : ""} w-[1000px] cursor-pointer bg-white text-center transition-[background-color] duration-[0.5s] mr-0 px-[15px] py-5 border-b-[none] border-2 border-solid border-black first:rounded-tl-[20px] first:border-r-[none]`}
          onClick={() => handleTabClick("Talks/Seminars")}
        >
          <span className="scale-110 inline-block align-middle text-lg font-medium transition-transform duration-[0.3s]">Talks/Seminars</span>
        </div>
      </div>
      <div className="session-cards-container flex flex-col items-stretch gap-5 max-w-[1000px] w-[90%] bg-[white] mx-auto my-0 rounded-br-[20px] rounded-bl-[20px] border-2 border-solid border-[black]">
        {activeTab === "Networking" &&
          networkingCards.map((session, index) => (
            <div className="sessions-row flex flex-col items-center gap-5" key={index}>
              <SessionCard
                title={session.title}
                imageUrl={session.imageUrl}
                speaker={session.speaker}
                time={session.time}
                place={session.place}
                description={session.description}
                type={session.type}
                moderator={session.moderator}
                panelists={session.panelists}
              />
            </div>
          ))}
          </div>
        {activeTab === "Talks/Seminars" &&
          talkSeminarsCards.map((session, index) => (
            <div className="sessions-row flex flex-col items-center gap-5" key={index}>
              <SessionCard
                title={session.title}
                imageUrl={session.imageUrl}
                speaker={session.speaker}
                time={session.time}
                place={session.place}
                description={session.description}
                type={session.type}
                moderator={session.moderator}
                panelists={session.panelists}
              />
            </div>
          ))}
      
    </div>
  );
}

export default Sessions;