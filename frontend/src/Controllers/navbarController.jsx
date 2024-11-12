import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../AuthContext.jsx";
import RegisztracióFormDiv from "../components/Regisztracio/regisztracio.jsx";
import BejelentkezesForm from "../components/Bejelentkezes/bejelentkezes.jsx";
import Fooldal from "../components/Fooldal/fooldal.jsx";
import { FelhasznaloModositas } from "../components/FelhasznaloModositas.jsx";
import { NavBar } from "../components/Navbar/navbar.jsx";
import Elorehaladas from "../components/Elorehaladas/elorehaladas.jsx";

const ReactRouterSetup = () => {
  return (
    <AuthProvider>
    <Router>
      <NavBar  />
      <Routes>
        <Route path="/" element={<BejelentkezesForm />} />
        <Route path="/bejelentkezes" element={<BejelentkezesForm />} />
        <Route path="/regisztracio" element={<RegisztracióFormDiv />} />
        <Route path="/fooldal" element={<Fooldal />} />
        <Route path="/felhasznaloModositas" element={<FelhasznaloModositas />} />
        <Route path="/elorehaladas" element={<Elorehaladas />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default ReactRouterSetup;
