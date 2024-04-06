import mongoose, { Document, Schema, Types } from "mongoose";

interface Workout extends Document {
	userId: Types.ObjectId;
	date: Date;
	exercises: Record<string, string>;
}

const workoutSchema: Schema<Workout> = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	exercises: {
		type: Map,
		of: String,
		required: true,
	},
});

const WorkoutModel = mongoose.model<Workout>("Workout", workoutSchema);

export default WorkoutModel;
