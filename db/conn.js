const { Sequelize } = require('sequelize')

const sequelize = new Sequelize ('deposito', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = sequelize