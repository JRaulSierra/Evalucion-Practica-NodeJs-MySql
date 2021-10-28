import React, { useEffect, useState } from "react";
import NavbarUsuario from "../NavbarUsuario/NavbarUsuario";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import useContx from "../Context/Context";

function UsuarioDesempeño(props) {
  const { user, usuario } = useContx();
  const [pos, setPos] = useState(0);
  const [count, setCount] = useState(1);
  const [area, setArea] = useState("");
  const [op, setOp] = useState([]);
  const [table, setTable] = useState([]);

  const actionHandler = async () => {
    let res = await Axios.post(`http://localhost:3001/createtDesempeno`, {
      id_usuarios: pos,
      id_area: area,
    });
  };

  useEffect(() => {
    async function axio() {
      let res = await Axios.get(`http://localhost:3001/getDesempeno`);
      let data = res.data;
      let ref = [];
      ref.push(res.data);
      let e = [];
      ref[0].map((t) => {
        e.push(
          <option value={t.id_area} key={t.id_area}>
            {t.tipo_area}
          </option>
        );
      });
      setOp(e);
    }
    axio();
  }, []);

  useEffect(() => {
    async function axio() {
      let usuarioPos = await Axios.get(
        `http://localhost:3001/getUsuario/${usuario}`
      );
      let res = await Axios.get(
        `http://localhost:3001/getDesempenoUsuario/${usuarioPos.data}`
      );
      setPos(usuarioPos.data);
      let ref = [];
      let data = res.data;
      let moment = [];
      ref.push(res.data);
      let e = [];
      ref[0].map(async (t) => {
        let descrip = await Axios.get(
          `http://localhost:3001/getDesempenoDescrip/${t.id_area}`
        );

        e.push(descrip.data[0]);
      });
      setTable(e);
      setCount(count + 1);
    }
    axio();
  }, []);

  const options = () => {
    return op;
  };

  const tableData = () => {
    console.log(table);
    return (
      <tr>
        <td>e</td>
        <td>e</td>
        <td>e</td>
      </tr>
    );
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
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
}

export default UsuarioDesempeño;
