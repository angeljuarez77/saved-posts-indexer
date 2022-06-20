import { Sequelize } from "sequelize-typescript"
import dotenv from 'dotenv';

dotenv.config();
const {
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
} = process.env;

const sequelize = new Sequelize({
  database: DB_DATABASE,
  dialect: 'postgres',
  username: DB_USERNAME,
  password: DB_PASSWORD,
  storage: ':memory:',
  models: [__dirname + '/models']
});

export default sequelize;