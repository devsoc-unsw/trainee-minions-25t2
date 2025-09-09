import express, { NextFunction } from "express";
import * as eventController from "../controllers/event.controller"
import { sessionMiddleware } from "../middleware";

const router = express.Router();

export default router;