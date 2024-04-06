import express, { Express, json, Request, Response } from "express";
import dotenv from "dotenv";
// Import middlewares
import { corsMiddleware } from "./middlewares/cors";
// Import routers
import alimentationRouter from "./routes/alimentation";
import sleepRouter from "./routes/sleep";
import workoutRouter from "./routes/workout";

import swaggerUi from "swagger-ui-express";
import pkgJson from "../package.json";
import swaggerDoc from "./swagger/openapi.js";
import mongoose from "mongoose";

mongoose.connect("mongodb://mongodb:27017/test");
const database = mongoose.connection;

database.on("error", (error: any) => {
	console.error(error);
});

database.once("connected", () => {
	console.log("Database Connected");
});

const app: Express = express();

//* -------- Initial bootstrapping ------------ //
dotenv.config();
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

export default app;
