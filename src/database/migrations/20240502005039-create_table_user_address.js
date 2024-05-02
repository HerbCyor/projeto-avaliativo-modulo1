'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('user_address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      street_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      complement: {
        allowNull: true,
        type: Sequelize.STRING,

      },
      area: {
        allowNull: false,
        type: Sequelize.STRING,

      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,

      },
      state: {
        allowNull: false,
        type: Sequelize.STRING,

      },
      country: {
        allowNull: false,
        type: Sequelize.STRING,

      },
      area_code: {
        allowNull: false,
        type: Sequelize.STRING,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }

    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('user_address');

  }
};
