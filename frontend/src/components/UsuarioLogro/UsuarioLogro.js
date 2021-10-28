import React from "react";
import NavbarUsuario from "../NavbarUsuario/NavbarUsuario";


function UsuarioLogro(props) {
  return (
    <div>
      <NavbarUsuario />
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

export default UsuarioLogro;
