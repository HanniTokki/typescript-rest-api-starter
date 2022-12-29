import dotenv from "dotenv";
import log from "./logger";
import app from "./server";
dotenv.config();

const PORT = process.env.PORT ?? 5001;

app.listen(PORT, () => {
  log.info(`Listening: http://localhost:${PORT}`);
});
