import express from "express";
import homeController from '../controllers/homeController.js';
import userController from '../controllers/userController.js';

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/login", userController.getToken);
  router.get("/user/all", userController.getAllUser);

  return app.use("/", router);
};

export default initWebRoutes;
