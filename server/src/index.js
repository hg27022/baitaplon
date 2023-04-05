import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import initWebRoutes from './routers/web.js';
import viewEngine from "./config/viewEngine.js";
import connectDB from "./config/connectDB";

// config app
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

viewEngine(app);
initWebRoutes(app);
connectDB();

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
