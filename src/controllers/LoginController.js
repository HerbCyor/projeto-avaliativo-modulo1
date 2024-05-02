const { compare, hash } = require('bcryptjs')
const User = require("../models/User")
const { sign } = require('jsonwebtoken')

class LoginController {

    async login(req, res) {
        try {
            const email = req.body.email
            const password = req.body.password

            if (!email) {
                return res.status(400).json({ message: "O email é obrigatório" })
            }
            if (!password) {
                return res.status(400).json({ message: "A senha é obrigatória" })
            }

            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if (!user) {
                return res.status(404).json({ message: "Usuário ou senha inválido" })
            }

            const hashPassword = await compare(password, user.password)
            if (hashPassword === false) {
                return res.status(404).json({ message: "Usuário ou senha inválido" }) // if I return 400 the user can assert there's a user with the given email
            }

            const payload = { sub: user.id, email: user.email, name: user.name }
            const token = sign(payload, process.env.JWT_SECRET)

            res.status(200).json({ Token: token })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: error, message: "Um erro ocorreu! Tente novamente mais tarde." })

        }
    }

}

module.exports = new LoginController()

