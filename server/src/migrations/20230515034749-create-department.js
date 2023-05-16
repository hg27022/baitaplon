'use strict';
/** @type {import('sequelize-cli').Migration} */

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('departments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.STRING
      },
      departmentName: {
        type: Sequelize.STRING
      },
      countClass: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('departments');
  }
};


