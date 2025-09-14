import dotenv from "dotenv";
import express from "express";
import { PORT } from "../config.json";
import { errorMiddleware } from "./middleware";
import cors from "cors";
import { connectToDatabase, closeDatabaseConnection } from "./db";
import userRoutes from "./routes/user.routes";
import quizRoutes from "./routes/quiz.routes";

dotenv.config();

// server startup
const app = express();
const port = process.env.PORT || PORT;

async function startServer() {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });

    // Routes & middleware
    app.use(express.json());
    app.use(cors());
    app.use(userRoutes);
    app.use(quizRoutes);
    app.use(errorMiddleware);
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
}

startServer();

// closing the server
process.on("SIGINT", async () => {
  console.log("Shutting down server.");
  await closeDatabaseConnection();
  process.exit();
});