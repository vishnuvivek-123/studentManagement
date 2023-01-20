import http from 'http';
import app from '../app.js';
import { logger } from '../config/winston-config.js';

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    return val;
  }

  if (port < 0) {
    process.exit(1);
  }

  return port;
};

// server configuration
const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);
const server = http.createServer(app);

// Error handling
const errorHandler = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  switch (error.code) {
    case 'EACCES':
      logger.error({ message: `${port} requires elevated privileges` });
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error({ message: `${port} is already in use` });
      process.exit(1);
      break;
    default:
      logger.error({ message: error.message, stack: error.stack });
      throw error;
  }
};

server.on('error', errorHandler);
// make the server listen to requests
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : port;
  logger.info(`Server started successfully on port: ${bind}`);
  logger.info(`App: http://localhost:${bind}`);
  logger.info(`Swagger: http://localhost:${bind}/api-docs`);
});

server.listen(port);
