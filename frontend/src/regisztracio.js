import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const RegisztracióFormDiv = () => {
  const navigate = useNavigate();
  const [vezeteknev, setVezeteknev] = useState("")
  const [keresztnev, setKeresztnev] = useState("")
  const [jogosultsag, setJogosultsag] = useState(0)
  const [bankszamla, setBankszamla] = useState("")
  const [email, setEmail] = useState("")
  const [jelszo, setJelszo] = useState(0)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Itt jönne a regisztrációs logika
    // Mivel most nem releváns, közvetlenül navigálunk a bejelentkezéshez
    const resp = await axios.post('http://localhost:5000/api/users/register', {
      vezeteknev, keresztnev, jogosultsag, bankszamla, email, jelszo
    })
    const data = resp.data
    console.log(data.sikeres)
    if(data.sikeres === "Success"){
      navigate("/bejelentkezes")
    }
  };

  return (
    <div className="formDiv">
      <form>
        <div className="FormDivElement">
          <span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpPwM5mR5lNHGg9vxaoUgcnAIBOJumsoJrg&s"
              alt="firstnameIcon"
            />
          </span>
          <input type="text" name="" id="" placeholder="Vezetéknév" 
          onChange={e => setVezeteknev(e.target.value)}
          />
        </div>
        <div className="FormDivElement">
          <span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpPwM5mR5lNHGg9vxaoUgcnAIBOJumsoJrg&s"
              alt="lastnameIcon"
            />
          </span>
          <input type="text" name="" id="" placeholder="Keresztnév" 
          onChange={e => setKeresztnev(e.target.value)}
          />
        </div>
        <div className="FormDivElement">
          <span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPNzqYRq287b9xJql_r-MmWqs6thrG9NKig&s"
              alt="permissionIcon"
            />
          </span>
          <input type="text" name="" id="" placeholder="Jogosultság" 
          onChange={e => setJogosultsag(e.target.value)}
          />
        </div>
        <div className="FormDivElement">
          <span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6Ba0qVTby-k31mhqoRyisNvb2ChdkcV9pA&s"
              alt="calculatoricon"
            />
          </span>
          <input type="number" name="" id="" placeholder="00000000" 
          onChange={e => setBankszamla(e.target.value)}
          />
        </div>
        <div className="FormDivElement">
      <span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10sXUPcODWCwePZ-wEWZx1BoczFgid58tug&s"
          alt="emailIcon"
        />
      </span>
      <input type="email" name="" id="" placeholder="E-mail" 
      onChange={e => setEmail(e.target.value)}
      />
    </div>
    <div className="FormDivElement">
      <span>
        <img
          src="https://img.freepik.com/premium-vector/free-vector-padlock-icon-lock-locked_901408-572.jpg"
          alt="lockIcon"
        />
      </span>
      <input type="password" name="" id="" placeholder="********" 
      onChange={e => setJelszo(e.target.value)}
      />
    </div>
        <div className="FormDivElement">
          <input type="submit" value="Bejelentkezés" onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  );
};


export default RegisztracióFormDiv;
