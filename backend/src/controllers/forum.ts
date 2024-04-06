import { Request, Response } from "express";
import forumModel from "../models/forum";

export const addForum = async (req: Request, res: Response) => {
	try {
		const newForum = await forumModel.create(req.body);
		res.status(201).json(newForum);
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
};

export const getAllForums = async (req: Request, res: Response) => {
	try {
		const forums = await forumModel.find().sort({ date: -1 });
		res.status(200).json(forums);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const getForumById = async (req: Request, res: Response) => {
	try {
		const { forumId } = req.params;
		const forumData = await forumModel.findById(forumId);
		if (forumData) {
			res.status(200).json(forumData);
		} else {
			res.status(404).json({ message: "Forum not found" });
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
