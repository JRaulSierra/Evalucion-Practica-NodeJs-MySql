import React, { useState } from "react";
import "./Register.css";
import Axios from "axios";

function Register() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [direccion, setDireccion] = useState("");
  const [born, setBorn] = useState(0);
  const [email, setEmail] = useState("");

  const actionListener = () => {
    alert(apellidos);
    Axios.post("http://localhost:3001/createUsuario", {
      nombre: nombre,
      apellidos: apellidos,
      usuario: usuario,
      contraseña: contraseña,
      telefono: telefono,
      direccion: direccion,
      born: born,
      email: email,
    })
      .then((res) => {
        console.log("creacion completa");
      })
      .catch((err) => {
        console.log("no se pudo crear");
      });
  };

  return (
    // agregar un onsubmit
    <form className="form">
      <div className="title">Registro</div>
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
        value="Registrar"
        onClick={actionListener}
      />
    </form>
  );
}

export default Register;
