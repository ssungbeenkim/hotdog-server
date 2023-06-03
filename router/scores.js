import express from 'express';
import 'express-async-errors';
import { sequelize } from '../db/database.js';
import SQ from 'sequelize';

const DataTypes = SQ.DataTypes;

const Score = sequelize.define(
  'score',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

const router = express.Router();

// GET /scores
router.get('/', async (req, res, next) => {
  const data = await Score.findAll({
    order: [
      ['level', 'DESC'],
      ['score', 'DESC'],
      ['time', 'ASC'],
    ],
    limit: 10,
  });
  res.status(200).json(data);
});

// POST /scores
router.post('/', async (req, res, next) => {
  const { name, level, score, time } = req.body;

  const newScore = await Score.create({
    name,
    level,
    score,
    time,
  }).then(() => {
    return Score.findAll({
      order: [
        ['level', 'DESC'],
        ['score', 'DESC'],
        ['time', 'ASC'],
      ],
      limit: 10,
    });
  });

  res.status(201).json(newScore);
});
export default router;
