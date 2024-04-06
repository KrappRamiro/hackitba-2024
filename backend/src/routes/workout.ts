import { Router } from "express";
import { addWorkout, getWorkoutByUserId } from "../controllers/workout";

const router = Router();

router.post("/", addWorkout);
router.get("/:userId", getWorkoutByUserId);

export default router;
