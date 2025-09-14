import express, { NextFunction } from "express";
import { sessionMiddleware } from "../middleware";
import { calculateUserPreferences } from "../controllers/quiz.controllers";

const router = express.Router();

router.get('/results', calculateUserPreferences); // backend calculation
// router.get('/results', collectCompatibilityResults);

export default router;