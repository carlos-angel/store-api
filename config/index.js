require('dotenv').config();

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  isDev: process.env.NODE_ENV === 'development',
};

const db = {
  url: process.env.DATABASE_URL,
  dialect: process.env.DB_DIALECT,
};

module.exports = { config, db };
