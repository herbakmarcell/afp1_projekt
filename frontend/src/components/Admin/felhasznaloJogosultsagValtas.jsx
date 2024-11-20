import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import AuthContext from "../../AuthContext.jsx";
import "../../Css/bejreg.css";

export const FelhasznaloJogosultsagModositas = () => {
  const { user, login } = useContext(AuthContext);
  const [selected, setSelected] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {};

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const felh = async (id, jogkor) => {
    setLoading(true);

    try {
      const resp = await axios.post(
        "http://localhost:5000/api/users/changeUserPrivileges",
        {
          id,
          jogkor,
        },
        { withCredentials: true }
      );

      const data = await resp.data;
      if (data) {
        setTimeout(() => {
          navigate("/fooldal", { replace: true });
        }, 2000);
      }
    } catch (error) {
      console.error("Hiba történt:", error);
      setLoading(false);
    }
  };

  return (
    <div className="formDiv">
      <form>
        <label>
          <p>Válassz jogosultságot:</p>
          <select value={selected} onChange={handleChange}>
            <option value="1">Tanuló</option>
            <option value="2">Oktató</option>
            <option value="3">Vizsgabiztos</option>
          </select>
        </label>
        <div className="FormDivElementButton">
          <input
            type="submit"
            value="Adatok módosítása"
            onClick={(e) => {
              e.preventDefault();
              felh(id, Number(selected));
            }}
            disabled={loading}
          />
        </div>
      </form>
      {loading && <h2>Feldolgozás...</h2>}
      <Link to="/fooldal">Vissza</Link>
    </div>
  );
};
