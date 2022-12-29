import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import api from "./api";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", api);

export default app;
