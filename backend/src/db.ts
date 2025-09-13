import { MongoClient, Collection, Db, ObjectId } from "mongodb";
import * as dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

let client: MongoClient;
let db: Db;

// Collections
export let sessionsCollection: Collection;
export let usersCollection: Collection;
export let mailsCollection: Collection;
export let dataCollection: Collection;
export let quizPersonalityResultsCollection: Collection;

export async function connectToDatabase() {
  try {
    dotenv.config();
    const atlasUri = process.env.ATLAS_URI;
    if (!atlasUri) {
      throw new Error("ATLAS_URI environment variable is undefined");
    }

    client = new MongoClient(atlasUri);
    await client.connect();

    db = client.db();
    console.log(`Successfully connected to database: ${db.databaseName}`);

    sessionsCollection = db.collection("sessions");
    usersCollection = db.collection("users");
    quizPersonalityResultsCollection = db.collection("quizResults");

    // Initialize collections if they don't exist
    const usersCount = await usersCollection.countDocuments();
    if (usersCount === 0) {
      await usersCollection.insertOne({
        users: [],
      });
    }

    const sessionsCount = await sessionsCollection.countDocuments();
    if (sessionsCount === 0) {
      await sessionsCollection.insertOne({
        sessions: [],
      });
    }

  } catch (error) {
    console.error("Error found when connecting to MongoDB: ", error);
  }
}

export async function closeDatabaseConnection() {
  if (client) {
    await client.close();
    console.log("Database connection closed");
  }
}