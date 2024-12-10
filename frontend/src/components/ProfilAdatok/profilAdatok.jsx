import { useContext, useState, useEffect } from "react";
import AuthContext from "../../AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../Css/profilAdatok.css";
import axios from "axios";
const ProfilAdatok = () => {
  // Kiolvassuk a felhasználót a Context-ből

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [felhAdatok, setFelhasznaloAdatok] = useState({})

  const btnModosit = (e) => {
    e.preventDefault();
    navigate("/felhasznaloModositas");
  };


  
  useEffect(() =>{
    //api/users/felhasznaloAdatai
    const adatok = async () =>{
      const resp = await axios.get("http://localhost:5000/api/users/felhasznaloAdatai", {withCredentials: true})
      const data = await resp.data
      if(data){
          setFelhasznaloAdatok(data)
          console.log(data)
      }
    }
    adatok()
  },[])

  console.log(user?.user);
  return (
    <>
      <div className={user ? "infoDiv" : "infoDivNo"}>
        <h2>
          {user
            ? `Üdvözöllek ${felhAdatok.vezeteknev} ${felhAdatok.keresztnev} `
            : `Nem vagy bejelentkezve.`}
        </h2>
        {user ? (
          <div className="infoTablaDiv">
            <h2>
              {user.user.jogkor_id == 1
                ? "Tanuló"
                : user.user.jogkor_id == 2
                ? "Oktató"
                : user.user.jogkor_id == 3
                ? "Vizsgabiztos"
                : "Admin"}
            </h2>
            <div className="infoTablaDivInner">
              <div className="infoTablaImgDiv">
                <img
                  src="https://loremflickr.com/320/240/girl/all?random=1"
                  alt=""
                />
              </div>
              <div className="infoTablaTableDiv">
                <table>
                  <tbody>
                    <tr>
                      <td>Vezetéknév</td>
                      <td>{felhAdatok.vezeteknev}</td>
                    </tr>
                    <tr>
                      <td>Keresztnév</td>
                      <td>{felhAdatok.keresztnev}</td>
                    </tr>
                    <tr>
                      <td>E-mail</td>
                      <td>{felhAdatok.email}</td>
                    </tr>
                    <tr>
                      <td>Bankszámla</td>
                      <td>{felhAdatok.bankszamla}</td>
                    </tr>
                    <tr>
                      <td>Módosítás</td>
                      <td>
                        <button type="submit" onClick={btnModosit}>
                          Adatok módosítása
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link to="/fooldal">Vissza</Link>
              </div>
            </div>
          </div>
        ) : (
          ``
        )}
      </div>
    </>
  );
};

export default ProfilAdatok;
