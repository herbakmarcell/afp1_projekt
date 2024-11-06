import { useContext, useEffect, useState } from "react";
import AuthContext from "../../AuthContext.jsx";
const Fooldal = () => {
  // Kiolvassuk a felhasználót a Context-ből

  const { user } = useContext(AuthContext);
  console.log(user?.user);
  return (
    <>
      <div className={user ? "infoDiv" : "infoDivNo"}>
        <h2>
          {user
            ? `Üdvözöllek ${user.user.vezeteknev} ${user.user.keresztnev} `
            : `Nem vagy bejelentkezve.`}
        </h2>
        {user ? (
          <div className="infoTablaDiv">
            <div className="infoTablaImgDiv">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpPwM5mR5lNHGg9vxaoUgcnAIBOJumsoJrg&s"
                alt="profilPicture"
              />
            </div>
            <div className="infoTablaTableDiv">
              <h2>Tanuló</h2>
              <table>
                <tr>
                  <td>Vezetéknév</td>
                  <td>{user.user.vezeteknev}</td>
                </tr>
                <tr>
                  <td>Keresztnév</td>
                  <td>{user.user.keresztnev}</td>
                </tr>
                <tr>
                  <td>E-mail</td>
                  <td>{user.user.email}</td>
                </tr>
              </table>
            </div>
          </div>
        ) : (
          ``
        )}
      </div>
    </>
  );
};

export default Fooldal;
