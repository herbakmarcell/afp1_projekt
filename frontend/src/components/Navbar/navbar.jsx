import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import AuthContext from "../../AuthContext";
import { useContext } from "react";
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
              <Link to="/bejelentkezes">Bejelentkezés</Link>
            </li>
            <li>
              <Link to="/regisztracio">Regisztráció</Link>
            </li>
          </>
        ) : (
          <>
            <h3 className="bejelentkezettUser">
              {user.user.vezeteknev} {user.user.keresztnev}
            </h3>
            <Link to="/bejelentkezes" onClick={logoutBtn}>
              Kijelentkezés
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};
