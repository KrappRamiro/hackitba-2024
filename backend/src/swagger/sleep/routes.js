import sleepTags from "./tags.js";
import sleepSchema from "./schema.js";

export default {
	"/sleeps/": {
		post: {
			tags: [sleepTags.name],
			summary: "Add sleep data",
			description: "Add sleep data for an user",
			requestBody: {
				description: "The sleep data",
				content: {
					"application/json": { schema: sleepSchema },
				},
				required: true,
			},
		},
	},
	"/sleeps/{userId}": {
		get: {
			tags: [sleepTags.name],
			summary: "Get an user's sleep data.",
			description: "Get an user's sleep data based on their user ID",
			parameters: [
				{
					name: "userId",
					in: "path",
					description: "ID of user to looks for its sleeps",
					required: true,
					schema: {
						type: "integer",
						format: "int64",
					},
				},
			],
			responses: {
				200: {
					description: "OK",
					content: {
						"application/json": {
							schema: sleepSchema,
						},
					},
				},
				400: {
					description: "bad request",
				},
			},
		},
	},
};
