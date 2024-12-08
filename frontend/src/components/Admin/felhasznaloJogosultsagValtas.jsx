import React, { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import AuthContext from "../../AuthContext.jsx";
import "../../Css/bejreg.css";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";

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

  useEffect(() => {
    if (!id) {
      navigate("/fooldal", { replace: true });
    }
  }, [id]);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const toast = useRef(null);
  const toastCenter = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Sikeresen módosult a jogosultság",
      detail: "Továbbítás a főoldalra",
      life: 2000,
    });
  };

  const showError = (props) => {
    const errorMess = props;
    toastCenter.current.show({
      severity: "error",
      summary: "HIBA!",
      detail: errorMess,
      life: 2000,
    });
    setSelected(1);
  };

  console.log(selected);
  const felh = async (id, jogkor) => {
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
        showSuccess();
        setTimeout(() => {
          navigate("/fooldal");
        }, 2000);
      }
    } catch (error) {
      showError(error.response.data);
      console.error("Hiba történt:", error);
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
      <Toast ref={toast} />
      <Toast ref={toastCenter} position="center" />
      <Link to="/fooldal">Vissza</Link>
    </div>
  );
};
