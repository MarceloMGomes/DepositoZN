const User = require('../models/Users')

const bcrypt = require('bcryptjs') 

module.exports = class CadastroUsuario {

    static login(req, res) { //Função login
    res.render('login')
    }

    static async loginPost(req, res){ //Função para fazer o login
        //Aqui vamos pegar os dados do input do login
        const {cpf, password} = req.body //vem do body

        //Achar o usuário no banco de dados
        const user = await User.findOne({where: {cpf:cpf}})
        if(!user){ //Se o CPF do usuário não for encontrado no BD, irá mostrar a mensagem e redirecionar para a página de login novamente
            req.flash('message', 'Usuário não encontrado')
            res.render('login')
            return
        }

        //Verificar a senha
        const passwordMatch = bcrypt.compareSync(password, user.password) 

        if(!passwordMatch){ 
            req.flash('message', 'Senha inválida')
            res.render('login')
            return
        }

        //iniciar sessão após o login
        req.session.userid = user.id 
        req.flash('message', 'Login realizado com sucesso!')

        req.session.save(() =>{
            res.redirect('/')
        })
    }

    static register(req, res) { //Função para aparecer o cadastro
        res.render('cadastrousuario')
        }

        static async registerPost(req, res){ //Função para receber os dados do formulário

            const {nome, cpf, password, confirmpassword} = req.body 

            //Validação de senha no cadastro

            if( password != confirmpassword) { 
                req.flash('message', 'As senhas não conferem, tente novamente!')

                res.render('cadastrousuario')
                return
            }

            //Verificando se o CPF já foi cadastrado. Não pode ter mais de um cadastro com o mesmo cpf
            const checkIfUserExists = await User.findOne({where: {cpf: cpf}})

            if(checkIfUserExists){
                req.flash('message', 'O CPF já foi cadastrado')
                res.render('cadastrousuario')
                return
            }

            //Verificando a senha para criptografar

            const salt = bcrypt.genSaltSync(10) //Vai dar um salto de 10 na senha para criptografar

            const hashedPassword = bcrypt.hashSync(password, salt) //Vai pegar a senha normal e a senha criptografada. O bcrypt vem do módulo

            const user = {
                nome,
                cpf,
                password: hashedPassword, //Não vamos salvar a senha digitada, mas sim a senha criptografada na const
            }

            User.create(user)
            .then((user) => {
                //iniciando a sessão para ele não precisar logar depois que criar o usuário
                req.session.userid = user.id
            

            req.flash('message', 'Cadastro realizado com sucesso!')

            req.session.save(() => { //O save é para redirecionar para a home e manter o usuário logado, mesmo ele alterando entre as rotas do site.
                res.redirect('/')
            })
            })
            .catch((err) => console.log(err))
        }

        static logout (req,res){ //Para fazer o logout
            req.session.destroy()
            res.redirect('login')
        }
}