import { Request, Response } from "express";
import * as quizService from "../services/quiz.services";
import { userQuizResponsesCollection } from "../db";

export interface PersonalityResultsProps {
  E: number;
  I: number;
  O: number;
  S: number;
  R: number;
  C: number;
}

async function saveQuizResponse(req: Request, res: Response) {
  try {
    // const { sessionID, PersonalityResults } = req.body;
    console.log(req.body);
    const { sessionID, E, I, O, S, R, C } = req.body;
    const PersonalityResults: PersonalityResultsProps = {
      E: E,
      I: I,
      O: O,
      S: S,
      R: R,
      C: C,
    }

    const quizResponse = {
      sessionID: sessionID,
      personalityResults: PersonalityResults,
    }

    // await quizService.saveQuizResponse(sessionID, PersonalityResults);
    await userQuizResponsesCollection.insertOne(quizResponse);
    res.json({ success: true });
  } catch (err: any) {
    console.error("Quiz response save failed:", err);
    res.status(400).json({ error: err.message });
  }
}

export { saveQuizResponse };