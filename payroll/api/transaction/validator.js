import Joi from 'joi';

async function validateId(req, res, next) {
  const schema = Joi.object({
    id: Joi.string().uuid().required(),
  }).options({ stripUnknown: true });

  req.params = await schema.validateAsync(req.params);
  return next();
}

export default {
  validateId,
};
