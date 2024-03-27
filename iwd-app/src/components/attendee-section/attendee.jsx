import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import "../../globalStyles.css";
import './attendee.css';

function Attendees() {
  const [imagePaths, setImagePaths] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

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

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div 
      className="app-section attendee-div" 
      id="attendee-section" 
      onMouseEnter={handleHover} 
      onMouseLeave={handleHover}
    >
      <div className="section-title">Attendees</div>

      <Marquee direction="left" speed={100} className="marquee-container" pauseOnHover={!isHovered}>
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
