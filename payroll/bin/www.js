import http from 'http';
import app from '../app.js';

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
      process.exit(1);
    case 'EADDRINUSE':
      process.exit(1);
    default:
      throw error;
  }
};

server.on('error', errorHandler);
// make the server listen to requests
server.on('listening', () => {});

server.listen(port);
