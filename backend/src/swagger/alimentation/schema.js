export default {
	type: "object",
	required: ["userId", "date", "mealsAmount", "foodAmountFeeling"],
	properties: {
		userId: {
			type: "string",
			format: "ObjectId",
			example: "609d91d9e2d6d41768a092d8",
		},
		date: {
			type: "string",
			format: "date",
		},
		mealsAmount: {
			type: "integer",
			description: "How many times a day the user ate",
			format: "int64",
			example: 3,
		},
		foodAmountFeeling: {
			type: "string",
			description: "How did the user feel about its ration size?",
			example: "too much food",
			enum: ["not enough food", "enough food", "too much food"],
		},
	},
};
