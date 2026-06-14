#! /usr/bin/env node

const { Client } = require("pg");
const { loadEnvFile } = require("node:process");

process.loadEnvFile();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  text VARCHAR(255),
  added TIMESTAMP
);


INSERT INTO messages (username,text,added) 
VALUES
  ('Bryan','Hello Odin','2026-06-13 14:30:00'),
  ('Odin','Hey Anyone Here?','2026-06-4 18:30:00'),
  ('Damon','I just arrived here.','2026-06-10 4:30:00');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: 5432,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
