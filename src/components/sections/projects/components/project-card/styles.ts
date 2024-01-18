import { css } from "@styled-system/css";
import { stack } from "@styled-system/patterns";

export const container = stack({
	w: "md",
	gap: "2",
});

export const visual = css({
	w: "full",
	aspectRatio: "wide",
	bgGradient: {
		base: "to-br",
		_dark: "to-tl",
	},
	gradientFrom: "accent.6",
	gradientTo: "accent.10",
	boxShadow: "lg",
});

export const header = stack({
	flexDirection: "row",
	justifyContent: "space-between",
});

export const description = css({
	color: "fg.muted",
});
