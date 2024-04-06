export default {
	type: "object",
	properties: {
		userId: {
			type: "integer",
			format: "int64",
			example: 1283198231782,
		},
		date: {
			type: "string",
			format: "date",
		},
		dailySleepHours: {
			type: "float",
			description: "Amount of hours the user slept that day",
			example: 8,
		},
		interruptionLevel: {
			type: "string",
			description: "How many times the user had their sleep interrupted?",
			example: "a few times",
			enum: ["no interruptions", "a few times", "too much interruptions"],
		},
		userFeelsDisorder: {
			type: "boolean",
			description: "is the user feeling that they have a sleep disorder",
			example: false,
		},
	},
};
