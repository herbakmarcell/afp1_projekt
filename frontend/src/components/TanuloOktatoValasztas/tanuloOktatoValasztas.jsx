import React, { useState } from "react";
import "../../Css/tanarvalaszto.css";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function TanuloOktatoValasztas() {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [btnValaszt, setBtnValaszt] = useState(false);


  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to right,  #2575fc, #2575fc)";

      return () =>{
        document.body.style.background =
      "";
      }
  }, []);

  useEffect(() => {
    const oktatok = async () => {
      try {
        const resp = await axios.get(
          "http://localhost:5000/api/oktatok/oktatolista",
          { withCredentials: true }
        );
        const data = resp.data;
        if (data) {
          setData(data);
          console.log(data)
        }
      } catch (err) {
        setError(err.response.data.message || err.response.data.error);
      }
    };
    oktatok();
  }, []);

  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleTeacherSelect = (oktato_id) => {
    console.log("tanar id");
    console.log(oktato_id);
    const valasztva = async () => {
      try {
        const resp = await axios.post(
          "http://localhost:5000/api/oktatok/kivalasztas",
          { oktato_id },
          { withCredentials: true }
        );
        const data = resp.data;
        if (data) {
          setSelectedTeacher(data);
          navigate("/")
        }
      } catch (err) {
        setError(err.response.data.message || err.response.data.error);
      }
    };
    valasztva();
  };

  return (
    <div className="App">
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <h2>Oktató választása</h2>
      <div className="table-container">
        <table className="teacher-table">
          <thead>
            <tr>
              <th>Oktató </th>
              <th>Email </th>
              <th className="button-column">Választás</th>
            </tr>
          </thead>
          <tbody>
            {error && <h2>{error}</h2>}
            {/* {data.vanOktato === false && console.log(data.oktatokLista.map(o => o.vezeteknev))} */}
            {data.vanOktato === false && data.oktatokLista.map((tanarok) => (
              <tr
                key={tanarok.felhasznalo_id}
                className={selectedTeacher === tanarok ? "selected" : ""}
              >
                <td>
                  {tanarok.vezeteknev} {tanarok.keresztnev}
                </td>
                <td>{tanarok.email}</td>
                <td className="button-column">
                  
                    <button
                      className="select-button"
                      onClick={() =>
                        handleTeacherSelect(tanarok.felhasznalo_id)
                      }
                    >
                      Kiválaszt
                    </button>
                  
                </td>
              </tr>
            ))}
            {data.vanOktato === true && <tr><td colSpan={3} style={{textAlign:"center"}} >Már van oktatód.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
