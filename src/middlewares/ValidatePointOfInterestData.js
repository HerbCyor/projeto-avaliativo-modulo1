async function validatePointOfInterestData(req, res, next) {

    const pointOfInterestData = {
        streetName: req.body.address.streetName,  // nome da rua
        number: req.body.address.number, // numero
        area: req.body.address.area, // bairro
        city: req.body.address.city, // cidade
        state: req.body.address.state, // estado
        country: req.body.address.country, // pais
        areaCode: req.body.address.areaCode, // CEP
        description: req.body.description, // descrição
        name: req.body.name
    }

    for (const [key, value] of Object.entries(pointOfInterestData)) {
        if (!value) {
            return res.status(400).json({ message: `O campo [${value}] é obrigatório.` })
        }
    }

    // to do: validação de cep
    next()
}

module.exports = { validatePointOfInterestData }