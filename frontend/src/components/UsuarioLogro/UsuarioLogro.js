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
          <Form>
            <Form.Control type="text" placeholder="año" />
            
            <Form.Control type="text" placeholder="tipo de titulo" />
            <Form.Control type="text" placeholder="institución" />
            
            <Form.Control type="text" placeholder="titulo" />
            <Form.Control type="text" placeholder="descripción" />
            
            
          </Form>
          <Button variant="success" onClick={actionHandler}>
            Agregar
          </Button>
        </div>
        <Table striped bordered hover size="sm">
          <caption> Agregue sus Logros Academicos. </caption>
          <thead>
            <tr>
              <th>#</th>
              <th>año</th>
              <th>tipo de titulo</th>
              <th>institución</th>
              <th>titulo</th>
              <th>descripción</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>1</td>
              <td>#009846</td>
              <td>
                ghjghjghjkggjkghj hggggggggggggggg gggggggggggggggggg
                gggggggggggggggggggg
              </td>
            </tr> */}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default UsuarioLogro;
