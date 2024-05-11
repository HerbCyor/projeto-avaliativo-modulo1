const User = require('../models/User')

class UserController {

    async signUp(req, res) {

        /* 
            #swagger.tags = ['Usuários']
            #swagger.summary = 'criação de usuários'
            
            #swagger.parameters['body'] = {
                in: 'body',
                schema:{ $ref: '#/definitions/AddUser' }
            }
        */

        try {
            const fullName = req.body.fullName
            const cpf = req.body.cpf
            const birthDate = req.body.birthDate
            const gender = req.body.gender
            const email = req.body.email
            const password = req.body.password

            const newUser = await User.create({
                fullName,
                cpf,
                birthDate,
                gender,
                email,
                password
            })
            res.status(201).json(newUser)

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Não foi possível cadastrar o usuário." })
        }

    }
}

module.exports = new UserController()