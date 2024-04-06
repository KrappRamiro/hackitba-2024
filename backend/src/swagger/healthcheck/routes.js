import healtcheckTags from "./tags";

export default {
	get: {
		tags: [healtcheckTags.name],
		summary: "healthcheck",
		description: "Checkea que la API este funcionando",
		parameters: [],
		responses: {
			200: {
				description: "healthcheck okay",
			},
			400: {
				description: "bad request",
			},
		},
	},
};
