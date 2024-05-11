const PointOfInterest = require("../models/PointOfInterest")

async function validatePointOfInterestOwnership(req, res, next) {
    const userId = req.payload.sub

    if (req.params) {
        const pointOfInterestId = req.params.local_id

        const pointOfInterest = await PointOfInterest.findByPk(pointOfInterestId)

        if (!pointOfInterest) {
            return res.status(404).json({ message: "Local não encontrado." })
        }

        if (pointOfInterest.userId != userId) {
            return res.status(403).json({ message: "Forbidden" })
        }
    }


    next()
}

module.exports = { validatePointOfInterestOwnership }