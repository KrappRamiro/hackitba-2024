import { Request, Response } from "express";
import sleepModel from "../models/sleep";

export const addSleep = async (req: Request, res: Response) => {
	try {
		const newSleep = await sleepModel.create(req.body);
		res.status(201).json(newSleep);
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
};

export const getSleepByUserId = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const sleepData = await sleepModel.findOne({ userId });
		if (sleepData) {
			res.status(200).json(sleepData);
		} else {
			res.status(404).json({ message: "Sleep data not found" });
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
