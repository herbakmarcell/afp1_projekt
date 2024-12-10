
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../AuthContext.jsx";



import { useNavigate } from "react-router-dom";
import Calendar from "../Orarend/orarend.jsx";

import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../Css/userFooldal.css";

import axios from "axios";



import useElorehaladas from "../Custom Hooks/useElorehaladas.jsx"; // Custom Hook importálása

const UserFooldal = () => {
  // Kiolvassuk a felhasználót a Context-ből

  const { user } = useContext(AuthContext);

  const [oktatoData, setOktatoData] = useState({})
  const [oktatoError, setOktatoError] = useState("")
  useEffect(() => {
    const oktatok = async () => {
      try {
        const resp = await axios.get(
          "http://localhost:5000/api/oktatok/oktatolista",
          { withCredentials: true }
        );
        const data = resp.data;
        if (data) {
          setOktatoData(data);
        }
      } catch (err) {
        setOktatoError(err.response.data.message || err.response.data.error);
      }
    };
    oktatok();
  }, []);

  const navigate = useNavigate();
 
  const { data, error, eu, gyak, elmeleti } = useElorehaladas(); // Custom Hook használata
  



  // console.log(user?.user);
  return (
    <>
      <div className={user ? "mainContent" : "mainContentNo"}>
        {oktatoError && <h2>{oktatoError}</h2>}
        <h2>
          {user
            ? `Üdvözöllek ${user.user.vezeteknev} ${user.user.keresztnev} `
            : `Nem vagy bejelentkezve.`}
        </h2>
        {user ? (
          <>
            <div className="processDiv">
              <h2>Előrehaladás</h2>
              {error !== 'A tanuló nem található' && <h2 style={{ color: "red" }}>{error}</h2>}
              <ul>
                <li>
                  <div>
                    <p>Egészségügy vizsga</p>
                  </div>
                  <div className="progressCircle">
                    <CircularProgressbar
                      value={eu.sikeres && eu.jelentkezesDatuma !== "" ? 100 : 0}
                      text={`${eu.sikeres && eu.jelentkezesDatuma !== "" ? 100 : 0}%`}
                      styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        // rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "butt",

                        // Text size
                        textSize: "30px",

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `rgb(251, 195, 4)`,
                        textColor: "black",
                        trailColor: "#0000004d",
                        backgroundColor: "white",
                      })}
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <p>Gyakorlati vizsga</p>
                  </div>
                  <div className="progressCircle">
                    <CircularProgressbar
                      value={data?.levezetettOrak ? Math.round((data.levezetettOrak / 30) * 100) : 0}
                      text={data?.levezetettOrak ? `${Math.round((data.levezetettOrak / 30) * 100)}%` : `0%`}
                      styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        // rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "butt",

                        // Text size
                        textSize: "30px",

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `#2196f3`,
                        textColor: "black",
                        trailColor: "#0000004d",
                        backgroundColor: "white",
                      })}
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <p>Elmélet vizsga</p>
                  </div>
                  <div className="progressCircle">
                    <CircularProgressbar
                      value={elmeleti.sikeres && eu.jelentkezesDatuma !== "" ? 100 : 0}
                      text={`${elmeleti.sikeres && eu.jelentkezesDatuma !== "" ? 100 : 0}%`}
                      styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        // rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "butt",

                        // Text size
                        textSize: "30px",

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `#f44336`,
                        textColor: "black",
                        trailColor: "#0000004d",
                        backgroundColor: "white",
                      })}
                    />
                  </div>
                </li>
              </ul>
              <p>
                További információkért kattints{" "}
                <Link to="/elorehaladas">ide</Link>!
              </p>
            </div>
            <div className="mainOrarendDiv">
              <h2>Órarend</h2>
              <Calendar />
            </div>
            <div className="mainOktatoDiaknak">
              <h2>
                {oktatoData.vanOktato && <h2 style={{color:"red"}} >{oktatoData.oktatoAdatok.vezeteknev} {oktatoData.oktatoAdatok.keresztnev}</h2>}
                {!oktatoData.vanOktato && <Link
                  to={"/oktatoValasztas"}
                  style={{ textDecoration: "none" }}
                >
                  Oktatód kiválasztása
                </Link>}
                
              </h2>

              <div className="mainOktatoDiaknakDI">
                <img
                  src="https://loremflickr.com/320/240/paris,girl/all?random=1"
                  alt=""
                />
              </div>
            </div>
            <div className="mainAutoDiaknak">
              <h2>Autód</h2>
              <div className="mainAutoDiaknakDI">
                <img
                  src="https://loremflickr.com/320/240/car/all?random=1"
                  alt=""
                />
              </div>
            </div>
            <div className="mainVizsgaDiaknak userVizsga">
              <h2>Vizsgák</h2>
              <ul>
                <li>
                  <div>
                    <p>Egészségügy vizsga:</p>
                    <p className="noResultVizsga">

                   {eu.sikeres && eu.jelentkezesDatuma !== null ? "Sikeres" : eu.jelentkezesDatuma !== null ? "Folyamatban" : "Nem jelentkezett"}
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Elmélet vizsga:</p>
                    <p className="noResultVizsga">
                      
                    {elmeleti.sikeres && elmeleti.jelentkezesDatuma !== null ? "Sikeres" : elmeleti.jelentkezesDatuma !== null ? "Folyamatban" : "Nem jelentkezett"}
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Gyakorlati vizsga:</p>
                    <p className="noResultVizsga">
                      {console.log("hhh")}
                      {console.log(data)}
                      {!data?.levezetettOrak || data?.levezetettOrak === 0  &&  "Nincs elkezdve"}
                      {data?.levezetettOrak > 0 && data?.vizsgak.gyakorlati.sikeres === true && "Sikeres"}
                      {data?.levezetettOrak > 0 && data?.vizsgak.gyakorlati.sikeres === false && "Nincs meg"}
                    </p>
                  </div>
                </li>
              </ul>
              <p>
                További információkért kattints{" "}
                <Link to="/elorehaladas">ide</Link>!
              </p>
            </div>
          </>
        ) : (
          ``
        )}
      </div>
    </>
  );
};

export default UserFooldal;
