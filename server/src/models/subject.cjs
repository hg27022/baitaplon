'use strict';
import {
  Model
} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Subject.init({
    subjectName: DataTypes.STRING,
    credits: DataTypes.STRING,
    semester: DataTypes.STRING,
    year: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'subject',
  });

  return Subject;
};

