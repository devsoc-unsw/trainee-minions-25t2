
import { Request, Response } from "express";
import * as userService from "../services/user.services";
import { } from "../constants/types";

async function calculateUserPreferences(req: Request, res: Response) {
  try { // calculate *pref* variable
    // userResultsCollection = [{userID: x, Introversion: x, Extraversion: x, etc. }, {}, {}, {}]
    // you'll need to separate the sets based off their gender, no route for that yet though.
    // so just pretend you're given 4 people or 6 people & take first half to match w second half for now
    const calculatePreferences = await userResultsCollection.find().toArray();

    let pref = []; // preference matrix // [[][]]
    // todo:

    const res = pref;
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export { calculateUserPreferences };