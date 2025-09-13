import { Request, Response } from "express";
import * as authService from "../services/user.services";

async function register(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body;
    console.log(req.body)
    const auth = await authService.authRegister(username, email, password);
    res.json(auth);
  } catch (err: any) {
    console.error("Registration failed:", err);
    res.status(400).json({ error: err.message });
  }
}

async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const auth = await authService.authLogin(email, password);
    res.json(auth);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

async function logout(req: Request, res: Response) {
  try {
    const session = req.header("session");
    const auth = authService.authLogout(session as string);
    res.json(auth);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export { register, login, logout };