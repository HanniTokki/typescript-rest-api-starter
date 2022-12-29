import type { Request, Response } from "express";
import express from "express";

const router = express.Router();

interface Message {
  message: string;
}

router.get("/", (req: Request, res: Response<Message>) => {
  res.status(200).json({ message: "hi world 👋" });
});

export default router;
