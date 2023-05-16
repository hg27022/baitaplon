'use strict';
/** @type {import('sequelize-cli').Migration} */
import Department from '../models/department.js';
import Teacher from '../models/teacher.js';

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('subjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.STRING
      },
      subjectName: {
        type: Sequelize.STRING
      },
      credits: {
        type: Sequelize.STRING
      },
      semester: {
        type: Sequelize.INTEGER
      },
      year: {
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
      idDepartment : {
        type: Sequelize.STRING,
        references: {
            model: Department,
            key: 'id'
        }
      },
      idTeacher : {
        type: Sequelize.STRING,
        references: {
            model: Teacher,
            key: 'id'
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subjects');
  }
};