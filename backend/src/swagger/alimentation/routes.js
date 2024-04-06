import alimentationTags from "./tags";
import alimentationSchema from "./schema";

export default {
	"/alimentations/": {
		post: {
			tags: [alimentationTags.name],
			summary: "Add an alimentation data.",
			description: "Add an alimentation data for a user",
			requestBody: {
				description: "Create a new pet in the store",
				content: {
					"application/json": {
						schema: alimentationSchema,
					},
				},
				required: true,
			},
		},
	},
	"/alimentations/{userId}": {
		get: {
			tags: [alimentationTags.name],
			summary: "Get an user's alimentation data.",
			description: "Get an user's alimentation data based on their user ID",
			parameters: [
				{
					name: "userId",
					in: "path",
					description: "ID of user to looks for its alimentations",
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
				},
				400: {
					description: "bad request",
				},
			},
		},
	},
};
