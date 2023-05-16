'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetailStudents', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      branch: {
        type: Sequelize.STRING
      },
      practise: {
        type: Sequelize.STRING
      },
      graduate: {
        type: Sequelize.STRING
      },
      yearGraduate: {
        type: Sequelize.STRING
      },
      academicYear: {
        type: Sequelize.STRING
      },
      idClass: {
        allowNull: false,
        type: Sequelize.UUID
      },
      idScholarship: {
        allowNull: false,
        type: Sequelize.UUID
      },
      idDepartment: {
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

    await queryInterface.sequelize.query("ALTER TABLE detailStudents ADD CONSTRAINT FOREIGN KEY (idDepartment) REFERENCES departments(id)");
    await queryInterface.sequelize.query("ALTER TABLE detailStudents ADD CONSTRAINT FOREIGN KEY (idClass) REFERENCES classes(id)");
    await queryInterface.sequelize.query("ALTER TABLE detailStudents ADD CONSTRAINT FOREIGN KEY (idScholarship) REFERENCES scholarships(id)");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DetailStudents');
  }
};