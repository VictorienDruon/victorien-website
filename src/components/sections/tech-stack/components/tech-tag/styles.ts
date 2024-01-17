import { hstack } from "@styled-system/patterns";

export const container = hstack({
	px: "6",
	py: "3",
	bgGradient: {
		base: "to-bl",
		_dark: "to-tr",
	},
	gradientFrom: "neutral.1",
	gradientTo: "neutral.4",
	boxShadow: "sm",
});
