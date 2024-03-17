import React, { useEffect, useState } from "react";
import "./attendee.css";

function Attendees() {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const totalImages = 20; // Total number of logos in folder
      const importedImages = [];

      for (let i = 1; i <= totalImages; i++) {
        const image = await import(`../../assets/attendee_logo/image${i}.png`);
        importedImages.push(image.default); 
      }

      setImagePaths(importedImages);
    };

    importImages();
  }, []);

  return (
    <div className="app-section attendee-div">
      <div className="attendee-title">Attendees</div>
      <div className="attendee-images">
        {/* Render the attendee images */}
        {imagePaths.map((path, index) => (
          <img src={path} alt={`Attendee ${index + 1}`} className="attendee-image" key={index} />
        ))}
      </div>
    </div>
  );
}

export default Attendees;
