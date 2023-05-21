"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Department.init(
    {
      departmentName: DataTypes.STRING,
      countClass: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "department",
    }
  );
  return Department;
};
