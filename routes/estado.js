const { Router } = require('express')
const {
    createEstado,
    getEstados,
    getEstadoByID,
    updateEstadoByID,
    deleteEstadoByID
} = require('../controllers/estado')

const router = Router();

//crear estado de equipo
router.post('/', createEstado)

//consulta estados de los equipo
router.get('/', getEstados)

//consulta estado de equipo por ID
router.get('/:id', getEstadoByID)

//Actualiza tipo de equipo por ID
router.put('/:id', updateEstadoByID)

//Elimina tipo de equipo por ID
router.delete('/:id', deleteEstadoByID)

module.exports = router