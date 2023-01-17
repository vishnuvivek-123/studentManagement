import Joi from 'joi';

const attendance = async (req, res, next) => {
  const schema = Joi.object({
    isPresent: Joi.boolean().required(),
    userId: Joi.string().guid().required(),
    type: Joi.string().guid().required(),
    schedule: Joi.string().guid().required(),
    remark: Joi.string().allow('', null),
  });

  req.body = await schema.validateAsync(req.body);
  return next();
};

export default { attendance };

