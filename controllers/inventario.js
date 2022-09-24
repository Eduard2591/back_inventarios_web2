const Inventario = require("../models/inventario")
const { request, response, query } = require('express')
const Usuario = require("../models/usuario") 
const Marca = require("../models/marca")

//consulta todos los inventarios 
const getInventarios = async (req = request, res = response) => { 
    try{
        const inventarios = await Inventario.find()
        .populate({
            path: 'usuario',
            match: { estado: true}
        })
        .populate({
            path: 'marca',
            match: { estado: true}
        })
        .populate({
            path: 'estado'
        })
        .populate({
            path: 'tipoEquipo'
        })
        //TODO: hacer el Join
        res.json(inventarios)
    }catch(e){
        console.log(e);
        return res.status(500).json({
            error: 'Error' + e
        })
    }
}

//guardar Inventario
const createInventario = async (req = request, res = response) => {
    try{
        const data = req.body;
        const { usuario, marca } = data;
        //validamos si  usuario está activo
        const usuarioBD = await Usuario.findOne({
            _id: usuario._id, estaso: true
        }) 
        console.log('usuario retornado', usuarioBD)
        if(!usuarioBD){
            return res.status(400).json({
                msj: "No Exite Usuario"
            })
        }
        //validamos si Marca está activo
        const marcaBD = await Marca.findOne({
            _id: marca._id, estaso: true
        }) 
        if(!marcaBD){
            return res.status(400).json({
                msj: "No Exite Marca"
            })
        }

        const inventario = new Inventario(data);
        //console.log(inventario);
        await inventario.save()
        res.status(201).json(inventario)
    }catch(e){
        console.log(e);
        return res.status(500).json({ msj: 'Error' })
    } 
 }

// consulta inventario por ID
const getInventarioByID = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const inventarioBD = await Inventario.findById(id)
        .populate({
            path: 'usuario',
            match: {estado: true}
        })
        res.json(inventarioBD)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'})
    }
}

//Actualiza inventario por ID
const updateInventarioByID = async (req = request, res = response) => {
    try{
        const { id } = req.params
        const data = req.body
        const inventario  = await Inventario.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(inventario)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }
}

//borra Inventario por ID
const deleteInventarioByID = async (req = request, res = response) => {
    try {
        console.log(req.params)
        const id = req.params.id
        const inventarioBD = await Inventario.findById(id)
        if(!inventarioBD){
            return res.status(404).json({msg: 'No existe el estado'})
        }
        await Inventario.findByIdAndDelete(id)
        return res.status(204).json({})
    }catch(e){
        console.log(e);
        return res.status(500).json({msg: e})
    }
}

// subir foto por ID

//consultat foto 



module.exports = {
    getInventarios,
    createInventario,
    getInventarioByID,
    updateInventarioByID,
    deleteInventarioByID
}
