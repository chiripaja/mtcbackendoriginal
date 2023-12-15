const express = require('express')
require('dotenv').config();
const cors=require('cors');
const { sequelize } = require('./sequilize/sequilize')
const app = express()
const path = require('path');



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
app.use('/api/respuesta/',require('./router/respuesta'))
app.use('/api/colegio/',require('./router/colegio'))
app.use('/api/proyecto/',require('./router/proyecto'))
app.use('/api/proyectoDetalle/',require('./router/proyectoDetalle'))
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`) 
})


app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});