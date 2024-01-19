import { css } from "@styled-system/css";
import { hstack, stack } from "@styled-system/patterns";

export const container = css({
	p: "8",
});

export const footer = stack({
	maxW: "6xl",
	mx: "auto",
	gap: "4",
});

export const linkGroups = stack({
	flexDir: ["column", "row"],
	justifyContent: { sm: "space-between" },
	alignItems: { smDown: "center" },
});

export const linkGroup = hstack({
	gap: "4",
});

export const copyright = css({
	textAlign: { smDown: "center" },
});
