import { css } from "@styled-system/css";
import { stack } from "@styled-system/patterns";

export const container = stack({
	justifyContent: "center",
	alignItems: "center",
	p: ["8", "16", "24"],
	gap: "8",
	bg: "bg.muted",
});

export const title = css({
	textStyle: "3xl",
});

export const text = css({
	textStyle: "xl",
	textAlign: "center",
});

export const highlight = css({
	color: "accent.10",
	textStyle: "xl",
});
