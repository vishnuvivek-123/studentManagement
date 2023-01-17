import Joi from 'joi';
import { failedResponse } from '../helper/response.js';
import BadRequest from '../helper/exception/badRequest.js';
import Unauthorized from '../helper/exception/unauthorized.js';
import Forbidden from '../helper/exception/forbidden.js';

export default (err, req, res, next) => {
  if (err instanceof Joi.ValidationError) {
    return res.status(400).json(failedResponse(err.message, 400, 'VALIDATION_ERROR'));
  }

  if (err instanceof BadRequest) {
    return res.status(400).json(failedResponse(err.message, err.statusCode, err.code));
  }

  if (err instanceof Unauthorized) {
    return res.status(401).json(failedResponse(err.message, err.statusCode, err.code));
  }

  if (err instanceof Forbidden) {
    return res.status(403).json(failedResponse(err.message, err.statusCode, err.code));
  }

  if (['TokenExpiredError', 'JsonWebTokenError', 'NotBeforeError'].includes(err.name)) {
    return res.status(401).json(failedResponse(err.message, 401, err.name));
  }



 
  return res.status(500).json(failedResponse(err.message, 500));
};
