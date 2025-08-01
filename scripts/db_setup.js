import { pool } from "../db.js";

try {
  console.log("Configuring the database");
  pool.query(
    "CREATE TABLE IF NOT EXISTS hits( id SERIAL PRIMARY KEY, timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
  );
} catch (err) {
  console.error(err);
}
