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
