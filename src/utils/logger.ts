// src/utils/logger.ts
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info', // Default level
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Log to the console
  ],
});

export const log = {
  info: (msg: string) => logger.info(msg),
  debug: (msg: string) => logger.debug(msg),
  warn: (msg: string) => logger.warn(msg),
  error: (msg: string) => logger.error(msg),
};
