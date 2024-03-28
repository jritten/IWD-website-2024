import React, { useEffect, useState } from "react";
import "./attendee.css";
import "../../globalStyles.css";

function Attendees() {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const totalImages = 20; // no of logos in folder
      const importedImages = [];
      //test comment

      for (let i = 1; i <= totalImages; i++) {
        const image = await import(`../../assets/attendee_logo/image${i}.png`);
        importedImages.push(image.default);
      }

      setImagePaths([...importedImages, ...importedImages]);
    };

    importImages();
  }, []);

  return (
    <div id="attendee-div" className="app-section attendee-div">
      <div className="attendees-column">
        <div className="section-title">Attendees</div>
        <div className="attendee-images">
          {/* Render the attendee images */}
          {imagePaths.map((path, index) => (
            <img
              src={path}
              alt={`Attendee ${index + 1}`}
              className="attendee-image"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Attendees;
