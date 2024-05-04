const PointOfInterest = require("../models/PointOfInterest")
const PointOfInterestAddress = require("../models/PointOfInterestAddress")

async function validatePointOfInterestUpdate(req, res, next) {

    const dataToUpdate = req.body
    const pointOfInterestFields = Object.keys(PointOfInterest.getAttributes())
    const pointOfInterestAddressFields = Object.keys(PointOfInterestAddress.getAttributes())


    let forbiddenFields = []

    for ([key, value] of Object.entries(dataToUpdate)) {
        if ((!key in pointOfInterestAddressFields) && (!key in pointOfInterestFields)) {
            forbiddenFields.push(key)
        }
    }

    if (forbiddenFields.length > 1) {
        return res.status(403).json({ message: `Campos inválidos: ${forbiddenFields.join(", ")}.` })
    }

    next()

}

module.exports = { validatePointOfInterestUpdate }