import mongoose, { Document, Schema, Types } from "mongoose";

interface Sleep extends Document {
	userId: Types.ObjectId;
	date: Date;
	dailySleepHours: number;
	interruptionLevel: "no interruptions" | "a few times" | "too much interruptions";
	userFeelsDisorder: boolean;
}

const sleepSchema: Schema<Sleep> = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	dailySleepHours: {
		type: Number,
		required: true,
	},
	interruptionLevel: {
		type: String,
		enum: ["no interruptions", "a few times", "too much interruptions"],
		required: true,
	},
	userFeelsDisorder: {
		type: Boolean,
		required: true,
	},
});

const SleepModel = mongoose.model<Sleep>("Sleep", sleepSchema);

export default SleepModel;
