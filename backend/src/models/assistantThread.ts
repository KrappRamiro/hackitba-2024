import mongoose, { Document, Schema } from "mongoose";
import OpenAI from "openai";

// Define the thread schema
interface ThreadDocument extends Document {
	messages: OpenAI.Beta.Threads.ThreadCreateParams.Message[];
	// Add any other properties you want to store for each thread
}

// Define the schema for the thread
const threadSchema: Schema<ThreadDocument> = new Schema({
	messages: [
		{
			text: {
				type: String,
				required: true,
			},
			role: {
				type: String,
				enum: ["user", "assistant"],
				default: "user",
			},
		},
	],
});

// Create a model based on the schema
const ThreadModel = mongoose.model<ThreadDocument>("Thread", threadSchema);

export default ThreadModel;
