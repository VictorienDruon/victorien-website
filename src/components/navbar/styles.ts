import { css } from "@styled-system/css";
import { grid, hstack } from "@styled-system/patterns";

export const container = css({
	position: "sticky",
	top: 0,
	zIndex: "sticky",
	px: "8",
	py: "3",
	backdropFilter: "auto",
	backdropBlur: "xl",
});

export const containerBg = css({
	position: "absolute",
	top: 0,
	left: 0,
	zIndex: "hide",
	w: "full",
	h: "full",
	bg: "neutral.1",
	opacity: 0.7,
});

export const navbar = grid({
	w: "full",
	maxW: "6xl",
	mx: "auto",
	gridTemplateColumns: "3",
});

export const logo = hstack({
	justifyContent: "flex-start",
});

export const pageLinks = hstack({
	justifyContent: "center",
	gap: "8",
});

export const socialLinks = hstack({
	justifyContent: "flex-end",
	gap: "2",
});
