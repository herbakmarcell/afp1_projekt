import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import AuthContext from "./AuthContext";

const BejelentkezesForm = () => {
  const { login } = useContext(AuthContext);  // A login funkció a context-ből
  
  const [email, setEmail] = useState('');
  const [jelszo, setJelszo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email)

      const response = await axios.post('http://localhost:5000/api/users/login', { email, jelszo }, { withCredentials: true });
      if (!response.data.token) {
        throw new Error('No token received');
      }
      
      const { token } = response.data;
      console.log("Bejelentkezve, token:" + token);
      
      login(token);  // A JWT token beállítása a context-ben
      navigate('/fooldal');  // Visszairányítás a főoldalra
    } catch (error) {
      console.error('Login failed', error.message);
    }
  };

  return (
    <div className="formDiv">
      <form >
        <div className="FormDivElement">
          <span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10sXUPcODWCwePZ-wEWZx1BoczFgid58tug&s"
              alt="emailIcon"
            />
          </span>
          <input type="email" name="email" id="email" placeholder="E-mail" 
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
          <input type="password" name="jelszo" id="jelszo" placeholder="********" 
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



export default BejelentkezesForm;
