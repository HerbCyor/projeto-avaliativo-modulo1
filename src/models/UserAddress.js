const { connection } = require('../database/connection')
const { DataTypes } = require('sequelize')

const UserAddress = connection.define('user_address', {
    streetName: { type: DataTypes.STRING },  // nome da rua
    number: { type: DataTypes.STRING }, // numero
    area: { type: DataTypes.STRING }, // bairro
    city: { type: DataTypes.STRING }, // cidade
    state: { type: DataTypes.STRING }, // estado
    country: { type: DataTypes.STRING }, // pais
    areaCode: { type: DataTypes.STRING }, // CEP
    userId: { type: DataTypes.INTEGER } // id de usuario fk

})



module.exports = UserAddress