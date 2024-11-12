import { useContext } from "react";
import AuthContext from "../../AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Fooldal = () => {
  // Kiolvassuk a felhasználót a Context-ből

  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  
  const btnModosit = (e) => {
    e.preventDefault()
    navigate("/felhasznaloModositas")
  }

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
                <tbody>
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
                <tr>
                  <td>Módosítás</td>
                  <td><button type="submit" onClick={btnModosit} >Adatok módosítása</button></td>
                </tr>
                </tbody>
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
