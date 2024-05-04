'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('point_of_interest_address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      streetName: {
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
      areaCode: {
        allowNull: false,
        type: Sequelize.STRING,

      },
      PointOfInterestId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'points_of_interest',
            schema: 'public'
          },
          key: 'id'
        },
        allowNull: false
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
    await queryInterface.dropTable('point_of_interest_address');
  }
};
