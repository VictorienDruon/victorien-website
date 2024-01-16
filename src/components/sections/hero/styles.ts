import { css } from "@styled-system/css";
import { stack } from "@styled-system/patterns";

export const container = stack({
	flexDir: ["column", "row"],
	justifyContent: "center",
	alignItems: "center",
	p: ["8", "16", "24"],
	gap: ["4", "8", "12"],
});

export const header = stack({
	gap: "2",
});

export const title = css({
	color: "accent.10",
	textStyle: "6xl",
});

export const subtitle = css({
	color: "fg.subtle",
	textStyle: "4xl",
});
