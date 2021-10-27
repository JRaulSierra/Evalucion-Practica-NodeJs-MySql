const mysql = require("mysql");


const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Root1234!",
  database: "prueba-senacyt"
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
  });

const MainModel = {
    createOneUsuario:(nombre,apellido,usuario,contraseña,telefono,direccion,born,email)=>{
        return (nombre,apellido,usuario,contraseña,telefono,direccion,born,email)
    }
}


module.exports = { MainModel }