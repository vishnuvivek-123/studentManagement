import service from './service.js';
import { goodResponse } from '../../helper/response.js';

async function update(req, res) {
  await service.update(req.params.id, req.body);
  return res.status(200).json(goodResponse(null, 'Payroll updated successfully'));
}

async function get(req, res) {
  const result = await service.get(req.params.id);
  return res.status(200).json(goodResponse(result, 'Payroll fetched successfully'));
}

const list = async (req, res) => {
  const result = await service.list();
  return res.status(200).json(goodResponse(result, 'Payroll fetched successfully'));
};

export default {
  update,
  get,
  list,
};
