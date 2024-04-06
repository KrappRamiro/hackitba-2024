import { Router } from "express";
import { addAlimentation, getAlimentationsByUserId } from "../controllers/alimentation";

const router = Router();

router.post("/", addAlimentation);
router.get("/:userId", getAlimentationsByUserId);

export default router;
