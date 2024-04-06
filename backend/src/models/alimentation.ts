import mongoose, { Document, Schema, Types } from "mongoose";

export interface AlimentationDocument extends Document {
	userId: Types.ObjectId;
	date: Date;
	mealsAmount: number;
	foodAmountFeeling: "not enough food" | "enough food" | "too much food";
}

const alimentationSchema: Schema<AlimentationDocument> = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
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

const AlimentationModel = mongoose.model<AlimentationDocument>("Alimentation", alimentationSchema);

export default AlimentationModel;
