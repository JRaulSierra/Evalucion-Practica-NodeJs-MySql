import React, { useEffect, useState } from "react";
import NavbarUsuario from "../NavbarUsuario/NavbarUsuario";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Axios from "axios";

function UsuarioDesempeño(props) {
  const [area, setArea] = useState("");
  const [op, setOp] = useState([]);
  const [count,setCount] = useState(0)
  const actionHandler = () => {
    console.log(area);
  };

  useEffect(() => {
    async function axio() {
      let res = await Axios.get(`http://localhost:3001/getDesempeno`);
      let data = res.data;
      setOp(data);
    }
    axio();
  }, []);

  const options = () => {
    op.map((dato) => {
      if (op!==undefined) {
        return <option value="1">aaaa</option>;
      }
    });
    
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
              {options()}
            </Form.Select>
          </FloatingLabel>
          <Button variant="success" onClick={actionHandler}>
            Agregar
          </Button>
        </div>
        <Table striped bordered hover size="sm">
          <caption> Agregue sus areas de desempeño. </caption>
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

export default UsuarioDesempeño;
