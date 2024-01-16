import { circle, hstack } from "@styled-system/patterns";

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

export const highlight = circle({
	size: "6",
	bgGradient: {
		base: "to-br",
		_dark: "to-tl",
	},
	gradientFrom: "accent.6",
	gradientTo: "accent.10",
});
