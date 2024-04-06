import healthcheckRoutes from "./healthcheck/routes";
import healthcheckTags from "./healthcheck/tags";

export default {
	openapi: "3.0.0",
	info: {
		title: "",
		description: "",
		version: "",
	},
	servers: [
		{
			url: "http://localhost:3000",
			description: "Local server",
		},
	],
	tags: {
		healthcheckTags,
	},
	paths: {
		"/healthcheck": healthcheckRoutes,
	},
};
