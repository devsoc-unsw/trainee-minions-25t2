// Parse request (req.params, req.body, req.query)
// Calls the service layer 

import { Request, Response } from "express";
import * as userService from "../services/user.services";
import { } from "../constants/types";

async function register(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function login(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function logout(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export {register, login, logout};