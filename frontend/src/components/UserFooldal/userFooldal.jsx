import { useContext } from "react";
import AuthContext from "../../AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import Calendar from "../Orarend/naptar.jsx";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../Css/userFooldal.css";

const EUpercentage = 25;
const Gyakpercentage = 50;
const Elmpercentage = 75;

const UserFooldal = () => {
  // Kiolvassuk a felhasználót a Context-ből

  const { user } = useContext(AuthContext);

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
              <ul>
                <li>
                  <div>
                    <p>Egészségügy vizsga</p>
                  </div>
                  <div className="progressCircle">
                    <CircularProgressbar
                      value={EUpercentage}
                      text={`${EUpercentage}%`}
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
                    <p>Gyakrolati vizsga</p>
                  </div>
                  <div className="progressCircle">
                    <CircularProgressbar
                      value={Gyakpercentage}
                      text={`${Gyakpercentage}%`}
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
                      value={Elmpercentage}
                      text={`${Elmpercentage}%`}
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
                <Link
                  to={"/oktatoValasztas"}
                  style={{ textDecoration: "none" }}
                >
                  Oktatód kiválasztása
                </Link>
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
            <div className="mainVizsgaDiaknak">
              <h2>Vizsgák</h2>
              <ul>
                <li>
                  <div>
                    <p>Egészségügy vizsga:</p>
                    <p className="noResultVizsga">Sikertelen</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Elmélet vizsga:</p>
                    <p className="noResultVizsga">Sikertelen</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Gyakorlati vizsga:</p>
                    <p className="noResultVizsga">Sikertelen</p>
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
