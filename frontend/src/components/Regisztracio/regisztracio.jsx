import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FormInput } from "../FormInputDivek/formInputDiv";
import {
  faSignature,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import "../../Css/bejreg.css";

const RegisztracióFormDiv = () => {
  const navigate = useNavigate();
  const [vezeteknev, setVezeteknev] = useState("");
  const [keresztnev, setKeresztnev] = useState("");
  // const [jogosultsag, setJogosultsag] = useState(0);
  const [bankszamla, setBankszamla] = useState("");
  const [email, setEmail] = useState("");
  const [jelszo, setJelszo] = useState(0);

  // const handleChange = (e) => {
  //   let value = e.target.value.replace(/\D/g, ""); // Csak számokat engedünk
  //   value = value.replace(/(\d{4})(?=\d)/g, "$1-"); // Minden 4 számjegy után kötőjelet ad hozzá
  //   setBankszamla(value);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Itt jönne a regisztrációs logika
    // Mivel most nem releváns, közvetlenül navigálunk a bejelentkezéshez
    const resp = await axios.post("http://localhost:5000/api/users/register", {
      vezeteknev,
      keresztnev,
      // bankszamla,
      email,
      jelszo,
    });
    const data = resp.data;
    console.log(data.sikeres);
    if (data.sikeres === "Success") {
      navigate("/bejelentkezes");
    }
  };

  return (
    <div className="formDiv">
      <h1>Regisztráció</h1>
      <form>
        <FormInput
          spanIcon={faSignature}
          type="text"
          name="Vezetéknév"
          placeholder="Vezetéknév"
          onChange={(e) => setVezeteknev(e.target.value)}
        />

        <FormInput
          spanIcon={faSignature}
          type="text"
          name="Keresztnév"
          placeholder="Keresztnév"
          onChange={(e) => setKeresztnev(e.target.value)}
        />

        {/* <FormInput
          iconSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPNzqYRq287b9xJql_r-MmWqs6thrG9NKig&s"
          iconAlt="permissionIcon"
          type="text"
          name="Jogosultság"
          placeholder="Jogosultság"
          onChange={(e) => setJogosultsag(e.target.value)}
        /> */}
        {/* 
        <FormInput
          iconSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6Ba0qVTby-k31mhqoRyisNvb2ChdkcV9pA&s"
          iconAlt="calculatorIcon"
          type="text"
          name="Bankszámla"
          value={bankszamla}
          onChange={handleChange}
          placeholder="XXXX-XXXX-XXXX-XXXX"
          maxLength="19"
        /> */}

        <FormInput
          spanIcon={faEnvelope}
          type="email"
          name="E-mail"
          placeholder="autosiskola@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          spanIcon={faLock}
          type="password"
          name="Jelszó"
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

export default RegisztracióFormDiv;
