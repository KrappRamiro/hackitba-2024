import express, { Express, json, Request, Response } from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
// Import middlewares
import { corsMiddleware } from "./middlewares/cors";
// Import routers
import alimentationRouter from "./routes/alimentation";
import sleepRouter from "./routes/sleep";
import workoutRouter from "./routes/workout";
import userRouter from "./routes/user";
import forumRouter from "./routes/forum";
import chatbotRouter from "./routes/chatbot";

import swaggerUi from "swagger-ui-express";
import pkgJson from "../package.json";
import swaggerDoc from "./swagger/openapi.js";
import mongoose from "mongoose";

//* -------- Initial bootstrapping ------------ //
dotenv.config({ path: `src/environments/.env.${process.env.NODE_ENV || "development"}` });
console.info(`Running in ${process.env.NODE_ENV}`);

export const openai = new OpenAI({
	apiKey: `${process.env.OPENAI_API_KEY}`,
});

const connStr = `${process.env.DATABASE_URL}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;
mongoose.connect(connStr);
const database = mongoose.connection;

database.on("error", (error: any) => {
	console.error(error);
});

database.once("connected", () => {
	console.log("Database Connected");
});

const app: Express = express();

app.use(json());
app.use(corsMiddleware());

//* --------- Swagger configuration ---------- //
// Automatically set swaggerdoc version based on package.json
swaggerDoc.info.version = pkgJson.version;
swaggerDoc.info.description = pkgJson.description;
swaggerDoc.info.title = pkgJson.name;

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//* ------------- Endpoints ------------------ //

app.use("/alimentations/", alimentationRouter);
app.use("/sleeps/", sleepRouter);
app.use("/workouts/", workoutRouter);
app.use("/users/", userRouter);
app.use("/forums/", forumRouter);
app.use("/chatbot/", chatbotRouter);

export default app;
