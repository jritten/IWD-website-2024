import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import './attendee.css';

function Attendees() {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const totalImages = 20; // no. of logos 
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
      <Marquee direction="left" speed={100}>
        {imagePaths.map((path, index) => (
          <div key={index} className="attendee-image-wrapper">
            <img src={path} alt={`Attendee ${index + 1}`} className="attendee-image" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Attendees;
