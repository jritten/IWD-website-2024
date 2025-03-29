import React from "react";
import "./contactus.css";
import wtmlogo from "../../assets/wtm.png";

function ContactUs() {
  return (
    <footer id="contactus-div" className="app-section contactus-div">
      <div className="footer-wrapper">
        <div className="footer-logo">
          <img src={wtmlogo} alt="WTM Logo" />
        </div>

        <div className="footer-content text-column">
          <div className="section-title">Contact Us</div>

          <div className="social-icons">
            <a
              href="https://bit.ly/compass-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="icon"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 109C24.09 109 0 84.81 0 55.12S24.09 0 53.79 0s53.79 25.41 53.79 55.12c0 29.69-24.08 53.88-53.79 53.88zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.78V148.9h89.1v40.8h1.3c12.4-23.5 42.5-48.3 87.3-48.3 93.4 0 110.6 61.5 110.6 141.3V448z" />
              </svg>
            </a>

            <a
              href="https://bit.ly/compassdetroit-instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="icon"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 255.9 287.7 141 224.1 141zm0 189.6c-41.3 0-74.7-33.4-74.7-74.7s33.4-74.7 74.7-74.7 74.7 33.4 74.7 74.7-33.4 74.7-74.7 74.7zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27c14.9 0 27 12.1 27 27zm76.1 27.2c-.1-55.2-4.5-98.4-25.9-119.8-21.3-21.3-49.5-24.7-104.8-24.7H150.3c-55.2 0-83.5 3.5-104.8 24.7-21.4 21.4-25.8 64.6-25.9 119.8v111.8c.1 55.2 4.5 98.4 25.9 119.8 21.3 21.3 49.5 24.7 104.8 24.7h111.8c55.2 0 83.5-3.5 104.8-24.7 21.4-21.4 25.8-64.6 25.9-119.8V169.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ContactUs;
