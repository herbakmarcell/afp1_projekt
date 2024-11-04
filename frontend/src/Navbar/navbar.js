import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
export const NavBar = () => {
  return (
    <nav>
      <div className="navbarTitleImg">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/000/550/395/small_2x/traffic_light_006.jpg"
          alt="trafficLights"
        />
        <h1>Autósiskola</h1>
      </div>
      <div className="navButtons">
        <Link to="/bejelentkezes">Bejelentkezés</Link>
        <Link to="/regisztracio">Regisztracio</Link>
      </div>
    </nav>
  );
};
