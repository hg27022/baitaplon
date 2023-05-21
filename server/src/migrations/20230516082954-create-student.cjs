'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      cccd: {
        allowNull: false,
        type: Sequelize.STRING
      },
      province: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idDetailStudent: {
        allowNull: false,
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.sequelize.query("ALTER TABLE students ADD CONSTRAINT FOREIGN KEY (idDetailStudent) REFERENCES detailStudents(id)");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};