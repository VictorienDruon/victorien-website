import { css } from "@styled-system/css";
import { circle, hstack } from "@styled-system/patterns";

export const container = hstack({
	position: "relative",
	gap: "0",
});

export const glass = css({
	position: "absolute",
	right: ["0", "12", "16", "20"],
	height: ["24", "36", "48", "60"],
	aspectRatio: "golden",
	backdropFilter: "auto",
	backdropBlur: "xl",
});

export const glassBg = css({
	position: "absolute",
	w: "full",
	h: "full",
	bgGradient: {
		base: "to-bl",
		_dark: "to-tr",
	},
	gradientFrom: "neutral.1",
	gradientTo: "neutral.4",
	opacity: 0.3,
});

export const sun = circle({
	position: "relative",
	left: { smDown: "8" },
	zIndex: "hide",
	size: ["32", "48", "64", "80"],
	bgGradient: {
		base: "to-br",
		_dark: "to-tl",
	},
	gradientFrom: "accent.6",
	gradientTo: "accent.10",
});
