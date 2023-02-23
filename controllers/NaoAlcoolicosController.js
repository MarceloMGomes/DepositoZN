//Importando as tabelas do banco de dados
const NaoAlcoolica = require('../models/NaoAlcoolica')



//Cadastro de Produtos
exports.cadastroget = function(req, res){
    res.render('cadastronaoalcoolico')
}

exports.cadastropost = (req, res) => {
    const nome = req.body.nome
    const tamanho = req.body.tamanho
    const preco = req.body.preco
    const tipo = req.body.tipo
    const imagem = req.body.imagem


    NaoAlcoolica.create ({nome, tamanho, preco, tipo, imagem})

    res.redirect('/')
}


//Select
exports.selectget = (req,res) => {
    const id = req.params.id

    NaoAlcoolica.findOne({
        raw: true,
        where: {
            id: id,
        },
    })
    .then((NaoAlcoolica) => {
        console.log(NaoAlcoolica)
        res.render('selectnaoalcoolicos', {NaoAlcoolica})
    })
    .catch((err) => console.log(err))
}


//Delete
exports.deletepost = (req,res) => {
    const id = req.params.id

    NaoAlcoolica.destroy({
        where: {
            id: id,
        },
    })
    .then((NaoAlcoolica) =>{
        res.redirect('/')
    })
    .catch((err) => console.log(err))
}


//Edit
exports.editget = function (req,res){
    const id = req.params.id

    NaoAlcoolica.findOne({
        raw: true,
        where: {
            id: id,
        },
    })
    .then((NaoAlcoolica) => {
        console.log(NaoAlcoolica)
        res.render('editnaoalcoolicos', {NaoAlcoolica})
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

    NaoAlcoolica.update(produtoData, {
        where: {
            id: id,
        },
    })
    .then((NaoAlcoolica) => {
        console.log(NaoAlcoolica)
        res.redirect('/')
    })
    .catch((err) => {
        console.log(err)
    })
}


//Mostrando as Bebidas
exports.exibirget = function(req, res){
    
    NaoAlcoolica.findAll({ raw: true})
    .then((NaoAlcoolica) =>{
        console.log(NaoAlcoolica)
        res.render('naoalcoolicas', {NaoAlcoolica})
    })
    
    .catch((err) => console.log(err))
}