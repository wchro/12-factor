import express from "express";
import { pool } from "./db.js";
import { telegramQueue } from "./queue.js";

// cargar env vars
process.loadEnvFile();

const app = express();
const port = process.env.PORT;

app.get("/hit", (req, res) => {
  try {
    telegramQueue.add({ userId: 123 }); // simulando proceso delay 5 segundos
    pool.query("INSERT INTO hits DEFAULT VALUES");
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

app.get("/health", (req, res) => res.status(200).json({ msg: "Server is up" }));

app.listen(port, () => {
  console.log(`Server running on: http://127.0.0.1:${port}`);
});

// limpiar todo antes de terminar
process.on("SIGTERM", async () => {
  console.log("Closing database");
  await await pool.end();
  console.log("Database closed");
});
