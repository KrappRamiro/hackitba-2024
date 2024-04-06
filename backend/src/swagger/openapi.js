import healthcheckRoutes from "./healthcheck/routes";
import healthcheckTags from "./healthcheck/tags";
import alimentationRoutes from "./alimentation/routes";
import alimentationTags from "./alimentation/tags";

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
		alimentationTags,
	},
	paths: {
		...healthcheckRoutes,
		...alimentationRoutes,
	},
};
