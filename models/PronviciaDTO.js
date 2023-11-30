const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../sequilize/sequilize');


const ProvinciaDTO=sequelize.define('provincias',{
    codigo:{
        type:DataTypes.STRING,
    },
    longitud1:{
        type:DataTypes.STRING
    },
    latitud1:{
        type:DataTypes.STRING,
    },
    longitud2:{
        type:DataTypes.STRING
    },
    longitud2:{
        type:DataTypes.STRING,
    },
    latitud2:{
        type:DataTypes.STRING
    },
    valor:{
        type:DataTypes.STRING,
    },
    provincia:{
        type:DataTypes.STRING
    },
},{
    timestamps: false,
})
module.exports=ProvinciaDTO