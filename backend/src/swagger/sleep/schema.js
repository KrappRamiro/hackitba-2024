export default {
	type: "object",
	required: ["date", "dailySleepHours", "interruptionLevel", "userFeelsDisorder"],
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
		dailySleepHours: {
			type: "number",
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
			description: "Is the user feeling that they have a sleep disorder",
			example: false,
		},
	},
};
