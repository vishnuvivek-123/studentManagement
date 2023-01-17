import Joi from 'joi';

const create = async (req, res, next) => {
  const schema = Joi.object({
    isPresent: Joi.boolean().required(),
    user: Joi.string().guid().required(),
    type: Joi.string().guid().required(),
    schedule: Joi.string().guid().required(),
    remark: Joi.string().allow('', null),
  });

  req.body = await schema.validateAsync(req.body);
  return next();
};

async function update(req, res, next) {
  const schema = Joi.object({
    isPresent: Joi.boolean(),
    type: Joi.string().guid(),
    schedule: Joi.string().guid(),
    remark: Joi.string().allow('', null),
  }).options({ stripUnknown: true });

  req.body = await schema.validateAsync(req.body);
  return next();
}

async function validateId(req, res, next) {
  const schema = Joi.object({
    id: Joi.string().guid().required(),
  });

  req.params = await schema.validateAsync(req.params);
  return next();
}

export default {
  create,
  update,
  validateId,
};

