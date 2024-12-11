import { useContext, useEffect, useState } from "react";
import AuthContext from "../../AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import Calendar from "../Orarend/orarend.jsx";
import { Link } from "react-router-dom";
import "../../Css/userFooldal.css";
import { Dropdown } from "primereact/dropdown";
import axios from "axios";

const OktatoFooldal = () => {
  // Kiolvassuk a felhasználót a Context-ből

  const { user } = useContext(AuthContext);

  return (
    <>
      <div className={user ? "mainContent" : "mainContentNo"}>
        <h2>
          {user
            ? `Üdvözöllek ${user.user.vezeteknev} ${user.user.keresztnev} `
            : `Nem vagy bejelentkezve.`}
        </h2>
        {user ? (
          <>
            <h3>Vizsgabiztos</h3>
          </>
        ) : (
          ``
        )}
      </div>
    </>
  );
};

export default OktatoFooldal;
