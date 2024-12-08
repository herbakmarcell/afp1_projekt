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

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePasswordLength = (value) => {
    // Ellenőrizzük, hogy a jelszó legalább 8 karakter hosszú
    return value.length >= 8;
  };

  const validatePassword = (value) => {
    // A jelszó regex:
    // - Legalább egy nagybetű: (?=.*[A-Z])
    // - Legalább egy szám: (?=.*[0-9])
    // - Csak kis- és nagybetűk, valamint számok
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    return passwordRegex.test(value);
  };

  const validateName = (value) => {
    // Csak betűk, szóközök és kötőjelek megengedettek, minimum 2 karakter
    const nameRegex = /^[A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű\- ]{2,50}$/;
    return nameRegex.test(value.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ellenőrzés: vezetéknév
    if (!validateName(vezeteknev)) {
      showError(
        "Érvénytelen vezetéknév. Csak betűk, kötőjelek és szóközök megengedettek."
      );
      return;
    }

    // Ellenőrzés: keresztnév
    if (!validateName(keresztnev)) {
      showError(
        "Érvénytelen keresztnév. Csak betűk, kötőjelek és szóközök megengedettek."
      );
      return;
    }

    // Ellenőrzés: e-mail
    if (!validateEmail(email)) {
      showError("Érvénytelen email.");
      return;
    }

    // Ellenőrzés: jelszó hossz
    if (!validatePasswordLength(jelszo)) {
      showError("A jelszónak legalább 8 karakter hosszúnak kell lennie.");
      return;
    }

    // Ellenőrzés: jelszó formátum
    if (!validatePassword(jelszo)) {
      showError(
        "A jelszónak tartalmaznia kell legalább egy nagybetűt, egy számot, és nem tartalmazhat speciális karaktereket."
      );
      return;
    }

    // Regisztrációs logika
    try {
      const resp = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          vezeteknev,
          keresztnev,
          email,
          jelszo,
        }
      );
      const data = resp.data;
      console.log(data.sikeres);

      if (data.sikeres === "Success") {
        showSuccess();
        setTimeout(() => {
          navigate("/bejelentkezes");
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
