'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Result.init({
    idStudent: DataTypes.UUID,
    idSubject: DataTypes.UUID,
    countExam: DataTypes.INTEGER,
    point: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'result',
  });
  return Result;
};