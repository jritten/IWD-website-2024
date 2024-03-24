import React from "react";
import "./partners.css";
import "../../globalStyles.css";
import SWELOGO from "../../assets/partner-imgs/SWE.PNG";
import CEASARLOGO from "../../assets/partner-imgs/LittleCaesars.PNG";
import NSBELOGO from "../../assets/partner-imgs/NSBE.PNG";
import SHPELOGO from "../../assets/partner-imgs/SHPE.PNG";


function Partners() {
  return (
    /* app-section style is necessary, please do not delete */
    <div className="app-section partners-div">
      <div class="header-container">
        <div class="section-title-2">Partners</div>
        <link
          href="https://fonts.googleapis.com/css?family=Rock+Salt:regular"
          rel="stylesheet"
        />
      </div>
      <div class="flex items-center flex-col mx-10 my-20 space-y-10 sm:flex-row sm: mx-0 sm: my-5 md:gap-x-10">
       
        <a href="https://swe.org/" target="_blank" class="flex items-center justify-center md:flex-1">
          <img
            alt="SWE"
            src={SWELOGO}
            className="SWE w-1/2 md:w-3/4 md:h-auto"
          />
        </a>

        <a
          href="https://shpe.org/"
          target="_blank"
          class="flex items-center justify-center md:flex-1"
        >
          <img
            alt="SHPE"
            src={SHPELOGO}
            className="SHPE w-1/2 md:w-3/4 md:h-auto"
          />
        </a>
        
      </div>
      <div class="flex items-center flex-col mx-10 my-20 space-y-10 sm:flex-row sm: mx-0 sm: my-10 md:gap-x-10">
        

        <a href="https://www.nsbe.org/" target="_blank" class="flex items-center justify-center md:flex-1">
          <img
            alt="NSBE"
            src={NSBELOGO}
            className="NSBE w-1/2 md:w-3/4 md:h-auto"
          />
        </a>

        <a href="https://littlecaesars.com/en-us/careers/" target="_blank" class="flex items-center justify-center md:flex-1">
          <img
            alt="LittleCaesarLogo"
            src={CEASARLOGO}
            className="LittleCaesars w-1/2 md:w-3/4 md:h-auto"
          />
        </a>
       
        
      </div>
      
    </div>
  );
}

export default Partners;
