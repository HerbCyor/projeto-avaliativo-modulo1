const { connection } = require('../database/connection')
const { DataTypes } = require('sequelize')
const UserAddress = require('./UserAddress')
const { hash } = require('bcryptjs')

const User = connection.define('users', {
    full_name: { type: DataTypes.STRING }, // nome completo
    cpf: { type: DataTypes.STRING }, // CPF
    birth_date: { type: DataTypes.DATE }, // data de nascimento
    gender: { type: DataTypes.STRING }, // genero/sexo
    email: { type: DataTypes.STRING }, // email
    password: { type: DataTypes.STRING }, // senha
})

// relation one-to-many User : UserName (1 user may have more than one)
UserAddress.belongsTo(User, { foreignKey: "user_id" })
User.hasMany(UserAddress, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// password encrypting
User.beforeSave(async (user) => {
    user.password = await hash(user.password.toString(), 8)
    return user
})

module.exports = User