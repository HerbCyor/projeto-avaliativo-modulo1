
async function validateSignUp(req, res, next) {
    try {
        const userData = {
            full_name: req.body.full_name,
            cpf: req.body.cpf,
            birth_date: req.body.birth_date,
            gender: req.body.gender,
            email: req.body.email,
            password: req.body.password,
        }


        for (const [key, value] of Object.entries(userData)) {
            if (!value) {
                return res.status(400).json({ message: `O campo [${value}] é obrigatório.` })
            }
        }
        if (!userData.birth_date.match(/\d{4}-\d{2}-\d{2}/gm)) {
            return res.status(400).json({ message: 'A data de nascimento não está no formato correto (YYYY-MM-DD).' })
        }

        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Não foi possível cadastrar o usuário" })
    }
}

module.exports = { validateSignUp }