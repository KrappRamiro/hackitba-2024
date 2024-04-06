import mongoose, { model } from "mongoose";

const alimentationSchema = new mongoose.Schema({
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

const alimentationModel = mongoose.model("Alimentation", alimentationSchema);
export default alimentationModel;
