import { css } from "@styled-system/css";
import { grid, hstack, vstack } from "@styled-system/patterns";

export const container = css({
	position: "sticky",
	top: 0,
	zIndex: "sticky",
	px: "8",
	py: "3",
	backdropFilter: "auto",
	backdropBlur: "xl",
});

export const navbar = grid({
	gridTemplateColumns: { base: 2, md: 3 },
	w: "full",
	maxW: "6xl",
	mx: "auto",
	gap: "4",
});

export const logo = hstack({
	justifyContent: "flex-start",
});

export const pageLinks = hstack({
	hideBelow: "sm",
	justifyContent: { sm: "flex-end", md: "center" },
	gap: "4",
});

export const socialLinks = hstack({
	hideBelow: "md",
	justifyContent: "flex-end",
	gap: "2",
});

export const menuTrigger = hstack({
	hideFrom: "sm",
	justifyContent: "flex-end",
});

export const menu = vstack({
	display: "none",
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: "overlay",
	justifyContent: "center",
	alignItems: "center",
	w: "screen",
	h: "screen",
	p: "8",
	gap: "8",
});

export const menuItem = css({
	textStyle: "2xl",
});

export const menuBg = css({
	position: "absolute",
	top: 0,
	left: 0,
	zIndex: "hide",
	w: "full",
	h: "full",
	bg: "neutral.2",
	opacity: 0.98,
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
