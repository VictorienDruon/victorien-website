import { cva } from "@styled-system/css";

export const link = cva({
	base: {
		cursor: "pointer",
	},
	variants: {
		text: {
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
					outlineOffset: "2",
					outlineColor: "focusRing.default",
				},
			},
		},
	},
});
