import service from './service.js';
import { goodResponse } from '../../helper/response.js';

const create = async (req, res) => {
  const result = await service.create(req.body, req.user);
  return res.status(200).json(goodResponse({ result }, 'Attendance created succesfully'));
};
export default { create };
