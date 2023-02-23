const { DataTypes } = require('sequelize') //Importando o Datatypes do módulo sequelize

const db = require('../db/conn') //Importando o db

const User = db.define('User', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
}

);

module.exports = User 