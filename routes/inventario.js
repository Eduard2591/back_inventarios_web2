const { Router } = require('express')

const { 
    getInventarios,
    createInventario,
    getInventarioByID,
    updateInventarioByID,
    deleteInventarioByID,
    uploadImageByID,
    getImageByID
} = require('../controllers/inventario')
const validarJwt = require('../middlewares/validateJwt')
const { isAdmin } = require('../middlewares/validateRol')

const router = Router()

router.get('/', validarJwt, getInventarios)

router.post('/', validarJwt, isAdmin, createInventario)

router.get('/:id', validarJwt, getInventarioByID)

router.put('/:id', validarJwt, isAdmin, updateInventarioByID)

router.delete('/:id', validarJwt, isAdmin, deleteInventarioByID)

/**
* Sube foto de inventario
*/
router.post('/:id/images', validarJwt, isAdmin, uploadImageByID);

/**
* get foto de inventario
*/
router.get('/:id/images', validarJwt, getImageByID);


module.exports = router