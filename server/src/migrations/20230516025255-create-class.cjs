"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("classes", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      className: {
        type: Sequelize.STRING,
      },
      countStudent: {
        type: Sequelize.INTEGER,
      },
      idDepartment: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      idSubject: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      branch: {
        type: Sequelize.STRING,
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
    await queryInterface.sequelize.query("ALTER TABLE classes ADD CONSTRAINT FOREIGN KEY (idDepartment) REFERENCES departments(id)");
    await queryInterface.sequelize.query("ALTER TABLE classes ADD CONSTRAINT FOREIGN KEY (idSubject) REFERENCES Subjects(id)");

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("classes");
  },
};
