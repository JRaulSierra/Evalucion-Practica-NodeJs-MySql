//import modules
const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Root1234!",
  database: "prueba-senacyt",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});

//utilización del metodo router para rutas del proyecto
const router = express.Router();

router.get("allusuarios", function (req, res) {});

// Usuarios
router.post("/usuarios", function (req, res) {
  const { user, pass } = req.body;
  db.query(
    `SELECT contraseña FROM usuarios WHERE usuario LIKE "%${user}%"`,
    (err, row) => {
      if (err) throw err;
      var data = [];
      if (row[0] == undefined) {
        console.log("no funciono");
        res.send(JSON.stringify(false));
        return;
      }
      data.push(row[0].contraseña);
      if (data[0] === pass) {
        res.send(JSON.stringify(true));
      } else {
        res.send(JSON.stringify(false));
      }
    }
  );
});

router.post("/updateUsuario", function (req, res) {
  const {
    nombre,
    apellidos,
    usuario,
    contraseña,
    telefono,
    direccion,
    born,
    email,
    id,
  } = req.body;

  const data = {
    nombre: nombre,
    apellido: apellidos,
    telefono: telefono,
    direccion: direccion,
    fecha_nacimiento: born,
    usuario: usuario,
    contraseña: contraseña,
    email: email,
  };
  if (data.nombre !== "") {
    db.query(
      `UPDATE usuarios set nombre ="${data.nombre}"  WHERE id_usuarios LIKE "%${id}%"`
    );
  }
  if (data.apellido !== "") {
    db.query(
      `UPDATE usuarios set apellido ="${data.apellido}"  WHERE id_usuarios LIKE "%${id}%"`
    );
  }
  if (data.telefono !== "") {
    db.query(
      `UPDATE usuarios set telefono ="${data.telefono}"  WHERE id_usuarios LIKE "%${id}%"`
    );
  }
  if (data.direccion !== "") {
    db.query(
      `UPDATE usuarios set direccion ="${data.direccion}"  WHERE id_usuarios LIKE "%${id}%"`
    );
  }
  if (data.fecha_nacimiento !== "") {
    db.query(
      `UPDATE usuarios set fecha_nacimiento ="${data.fecha_nacimiento}"  WHERE id_usuarios LIKE "%${id}%"`
    );
  }
  if (data.usuario !== "") {
    db.query(
      `UPDATE usuarios set usuario ="${data.usuario}"  WHERE id_usuarios LIKE "%${id}%"`
    );
  }
  if (data.nombre !== "") {
    db.query(
      `UPDATE usuarios set contraseña ="${data.nombre}"  WHERE id_usuarios LIKE "%${id}%"`
    );
  }
  if (data.email !== "") {
    db.query(
      `UPDATE usuarios set email ="${data.email}"  WHERE id_usuarios LIKE "%${id}%"`
    );
  }
  res.send(JSON.stringify("TodoCorrecto"));
});

router.get("/getUsuario/:id", function (req, res) {
  const { id } = req.params;
  const user = id;
  db.query(
    `SELECT id_usuarios FROM usuarios WHERE usuario LIKE "%${user}%"`,
    (err, row) => {
      if (err) throw err;
      console.log(user);
      res.send(JSON.stringify(row[0].id_usuarios));
    }
  );
});

router.post("/createUsuario", function (req, res) {
  const {
    nombre,
    apellidos,
    usuario,
    contraseña,
    telefono,
    direccion,
    born,
    email,
  } = req.body;
  db.query(
    "INSERT INTO usuarios (nombre,apellido,usuario,contraseña,telefono,direccion,fecha_nacimiento,email) VALUES (?,?,?,?,?,?,?,?)",
    [nombre, apellidos, usuario, contraseña, telefono, direccion, born, email],
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    }
  );
});

module.exports = { router };
