import Queue from "bull";

process.loadEnvFile();

export const telegramQueue = new Queue("telegram", process.env.REDIS_URL);
