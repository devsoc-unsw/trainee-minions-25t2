import express, { NextFunction } from "express";
import { sessionMiddleware } from "../middleware";
import { calculateUserPreferences, collectCompatibilityResults, getBestMatch } from "../controllers/quiz.controllers";

const router = express.Router();

router.get('/results', calculateUserPreferences); // backend calculation
router.get('/final-result', collectCompatibilityResults); // frontend collect info from collections
router.get("/quiz/best-match/:name", getBestMatch);

export default router;