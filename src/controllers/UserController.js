const User = require('../models/User')

class UserController {

    async signUp(req, res) {
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
            console.log(error.message)
            res.statuts(500).json({ message: "Não foi possível cadastrar o usuário." })
        }

    }
}

module.exports = new UserController()