const { MainModel } = require("../models");

const mainController = {
  createOneUsuario: (req, res) => {
    const {nombre,apellido,usuario,contraseña,telefono,direccion,born,email} = req.body;

    MainModel.createOneUsuario(nombre,apellido,usuario,contraseña,telefono,direccion,born,email)
      .then((response) => {
        res.status(200).json({
          msg: response.rows,
          total: response.rowCount,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(200).json({
          msg: "ERR usuarios 😄",
        });
      });
  },
};

module.exports = { mainController };
