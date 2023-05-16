"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("subjects", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      subjectName: {
        type: Sequelize.STRING,
      },
      credits: {
        type: Sequelize.STRING,
      },
      semester: {
        type: Sequelize.INTEGER,
      },
      year: {
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
      idDepartment: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      idTeacher: {
        allowNull: false,
        type: Sequelize.UUID,
      },
    });

    await queryInterface.sequelize.query(
      "ALTER TABLE subjects ADD CONSTRAINT FOREIGN KEY (idDepartment) REFERENCES departments(id)"
    );
    await queryInterface.sequelize.query(
      "ALTER TABLE subjects ADD CONSTRAINT FOREIGN KEY (idTeacher) REFERENCES teachers(id)"
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("subjects");
  },
};
