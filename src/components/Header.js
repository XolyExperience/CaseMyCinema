import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleClass = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="header">
      <div className="headerLeft">
        <div
          className={isOpen ? "btnBurger open" : "btnBurger"}
          onClick={toggleClass}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logoAndTitle">
          <a href="#">
            <img src="/mycinemalogo128.png" />
          </a>
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
