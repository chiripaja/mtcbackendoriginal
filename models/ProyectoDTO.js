const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../sequilize/sequilize');

const ProyectoDTO = sequelize.define('proyecto', {
    nomproyec: {
        type: DataTypes.STRING,
    },
    fechaini: {
        type: DataTypes.DATE
    },
    fechafin: {
        type: DataTypes.DATE,
    },
    descripcionproyec: {
        type: DataTypes.STRING
    },
    responsable: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'proyecto'
})
module.exports = ProyectoDTO