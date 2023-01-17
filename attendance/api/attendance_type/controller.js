import service from './service.js';
import { goodResponse } from '../../helper/response.js';

const create = async (req, res) => {
  const result = await service.create(req.body, req.user);
  return res.status(200).json(goodResponse(result, 'Attendance type created successfully'));
};

async function update(req, res) {
  await service.update(req.params.id, req.body);
  return res.status(200).json(goodResponse(null, 'Attendance type updated successfully'));
}

async function remove(req, res) {
  await service.remove(req.params.id);
  return res.status(200).json(goodResponse(null, 'Attendance type deleted successfully'));
}

async function get(req, res) {
  const result = await service.get(req.params.id);
  return res.status(200).json(goodResponse(result, 'Attendance type fetched successfully'));
}

async function list(req, res) {
  const result = await service.list();
  return res.status(200).json(goodResponse(result, 'Attendance type fetched successfully'));
}

export default {
  create,
  update,
  remove,
  get,
  list,
};
