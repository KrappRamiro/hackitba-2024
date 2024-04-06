import { Router } from "express";
import { addSleep, getSleepsByUserId } from "../controllers/sleep";

const router = Router();

router.post("/", addSleep);
router.get("/:userId", getSleepsByUserId);

export default router;
