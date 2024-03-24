import React from "react";
import "./organizers.css";
import underlineImg from "../../assets/Underline.png";

function Organizers() {
  return (
    /* app-section style is necessary, please do not delete */
    <div className="app-section organizers-div">
      <div className="organizers-text">
        Organizers
        <img src={underlineImg} alt="" className="underlineImg" />
      </div>
    </div>
  );
}

export default Organizers;
