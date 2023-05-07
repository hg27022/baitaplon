import { Sequelize } from 'sequelize';
// import {print, OutputType} from '../common/print.js';
import logger from "./winston";
import Exception from '../exception/Exception.js';
import OutputType from '../exception/OutputType.js';

const sequelize = new Sequelize('my-app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        logger.info('Connection has been established successfully.');
    } catch (error) {
        logger.error('Unable to connect to the database:', error);
    }
}

export default connectDB;