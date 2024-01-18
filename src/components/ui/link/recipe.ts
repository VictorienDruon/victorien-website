import { cva } from "@styled-system/css";

export const link = cva({
	base: {
		cursor: "pointer",
		color: "fg.default",
		fontFamily: "body",
		fontWeight: "bold",
	},
	variants: {
		isText: {
			true: {
				display: "inline-flex",
				alignItems: "center",
				textDecoration: "underline 0.1em transparent",
				textUnderlineOffset: "0.125em",
				transitionDuration: "normal",
				transitionProperty: "text-decoration-color",
				transitionTimingFunction: "default",
				_hover: {
					textDecorationColor: "border.accent",
				},
				_focus: {
					textDecorationColor: "border.accent",
					outline: "none",
				},
			},
			false: {
				_focusVisible: {
					outlineOffset: "1",
					outlineColor: "focusRing.default",
				},
			},
		},
	},
});
