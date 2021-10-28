import { Axios } from "axios";
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

function TablaUsuarios(props) {
  // useEffect(() => {
  //   const res = Axios.get("")
  // }, []);
  return (
    <div>
      <Navbar/>
      <table border="1">
        <caption> Colores en forma Hexadecimal. </caption>

        <tr>
          <td>Color</td>
          <td>Verde</td>
          <td>Azul</td>
          <td>Rojo</td>
          <td>Blanco</td>
        </tr>

        <tr>
          <td>Hexadecimal</td>
          <td>#009846</td>
          <td>#0000ff</td>
          <td>#ff0000</td>
          <td>#ffffff</td>
        </tr>
      </table>
    </div>
  );
}

export default TablaUsuarios;
