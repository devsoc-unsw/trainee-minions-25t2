import express, { NextFunction } from "express";
import { sessionMiddleware } from "../middleware";
import { calculateUserPreferences, getBestMatch } from "../controllers/quiz.controllers";

const router = express.Router();

router.get('/', calculateUserPreferences);
router.get("/quiz/best-match/:name", getBestMatch);

export default router;