const express = require('express')
require('dotenv').config();
const cors=require('cors');
const { sequelize } = require('./sequilize/sequilize')
const app = express()



//defecto
app.use(express.static('public'))
app.use(cors())
//lectura y parseo de body
app.use(express.json())

//prueba conexion
const pruebaConec=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Coneccion correcta.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
pruebaConec()

//rutas
app.use('/api/user',require('./router/user'))
app.use('/api/poblado',require('./router/poblado'))
app.use('/api/distrito',require('./router/distrito'))
app.use('/api/provincia',require('./router/provincia'))

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`) 
})