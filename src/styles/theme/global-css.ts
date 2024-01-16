import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
	html: {
		lineHeight: 1.5,
		MozOsxFontSmoothing: "grayscale",
		textRendering: "optimizeLegibility",
		WebkitFontSmoothing: "antialiased",
		WebkitTextSizeAdjust: "100%",
	},
	body: {
		background: "bg.default",
		color: "fg.default",
		_dark: { colorScheme: "dark" },
		userSelect: "none",
	},
	"h1, h2, h3, h4, h5, h6": {
		fontFamily: "heading",
		textStyle: "xl",
	},
	"p, ul, ol, dl, blockquote, span": {
		fontFamily: "body",
		textStyle: "md",
	},
	"*, *::before, *::after": {
		borderColor: "border.default",
		borderStyle: "solid",
		boxSizing: "border-box",
	},
	"*::placeholder": {
		opacity: 1,
		color: "fg.subtle",
	},
	"*::selection": {
		bg: "focusRing",
	},
	".border, .border-t, .border-r, .border-b, .border-l, hr": {
		borderColor: "border.default",
	},
});
