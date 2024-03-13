import React from "react";
import "./partners.css";
import "../../globalStyles.css";

function Partners() {
  return (
    /* app-section style is necessary, please do not delete */
    <div className="app-section partners-div">
      <div class="header-container">
        <div class="section-title-2">Partners</div>
        <link
          href="https://fonts.googleapis.com/css?family=Rock+Salt:regular"
          rel="stylesheet"
        />
      </div>
      <div class="partners-images">
        <a href="https://swe.org/" target="_blank">
          <img
            alt="SWE"
            src="https://s3-alpha-sig.figma.com/img/0459/08f2/78a858f77d0afc16d9118d14246f397a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NQRnLfCAODEx3psh7jAfW8nCVbQjuNvdxxyopcrIMYE8wn4vXf55NpOXHYUWLup-0PQnPq6wTfZloLX6uSMLtG0~Q9aYTKtqzsD1pzVXkqPnQOrNO7UUwKffYyRacqOr2HecquJqKiHGvT0BiEPlJ9g8862~2N3F5T~7hj~0sW7fPqAGV5qgB2GixGuFhWlFzZL8R9hn7kY61O4GVss9ZioYFLixdD1elU5HavyoUHQt0xs6A9NAMpW1NtXCFcTWr3lW7EMWo4df-XnhvZe~qsf5-PsI0iVM5wEGxWwBlYZzKc8m7whdVBQry83aqHm6eoFrH7vmO41DHKp9FBTPUQ__"
            class="SWE"
          />
        </a>

        <a
          href="https://developers.google.com/womentechmakers/initiatives/iwd"
          target="_blank"
        >
          <img
            alt="Google"
            src="https://s3-alpha-sig.figma.com/img/8e3e/c84b/e85b8bc95a5145d4bfd1af1531e9ab7b?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iOzBqCOVqAOJ7beb-W2KoVyP9ytv5KtMY3y7DWgdbA2BRcyDVGzkkiWmLmSR2qSedaWVKwfschQw~fKoUfXL~DQpy2OjSfrumL3lDW1wp2ORLKDNgj2gtOOpu4mzkEkBYmEQeriduYnbwfMc7pCef8~MwpMYlCW4h43FiY5hPfRSArKLiSX~-s2JtUSKu9xXGHgPW-eNosJj~eUCMTUZyAAE-iXPUtKdERzxUUsmME5VZEU4Jsbe~yeusNF7SibUQ01VX4xBliGSzBlX89Bki0uSX2-qPRrqTp9zVh7QvlMpTYCzWdse82cx8vnnZm8P4sGXwPffFUoEH6OnlsdFww__"
            class="google"
          />
        </a>

        <a href="https://www.nsbe.org/" target="_blank">
          <img
            alt="NSBE"
            src="https://s3-alpha-sig.figma.com/img/db96/fb01/3e1372f1e8af77d24f97286f44545420?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PzzFMss3V2Z9SsQQ5o6SPq~ByuEMF8hBI1wX3Lt70ZwkixWQOGSC97aPmhjNwYkqeaer56aYxuFPehSwOx-LCeRDZ6X2Dav2cktxBbc4M0iDrsLm2JkTWxWACcISt7siBH54lAoce~jO7QlEsFSETM7fhvj4-rMFLfioWifLdZjaGI0fYm11OPmPvwDgeuC-NtBb4KERLMiCUYCDyeuA4UOaXH6Nc~ltNewSHjhT3iszlAuPksRYj3gv40~g7Mja8W9p3F7weV7PKpx4GAqxIpprETBBFnWXQ4BQgUOYFRHtCGiRl8R4JU8i2f4ZAYVqXqJuAxLwHfwfwnEbePckOw__"
            class="NSBE"
          />
        </a>
      </div>
    </div>
  );
}

export default Partners;
