import User from '../../models/user.js';
import BadRequest from '../../helper/exception/badRequest.js';

async function create(data) {
  const user = new User(data);
  return user.save();
}

async function update(id, data) {
  const user = await User.findOne({ where: { id } });
  if (!user || user.isDeleted) {
    throw new BadRequest('not found');
  }

  return user.update(data);
}

export default {
  create,
  update,
};
