import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import AuthContext from "../../AuthContext.jsx";
import { FormInput } from "../FormInputDivek/formInputDiv.jsx";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { jwtDecode } from "jwt-decode";

const BejelentkezesForm = () => {
  const { login } = useContext(AuthContext); // A login funkció a context-ből

  const [email, setEmail] = useState("");
  const [jelszo, setJelszo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      console.log("Bejelentkezve, token:" + token);
      login(token); // A JWT token beállítása a context-ben

      const decodedToken = jwtDecode(token);
      const jogkor_id = decodedToken.user.jogkor_id;

      if (jogkor_id == 1) {
        navigate("/fooldal"); // Visszairányítás a főoldalra
      } else if (jogkor_id == 4) {
        navigate("/admin");
      } else {
      }
    } catch (error) {
      console.error("Login failed", error.message);
    }
  };

  return (
    <div className="formDiv">
      <h1>Bejelentkezés</h1>
      <form>
        <FormInput
          spanIcon={faEnvelope}
          type="email"
          name="e-mail"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          spanIcon={faLock}
          type="password"
          name="jelszó"
          placeholder="********"
          onChange={(e) => setJelszo(e.target.value)}
        />
        <div className="FormDivElementButton">
          <input type="submit" value="Bejelentkezés" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default BejelentkezesForm;
