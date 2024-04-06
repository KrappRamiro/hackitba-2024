import { Router } from "express";
import { addAlimentation, getAlimentationByUserId } from "../controllers/alimentation";

const router = Router();

router.post("/", addAlimentation);
router.get("/:userId", getAlimentationByUserId);

export default router;
