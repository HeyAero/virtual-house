import { homes } from '../../../data'

export default function handler(req, res) {
  const { id } = req.query
  res.status(200).json(homes[id-1])
}