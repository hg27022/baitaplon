'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      idStudent: {
        allowNull: false,
        type: Sequelize.UUID
      },
      idSubject: {
        allowNull: false,
        type: Sequelize.UUID
      },
      countExam: {
        type: Sequelize.INTEGER
      },
      point: {
        type: Sequelize.FLOAT
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

    await queryInterface.sequelize.query("ALTER TABLE results ADD CONSTRAINT FOREIGN KEY (idStudent) REFERENCES students(id)");
    await queryInterface.sequelize.query("ALTER TABLE results ADD CONSTRAINT FOREIGN KEY (idSubject) REFERENCES subjects(id)");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Results');
  }
};