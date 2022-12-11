const app = require('./app')
const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()

app.set('port', process.env.PORT || 4000)

const conn = mongoConn()

app.listen(app.get('port'), () => {
    console.log(`El servidor arranca por el puerto ${app.get('port')}`);
});