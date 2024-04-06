import forumSchema from "./schema";
import forumTags from "./tags";

export default {
	"/forums/": {
		post: {
			tags: [forumTags.name],
			summary: "Add a forum",
			description: "Add a new forum",
			requestBody: {
				description: "Forum data to be added",
				required: true,
				content: {
					"application/json": {
						schema: forumSchema,
					},
				},
			},
			responses: {
				201: {
					description: "Forum created successfully",
					content: {
						"application/json": {
							schema: forumSchema,
						},
					},
				},
				500: {
					description: "Internal server error",
				},
			},
		},
		get: {
			tags: [forumTags.name],
			summary: "Get all forums",
			description: "Get all forums",
			responses: {
				200: {
					description: "Successful operation",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: forumSchema,
							},
						},
					},
				},
				500: {
					description: "Internal server error",
				},
			},
		},
	},
	"/forums/{forumId}": {
		get: {
			tags: ["Forum"],
			summary: "Get a forum by ID",
			description: "Get a forum by its ID",
			parameters: [
				{
					name: "forumId",
					in: "path",
					description: "ID of the forum to retrieve",
					required: true,
					schema: {
						type: "string",
					},
				},
			],
			responses: {
				200: {
					description: "Successful operation",
					content: {
						"application/json": {
							schema: forumSchema,
						},
					},
				},
				404: {
					description: "Forum not found",
				},
				500: {
					description: "Internal server error",
				},
			},
		},
	},
};
