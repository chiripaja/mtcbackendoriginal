const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../sequilize/sequilize');

const ColegioDTO = sequelize.define('institucioneseducativas', {
    CodigoModular: {
        type: DataTypes.STRING,
    },
    CodigoLocal: {
        type: DataTypes.STRING
    },
    NombreIE: {
        type: DataTypes.STRING,
    },
    NivelModalidad: {
        type: DataTypes.STRING
    },
    Forma: {
        type: DataTypes.STRING,
    },
    Genero: {
        type: DataTypes.STRING
    },
    TipoGestion: {
        type: DataTypes.STRING,
    },
    GestionDependencia: {
        type: DataTypes.STRING
    },
    Telefono: {
        type: DataTypes.STRING,
    },
    PaginaWeb: {
        type: DataTypes.STRING
    },
    Estado: {
        type: DataTypes.STRING,
    },
    DireccionIE: {
        type: DataTypes.STRING
    },
    Localidad: {
        type: DataTypes.STRING,
    },
    CentroPoblado: {
        type: DataTypes.STRING
    },
    AreaGeografica: {
        type: DataTypes.STRING,
    },
    DepProvDist: {
        type: DataTypes.STRING
    },
    Departamento: {
        type: DataTypes.STRING,
    },
    Provincia: {
        type: DataTypes.STRING
    },
    Distrito: {
        type: DataTypes.STRING,
    },
    CodigoUbicacionGeografica: {
        type: DataTypes.STRING
    },
    CodigoDREUGEL: {
        type: DataTypes.STRING,
    },
    NombreDREUGEL: {
        type: DataTypes.STRING
    },
    TipoPrograma: {
        type: DataTypes.STRING,
    },
    Turno: {
        type: DataTypes.STRING
    },


    CaracteristicaCensoEduc: {
        type: DataTypes.STRING,
    },
    AlumnosCensoEduc: {
        type: DataTypes.STRING
    },
    DocentesCensoEduc: {
        type: DataTypes.STRING,
    },
    SeccionesCensoEduc: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'institucioneseducativas',
    timestamps: false,
})
module.exports = ColegioDTO