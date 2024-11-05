import { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext"
const Fooldal = () => {
   // Kiolvassuk a felhasználót a Context-ből
  
  const {user} = useContext(AuthContext)
  console.log(user?.user)
  return (
    <>
    <div className="formDiv" style={{ color: "black" }}>
      <h2>Üdvözöllek a főoldalon!</h2>
      <p>Ez a főoldal tartalma.</p>
    </div>
    <h1 style={{color: "black"}}  >
      {user ?  (
        `Üdvözöllek ${user.user.email} `

      )
      : (`Nem vagy bejelentkezve.`)} </h1>
    
    </>
  );
};

export default Fooldal;
