const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequilize/sequilize');

const RespuestasDTO=sequelize.define('respuestas',{
    respuesta:{
        type:DataTypes.STRING,
    },
    preguntasid:{
        type:DataTypes.INTEGER,
    }
},{
    tableName: 'respuestas'
})
module.exports=RespuestasDTO