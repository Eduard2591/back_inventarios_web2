const { Router } = require('express')
const {
    createEstado,
    getEstados,
    getEstadoByID,
    updateEstadoByID,
    deleteEstadoByID
} = require('../controllers/estado')
const validarJwt = require('../middlewares/validateJwt')
const { isAdmin } = require('../middlewares/validateRol')

const router = Router();

//crear estado de equipo
router.post('/', validarJwt, isAdmin, createEstado)

//consulta estados de los equipo
router.get('/', validarJwt, getEstados)

//consulta estado de equipo por ID
router.get('/:id', validarJwt, getEstadoByID)

//Actualiza tipo de equipo por ID
router.put('/:id', validarJwt, isAdmin, updateEstadoByID)

//Elimina tipo de equipo por ID
router.delete('/:id', validarJwt, isAdmin, deleteEstadoByID)

module.exports = router