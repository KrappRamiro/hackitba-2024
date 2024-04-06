// schema.js
export default {
	type: "object",
	properties: {
		country: {
			type: "string",
			description: "Name of the country",
			example: "United States",
		},
		phoneNumber: {
			type: "string",
			description: "Emergency line phone number",
			example: "1-800-273-TALK (8255)",
		},
		website: {
			type: "string",
			description: "Website for suicide prevention",
			example: "https://emergencyLineslifeline.org/",
		},
	},
};
