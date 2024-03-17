import React from "react";
import "./attendee.css";

// Import logos
import Image1 from "../../assets/attendee_logo/image1.png";
import Image10 from "../../assets/attendee_logo/image10.png";
import Image11 from "../../assets/attendee_logo/image11.png";
import Image12 from "../../assets/attendee_logo/image12.png";
import Image13 from "../../assets/attendee_logo/image13.png";
import Image14 from "../../assets/attendee_logo/image14.png";
import Image2 from "../../assets/attendee_logo/image2.png";
import Image3 from "../../assets/attendee_logo/image3.png";
import Image4 from "../../assets/attendee_logo/image4.png";
import Image5 from "../../assets/attendee_logo/image5.png";
import Image6 from "../../assets/attendee_logo/image6.png";
import Image7 from "../../assets/attendee_logo/image7.png";
import Image8 from "../../assets/attendee_logo/image8.png";
import Image9 from "../../assets/attendee_logo/image9.png";

function Attendees() {
  return (
    <div className="app-section attendee-div">
      <div className="attendee-title">Attendees</div>
      <div className="attendee-images">
        {/* Render the attendee images */}
        <img src={Image1} alt="Attendee 1" className="attendee-image" />
        <img src={Image2} alt="Attendee 2" className="attendee-image" />
        <img src={Image3} alt="Attendee 3" className="attendee-image" />
        <img src={Image4} alt="Attendee 4" className="attendee-image" />
        <img src={Image5} alt="Attendee 5" className="attendee-image" />
        <img src={Image6} alt="Attendee 6" className="attendee-image" />
        <img src={Image7} alt="Attendee 7" className="attendee-image" />
        <img src={Image8} alt="Attendee 8" className="attendee-image" />
        <img src={Image9} alt="Attendee 9" className="attendee-image" />
        <img src={Image10} alt="Attendee 10" className="attendee-image" />
        <img src={Image11} alt="Attendee 11" className="attendee-image" />
        <img src={Image12} alt="Attendee 12" className="attendee-image" />
        <img src={Image13} alt="Attendee 13" className="attendee-image" />
        <img src={Image14} alt="Attendee 14" className="attendee-image" />
      </div>
    </div>
  );
}

export default Attendees;
