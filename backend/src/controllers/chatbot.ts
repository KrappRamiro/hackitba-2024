import { Request, Response } from "express";
import { generateCompletion } from "../services/openai";

export const ask = async (req: Request, res: Response) => {
	const message = req.body.message;
	const generation = await generateCompletion(message);
	return res.status(200).json(generation);
};
