// routes.js
import emergencyLinesTags from "./tags.js";
import emergencyLinesSchema from "./schema.js";

export default {
	"/emergency-lines": {
		get: {
			tags: [emergencyLinesTags.name],
			summary: "Get suicide prevention emergency lines",
			description: "Get a list of emergency lines for suicide prevention",
			responses: {
				200: {
					description: "OK",
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: emergencyLinesSchema,
							},
						},
					},
				},
				400: {
					description: "Bad request",
				},
			},
		},
	},
};
