import React from "react";
import "./attendee.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/attendee_logo', false, /\.(png|jpe?g|svg)$/));

function Attendees() {
  return (
    <div className="app-section attendee-div">
      <div className="attendee-title">
        Attendees
      </div>
      <div className="attendee-images">
        
        {Object.keys(images).map((imageName, index) => (
          <img key={index} src={images[imageName].default} alt={`Attendee ${index + 1}`} className="attendee-image" />
        ))}
      </div>
    </div>
  );
}

export default Attendees;
