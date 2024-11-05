import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

import RegisztracióFormDiv from "./regisztracio";
import BejelentkezesForm from "./bejelentkezes";
import Fooldal from "./fooldal";

import { NavBar } from "./Navbar/navbar";
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
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default ReactRouterSetup;
