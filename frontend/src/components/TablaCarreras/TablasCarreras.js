import React from "react";
import Navbar from "../Navbar/Navbar";
import Table from "react-bootstrap/Table";
import NavbarHome from "../Navbar/Navbar";

function TablasCarreras(props) {
  return (
    <div>
      <NavbarHome />
      <div className="back">
        <Table striped bordered hover size="sm">
          <caption> Areas de desempeño y su cantidad de usuarios </caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Area de Desempeño</th>
              <th>Descripcion</th>
              <th>Cantidad de Usuarios</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
}

export default TablasCarreras;
