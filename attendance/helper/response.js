export const goodResponse = (response, message) => ({
  result: response,
  version: null,
  isError: false,
  message,
  statusCode: 200,
});

export const failedResponse = (message, statusCode = 401, responseException = '') => ({
  isError: true,
  message,
  version: null,
  statusCode,
  responseException,
});
