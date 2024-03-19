import React from "react";
import FirstHost from "../../assets/host/COMPES-host.jpg";
import SecondHost from "../../assets/host/DTE-host.jpg";


function Hosts() {
    return (
    
      <div className="app-section hosts-div mt-5 font-custom text-3xl text-center   font-session ">Hosts
        <div className="flex  mt-1 ">
          <img
            src={FirstHost}
            className="w-5/12 h-auto mr-auto ml-auto mb-auto" // Set width to half of the container and adjust margin as needed
            alt="first host logo image"
          />
          <img
            src={SecondHost}
            className="w-4/12 h-40 mr-auto mt-20 " // Set width to half of the container
            alt="second host logo image"
          />
        </div>
      </div>
      
    );
  }
  
  export default Hosts;