const { Schema, model } = require("mongoose");

const InventarioSchema = Schema({
    serial: {
        type: String,
        required: [true, 'Serial Requerido'],
        unique: [true, "Equipo en Uso"]
    },
    modelo: {
        type: String,
        required: [true, 'Modelo Requerido']
    },
    descripcion:{
        type: String
    },
    foto: {
        type: String
    },
    color: {
        type: String
    },
    fechaCompra: {
        type: Date,
        default: new Date
    },
    precio: {
        type: Number
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    marca: {
        type: Schema.Types.ObjectId,
        ref: 'Marca',
        required: true
    },
    estado: {
        type: Schema.Types.ObjectId,
        ref: 'Estado',
        required: true
    },
    tipoEquipo: {
        type: Schema.Types.ObjectId,
        ref: 'TipoEquipo',
        required: true
    }
})
 
module.exports = model('Inventario', InventarioSchema)

