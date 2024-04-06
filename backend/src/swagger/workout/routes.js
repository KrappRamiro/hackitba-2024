import workoutTags from "./tags.js";
import workoutSchema from "./schema.js";

export default {
	"/workouts/": {
		post: {
			tags: [workoutTags.name],
			summary: "Add workout data",
			description: "Add workout data for an user",
			requestBody: {
				description: "The workout data",
				content: {
					"application/json": { schema: workoutSchema },
				},
				required: true,
			},
		},
	},
	"/workouts/{userId}": {
		get: {
			tags: [workoutTags.name],
			summary: "Get an user's workout data.",
			description: "Get an user's workout data based on their user ID",
			parameters: [
				{
					name: "userId",
					in: "path",
					description: "ID of user to looks for its workouts",
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
							schema: workoutSchema,
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
