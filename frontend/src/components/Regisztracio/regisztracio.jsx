import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FormInput } from "../FormInputDivek/formInputDiv";
import {
  faSignature,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import "../../Css/bejreg.css";
import { Toast } from "primereact/toast";

const RegisztracióFormDiv = () => {
  const navigate = useNavigate();
  const [vezeteknev, setVezeteknev] = useState("");
  const [keresztnev, setKeresztnev] = useState("");
  const [email, setEmail] = useState("");
  const [jelszo, setJelszo] = useState([]);

  const toast = useRef(null);
  const toastCenter = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Sikeres regisztráció",
      detail: "Továbbítás a bejelentkezésre",
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
    setVezeteknev("");
    setKeresztnev("");
    setEmail("");
    setJelszo("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Itt jönne a regisztrációs logika
      // Mivel most nem releváns, közvetlenül navigálunk a bejelentkezéshez
      const resp = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          vezeteknev,
          keresztnev,
          // bankszamla,
          email,
          jelszo,
        }
      );
      const data = resp.data;
      console.log(data.sikeres);
      if (data.sikeres === "Success") {
        showSuccess();
        setTimeout(() => {
          navigate("/bejelentkezes"); // Visszairányítás a főoldalra
        }, 2000);
      }
    } catch (error) {
      showError(error.response.data);
      console.error("Login failed", error);
    }
  };

  return (
    <div className="formDiv">
      <h1>Regisztráció</h1>
      <Toast ref={toastCenter} position="center" />
      <form>
        <FormInput
          spanIcon={faSignature}
          type="text"
          name="Vezetéknév"
          placeholder="Vezetéknév"
          value={vezeteknev}
          onChange={(e) => setVezeteknev(e.target.value)}
        />

        <FormInput
          spanIcon={faSignature}
          type="text"
          name="Keresztnév"
          placeholder="Keresztnév"
          value={keresztnev}
          onChange={(e) => setKeresztnev(e.target.value)}
        />

        <FormInput
          spanIcon={faEnvelope}
          type="email"
          name="E-mail"
          placeholder="autosiskola@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          spanIcon={faLock}
          type="password"
          name="Jelszó"
          placeholder="********"
          value={jelszo}
          onChange={(e) => setJelszo(e.target.value)}
        />
        <div className="FormDivElementButton">
          <Toast ref={toast} />
          <input type="submit" value="Bejelentkezés" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default RegisztracióFormDiv;
