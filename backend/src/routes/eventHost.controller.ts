import express, { NextFunction } from "express";
import * as eventController from "../controllers/eventHost.controller"
import { sessionMiddleware } from "../middleware";

const router = express.Router();

export default router;