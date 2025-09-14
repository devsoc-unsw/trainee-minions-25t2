import express, { NextFunction } from "express";
import { sessionMiddleware } from "../middleware";
import { calculateUserPreferences, collectCompatibilityResults } from "../controllers/quiz.controllers";

const router = express.Router();

router.post('/', calculateUserPreferences); // backend calculation
router.get('/', collectCompatibilityResults);

export default router;