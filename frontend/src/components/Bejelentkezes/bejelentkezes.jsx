import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext, useRef } from "react";
import AuthContext from "../../AuthContext.jsx";
import { FormInput } from "../FormInputDivek/formInputDiv.jsx";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "../../Css/bejreg.css";
import { Toast } from "primereact/toast";

const BejelentkezesForm = () => {
  const { login } = useContext(AuthContext); // A login funkció a context-ből

  const [email, setEmail] = useState("");
  const [jelszo, setJelszo] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const toast = useRef(null);
  const toastCenter = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Sikeres bejelentkezés",
      detail: "Üdvözöllek",
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
    setEmail("");
    setJelszo("");
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!validateEmail(email)) {
      showError("Érvénytelen email");
    } else {
      try {
        console.log(email);

        const response = await axios.post(
          "http://localhost:5000/api/users/login",
          { email, jelszo },
          { withCredentials: true }
        );
        if (!response.data.token) {
          throw new Error("No token received");
        }

        const { token } = response.data;

        showSuccess();
        setTimeout(() => {
          login(token); // A JWT token beállítása a context-ben
          navigate("/fooldal"); // Visszairányítás a főoldalra
        }, 2000);
      } catch (error) {
        showError(error.response.data.err);
        console.error("Login failed", error.response.data);
      }
    }
  };

  return (
    <div className="formDiv">
      <h1>Bejelentkezés</h1>
      <Toast ref={toastCenter} position="center" />
      <form>
        <FormInput
          spanIcon={faEnvelope}
          type="email"
          name="e-mail"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          spanIcon={faLock}
          type="password"
          name="jelszó"
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

export default BejelentkezesForm;
