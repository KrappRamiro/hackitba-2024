export default {
	type: "object",
	required: ["date", "exercises"],
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
		exercises: {
			type: "object",
			properties: {
				walking: {
					type: "string",
					example: "bastante",
				},
				stretching: {
					type: "string",
					example: "bastante",
				},
				gym: {
					type: "string",
					example: "bastante",
				},
			},
		},
	},
};
