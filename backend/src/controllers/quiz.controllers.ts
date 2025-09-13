
import { Request, Response } from "express";
import * as userService from "../services/user.services";
import { } from "../constants/types";

async function calculateUserPreferences(req: Request, res: Response) {
  try { // calculate *pref* variable
    // userResultsCollection = [{userID: x, Introversion: x, Extraversion: x, etc. }, {}, {}, {}]
    // you'll need to separate the sets based off their gender, no route for that yet though.
    // so just pretend you're given 4 people or 6 people & take first half to match w second half for now
    const users = await userResultsCollection.find().toArray();

    // Split users into two groups (for now, first half matches with second half)
    const groupA = users.slice(0, Math.floor(users.length / 2));
    const groupB = users.slice(Math.floor(users.length / 2));
    const N = groupA.length;

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
        person1: groupB[womanIndex].userID, // Woman from groupB
        person2: groupA[manIndex].userID,   // Man from groupA
        compatibility: calculateCompatibility(groupB[womanIndex], groupA[manIndex])
      };
    });

    const res = finalMatches;
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