import { Request, Response } from "express";
import userModel from "../models/user";

export const addUser = async (req: Request, res: Response) => {
	try {
		const newUser = await userModel.create(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
};

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await userModel.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const getUserById = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const userData = await userModel.findById(userId);
		if (userData) {
			res.status(200).json(userData);
		} else {
			res.status(404).json({ message: "User not found" });
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
