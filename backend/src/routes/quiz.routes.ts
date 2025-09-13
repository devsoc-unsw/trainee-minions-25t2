import express, { NextFunction } from "express";
import { sessionMiddleware } from "../middleware";
import { calculateUserPreferences } from "../controllers/quiz.controllers";

const router = express.Router();

router.get('/', calculateUserPreferences);

export default router;