
import { Request, Response } from "express";
import * as userService from "../services/user.services";
import { } from "../constants/types";
import { usersCollection, userQuizResponsesCollection, quizCompatibilityCollection, sessionsCollection } from "../db";

// async function collectCompatibilityResults(req: Request, res: Response) {

// }

async function getUserCompatibilityResults() {
  // TODO: based off the userSession ID <- this should display correctly
}

async function calculateUserPreferences(req: Request, res: Response) {
  try { // calculate *pref* variable
    // userResultsCollection = [{userID: x, Introversion: x, Extraversion: x, etc. }, {}, {}, {}]

    const sessions = await sessionsCollection.find().toArray();
    const users = await usersCollection.find().toArray();
    const quizResults = await userQuizResponsesCollection.find().toArray();

    // join the user data (e.g. name, gender) with their personality results (e.g. introversion, extraversion)
    console.log('im working with THIS:')
    console.log('my quiz results:', quizResults);
    // console.log('sessions:', sessions);

    // Step 1: Create a map from sessionID to userID
    const sessionToUserId = {};
    sessions.forEach(s => {
      sessionToUserId[s.sessionId] = s.userId;
    });
    // console.log('sessiontouserid: ', sessionToUserId);

    // Step 2: Create a map from userID to user info
    const userIdToUser = {};
    users.forEach(u => {
      userIdToUser[u.userId] = u;
    });
    // console.log('useridtouser: ', userIdToUser);

    // Step 3: Collect all user quiz data required for algo
    const allQuizUsersPersonalityData = quizResults.map(result => {
      const userId = sessionToUserId[result.sessionID]; // grabs the userID
      const user = userIdToUser[userId]; // grabs the data of user since we got userID

      // Extract personality scores from the nested personalityResults object
      const scores = result!.personalityResults;

      console.log("CAT GO MEOW: each user's user id and user details", userId, user);

      // Combine user info with personality scores
      if (user) {
        return {
          userId: user.userId, // TODO: can get rid of
          name: user.name,
          gender: user.gender,
          // Personality traits from quiz results (using the letter keys from your data)
          introversion: scores.I || 0,        // I = Introversion
          extraversion: scores.E || 0,        // E = Extraversion  
          spontaneous: scores.S || 0,         // S = Spontaneous
          organized: scores.O || 0,           // O = Organized
          riskTaker: scores.R || 0,           // R = Risk Taker
          cautious: scores.C || 0             // C = Cautious
        };
      }
    }).filter(user => user !== null); // Remove users without personality data

    console.log('allQuizUsersPersonalityData:', allQuizUsersPersonalityData);

    // TODO: check whether enough users to perform matching (usersWithPersonality)
    // Split Users by gender
    console.log('quick check')
    console.log(allQuizUsersPersonalityData.filter(user => user!.gender === "male"))
    const males = allQuizUsersPersonalityData.filter(user => user!.gender === "male");
    console.log('quick check 2')
    const females = allQuizUsersPersonalityData.filter(user => user!.gender === "female");
    console.log('quick check 3')

    console.log('all my males: ', males);
    console.log('all my females: ', females);

    // Use smaller group size for even matching
    const N = Math.min(males.length, females.length);
    const groupA = males.slice(0, N);  // Males
    const groupB = females.slice(0, N); // Females

    let pref: number[][] = []; // preference matrix // [[][]]

    // For each person in groupA, calculate their preferences for people in groupB
    for (let i = 0; i < groupA.length; i++) {
      const personA = groupA[i];
      let compatibilityScores: { index: number, score: number }[] = [];

      for (let j = 0; j < groupB.length; j++) {
        const personB = groupB[j];
        const compatibility = calculateCompatibility(personA, personB);
        compatibilityScores.push({ index: j, score: compatibility });
      }

      // Sort by compatibility (highest first)
      compatibilityScores.sort((a, b) => b.score - a.score);
      const preferences = compatibilityScores.map(item => item.index);

      pref.push(preferences);
    }

    // Do the same for groupB's preferences for groupA
    for (let i = 0; i < groupB.length; i++) {
      const personB = groupB[i];
      let compatibilityScores: { index: number, score: number }[] = [];

      for (let j = 0; j < groupA.length; j++) {
        const personA = groupA[j];
        const compatibility = calculateCompatibility(personB, personA);
        compatibilityScores.push({ index: j, score: compatibility });
      }

      compatibilityScores.sort((a, b) => b.score - a.score);
      const preferences = compatibilityScores.map(item => item.index);

      pref.push(preferences);
    }

    const matches = stableMatching(pref);

    // Convert results back to meaningful user IDs
    const finalMatches = matches.map((manIndex, womanIndex) => {
      return {
        person1: groupB[womanIndex]!.name, // Woman from groupB
        person2: groupA[manIndex]!.name,   // Man from groupA
        compatibility: calculateCompatibility(groupB[womanIndex], groupA[manIndex])
      };
    });

    // const res = {
    //   id: 'DEMO', // FOR DEMO PURPOSES
    //   result: finalMatches,
    // };

    // insert if not found
    // await quizCompatibilityCollection.updateOne(res, { upsert: true }); // new item inserted into db through backend
    await quizCompatibilityCollection.updateOne(
      { id: 'DEMO' },
      { $set: { result: finalMatches } },
      { upsert: true }
    );
    console.log(finalMatches, 'this is my res and it should have been pushed to quizCompatibilityResult');

    const documents = await quizCompatibilityCollection.find().toArray();
    const demoQuizResults = documents.find((dict) => dict.id === 'DEMO') // only displaying DEMO For DEMO
    console.log('the documents: ', documents);
    console.log('the results: ', demoQuizResults);
    // res.json(documents[0]); // get req.
    res.json(demoQuizResults); // directly from database!

    // res.json(res);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Helper function which uses Cosine Similarity to calculate how compatible two people are based on their personality scores
function calculateCompatibility(person1: any, person2: any): number {
  const traits = ['introversion', 'extraversion', 'spontaneous', 'organized', 'riskTaker', 'cautious'];

  let dot = 0, normA = 0, normB = 0;

  for (const t of traits) {
    dot += person1[t] * person2[t];
    normA += person1[t] ** 2;
    normB += person2[t] ** 2;
  }

  return dot / (Math.sqrt(normA) * Math.sqrt(normB)); // 0–1
  // Higher score = more compatible
}

function wPrefersM1OverM(prefer: number[][], w: number, m: number, m1: number, N: number): boolean {
  // w is the woman's index (in the second half of prefer matrix)
  // Check if woman w prefers man m1 over man m
  const womenRowIndex = w + N; // Women's preferences start at row N

  for (let i = 0; i < N; i++) {
    // If m1 comes before m in woman's preference list
    if (prefer[womenRowIndex][i] === m1) {
      return true; // She prefers her current partner m1
    }
    // If m comes before m1 in woman's preference list  
    if (prefer[womenRowIndex][i] === m) {
      return false; // She prefers the new suitor m
    }
  }
  return false;
}

function stableMatching(prefer: number[][]): number[] {
  const N = prefer[0].length; // Number of people in each group

  // Stores partner of women. wPartner[i] indicates the partner assigned to woman i
  const wPartner: number[] = new Array(N).fill(-1);

  // An array to store availability of men. If mFree[i] is false, then man i is free
  const mFree: boolean[] = new Array(N).fill(false);

  let freeCount = N; // Count of free men

  // While there are free men
  while (freeCount > 0) {
    // Find the first free man
    let m: number;
    for (m = 0; m < N; m++) {
      if (mFree[m] === false) {
        break;
      }
    }

    // Go through all women according to man m's preferences
    for (let i = 0; i < N && mFree[m] === false; i++) {
      const w = prefer[m][i]; // Woman that man m prefers at position i

      // If the woman is free
      if (wPartner[w] === -1) {
        wPartner[w] = m;
        mFree[m] = true;
        freeCount--;
      } else {
        // Woman is already engaged
        const currentPartner = wPartner[w];

        // Check if woman prefers new suitor over current partner
        if (!wPrefersM1OverM(prefer, w, m, currentPartner, N)) {
          // Woman prefers new suitor, break current engagement
          wPartner[w] = m;
          mFree[m] = true;
          mFree[currentPartner] = false; // Current partner becomes free
        }
      }
    }
  }
  return wPartner;
}
export { calculateUserPreferences };