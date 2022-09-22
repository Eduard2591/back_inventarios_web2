const TipoEquipo = require('../models/tipoEquipo')
const { request, response } = require('express')
const tipoEquipo = require('../models/tipoEquipo')

//crear un tipo de equipo
const createTipoEquipo = async (req = request, res = response) => { 
    //console.log(req.body)
    const nombre = (req.body.nombre) 
    ?req.body.nombre.toUpperCase()
    : '';
    const tipoEquipoBD = await TipoEquipo.findOne({ nombre })
    if(tipoEquipoBD){
        return res.status(400).json({msg: 'Ya Exite Nombre'})
    }
    const datos = {
        nombre
    }
    const tipoEquipo = new TipoEquipo(datos)
    console.log(tipoEquipo);
    await tipoEquipo.save()
    res.status(201).json(tipoEquipo)

}

//consulta todos los tipos de equipo
const getTiposEquipo = () => {

}

//consulta un tipo de equipo por ID
const getTipoEquipoByID = () => {
    
}

//Actualiza tipo de equipo por ID
const updateTipoEquipoByID = () => {
    
}

//Elimina tipo de equipo por ID
const deleteTipoEquipoByID = () => {
    
}

module.exports = {
    createTipoEquipo,
    getTiposEquipo,
    getTipoEquipoByID,
    updateTipoEquipoByID,
    deleteTipoEquipoByID
}