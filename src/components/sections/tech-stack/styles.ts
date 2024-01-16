import { css } from "@styled-system/css";
import { stack } from "@styled-system/patterns";

export const container = stack({
	justifyContent: "center",
	alignItems: "center",
	p: ["8", "16", "24"],
	gap: "8",
	bg: "bg.subtle",
});

export const title = css({
	textStyle: "3xl",
});

export const text = css({
	textStyle: "xl",
	textAlign: "center",
});

export const technologies = stack({
	flexDir: "row",
	flexWrap: "wrap",
	justifyContent: "center",
	alignItems: "center",
	gap: "8",
});
