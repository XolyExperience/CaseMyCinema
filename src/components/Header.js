import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function Header() {
    const [isActive, setActive] = useState("true");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="header">
            <div className="headerLeft">
                <div className={`navigation${isActive ? "" : " active"}`}>
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
                <div
                    className={`hamburger${isActive ? "" : " active"}`}
                    onClick={handleToggle}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
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
