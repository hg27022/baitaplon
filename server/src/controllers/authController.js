import bcrypt from "bcrypt";
import db from "../models/index";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import { v4 as uuidv4 } from "uuid";

let refreshTokens = [];

const authController = {
  register: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const username = req?.body?.username ?? "";
      const user = await db.User.findOne({ where: { username: username } });
      if (user) {
        res.status(400).json({ message: "This account has already existed" });
      } else {
        const id = uuidv4();
        const salt = 10;
        const hashPassword = bcrypt.hashSync(req?.body?.password ?? "", salt);
        const newUser = {
          id: id,
          username: username,
          password: hashPassword,
          role: "user",
        };
        const createUser = await db.User.create(newUser);
        if (!createUser) {
          return res
            .status(400)
            .send(
              "Error in the process of creating accounts, please try again"
            );
        }
        return res.status(200).send({
          username,
          message: "Account created successfully",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "40s" }
    );
  },

  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_REFRESH_KEY,
      { expiresIn: "365d" }
    );
  },
  login: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const username = req?.body?.username ?? "";
    const isUser = await db.User.findOne({ where: { username: username } });

    if (!isUser) {
      return res.status(404).json({ message: "Incorrect username" });
    }

    const isPassword = await bcrypt.compare(
      req?.body?.password ?? "",
      isUser.password
    );

    if (!isPassword) {
      return res.status(403).json({ message: "Incorrect password" });
    }

    if (isUser && isPassword) {
      const accessToken = authController.generateAccessToken(isUser);
      const refreshToken = authController.generateRefreshToken(isUser);
      refreshTokens.push(refreshToken); // fake database
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false, // deploy is true
        path: "/",
        sameSite: "strict",
      });
      return res.status(200).json({ isUser, accessToken });
    }
  },

  requestRefreshToken: async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json("You're not authenticated");
    }
    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json("Refresh token is not valid");
    }
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
      if (err) {
        console.log(err);
        return req.status(400).json(err);
      }
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
      const newAccessToken = authController.generateAccessToken(user);
      const newRefreshToken = authController.generateRefreshToken(user);
      refreshTokens.push(newRefreshToken);
      console.log(refreshTokens)
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false, // deploy is true
        path: "/",
        sameSite: "strict",
      });
      res.status(200).json({
        accessToken: newAccessToken,
      });
    });
  },

  logOut: async (req, res) => {
    refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
    res.clearCookie("refreshToken");
    res.status(200).json("Logged out successfully!");
  },
};

export default authController;
