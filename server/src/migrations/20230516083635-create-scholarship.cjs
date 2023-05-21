'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('scholarships', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      idStudent: {
        allowNull: false,
        type: Sequelize.UUID
      },
      typeScholarship: {
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

    await queryInterface.sequelize.query("ALTER TABLE scholarships ADD CONSTRAINT FOREIGN KEY (idStudent) REFERENCES students(id)");
    await queryInterface.sequelize.query("ALTER TABLE scholarships ADD CONSTRAINT FOREIGN KEY (idDetailStudent) REFERENCES detailStudents(id)");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('scholarships');
  }
};