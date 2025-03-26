import React from "react";
import "../../globalStyles.css";
// import FirstHost from "../../assets/host/COMPES-host.jpg";
import FirstHost from "../../assets/host/compass_locationLogo.svg";
//import SecondHost from "../../assets/host/DTE-host.png";
import SecondHost from "../../assets/host/GDGDetroit.png";
import ThirdHost from "../../assets/host/WTM.jpg";
import "./hosts.css";
import hostsicon from "../../assets/designs/hosts-icon.png";


function Hosts() {
  return (
    <div id="hosts-div" className="app-section hosts-div md:h-65">
      {/* Title */}
      <div className=" section-title">
        Organizers
        <img class="h-[45px] mx-4" src={hostsicon}></img>
      </div>
      {/* Logo container */}
      <div class="flex flex-col mx-20 my-5 md:flex-row md:my-20 md:mx-5">
        <div className="flex w-fit h-42 flex-col items-center md:flex-row md:justify-around">
          <img
            src={FirstHost}
            // className="w-full md:w-5/12 h-auto"
            className="w-1/2 md:w-1/4 h-auto"
            alt="first host logo image"
          />
          <img
            src={SecondHost}
            // className="w-3/4 md:w-5/12 h-auto"
            className="w-1/2 md:w-1/4 h-auto"
            alt="second host logo image"
          />
          <img
            src={ThirdHost}
            // className="w-3/4 md:w-5/12 h-auto"
            className="w-1/2 md:w-1/4 h-auto"
            alt="third host logo image"
          />
        </div>
      </div>
    </div>
  );
}

export default Hosts;
