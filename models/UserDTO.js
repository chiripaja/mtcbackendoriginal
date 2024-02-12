const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../sequilize/sequilize');


const UserDTO=sequelize.define('usuario',{
    usuario:{
        type:DataTypes.STRING,
    },
    password:{
        type:DataTypes.STRING
    },
    nombre:{
        type:DataTypes.STRING
    }
}, {
    tableName: 'usuarios'
})

module.exports=UserDTO