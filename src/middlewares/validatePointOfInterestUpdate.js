const PointOfInterest = require("../models/PointOfInterest")
const PointOfInterestAddress = require("../models/PointOfInterestAddress")

async function validatePointOfInterestUpdate(req, res, next) {

    const dataToUpdate = req.body

    const pointOfInterestFields = Object.keys(PointOfInterest.getAttributes()) // lista com os nomes das colunas dos Locais
    const pointOfInterestAddressFields = Object.keys(PointOfInterestAddress.getAttributes()) // lista com os nomes das colunas de Endereço


    let forbiddenFields = []

    for ([key, value] of Object.entries(dataToUpdate)) {                                        // itera pelos valores passados no body
        if ((!key in pointOfInterestAddressFields) && (!key in pointOfInterestFields)) {        // verifica se foi passado algum campo que não existe como coluna na database
            forbiddenFields.push(key)
        }
    }

    if (forbiddenFields.length > 1) {
        return res.status(403).json({ message: `Campos inválidos: ${forbiddenFields.join(", ")}.` })
    }

    next()

}

module.exports = { validatePointOfInterestUpdate }