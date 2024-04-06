import mongoose, { Document, Schema, Types } from "mongoose";

interface Exercise {
	walking: string;
	stretching: string;
	gym: string;
}

interface DailyActivity extends Document {
	userId: Types.ObjectId;
	date: Date;
	exercises: Exercise;
}

const dailyActivitySchema: Schema<DailyActivity> = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	exercises: {
		type: {
			walking: { type: String },
			stretching: { type: String },
			gym: { type: String },
		},
		required: true,
	},
});

const DailyActivityModel = mongoose.model<DailyActivity>("DailyActivity", dailyActivitySchema);

export default DailyActivityModel;
