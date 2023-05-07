import logger from "../config/winston";
import OutputType from './OutputType.js';

export default class Exception extends Error {

  constructor(message, outputType) {
    switch (outputType) {
      case OutputType.INFORMATION:
        logger.log(message);
        break;
      case OutputType.SUCCESS:
        logger.info(chalk.green(message));
        break;
      case OutputType.WARNING:
        logger.warn(chalk.yellow(message));
        break;
      case OutputType.ERROR:
        logger.error(chalk.red(message));
        break;
      default:
        logger.log(message);
    }
  }
}
