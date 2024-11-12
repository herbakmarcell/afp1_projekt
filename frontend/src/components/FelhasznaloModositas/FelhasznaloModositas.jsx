import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { FormInput } from "../FormInputDivek/formInputDiv.jsx";
import AuthContext from "../../AuthContext.jsx";
import { useNavigate } from "react-router-dom";

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

  const handleSubmit = (e) => {
    e.preventDefault();
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
      login(data)
      navigate("/fooldal")
    };
    felh();
    

  };

  return (
    <div className="formDiv">
      <form>
        <FormInput
          iconSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10sXUPcODWCwePZ-wEWZx1BoczFgid58tug&s"
          iconAlt="emailIcon"
          type="text"
          name="vezeteknev"
          placeholder="Vezetéknév"
          value={vezeteknev}
          onChange={(e) => setVezeteknev(e.target.value)}
        />

        <FormInput
          iconSrc="https://img.freepik.com/premium-vector/free-vector-padlock-icon-lock-locked_901408-572.jpg"
          iconAlt="lockIcon"
          type="text"
          name="keresztnev"
          placeholder="Keresztnév"
          value={keresztnev}
          onChange={(e) => setKeresztnev(e.target.value)}
        />
        <div className="FormDivElement">
          <input
            type="submit"
            value="Adatok módosítása"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};
