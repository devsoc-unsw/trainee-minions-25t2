// Maps HTTP requests to the controller function
// e.g. router.post("/user/register", userController.register);

import express, { NextFunction } from "express";
import * as userController from "../controllers/user.controller"
import { sessionMiddleware } from "../middleware";

const router = express.Router();

export default router;