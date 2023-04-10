import db from "../models/index";
import logger from "../config/winston";
import _, { isEmpty } from "lodash";
import { validationResult } from "express-validator";

const getAllUser = async (req, res) => {
  const { page, size, search } = req.body;
  
  let data = await db.User.findAll({
    logging: (sql) => {
      logger.info(sql);
    },
  });
  return res.status(200).send(data);
};

const getUserByUsername = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const username = req?.body?.username ?? "";
  const user = await db.User.findOne({
    where: { username: username },
    logging: (sql) => {
      logger.info(sql);
    },
  });
  if (!user) {
    return res.status(404).json({ message: "Incorrect username" });
  }
  return res.status(200).send(user);
};

const getUserById = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const id = req?.params?.id ?? "";
  const user = await db.User.findOne({
    where: { id: id },
    logging: (sql) => {
      logger.info(sql);
    },
  });
  if (!user) {
    return res.status(404).json({ message: "Incorrect username" });
  }
  return res.status(200).send(user);
};

const deleteUserById = async (req, res) => {
  const id = req?.params?.id ?? "";
  const user = await db.User.findOne({
    where: { id: id },
    logging: (sql) => {
      logger.info(sql);
    },
  });
  if (!user) {
    return res.status(404).json({ message: "Incorrect username" });
  } else {
    await db.User.destroy({ where: { id: id } })
      .then(() => {
        return res.status(200).json({
          message: "delete user successfully",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          message: "Error in the process of delete user, please try again",
          error: err,
        });
      });
  }
};

export default {
  getUserByUsername,
  getAllUser,
  getUserById,
  deleteUserById,
};
