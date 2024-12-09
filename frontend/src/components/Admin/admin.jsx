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

  useEffect(() => {
    users();
  }, []);

  return (
    <>
      <div
        className={user ? "mainContent" : "mainContentNo"}
        style={{ gridTemplateRows: "auto" }}
      >
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
                    <th>Vezetéknév</th>
                    <th>Keresztnév</th>
                    <th>E-mail</th>
                    <th>Jogosultság</th>
                    <th>Aktivitás</th>
                    <th className="jelentkezes">Műveletek</th>
                  </tr>
                  {data.map((formData, index) => {
                    return (
                      <UsersTable
                        key={user.id}
                        formData={formData}
                        index={index}
                        onRefresh={users}
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
