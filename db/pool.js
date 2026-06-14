const { Pool } = require("pg");
const { loadEnvFile } = require("node:process");
loadEnvFile();

module.exports = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: 5432,
});
