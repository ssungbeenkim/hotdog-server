import express from 'express';
import 'express-async-errors';
import { db } from '../db/database.js';

const router = express.Router();

// GET /scores
router.get('/', async (req, res, next) => {
  const data = await db
    .execute(
      'SELECT sc.name, sc.level, sc.score, sc.time FROM scores as sc ORDER BY sc.level DESC, sc.score DESC, sc.time ASC LIMIT 10'
    )
    .then((result) => {
      return result[0];
    })
    .catch((error) => {
      console.error(error);
    });
  res.status(200).json(data);
});

// POST /scores
router.post('/', async (req, res, next) => {
  const { name, level, score, time } = req.body;

  const newScore = await db
    .execute('INSERT INTO scores (name, level, score, time) VALUES (?,?,?,?)', [
      name,
      level,
      score,
      time,
    ])
    .then(() => {
      return db.execute(
        'SELECT * FROM scores ORDER BY level DESC, score DESC, time ASC'
      );
    })
    .then((results) => {
      return results[0];
    })
    .catch((error) => {
      console.error(error);
    });

  res.status(201).json(newScore);
});
export default router;
