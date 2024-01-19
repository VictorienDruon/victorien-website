import { circle } from "@styled-system/patterns";

export const logo = circle({
	aspectRatio: 1,
	bgGradient: {
		base: "to-br",
		_dark: "to-tl",
	},
	gradientFrom: "accent.6",
	gradientTo: "accent.10",
});
