import Axios from "axios";
import React, { useState } from "react";
import "./Login.css";
import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";
import Usuario from "../Usuario/Usuario";

function Login() {
  const [email, setemail] = useState("");
  const [pass, setPass] = useState("");

  const actionHandler = async () => {
    let res = await Axios.post("http://localhost:3001/usuarios", {
      user: email,
      pass: pass,
    });
    let data = res.data;
    if (data) {
      
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Exitoso",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
         
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o Contraseña incorrectas",
      });
      return;
    }
  };


  return (
    <div>
      <Navbar/>
      <div className="form">
        <div className="card">
          <div className="log">
            <h2>Inicio de sesion</h2>
            <div className="form-floating ">
              <input
                className="inputt form-control mb-3"
                type="usuario"
                name="usuario"
                placeholder="usuario"
                required
                onChange={(event) => {
                  setemail(event.target.value);
                }}
              />
              <input
                className="inputt form-control "
                type="password"
                name="pass"
                placeholder="Contraseña"
                required
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />
            </div>
            <input
              className="button"
              value="Log In"
              type="submit"
              onClick={actionHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
