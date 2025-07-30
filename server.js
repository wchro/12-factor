import express from "express";

const app = express();

process.loadEnvFile();
const port = process.env.PORT;

app.get("/health", (req, res) => res.status(200).json({ msg: "Server is up" }));

app.listen(port, () => {
  console.log(`Server running on: http://127.0.0.1:${port}`);
});
