import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Header() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navigation");
  const mobileMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <div class="navigation">
          <ul>
            <li>
              <Link to="/">
                <p>Biografer</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p>Tillgänglig på bio</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p>Rabatter</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p>Kalas på Bio</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p>Trygg på bio</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p>Bio On Demand</p>
              </Link>
            </li>
            <li>
              <Link to="/admin">
                <p>Admin</p>
              </Link>
            </li>
          </ul>
        </div>
        <div class="hamburger" onClick={mobileMenu}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <div className="logoAndTitle">
          <Link to="/">
            <img src="/mycinemalogo128.png" alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="headerRight">
        <div className="btnSearch">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  );
}
