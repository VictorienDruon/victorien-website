import { circle, hstack } from "@styled-system/patterns";

export const container = hstack({
	px: "6",
	py: "4",
	bg: "bg.muted",
});

export const highlight = circle({
	size: "6",
	bgGradient: "to-br",
	gradientFrom: "accent.6",
	gradientTo: "accent.10",
});
