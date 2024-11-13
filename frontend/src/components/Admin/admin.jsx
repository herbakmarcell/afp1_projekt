import { useContext, useEffect, useState } from "react";
import AuthContext from "../../AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import UsersTable from "./felhasznalokTablazat.jsx";
import axios from "axios";

const Admin = () => {
  // Kiolvassuk a felhasználót a Context-ből

  const { user } = useContext(AuthContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    const users = async () => {
      try {
        const resp = await axios.get(
          "http://localhost:5000/api/admin/felhasznalok",
          { withCredentials: true }
        );
        const adat = resp.data;
        if (adat) {
          //setVizsgaBtn(true)
          setData(adat);
          console.log(adat);
        }
      } catch (error) {
        console.log(error);
      }
    };
    users();
  }, []);

  return (
    <>
      <div className={user ? "mainContent" : "mainContentNo"}>
        <h2>
          {user
            ? `Üdvözöllek ${user.user.vezeteknev} ${user.user.keresztnev} `
            : `Jelentkezz be ha használni akarod az oldal funkcióit.`}
        </h2>
        {user ? (
          <>
            <div className="vizsgaTable">
              <table>
                <tbody>
                  <tr>
                    <th>ID</th>
                    <th>Vizsga Típusa</th>
                    <th>Vizsgabiztos</th>
                    <th>Jogosultság</th>
                    <th className="jelentkezes">Műveletek</th>
                  </tr>
                  {data.map((formData, index) => {
                    return (
                      <UsersTable
                        key={user.id}
                        formData={formData}
                        index={index}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          ``
        )}
      </div>
    </>
  );
};

export default Admin;
