import express from "express";
import { verifyToken } from "../utils/verifiyUser.js";
import { createComment, getPostComments } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments)
export default router;
