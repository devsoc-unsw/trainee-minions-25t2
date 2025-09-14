import express, { NextFunction } from "express";
import { sessionMiddleware } from "../middleware";
import { calculateUserPreferences, getBestMatch } from "../controllers/quiz.controllers";

const router = express.Router();

router.get('/results', calculateUserPreferences); // backend calculation
// router.get('/results', collectCompatibilityResults);
router.get("/quiz/best-match/:name", getBestMatch);

export default router;