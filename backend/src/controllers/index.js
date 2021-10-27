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

const mainController = {
  createOneUsuario: (req, res) => {
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
    console.log(apellidos)
    db.query(
      "INSERT INTO usuarios (nombre,apellido,usuario,contraseña,telefono,direccion,fecha_nacimiento,email) VALUES (?,?,?,?,?,?,?,?)",
      [nombre, apellidos, usuario, contraseña, telefono, direccion, born, email],
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("values incerted");
        }
      }
    );
  },
};

module.exports = { mainController };
