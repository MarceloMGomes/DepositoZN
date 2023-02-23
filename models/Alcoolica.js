const { DataTypes } = require('sequelize') //Importando o Datatypes do módulo sequelize
/* const Produtos = require('./Produtos') */
const db = require('../db/conn') //Importando o db

const Alcoolica = db.define('Alcoolica', {
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

module.exports = Alcoolica