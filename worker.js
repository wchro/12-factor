import { telegramQueue } from "./queue.js";

telegramQueue.process(async (job) => {
  // hacer algo
  console.log("[⏳ PROCESANDO] 5 segundos");
  await new Promise((res) => setTimeout(res, 5000));
  console.log(
    "[✅ COMPLETADO] El mensaje ha sido enviado con exito a",
    job.data?.userId
  );
});
