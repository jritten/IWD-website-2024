  import React from "react";
  import "./contactus.css";
  import wtmlogo from "../../assets/wtm.png"

  function ContactUs() {
    return (
      <footer id="contactus-div" className="app-section contactus-div md:h-30">
  <div className="footer-inner">
    <div className="footer-logo">
      <img src={wtmlogo} alt="WTM Logo" />
    </div>

    <div className="text-column">
      <div className="section-title">Contact Us</div>

      <div className="mt-2 flex space-x-4">
        {/* LinkedIn */}
        <a 
          href="https://bit.ly/compass-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 inline-block rounded-full bg-white p-3 shadow-md transition duration-150 ease-in-out hover:shadow-lg"
        >
          {/* LinkedIn SVG */}
        </a>

        {/* Instagram */}
        <a 
          href="https://bit.ly/compassdetroit-instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 inline-block rounded-full bg-white p-3 shadow-md transition duration-150 ease-in-out hover:shadow-lg"
        >
          {/* Instagram SVG */}
        </a>
      </div>
    </div>
  </div>
</footer>
    );
  }

  export default ContactUs;
