import mongoose, { Document, Schema } from "mongoose";

// Define the forum schema
interface ForumDocument extends Document {
	title: string;
	description: string;
	topic: string;
	tags: string[];
	likes: number;
	comments: {
		user: string; // Assuming user is identified by their username or user ID
		content: string;
		createdAt: Date;
	}[];
	createdAt: Date;
}

// Define the forum schema
const forumSchema: Schema<ForumDocument> = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	topic: {
		type: String,
		required: true,
	},
	tags: {
		type: [String],
		default: [],
	},
	likes: {
		type: Number,
		default: 0,
	},
	comments: [
		{
			user: { type: String, required: true },
			content: { type: String, required: true },
			createdAt: { type: Date, default: Date.now },
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

// Create a Forum model based on the schema
const ForumModel = mongoose.model<ForumDocument>("Forum", forumSchema);

export default ForumModel;
