import { Router } from "express";
import { ask } from "../controllers/chatbot";

const router = Router();

router.post("/ask", ask);

export default router;
