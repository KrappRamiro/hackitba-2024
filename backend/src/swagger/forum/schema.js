export default {
	type: "object",
	required: ["title", "description", "topic"],
	properties: {
		title: {
			type: "string",
			example: "Sample Forum Title",
		},
		description: {
			type: "string",
			example: "Description of the forum",
		},
		topic: {
			type: "string",
			example: "Sample Topic",
		},
		tags: {
			type: "array",
			items: {
				type: "string",
				example: "tag1",
			},
		},
		likes: {
			type: "integer",
			example: 0,
		},
		comments: {
			type: "array",
			items: {
				type: "object",
				properties: {
					user: {
						type: "string",
						example: "username1",
					},
					content: {
						type: "string",
						example: "Comment content 1",
					},
					createdAt: {
						type: "string",
						format: "date",
						example: "2024-04-06",
					},
				},
			},
		},
		createdAt: {
			type: "string",
			format: "date",
			example: "2024-04-06",
		},
	},
};
