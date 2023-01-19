import Joi from 'joi';

const create = async (req, res, next) => {
  const schema = Joi.object({
    user: Joi.string().guid().required(),
    leaveType: Joi.string().guid().required(),
    totalNumOfLeave: Joi.number().required(),
    numOfLeaveAvailable: Joi.number().required(),
  });

  req.body = await schema.validateAsync(req.body);
  return next();
};

async function update(req, res, next) {
  const schema = Joi.object({
    totalNumOfLeave: Joi.number().required(),
    numOfLeaveAvailable: Joi.number().required(),
  }).options({ stripUnknown: true });

  req.body = await schema.validateAsync(req.body);
  return next();
}



export default {
  create,
  update
};

