import express, { NextFunction } from "express";
import * as eventController from "../controllers/eventAttendee.controller"
import { sessionMiddleware } from "../middleware";

const router = express.Router();

export default router;