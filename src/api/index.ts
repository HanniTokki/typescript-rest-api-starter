import type { Request, Response } from "express";
import express from "express";
import hi from "./hi";

const router = express.Router();

interface Message {
  message: string;
}

router.get("/hello", (req: Request, res: Response<Message>) => {
  res.status(200).json({ message: "hello world 👋" });
});

router.get("/favicon.ico", (req: Request, res: Response) => res.status(204));
router.use("/hi", hi);

export default router;
