import React, { useState } from "react";
import NavbarUsuario from "../NavbarUsuario/NavbarUsuario";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function UsuarioLogro(props) {
  const [area, setArea] = useState("");
  const actionHandler = () => {
    console.log(area);
  };
  return (
    <div>
      <NavbarUsuario />
      <div className="back">
        <div>
          <FloatingLabel
            controlId="floatingSelect"
            label="Seleccione area de desempeño"
          >
            <Form.Select
              aria-label="Floating label select example"
              onChange={(event) => {
                setArea(event.target.value);
              }}
            >
              <option></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
          <Button variant="success" onClick={actionHandler}>
            Agregar
          </Button>
        </div>
        <Table striped bordered hover size="sm">
          <caption> Agregue sus Logros Academicos. </caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Area de Desempeño</th>
              <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>#009846</td>
              <td>
                ghjghjghjkggjkghj hggggggggggggggg gggggggggggggggggg
                gggggggggggggggggggg
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default UsuarioLogro;
