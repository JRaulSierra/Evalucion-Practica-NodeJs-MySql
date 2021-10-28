import React from "react";
import {  NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";


function NavbarUsuario(props) {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <NavLink to="/login">Cerrar Sesion</NavLink>
        <NavLink to="/modifyUser">Datos de usuario</NavLink>

        <NavLink to="/agregar">Area de Desempeño</NavLink>

        <NavLink to="/logros">Area de Logros</NavLink>
      </Navbar>
    </div>
  );
}

export default NavbarUsuario;
