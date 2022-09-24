const Estado = require('../models/estado')
const { request, response } = require('express')

//crear un estado de equipo
const createEstado = async (req = request, res = response) => { 
    try{
        //console.log(req.body)
        const nombre = (req.body.nombre) 
        ? req.body.nombre.toUpperCase()
        : '';
        const estadoBD = await Estado.findOne({ nombre })
        if(estadoBD){
            return res.status(400).json({msg: 'Ya existe nombre'})
        }
        const datos = {
            nombre
        }
        const estado = new Estado(datos)
        console.log(estado)
        await estado.save()
        res.status(201).json(estado)
    }catch(e){
      console.log(e)
      return res.status(500).json({ msg: e })
    }

}

//consulta todos los estados
const getEstados = async (req = request, res = response) => {
    try {
        console.log(req.query);
        const estado = req.query.estado
        const query = {estado: estado}
        const estadosBD = await Estado.find(query)
        return res.json(estadosBD)
    }catch(e){
        console.log(e);
        return res.status(500).json({msg: e})
    }
}

//consulta estado por ID
const getEstadoByID = async (req = request, res = response) => {
    try {
        console.log(req.params)
        const id = req.params.id
        const query = {_id:id}
        const estadoBD = await Estado.findOne(query)
        return res.json(estadoBD)
    }catch(e){
        console.log(e);
        return res.status(500).json({msg: e})
    }
}

//Actualiza estado por ID
const updateEstadoByID = async (req = request, res = response) => {
    try {
        console.log(req.body);
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(data);
        const estado = await Estado.findByIdAndUpdate(id, data, {new: true})
        return res.json(estado)
    }catch(e){
        console.log(e);
        return res.status(500).json({msg: e})
    }
}

//Elimina estado por ID
const deleteEstadoByID = async (req = request, res = response) => {
    try {
        console.log(req.params)
        const id = req.params.id
        const estadoBD = await Estado.findById(id)
        if(!estadoBD){
            return res.status(404).json({msg: 'No existe el estado'})
        }
        await Estado.findByIdAndDelete(id)
        return res.status(204).json({})
    }catch(e){
        console.log(e);
        return res.status(500).json({msg: e})
    }
}

module.exports = {
    createEstado,
    getEstados,
    getEstadoByID,
    updateEstadoByID,
    deleteEstadoByID
}