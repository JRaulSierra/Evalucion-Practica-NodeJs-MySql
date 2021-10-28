import Axios from "axios";
import React, { useState } from "react";
import "./Login.css";
import Swal from "sweetalert2";

import useContx from "../Context/Context";

import { Link } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import NavbarHome from "../Navbar/Navbar";

function Login() {
  const [email, setemail] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { t } = useContx();

  const actionHandler = async () => {
    t(email);
    let res = await Axios.post("http://localhost:3001/usuarios", {
      user: email,
      pass: pass,
    });
    let data = res.data;
    if (data) {
      handleShow();
      console.log(show);
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
    <>
    <div>
      <NavbarHome />
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
    <Modal size="sm" show={show} onHide={handleClose}>
          <Modal.Dialog>
            <Modal.Header >
              <Modal.Title>Yeiiiiiiii! Ingreso Exitoso</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button variant="primary"><Link to={`/${email}`} >
                Ingresar
              </Link></Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
    </>
  );
}

export default Login;
