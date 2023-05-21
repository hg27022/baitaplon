'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    fullName: DataTypes.STRING,
    gender: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    cccd: DataTypes.STRING,
    province: DataTypes.STRING,
    nation: DataTypes.STRING,
    idDetailStudent: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'student',
  });
  return Student;
};