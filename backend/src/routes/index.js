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

router.get("allusuarios",function (req,res) {
    
})

// Usuarios
router.post("/usuarios", function (req, res) {
  const { user, pass } = req.body;
  db.query(
    `SELECT contraseña FROM usuarios WHERE usuario LIKE "%${user}%"`,
    (err, row) => {
      if (err) throw err;
      var data = [];
      if (row[0]==undefined) {
        console.log("no funciono");
        res.send(JSON.stringify(false));
        return
      }
      data.push(row[0].contraseña);
      if (data[0]===pass) {
        res.send(JSON.stringify(true));
      }else{
        res.send(JSON.stringify(false)); 
      }
    }
  );
});
// router.get('/usuarios/:id', mainController.getOneUsuario)
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
