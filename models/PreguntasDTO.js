const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../sequilize/sequilize');

const PreguntasDTO=sequelize.define('preguntas_enc',{
    nompreg:{
        type:DataTypes.STRING,
    }
},{
    tableName: 'preguntas_enc',
    timestamps: false,
})
module.exports=PreguntasDTO