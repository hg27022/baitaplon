"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Disciplines", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      idStudent: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      typeDiscipline: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      note: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.sequelize.query(
      "ALTER TABLE disciplines ADD CONSTRAINT FOREIGN KEY (idStudent) REFERENCES students(id)"
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Disciplines");
  },
};
