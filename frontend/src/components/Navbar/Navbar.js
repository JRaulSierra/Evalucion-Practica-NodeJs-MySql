import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function NavbarHome() {
  return (
    <div >
      <Navbar bg="primary" variant="dark">
        <Link to="/tabla1">Tabla Usuarios</Link>
        <Link to="/tabla2">Tabla Areas de Desempeño</Link>
        <Link to="/login">Login</Link>
        <Link to="/registro">Registro</Link>
      </Navbar>
    </div>
  );
}

export default NavbarHome;
