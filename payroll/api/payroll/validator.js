import Joi from 'joi';

async function update(req, res, next) {
  const schema = Joi.object({
    amount: Joi.number().required(),
    accountNumber: Joi.string().required(),
    IFSCNumber: Joi.string().required(),
    upiId: Joi.string().required(),
  }).options({ stripUnknown: true });

  req.body = await schema.validateAsync(req.body);
  return next();
}

async function validateId(req, res, next) {
  const schema = Joi.object({
    id: Joi.string().uuid().required(),
  }).options({ stripUnknown: true });

  req.params = await schema.validateAsync(req.params);
  return next();
}

export default {
  update,
  validateId,
};

