//Importando as tabelas do Banco de Dados
const Alcoolica = require('../models/Alcoolica')


//Cadastrando Produtos
exports.cadastroget = function(req, res){
    res.render('cadastro')
}

exports.cadastropost = (req, res) => {
    const nome = req.body.nome
    const tamanho = req.body.tamanho
    const preco = req.body.preco
    const tipo = req.body.tipo
    const imagem = req.body.imagem


    Alcoolica.create ({nome, tamanho, preco, tipo, imagem})

    res.redirect('/')
}


//Select
exports.selectget = (req,res) => {
    const id = req.params.id

    Alcoolica.findOne({
        raw: true,
        where: {
            id: id,
        },
    })
    .then((Alcoolica) => {
        console.log(Alcoolica)
        res.render('select', {Alcoolica})
    })
    .catch((err) => console.log(err))
}


//Delete
exports.deletepost = (req,res) => {
    const id = req.params.id

    Alcoolica.destroy({
        where: {
            id: id,
        },
    })
    .then((Alcoolica) =>{
        res.redirect('/')
    })
    .catch((err) => console.log(err))
}


//Edit
exports.editget = function (req,res){
    const id = req.params.id

    Alcoolica.findOne({
        raw: true,
        where: {
            id: id,
        },
    })
    .then((Alcoolica) => {
        console.log(Alcoolica)
        res.render('edit', {Alcoolica})
    })
    .catch((err) => console.log(err))
}

//Continuação do Edit
exports.editpost = (req,res) => {
    const id = req.body.id
    const nome = req.body.nome
    const tamanho = req.body.tamanho
    const preco = req.body.preco
    const tipo = req.body.tipo
    const imagem = req.body.imagem

    const produtoData = {
        id,
        nome,
        tamanho,
        preco,
        tipo,
        imagem,
    }

    Alcoolica.update(produtoData, {
        where: {
            id: id,
        },
    })
    .then((Alcoolica) => {
        console.log(Alcoolica)
        res.redirect('/')
    })
    .catch((err) => {
        console.log(err)
    })
}


//Mostrando as Bebidas
exports.exibirget = function(req, res){
    
    Alcoolica.findAll({ raw: true})
    .then((Alcoolica) =>{
        console.log(Alcoolica)
        res.render('alcoolicas', {Alcoolica})
    })
    
    .catch((err) => console.log(err))
}