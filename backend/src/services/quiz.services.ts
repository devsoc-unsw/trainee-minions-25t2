import { userQuizResponsesCollection } from "../db";

export interface QuizResponse {
  sessionID: string;
  PersonalityResults: {
    E: number; 
    I: number; 
    O: number; 
    S: number; 
    R: number; 
    C: number; 
  };
}

export async function saveQuizResponse(
  sessionID: string,
  personalityResults: QuizResponse['PersonalityResults']
): Promise<void> {

  const quizResponse: QuizResponse = {
    sessionID: sessionID,
    PersonalityResults: personalityResults,
  };

  await userQuizResponsesCollection.insertOne(quizResponse);
}