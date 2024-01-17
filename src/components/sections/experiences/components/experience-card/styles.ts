import { css } from "@styled-system/css";
import { stack } from "@styled-system/patterns";

export const container = css({
	_last: {
		perspective: "800px",
		"& div": {
			transform: "rotateY(-20deg)",
		},
	},
});

export const card = stack({
	w: "xs",
	aspectRatio: "portrait",
	p: "8",
	gap: "24",
	bgGradient: {
		base: "to-bl",
		_dark: "to-tr",
	},
	gradientFrom: "neutral.2",
	gradientTo: "neutral.5",
	boxShadow: "lg",
});

export const content = stack({
	gap: "2",
});

export const description = css({
	color: "fd.muted",
});

export const date = css({
	color: "fg.subtle",
	textStyle: "sm",
});
