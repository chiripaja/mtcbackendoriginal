const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../sequilize/sequilize');

const DistritoDTO=sequelize.define('distrito',{
    codigo:{
        type:DataTypes.STRING,
    },
    idprovincia:{
        type:DataTypes.STRING
    },
    longitud1:{
        type:DataTypes.STRING,
    },
    latitud1:{
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
    distrito:{
        type:DataTypes.STRING
    },
},{
    timestamps: false,
})
module.exports=DistritoDTO