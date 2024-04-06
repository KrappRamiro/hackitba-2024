import { Router } from "express";
import { addWorkout, getWorkoutsByUserId } from "../controllers/workout";

const router = Router();

router.post("/", addWorkout);
router.get("/:userId", getWorkoutsByUserId);

export default router;
