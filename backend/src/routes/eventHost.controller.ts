import express, { NextFunction } from "express";
import { createEvent, viewAllEventsByHost } from "../controllers/eventHost.controller"
import { sessionMiddleware } from "../middleware";

const router = express.Router();

router.get('/', viewAllEventsByHost);
router.post('/', createEvent);

export default router;