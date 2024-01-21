import { css } from "@styled-system/css";
import { stack } from "@styled-system/patterns";

export const container = stack({
	w: ["56", "60", "64"],
	h: "full",
	gap: "2",
});

export const backdrop = css({
	w: "full",
	aspectRatio: "wide",
	objectFit: "cover",
	boxShadow: "lg",
});

export const header = stack({
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	gap: "0",
});

export const title = css({
	color: "fg.default",
	textStyle: ["md", "lg"],
});

export const summary = css({
	color: "fg.muted",
	textStyle: ["sm", "md"],
});
