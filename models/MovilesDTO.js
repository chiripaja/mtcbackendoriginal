const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequilize/sequilize');

const MovilesDTO = sequelize.define('cobertura_movil', {
    EMPRESA_OPERADORA: {
        type: DataTypes.STRING,
    },
    UBIGEO_CCPP: {
        type: DataTypes.STRING
    },
    UBIGEO_DISTRITO: {
        type: DataTypes.STRING,
    },
    DEPARTAMENTO: {
        type: DataTypes.STRING
    },
    PROVINCIA: {
        type: DataTypes.STRING,
    },
    DISTRITO: {
        type: DataTypes.STRING
    },
    CENTRO_POBLADO: {
        type: DataTypes.STRING,
    },
    ES2G: {
        type: DataTypes.STRING,
    },
    ES3G: {
        type: DataTypes.STRING,
    },
    ES4G: {
        type: DataTypes.STRING,
    },
    ES5G: {
        type: DataTypes.STRING,
    },
    VOZ: {
        type: DataTypes.STRING,
    },
    SMS: {
        type: DataTypes.STRING,
    },
    MMS: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'cobertura_movil',
    timestamps: false,
})
module.exports = MovilesDTO