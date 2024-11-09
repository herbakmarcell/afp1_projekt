import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // Használjuk a név szerinti importálást
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //FIXME:
  // Amikor a felhasználó bezárja az ablakot akkor
  // kitörlődik a localstorage tartalma
  //Részleges megoldás
  // useEffect(() => {
  //   const unloadCallback = () => {
  //     const storedUser = localStorage.getItem("user");
  //     if (storedUser) {
  //       localStorage.removeItem("user");
  //       setUser(null);
  //     }
  //   };
  //   window.addEventListener("beforeunload", unloadCallback);
  //   return () => window.removeEventListener("beforeunload", unloadCallback);
  // }, []);

  // Bejelentkezett felhasználó ellenőrzése a cookie-ból (JWT)
  useEffect(() => {
    // Ellenőrizzük, hogy van-e felhasználó az `localStorage`-ban
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Beolvassuk a mentett felhasználót
      
    } else {
      // Ha nincs elmentve semmi, akkor próbálkozunk az API hívással
      const checkAuth = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/orarend/orarendModositas",
            { withCredentials: true }
          );
          if (response.data.user) {
            setUser(response.data.user.user); // A backendről kapott felhasználói adat
            
          }
        } catch (error) {
          setUser(null); // Ha nincs bejelentkezve, akkor nincs felhasználó
        }
      };
      checkAuth();
    }
  }, []);

  // Bejelentkezés (JWT token dekódolása és elmentése a localStorage-ba)
  const login = (token) => {
    const decoded = jwtDecode(token); // Dekódoljuk a JWT-t
    setUser(decoded); // Beállítjuk a felhasználót a state-ben
    localStorage.setItem("user", JSON.stringify(decoded)); // Elmentjük a felhasználót a localStorage-ba
  };

  // Kijelentkezés (user törlése és localStorage törlése)
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Eltávolítjuk a felhasználót a localStorage-ból
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
