'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('user_address', 'user_id', {

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
    );

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.removeColumn('user_address', 'user_id');

  }
};
