import service from './service.js';
import { goodResponse } from '../../helper/response.js';

async function get(req, res) {
  const result = await service.get(req.params.id);
  return res.status(200).json(goodResponse(result, 'Transaction fetched successfully'));
}

const list = async (req, res) => {
  const result = await service.list();
  return res.status(200).json(goodResponse(result, 'Transaction fetched successfully'));
};

export default {
  get,
  list,
};
