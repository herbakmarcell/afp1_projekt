import React, { useContext, useEffect, useState } from "react";
import "../../Css/elorehaladas.css";
import VizsgaTable from "./vizsgatable.jsx";
import axios from "axios";
import AuthContext from "../../AuthContext.jsx";
import { Link } from "react-router-dom";

import useElorehaladas from "../Custom Hooks/useElorehaladas.jsx"; // Custom Hook importálása

const Elorehaladas = () => {
  const [vizsgaBtn, setVizsgaBtn] = useState(false)
  const [error2, setError2] = useState("")
  const [statusz, setStatusz] = useState([])
  const [siker, setSiker] = useState(false)
  const { user } = useContext(AuthContext);


  const { data, error, eu, gyak, elmeleti } = useElorehaladas(siker); // Custom Hook használata

  


  useEffect(() => {
    const vizsga = async () => {
      try {
        const resp = await axios.get(
          "http://localhost:5000/api/vizsga/vizsgak",
          { withCredentials: true }
        );
        const data = resp.data;
        if (data) {
          //setVizsgaBtn(true)
          {data.map(d => {
            setStatusz(prevState => [...prevState, d])
          })}
         
          setVizsgaBtn(prevState => !prevState);
        }
      } catch (err) {
        setError2(err.response.data.message || err.response.data.error)
      }
    };
    vizsga();
  }, [])

  return (
    <>
      <div className={user ? "eloreHaladasDiv" : "eloreHaladasDivNo"}>
        <h2>
          {user
            ? `Előrehaladásod`
            : `Jelentekezz be, hogy láthassad az előrehaladásod!`}
        </h2>
        <div className="progressMainDiv">
          <div className="vizsgaBtn">
            <div className="btn">
              <div className="euProgress">
                <div className="ProgressInfo">
                  <div className="euBtn">
                    <p>
                      <i className="fas fa-medkit"></i> Eü vizsga
                    </p>
                  </div>
                  <div>
                    <p>Felvétel időpontja:</p>
                    <p>{eu.jelentkezesDatuma}</p>
                  </div>
                </div>
                <div className="w3-light-black">
                  <div
                    className="w3-container  w3-center"
                    style={{
                      width: `${eu.sikeres && eu.jelentkezesDatuma !== "" ? 100 : 0}%`,
                      background: "#fbc304",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    {eu.sikeres && eu.jelentkezesDatuma !== "" ? 100 : 0}%
                  </div>
                </div>
              </div>
              <div className="elmProgress">
                <div className="ProgressInfo">
                  <div className="elmeletiBtn">
                    <p>
                      <i className="fas fa-book-open"></i> Elméleti vizsga
                    </p>
                  </div>
                  <div>
                    <p>Felvétel időpontja:</p>
                    <p>{elmeleti.jelentkezesDatuma}</p>
                  </div>
                </div>
                <div className="w3-light-black">
                  <div
                    className="w3-container w3-red w3-center"
                    style={{ width: `${elmeleti.sikeres && elmeleti.jelentkezesDatuma !== "" ? 100 : 0}%`, fontWeight: "bold" }}
                  >
                    {" "}
                    <span style={{ color: "black" }}>{elmeleti.sikeres && elmeleti.jelentkezesDatuma !== "" ? 100 : 0}%</span>{" "}
                  </div>
                </div>
              </div>
              <div className="gyakProgress">
                <div className="ProgressInfo">
                  <div className="gyakorlatiBtn">
                    <p>
                      <i className="fas fa-car"></i> Gyakorlati vizsga
                    </p>
                  </div>
                  <div>
                    <p>Felvétel időpontja:</p>
                    <p>{gyak.jelentkezesDatuma}</p>
                  </div>
                </div>
                <div className="w3-light-black">
                  <div
                    className="w3-container w3-blue w3-center"
                    style={{ width: `${Math.round((data.levezetettOrak / 30) * 100)}%`, color: "black", fontWeight: "bold" }}
                  >
                    {" "}
                    <span style={{ color: "black" }}>{Math.round((data.levezetettOrak / 30) * 100)}%</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w3-container"></div>
          <div className="backToMainPage">
            <Link to="/fooldal">Vissza</Link>
          </div>
        </div>
        
        <h2 style={{margin: "0"}} >Vizsgaalkalmak</h2>
        {vizsgaBtn && (
          <>
            <div className="vizsgaTable">
              <table>
                <tbody>
                  <tr>
                    <th>ID</th>
                    <th>Vizsga Típusa</th>
                    <th>Vizsgabiztos</th>
                    <th>Vizsga időpontja</th>
                    <th className="jelentkezes">Jelentkezés</th>
                  </tr>
                  {error && <td colSpan={5} >{error}</td>}
                  {error2 && <td colSpan={5} >{error2}</td>}
                  {statusz.length === 0 ? <tr ><td colSpan={5}>Nincsenek meghirdetve vizsgák, kérjük látogasson vissza később.</td></tr> : statusz.map((formData, i) => {
                    
                    return <VizsgaTable formData={formData} siker={siker} setSiker={setSiker}  key={i} index={i}  />;
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Elorehaladas;
