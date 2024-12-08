import React from "react";
import axios from "axios";
import { useState, useContext, useRef } from "react";
import AuthContext from "../../AuthContext.jsx";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";

export const OraoModositas = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const formData = location.state || {};

  const cities = [
    { name: "Budapest", code: "1" },
    { name: "Eger", code: "2" },
    { name: "Nagykanizsa", code: "3" },
    { name: "Miskolc", code: "4" },
    { name: "Győr", code: "5" },
  ];
  const [helyszinObj, setSelectedCity] = useState(
    cities.find((city) => city.name === formData.Orak?.helyszin) || cities[0]
  );
  const [idopont_eleje, setidopont_eleje] = useState(
    formData.Orak?.idopont_eleje?.slice(0, 16) || ""
  );
  const [idopont_vege, setidopont_vege] = useState(
    formData.Orak?.idopont_vege?.slice(0, 16) || ""
  );
  const [cim, setcim] = useState(formData.Orak?.cim || "");
  const [loading, setLoading] = useState(false);

  const toast = useRef(null);
  const toastCenter = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Sikeresen módosult az órad",
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
      life: 3000,
    });
    setSelectedCity(
      cities.find((city) => city.name === formData.Orak?.helyszin) || cities[0]
    );
    setidopont_eleje(formData.Orak?.idopont_eleje?.slice(0, 16) || "");
    setidopont_vege(formData.Orak?.idopont_vege?.slice(0, 16) || "");
    setcim(formData.Orak?.cim || "");
  };

  const oramodositas = async () => {
    const helyszin = helyszinObj.name;
    const tanulo_id = formData.tanulo_id;
    const ora_id = formData.Orak.ora_id;
    try {
      const resp = await axios.put(
        "http://localhost:5000/api/orarend/oraModositas",
        {
          ora_id,
          idopont_eleje,
          idopont_vege,
          cim,
          helyszin,
          tanulo_id,
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
      Object.values(error.response.data).forEach((hiba) => {
        showError(hiba);
      });
    }
  };

  const helyszinObjChanges = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="formDiv" style={{ marginTop: "1em" }}>
      <h1>Adatmódosítás</h1>
      <form action="" className="oreFelvitelForm">
        <label htmlFor="cimTime">
          <p>Cím:</p>
          <input
            type="text"
            name="cimTime"
            id="cimTime"
            value={cim}
            onChange={(e) => setcim(e.target.value)}
          />
        </label>
        <label htmlFor="helyszinObjTime">
          <p>Tanuló:</p>
          <input
            type="text"
            id="tanuloName"
            name="tanuloName"
            value={`${formData.Tanulo?.vezeteknev || ""} ${
              formData.Tanulo?.keresztnev || ""
            }`}
            readOnly
          />
        </label>
        <label htmlFor="tanuloTime">
          <p>Helyszín:</p>
          <Dropdown
            value={helyszinObj}
            onChange={helyszinObjChanges}
            options={cities}
            optionLabel="name"
            placeholder="Válassz heylszínt:"
            className="w-full md:w-140rem custom-dropdown"
            checkmark={true}
            highlightOnSelect={false}
          />
        </label>
        <label htmlFor="idopont_eleje">
          <p>Időpont kezdete:</p>
          <input
            type="datetime-local"
            name="idopont_eleje"
            id="idopont_eleje"
            value={idopont_eleje}
            onChange={(e) => setidopont_eleje(e.target.value)}
          />
        </label>
        <label htmlFor="idopont_vege">
          <p>Időpont vége:</p>
          <input
            type="datetime-local"
            name="idopont_vege"
            id="idopont_vege"
            value={idopont_vege}
            onChange={(e) => setidopont_vege(e.target.value)}
          />
        </label>
        <input
          className="oraModButton"
          type="submit"
          value="Óra módosítása"
          onClick={(e) => {
            e.preventDefault();
            oramodositas();
          }}
          disabled={loading}
        />
      </form>
      <Toast ref={toast} />
      <Toast ref={toastCenter} position="center" />
      <div className="backToMainPage">
        <Link to="/fooldal">Vissza</Link>
      </div>
    </div>
  );
};
