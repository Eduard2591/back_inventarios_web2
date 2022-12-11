const { Router } = require('express')
const { 
    createMarca, 
    getMarcas, 
    getMarcaByID,
    updateMarcaByID,
    deleteMarcaByID
}= require('../controllers/marca')
const validarJwt = require('../middlewares/validateJwt')
const { isAdmin } = require('../middlewares/validateRol')

const router = Router()

/**
 * Crea una marca
 */
router.post('/', validarJwt, isAdmin, createMarca)

/**
 * Consulta todas las marcas
 */
router.get('/', validarJwt, getMarcas)

/**
 *  Consulta una marca por su ID
 */
router.get('/:id', validarJwt, getMarcaByID)

/**
 * Actualiza una marca por su ID
 */
router.put('/:id',  validarJwt, isAdmin, updateMarcaByID)

/**
 * Borra una marca por su ID
 */
router.delete('/:id', validarJwt, isAdmin, deleteMarcaByID)

module.exports = router
