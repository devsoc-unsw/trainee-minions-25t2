import { Request, Response } from "express";
import * as quizService from "../services/quiz.services";

async function saveQuizResponse(req: Request, res: Response) {
  try {
    const { sessionID, PersonalityResults } = req.body;
    console.log(req.body);
    await quizService.saveQuizResponse(sessionID, PersonalityResults);
    res.json({ success: true });
  } catch (err: any) {
    console.error("Quiz response save failed:", err);
    res.status(400).json({ error: err.message });
  }
}

export { saveQuizResponse };