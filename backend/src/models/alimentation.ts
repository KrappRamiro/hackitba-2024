import mongoose, { Document, Schema, Types } from "mongoose";

interface Alimentation extends Document {
	userId: Types.ObjectId;
	date: Date;
	mealsAmount: number;
	foodAmountFeeling: "not enough food" | "enough food" | "too much food";
}

const alimentationSchema: Schema<Alimentation> = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	mealsAmount: {
		type: Number,
		required: true,
	},
	foodAmountFeeling: {
		type: String,
		enum: ["not enough food", "enough food", "too much food"],
		required: true,
	},
});

const AlimentationModel = mongoose.model<Alimentation>("Alimentation", alimentationSchema);

export default AlimentationModel;
