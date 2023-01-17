import Joi from 'joi';

const attendanceType = async (req, res, next) => {
  const schema = Joi.object({
    type: Joi.string().required(),
  });

  req.body = await schema.validateAsync(req.body);
  return next();
};

const validateId = async (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string().guid({ version: 'uuidv4' }).required(),
  });

  req.params = await schema.validateAsync(req.params);
  return next();
};

export default {
  attendanceType,
  validateId,
};

