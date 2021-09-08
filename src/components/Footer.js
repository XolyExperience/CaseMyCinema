import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerNav">
        <div className="footerNavSection">
          <h3>Gäster</h3>
          <ul>
            <Link to="/">
              <li>Kontakta oss</li>
            </Link>
            <Link to="/">
              <li>Grupp- eller rullstolsbokning</li>
            </Link>
            <Link to="/">
              <li>Mina reservationer</li>
            </Link>
            <Link to="/">
              <li>Filmpanelen</li>
            </Link>
          </ul>
        </div>
        <div className="footerNavSection">
          <h3>Företag</h3>
          <ul>
            <Link to="/">
              <li>Event &amp; Konferens</li>
            </Link>
            <Link to="/">
              <li>Om Svenska Bio</li>
            </Link>
            <Link to="/">
              <li>Bioreklam</li>
            </Link>
          </ul>
        </div>
        <div className="footerNavSection">
          <h3>Personuppgifter</h3>
          <ul>
            <Link to="/">
              <li>Personuppgiftspolicy</li>
            </Link>
            <Link to="/">
              <li>Dina rättigheter</li>
            </Link>
            <Link to="/">
              <li>Cookiepolicy</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="copy">
        <p>AnimeCinema ©2021. En del av Glimåkra Cinemas Group</p>
      </div>
      <div className="socialLinks">
        <Link to="/">
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>

        <Link to="/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>

        <Link to="/">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>

        <Link to="/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
      </div>
    </div>
  );
}
