const mongoose = require('mongoose')

const mongoConn = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('conexion OK con Mongo');
    }catch(e){
        console.log('Error de Conexion', e);
        throw new Error('Error de conexion');
    }
}

module.exports = { mongoConn }