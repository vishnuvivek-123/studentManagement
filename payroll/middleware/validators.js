import Joi from 'joi';

async function list(req, res, next) {
  const schema = Joi.object({
   //////
  });

  req.query = await schema.validateAsync(req.query);
  next();
}


export default {
  list,
};
