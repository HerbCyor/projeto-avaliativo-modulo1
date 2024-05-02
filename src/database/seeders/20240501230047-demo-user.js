'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      full_name: 'John Doe',
      cpf: "0123456789",
      birth_date: "2000-10-10",
      gender: "male",
      email: "johndoe@mail.com",
      password: "password123",
      createdAt: new Date,
      updatedAt: new Date

    }], {});

    await queryInterface.bulkInsert('user_address', [{
      street_name: "Estr. Dom João Becker ",
      number: "334",
      area: "Ingleses do Rio Vermelho",
      city: "Florianópolis",
      state: "Santa Catarina",
      country: "Brasil",
      area_code: "88058-600",
      user_id: 1,
      createdAt: new Date,
      updatedAt: new Date

    }], {});



  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_address', null, {});
    await queryInterface.bulkDelete('users', null, {});

  }
};