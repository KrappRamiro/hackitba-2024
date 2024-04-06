import mongoose, { Document, Schema, Types } from "mongoose";

export interface WorkoutDocument extends Document {
	userId: Types.ObjectId;
	date: Date;
	exercises: Record<string, string>;
}

const workoutSchema: Schema<WorkoutDocument> = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	exercises: {
		type: Map,
		of: String,
		required: true,
	},
});

const WorkoutModel = mongoose.model<WorkoutDocument>("Workout", workoutSchema);

export default WorkoutModel;
