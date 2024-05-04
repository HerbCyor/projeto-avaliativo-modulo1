const PointOfInterest = require("../models/PointOfInterest")
const { verify } = require("jsonwebtoken")

async function validatePointOfInterestOwnership(req, res, next) {
    const decoded = verify(req.headers.authorization, process.env.JWT_SECRET)
    const userId = decoded.sub

    if (req.params) {
        const pointOfInterestId = parseInt(req.params.local_id)

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