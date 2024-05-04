const { Router } = require("express")
const { auth } = require('../middlewares/auth')
const { validatePointOfInterestData } = require("../middlewares/ValidatePointOfInterestData")
const { validatePointOfInterestOwnership } = require("../middlewares/validatePointOfInterestOwnership")
const { validatePointOfInterestUpdate } = require("../middlewares/validatePointOfInterestUpdate")
const PointOfInterestController = require("../controllers/PointOfInterestController")
const pointOfInterestRoutes = new Router()


pointOfInterestRoutes.post('/', auth, validatePointOfInterestData, PointOfInterestController.registerPointOfInterest)
pointOfInterestRoutes.put('/:local_id', auth, validatePointOfInterestUpdate, PointOfInterestController.updateOnePointOfInterest)
pointOfInterestRoutes.delete('/:local_id', auth, validatePointOfInterestOwnership, PointOfInterestController.deleteOnePointOfInterest)
pointOfInterestRoutes.get('/', auth, PointOfInterestController.getAllPointsOfInterest)
pointOfInterestRoutes.get('/:local_id', auth, validatePointOfInterestOwnership, PointOfInterestController.getOnePointOfInterest)
pointOfInterestRoutes.get('/:local_id/maps', auth, validatePointOfInterestOwnership, PointOfInterestController.getPointOfInterestGoogleMapsUrl)

module.exports = pointOfInterestRoutes