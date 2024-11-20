import { useContext } from "react";
import AuthContext from "../../AuthContext.jsx";
import "react-circular-progressbar/dist/styles.css";
import UserFooldal from "../UserFooldal/userFooldal.jsx";
import Admin from "../Admin/admin.jsx";
import BejelentkezesForm from "../Bejelentkezes/bejelentkezes.jsx";

const ProfilAdatok = () => {
  // Kiolvassuk a felhasználót a Context-ből

  const { user } = useContext(AuthContext);

  return (
    <>
      {user ? (
        user.user.jogkor_id === 1 ? (
          <UserFooldal />
        ) : user.user.jogkor_id === 2 ? (
          <UserFooldal />
        ) : user.user.jogkor_id === 3 ? (
          <UserFooldal />
        ) : user.user.jogkor_id === 4 ? (
          <Admin />
        ) : (
          ""
        )
      ) : (
        <BejelentkezesForm />
      )}
    </>
  );
};

export default ProfilAdatok;
