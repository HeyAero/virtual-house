import { homes } from '../../../data'

export default function handler(req, res) {
  const { pid } = req.query
  res.status(200).json(homes[pid-1])
}