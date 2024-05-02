const User = require('../models/User')

class UserController {

    async signUp(req, res) {
        try {
            const full_name = req.body.full_name
            const cpf = req.body.cpf
            const birth_date = req.body.birth_date
            const gender = req.body.gender
            const email = req.body.email
            const password = req.body.password

            const newUser = await User.create({
                full_name,
                cpf,
                birth_date,
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