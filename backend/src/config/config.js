// src/config/config.js

const config = {
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT || 3306,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};