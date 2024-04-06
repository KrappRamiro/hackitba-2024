import mongoose, { Document, Schema, Types } from "mongoose";

export interface SleepDocument extends Document {
	userId: Types.ObjectId;
	date: Date;
	dailySleepHours: number;
	interruptionLevel: "no interruptions" | "a few times" | "too much interruptions";
	userFeelsDisorder: boolean;
}

const sleepSchema: Schema<SleepDocument> = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
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

const SleepModel = mongoose.model<SleepDocument>("Sleep", sleepSchema);

export default SleepModel;
