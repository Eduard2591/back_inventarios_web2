const { Router } = require('express')
const {
    createUsuario,
    getUsuarios,
    getUsuarioByID,
    updateUsuarioByID,
    deleteUsuarioByID
}= require('../controllers/usuario')
const validarJwt = require('../middlewares/validateJwt')
const { isAdmin } = require('../middlewares/validateRol')

const router = Router();


//crear un tipo de equipo
router.post('/', validarJwt, isAdmin, createUsuario)

//consulta todos los tipos de equipo
router.get('/', validarJwt, getUsuarios)

//consulta un tipo de equipo por ID
router.get('/:id', validarJwt, getUsuarioByID)

//Actualiza tipo de equipo por ID
router.put('/:id', validarJwt, isAdmin, updateUsuarioByID)

//Elimina tipo de equipo por ID
router.delete('/:id', validarJwt, isAdmin, deleteUsuarioByID)

module.exports = router



