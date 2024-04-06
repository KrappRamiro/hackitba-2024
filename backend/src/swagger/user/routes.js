import userTags from "./tags";
import userSchema from "./schema";
export default {
	"/users/": {
		get: {
			tags: [userTags.name],
			summary: "Get all users",
			description: "Get a list of all users",
			responses: {
				200: {
					description: "OK",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: userSchema,
							},
						},
					},
				},
				500: {
					description: "Internal server error",
				},
			},
		},
		post: {
			tags: [userTags.name],
			summary: "Add a new user",
			description: "Create a new user",
			requestBody: {
				description: "User object",
				content: {
					"application/json": {
						schema: userSchema,
					},
				},
				required: true,
			},
			responses: {
				201: {
					description: "Created",
					content: {
						"application/json": {
							schema: userSchema,
						},
					},
				},
				500: {
					description: "Internal server error",
				},
			},
		},
	},
	"/users/{userId}": {
		get: {
			tags: [userTags.name],
			summary: "Get user by ID",
			description: "Get a user by their ID",
			parameters: [
				{
					name: "userId",
					in: "path",
					description: "ID of the user",
					required: true,
					schema: {
						type: "string",
					},
				},
			],
			responses: {
				200: {
					description: "OK",
					content: {
						"application/json": {
							schema: userSchema,
						},
					},
				},
				404: {
					description: "User not found",
				},
				500: {
					description: "Internal server error",
				},
			},
		},
	},
};
