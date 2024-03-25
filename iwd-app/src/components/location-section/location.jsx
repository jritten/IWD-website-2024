import React from "react";
import "./location.css";
import WHEREPATH from "../../assets/where.png";
import WHENPATH from "../../assets/when.png";

function Location() {
  return (
    <div id="location-div" className="app-section location-div">
      <div class="flex flex-col mx-20 my-5 md:flex-row md:my-20 md:mx-5">
        <div class="flex flex-row items-center justify-start m-2 md:flex-1">
          <img
            src={WHENPATH}
            className="w-1/2 md:w-1/4"
            alt="Description of Image 1"
          ></img>
          <div className="text-column">
            <p className="text-header">When</p>
            <p className="text-description">Sat, Mar 30, 8:30 AM (EDT)</p>
          </div>
        </div>
        <div class="flex flex-row items-center justify-center m-2 md:flex-1">
          <img
            src={WHEREPATH}
            class="w-1/2 md:w-1/4"
            alt="Description of Image 2"
          ></img>
          <div className="text-column">
            <p className="text-header">Where</p>
            <p className="text-description">
              DTE Headquarters, 1 Energy Plaza, Detroit 48201{" "}
            </p>
          </div>
        </div>
        <div class="flex flex-row items-center justify-center m-2 md:flex-1">
          <iframe
            title="yuh"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d64953.82853907407!2d-83.11019487243632!3d42.32947061988187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x883b2d363de9d8eb%3A0xb42701b85d37b41d!2s1%20Energy%20Plaza%2C%20Detroit%2C%20MI%2048226!3m2!1d42.3337674!2d-83.0577586!5e0!3m2!1sen!2sus!4v1711337311222!5m2!1sen!2sus" 
            width="100%"
            height="89%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
