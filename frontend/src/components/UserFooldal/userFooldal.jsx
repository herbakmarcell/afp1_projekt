import { useContext, useEffect, useState } from "react";
import AuthContext from "../../AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import Calendar from "../Orarend/naptar.jsx";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../Css/userFooldal.css";


import useElorehaladas from "../Custom Hooks/useElorehaladas.jsx"; // Custom Hook importálása

const UserFooldal = () => {
  // Kiolvassuk a felhasználót a Context-ből

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
 
  const { data, error, eu, gyak, elmeleti } = useElorehaladas(); // Custom Hook használata
  


  // console.log(user?.user);
  return (
    <>
      <div className={user ? "mainContent" : "mainContentNo"}>
        <h2>
          {user
            ? `Üdvözöllek ${user.user.vezeteknev} ${user.user.keresztnev} `
            : `Nem vagy bejelentkezve.`}
        </h2>
        {user ? (
          <>
            <div className="processDiv">
              <h2>Előrehaladás</h2>
              {error && <h2 style={{ color: "red" }}>{error}</h2>}
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
                      value={Math.round((data.levezetettOrak / 30) * 100)}
                      text={`${Math.round((data.levezetettOrak / 30) * 100)}%`}
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
              <h2>Oktatód</h2>
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
            <div className="mainVizsgaDiaknak">
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
                      {data.levezetettOrak > 0 && data.levezetettOrak < 30 && gyak.jelentkezesDatuma !== null
                        ? "Folyamatban"
                        : data.levezetettOrak >= 30
                        ? "Sikeres"
                        : data.levezetettOrak === 0 &&
                          gyak.jelentkezesDatuma === null
                        ? "Nincs elkezdve"
                        : "Folyamatban"}
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
