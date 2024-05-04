const { connection } = require('../database/connection')
const { DataTypes } = require('sequelize')

const PointOfInterestGeolocation = connection.define('point_of_interest_geolocation', {
    latitude: { type: DataTypes.FLOAT },
    longitude: { type: DataTypes.FLOAT },
    PointOfInterestAddressId: { type: DataTypes.INTEGER },

})

module.exports = PointOfInterestGeolocation