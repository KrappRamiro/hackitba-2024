import express, { Express, json } from "express";
import dotenv from "dotenv";
// Import middlewares
import { corsMiddleware } from "./middlewares/cors";
// Import routers
import { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import pkgJson from "../package.json";
import swaggerDoc from "./swagger/openapi.js";

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
app.use("/", (req: Request, res: Response): void => {
	res.json({ message: "Hello world!" });
});

export default app;
