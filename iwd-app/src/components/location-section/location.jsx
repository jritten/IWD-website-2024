import React from "react";
import "./location.css";
import WHEREPATH from "../../assets/where.png";
import WHENPATH from "../../assets/when.png";

function Location() {
  return (
    /* app-section style is necessary, please do not delete */
    <div className="app-section location-div">
      <div class="flex flex-col mx-20 my-5 md:flex-row md:my-20 md:mx-5">
        <div class="flex flex-row items-center justify-start md:flex-1">
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
        <div class="flex flex-row items-center justify-center md:flex-1">
          <img
            src={WHEREPATH}
            class="w-1/2 md:w-1/4"
            alt="Description of Image 2"
          ></img>
          <div className="text-column">
            <p className="text-header">Where</p>
            <p className="text-description">
              Google Detroit, 52 Henry Street, Detroit 48201{" "}
            </p>
          </div>
        </div>
        <div class="flex flex-row items-center justify-center md:flex-1">
          <iframe
            title="yuh"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.096872823791!2d-83.0570689236836!3d42.34045797119474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d326fc04bed%3A0x8608d20b7f2548b7!2sGoogle%20Detroit!5e0!3m2!1sen!2sus!4v1709013405727!5m2!1sen!2sus"
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
