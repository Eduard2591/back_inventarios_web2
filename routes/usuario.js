const { Router } = require('express')
const {
    createUsuario,
    getUsuarios,
    getUsuarioByID,
    updateUsuarioByID,
    deleteUsuarioByID
}= require('../controllers/usuario')

const router = Router();


//crear un tipo de equipo
router.post('/', createUsuario)

//consulta todos los tipos de equipo
router.get('/', getUsuarios)

//consulta un tipo de equipo por ID
router.get('/:id', getUsuarioByID)

//Actualiza tipo de equipo por ID
router.put('/:id', updateUsuarioByID)

//Elimina tipo de equipo por ID
router.delete('/:id', deleteUsuarioByID)

module.exports = router



