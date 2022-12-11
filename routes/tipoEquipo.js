const { Router } = require('express')
const {
    createTipoEquipo,
    getTiposEquipo,
    getTipoEquipoByID,
    updateTipoEquipoByID,
    deleteTipoEquipoByID
} = require('../controllers/tipoEquipo')
const validarJwt = require('../middlewares/validateJwt')
const { isAdmin } = require('../middlewares/validateRol')

const router = Router();


//crear un tipo de equipo
router.post('/', validarJwt, isAdmin, createTipoEquipo)

//consulta todos los tipos de equipo
router.get('/', validarJwt, getTiposEquipo)

//consulta un tipo de equipo por ID
router.get('/:id', validarJwt, getTipoEquipoByID)

//Actualiza tipo de equipo por ID
router.put('/:id', validarJwt, isAdmin, updateTipoEquipoByID)

//Elimina tipo de equipo por ID
router.delete('/:id', validarJwt, isAdmin, deleteTipoEquipoByID)

module.exports = router

