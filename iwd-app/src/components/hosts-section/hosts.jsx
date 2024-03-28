import React from "react";
import "../../globalStyles.css";
import FirstHost from "../../assets/host/COMPES-host.jpg";
import SecondHost from "../../assets/host/DTE-host.png";
import "./hosts.css";

function Hosts() {
  return (
    <div id="hosts-div" className="app-section hosts-div md:h-65">
      {/* Title */}
      <div className=" section-title">Hosts</div>
      {/* Logo container */}
      <div class="flex flex-col mx-20 my-5 md:flex-row md:my-20 md:mx-5">
        <div className="flex w-fit h-42 flex-col items-center md:flex-row md:justify-around">
          <img
            src={FirstHost}
            className="w-full md:w-5/12 h-auto"
            alt="first host logo image"
          />
          <img
            src={SecondHost}
            className="w-3/4 md:w-5/12 h-auto"
            alt="second host logo image"
          />
        </div>
      </div>
    </div>
  );
}

export default Hosts;
