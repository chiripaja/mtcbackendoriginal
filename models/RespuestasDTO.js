const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequilize/sequilize');

const RespuestasDTO=sequelize.define('respuesta',{
    respprov:{
        type:DataTypes.STRING,
    },
    resdistrito:{
        type:DataTypes.STRING,
    },
    respccpp:{
        type:DataTypes.STRING,
    },
    respiiee:{
        type:DataTypes.STRING,
    },
    resinternet:{
        type:DataTypes.STRING,
    },
    ressproveedor:{
        type:DataTypes.STRING,
    },
    resvelocidad:{
        type:DataTypes.STRING,
    },
    respermite:{
        type:DataTypes.STRING,
    },
    resproblem:{
        type:DataTypes.STRING,
    },
    resresponsable:{
        type:DataTypes.STRING,
    },
    rescosto:{
        type:DataTypes.STRING,
    },
    resnomape:{
        type:DataTypes.STRING,
    },
    ressexo:{
        type:DataTypes.STRING,
    },
    resnumcelular:{
        type:DataTypes.STRING,
    },
    rescorreo:{
        type:DataTypes.STRING,
    }
},{
    tableName: 'respuesta'
})
module.exports=RespuestasDTO