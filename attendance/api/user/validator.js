import Joi from 'joi';

const create = async (req, res, next) => {
  const schema = Joi.object({
    fName: Joi.string().required(),
    lName: Joi.string().required(),
    emailId: Joi.string().required(),
    contactNum: Joi.string().required(),
    password: Joi.string().required(),
    userRole: Joi.string().required(),
    isDeleted: Joi.boolean().allow('', null),
  });

  req.body = await schema.validateAsync(req.body);
  return next();
};

async function update(req, res, next) {
  const schema = Joi.object({
    fName: Joi.string().allow('', null),
    lName: Joi.string().allow('', null),
    emailId: Joi.string().allow('', null),
    contactNum: Joi.string().allow('', null),
    password: Joi.string().allow('', null),
    userRole: Joi.string().allow('', null),
    isDeleted: Joi.boolean().allow('', null),
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

