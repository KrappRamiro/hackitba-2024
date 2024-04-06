import { Request, Response } from "express";
import alimentationModel from "../models/alimentation";

export const addAlimentation = async (req: Request, res: Response) => {
	try {
		const newAlimentation = await alimentationModel.create(req.body);
		res.status(201).json(newAlimentation);
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
};

export const getAlimentationByUserId = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const alimentationData = await alimentationModel.findOne({ userId });
		if (alimentationData) {
			res.status(200).json(alimentationData);
		} else {
			res.status(404).json({ message: "Alimentation data not found" });
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
