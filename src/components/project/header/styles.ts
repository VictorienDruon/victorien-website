import { css } from "@styled-system/css";
import { stack } from "@styled-system/patterns";

export const container = stack({
	gap: "2",
});

export const title = css({
	textStyle: "4xl",
	fontWeight: "bold",
});

export const summary = css({
	color: "fg.muted",
	textStyle: "2xl",
});

export const informations = css({
	color: "fg.subtle",
});
