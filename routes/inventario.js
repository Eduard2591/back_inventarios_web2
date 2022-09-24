const { Router } = require('express')

const { 
    getInventarios,
    createInventario,
    getInventarioByID,
    updateInventarioByID,
    deleteInventarioByID
} = require('../controllers/inventario')
const { route } = require('./tipoEquipo')

const router = Router()

router.get('/', getInventarios)

router.post('/', createInventario)

router.get('/:id', getInventarioByID)

router.put('/:id', updateInventarioByID)

router.delete('/:id', deleteInventarioByID)

module.exports = router