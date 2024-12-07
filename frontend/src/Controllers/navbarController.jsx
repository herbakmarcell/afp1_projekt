import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../AuthContext.jsx";

import RegisztracióFormDiv from "../components/Regisztracio/regisztracio.jsx";
import BejelentkezesForm from "../components/Bejelentkezes/bejelentkezes.jsx";
import Fooldal from "../components/Fooldal/fooldal.jsx";
import ProfilAdatok from "../components/ProfilAdatok/profilAdatok.jsx";
import { FelhasznaloModositas } from "../components/FelhasznaloModositas/FelhasznaloModositas.jsx";
import { NavBar } from "../components/Navbar/navbar.jsx";
import { WebsiteBGC } from "../components/WebsiteBackground/websiteBgc.jsx";
import Footer from "../components/Footer/footer.jsx";
import Elorehaladas from "../components/Elorehaladas/elorehaladas.jsx";
import Admin from "../components/Admin/admin.jsx";
import { FelhasznaloJogosultsagModositas } from "../components/Admin/felhasznaloJogosultsagValtas.jsx";
import Kifizetesek from "../components/Kifizetesek/kifizetesek.jsx";
import TanuloOktatoValasztas from "../components/TanuloOktatoValasztas/tanuloOktatoValasztas.jsx";

const ReactRouterSetup = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Fooldal />} />
          <Route path="/bejelentkezes" element={<BejelentkezesForm />} />
          <Route path="/regisztracio" element={<RegisztracióFormDiv />} />
          <Route path="/fooldal" element={<Fooldal />} />
          <Route
            path="/felhasznaloModositas"
            element={<FelhasznaloModositas />}
          />
          <Route path="/profilAdatok" element={<ProfilAdatok />} />
          <Route path="/elorehaladas" element={<Elorehaladas />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/kifizetesek" element={<Kifizetesek />} />
          <Route path="/oktatoValasztas" element={<TanuloOktatoValasztas />} />
          <Route
            path="/felhasznalojogosultsagmodositas"
            element={<FelhasznaloJogosultsagModositas />}
          />
        </Routes>
        <Footer />
      </Router>
      <WebsiteBGC />
    </AuthProvider>
  );
};

export default ReactRouterSetup;
