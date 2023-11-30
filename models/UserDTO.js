const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../sequilize/sequilize');


const UserDTO=sequelize.define('Usuario',{
    usuario:{
        type:DataTypes.STRING,
    },
    password:{
        type:DataTypes.STRING
    }
})

module.exports=UserDTO