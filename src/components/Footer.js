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
            <li>
              <a href="#">Kontakta oss</a>
            </li>
            <li>
              <a href="#">Grupp- eller rullstolsbokning</a>
            </li>
            <li>
              <a href="#">Mina reservationer</a>
            </li>
            <li>
              <a href="#">Filmpanelen</a>
            </li>
          </ul>
        </div>
        <div className="footerNavSection">
          <h3>Företag</h3>
          <ul>
            <li>
              <a href="#">Event &amp; Konferens</a>
            </li>
            <li>
              <a href="#">Om Svenska Bio</a>
            </li>
            <li>
              <a href="#">Bioreklam</a>
            </li>
          </ul>
        </div>
        <div className="footerNavSection">
          <h3>Personuppgifter</h3>
          <ul>
            <li>
              <a href="#">Personuppgiftspolicy</a>
            </li>
            <li>
              <a href="#">Dina rättigheter</a>
            </li>
            <li>
              <a href="#">Cookiepolicy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <p>AnimeCinema ©2021. En del av Glimåkra Cinemas Group</p>
      </div>
      <div className="socialLinks">
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
}
