const express = require('express')
const {engine} = require('express-handlebars')
const session = require("express-session")
const FileStore = require("session-file-store")(session)
const flash = require("express-flash")
const app = express()



const conn = require('./db/conn') //Importando o db de outra pasta

//Importando as tabelas do banco de dados
const Alcoolica = require('./models/Alcoolica')
const NaoAlcoolica = require('./models/NaoAlcoolica')
const User = require('./models/Users')


//Importando o Controller
const alcoolicosController = require('./controllers/AlcoolicosController')
const naoAlcoolicosController = require('./controllers/NaoAlcoolicosController')
const exibicaoController = require('./controllers/ExibicaoController')


const { userInfo } = require('os')
const CadastroUsuario = require('./controllers/UsersController')

app.use(express.static('public')) //Importando o CSS

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({
    extended: true    
}))


//middleware
app.use(
  session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 3600000,
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    },
  }),
)


//Flash messages
app.use(flash());

app.use((req,res, next) =>{
  console.log(req.session.userid)
  
  if(req.session.userid){
    res.locals.session = req.session
  }
  next()
})


//Rotas das Páginas
app.get('/', function(req, res){
    res.render('home')
})


//Cadastrando os Produtos Não Alcoólicos
app.get('/cadastro/naoalcoolico', naoAlcoolicosController.cadastroget)
app.post('/cadastro/naoalcoolico', naoAlcoolicosController.cadastropost)


// Cadastrando Produtos Alcoólicos

app.get('/cadastro', alcoolicosController.cadastroget)
app.post('/cadastro', alcoolicosController.cadastropost)




//Select Alcoólicos
app.get('/produtos/:id', alcoolicosController.selectget)


//Select Não alcoólicos
app.get('/produtos/naoalcoolicos/:id', naoAlcoolicosController.selectget)


//Delete Alcoólico
app.post('/produtos/delete/:id', alcoolicosController.deletepost)


//Delete não alcoólico
app.post('/produtos/delete/naoalcoolicos/:id', naoAlcoolicosController.deletepost)



//Edit alcoólico
app.get('/produtos/edit/:id', alcoolicosController.editget)

//Continuação do Edit
app.post('/produtos/update', alcoolicosController.editpost)


//Edit não alcoólico
app.get('/produtos/edit/naoalcoolicos/:id', naoAlcoolicosController.editget)

//Continuação do Edit
app.post('/produtos/naoalcoolicos/update', naoAlcoolicosController.editpost)

//Mostrando as Bebidas Alcoólicas
app.get('/alcoolicas', alcoolicosController.exibirget)


//Mostrando as Bebidas Não Alcoólicas
app.get('/naoalcoolicas', naoAlcoolicosController.exibirget)


//Mostrando sobrenos
app.get('/sobrenos', exibicaoController.sobrenosget)

//Mostrando Contatos
app.get('/contatos', exibicaoController.contatosget)

//Mostrando Equipe
app.get('/equipe', exibicaoController.equipeget)

//Mostrando o Login
app.get('/login', CadastroUsuario.login)
app.post('/login', CadastroUsuario.loginPost)

//Mostrando o cadastro do usuário
app.get('/cadastro/usuario', CadastroUsuario.register)
app.post('/cadastro/usuario', CadastroUsuario.registerPost)

//Logout
app.get('/logout', CadastroUsuario.logout)



conn
.sync()
.then(() => {
    app.listen(3000)
})
.catch((err) => {
    console.log(err)
})