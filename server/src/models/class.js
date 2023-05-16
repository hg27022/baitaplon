"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Class.init(
    {
      className: DataTypes.STRING,
      countStudent: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Class",
    }
  );
  return Class;
};
