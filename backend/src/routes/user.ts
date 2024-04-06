import { Router } from "express";
import { addUser, getUserById, getAllUsers } from "../controllers/user";

const router = Router();

router.get("/", getAllUsers);
router.post("/", addUser);
router.get("/:userId", getUserById);

export default router;
