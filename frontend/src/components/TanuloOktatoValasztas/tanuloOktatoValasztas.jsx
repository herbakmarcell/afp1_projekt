import React, { useState } from "react";
import "../../Css/tanarvalaszto.css";
import { useEffect } from "react";
import axios from "axios";

export default function TanuloOktatoValasztas() {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [btnValaszt, setBtnValaszt] = useState(false);

  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to right,  #2575fc, #2575fc)";
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
          setBtnValaszt(true);
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
            {data.map((tanarok) => (
              <tr
                key={tanarok.felhasznalo_id}
                className={selectedTeacher === tanarok ? "selected" : ""}
              >
                <td>
                  {tanarok.vezeteknev} {tanarok.keresztnev}
                </td>
                <td>{tanarok.email}</td>
                <td className="button-column">
                  {btnValaszt === false ? (
                    <button
                      className="select-button"
                      onClick={() =>
                        handleTeacherSelect(tanarok.felhasznalo_id)
                      }
                    >
                      Kiválaszt
                    </button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
