'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailStudent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DetailStudent.init({
    branch: DataTypes.STRING,
    practise: DataTypes.STRING,
    graduate: DataTypes.STRING,
    yearGraduate: DataTypes.STRING,
    academicYear: DataTypes.STRING,
    idClass: DataTypes.UUID,
    idScholarship: DataTypes.UUID,
    idDepartment: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'detailStudent',
  });
  return DetailStudent;
};