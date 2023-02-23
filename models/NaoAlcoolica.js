const { DataTypes } = require('sequelize') //Importando o Datatypes do módulo sequelize

const db = require('../db/conn') //Importando o db

const NaoAlcoolica = db.define('NaoAlcoolica', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    tamanho: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    preco: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
}

)

module.exports = NaoAlcoolica