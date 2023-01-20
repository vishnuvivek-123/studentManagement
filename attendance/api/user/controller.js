import service from './service.js';
import { goodResponse } from '../../helper/response.js';

const create = async (req, res) => {
  const result = await service.create(req.body, req.user);
  return res.status(200).json(goodResponse(result, 'user created successfully'));
};

async function update(req, res) {
  await service.update(req.params.id, req.body);
  return res.status(200).json(goodResponse(null, 'user updated successfully'));
}

async function remove(req, res) {
  await service.remove(req.params.id);
  return res.status(200).json(goodResponse(null, 'user deleted successfully'));
}

async function get(req, res) {
  const result = await service.get(req.params.id);
  return res.status(200).json(goodResponse(result, 'user fetched successfully'));
}

const list = async (req, res) => {
  const cond = { where: {} };
  if (req.query.id) {
    cond.where.user_id = req.query.id;
  }
  const result = await service.list(cond);
  return res.status(200).json(goodResponse({ result }, 'user listed succesfully'));
};

export default {
  create,
  update,
  remove,
  get,
  list,
};

