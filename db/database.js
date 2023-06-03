import dotenv from 'dotenv';
import SQ from 'sequelize';
dotenv.config();

export const sequelize = new SQ.Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);
