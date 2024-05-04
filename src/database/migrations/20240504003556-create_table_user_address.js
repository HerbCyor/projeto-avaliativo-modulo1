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
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users",
            schema: "public",
          },
          key: "id",
        },
        allowNull: false,
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
