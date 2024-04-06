import { Router } from "express";
import { addForum, getForumById, getAllForums } from "../controllers/forum";

const router = Router();

router.get("/", getAllForums);
router.post("/", addForum);
router.get("/:forumId", getForumById);

export default router;
