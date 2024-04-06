// healthcheck
import healthcheckRoutes from "./healthcheck/routes";
import healthcheckTags from "./healthcheck/tags";

// alimentation
import alimentationRoutes from "./alimentation/routes";
import alimentationTags from "./alimentation/tags";

// sleep
import sleepRoutes from "./sleep/routes";
import sleepTags from "./sleep/tags";

// workout
import workoutRoutes from "./workout/routes";
import workoutTags from "./workout/tags";

// workout
import emergencyLinesRoutes from "./emergencyLines/routes";
import emergencyLinesTags from "./emergencyLines/tags";

// forums
import forumRoutes from "./forum/routes";
import forumTags from "./forum/tags";

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
		sleepTags,
		workoutTags,
		emergencyLinesTags,
		forumTags,
	},
	paths: {
		...healthcheckRoutes,
		...alimentationRoutes,
		...sleepRoutes,
		...workoutRoutes,
		...emergencyLinesRoutes,
		...forumRoutes,
	},
};
