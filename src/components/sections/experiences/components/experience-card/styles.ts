import { css } from "@styled-system/css";
import { square, stack } from "@styled-system/patterns";

export const container = css({
	_last: {
		perspective: "1200px",
		"& div": {
			transform: "rotateY(-20deg)",
		},
	},
});

export const card = stack({
	w: ["56", "60", "64"],
	h: "full",
	aspectRatio: "portrait",
	p: ["4", "5", "6"],
	gap: ["4", "5", "6"],
	bgGradient: {
		base: "to-bl",
		_dark: "to-tr",
	},
	gradientFrom: "neutral.2",
	gradientTo: "neutral.5",
	boxShadow: "lg",
});

export const visual = square({
	size: ["12", "14", "16"],
	objectFit: "cover",
});

export const content = stack({
	gap: "1",
});

export const title = css({
	color: "fg.default",
	textStyle: ["md", "lg"],
});

export const description = css({
	color: "fd.muted",
	textStyle: ["sm", "md"],
});

export const date = css({
	color: "fg.subtle",
	textStyle: ["xs", "sm"],
});
