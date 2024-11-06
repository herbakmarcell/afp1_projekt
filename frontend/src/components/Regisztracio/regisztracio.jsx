import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FormInput } from "../FormInputDivek/formInputDiv";

const RegisztracióFormDiv = () => {
  const navigate = useNavigate();
  const [vezeteknev, setVezeteknev] = useState("");
  const [keresztnev, setKeresztnev] = useState("");
  const [jogosultsag, setJogosultsag] = useState(0);
  const [bankszamla, setBankszamla] = useState("");
  const [email, setEmail] = useState("");
  const [jelszo, setJelszo] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Itt jönne a regisztrációs logika
    // Mivel most nem releváns, közvetlenül navigálunk a bejelentkezéshez
    const resp = await axios.post("http://localhost:5000/api/users/register", {
      vezeteknev,
      keresztnev,
      jogosultsag,
      bankszamla,
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
      <form>
        <FormInput
          iconSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpPwM5mR5lNHGg9vxaoUgcnAIBOJumsoJrg&s"
          iconAlt="firstnameIcon"
          type="text"
          placeholder="Vezetéknév"
          onChange={(e) => setVezeteknev(e.target.value)}
        />

        <FormInput
          iconSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpPwM5mR5lNHGg9vxaoUgcnAIBOJumsoJrg&s"
          iconAlt="lastnameIcon"
          type="text"
          placeholder="Keresztnév"
          onChange={(e) => setKeresztnev(e.target.value)}
        />

        <FormInput
          iconSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPNzqYRq287b9xJql_r-MmWqs6thrG9NKig&s"
          iconAlt="permissionIcon"
          type="text"
          placeholder="Jogosultság"
          onChange={(e) => setJogosultsag(e.target.value)}
        />

        <FormInput
          iconSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6Ba0qVTby-k31mhqoRyisNvb2ChdkcV9pA&s"
          iconAlt="calculatorIcon"
          type="number"
          placeholder="00000000"
          onChange={(e) => setBankszamla(e.target.value)}
        />

        <FormInput
          iconSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10sXUPcODWCwePZ-wEWZx1BoczFgid58tug&s"
          iconAlt="emailIcon"
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          iconSrc="https://img.freepik.com/premium-vector/free-vector-padlock-icon-lock-locked_901408-572.jpg"
          iconAlt="lockIcon"
          type="password"
          placeholder="********"
          onChange={(e) => setJelszo(e.target.value)}
        />
        <div className="FormDivElement">
          <input type="submit" value="Bejelentkezés" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default RegisztracióFormDiv;
