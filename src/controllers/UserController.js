const User = require('../models/User')
const UserAddress = require('../models/UserAddress')
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

            const UserAddressData = {
                streetName: req.body.address.streetName,  // nome da rua
                number: req.body.address.number, // numero
                complement: req.body.address.complement,
                area: req.body.address.area, // bairro
                city: req.body.address.city, // cidade
                state: req.body.address.state, // estado
                country: req.body.address.country, // pais
                areaCode: req.body.address.areaCode, // CEP
                userId: newUser.id
            }

            const newAddress = await UserAddress.create(UserAddressData)

            res.status(201).json({ message: "Usuário criado com sucesso" })



        } catch (error) {
            console.log(error)
            if (error.name == 'SequelizeUniqueConstraintError') {
                return res.status(400).json({ message: "Email ou cpf já cadastrado." })
            }
            if (error.name == 'SequelizeDatabaseError') {
                return res.status(400).json({ error: error.message })
            }
            res.status(500).json({ message: "Não foi possível cadastrar o usuário." })
        }

    }
}

module.exports = new UserController()