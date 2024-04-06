import { Router } from "express";
import { addSleep, getSleepByUserId } from "../controllers/sleep";

const router = Router();

router.post("/", addSleep);
router.get("/:userId", getSleepByUserId);

export default router;
