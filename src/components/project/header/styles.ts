import { css } from "@styled-system/css";
import { stack } from "@styled-system/patterns";

export const container = stack({
	gap: ["1", "2"],
});

export const title = css({
	color: "fg.default",
	textStyle: ["2xl", "3xl", "4xl"],
	fontWeight: "bold",
});

export const summary = css({
	color: "fg.muted",
	textStyle: ["lg", "xl", "2xl"],
});

export const informations = css({
	color: "fg.subtle",
	textStyle: ["xs", "sm", "md"],
});
