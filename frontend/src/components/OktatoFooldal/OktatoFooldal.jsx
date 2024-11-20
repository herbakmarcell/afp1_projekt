import { useContext, useEffect, useState } from "react";
import AuthContext from "../../AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import Calendar from "../Orarend/naptar.jsx";
import { Link } from "react-router-dom";
import "../../Css/userFooldal.css";
import { Dropdown } from "primereact/dropdown";
import axios from "axios";

const OktatoFooldal = () => {
  // Kiolvassuk a felhasználót a Context-ből

  const { user } = useContext(AuthContext);
  const [selectedTanulo, setSelectedTanulo] = useState(1);
  const [helyszinObj, setSelectedCity] = useState(1);
  const navigate = useNavigate();
  const [idopont_eleje, setidopont_eleje] = useState("");
  const [idopont_vege, setidopont_vege] = useState("");
  const [cim, setcim] = useState("");
  const [data, setData] = useState([]);
  const cities = [
    { name: "Budapest", code: "1" },
    { name: "Eger", code: "2" },
    { name: "Nagykanizsa", code: "3" },
    { name: "Miskolc", code: "4" },
    { name: "Győr", code: "5" },
  ];

  const orafelvitel = async (e) => {
    e.preventDefault();

    const helyszin = helyszinObj.name;
    let felhasznalo_id = selectedTanulo.code;
    felhasznalo_id = Number(felhasznalo_id);
    try {
      const resp = await axios.post(
        "http://localhost:5000/api/orarend/oraLetrehozas",
        {
          idopont_eleje,
          idopont_vege,
          cim,
          helyszin,
          felhasznalo_id,
        },
        { withCredentials: true }
      );

      const data = await resp.data;
      if (data) {
        setSelectedTanulo([]);
        setSelectedCity([]);
        setidopont_eleje("");
        setidopont_vege("");
        setcim([]);
      }
    } catch (error) {
      console.error("Hiba történt:", error);
    }
  };

  useEffect(() => {
    const adottTanulok = async () => {
      try {
        const resp = await axios.get(
          "http://localhost:5000/api/tanulok/oktatoTanuloi",
          { withCredentials: true }
        );
        const adat = resp.data;
        if (adat) {
          //setVizsgaBtn(true)
          setData(adat);
        }
      } catch (error) {
        console.log(error);
      }
    };
    adottTanulok();
  }, []);

  const formattedData = data.map((tanulo) => ({
    name: `${tanulo.vezeteknev} ${tanulo.keresztnev}`,
    code: tanulo.felhasznalo_id.toString(), // Egyedi azonosító generálása
  }));

  const tanuloChanges = (e) => {
    setSelectedTanulo(e.target.value);
  };

  const helyszinObjChanges = (e) => {
    setSelectedCity(e.target.value);
  };

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
              <h2>Órafelvitel</h2>
              <div className="oraFelvitelFormDiv">
                <form action="" className="oreFelvitelForm">
                  <label htmlFor="cimTime">
                    <p>Cím:</p>
                    <input
                      type="text"
                      name="cimTime"
                      id="cimTime"
                      value={cim}
                      onChange={(e) => setcim(e.target.value)}
                    />
                  </label>
                  <label htmlFor="helyszinObjTime">
                    <p>Tanuló:</p>
                    <Dropdown
                      value={selectedTanulo}
                      onChange={tanuloChanges}
                      options={formattedData}
                      optionLabel="name"
                      placeholder="Válassz tanulót:"
                      className="w-full md:w-140rem custom-dropdown"
                      checkmark={true}
                      highlightOnSelect={false}
                    />
                  </label>
                  <label htmlFor="tanuloTime">
                    <p>Helyszín:</p>
                    <Dropdown
                      value={helyszinObj}
                      onChange={helyszinObjChanges}
                      options={cities}
                      optionLabel="name"
                      placeholder="Válassz heylszínt:"
                      className="w-full md:w-140rem custom-dropdown"
                      checkmark={true}
                      highlightOnSelect={false}
                    />
                  </label>
                  <label htmlFor="idopont_eleje">
                    <p>Időpont kezdete:</p>
                    <input
                      type="datetime-local"
                      name="idopont_eleje"
                      id="idopont_eleje"
                      value={idopont_eleje}
                      onChange={(e) => setidopont_eleje(e.target.value)}
                    />
                  </label>
                  <label htmlFor="idopont_vege">
                    <p>Időpont vége:</p>
                    <input
                      type="datetime-local"
                      name="idopont_vege"
                      id="idopont_vege"
                      value={idopont_vege}
                      onChange={(e) => setidopont_vege(e.target.value)}
                    />
                  </label>
                  <input
                    className="FormElementButton"
                    type="submit"
                    value="Óra felvitele"
                    onClick={(e) => orafelvitel(e)}
                  />
                </form>
              </div>
            </div>
            <div className="mainOrarendDiv">
              <h2>Órarend</h2>
              <Calendar />
            </div>
            <div className="mainOktatoDiaknak">
              <h2>Oktatód</h2>
              <div className="mainOktatoDiaknakDI">
                <img
                  src="https://loremflickr.com/320/240/girl/all?random=1"
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

export default OktatoFooldal;
