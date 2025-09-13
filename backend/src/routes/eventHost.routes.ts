import express, { NextFunction } from "express";
import * as eventController from "../controllers/eventHost.controller"
import { sessionMiddleware } from "../middleware";
import { calculateUserPreferences } from "../controllers/quiz.controllers";

const router = express.Router();

router.get('/user-preferences', calculateUserPreferences);

export default router;