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
  {
    name: 'user2',
    level: '4',
    score: '4',
    time: '4',
  },
  {
    name: 'user3',
    level: '4',
    score: '3',
    time: '3',
  },
  {
    name: 'user4',
    level: '4',
    score: '3',
    time: '4',
  },
  {
    name: 'user5',
    level: '1',
    score: '1',
    time: '1',
  },
  {
    name: 'user6',
    level: '1',
    score: '1',
    time: '1',
  },
  {
    name: 'user6',
    level: '1',
    score: '1',
    time: '1',
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
