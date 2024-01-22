import { css } from "@styled-system/css";
import { center, grid } from "@styled-system/patterns";

export const container = center();

export const visuals = grid({
	gridTemplateColumns: [1, 2],
	justifyContent: "center",
	gap: "2",
});

export const visual = css({
	w: "md",
	h: "full",
	aspectRatio: "wide",
	objectFit: "contain",
	bgGradient: {
		base: "to-bl",
		_dark: "to-tr",
	},
	gradientFrom: "neutral.2",
	gradientTo: "neutral.5",
});
