import express from "express";
import * as usersController from "../controllers/user.controller"
import { sessionMiddleware } from "../middleware";

const router = express.Router();

router.post("/user/register", usersController.register);

router.post("/user/login", usersController.login);

router.delete("/user/logout", sessionMiddleware, usersController.logout);

export default router;