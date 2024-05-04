const { connection } = require('../database/connection')
const { DataTypes } = require('sequelize')
const PointOfInterestAddress = require('./PointOfInterestAddress')
const User = require('./User')


const PointOfInterest = connection.define('points_of_interest', {
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER },
    googleMapsUrl: { type: DataTypes.STRING },
})

// one to one relations
PointOfInterest.hasOne(PointOfInterestAddress, {
    foreignKey: 'PointOfInterestId',
    onDelete: 'CASCADE'
})
// PointOfInterestAddress.belongsTo(PointOfInterest, {
//     // foreignKey: 'point_of_interest_id'
// })

//one to many
PointOfInterest.belongsTo(User, { foreignKey: "userId" })
User.hasMany(PointOfInterest, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

module.exports = PointOfInterest