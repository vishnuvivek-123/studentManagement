import fs from 'fs';

const { version } = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

export const goodResponse = (response, message) => ({
  version,
  statusCode: 200,
  message,
  isError: false,
  responseException: null,
  result: response,
});

export const failedResponse = (message, statusCode = 401, responseException = '') => ({
  version,
  statusCode,
  message,
  isError: true,
  responseException,
  result: null,
});
