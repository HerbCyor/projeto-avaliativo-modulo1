const { connection } = require('../database/connection')
const { DataTypes } = require('sequelize')

const UserAddress = connection.define('user_address', {
    street_name: { type: DataTypes.STRING },  // nome da rua
    number: { type: DataTypes.STRING }, // numero
    area: { type: DataTypes.STRING }, // bairro
    city: { type: DataTypes.STRING }, // cidade
    state: { type: DataTypes.STRING }, // estado
    country: { type: DataTypes.STRING }, // pais
    area_code: { type: DataTypes.STRING }, // CEP
    user_id: { type: DataTypes.STRING } // id de usuario fk

})



module.exports = UserAddress