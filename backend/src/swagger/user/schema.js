export default {
	type: "object",
	required: ["username", "email", "password"],
	properties: {
		username: {
			type: "string",
			description: "The username of the user",
			example: "john_doe",
		},
		email: {
			type: "string",
			format: "email",
			description: "The email address of the user",
			example: "john@example.com",
		},
		password: {
			type: "string",
			description: "The password of the user",
			example: "password123",
		},
		createdAt: {
			type: "string",
			format: "date-time",
			description: "The date and time when the user was created",
			example: "2022-04-07T10:00:00Z",
		},
	},
};
