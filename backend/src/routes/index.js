//import modules
const express = require('express')
const { mainController } = require('../controllers')


//utilización del metodo router para rutas del proyecto
const router = express.Router()

// Autorización
// router.post('/login', mainController.login)

// Usuarios
// router.get('/usuarios', mainController.getAllUsuarios)
// router.get('/usuarios/:id', mainController.getOneUsuario)
 router.post('/createUsuario', mainController.createOneUsuario)



module.exports = { router }