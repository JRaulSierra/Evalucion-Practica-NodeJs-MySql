import React, { useEffect, useState } from "react";
import "./Usuario.css";
import Axios from "axios";
import { useParams } from "react-router";
import NavbarUsuario from "../NavbarUsuario/NavbarUsuario";

function Usuario(props) {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [direccion, setDireccion] = useState("");
  const [born, setBorn] = useState(0);
  const [email, setEmail] = useState("");
  const [id, setId] = useState(0);

  const user = useParams();
  let val = user.id;

  useEffect(() => {
    async function axio() {
      let res = await Axios.get(`http://localhost:3001/getUsuario/${val}`);
      setId(res.data);
    }
    axio();
  }, []);

  const actionListener = async () => {
    let res = await Axios.post("http://localhost:3001/updateUsuario", {
      nombre: nombre,
      apellidos: apellidos,
      usuario: usuario,
      contraseña: contraseña,
      telefono: telefono,
      direccion: direccion,
      born: born,
      email: email,
      id: id,
    });
    let data = res.data;
    console.log(data)
  };

  
  return (
    <div>
      <div>
        <NavbarUsuario/>
      </div>
      <div className="back">
        <h1>Modificar datos Del usuario</h1>
        <h6 className="text">
          Ingrese solamente los datos que desea modificar, si los deja en blanco
          no se modificaran.
        </h6>
        <div>
          <div className="divv">
            <label className="text">Nombres</label>
            <input
              type="text"
              className="input"
              name="name"
              required
              onChange={(event) => {
                setNombre(event.target.value);
              }}
            />
            <label className="text">Apellidos</label>
            <input
              type="text"
              className="input"
              name="lastname"
              required
              onChange={(event) => {
                setApellidos(event.target.value);
              }}
            />
          </div>
          <div className="divv">
            <label className="text">Usuario</label>
            <input
              type="text"
              className="input"
              name="usuario"
              required
              onChange={(event) => {
                setUsuario(event.target.value);
              }}
            />
            <label className="text">Contraseña</label>
            <input
              type="text"
              className="input"
              name="pass"
              required
              onChange={(event) => {
                setContraseña(event.target.value);
              }}
            />
          </div>
          <div className="divv">
            <label className="text">Telefono</label>
            <input
              type="number"
              className="input"
              name="tel"
              required
              onChange={(event) => {
                setTelefono(event.target.value);
              }}
            />
            <label className="text">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="divv">
            <label className="text">Fecha de nacimiento</label>
            <input
              type="date"
              className="input"
              name="birth"
              required
              onChange={(event) => {
                setBorn(event.target.value);
              }}
            />
            <label className="text">Dirección</label>
            <textarea
              name="direccion"
              className="input"
              required
              onChange={(event) => {
                setDireccion(event.target.value);
              }}
            />
          </div>
          <input
            className="button"
            type="submit"
            value="Actualizar"
            onClick={actionListener}
          />
        </div>
      </div>
    </div>
  );
}

export default Usuario;
