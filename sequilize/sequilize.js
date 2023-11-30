const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mapa', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports={
    sequelize
}