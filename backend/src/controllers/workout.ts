import { Request, Response } from "express";
import workoutModel from "../models/workout";

export const addWorkout = async (req: Request, res: Response) => {
	try {
		const newWorkout = await workoutModel.create(req.body);
		res.status(201).json(newWorkout);
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
};

export const getWorkoutByUserId = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const workoutData = await workoutModel.findOne({ userId });
		if (workoutData) {
			res.status(200).json(workoutData);
		} else {
			res.status(404).json({ message: "Workout data not found" });
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
