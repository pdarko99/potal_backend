import pkg from "pg";
const { Client } = pkg;

import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: 5432, // Default port is 5432
});

export { client };
