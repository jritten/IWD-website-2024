import React from "react";
import "./location.css";
import WHEREPATH from "../../assets/where.png";
import WHENPATH from "../../assets/when.png";

function Location() {
  return (
    /* app-section style is necessary, please do not delete */
    <div className="app-section location-div">
      {/* <div className="location-container">
        <div className="child">
          <img alt={"globe"} width={100} height={80} src={WHENPATH}></img>
          <div className="text-column">
            <p className="text-header">When</p>
            <p className="text-description">Sat, Mar 30, 8:30 AM (EDT)</p>
          </div>
        </div>
        <div className="child">
          <img alt={"clock"} width={100} height={80} src={WHEREPATH}></img>
          <div className="text-column">
            <p className="text-header">Where</p>
            <p className="text-description">
              Google Detroit, 52 Henry Street, Detroit 48201{" "}
            </p>
          </div>
        </div>
        <div className="child">
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
      </div> */}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="bg-blue-500 md:bg-red-500 text-white font-bold py-2 px-4 rounded">
        Click me
      </button>
      <button>Click me</button>
    </div>
  );
}

export default Location;
