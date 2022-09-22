const express = require('express');

const app = express();
//TODO: importar y haniliartar los cors

//importacion de routes
const tipoEquipo = require('./routes/tipoEquipo')

//middlewares
//TODO: middlewares para urlencoded
app.use(express.json())
//TODO: middlewares de subida de foto
//TODO: middlewares de cors

app.use('/api/tipoequipos', tipoEquipo)

module.exports = app;