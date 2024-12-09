import React from "react";
import axios from "axios";
import { useEffect, useState, useContext, useRef } from "react";
import { FormInput } from "../FormInputDivek/formInputDiv.jsx";
import AuthContext from "../../AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { faSignature } from "@fortawesome/free-solid-svg-icons";
import { Toast } from "primereact/toast";

export const FelhasznaloModositas = () => {
  const { user, login } = useContext(AuthContext);
  const [vezeteknev, setVezeteknev] = useState("");
  const [keresztnev, setKeresztnev] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (user !== null) {
      setKeresztnev(user.user.keresztnev);
      setVezeteknev(user.user.vezeteknev);
    } else {
      setKeresztnev("");
      setVezeteknev("");
    }
  }, [user]);

  const toast = useRef(null);
  const toastCenter = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Sikeresen módosult a felhasználó profilod",
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
    setKeresztnev("");
    setVezeteknev("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const felh = async () => {
        const resp = await axios.post(
          "http://localhost:5000/api/users/profilmodosit",
          {
            vezeteknev,
            keresztnev,
          },
          { withCredentials: true }
        );
        const data = await resp.data;
        if (data) {
          showSuccess();
          setTimeout(() => {
            login(data);
            navigate("/fooldal");
          }, 2000);
        }
      };
      felh();
    } catch (error) {
      showError(error.response.data);
      console.error("Hiba történt:", error);
    }
  };

  return (
    <div className="formDiv">
      <h1>Adatmódosítás</h1>
      <form>
        <FormInput
          spanIcon={faSignature}
          type="text"
          name="vezeteknev"
          placeholder="Vezetéknév"
          value={vezeteknev}
          onChange={(e) => setVezeteknev(e.target.value)}
        />

        <FormInput
          spanIcon={faSignature}
          type="text"
          name="keresztnev"
          placeholder="Keresztnév"
          value={keresztnev}
          onChange={(e) => setKeresztnev(e.target.value)}
        />
        <div className="FormDivElementButton">
          <input
            type="submit"
            value="Adatok módosítása"
            onClick={handleSubmit}
          />
        </div>
      </form>
      <div className="backToMainPage">
        <Toast ref={toast} />
        <Toast ref={toastCenter} position="center" />
        <Link to="/fooldal">Vissza</Link>
      </div>
    </div>
  );
};
