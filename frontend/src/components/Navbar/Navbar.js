import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/tabla1">Tabla Usuarios</Link>
      <Link to="/tabla2">Tabla Areas de Desempeño</Link>
      <Link to="/login">Login</Link>
      <Link to="/registro">Registro</Link>
    </div>
  );
}

export default Navbar;