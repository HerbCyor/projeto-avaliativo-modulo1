const { connection } = require('../database/connection')
const { DataTypes } = require('sequelize')

const PointOfInterestAddress = connection.define('point_of_interest_address', {
    streetName: { type: DataTypes.STRING },  // nome da rua
    number: { type: DataTypes.STRING }, // numero
    complement: { type: DataTypes.STRING }, //complemento
    area: { type: DataTypes.STRING }, // bairro
    city: { type: DataTypes.STRING }, // cidade
    state: { type: DataTypes.STRING }, // estado
    country: { type: DataTypes.STRING }, // pais
    areaCode: { type: DataTypes.STRING }, // CEP

})

module.exports = PointOfInterestAddress