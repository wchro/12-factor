import { Pool } from "pg";
process.loadEnvFile();

export const pool = new Pool({
  host: process.env.POSTGRES_URL,
  port: Number(process.env.POSTGRES_PORT),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});
