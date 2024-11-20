import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import AuthContext from "../../AuthContext.jsx";
import "../../Css/bejreg.css";
import { Dropdown } from "primereact/dropdown";

export const FelhasznaloJogosultsagModositas = () => {
  const { user, login } = useContext(AuthContext);
  const [selected, setSelected] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {};
  const jogok = [
    { name: "Tanuló", code: "1" },
    { name: "Oktató", code: "2" },
    { name: "Vizsgabiztos", code: "3" },
  ];
  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  console.log(selected);
  const felh = async (id, jogkor) => {
    setLoading(true);
    console.log(id);
    console.log(jogkor);
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
          <Dropdown
            value={selected}
            onChange={handleChange}
            options={jogok}
            optionLabel="name"
            placeholder="Válassz jogosultságot:"
            className="w-full md:w-140rem custom-dropdown"
            checkmark={true}
            highlightOnSelect={false}
          />
        </label>
        <div className="FormDivElementButton">
          <input
            type="submit"
            value="Adatok módosítása"
            onClick={(e) => {
              e.preventDefault();
              felh(id, Number(selected.code));
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
