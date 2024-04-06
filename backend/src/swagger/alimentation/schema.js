export default {
	type: "object",
	properties: {
		userId: {
			type: "integer",
			format: "int64",
			example: 1283198231782,
		},
		mealsAmount: {
			type: "integer",
			description: "How many times a day the user ate",
			format: "int64",
			example: 3,
		},
		foodAmountFeeling: {
			type: "string",
			description: "How did the user feel about it's ration size?",
			example: "too much food",
			enum: ["not enough food", "enough food", "too much food"],
		},
		date: {
			type: "string",
			format: "date",
		},
	},
};
