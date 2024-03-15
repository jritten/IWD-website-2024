import React from "react";
import Image1 from "../../assets/attendee_logo/image1.png";
import Image2 from "../../assets/attendee_logo/image2.png";
import Image3 from "../../assets/attendee_logo/image3.png";
import Image4 from "../../assets/attendee_logo/image4.png";
import "./attendee.css";

function Attendees() {
  return (
    <div className="app-section attendee-div">
      <div className="attendee-title">
        Attendees
      </div>
      <div className="attendee-images">
        {/* Render the attendee images */}
        <img src={Image1} alt="Attendee 1" className="attendee-image" />
        <img src={Image2} alt="Attendee 2" className="attendee-image" />
        <img src={Image3} alt="Attendee 3" className="attendee-image" />
        <img src={Image4} alt="Attendee 4" className="attendee-image" />
      </div>
    </div>
  );
}

export default Attendees;
