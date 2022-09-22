const { Router } = require('express')
const {
    createTipoEquipo,
    getTiposEquipo,
    getTipoEquipoByID,
    updateTipoEquipoByID,
    deleteTipoEquipoByID
} = require('../controllers/tipoEquipo')

const router = Router();


//crear un tipo de equipo
router.post('/', createTipoEquipo)

//consulta todos los tipos de equipo
router.get('/', getTiposEquipo)

//consulta un tipo de equipo por ID
router.get('/:id', getTipoEquipoByID)

//Actualiza tipo de equipo por ID
router.put('/:id', updateTipoEquipoByID)

//Elimina tipo de equipo por ID
router.delete('/:id', deleteTipoEquipoByID)

module.exports = router

