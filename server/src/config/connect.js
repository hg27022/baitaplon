import { Sequelize, DataTypes } from "sequelize";
import logger from "./winston.js";
import user from "../models/user.cjs";
import teacher from "../models/teacher.cjs";
import subject from "../models/subject.cjs";
import classer from "../models/class.cjs";
import department from "../models/department.cjs";
import dotenv from "dotenv";
dotenv.config();

const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    username: "root",
    password: "011201",
    database: "my_app",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
}[env];

let sequelize;

if (env === "development") {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const connect = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Connection has been established successfully.");
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
  }
};

const db = {
  // User: user(sequelize, Sequelize.DataTypes),
  // Teacher: teacher(sequelize, Sequelize.DataTypes),
  // Subject: subject(sequelize, Sequelize.DataTypes),
  // Class: classer(sequelize, Sequelize.DataTypes),
  // Department: department(sequelize, Sequelize.DataTypes),
};

export { connect, db };
