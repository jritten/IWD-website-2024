  import React from "react";
  import "./contactus.css";
  import wtmlogo from "../../assets/wtm.png"

  function ContactUs() {
    return (
      <footer id="contactus-div" className="app-section contactus-div md:h-30">
  <div className="footer-content">
    <div className="footer-logo">
      <img src={wtmlogo} alt="WTM Logo" />
    </div>

    <div className="flex flex-col items-center footer-main">
      <div className="section-title">Contact Us</div>

      <div className="mt-2 flex space-x-4">
        <div className="mt-2 flex space-x-4">
          {/* LinkedIn Icon */}
          <a 
            href="https://bit.ly/compass-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 inline-block rounded-full bg-white p-3 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            {/* SVG */}
          </a>

          {/* Instagram Icon */}
          <a 
            href="https://bit.ly/compassdetroit-instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 inline-block rounded-full bg-white p-3 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            {/* SVG */}
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
    );
  }

  export default ContactUs;
