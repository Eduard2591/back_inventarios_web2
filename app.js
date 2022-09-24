const express = require('express');

const app = express();
//TODO: importar y haniliartar los cors

//importacion de routes
const tipoEquipo = require('./routes/tipoEquipo')
const estado = require('./routes/estado')
const marca = require('./routes/marca')
const usuario = require('./routes/usuario');
const inventario = require('./models/inventario');
//const inventario = require('./routes/inventario')

//middlewares
//TODO: middlewares para urlencoded
app.use(express.json())
//TODO: middlewares de subida de foto
//TODO: middlewares de cors

app.use('/api/tipoequipos', tipoEquipo)
app.use('/api/estados', estado)
app.use('/api/marcas', marca)
app.use('/api/usuarios', usuario)
//app.use('/api/inventarios', inventario)


module.exports = app;