import { css } from "@styled-system/css";
import { hstack } from "@styled-system/patterns";

export const container = hstack({
	position: "relative",
	gap: "0",
});

export const glass = css({
	position: "absolute",
	right: "24",
	zIndex: "docked",
	height: "80",
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
