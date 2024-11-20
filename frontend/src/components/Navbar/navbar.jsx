import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Css/navbar.css";
import "../../index.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import AuthContext from "../../AuthContext.jsx";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faRightFromBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
export const NavBar = () => {
  const [menuOpen, SetMenuOpen] = useState(false); // reszponziv nav
  const { user, logout } = useContext(AuthContext); // Használjuk a Context-et
  const navigate = useNavigate();

  const logoutBtn = async () => {
    await axios.post(
      "http://localhost:5000/api/users/logout",
      {},
      { withCredentials: true }
    );
    logout(); // A context-ből töröljük a felhasználót
    navigate("/"); // Visszairányítás a főoldalra
  };

  return (
    <nav>
      <div className="navbarTitleImg">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/000/550/395/small_2x/traffic_light_006.jpg"
          alt="trafficLights"
        />
        <Link to="/fooldal">Autósiskola</Link>
      </div>
      <div
        className="menu"
        onClick={() => {
          SetMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open navButtons" : "navButtons"}>
        {!user ? (
          <>
            <li>
              <Link to="/bejelentkezes">
                <span>
                  <FontAwesomeIcon icon={faRightToBracket} size="xs" />
                </span>
                Bejelentkezés
              </Link>
            </li>
            <li>
              <Link to="/regisztracio">
                <span>
                  <FontAwesomeIcon icon={faUserPlus} size="xs" />
                </span>
                Regisztráció
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="noStyle">
              <Link to="/profilAdatok">
                <div className="navBarImg">
                  <img
                    src="https://loremflickr.com/200/200?random=1"
                    alt={user.user.vezeteknev + " " + user.user.keresztnev}
                    title={user.user.vezeteknev + " " + user.user.keresztnev}
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/bejelentkezes" onClick={logoutBtn}>
                <span>
                  <FontAwesomeIcon icon={faRightFromBracket} size="xs" />
                </span>
                Kijelentkezés
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
