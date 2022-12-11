const express = require('express');

const app = express();

const cors = require('cors')
const fileUpload = require('express-fileupload')

//importacion de routes
const tipoEquipo = require('./routes/tipoEquipo')
const estado = require('./routes/estado')
const marca = require('./routes/marca')
const usuario = require('./routes/usuario');
const inventario = require('./routes/inventario');

// Módulo Autenticación y autorización
const auth = require('./routes/auth');

//middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))
app.use(cors ({
    origin: '*'
}))

app.use('/api/tipoequipos', tipoEquipo)
app.use('/api/estados', estado)
app.use('/api/marcas', marca)
app.use('/api/usuarios', usuario)
app.use('/api/inventarios', inventario)

// Módulo Autenticación y autorización
app.use('/api/auth', auth)

app.get("*", (req, res) => {
    return res.status(404).json({
        msj: 'pagina no encontrada'
    });
});

module.exports = app;