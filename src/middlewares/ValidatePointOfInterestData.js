async function validatePointOfInterestData(req, res, next) {

    const pointOfInterestData = {
        streetName: req.body.streetName,  // nome da rua
        number: req.body.number, // numero
        area: req.body.area, // bairro
        city: req.body.city, // cidade
        state: req.body.state, // estado
        country: req.body.country, // pais
        areaCode: req.body.areaCode, // CEP
        description: req.body.description // descrição
    }

    for (const [key, value] of Object.entries(pointOfInterestData)) {
        if (!value) {
            return res.status(400).json({ message: `O campo [${value}] é obrigatório.` })
        }
    }
    next()
}

module.exports = { validatePointOfInterestData }