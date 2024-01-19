import { css } from "@styled-system/css";
import { stack } from "@styled-system/patterns";

export const container = stack({
	flexDir: ["column", "row"],
	justifyContent: "center",
	alignItems: "center",
	px: ["8", "16", "24"],
	py: ["16", "20", "24"],
	gap: ["4", "6", "8"],
});

export const header = stack({
	zIndex: "docked",
	gap: ["2", "3", "4"],
});

export const title = css({
	color: "accent.10",
	textStyle: ["4xl", "5xl", "5xl", "6xl"],
	textAlign: { smDown: "center" },
});

export const subtitle = css({
	color: "fg.subtle",
	textStyle: ["2xl", "3xl", "3xl", "4xl"],
	textAlign: { smDown: "center" },
});
