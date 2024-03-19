import React from "react";
import FirstHost from "../../assets/host/COMPES-host.jpg";
import SecondHost from "../../assets/host/DTE-host.jpg";

function Hosts() {
  return (
    <div className="app-section hosts-div p-1">
      {/* Title */}
      <div className="mt-5 font-custom text-3xl text-center   font-session ">
        Hosts
      </div>
      {/* Logo container */}
      <div class="flex flex-col mx-20 my-5 md:flex-row md:my-20 md:mx-5">
        <div className="flex w-full flex-col items-center md:flex-row md:justify-between">
          <img
            src={FirstHost}
            className="w-3/4 md:w-1/2 h-auto"
            alt="first host logo image"
          />
          <img
            src={SecondHost}
            className="w-3/4 md:w-1/2 h-auto"
            alt="second host logo image"
          />
        </div>
      </div>
    </div>
  );
}

export default Hosts;
