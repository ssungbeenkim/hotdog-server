import express from 'express';
import 'express-async-errors';

const router = express.Router();
let scores = [
  {
    name: 'user1',
    level: '4',
    score: '4',
    time: '3',
  },
];

// GET /scores
router.get('/', (req, res, next) => {
  const data = scores;
  res.status(200).json(data);
});
// POST /scores
router.post('/', (req, res, next) => {
  const { name, level, score, time } = req.body;
  const newScore = {
    name,
    level,
    score,
    time,
  };
  scores = [newScore, ...scores];
  res.status(201).json(scores);
});
export default router;
