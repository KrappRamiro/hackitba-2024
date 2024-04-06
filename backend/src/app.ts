import express, { Express, json, Request, Response } from "express";
import dotenv from "dotenv";
// Import middlewares
import { corsMiddleware } from "./middlewares/cors";
// Import routers
import alimentationRouter from "./routes/alimentation";
import sleepRouter from "./routes/sleep";
import workoutRouter from "./routes/workout";
import userRouter from "./routes/user";
import forumRouter from "./routes/forum";

import swaggerUi from "swagger-ui-express";
import pkgJson from "../package.json";
import swaggerDoc from "./swagger/openapi.js";
import mongoose from "mongoose";

//* -------- Initial bootstrapping ------------ //

dotenv.config({ path: `src/environments/.env.${process.env.NODE_ENV || "development"}` });
if (!process.env.DATABASE_URL) {
	throw new Error(
		"Enviroment variable process.env.DATABASE_URL should be defined in src/enviroments/, either in .env.development, or .env.production, depending on the enviroment you are using"
	);
}
mongoose.connect(process.env.DATABASE_URL + process.env.DATABASE_NAME);
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
// TODO: Update swagger docs
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

export default app;
