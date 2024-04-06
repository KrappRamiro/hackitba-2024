import { Request, Response } from "express";
import alimentationModel, { AlimentationDocument } from "../models/alimentation";

export const addAlimentation = async (req: Request, res: Response) => {
	try {
		const newAlimentation = await alimentationModel.create(req.body);
		res.status(201).json(newAlimentation);
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
};

export const getAlimentationsByUserId = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const { last } = req.query;

		let alimentationData: AlimentationDocument | AlimentationDocument[] | null;

		if (last === "true") {
			// Find the last alimentation data for the user
			alimentationData = await alimentationModel.findOne({ userId }).sort({ createdAt: -1 });
		} else {
			// Find all alimentation data for the user
			alimentationData = await alimentationModel.find({ userId });
		}

		if (alimentationData) {
			res.status(200).json(alimentationData);
		} else {
			res.status(404).json({ message: "Alimentation data not found" });
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
