'use strict';
const { hash } = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      fullName: 'John Doe',
      cpf: "0123456789",
      birthDate: "2000-10-10",
      gender: "male",
      email: "johndoe@mail.com",
      password: await hash("password123", 8),
      createdAt: new Date,
      updatedAt: new Date

    }], {});

    await queryInterface.bulkInsert('user_address', [{
      streetName: "Estr. Dom João Becker ",
      number: "334",
      area: "Ingleses do Rio Vermelho",
      city: "Florianópolis",
      state: "Santa Catarina",
      country: "Brasil",
      areaCode: "88058-600",
      userId: 1,
      createdAt: new Date,
      updatedAt: new Date

    }], {});



  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_address', null, {});
    await queryInterface.bulkDelete('users', null, {});

  }
};