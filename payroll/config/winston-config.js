import winston from 'winston';

export const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/all.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') { // disable console logging in production
  const logFormat = winston.format.printf(({ level, message, stack }) => {
    if (level === 'error') {
      return `\x1b[31m${level}: ${message}\n${stack}\x1b[0m`;
    }

    if (level === 'warn') {
      return `\x1b[33m${level}: ${message}\x1b[0m`;
    }

    if (level === 'info') {
      return `\x1b[32m${level}: ${message}\x1b[0m`;
    }

    if (level === 'debug') {
      return `\x1b[34m${level}: ${message}\x1b[0m`;
    }
    return `${level}: ${message}`;
  });
  logger.add(new winston.transports.Console({ format: logFormat }));
}

const jsonFormat = winston.format.printf(({ message }) => JSON.stringify(message));

export const httpLogger = winston.createLogger({
  level: 'http',
  format: jsonFormat,
  transports: [
    new winston.transports.File({ filename: 'logs/http.log', level: 'http' }),
  ],
});
