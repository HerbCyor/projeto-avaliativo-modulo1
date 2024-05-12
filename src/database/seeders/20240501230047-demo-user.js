'use strict';
const { hash } = require('bcryptjs');
const PointOfInterest = require('../../models/PointOfInterest');

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

    await queryInterface.bulkInsert('points_of_interest', [
      {
        name: "Trila Costa da Lagoa via Ratones",
        description: "Trilha para a lagoa partindo do ratones. Tranquilidade, Natureza, Harmonia e Caminhada",
        userId: 1,
        googleMapsUrl: "https://www.google.com.br/maps/search/-27.522965701971838,-48.458931493932724",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: "Parque Estadual do rio Vermelho",
        description: "Trilha, Lagoa, Natureza Harmonia. Um ótimo lugar para passar a tarde com os amigos",
        userId: 1,
        googleMapsUrl: "https://www.google.com.br/maps/search/-27.525261700180877,-48.422665644655666",
        createdAt: new Date,
        updatedAt: new Date
      }
    ])

    await queryInterface.bulkInsert('point_of_interest_address', [
      {
        streetName: "Estr. João Januário da Silva",
        number: "s/n",
        complement: " ",
        area: "Ratones",
        city: "Florianópolis",
        state: "Santa Catarina",
        country: "Brasil",
        areaCode: "88052200",
        PointOfInterestId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        streetName: "João Gualberto Soares",
        number: "s/n",
        complement: " ",
        area: "São João do Rio Vermelho",
        city: "Florianópolis",
        state: "Santa Catarina",
        country: "Brasil",
        areaCode: "88010102",
        PointOfInterestId: 2,
        createdAt: new Date,
        updatedAt: new Date
      }
    ])

    await queryInterface.bulkInsert('point_of_interest_geolocation', [
      {
        latitude: -27.522965701971838,
        longitude: -48.458931493932724,
        PointOfInterestAddressId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        latitude: -27.525261700180877,
        longitude: -48.422665644655666,
        PointOfInterestAddressId: 2,
        createdAt: new Date,
        updatedAt: new Date
      }
    ])



  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_address', null, {});
    await queryInterface.bulkDelete('users', null, {});

  }
};