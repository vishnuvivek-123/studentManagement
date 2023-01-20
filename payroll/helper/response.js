import fs from 'fs';

const { version } = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

export const goodResponse = (result, message) => ({
  version,
  isError: false,
  message,
  statusCode: 200,
  result,
  responseException: null,
});

export const failedResponse = (message, statusCode = 401, responseException = '') => ({
  version,
  isError: true,
  message,
  statusCode,
  result: null,
  responseException,
});
