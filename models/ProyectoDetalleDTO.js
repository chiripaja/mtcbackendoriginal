const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../sequilize/sequilize');

const ProyectoDetalleDTO = sequelize.define('proyectodetalle', {
    idccpp: {
        type: DataTypes.STRING,
    },
    idproyecto: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'proyectodetalle'
})
module.exports = ProyectoDetalleDTO