import { Axios } from "axios";
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Table from "react-bootstrap/Table";
import NavbarHome from "../Navbar/Navbar";

function TablaUsuarios(props) {
  // useEffect(() => {
  //   const res = Axios.get("")
  // }, []);
  return (
    <div >
      <NavbarHome/>
      <div className="back">
      <Table striped bordered hover size="sm">
          <caption> visualizacion de los usuarios con su ultimo grado cursado </caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Usuario</th>
              <th>Ultimo nivel de estudio</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
}

export default TablaUsuarios;
