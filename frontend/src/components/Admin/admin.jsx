import { useContext, useEffect, useState } from "react";
import AuthContext from "../../AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import UsersTable from "./felhasznalokTablazat.jsx";
import axios from "axios";

const Admin = () => {
  // Kiolvassuk a felhasználót a Context-ből

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState("");
  // const users = async () => {
  //   try {
  //     const resp = await axios.post(
  //       "http://localhost:5000/api/admin/felhasznalok",
  //       { withCredentials: true }
  //     );
  //     const data = resp.data;
  //     console.log(data);
  //     if (data) {
  //       //setVizsgaBtn(true)
  //       setData(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // users();

  useEffect(() => {
    if (!user) {
      navigate("/bejelentkezes");
    }
  }, [user, navigate]); // A `user` változásakor lefut

  // console.log(user?.user);
  return (
    <>
      <div className={user ? "mainContent" : "mainContentNo"}>
        <h2>
          {user
            ? `Üdvözöllek ${user.user.vezeteknev} ${user.user.keresztnev} `
            : ``}
        </h2>
        {user ? (
          <>
            {/* {data.map((formData) => {
              <UsersTable formData={formData} />;
            })} */}
          </>
        ) : (
          ``
        )}
      </div>
    </>
  );
};

export default Admin;
